"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Globe } from '@/components/magicui/globe';
import { IconCloud } from '@/components/magicui/icon-cloud';
import { TiltedCard } from '@/components/extensions/tilted-card';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { gsap } from 'gsap';

// 1. Cubes Grid Component (adapted to TS/Tailwind)
interface CubesGridProps {
  gridSize?: number;
  faceColor?: string;
  rippleColor?: string;
}

export function CubesGrid({
  gridSize = 6,
  faceColor = '#1e1b4b',
  rippleColor = '#a855f7'
}: CubesGridProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const userActiveRef = useRef(false);
  const simPosRef = useRef({ x: 0, y: 0 });
  const simTargetRef = useRef({ x: 0, y: 0 });
  const simRAFRef = useRef<number | null>(null);

  const radius = 2.5;
  const maxAngle = 35;
  const enterDur = 0.3;
  const leaveDur = 0.6;

  const tiltAt = useCallback(
    (rowCenter: number, colCenter: number) => {
      if (!sceneRef.current) return;
      sceneRef.current.querySelectorAll('.cube-element').forEach((cube: any) => {
        const r = +cube.dataset.row;
        const c = +cube.dataset.col;
        const dist = Math.hypot(r - rowCenter, c - colCenter);
        if (dist <= radius) {
          const pct = 1 - dist / radius;
          const angle = pct * maxAngle;
          gsap.to(cube, {
            duration: enterDur,
            ease: 'power2.out',
            overwrite: true,
            rotateX: -angle,
            rotateY: angle
          });
        } else {
          gsap.to(cube, {
            duration: leaveDur,
            ease: 'power3.out',
            overwrite: true,
            rotateX: 0,
            rotateY: 0
          });
        }
      });
    },
    [radius, maxAngle, enterDur, leaveDur]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (!sceneRef.current) return;

      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const colCenter = (e.clientX - rect.left) / cellW;
      const rowCenter = (e.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 2500);
    },
    [gridSize, tiltAt]
  );

  const resetAll = useCallback(() => {
    if (!sceneRef.current) return;
    sceneRef.current.querySelectorAll('.cube-element').forEach((cube: any) =>
      gsap.to(cube, {
        duration: leaveDur,
        rotateX: 0,
        rotateY: 0,
        ease: 'power3.out'
      })
    );
  }, [leaveDur]);

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (!sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;

      const colHit = Math.floor((e.clientX - rect.left) / cellW);
      const rowHit = Math.floor((e.clientY - rect.top) / cellH);

      const spreadDelay = 0.08;
      const animDuration = 0.2;
      const holdTime = 0.3;

      const rings: { [key: number]: HTMLElement[] } = {};
      sceneRef.current.querySelectorAll('.cube-element').forEach((cube: any) => {
        const r = +cube.dataset.row;
        const c = +cube.dataset.col;
        const dist = Math.hypot(r - rowHit, c - colHit);
        const ring = Math.round(dist);
        if (!rings[ring]) rings[ring] = [];
        rings[ring].push(cube);
      });

      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach(ring => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap((cube: HTMLElement) => 
            Array.from(cube.querySelectorAll('.cube-face-el'))
          );

          gsap.to(faces, {
            backgroundColor: rippleColor,
            duration: animDuration,
            delay,
            ease: 'power2.out'
          });
          gsap.to(faces, {
            backgroundColor: faceColor,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: 'power2.out'
          });
        });
    },
    [gridSize, faceColor, rippleColor]
  );

  useEffect(() => {
    simPosRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize
    };
    simTargetRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize
    };
    const speed = 0.02;
    const loop = () => {
      if (!userActiveRef.current) {
        const pos = simPosRef.current;
        const tgt = simTargetRef.current;
        pos.x += (tgt.x - pos.x) * speed;
        pos.y += (tgt.y - pos.y) * speed;
        tiltAt(pos.y, pos.x);
        if (Math.hypot(pos.x - tgt.x, pos.y - tgt.y) < 0.1) {
          simTargetRef.current = {
            x: Math.random() * gridSize,
            y: Math.random() * gridSize
          };
        }
      }
      simRAFRef.current = requestAnimationFrame(loop);
    };
    simRAFRef.current = requestAnimationFrame(loop);
    return () => {
      if (simRAFRef.current != null) cancelAnimationFrame(simRAFRef.current);
    };
  }, [gridSize, tiltAt]);

  const cells = Array.from({ length: gridSize });

  return (
    <div 
      className="relative w-full aspect-square max-w-[280px] mx-auto flex items-center justify-center select-none"
      onPointerMove={onPointerMove}
      onPointerLeave={resetAll}
      onClick={onClick}
    >
      <div 
        ref={sceneRef} 
        className="grid w-full h-full gap-[6%]"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          perspective: '1200px'
        }}
      >
        {cells.map((_, r) =>
          cells.map((__, c) => (
            <div 
              key={`${r}-${c}`} 
              className="cube-element relative w-full h-full aspect-square"
              data-row={r}
              data-col={c}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front Face */}
              <div 
                className="cube-face-el absolute w-full h-full border border-white/10 rounded-sm"
                style={{
                  backgroundColor: faceColor,
                  transform: 'translateZ(10px)',
                  transition: 'background-color 0.2s ease'
                }}
              />
              {/* Back Face */}
              <div 
                className="cube-face-el absolute w-full h-full border border-white/10 rounded-sm"
                style={{
                  backgroundColor: faceColor,
                  transform: 'rotateY(180deg) translateZ(10px)'
                }}
              />
              {/* Left Face */}
              <div 
                className="cube-face-el absolute w-full h-full border border-white/10 rounded-sm"
                style={{
                  backgroundColor: faceColor,
                  transform: 'rotateY(-90deg) translateZ(10px)'
                }}
              />
              {/* Right Face */}
              <div 
                className="cube-face-el absolute w-full h-full border border-white/10 rounded-sm"
                style={{
                  backgroundColor: faceColor,
                  transform: 'rotateY(90deg) translateZ(10px)'
                }}
              />
              {/* Top Face */}
              <div 
                className="cube-face-el absolute w-full h-full border border-white/10 rounded-sm"
                style={{
                  backgroundColor: faceColor,
                  transform: 'rotateX(90deg) translateZ(10px)'
                }}
              />
              {/* Bottom Face */}
              <div 
                className="cube-face-el absolute w-full h-full border border-white/10 rounded-sm"
                style={{
                  backgroundColor: faceColor,
                  transform: 'rotateX(-90deg) translateZ(10px)'
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// 2. Rotating 3D Cards Ring (Framer-Motion)
export function ThreeDCarousel() {
  const [rotate, setRotate] = useState(0);
  const items = [
    { title: 'Neon Design', color: 'from-pink-500 to-rose-500' },
    { title: 'WebGL Shaders', color: 'from-indigo-500 to-purple-500' },
    { title: 'Creative UI', color: 'from-cyan-500 to-blue-500' },
    { title: 'Ultra Fast', color: 'from-amber-500 to-orange-500' },
    { title: 'Smooth Motion', color: 'from-emerald-500 to-teal-500' }
  ];

  return (
    <div className="relative w-full h-[320px] flex items-center justify-center overflow-hidden bg-transparent select-none">
      <div className="absolute top-4 left-4 text-xs text-white/40 font-mono pointer-events-none">Arrastra el mouse o haz click para rotar</div>
      <div 
        className="relative w-[180px] h-[120px] transition-transform duration-700 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotate}deg) rotateX(-12deg)`
        }}
        onClick={() => setRotate(prev => prev + 72)}
      >
        {items.map((item, index) => {
          const angle = index * (360 / items.length);
          return (
            <div
              key={index}
              className={`absolute inset-0 rounded-xl bg-gradient-to-tr ${item.color} p-[1px] shadow-2xl shadow-black/80`}
              style={{
                transform: `rotateY(${angle}deg) translateZ(180px)`,
                backfaceVisibility: 'visible'
              }}
            >
              <div className="w-full h-full bg-zinc-950 rounded-[11px] flex flex-col justify-between p-3">
                <span className="text-[10px] text-white/40 font-mono font-bold">0{index+1} / DESIGN</span>
                <span className="text-sm text-white font-bold tracking-tight">{item.title}</span>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px]">✨</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 3. SimpleIcons simple lists
const iconSlugs = [
  "typescript", "javascript", "react", "nodedotjs", "nextdotjs",
  "postgresql", "docker", "git", "github", "figma", "tailwindcss",
  "threejs", "html5", "css3", "sass", "firebase", "vercel"
];
const images = iconSlugs.map(slug => `https://cdn.simpleicons.org/${slug}/${slug}`);

// 4. FloatingGeometries implementation
export function FloatingGeometries() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll('.float-el');
    
    elements.forEach((el, i) => {
      gsap.to(el, {
        y: -30 - (i * 10),
        rotation: 360,
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center bg-transparent" style={{ perspective: '1000px' }}>
      <div className="float-el w-16 h-16 bg-pink-500 rounded-full shadow-[0_0_30px_rgba(236,72,153,0.5)] border-2 border-pink-400/30" style={{ transform: 'translateZ(50px)' }} />
      <div className="float-el absolute w-12 h-12 bg-blue-500 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.5)] border-2 border-blue-400/30 -translate-x-16 translate-y-8" style={{ transform: 'translateZ(100px) rotateX(45deg)' }} />
      <div className="float-el absolute w-20 h-20 border-4 border-yellow-400 rounded-xl shadow-[0_0_30px_rgba(250,204,21,0.3)] translate-x-12 -translate-y-12" style={{ transform: 'translateZ(20px) rotateY(45deg)' }} />
    </div>
  );
}

// 5. PerspectiveTextReveal implementation
export function PerspectiveTextReveal() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-zinc-950/20 overflow-hidden" style={{ perspective: '1200px' }}>
      <motion.div 
        initial={{ rotateX: 90, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl font-black text-white tracking-tighter uppercase italic"
        style={{ transformOrigin: 'bottom' }}
      >
        Future <span className="text-cyan-400">3D</span>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none" />
    </div>
  );
}

// 6. HolographicCard implementation
export function HolographicCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setRotate({ x: -x * 30, y: y * 30 });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      className="relative w-48 h-64 transition-transform duration-200 ease-out flex items-center justify-center"
      style={{
        perspective: '1000px',
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] animate-[shimmer_3s_infinite]" />
        <div className="relative z-10 p-6 flex flex-col h-full justify-between">
          <div className="w-10 h-10 rounded-full bg-white/20" />
          <div className="space-y-2">
            <div className="h-4 w-24 bg-white/20 rounded" />
            <div className="h-4 w-16 bg-white/20 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

// 7. CyberDNAHelix implementation
export function CyberDNAHelix() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ perspective: '800px' }}>
      <div className="relative w-20 h-48" style={{ transformStyle: 'preserve-3d' }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i}
            className="absolute left-1/2 top-1/2 w-20 h-[2px] -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `rotateY(${i * 30}deg) translateZ(40px)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="absolute left-0 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] animate-pulse" />
            <div className="absolute right-0 w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_10px_#ec4899] animate-pulse" />
            <div className="absolute inset-x-3 top-1/2 h-[1px] bg-white/10" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes rotate-dna {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}</style>
      <div className="absolute inset-0 animate-[rotate-dna_10s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }} />
    </div>
  );
}

// 8. ThreeDLayerStack implementation
export function ThreeDLayerStack() {
  const [isHovered, setIsHovered] = useState(false);

  return (    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-48 h-32 flex items-center justify-center cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <div className="relative w-full h-full transition-transform duration-500" style={{ transform: 'rotateX(45deg) rotateZ(-30deg)', transformStyle: 'preserve-3d' }}>
        <div className={`absolute inset-0 bg-indigo-500/40 border border-indigo-400 rounded-xl transition-transform duration-500 shadow-xl ${isHovered ? 'translate-z-[60px]' : 'translate-z-0'}`} />
        <div className={`absolute inset-0 bg-purple-500/40 border border-purple-400 rounded-xl transition-transform duration-500 shadow-xl ${isHovered ? 'translate-z-[30px]' : 'translate-z-0'}`} />
        <div className="absolute inset-0 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl" />
      </div>
    </div>
  );
}

// 9. Infinite3DTunnel implementation
export function Infinite3DTunnel() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black rounded-xl border border-white/5 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '200px' }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i}
            className="absolute border-2 border-cyan-500/30 animate-[tunnel_4s_linear_infinite]"
            style={{
              width: '100%',
              height: '100%',
              animationDelay: `${i * 0.5}s`,
              opacity: 0
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes tunnel {
          0% { transform: translateZ(-500px); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateZ(200px); opacity: 0; }
        }
      `}</style>
      <div className="z-10 text-cyan-400 font-mono text-xs uppercase tracking-[0.3em]">Hyper Speed</div>
    </div>
  );
}

// 10. InteractivePrism implementation
export function InteractivePrism() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-zinc-950/40" style={{ perspective: '1000px' }}>
      <div className="relative w-24 h-24 animate-[spin-prism_8s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/40 to-blue-500/40 border border-white/20 backdrop-blur-sm" style={{ transform: 'rotateY(0deg) translateZ(48px)' }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/40 to-pink-500/40 border border-white/20 backdrop-blur-sm" style={{ transform: 'rotateY(90deg) translateZ(48px)' }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/40 to-orange-500/40 border border-white/20 backdrop-blur-sm" style={{ transform: 'rotateY(180deg) translateZ(48px)' }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/40 to-teal-500/40 border border-white/20 backdrop-blur-sm" style={{ transform: 'rotateY(270deg) translateZ(48px)' }} />
      </div>
      <style>{`
        @keyframes spin-prism {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}

// 11. SolarSystemMini implementation
export function SolarSystemMini() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ perspective: '1000px' }}>
      <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-[0_0_40px_rgba(250,204,21,0.6)]" />
      <div className="absolute w-48 h-48 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg" />
      </div>
      <div className="absolute w-32 h-32 border border-white/5 rounded-full animate-[spin_6s_linear_infinite_reverse]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-400 rounded-full shadow-lg" />
      </div>
    </div>
  );
}

// 12. FloatingVoxel implementation
export function FloatingVoxel() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div className="relative w-16 h-16 animate-bounce" style={{ transformStyle: 'preserve-3d', animationDuration: '3s' }}>
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1" style={{ transform: 'translateZ(8px)' }}>
          <div className="bg-red-500" /><div className="bg-red-600" />
          <div className="bg-red-700" /><div className="bg-red-800" />
        </div>
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1" style={{ transform: 'translateZ(-8px)' }}>
          <div className="bg-red-900" /><div className="bg-red-950" />
          <div className="bg-red-800" /><div className="bg-red-700" />
        </div>
        <div className="absolute inset-0 bg-red-600 rotate-y-90 translate-x-8" />
        <div className="absolute inset-0 bg-red-700 -rotate-y-90 -translate-x-8" />
      </div>
    </div>
  );
}

