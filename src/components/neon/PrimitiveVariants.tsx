"use client";

import React from 'react';
import { SpotlightCard } from '@/components/extensions/spotlight-card';
import { BorderTrail } from '@/components/extensions/border-trail';
import { GlowEffectButton } from '@/components/extensions/glow-effect-button';
import { GlitchText } from '@/components/extensions/glitch-text';
import { LiquidButton } from '@/components/extensions/liquid-button';

import { motion, AnimatePresence } from 'framer-motion';

// 6. MagneticButton implementation
export function MagneticButton({ children }: { children: React.ReactNode }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="px-8 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-white font-bold cursor-pointer hover:bg-zinc-800 transition-colors"
    >
      {children}
    </motion.div>
  );
}

// 7. GlassBadge implementation
export function GlassBadge({ text }: { text: string }) {
  return (
    <div className="relative group cursor-default">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
      <div className="relative px-4 py-1.5 bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[11px] font-mono font-bold text-white/80 tracking-widest uppercase">{text}</span>
      </div>
    </div>
  );
}

// 8. PixelProgress implementation
export function PixelProgress({ progress = 65 }: { progress?: number }) {
  return (
    <div className="w-full max-w-[200px] flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">System Load</span>
        <span className="text-[10px] font-mono text-cyan-400">{progress}%</span>
      </div>
      <div className="h-4 bg-zinc-900 border-2 border-zinc-800 p-0.5 flex">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          style={{ backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)', backgroundSize: '8px 8px' }}
        />
      </div>
    </div>
  );
}

// 9. FloatingChip implementation
export function FloatingChip({ label }: { label: string }) {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-lg flex items-center gap-2 shadow-lg shadow-indigo-500/5"
    >
      <div className="w-1 h-1 bg-indigo-400 rounded-full" />
      <span className="text-[10px] font-medium text-indigo-300 uppercase tracking-wide">{label}</span>
    </motion.div>
  );
}

// 10. ShimmerText implementation
export function ShimmerText({ children }: { children: string }) {
  return (
    <div className="relative overflow-hidden group">
      <span className="text-xl font-bold text-zinc-600 transition-colors group-hover:text-white duration-300">{children}</span>
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
      />
    </div>
  );
}

// 11. DotMatrixGrid implementation
export function DotMatrixGrid() {
  return (
    <div className="grid grid-cols-4 gap-1">
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
          className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
        />
      ))}
    </div>
  );
}

// 12. NeumorphicStatus implementation
export function NeumorphicStatus() {
  return (
    <div className="w-10 h-10 rounded-full bg-zinc-900 shadow-[4px_4px_8px_rgba(0,0,0,0.5),-4px_-4px_8px_rgba(255,255,255,0.02)] flex items-center justify-center border border-white/5">
      <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.4),0_0_10px_rgba(16,185,129,0.4)] animate-pulse" />
    </div>
  );
}

// 13. TiltedBorder implementation
export function TiltedBorder() {
  return (
    <div className="relative p-6 bg-zinc-950 border-2 border-zinc-800 rounded-xl overflow-hidden group">
      <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      <div className="absolute top-0 right-0 w-2 h-full bg-indigo-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      <span className="text-sm font-mono text-zinc-400 group-hover:text-white transition-colors">ISOMETRIC_BOX</span>
    </div>
  );
}

// 14. GlowDivider implementation
export function GlowDivider() {
  return (
    <div className="w-full max-w-[200px] h-[1px] bg-zinc-800 relative">
      <motion.div 
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)]"
      />
    </div>
  );
}

// 15. MinimalistTag implementation
export function MinimalistTag({ text }: { text: string }) {
  return (
    <div className="px-2 py-0.5 border border-zinc-700 rounded text-[9px] font-mono text-zinc-500 uppercase tracking-tighter hover:border-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
      # {text}
    </div>
  );
}

// 16. LiquidSwitch implementation
export function LiquidSwitch() {
  const [isOn, setIsOn] = React.useState(false);
  return (
    <div 
      onClick={() => setIsOn(!isOn)}
      className={`w-14 h-8 rounded-full p-1 cursor-pointer transition-colors duration-500 ${isOn ? 'bg-emerald-500' : 'bg-zinc-800'}`}
    >
      <motion.div
        animate={{ x: isOn ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          animate={{ scale: isOn ? 1 : 0 }}
          className="w-full h-full bg-emerald-400/20 rounded-full blur-sm" 
        />
      </motion.div>
    </div>
  );
}

// 17. CyberKbd implementation
export function CyberKbd({ char }: { char: string }) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-cyan-500 blur-sm opacity-0 group-hover:opacity-20 transition-opacity" />
      <div className="px-3 py-2 bg-zinc-900 border-b-4 border-r-4 border-black rounded flex items-center justify-center min-w-[40px] active:translate-y-1 active:border-b-0 active:border-r-0 transition-all">
        <span className="text-sm font-mono font-black text-cyan-400 group-hover:text-cyan-300">{char}</span>
      </div>
    </div>
  );
}

// 18. GlassyLoader implementation
export function GlassyLoader() {
  return (
    <div className="flex gap-1.5 items-end h-8">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ height: [8, 24, 8] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          className="w-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
        />
      ))}
    </div>
  );
}

