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

// 6. HUDScanner implementation
export function HUDScanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);
      setCoords({ x, y });

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x,
          y,
          duration: 0.1,
          ease: "none"
        });
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[300px] overflow-hidden bg-zinc-950/80 rounded-xl border border-cyan-500/30 cursor-none select-none">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div ref={cursorRef} className="absolute top-0 left-0 pointer-events-none z-10 flex items-center justify-center">
        <div className="w-12 h-12 border border-cyan-400 -translate-x-1/2 -translate-y-1/2 relative">
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-400/30" />
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-cyan-400/30" />
        </div>
        <div className="ml-8 mt-8 bg-black/80 border border-cyan-500/50 px-2 py-1 rounded text-[10px] font-mono text-cyan-400 whitespace-nowrap">
          X: {coords.x} <br /> Y: {coords.y} <br /> SCAN_ACTIVE
        </div>
      </div>
    </div>
  );
}

// 7. ColorInvert implementation
export function ColorInvert() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x,
          y,
          duration: 0.15,
          ease: "power2.out"
        });
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[300px] overflow-hidden bg-white rounded-xl border border-zinc-200 cursor-none select-none flex items-center justify-center">
      <div className="text-zinc-900 font-black text-4xl tracking-tighter uppercase italic">
        Invert <span className="text-zinc-400">Effect</span>
      </div>
      <div ref={cursorRef} className="absolute top-0 left-0 w-24 h-24 bg-white rounded-full pointer-events-none mix-blend-difference -translate-x-1/2 -translate-y-1/2 z-20" />
    </div>
  );
}

// 8. SquishyFollower implementation
export function SquishyFollower() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const velocity = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      const scaleX = 1 + velocity / 150;
      const scaleY = 1 - velocity / 200;

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x,
          y,
          rotation: angle,
          scaleX,
          scaleY,
          duration: 0.2,
          ease: "power2.out"
        });
      }
      lastPos.current = { x, y };
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[300px] overflow-hidden bg-indigo-950/20 rounded-xl border border-indigo-500/20 cursor-none select-none">
      <div ref={cursorRef} className="absolute top-0 left-0 w-12 h-12 bg-indigo-500 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-indigo-500/40 border-4 border-indigo-400/50" />
    </div>
  );
}

// 9. PixelCursor implementation
export function PixelCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) / 8) * 8;
      const y = Math.floor((e.clientY - rect.top) / 8) * 8;

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x,
          y,
          duration: 0.05,
          ease: "none"
        });
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[300px] overflow-hidden bg-zinc-900 rounded-xl border border-zinc-800 cursor-none select-none">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
      <div ref={cursorRef} className="absolute top-0 left-0 pointer-events-none z-10">
        <div className="w-6 h-6 bg-red-500 border-b-4 border-r-4 border-red-800" />
      </div>
    </div>
  );
}

// 10. GlitchPointer implementation
export function GlitchPointer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [glitch, setGlitch] = useState({ x: 0, y: 0, opacity: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x,
          y,
          duration: 0.1,
          ease: "power1.out"
        });
      }

      if (Math.random() > 0.8) {
        setGlitch({ x: x + (Math.random() - 0.5) * 40, y: y + (Math.random() - 0.5) * 40, opacity: 1 });
        setTimeout(() => setGlitch(prev => ({ ...prev, opacity: 0 })), 50);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[300px] overflow-hidden bg-black rounded-xl border border-purple-500/20 cursor-none select-none">
      <div ref={cursorRef} className="absolute top-0 left-0 w-4 h-4 bg-purple-500 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
      <div 
        className="absolute w-8 h-[2px] bg-cyan-400 pointer-events-none z-10 transition-opacity"
        style={{ left: glitch.x, top: glitch.y, opacity: glitch.opacity }}
      />
      <div 
        className="absolute w-[2px] h-8 bg-pink-500 pointer-events-none z-10 transition-opacity"
        style={{ left: glitch.x + 10, top: glitch.y - 10, opacity: glitch.opacity }}
      />
    </div>
  );
}