// 13. PerspectiveProjector implementation
export function PerspectiveProjector() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-zinc-950" style={{ perspective: '1000px' }}>
      <div className="relative w-64 h-40 bg-cyan-500/5 border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.1)] overflow-hidden" style={{ transform: 'rotateX(60deg) rotateZ(-10deg)' }}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-cyan-400/50 animate-[scan_2s_linear_infinite]" />
        <div className="p-4 font-mono text-[8px] text-cyan-400/60 uppercase">
          System.status: active<br/>
          Grid.sync: locked<br/>
          Perspective.v2: on
        </div>
      </div>
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-80px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(80px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// 14. Floating3DShield implementation
export function Floating3DShield() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-zinc-950/20" style={{ perspective: '1000px' }}>
      <div className="relative w-32 h-32 animate-[float-shield_4s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 bg-indigo-500/20 border-2 border-indigo-400/50 rounded-2xl backdrop-blur-md flex items-center justify-center" style={{ transform: 'translateZ(20px)' }}>
          <div className="w-12 h-12 border-2 border-indigo-300 rounded-full animate-pulse" />
        </div>
        <div className="absolute inset-0 bg-indigo-900/40 border border-indigo-700/30 rounded-2xl" style={{ transform: 'translateZ(-20px)' }} />
      </div>
      <style>{`
        @keyframes float-shield {
          0%, 100% { transform: translateY(0) rotateY(0deg); }
          50% { transform: translateY(-20px) rotateY(180deg); }
        }
      `}</style>
    </div>
  );
}

