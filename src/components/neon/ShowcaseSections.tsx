"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export const HeroSection = ({ title, subtitle, variant = "gradient" }: { title: string, subtitle: string, variant?: "gradient" | "glass" }) => {
  return (
    <section className={cn(
      "w-full py-24 px-8 rounded-3xl mb-16 overflow-hidden relative border border-white/10",
      variant === "gradient" ? "bg-gradient-to-br from-indigo-950 via-black to-purple-950" : "bg-white/5 backdrop-blur-xl"
    )}>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-zinc-500 tracking-tight">
          {title}
        </h2>
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
            Get Started
          </button>
          <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
            Live Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export const ImageTransitionDemo = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div className="group relative aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Hover Effect Demo</h3>
            <p className="text-sm text-zinc-400">Inspirado en WebGL Mouseover Effects</p>
          </div>
        </div>
        {/* Placeholder for real transition */}
        <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono italic">
          [ WEBGL DISTORTION PLACEHOLDER ]
        </div>
        <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/0 transition-colors" />
      </div>

      <div className="group relative aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Crossfade Demo</h3>
            <p className="text-sm text-zinc-400">Inspirado en ModernFade / iHover</p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono italic">
          [ CROSSFADE ANIMATION PLACEHOLDER ]
        </div>
        <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/0 transition-colors" />
      </div>
    </div>
  );
};