// 19. NeoBrutalistCard implementation
export function NeoBrutalistCard({ title }: { title: string }) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-yellow-400 translate-x-2 translate-y-2 rounded-lg border-2 border-black group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
      <div className="relative px-6 py-4 bg-white border-2 border-black rounded-lg">
        <h4 className="text-sm font-black text-black uppercase">{title}</h4>
      </div>
    </div>
  );
}

// 20. KineticLabel implementation
export function KineticLabel({ text }: { text: string }) {
  return (
    <div className="overflow-hidden bg-zinc-900 border border-zinc-800 rounded px-4 py-2 group cursor-pointer">
      <motion.div
        whileHover={{ y: -20 }}
        className="flex flex-col h-5"
      >
        <span className="text-xs font-bold text-zinc-500 uppercase transition-colors group-hover:text-cyan-400">{text}</span>
        <span className="text-xs font-bold text-white uppercase">{text}</span>
      </motion.div>
    </div>
  );
}

export const PrimitiveVariants = {
  SpotlightCard: () => (
    <SpotlightCard className="w-full max-w-[320px] mx-auto border border-zinc-800 bg-zinc-950/80 rounded-2xl p-6 relative group overflow-hidden">
      <div className="relative z-10 flex flex-col gap-2">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 01</span>
        <h3 className="text-lg font-bold text-white tracking-tight">Spotlight Card</h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Pasa el cursor por encima para ver un haz de luz sutil persiguiendo dinámicamente tus movimientos.
        </p>
        <div className="mt-4 w-fit px-3 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-300 font-mono">
          Reflector UIX
        </div>
      </div>
    </SpotlightCard>
  ),

  BorderTrail: () => (
    <div className="relative w-full max-w-[320px] mx-auto p-[1px] rounded-2xl bg-zinc-950 overflow-hidden border border-zinc-800/50">
      <BorderTrail size={120} className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
      <div className="relative bg-zinc-950/90 rounded-[15px] p-6 flex flex-col gap-2 z-10">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 02</span>
        <h3 className="text-lg font-bold text-white tracking-tight">Border Trail</h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Un haz de luz fluida recorre infinitamente el contorno de esta tarjeta utilizando máscaras CSS modernas.
        </p>
      </div>
    </div>
  ),

  GlowEffectButton: () => (
    <div className="w-full flex items-center justify-center py-8">
      <div className="flex flex-col items-center gap-4">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 03</span>
        <GlowEffectButton />
      </div>
    </div>
  ),

  GlitchText: () => (
    <div className="w-full flex flex-col items-center justify-center p-6 bg-zinc-950/50 rounded-xl border border-white/5 min-h-[140px]">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">PRIMITIVA 04</span>
      <GlitchText
        speed={0.8}
        enableShadows
        className="text-2xl font-black tracking-widest text-cyan-400 font-mono"
      >
        SISTEMA CORRUPTO
      </GlitchText>
    </div>
  ),

  LiquidButton: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4 bg-transparent">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 05</span>
      <LiquidButton 
        delay="0.4s" 
        fillHeight="100%" 
        color="#a855f7" 
        bgColor="#0c0a09"
        className="border-purple-500/20 hover:text-black font-bold tracking-wide"
      >
        Efecto Líquido
      </LiquidButton>
    </div>
  ),

  MagneticButton: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 06</span>
      <MagneticButton>Botón Magnético</MagneticButton>
    </div>
  ),

  GlassBadge: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 07</span>
      <GlassBadge text="Version 2.0" />
    </div>
  ),

  PixelProgress: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 08</span>
      <PixelProgress progress={78} />
    </div>
  ),

  FloatingChip: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 09</span>
      <FloatingChip label="Pro Feature" />
    </div>
  ),

  ShimmerText: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 10</span>
      <ShimmerText>Brillo de Texto</ShimmerText>
    </div>
  ),

  DotMatrixGrid: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 11</span>
      <DotMatrixGrid />
    </div>
  ),

  NeumorphicStatus: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 12</span>
      <NeumorphicStatus />
    </div>
  ),

  TiltedBorder: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 13</span>
      <TiltedBorder />
    </div>
  ),

  GlowDivider: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 14</span>
      <GlowDivider />
    </div>
  ),

  MinimalistTag: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 15</span>
      <div className="flex gap-2">
        <MinimalistTag text="Design" />
        <MinimalistTag text="Code" />
        <MinimalistTag text="Art" />
      </div>
    </div>
  ),

  LiquidSwitch: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 16</span>
      <LiquidSwitch />
    </div>
  ),

  CyberKbd: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 17</span>
      <div className="flex gap-2">
        <CyberKbd char="ESC" />
        <CyberKbd char="TAB" />
        <CyberKbd char="CMD" />
      </div>
    </div>
  ),

  GlassyLoader: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 18</span>
      <GlassyLoader />
    </div>
  ),

  NeoBrutalistCard: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 19</span>
      <NeoBrutalistCard title="Click Me" />
    </div>
  ),

  KineticLabel: () => (
    <div className="w-full flex flex-col items-center justify-center py-6 gap-4">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMITIVA 20</span>
      <KineticLabel text="Hover Interaction" />
    </div>
  )
};