// 15. PerspectiveGridScroll implementation
export function PerspectiveGridScroll() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-zinc-950 rounded-xl flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '300px' }}>
        <div 
          className="w-[200%] h-[200%] bg-[linear-gradient(rgba(139,92,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.2)_1px,transparent_1px)] bg-[size:40px_40px] animate-[grid-scroll_10s_linear_infinite]"
          style={{ transform: 'rotateX(60deg) translateY(-25%)' }}
        />
      </div>
      <div className="z-10 text-white font-black text-4xl tracking-widest opacity-20 italic">RETROWAVE</div>
      <style>{`
        @keyframes grid-scroll {
          from { background-position: 0 0; }
          to { background-position: 0 400px; }
        }
      `}</style>
    </div>
  );
}

// 16. ThreeDIsometricBox implementation
export function ThreeDIsometricBox() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div className="relative w-24 h-24 animate-[iso-rotate_12s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 bg-emerald-500/40 border border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]" style={{ transform: 'rotateY(0deg) translateZ(48px)' }} />
        <div className="absolute inset-0 bg-emerald-600/40 border border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]" style={{ transform: 'rotateY(90deg) translateZ(48px)' }} />
        <div className="absolute inset-0 bg-emerald-700/40 border border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]" style={{ transform: 'rotateX(90deg) translateZ(48px)' }} />
      </div>
      <style>{`
        @keyframes iso-rotate {
          from { transform: rotateX(-35deg) rotateY(0deg); }
          to { transform: rotateX(-35deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}

// 17. GlassOrbital implementation
export function GlassOrbital() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-zinc-950/40 overflow-hidden">
      <div className="relative w-32 h-32 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl flex items-center justify-center shadow-2xl">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 animate-pulse" />
        <div className="absolute w-48 h-48 border border-white/5 rounded-full animate-[spin_8s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_white]" />
        </div>
      </div>
    </div>
  );
}

// 18. CyberneticPillar implementation
export function CyberneticPillar() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div className="relative w-12 h-48 animate-[pillar-rotate_10s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 bg-zinc-900 border-x border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]" style={{ transform: 'rotateY(0deg) translateZ(24px)' }} />
        <div className="absolute inset-0 bg-zinc-900 border-x border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]" style={{ transform: 'rotateY(90deg) translateZ(24px)' }} />
        <div className="absolute inset-x-0 top-0 h-1 bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
      </div>
      <style>{`
        @keyframes pillar-rotate {
          from { transform: rotateX(15deg) rotateY(0deg); }
          to { transform: rotateX(15deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}

// 19. FloatingCardStack implementation
export function FloatingCardStack() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div className="relative w-32 h-44 transition-all duration-500" style={{ transform: 'rotateX(30deg) rotateY(-20deg)', transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow-2xl animate-[card-float_4s_ease-in-out_infinite]" style={{ transform: 'translateZ(40px)' }} />
        <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm animate-[card-float_4s_ease-in-out_infinite_0.5s]" style={{ transform: 'translateZ(20px)' }} />
        <div className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl" />
      </div>
      <style>{`
        @keyframes card-float {
          0%, 100% { transform: translateZ(var(--tz, 40px)) translateY(0); }
          50% { transform: translateZ(var(--tz, 40px)) translateY(-15px); }
        }
      `}</style>
    </div>
  );
}

// 20. NeonPulseRing3D implementation
export function NeonPulseRing3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black/40 rounded-xl" style={{ perspective: '1000px' }}>
      <div className="relative w-48 h-48" style={{ transformStyle: 'preserve-3d' }}>
        {Array.from({ length: 3 }).map((_, i) => (
          <div 
            key={i}
            className="absolute inset-0 border-[3px] border-pink-500 rounded-full shadow-[0_0_25px_rgba(236,72,153,0.6)] animate-[ring-3d-pulse_3s_ease-in-out_infinite]"
            style={{ 
              animationDelay: `${i * 0.4}s`,
              transform: `rotateX(${45 + i * 15}deg) rotateY(${i * 20}deg)`
            }}
          />
        ))}
      </div>
      <div className="absolute z-10 text-white font-mono text-[10px] uppercase tracking-[0.4em] animate-pulse">Core.Locked</div>
      <style>{`
        @keyframes ring-3d-pulse {
          0%, 100% { transform: rotateX(var(--rx, 45deg)) scale(1); opacity: 0.3; }
          50% { transform: rotateX(var(--rx, 45deg)) scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}

// Group all 3D variants together
export const ThreeDVariants = {
  Globe: () => (
    <div className="relative flex h-[350px] w-full items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-zinc-950/40">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Globe Shader Engine</span>
        <span className="text-sm text-white font-bold">Planeta WebGL</span>
      </div>
      <div className="w-[320px] h-[320px] flex items-center justify-center">
        <Globe className="w-full h-full scale-[0.8]" />
      </div>
    </div>
  ),

  IconCloud: () => (
    <div className="relative flex h-[350px] w-full items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-zinc-950/40">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Dynamic Tech Cloud</span>
        <span className="text-sm text-white font-bold">Nube de Iconos 3D</span>
      </div>
      <div className="w-[300px] h-[300px] flex items-center justify-center">
        <IconCloud images={images} />
      </div>
    </div>
  ),

  TiltedCard: () => (
    <div className="relative w-full h-[350px] flex items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 overflow-hidden">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Perspective Gyro Card</span>
        <span className="text-sm text-white font-bold">Giro 3D Perspectiva</span>
      </div>
      <div className="w-[200px] h-[260px] flex items-center justify-center">
        <TiltedCard
          imageSrc="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&q=80"
          altText="3D Perspective Card Demo"
          captionText="Cyber Card 3D"
          containerHeight="220px"
          containerWidth="180px"
          imageHeight="220px"
          imageWidth="180px"
          showTooltip
        />
      </div>
    </div>
  ),

  CubesGrid: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Matrix Interactive Cubes</span>
        <span className="text-sm text-white font-bold">Matriz de Cubos Ondulante</span>
      </div>
      <CubesGrid />
    </div>
  ),

  ThreeDCarousel: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Perspective Rings Carousel</span>
        <span className="text-sm text-white font-bold">Carrusel de Cartas 3D</span>
      </div>
      <ThreeDCarousel />
    </div>
  ),

  FloatingGeometries: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Neo-Memphis Floating 3D</span>
        <span className="text-sm text-white font-bold">Geometrías Flotantes</span>
      </div>
      <FloatingGeometries />
    </div>
  ),

  PerspectiveTextReveal: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Kinetic Perspective Reveal</span>
        <span className="text-sm text-white font-bold">Revelación de Texto 3D</span>
      </div>
      <PerspectiveTextReveal />
    </div>
  ),

  HolographicCard: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Glassmorphism Holographic 3.0</span>
        <span className="text-sm text-white font-bold">Tarjeta Holográfica</span>
      </div>
      <HolographicCard />
    </div>
  ),

  CyberDNAHelix: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Cyberpunk Neural DNA</span>
        <span className="text-sm text-white font-bold">Hélice de ADN Cyber</span>
      </div>
      <CyberDNAHelix />
    </div>
  ),

  ThreeDLayerStack: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Bento Stack Perspective</span>
        <span className="text-sm text-white font-bold">Capas 3D Interactivas</span>
      </div>
      <ThreeDLayerStack />
    </div>
  ),

  Infinite3DTunnel: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Retro 8-Bit Tunnel</span>
        <span className="text-sm text-white font-bold">Túnel Infinito 3D</span>
      </div>
      <Infinite3DTunnel />
    </div>
  ),

  InteractivePrism: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Modern SaaS Prism</span>
        <span className="text-sm text-white font-bold">Prisma Interactivo</span>
      </div>
      <InteractivePrism />
    </div>
  ),

  SolarSystemMini: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Solarpunk Orbital System</span>
        <span className="text-sm text-white font-bold">Sistema Orbital Mini</span>
      </div>
      <SolarSystemMini />
    </div>
  ),

  FloatingVoxel: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Retro Pixel Voxel</span>
        <span className="text-sm text-white font-bold">Cubo Voxel Flotante</span>
      </div>
      <FloatingVoxel />
    </div>
  ),

  PerspectiveProjector: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Tactical HUD Projector</span>
        <span className="text-sm text-white font-bold">Proyector de Perspectiva</span>
      </div>
      <PerspectiveProjector />
    </div>
  ),

  Floating3DShield: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Modern Security 3D</span>
        <span className="text-sm text-white font-bold">Escudo Flotante 3D</span>
      </div>
      <Floating3DShield />
    </div>
  ),

  PerspectiveGridScroll: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Retrowave 80s Grid</span>
        <span className="text-sm text-white font-bold">Grilla en Perspectiva</span>
      </div>
      <PerspectiveGridScroll />
    </div>
  ),

  ThreeDIsometricBox: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Clean SaaS Isometric</span>
        <span className="text-sm text-white font-bold">Cubo Isométrico 3D</span>
      </div>
      <ThreeDIsometricBox />
    </div>
  ),

  GlassOrbital: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Crystal Glass Sphere</span>
        <span className="text-sm text-white font-bold">Orbital de Cristal</span>
      </div>
      <GlassOrbital />
    </div>
  ),

  CyberneticPillar: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Tactical Cyber Pillar</span>
        <span className="text-sm text-white font-bold">Pilar Cibernético 3D</span>
      </div>
      <CyberneticPillar />
    </div>
  ),

  FloatingCardStack: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Bento Stack Floating</span>
        <span className="text-sm text-white font-bold">Stack de Cartas 3D</span>
      </div>
      <FloatingCardStack />
    </div>
  ),

  NeonPulseRing3D: () => (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center rounded-xl border border-white/5 bg-zinc-950/40 p-4">
      <div className="absolute z-10 top-4 left-4 flex flex-col">
        <span className="text-xs text-white/40 font-mono">Cyber Neon Pulse</span>
        <span className="text-sm text-white font-bold">Anillos Pulsantes 3D</span>
      </div>
      <NeonPulseRing3D />
    </div>
  )
};
