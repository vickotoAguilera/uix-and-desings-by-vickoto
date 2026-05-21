"use client";

import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { gsap } from 'gsap';
import { Particles } from '@/components/magicui/particles';

// Helper for Balatro hex to vec4
function hexToVec4(hex: string): [number, number, number, number] {
  const hexStr = hex.replace('#', '');
  let r = 0, g = 0, b = 0, a = 1;
  if (hexStr.length === 6) {
    r = parseInt(hexStr.slice(0, 2), 16) / 255;
    g = parseInt(hexStr.slice(2, 4), 16) / 255;
    b = parseInt(hexStr.slice(4, 6), 16) / 255;
  } else if (hexStr.length === 8) {
    r = parseInt(hexStr.slice(0, 2), 16) / 255;
    g = parseInt(hexStr.slice(2, 4), 16) / 255;
    b = parseInt(hexStr.slice(4, 6), 16) / 255;
    a = parseInt(hexStr.slice(6, 8), 16) / 255;
  }
  return [r, g, b, a];
}

const AURORA_VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const AURORA_FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                   \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

const BALATRO_VERT = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const BALATRO_FRAG = `
precision highp float;

#define PI 3.14159265359

uniform float iTime;
uniform vec3 iResolution;
uniform float uSpinRotation;
uniform float uSpinSpeed;
uniform vec2 uOffset;
uniform vec4 uColor1;
uniform vec4 uColor2;
uniform vec4 uColor3;
uniform float uContrast;
uniform float uLighting;
uniform float uSpinAmount;
uniform float uPixelFilter;
uniform float uSpinEase;
uniform bool uIsRotate;
uniform vec2 uMouse;

varying vec2 vUv;

vec4 effect(vec2 screenSize, vec2 screen_coords) {
    float pixel_size = length(screenSize.xy) / uPixelFilter;
    vec2 uv = (floor(screen_coords.xy * (1.0 / pixel_size)) * pixel_size - 0.5 * screenSize.xy) / length(screenSize.xy) - uOffset;
    float uv_len = length(uv);
    
    float speed = (uSpinRotation * uSpinEase * 0.2);
    if(uIsRotate){
       speed = iTime * speed;
    }
    speed += 302.2;
    
    float mouseInfluence = (uMouse.x * 2.0 - 1.0);
    speed += mouseInfluence * 0.1;
    
    float new_pixel_angle = atan(uv.y, uv.x) + speed - uSpinEase * 20.0 * (uSpinAmount * uv_len + (1.0 - uSpinAmount));
    vec2 mid = (screenSize.xy / length(screenSize.xy)) / 2.0;
    uv = (vec2(uv_len * cos(new_pixel_angle) + mid.x, uv_len * sin(new_pixel_angle) + mid.y) - mid);
    
    uv *= 30.0;
    float baseSpeed = iTime * uSpinSpeed;
    speed = baseSpeed + mouseInfluence * 2.0;
    
    vec2 uv2 = vec2(uv.x + uv.y);
    
    for(int i = 0; i < 5; i++) {
        uv2 += sin(max(uv.x, uv.y)) + uv;
        uv += 0.5 * vec2(
            cos(5.1123314 + 0.353 * uv2.y + speed * 0.131121),
            sin(uv2.x - 0.113 * speed)
        );
        uv -= cos(uv.x + uv.y) - sin(uv.x * 0.711 - uv.y);
    }
    
    float contrast_mod = (0.25 * uContrast + 0.5 * uSpinAmount + 1.2);
    float paint_res = min(2.0, max(0.0, length(uv) * 0.035 * contrast_mod));
    float c1p = max(0.0, 1.0 - contrast_mod * abs(1.0 - paint_res));
    float c2p = max(0.0, 1.0 - contrast_mod * abs(paint_res));
    float c3p = 1.0 - min(1.0, c1p + c2p);
    float light = (uLighting - 0.2) * max(c1p * 5.0 - 4.0, 0.0) + uLighting * max(c2p * 5.0 - 4.0, 0.0);
    
    return (0.3 / uContrast) * uColor1 + (1.0 - 0.3 / uContrast) * (uColor1 * c1p + uColor2 * c2p + vec4(c3p * uColor3.rgb, c3p * uColor1.a)) + light;
}

void main() {
    vec2 uv = vUv * iResolution.xy;
    gl_FragColor = effect(iResolution.xy, uv);
}
`;

