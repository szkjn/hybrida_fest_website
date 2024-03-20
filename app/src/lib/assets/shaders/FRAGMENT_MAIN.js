export const FRAGMENT_MAIN = `
    uniform vec2 iResolution;
    uniform sampler2D tDiffuse;
    uniform sampler2D iChannel1;

    #define RADIAL_SAMPLES 5
    #define SAMPLERAD 5.5

    void main() {

        vec2 uv = (gl_FragCoord.xy / iResolution.xy);

        vec3 off = vec3(1.0 / iResolution.xy, 0.0);


        vec3 col = texture2D(tDiffuse, uv).rgb;

        vec3 neo_normal = vec3(0.0);

        for (int j = 0; j < RADIAL_SAMPLES; j++) {
            
            float rads = (3.14159*2.0) * (float(j) / float(RADIAL_SAMPLES));
            vec4 samp = texture2D(tDiffuse, uv + (SAMPLERAD * off.xy * vec2(sin(rads), cos(rads))));
            
            neo_normal += vec3((samp.r + length(samp.gb - 0.5) - length(col.gb - 0.5)) * vec2(sin(rads), cos(rads)), 0.25);
            
        }

        neo_normal = normalize(neo_normal);

        vec3 matcap = texture2D(iChannel1, 0.5 - 0.5 * neo_normal.xy).rgb;

        // display with color filter
        //vec3 baseColor = vec3(1.0, 1.0, 1.0); // Couleur bleue
        //gl_FragColor = vec4(mix(matcap * mix(0.75, 1.5, col.r), baseColor, 0.5), 1.0);

        // original return
        //gl_FragColor = vec4(matcap * mix(0.75, 1.5, col.r), 1.0);

        //gl_FragColor = texture(tDiffuse, uv);

        // display only matcap
        // gl_FragColor = vec4(texture2D(iChannel1, uv).rgb, 1.0) * step(length(uv - 0.5), 0.5);

        // display only speed
        // gl_FragColor = vec4(texture2D(tDiffuse, uv).rgb, 1.0);

        
        gl_FragColor = vec4(matcap, 1.0);
    }
`;