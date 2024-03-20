<script lang="ts">
    import * as THREE from 'three';
    import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
    import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
    import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
    import { VERTEX } from '$lib/assets/shaders/VERTEX.js';
    import { FRAGMENT_MAIN } from '$lib/assets/shaders/FRAGMENT_MAIN.js';
    import { BUFFER_FRAGMENT_A } from '$lib/assets/shaders/BUFFER_FRAGMENT_A.js';
    import { onMount } from 'svelte';
    import pic1 from '$lib/assets/shaders/11.png';


    onMount(() => {
    // utils
    const clock = new THREE.Clock();
    const mouse = new THREE.Vector3();
    let frameCount = 0;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const liquid = document.getElementById('liquid') as HTMLElement;
    liquid.appendChild(renderer.domElement);

    // creates a WebGLRenderTarget that will be used to store the output of the BufferA shader. 
    // this preserves the rendering results for use in subsequent steps (for the feedback loop).
    let bufferATarget1 = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);
    let bufferATarget2 = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);
    let readBufferA = bufferATarget1;
    let writeBufferA = bufferATarget2;
    // let targetB = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);

    // shader Passes
    const bufferAPass = new ShaderPass(new THREE.ShaderMaterial({
        uniforms: {
            iFrame: { value: frameCount },
            iTime: { value: 0.0 },
            iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            iMouse: { value: mouse },
            iChannel0: { value: null },  // will be defined in the loop render
            iChannel1: { value: new THREE.TextureLoader().load(pic1) }
        },
        vertexShader: VERTEX,
        fragmentShader: BUFFER_FRAGMENT_A
    }));

    // const bufferBPass = new ShaderPass(new THREE.ShaderMaterial({
    //     uniforms: {
    //         iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
    //     },
    //     vertexShader: vertex,
    //     fragmentShader: BufferB
    // }));

    const imagePass = new ShaderPass(new THREE.ShaderMaterial({
    uniforms: {
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        tDiffuse: { value: null },
        iChannel1: { value: new THREE.TextureLoader().load(pic1) },
        iTime: { value: 0.0 },
        iMouse: { value: mouse }
    },
    vertexShader: VERTEX,
    fragmentShader: FRAGMENT_MAIN
}));
    // this pass applies the final shader to the image. 
    // set to true so that this is the last render displayed on the screen.
    imagePass.renderToScreen = true;

    // composer => used to chain together different post-processing shaders
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(bufferAPass);
    // composer.addPass(bufferBPass);
    composer.addPass(imagePass);

    const animate = () => {
    requestAnimationFrame(animate);

    frameCount++;
    const elapsedTime = clock.getElapsedTime();

    // updated uniforms for bufferA
    bufferAPass.uniforms['iTime'].value = elapsedTime;
    bufferAPass.uniforms['iFrame'].value = frameCount;
    bufferAPass.uniforms['iMouse'].value = mouse;
    bufferAPass.uniforms['iChannel0'].value = readBufferA.texture;

    // rendering BufferA into writeBufferA
    renderer.setRenderTarget(writeBufferA);
    renderer.clear();
    bufferAPass.render(renderer, writeBufferA);
    renderer.setRenderTarget(null);

    // tDiffuse update for imagePass
    imagePass.uniforms['tDiffuse'].value = writeBufferA.texture;

    // rendering other passes with EffectComposer
    composer.render();

    // swap buffers for the next iteration
    let temp = readBufferA;
    readBufferA = writeBufferA;
    writeBufferA = temp;
    };

    animate();

    document.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX / window.innerWidth;
        // in GLSL you also need to take into account that the y-axis is reversed relative to the HTML5 canvas context
        // + normalize coord
        mouse.y = 1.0 - event.clientY / window.innerHeight; 
        // use z to indicate whether the mouse is active
        mouse.z = 1.0;
    });

    window.addEventListener('resize', () => {
        // camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    });

</script>

<div id="liquid"></div>


<style>
    #liquid {
        z-index: -10000;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>