const CHROM_VERT = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const CHROM_FRAG = `
precision highp float;
uniform float uTime;
uniform vec3 uResolution;
uniform vec3 uBaseColor;
uniform float uAmplitude;
uniform float uFrequencyX;
uniform float uFrequencyY;
uniform vec2 uMouse;
varying vec2 vUv;

vec4 renderImage(vec2 uvCoord) {
    vec2 fragCoord = uvCoord * uResolution.xy;
    vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

    for (float i = 1.0; i < 10.0; i++){
        uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
        uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
    }

    vec2 diff = (uvCoord - uMouse);
    float dist = length(diff);
    float falloff = exp(-dist * 20.0);
    float ripple = sin(10.0 * dist - uTime * 2.0) * 0.03;
    uv += (diff / (dist + 0.0001)) * ripple * falloff;

    vec3 color = uBaseColor / abs(sin(uTime - uv.y - uv.x));
    return vec4(color, 1.0);
}

void main() {
    vec4 col = vec4(0.0);
    int samples = 0;
    for (int i = -1; i <= 1; i++){
        for (int j = -1; j <= 1; j++){
            vec2 offset = vec2(float(i), float(j)) * (1.0 / min(uResolution.x, uResolution.y));
            col += renderImage(vUv + offset);
            samples++;
        }
    }
    gl_FragColor = col / float(samples);
}
`;