// 11. FluidTrail implementation
export function FluidTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const nextId = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = nextId.current++;
    setParticles(prev => [...prev.slice(-15), { id, x, y }]);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full h-full min-h-[300px] overflow-hidden bg-zinc-950 rounded-xl border border-white/5 cursor-none select-none"
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <filter id="fluid-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
        </filter>
        <g filter="url(#fluid-goo)">
          {particles.map((p, i) => (
            <circle 
              key={p.id} 
              cx={p.x} 
              cy={p.y} 
              r={20 - (particles.length - i)} 
              fill="#10b981" 
              className="transition-all duration-300"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

// 12. MagnetLink implementation
export function MagnetLink() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (isLocked) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x,
          y,
          duration: 0.1,
          ease: "power2.out"
        });
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [isLocked]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLocked(true);
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const containerRect = containerRef.current!.getBoundingClientRect();
    
    gsap.to(cursorRef.current, {
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top + rect.height / 2,
      width: rect.width + 10,
      height: rect.height + 10,
      borderRadius: 8,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  };

  const handleMouseLeave = () => {
    setIsLocked(false);
    gsap.to(cursorRef.current, {
      width: 20,
      height: 20,
      borderRadius: "50%",
      duration: 0.3,
      ease: "power2.inOut"
    });
  };

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[300px] overflow-hidden bg-zinc-950 rounded-xl border border-white/5 flex items-center justify-center gap-4 cursor-none select-none">
      <div ref={cursorRef} className="absolute top-0 left-0 w-5 h-5 border-2 border-white pointer-events-none -translate-x-1/2 -translate-y-1/2 z-10" />
      <button 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        className="px-6 py-2 bg-white text-black text-xs font-bold rounded uppercase tracking-widest"
      >
        Magnet A
      </button>
      <button 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        className="px-6 py-2 border border-white text-white text-xs font-bold rounded uppercase tracking-widest"
      >
        Magnet B
      </button>
    </div>
  );
}

