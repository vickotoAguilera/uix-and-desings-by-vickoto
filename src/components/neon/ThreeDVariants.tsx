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
  )
};
