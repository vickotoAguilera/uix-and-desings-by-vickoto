'use client';
import { GlowEffect } from './glow-effect';
import { ArrowRight } from 'lucide-react';

export function GlowEffectButton() {
  return (
    <div className='relative w-fit'>
      <GlowEffect
        colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
        mode='colorShift'
        blur='soft'
        duration={3}
        scale={0.9}
      />
      <button className='relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-6 py-2 font-medium text-sm text-zinc-50 outline outline-1 outline-[#fff2f21f]'>
        Glow Button <ArrowRight className='h-4 w-4' />
      </button>
    </div>
  );
}
