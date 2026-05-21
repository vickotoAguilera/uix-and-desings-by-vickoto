"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';

// 1. BlobCursor implementation
interface BlobCursorProps {
  blobType?: 'circle' | 'square';
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
}

export function BlobCursor({
  blobType = 'circle',
  fillColor = '#8b5cf6',
  trailCount = 3,
  sizes = [60, 45, 30],
  innerSizes = [16, 12, 8],
  innerColor = 'rgba(255,255,255,0.9)'
}: BlobCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      const { left, top } = updateOffset();
      const x = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      const y = 'clientY' in e ? e.clientY : e.touches[0].clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? 0.1 : 0.3 + i * 0.05,
          ease: isLead ? 'power3.out' : 'power2.out',
          overwrite: 'auto'
        });
      });
    },
    [updateOffset]
  );

  useEffect(() => {
    const onResize = () => updateOffset();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [updateOffset]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[300px] overflow-hidden rounded-xl border border-white/5 bg-zinc-950/40 select-none cursor-default"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <div className="absolute top-4 left-4 text-xs text-white/40 font-mono pointer-events-none">Mueve el mouse adentro de esta zona</div>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="blob-glow-filter">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="15" />
          <feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" />
        </filter>
      </svg>

      <div className="pointer-events-none absolute w-full h-full overflow-hidden bg-transparent" style={{ filter: 'url(#blob-glow-filter)' }}>
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={el => { blobsRef.current[i] = el; }}
            className="absolute will-change-transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: sizes[i] || 30,
              height: sizes[i] || 30,
              borderRadius: blobType === 'circle' ? '50%' : '0%',
              backgroundColor: fillColor,
              opacity: 0.6 - i * 0.15,
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
            }}
          >
            <div
              className="absolute"
              style={{
                width: innerSizes[i] || 10,
                height: innerSizes[i] || 10,
                top: ((sizes[i] || 30) - (innerSizes[i] || 10)) / 2,
                left: ((sizes[i] || 30) - (innerSizes[i] || 10)) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === 'circle' ? '50%' : '0%'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. ClickSpark implementation
interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
}

export function ClickSpark({
  sparkColor = '#a855f7',
  sparkSize = 12,
  sparkRadius = 20,
  sparkCount = 10,
  duration = 450
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<{ x: number; y: number; angle: number; startTime: number }[]>([]);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    const ro = new ResizeObserver(resizeCanvas);
    ro.observe(parent);
    resizeCanvas();

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const draw = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter(spark => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const eased = progress * (2 - progress); // ease-out

        const distance = eased * sparkRadius;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationId);
  }, [sparkColor, sparkSize, sparkRadius, duration]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = performance.now();
    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now
    }));

    sparksRef.current.push(...newSparks);
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full h-full min-h-[300px] bg-zinc-950/40 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center cursor-pointer select-none"
    >
      <div className="absolute top-4 left-4 text-xs text-white/40 font-mono pointer-events-none">Haz click en cualquier lado de este panel</div>
      <div className="text-white/60 text-sm font-medium pointer-events-none">Click para generar chispas ✨</div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none block"
      />
    </div>
  );
}

// 3. ImageTrail implementation
const TRAIL_IMAGES = [
  'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=200&q=80',
  'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=200&q=80',
  'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=200&q=80',
  'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=200&q=80',
  'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=200&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80'
];

