"use client";

import React from 'react';
import { SpotlightCard } from '@/components/extensions/spotlight-card';
import { BorderTrail } from '@/components/extensions/border-trail';
import { GlowEffectButton } from '@/components/extensions/glow-effect-button';
import { GlitchText } from '@/components/extensions/glitch-text';
import { LiquidButton } from '@/components/extensions/liquid-button';

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
  )
};