// 13. SpotlightCursor implementation
export function SpotlightCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full h-full min-h-[300px] overflow-hidden bg-zinc-900 rounded-xl border border-white/5 flex items-center justify-center select-none cursor-none"
    >
      <div className="grid grid-cols-4 gap-4 p-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-16 h-16 bg-zinc-800 rounded-lg border border-zinc-700" />
        ))}
      </div>
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 100px at ${pos.x}px ${pos.y}px, transparent, rgba(0,0,0,0.9))`
        }}
      />
      <div className="absolute inset-0 pointer-events-none border-2 border-white/20 rounded-xl" />
    </div>
  );
}

// 14. DirectionalArrow implementation
export function DirectionalArrow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x,
          y,
          rotation: angle,
          duration: 0.1,
          ease: "power2.out"
        });
      }
      lastPos.current = { x, y };
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[300px] overflow-hidden bg-zinc-950 rounded-xl border border-white/5 cursor-none select-none">
      <div ref={cursorRef} className="absolute top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

// 15. CircleExpansion implementation
export function CircleExpansion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x,
          y,
          duration: 0.15,
          ease: "power2.out"
        });
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[300px] overflow-hidden bg-yellow-400 rounded-xl border border-black/10 cursor-none select-none flex items-center justify-center">
      <div className="text-black font-black text-6xl opacity-10">NEO-MEMPHIS</div>
      <div ref={cursorRef} className="absolute top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="absolute w-8 h-8 bg-blue-500 rounded-full animate-ping opacity-75" />
        <div className="absolute w-4 h-4 bg-black rounded-full" />
      </div>
    </div>
  );
}

// 16. MorphingCursor implementation
export function MorphingCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isSquare, setIsSquare] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x,
          y,
          duration: 0.2,
          ease: "power3.out"
        });
      }
    };

    const interval = setInterval(() => {
      setIsSquare(prev => !prev);
    }, 2000);

    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[300px] overflow-hidden bg-rose-950/20 rounded-xl border border-rose-500/20 cursor-none select-none flex items-center justify-center">
      <div className="text-rose-500/20 font-bold text-4xl">CLAY MORPH</div>
      <div 
        ref={cursorRef} 
        className={`absolute top-0 left-0 w-10 h-10 bg-rose-500 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out shadow-lg shadow-rose-500/40 ${isSquare ? 'rounded-lg rotate-45' : 'rounded-full rotate-0'}`}
      />
    </div>
  );
}

// 17. ElasticRing implementation
export function ElasticRing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (cursorRef.current) {
        gsap.to(cursorRef.current, { x, y, duration: 0.1, ease: "none" });
      }
      if (ringRef.current) {
        gsap.to(ringRef.current, { x, y, duration: 0.4, ease: "power2.out" });
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[300px] overflow-hidden bg-zinc-950 rounded-xl border border-white/10 cursor-none select-none">
      <div ref={ringRef} className="absolute top-0 left-0 w-12 h-12 border-2 border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-[1px]" />
      <div ref={cursorRef} className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}

// 18. GhostPointer implementation
export function GhostPointer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ghosts, setGhosts] = useState<{ id: number; x: number; y: number }[]>([]);
  const nextId = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = nextId.current++;
    setGhosts(prev => [...prev.slice(-10), { id, x, y }]);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full h-full min-h-[300px] overflow-hidden bg-zinc-900 rounded-xl border border-white/5 cursor-none select-none flex items-center justify-center"
    >
      <div className="font-mono text-white/10 text-8xl uppercase tracking-tighter">Ghost</div>
      {ghosts.map((g, i) => (
        <div 
          key={g.id}
          className="absolute pointer-events-none font-mono text-white transition-opacity duration-500"
          style={{ 
            left: g.x, 
            top: g.y, 
            opacity: i / ghosts.length,
            transform: 'translate(-50%, -50%)',
            fontSize: '14px'
          }}
        >
          { g.id % 2 === 0 ? '<GHOST/>' : '{...}' }
        </div>
      ))}
    </div>
  );
}

// 19. BentoFocus implementation
export function BentoFocus() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCell, setActiveCell] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const col = Math.floor(x / (rect.width / 4));
    const row = Math.floor(y / (rect.height / 3));
    setActiveCell(row * 4 + col);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveCell(null)}
      className="relative w-full h-full min-h-[300px] bg-zinc-950 rounded-xl border border-white/5 p-4 grid grid-cols-4 grid-rows-3 gap-2 cursor-none select-none"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div 
          key={i} 
          className={`rounded-lg border transition-all duration-300 ${activeCell === i ? 'bg-white/10 border-white/40 scale-[1.02]' : 'bg-white/5 border-white/5'}`}
        />
      ))}
      <div className="absolute top-4 left-4 text-[10px] font-mono text-white/40 pointer-events-none uppercase tracking-widest">Bento Grid Focus</div>
    </div>
  );
}

// 20. AuraPulse implementation
export function AuraPulse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x,
          y,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[300px] overflow-hidden bg-emerald-950/20 rounded-xl border border-emerald-500/20 cursor-none select-none flex items-center justify-center">
      <div className="text-emerald-500/10 font-bold text-6xl italic">SOLAR PULSE</div>
      <div ref={cursorRef} className="absolute top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-emerald-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(52,211,153,0.6)]" />
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
  ),

  HUDScanner: () => (
    <HUDScanner />
  ),

  ColorInvert: () => (
    <ColorInvert />
  ),

  SquishyFollower: () => (
    <SquishyFollower />
  ),

  PixelCursor: () => (
    <PixelCursor />
  ),

  GlitchPointer: () => (
    <GlitchPointer />
  ),

  FluidTrail: () => (
    <FluidTrail />
  ),

  MagnetLink: () => (
    <MagnetLink />
  ),

  SpotlightCursor: () => (
    <SpotlightCursor />
  ),

  DirectionalArrow: () => (
    <DirectionalArrow />
  ),

  CircleExpansion: () => (
    <CircleExpansion />
  ),

  MorphingCursor: () => (
    <MorphingCursor />
  ),

  ElasticRing: () => (
    <ElasticRing />
  ),

  GhostPointer: () => (
    <GhostPointer />
  ),

  BentoFocus: () => (
    <BentoFocus />
  ),

  AuraPulse: () => (
    <AuraPulse />
  )
};
