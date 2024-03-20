export const BUFFER_FRAGMENT_A = `
uniform float iTime;
uniform int iFrame;
uniform vec2 iResolution;
uniform vec3 iMouse;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

#define LOD 1.5

#define SPEEDMULT 3.5

#define RADIAL_SAMPLES 5
#define SAMPLERAD 5.5

void main() {
  vec2 uv = (gl_FragCoord.xy / iResolution.xy);
  vec3 off = vec3(1.0 / iResolution.xy, 0.0);
  
  
  vec4 source = texture2D(iChannel0, uv, LOD);
  
  float xsp = source.g - 0.5;
  float ysp = source.b - 0.5;
  
  float xsp_normal = 0.0;
  float ysp_normal = 0.0;
  vec3 normal = vec3(0.0);
  
  
  for (int j = 0; j < RADIAL_SAMPLES; j++) {
      
      float rads = (3.14159*2.0) * (float(j) / float(RADIAL_SAMPLES));
      vec4 samp = texture2D(iChannel0, uv + (SAMPLERAD * off.xy * vec2(sin(rads), cos(rads))), LOD);
      
      xsp_normal += ((samp.g - 0.5) - xsp);
      ysp_normal += ((samp.b - 0.5) - ysp);
      
      normal += vec3((length(samp.gb - 0.5) - length(source.gb - 0.5)) * vec2(sin(rads), cos(rads)), 0.1);
      
  }
  
  normal = normalize(normal);
  xsp += normal.x * -0.25 * source.r;
  ysp += normal.y * -0.25 * source.r;
  
  xsp += xsp_normal / float(RADIAL_SAMPLES);
  ysp += ysp_normal / float(RADIAL_SAMPLES);
  
  vec2 turb = 0.5 - texture2D(iChannel1, uv * 0.2 + vec2(sin(iTime/80.), cos(iTime/80.))).xy;
  xsp += 0.01 * turb.x;
  ysp += 0.01 * turb.y;
  
  vec4 final_samp = texture2D(iChannel0, uv - off.xy * vec2(xsp, ysp) * SPEEDMULT);
  final_samp.r = final_samp.r * 0.995;
  
  xsp = mix(xsp, final_samp.g - 0.5, 0.75);
  ysp = mix(ysp, final_samp.b - 0.5, 0.75);
  
  gl_FragColor = vec4(clamp(vec3(final_samp.r, xsp + 0.5, ysp + 0.5), 0.0, 1.0), 1.0);
// gl_FragColor = texture(iChannel1, uv);
// gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
  
//   EMITTER
      vec2 p = 0.5 + vec2(sin(iTime * 2.8) * 0.1, 0.1 * cos(iTime * 6.66));
      if (iMouse.z > 0.0) p = iMouse.xy;
      float len1 = smoothstep(0.05, 0.0, length(uv - p));
      gl_FragColor.gb += mix(vec2(0.0), normalize(p - 0.5), len1);
      gl_FragColor.r += 0.5 * len1;
      gl_FragColor = clamp(gl_FragColor, 0.0, 1.0);
      //gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
  
//   INIT
      if (iFrame < 2) gl_FragColor = vec4(0.0, 0.5, 0.5, 1.0);
      //gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`;