export const BackgroundVariants = {
  // 1. Aurora Shader Background
  Aurora: () => {
    const ctnDom = useRef<HTMLDivElement>(null);
    const colorStops = ['#5227FF', '#7cff67', '#5227FF'];
    const amplitude = 1.0;
    const blend = 0.5;
    
    useEffect(() => {
      const ctn = ctnDom.current;
      if (!ctn) return;

      const renderer = new Renderer({
        alpha: true,
        premultipliedAlpha: true,
        antialias: true
      });
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.canvas.style.backgroundColor = 'transparent';

      let program: Program;

      function resize() {
        if (!ctn) return;
        const width = ctn.offsetWidth;
        const height = ctn.offsetHeight;
        renderer.setSize(width, height);
        if (program) {
          program.uniforms.uResolution.value = [width, height];
        }
      }
      window.addEventListener('resize', resize);

      const geometry = new Triangle(gl);
      if (geometry.attributes.uv) {
        delete geometry.attributes.uv;
      }

      const colorStopsArray = colorStops.map(hex => {
        const c = new Color(hex);
        return [c.r, c.g, c.b];
      });

      program = new Program(gl, {
        vertex: AURORA_VERT,
        fragment: AURORA_FRAG,
        uniforms: {
          uTime: { value: 0 },
          uAmplitude: { value: amplitude },
          uColorStops: { value: colorStopsArray },
          uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
          uBlend: { value: blend }
        }
      });

      const mesh = new Mesh(gl, { geometry, program });
      ctn.appendChild(gl.canvas);

      let animateId = 0;
      const update = (t: number) => {
        animateId = requestAnimationFrame(update);
        const time = t * 0.01;
        const speed = 1.0;
        program.uniforms.uTime.value = time * speed * 0.1;
        renderer.render({ scene: mesh });
      };
      animateId = requestAnimationFrame(update);

      resize();

      return () => {
        cancelAnimationFrame(animateId);
        window.removeEventListener('resize', resize);
        if (ctn && gl.canvas.parentNode === ctn) {
          ctn.removeChild(gl.canvas);
        }
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      };
    }, []);

    return <div ref={ctnDom} className="absolute inset-0 w-full h-full overflow-hidden bg-transparent -z-10" />;
  },

  // 2. Balatro Retro Shader Background
  Balatro: () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const color1 = '#DE443B';
    const color2 = '#006BB4';
    const color3 = '#162325';

    useEffect(() => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const renderer = new Renderer();
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 1);

      let program: Program;

      function resize() {
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        if (program) {
          program.uniforms.iResolution.value = [gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height];
        }
      }
      window.addEventListener('resize', resize);
      resize();

      const geometry = new Triangle(gl);
      program = new Program(gl, {
        vertex: BALATRO_VERT,
        fragment: BALATRO_FRAG,
        uniforms: {
          iTime: { value: 0 },
          iResolution: {
            value: [gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height]
          },
          uSpinRotation: { value: -2.0 },
          uSpinSpeed: { value: 7.0 },
          uOffset: { value: [0.0, 0.0] },
          uColor1: { value: hexToVec4(color1) },
          uColor2: { value: hexToVec4(color2) },
          uColor3: { value: hexToVec4(color3) },
          uContrast: { value: 3.5 },
          uLighting: { value: 0.4 },
          uSpinAmount: { value: 0.25 },
          uPixelFilter: { value: 745.0 },
          uSpinEase: { value: 1.0 },
          uIsRotate: { value: false },
          uMouse: { value: [0.5, 0.5] }
        }
      });

      const mesh = new Mesh(gl, { geometry, program });
      let animationFrameId: number;

      function update(time: number) {
        animationFrameId = requestAnimationFrame(update);
        program.uniforms.iTime.value = time * 0.001;
        renderer.render({ scene: mesh });
      }
      animationFrameId = requestAnimationFrame(update);
      container.appendChild(gl.canvas);

      function handleMouseMove(e: MouseEvent) {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = 1.0 - (e.clientY - rect.top) / rect.height;
        program.uniforms.uMouse.value = [x, y];
      }
      container.addEventListener('mousemove', handleMouseMove);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', resize);
        container.removeEventListener('mousemove', handleMouseMove);
        if (gl.canvas.parentNode === container) {
          container.removeChild(gl.canvas);
        }
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      };
    }, []);

    return <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden bg-black -z-10" />;
  },

  // 3. Particles background
  Particles: () => (
    <div className="absolute inset-0 w-full h-full bg-black -z-10">
      <Particles className="absolute inset-0" quantity={120} ease={80} color="#ffffff" refresh={false} />
    </div>
  ),

  // 4. Liquid Chrome Fluid Background
  LiquidChrome: () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const baseColor = [0.1, 0.1, 0.1];

    useEffect(() => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const renderer = new Renderer({ antialias: true });
      const gl = renderer.gl;
      gl.clearColor(1, 1, 1, 1);

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: CHROM_VERT,
        fragment: CHROM_FRAG,
        uniforms: {
          uTime: { value: 0 },
          uResolution: {
            value: new Float32Array([gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height])
          },
          uBaseColor: { value: new Float32Array(baseColor) },
          uAmplitude: { value: 0.3 },
          uFrequencyX: { value: 3.0 },
          uFrequencyY: { value: 3.0 },
          uMouse: { value: new Float32Array([0.5, 0.5]) }
        }
      });
      const mesh = new Mesh(gl, { geometry, program });

      function resize() {
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        const resUniform = program.uniforms.uResolution.value;
        resUniform[0] = gl.canvas.width;
        resUniform[1] = gl.canvas.height;
        resUniform[2] = gl.canvas.width / gl.canvas.height;
      }
      window.addEventListener('resize', resize);
      resize();

      function handleMouseMove(event: MouseEvent) {
        const rect = container.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = 1 - (event.clientY - rect.top) / rect.height;
        const mouseUniform = program.uniforms.uMouse.value;
        mouseUniform[0] = x;
        mouseUniform[1] = y;
      }

      container.addEventListener('mousemove', handleMouseMove);

      let animationId: number;
      function update(t: number) {
        animationId = requestAnimationFrame(update);
        program.uniforms.uTime.value = t * 0.001 * 0.2;
        renderer.render({ scene: mesh });
      }
      animationId = requestAnimationFrame(update);

      container.appendChild(gl.canvas);

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', resize);
        container.removeEventListener('mousemove', handleMouseMove);
        if (gl.canvas.parentElement === container) {
          container.removeChild(gl.canvas);
        }
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      };
    }, []);

    return <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden bg-black -z-10" />;
  },

  // 5. Grid Motion Background
  GridMotion: () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const rows = 10;
      const cols = 10;
      const total = rows * cols;
      
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = 'absolute w-1 h-1 bg-white/10 rounded-full';
        const r = Math.floor(i / cols);
        const c = i % cols;
        dot.style.top = `${(r / rows) * 100}%`;
        dot.style.left = `${(c / cols) * 100}%`;
        container.appendChild(dot);
        
        gsap.to(dot, {
          opacity: 0.4,
          scale: 1.5,
          duration: 2 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 2
        });
      }
      
      return () => {
        if (container) container.innerHTML = '';
      };
    }, []);
    return <div ref={containerRef} className="absolute inset-0 w-full h-full bg-zinc-950 -z-10 overflow-hidden" />;
  },

  // 6. CyberGrid (ADN 04) - Cyberpunk/HUD Tactical
  CyberGrid: () => (
    <div className="absolute inset-0 w-full h-full bg-black -z-10 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(to right, #00f2ff 1px, transparent 1px), linear-gradient(to bottom, #00f2ff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 animate-scanline" />
      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        .animate-scanline {
          animation: scanline 4s linear infinite;
        }
      `}</style>
    </div>
  ),

  // 7. GlassPills (ADN 02) - Glassmorphism
  GlassPills: () => (
    <div className="absolute inset-0 w-full h-full bg-zinc-950 -z-10 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          style={{
            width: Math.random() * 200 + 50 + 'px',
            height: Math.random() * 40 + 20 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `float-pills ${Math.random() * 10 + 10}s linear infinite`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float-pills {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
      `}</style>
    </div>
  ),

  // 8. ClayBlobs (ADN 09) - Claymorphism
  ClayBlobs: () => (
    <div className="absolute inset-0 w-full h-full bg-slate-100 -z-10 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 300 + 200 + 'px',
            height: Math.random() * 300 + 200 + 'px',
            background: i % 2 === 0 ? '#f0abfc' : '#818cf8',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            filter: 'blur(60px)',
            opacity: 0.4,
            boxShadow: 'inset 10px 10px 20px rgba(0,0,0,0.1), 10px 10px 20px rgba(0,0,0,0.05)',
            animation: `blob-move ${Math.random() * 15 + 15}s ease-in-out infinite alternate`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes blob-move {
          from { transform: translate(-10%, -10%) scale(1); }
          to { transform: translate(10%, 10%) scale(1.1); }
        }
      `}</style>
    </div>
  ),

  // 9. NeoMemphis (ADN 08) - Neo-Memphis
  NeoMemphis: () => (
    <div className="absolute inset-0 w-full h-full bg-[#ffde59] -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 60 + 40;
        return (
          <div
            key={i}
            className="absolute border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            style={{
              width: size + 'px',
              height: size + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              backgroundColor: ['#ff5757', '#5ce1e6', '#7ed957', '#ff66c4'][i % 4],
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0%' : '12px',
              transform: `rotate(${Math.random() * 45}deg)`,
              animation: `memphis-float ${Math.random() * 5 + 5}s ease-in-out infinite alternate`
            }}
          />
        );
      })}
      <style jsx>{`
        @keyframes memphis-float {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(-30px) rotate(15deg); }
        }
      `}</style>
    </div>
  ),

  // 10. StarField (ADN 15) - Minimalist Dark
  StarField: () => (
    <div className="absolute inset-0 w-full h-full bg-black -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '100px 100px', opacity: 0.1 }} />
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            width: Math.random() * 2 + 'px',
            height: Math.random() * 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 5 + 's',
            opacity: Math.random()
          }}
        />
      ))}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
      `}</style>
    </div>
  ),

  // 11. RetroGrid (ADN 05) - 8-Bit / Retro Gaming
  RetroGrid: () => (
    <div className="absolute inset-0 w-full h-full bg-[#050505] -z-10 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #ff00ff 1px, transparent 1px), linear-gradient(to bottom, #ff00ff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          transform: 'perspective(500px) rotateX(60deg) translateY(-100px)',
          transformOrigin: 'top'
        }}
      />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-fuchsia-500/20 to-transparent" />
    </div>
  ),

  // 12. AbstractWaves (ADN 06) - Wabi-Sabi / Organic
  AbstractWaves: () => (
    <div className="absolute inset-0 w-full h-full bg-[#faf9f6] -z-10 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="#d2b48c" className="animate-wave-slow" />
        <path d="M0,60 Q25,40 50,60 T100,60 V100 H0 Z" fill="#e5d3b3" className="animate-wave-fast" />
      </svg>
      <style jsx>{`
        @keyframes wave {
          from { transform: translateX(-10%); }
          to { transform: translateX(10%); }
        }
        .animate-wave-slow { animation: wave 10s ease-in-out infinite alternate; }
        .animate-wave-fast { animation: wave 7s ease-in-out infinite alternate-reverse; }
      `}</style>
    </div>
  ),

  // 13. DotPattern (ADN 07) - Swiss / International Style
  DotPattern: () => (
    <div className="absolute inset-0 w-full h-full bg-white -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-20 left-20 w-40 h-40 bg-red-600 opacity-90" />
      <div className="absolute bottom-20 right-20 w-60 h-20 bg-blue-700 opacity-90" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-black opacity-10" />
    </div>
  ),

  // 14. MatrixRain (ADN 04) - Cyberpunk
  MatrixRain: () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
      const fontSize = 16;
      const columns = canvas.width / fontSize;
      const drops: number[] = [];

      for (let i = 0; i < columns; i++) drops[i] = 1;

      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0f0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
          const text = characters.charAt(Math.floor(Math.random() * characters.length));
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      };

      const interval = setInterval(draw, 33);
      return () => clearInterval(interval);
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-black -z-10" />;
  },

  // 15. NoiseGrain (ADN 15) - Minimalist Dark
  NoiseGrain: () => (
    <div className="absolute inset-0 w-full h-full bg-zinc-950 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-transparent" />
    </div>
  ),

  // 16. ScanlineHUD (ADN 04) - Cyberpunk / HUD
  ScanlineHUD: () => (
    <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-cyan-500/20 rounded-full animate-pulse-slow" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.05); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
      `}</style>
    </div>
  ),

  // 17. SoftAura (ADN 02) - Glassmorphism / Aurora
  SoftAura: () => (
    <div className="absolute inset-0 w-full h-full bg-indigo-950 -z-10 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/30 rounded-full filter blur-[100px] animate-aurora-soft" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/30 rounded-full filter blur-[100px] animate-aurora-soft-reverse" />
      <style jsx>{`
        @keyframes aurora-soft {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(20%, 20%) scale(1.2); }
        }
        @keyframes aurora-soft-reverse {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(-20%, -20%) scale(1.2); }
        }
        .animate-aurora-soft { animation: aurora-soft 15s ease-in-out infinite alternate; }
        .animate-aurora-soft-reverse { animation: aurora-soft-reverse 12s ease-in-out infinite alternate; }
      `}</style>
    </div>
  ),

  // 18. Blueprint (ADN 07) - Swiss / Technical
  Blueprint: () => (
    <div className="absolute inset-0 w-full h-full bg-[#003366] -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
      <div className="absolute top-10 left-10 border border-white/30 p-4 text-[10px] font-mono text-white/50 uppercase">
        Project: Neon_Buttons<br/>
        Scale: 1:1<br/>
        Draft: v0.5
      </div>
    </div>
  ),

  // 19. PixelStars (ADN 05) - 8-Bit / Retro
  PixelStars: () => (
    <div className="absolute inset-0 w-full h-full bg-[#000033] -z-10 overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white"
          style={{
            width: '4px',
            height: '4px',
            top: Math.floor(Math.random() * 100) + '%',
            left: Math.floor(Math.random() * 100) + '%',
            boxShadow: '2px 2px 0px rgba(255,255,255,0.5)',
            opacity: Math.random() > 0.5 ? 1 : 0.5,
            animation: `pixel-blink ${Math.random() * 2 + 1}s steps(2) infinite`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes pixel-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </div>
  ),

  // 20. GradientMesh (ADN 02) - Modern SaaS
  GradientMesh: () => (
    <div className="absolute inset-0 w-full h-full bg-white -z-10 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(at 0% 0%, #ff0080 0px, transparent 50%),
            radial-gradient(at 100% 0%, #7928ca 0px, transparent 50%),
            radial-gradient(at 100% 100%, #0070f3 0px, transparent 50%),
            radial-gradient(at 0% 100%, #00dfd8 0px, transparent 50%)
          `,
          filter: 'blur(40px)'
        }}
      />
    </div>
  )
};
