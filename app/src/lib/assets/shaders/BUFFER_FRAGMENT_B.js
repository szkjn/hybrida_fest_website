export const BUFFER_FRAGMENT_B = `
uniform vec2 iResolution;

void main() {
    vec2 uv = (gl_FragCoord.xy / iResolution.xy);
    
    vec3 o = vec3(-0.5, 0.3, 0.5);
    
    vec3 col = vec3(smoothstep(0.4, 0.5, length(uv - vec2(0.5, 0.45))));
    
    col += 0.55 + 0.45 * sin(length(uv * 13.6) + o);
    
    col *= smoothstep(0.0, 0.025, length(uv + vec2(-0.5, -0.5)));
    
    gl_FragColor = vec4(col * 1.0, 1.0);
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`;