export function ImageTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useState<{ id: number; x: number; y: number; img: string }[]>([]);
  const nextId = useRef(0);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - lastMousePos.current.x;
    const dy = y - lastMousePos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 70) {
      const img = TRAIL_IMAGES[nextId.current % TRAIL_IMAGES.length];
      const newId = nextId.current++;

      setTrail(prev => [...prev, { id: newId, x, y, img }]);
      lastMousePos.current = { x, y };

      setTimeout(() => {
        setTrail(prev => prev.filter(t => t.id !== newId));
      }, 800);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full min-h-[300px] overflow-hidden bg-zinc-950/40 rounded-xl border border-white/5 flex items-center justify-center cursor-crosshair select-none"
    >
      <div className="absolute top-4 left-4 text-xs text-white/40 font-mono pointer-events-none font-medium">Mueve el cursor rápido en esta área</div>
      <div className="text-white/30 text-sm font-semibold pointer-events-none">Visual Trail Hover Effect</div>
      {trail.map(t => (
        <div
          key={t.id}
          className="absolute pointer-events-none animate-fade-out"
          style={{
            left: t.x,
            top: t.y,
            width: '80px',
            height: '100px',
            backgroundImage: `url(${t.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            border: '2px solid rgba(255,255,255,0.2)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
            transform: 'translate(-50%, -50%) scale(1)',
            transformOrigin: 'center center',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            animation: 'trail-decay 0.8s forwards'
          }}
        />
      ))}
      <style>{`
        @keyframes trail-decay {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.2) rotate(15deg); }
        }
      `}</style>
    </div>
  );
}

// 4. TargetCursor implementation
export function TargetCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [targetRect, setTargetRect] = useState<{ left: number; top: number; width: number; height: number } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (cursorRef.current && !hovered) {
        gsap.to(cursorRef.current, {
          x,
          y,
          xPercent: -50,
          yPercent: -50,
          duration: 0.15,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [hovered]);

  const handleTargetEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setHovered(true);
    const button = e.currentTarget;
    
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: button.offsetLeft + button.offsetWidth / 2,
        y: button.offsetTop + button.offsetHeight / 2,
        xPercent: -50,
        yPercent: -50,
        width: button.offsetWidth + 12,
        height: button.offsetHeight + 12,
        borderRadius: 8,
        duration: 0.3,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    }
  };

  const handleTargetLeave = () => {
    setHovered(false);
    setTargetRect(null);
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        width: 16,
        height: 16,
        borderRadius: '50%',
        xPercent: -50,
        yPercent: -50,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[300px] overflow-hidden bg-zinc-950/40 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-6 cursor-none select-none"
    >
      <div className="absolute top-4 left-4 text-xs text-white/40 font-mono pointer-events-none">Coloca el cursor sobre los botones</div>

      <div 
        ref={cursorRef}
        className="absolute top-0 left-0 w-4 h-4 rounded-full border-2 border-cyan-400 pointer-events-none will-change-transform z-10"
        style={{ boxShadow: '0 0 10px rgba(34,211,238,0.4)' }}
      />

      <button
        onMouseEnter={handleTargetEnter}
        onMouseLeave={handleTargetLeave}
        className="px-6 py-2 rounded bg-zinc-900 border border-zinc-800 text-white text-sm font-semibold transition-all hover:bg-zinc-800/80 active:scale-95"
      >
        Target Button A
      </button>

      <button
        onMouseEnter={handleTargetEnter}
        onMouseLeave={handleTargetLeave}
        className="px-6 py-2 rounded bg-zinc-900 border border-zinc-800 text-white text-sm font-semibold transition-all hover:bg-zinc-800/80 active:scale-95"
      >
        Target Button B
      </button>
    </div>
  );
}

// 5. MagneticElement implementation
interface MagneticElementProps {
  children: React.ReactNode;
  magnetStrength?: number;
  padding?: number;
}

export function MagneticElement({
  children,
  magnetStrength = 3,
  padding = 70
}: MagneticElementProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !innerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < rect.width / 2 + padding && distY < rect.height / 2 + padding) {
        setIsActive(true);
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [magnetStrength, padding]);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
    >
      <div
        ref={innerRef}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isActive ? 'transform 0.15s ease-out' : 'transform 0.4s ease-in-out',
          willChange: 'transform'
        }}
      >
        {children}
      </div>
    </div>
  );
}

// Group all Cursor variants together
export const CursorVariants = {
  BlobCursor: () => (
    <BlobCursor />
  ),

  ClickSpark: () => (
    <ClickSpark />
  ),

  ImageTrail: () => (
    <ImageTrail />
  ),

  TargetCursor: () => (
    <TargetCursor />
  ),

  MagneticElement: () => (
    <div className="w-full h-full min-h-[300px] bg-zinc-950/40 border border-white/5 rounded-xl flex items-center justify-center relative select-none">
      <div className="absolute top-4 left-4 text-xs text-white/40 font-mono pointer-events-none">Pasa el cursor cerca de la esfera</div>
      <MagneticElement magnetStrength={2} padding={90}>
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-indigo-500/30 cursor-pointer hover:brightness-110 active:scale-95 transition-all">
          Imán 🧲
        </div>
      </MagneticElement>
    </div>
  )
};
