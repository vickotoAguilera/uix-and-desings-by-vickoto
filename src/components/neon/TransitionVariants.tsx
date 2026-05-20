"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export const TransitionVariants = {
  // 1. Hover Scale & Glow
  ScaleGlow: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer border border-zinc-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_50px_rgba(0,255,170,0.5)] border-2 border-[#0fa] rounded-2xl" />
      <div className="absolute bottom-6 left-6 z-10">
        <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Scale & Glow</h3>
      </div>
    </div>
  ),

  // 2. Dual Slide Reveal
  DualSlide: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900">
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full bg-blue-600 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
        <div className="w-1/2 h-full bg-purple-600 transition-transform duration-500 translate-x-full group-hover:translate-x-0" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white font-black text-2xl opacity-0 group-hover:opacity-100 transition-opacity delay-200">
        REVEAL
      </div>
      <div className="absolute inset-0 border border-white/10 rounded-2xl" />
    </div>
  ),

  // 3. Glitch Distortion (CSS)
  GlitchHover: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center group-hover:opacity-50 transition-opacity" />
      <div className="absolute inset-0 hidden group-hover:block">
        <div className="absolute inset-0 bg-red-500/20 translate-x-1 animate-pulse" />
        <div className="absolute inset-0 bg-cyan-500/20 -translate-x-1 animate-pulse" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-mono text-xl opacity-0 group-hover:opacity-100 group-hover:animate-bounce">SYSTEM_ERROR</span>
      </div>
    </div>
  ),

  // 4. Image Crossfade
  Crossfade: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-opacity duration-1000 group-hover:opacity-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  ),

  // 5. Card Flip 3D
  Flip3D: () => (
    <div className="group w-full aspect-video [perspective:1000px] cursor-pointer">
      <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 bg-zinc-800 rounded-2xl flex items-center justify-center border border-zinc-700 [backface-visibility:hidden]">
          <span className="text-xl font-bold">FRONT SIDE</span>
        </div>
        <div className="absolute inset-0 bg-[#0fa] text-black rounded-2xl flex items-center justify-center font-bold text-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
          BACK SIDE
        </div>
      </div>
    </div>
  ),

  // 6. Mask Circular Reveal
  MaskReveal: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
      <div 
        className="absolute inset-0 bg-black transition-all duration-500 group-hover:opacity-0" 
        style={{ clipPath: 'circle(100% at 50% 50%)' }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-[#0fa] font-black text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        CORE
      </div>
    </div>
  ),

  // 7. Grayscale to Color
  ColorReveal: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" />
      <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors duration-700" />
    </div>
  ),

  // 8. Diagonal Slice Reveal
  DiagonalSlice: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black">
      <div className="absolute inset-0 bg-zinc-800" />
      <div className="absolute inset-0 bg-orange-500 transition-transform duration-500 translate-y-full group-hover:translate-y-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
      <div className="absolute inset-0 bg-zinc-100 transition-transform duration-500 -translate-y-full group-hover:translate-y-0" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }} />
      <div className="absolute inset-0 flex items-center justify-center mix-blend-difference text-white font-bold text-2xl">
        SLICE
      </div>
    </div>
  ),

  // 9. Blur Focus Transition
  BlurFocus: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center blur-md group-hover:blur-0 transition-all duration-500 scale-110 group-hover:scale-100" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-500" />
    </div>
  ),

  // 10. Border Draw Effect
  BorderDraw: () => (
    <div className="group relative w-full aspect-video rounded-2xl cursor-pointer flex items-center justify-center bg-zinc-900 border border-zinc-800">
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#0fa] group-hover:w-full transition-all duration-300" />
      <div className="absolute top-0 right-0 w-[2px] h-0 bg-[#0fa] group-hover:h-full transition-all duration-300 delay-300" />
      <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#0fa] group-hover:w-full transition-all duration-300 delay-600" />
      <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#0fa] group-hover:h-full transition-all duration-300 delay-900" />
      <span className="text-zinc-500 group-hover:text-[#0fa] transition-colors font-mono">HOVER_TO_DRAW</span>
    </div>
  ),

  // 11. Liquid Background Spread
  LiquidSpread: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 flex items-center justify-center">
      <div className="absolute inset-0 bg-rose-500 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full" />
      <span className="relative z-10 text-white font-bold text-xl">EXPLORE</span>
    </div>
  ),

  // 12. Text Wave Reveal
  TextWave: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black flex items-center justify-center">
      <div className="flex gap-1">
        {"WAVE".split("").map((char, i) => (
          <span 
            key={i} 
            className="text-5xl font-black text-zinc-800 group-hover:text-[#0fa] transition-all duration-300 group-hover:-translate-y-4"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  ),

  // 13. Shimmer Overlay
  ShimmerOverlay: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-800">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <div className="p-8">
        <div className="w-1/2 h-4 bg-zinc-800 rounded mb-4" />
        <div className="w-full h-4 bg-zinc-800 rounded mb-2" />
        <div className="w-full h-4 bg-zinc-800 rounded mb-2" />
        <div className="w-2/3 h-4 bg-zinc-800 rounded" />
      </div>
    </div>
  ),

  // 14. Zoom & Pan Background
  ZoomPan: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-all duration-[2s] group-hover:scale-150 group-hover:translate-x-10 group-hover:-translate-y-10" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  ),

  // 15. Slide Down Reveal
  SlideDown: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-blue-600">
      <div className="absolute inset-0 bg-white transition-transform duration-500 group-hover:translate-y-full" />
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
        REVEALED
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-2xl group-hover:opacity-0 transition-opacity">
        COVER
      </div>
    </div>
  ),

  // 16. Pixelate Fade (Simplified)
  PixelFade: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-950">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
        {Array(100).fill(0).map((_, i) => (
          <div key={i} className="bg-zinc-900 border-[0.5px] border-black/10" />
        ))}
      </div>
    </div>
  ),

  // 17. Magnetic Pull (Simplified)
  Magnetic: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 flex items-center justify-center">
      <div className="w-20 h-20 bg-white rounded-full transition-all duration-300 group-hover:scale-[3] group-hover:bg-[#0fa] flex items-center justify-center overflow-hidden">
        <span className="text-[4px] font-black text-black group-hover:text-base transition-all duration-300">CLICK</span>
      </div>
    </div>
  ),

  // 18. Neon Trail (Simplified)
  NeonTrail: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black flex items-center justify-center">
      <div className="relative w-3/4 h-1 bg-zinc-800 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0fa] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </div>
      <span className="absolute mt-8 text-[10px] font-mono text-zinc-500 group-hover:text-[#0fa]">SCANNING_CORE</span>
    </div>
  ),

  // 19. Perspective Rotate
  Perspective: () => (
    <div className="w-full aspect-video [perspective:1000px] cursor-pointer">
      <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-2xl border border-zinc-700 transition-all duration-500 hover:[transform:rotateX(20deg)_rotateY(10deg)] shadow-xl hover:shadow-[#0fa]/20">
        <div className="p-8">
          <div className="w-12 h-12 bg-[#0fa] rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-white">3D Hover</h3>
        </div>
      </div>
    </div>
  ),

  // 20. Curtain Reveal
  Curtain: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 flex items-center justify-center">
      <div className="absolute inset-0 z-10 flex">
        <div className="w-1/2 h-full bg-zinc-800 border-r border-black transition-transform duration-700 group-hover:-translate-x-full" />
        <div className="w-1/2 h-full bg-zinc-800 border-l border-black transition-transform duration-700 group-hover:translate-x-full" />
      </div>
      <div className="text-[#0fa] font-black text-2xl animate-pulse">
        WELCOME
      </div>
    </div>
  ),

  // 21. Skew Reveal
  SkewReveal: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900">
      <div className="absolute inset-0 bg-indigo-600 transition-transform duration-500 origin-bottom-left group-hover:skew-y-12 translate-y-full group-hover:translate-y-0" />
      <div className="absolute inset-0 flex items-center justify-center text-white font-black text-3xl italic opacity-0 group-hover:opacity-100 transition-opacity delay-300">
        SKEW_MODE
      </div>
    </div>
  ),

  // 22. Dot Pattern Expand
  DotExpand: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black flex items-center justify-center">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:10px_10px] group-hover:bg-[size:30px_30px] transition-all duration-700" />
      <div className="relative z-10 w-16 h-16 border-2 border-[#0fa] rounded-full group-hover:scale-[5] group-hover:opacity-0 transition-all duration-700" />
      <span className="absolute text-[#0fa] font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">DOT_EXPAND</span>
    </div>
  ),

  // 23. Liquid Corner Fill
  CornerFill: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900">
      <div className="absolute top-0 left-0 w-0 h-0 bg-rose-500 transition-all duration-500 group-hover:w-full group-hover:h-full rounded-br-full group-hover:rounded-none" />
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity delay-200">
        CORNER_LIQUID
      </div>
    </div>
  ),

  // 24. Glitch Slice Animation
  GlitchSlice: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-[0.1s] bg-cyan-500/30 mix-blend-screen" />
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-[0.1s] bg-red-500/30 mix-blend-screen" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 flex items-center justify-center">
        <span className="text-white font-black text-4xl italic tracking-tighter">SLICE_ERR</span>
      </div>
    </div>
  ),

  // 25. Modern Parallax (CSS only)
  ModernParallax: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-125 group-hover:translate-x-4 group-hover:translate-y-4" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex items-end">
        <h3 className="text-white font-bold text-xl">Parallax Motion</h3>
      </div>
    </div>
  ),

  // 26. Door Open Transition
  DoorOpen: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-[#0fa]">
      <div className="absolute inset-0 z-10 flex">
        <div className="w-1/2 h-full bg-zinc-900 transition-transform duration-700 origin-left group-hover:[transform:rotateY(-90deg)]" />
        <div className="w-1/2 h-full bg-zinc-900 transition-transform duration-700 origin-right group-hover:[transform:rotateY(90deg)]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-black font-black text-3xl">
        ENTER
      </div>
    </div>
  ),

  // 27. Gradient Border Rotate
  BorderRotate: () => (
    <div className="group relative w-full aspect-video rounded-2xl p-1 overflow-hidden cursor-pointer flex items-center justify-center bg-zinc-950">
      <div className="absolute w-[150%] aspect-square bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center">
        <span className="text-zinc-500 group-hover:text-white transition-colors">GRADIENT_BORDER</span>
      </div>
    </div>
  ),

  // 28. Blur Inset Focus
  BlurInset: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900">
      <div className="absolute inset-4 border border-white/20 rounded-xl blur-md group-hover:blur-none transition-all duration-500 bg-white/5" />
      <div className="absolute inset-0 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
        FOCUS_ZONE
      </div>
    </div>
  ),

  // 29. Magnetic Icon Slide
  IconSlide: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 flex items-center justify-center gap-4">
      <div className="w-12 h-12 bg-white rounded-xl transition-transform duration-300 group-hover:-translate-x-12" />
      <div className="w-12 h-12 bg-[#0fa] rounded-xl transition-transform duration-300 group-hover:translate-x-12" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-bold">
        SPLIT
      </div>
    </div>
  ),

  // 30. Zoom Out Reveal
  ZoomOut: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center scale-150 group-hover:scale-100 transition-transform duration-1000" />
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center text-white font-black text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100">
        FOCUS
      </div>
    </div>
  ),

  // 31. Stripe Slide Reveal
  StripeSlide: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900">
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/3 w-full bg-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
        <div className="h-1/3 w-full bg-purple-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300 delay-100" />
        <div className="h-1/3 w-full bg-pink-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 delay-200" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white font-black text-2xl opacity-0 group-hover:opacity-100 transition-opacity delay-500">
        STRIPES
      </div>
    </div>
  ),

  // 32. Perspective Fold
  PerspectiveFold: () => (
    <div className="group relative w-full aspect-video rounded-2xl cursor-pointer [perspective:1000px]">
      <div className="w-full h-full bg-zinc-800 rounded-2xl transition-transform duration-500 origin-top group-hover:[transform:rotateX(-45deg)] flex items-center justify-center border border-zinc-700 shadow-xl">
        <span className="text-xl font-bold">FOLD_ME</span>
      </div>
      <div className="absolute inset-0 bg-[#0fa] rounded-2xl -z-10 flex items-center justify-center text-black font-black text-2xl">
        BOTTOM_LAYER
      </div>
    </div>
  ),

  // 33. Liquid Button Spread (Large)
  LiquidLarge: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 flex items-center justify-center">
      <div className="w-20 h-20 bg-rose-500 rounded-full group-hover:scale-[10] transition-transform duration-700 ease-in-out" />
      <span className="absolute z-10 text-white font-black text-3xl opacity-0 group-hover:opacity-100 transition-opacity delay-300">BOOM</span>
    </div>
  ),

  // 34. Grid Cell Reveal
  GridCell: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer grid grid-cols-4 grid-rows-2">
      {Array(8).fill(0).map((_, i) => (
        <div 
          key={i} 
          className="bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-300"
          style={{ transitionDelay: `${i * 50}ms` }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity delay-500">
        GRID_FLOW
      </div>
    </div>
  ),

  // 35. Soft Shadow Glow
  ShadowGlow: () => (
    <div className="group relative w-full aspect-video rounded-2xl bg-zinc-900 flex items-center justify-center cursor-pointer border border-zinc-800 transition-all duration-500 hover:border-blue-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]">
      <div className="w-16 h-16 bg-blue-500 rounded-2xl rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
      <span className="absolute text-xs font-mono mt-24 text-zinc-500 group-hover:text-blue-400">SHADOW_SYNC</span>
    </div>
  ),

  // 36. Diagonal Wipe
  DiagonalWipe: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-white transition-transform duration-500 translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
      <div className="absolute inset-0 flex items-center justify-center text-black font-black text-2xl opacity-0 group-hover:opacity-100 transition-opacity delay-300">
        WIPE_OUT
      </div>
    </div>
  ),

  // 37. Text Stagger Fade
  TextStagger: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-black text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">MODERN</span>
        <span className="text-4xl font-black text-[#0fa] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">DESIGN</span>
      </div>
    </div>
  ),

  // 38. Pulse Ripple Inset
  PulseRipple: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black flex items-center justify-center">
      <div className="w-20 h-20 border-2 border-white/20 rounded-full group-hover:animate-ping group-hover:border-white transition-all" />
      <div className="absolute w-10 h-10 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
    </div>
  ),

  // 39. Mask Reveal Vertical
  VerticalMask: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black transition-all duration-700" style={{ clipPath: 'inset(0 0 100% 0)' }} />
      <div className="absolute inset-0 bg-black transition-all duration-700 group-hover:opacity-0" style={{ clipPath: 'inset(100% 0 0 0)' }} />
      <div className="absolute inset-0 flex items-center justify-center text-white font-black text-3xl tracking-[0.5em] opacity-0 group-hover:opacity-100 transition-opacity delay-300">
        VOID
      </div>
    </div>
  ),

  // 40. Ultimate Glitch Reveal
  UltimateGlitch: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity" />
      <h1 className="text-6xl font-black text-white relative z-10 group-hover:animate-pulse">
        <span className="absolute inset-0 text-red-500 translate-x-1 opacity-0 group-hover:opacity-100 animate-pulse">FINISH</span>
        <span className="absolute inset-0 text-cyan-500 -translate-x-1 opacity-0 group-hover:opacity-100 animate-pulse">FINISH</span>
        <span className="relative">FINISH</span>
      </h1>
      <div className="absolute bottom-4 font-mono text-[10px] text-zinc-500">SYSTEM_COMPLETE: 100%</div>
    </div>
  ),

  // 41. Glitch Distortion v2
  GlitchDistortion: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-100" />
      <div className="absolute inset-0 bg-red-500/20 mix-blend-screen opacity-0 group-hover:opacity-100 group-hover:translate-x-1 animate-pulse" />
      <div className="absolute inset-0 bg-blue-500/20 mix-blend-screen opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 animate-pulse" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-black text-2xl tracking-[0.5em] opacity-0 group-hover:opacity-100">DATA_ERROR</span>
      </div>
    </div>
  ),

  // 42. Glass Card Tilt
  GlassTilt: () => (
    <div className="[perspective:1000px] w-full aspect-video group">
      <div className="w-full h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:[transform:rotateX(15deg)_rotateY(-10deg)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col p-8">
        <div className="w-12 h-1 bg-white/20 mb-4" />
        <h3 className="text-xl font-bold text-white/80">Glass Motion</h3>
      </div>
    </div>
  ),

  // 43. Liquid Ripple Pulse
  RipplePulse: () => (
    <div className="group relative w-full aspect-video rounded-2xl bg-zinc-900 overflow-hidden cursor-pointer flex items-center justify-center">
      <div className="absolute w-20 h-20 bg-[#0fa]/10 rounded-full group-hover:animate-ping" />
      <div className="w-12 h-12 bg-[#0fa] rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-125">
        <div className="w-4 h-4 bg-black rounded-full" />
      </div>
    </div>
  ),

  // 44. Diagonal Reveal Green
  DiagonalGreen: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900">
      <div className="absolute inset-0 bg-emerald-500 transition-transform duration-500 translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
      <div className="absolute inset-0 flex items-center justify-center text-white font-black text-3xl opacity-0 group-hover:opacity-100 transition-opacity delay-300">
        ACTIVE
      </div>
    </div>
  ),

  // 45. Mosaic Fade (Grid)
  MosaicFade: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black">
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 gap-1">
        {Array(15).fill(0).map((_, i) => (
          <div key={i} className="bg-zinc-800 group-hover:opacity-0 transition-opacity duration-300" style={{ transitionDelay: `${i * 30}ms` }} />
        ))}
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  ),

  // 46. Neon Path Draw
  PathDraw: () => (
    <div className="group relative w-full aspect-video rounded-2xl border border-zinc-800 bg-zinc-950 flex items-center justify-center cursor-pointer overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0fa] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f09] to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
      <span className="text-zinc-600 group-hover:text-white font-mono tracking-widest transition-colors">LASER_SCAN</span>
    </div>
  ),

  // 47. Perspective Page Turn
  PageTurn: () => (
    <div className="[perspective:1000px] w-full aspect-video group cursor-pointer">
      <div className="relative w-full h-full bg-zinc-800 rounded-2xl transition-transform duration-700 origin-left group-hover:[transform:rotateY(-45deg)] flex items-center justify-center border border-zinc-700 shadow-2xl">
        <h3 className="text-2xl font-bold">TURN_PAGE</h3>
      </div>
      <div className="absolute inset-0 bg-blue-600 rounded-2xl -z-10 flex items-center justify-center font-black text-2xl">
        CONTENT
      </div>
    </div>
  ),

  // 48. Liquid Bubble Expansion
  BubbleExpand: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 flex items-center justify-center">
      <div className="w-4 h-4 bg-orange-500 rounded-full transition-all duration-700 group-hover:scale-[50] group-hover:rounded-none" />
      <span className="absolute z-10 text-white font-black text-4xl opacity-0 group-hover:opacity-100 transition-opacity">POP</span>
    </div>
  ),

  // 49. Static Noise Reveal
  NoiseReveal: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 group-hover:opacity-0 transition-opacity" />
      <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-white font-bold text-2xl uppercase">Crystal_Clear</span>
      </div>
    </div>
  ),

  // 50. Spotlight Circular Focus
  SpotlightFocus: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),transparent_10%,black_30%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <h1 className="text-zinc-800 group-hover:text-white transition-colors duration-500 font-black text-4xl">FIND_ME</h1>
    </div>
  ),

  // 51. Magnetic Border Pull
  MagneticBorder: () => (
    <div className="group relative w-full aspect-video rounded-2xl bg-zinc-900 flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-[#0fa] hover:shadow-[0_0_20px_#0fa] transition-all duration-500">
      <div className="w-16 h-16 bg-white/5 rounded-full group-hover:scale-150 group-hover:bg-[#0fa]/10 transition-all duration-500" />
      <span className="absolute text-zinc-500 group-hover:text-white font-bold">PULL</span>
    </div>
  ),

  // 52. Split Screen Horizontal
  SplitHorizontal: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-indigo-600 -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-300">
        <span className="text-white font-black text-3xl italic">JOINED</span>
      </div>
    </div>
  ),

  // 53. Perspective Card Lift
  CardLift: () => (
    <div className="[perspective:1000px] w-full aspect-video group cursor-pointer">
      <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-2xl border border-zinc-700 transition-all duration-500 group-hover:-translate-y-4 group-hover:[transform:rotateX(10deg)] shadow-xl group-hover:shadow-rose-500/20">
        <div className="p-8">
          <div className="w-12 h-12 bg-rose-500 rounded-lg mb-4 shadow-[0_0_20px_rgba(244,63,94,0.4)]" />
          <h3 className="text-xl font-bold text-white">Elevated UI</h3>
        </div>
      </div>
    </div>
  ),

  // 54. Text Color Sweep
  ColorSweep: () => (
    <div className="group relative w-full aspect-video rounded-2xl bg-black flex items-center justify-center cursor-pointer overflow-hidden">
      <h1 className="text-5xl font-black text-white relative z-10">
        SWEEP
        <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-[#0fa] to-purple-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700">SWEEP</span>
      </h1>
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  ),

  // 55. Mask Reveal Diamond
  MaskDiamond: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black transition-all duration-700 group-hover:opacity-0" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-mono text-xl opacity-0 group-hover:opacity-100 transition-opacity delay-300">DIAMOND_REVEAL</span>
      </div>
    </div>
  ),

  // 56. Blur Background Focus
  BackgroundFocus: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-all duration-700 group-hover:blur-md scale-110 group-hover:scale-100" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="px-8 py-3 bg-white text-black font-bold rounded-full translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">VIEW_DETAILS</button>
      </div>
    </div>
  ),

  // 57. Gradient Mesh Drift
  MeshDrift: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-950">
      <div className="absolute inset-[-50%] bg-gradient-to-tr from-blue-600 via-purple-600 to-[#0fa] opacity-20 group-hover:opacity-40 animate-[spin_10s_linear_infinite] transition-opacity" />
      <div className="relative z-10 w-full h-full flex items-center justify-center backdrop-blur-3xl">
        <h3 className="text-2xl font-black text-white tracking-widest group-hover:scale-110 transition-transform">DRIFT_CORE</h3>
      </div>
    </div>
  ),

  // 58. Double Slide Reveal Vertical
  VerticalSlide: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900">
      <div className="absolute inset-0 flex flex-col">
        <div className="h-full w-full bg-rose-500 -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <div className="h-full w-full bg-zinc-100 translate-y-full group-hover:-translate-y-full transition-transform duration-500" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center mix-blend-difference">
        <span className="text-white font-black text-4xl tracking-tighter">TRANSITION</span>
      </div>
    </div>
  ),

  // 59. Neon Glitch Border
  NeonGlitchBorder: () => (
    <div className="group relative w-full aspect-video rounded-2xl bg-black border-2 border-zinc-800 cursor-pointer flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 border-2 border-[#0fa] opacity-0 group-hover:opacity-100 group-hover:animate-pulse shadow-[0_0_20px_#0fa]" />
      <div className="absolute inset-0 border-2 border-[#f09] opacity-0 group-hover:opacity-100 group-hover:animate-pulse delay-75 translate-x-1" />
      <span className="text-zinc-600 group-hover:text-white font-mono text-xl transition-colors">GLITCH_SCAN</span>
    </div>
  ),

  // 60. Ultimate Cinematic Reveal
  UltimateReveal: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-all duration-[3s] group-hover:scale-125" />
      <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-colors duration-1000" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-20 h-[2px] bg-[#0fa] mb-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 delay-300" />
        <h1 className="text-3xl font-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500 tracking-[0.3em]">CINEMATIC</h1>
        <p className="text-[#0fa] text-xs font-mono mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-700 uppercase">Interactive Experience</p>
      </div>
    </div>
  ),

  // 61. Hologram Static (Glitches) - Fail animation with chromatic aberrations
  HologramStatic: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 flex items-center justify-center border border-cyan-900/30">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_95%,rgba(6,182,212,0.15)_95%)] bg-[size:100%_8px] opacity-30" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 mix-blend-color-dodge transition-all group-hover:opacity-20" />
      
      {/* Glitch layers */}
      <div className="absolute inset-0 bg-cyan-500/20 translate-x-[-2px] translate-y-[1px] mix-blend-screen hidden group-hover:block animate-[pulse_0.1s_infinite]" />
      <div className="absolute inset-0 bg-rose-500/20 translate-x-[2px] translate-y-[-1px] mix-blend-screen hidden group-hover:block animate-[pulse_0.15s_infinite]" />
      
      <div className="relative text-center z-10 px-6 py-3 border border-cyan-500/30 bg-zinc-900/80 backdrop-blur rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_25px_rgba(244,63,94,0.4)] group-hover:border-rose-500/40 transition-all duration-300">
        <span className="text-cyan-400 font-mono tracking-widest text-sm group-hover:text-rose-400 transition-colors animate-pulse">PROJ_ACTIVE</span>
      </div>
    </div>
  ),

  // 62. Scanline Interference (Glitches) - CRT screen sweep roll
  ScanlineInterference: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black flex flex-col justify-between p-6 border border-emerald-950">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
      
      {/* Scanline Sweep */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-[#0fa]/20 to-transparent -translate-y-full group-hover:animate-[slide_1.5s_linear_infinite]" style={{
        animationName: 'scanline-roll'
      }} />
      
      <style>{`
        @keyframes scanline-roll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
      `}</style>
      
      <div className="flex justify-between items-center z-10">
        <span className="text-[10px] font-mono text-emerald-500">CRT_MONITOR_v1.09</span>
        <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:animate-ping" />
      </div>
      <div className="z-10 mt-auto">
        <h3 className="text-xl font-bold text-white font-mono tracking-wide group-hover:text-[#0fa] transition-colors">TERMINAL_SECURE</h3>
      </div>
    </div>
  ),

  // 63. Window Blinds (Structural) - 3D rotating horizontal slats
  WindowBlinds: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-indigo-900 flex items-center justify-center [perspective:1000px]">
      {/* Underlying Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
      
      {/* Slat overlays */}
      <div className="absolute inset-0 flex flex-col z-10 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className="w-full h-1/4 bg-zinc-950 border-b border-zinc-900 transition-transform duration-500 origin-top group-hover:[transform:rotateX(90deg)]"
            style={{ transitionDelay: `${i * 75}ms` }}
          />
        ))}
      </div>
      <div className="relative z-20 text-white font-black text-2xl tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
        UNCOVER
      </div>
    </div>
  ),

  // 64. Cube Rotate (Perspective) - 3D rotating box face reveal
  CubeRotate: () => (
    <div className="w-full aspect-video group cursor-pointer [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col justify-between p-6 [backface-visibility:hidden] [transform:translateZ(90px)]">
          <div className="w-8 h-8 bg-zinc-800 rounded-lg" />
          <h3 className="text-xl font-bold text-zinc-400">Front Surface</h3>
        </div>
        {/* Bottom Face */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600 to-indigo-600 rounded-2xl flex flex-col justify-between p-6 [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(90px)]">
          <div className="w-8 h-8 bg-white/20 rounded-lg" />
          <h3 className="text-xl font-bold text-white">Underworld</h3>
        </div>
      </div>
    </div>
  ),

  // 65. Perspective Unfold (Perspective) - Center split 3D page unfold
  PerspectiveUnfold: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 flex items-center justify-center [perspective:1000px]">
      {/* Background Image to Reveal */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
      
      {/* Split Folding Panels */}
      <div className="absolute inset-0 flex z-10 pointer-events-none">
        {/* Left Panel */}
        <div className="w-1/2 h-full bg-zinc-900 border-r border-zinc-800 transition-transform duration-500 origin-left group-hover:[transform:rotateY(-90deg)]" />
        {/* Right Panel */}
        <div className="w-1/2 h-full bg-zinc-900 border-l border-zinc-800 transition-transform duration-500 origin-right group-hover:[transform:rotateY(90deg)]" />
      </div>
      
      <div className="relative z-20 text-cyan-400 font-bold tracking-widest text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
        SYSTEM_INIT
      </div>
    </div>
  ),

  // 66. Depth Zoom (Perspective) - Multiple depth translation layers
  DepthZoom: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black [perspective:1000px]">
      {/* Deepest Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-125" />
      
      {/* Midground Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] transition-transform duration-1000 [transform:translateZ(50px)] group-hover:[transform:translateZ(100px)]" />
      
      {/* Foreground UI Ring */}
      <div className="absolute inset-10 border-2 border-dashed border-[#0fa]/30 rounded-xl transition-all duration-[1.2s] group-hover:inset-4 group-hover:border-[#0fa]/80 flex items-center justify-center [transform:translateZ(100px)] group-hover:[transform:translateZ(180px)]">
        <span className="text-white font-black tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">DEPTH_ACTIVE</span>
      </div>
    </div>
  ),

  // 67. Gooey Merge (Liquid) - CSS SVG gooey organic merger
  GooeyMerge: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 flex items-center justify-center border border-zinc-900">
      {/* Custom hidden SVG Gooey Filter */}
      <svg className="hidden">
        <defs>
          <filter id="gooey-merge-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      
      {/* Gooey container */}
      <div className="relative w-full h-full flex items-center justify-center" style={{ filter: 'url(#gooey-merge-filter)' }}>
        <div className="w-16 h-16 bg-[#0fa] rounded-full absolute transition-transform duration-500 ease-out translate-x-[-30px] group-hover:translate-x-0" />
        <div className="w-16 h-16 bg-[#0fa] rounded-full absolute transition-transform duration-500 ease-out translate-x-[30px] group-hover:translate-x-0" />
        <div className="w-14 h-14 bg-zinc-100 rounded-full absolute scale-0 group-hover:scale-100 transition-transform duration-500 ease-out delay-100" />
      </div>
      
      <span className="absolute text-black font-black text-xs z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">MERGED</span>
    </div>
  ),

  // 68. Gelatin Bounce (Liquid) - Jelly soft squish feedback
  GelatinBounce: () => (
    <div className="group relative w-full aspect-video rounded-2xl bg-zinc-900 border border-zinc-800 cursor-pointer flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes gelatin-bounce {
          0%, 100% { transform: scale(1, 1); }
          25% { transform: scale(0.85, 1.15); }
          50% { transform: scale(1.15, 0.85); }
          75% { transform: scale(0.95, 1.05); }
        }
        .group:hover .animate-jelly {
          animation: gelatin-bounce 0.8s ease-in-out;
        }
      `}</style>
      <div className="animate-jelly w-24 h-24 bg-gradient-to-tr from-amber-400 to-rose-500 rounded-3xl shadow-lg flex items-center justify-center text-white font-black transition-all group-hover:rounded-[50%]">
        <span className="text-xl tracking-tight">JELLY</span>
      </div>
    </div>
  ),

  // 69. Fluid Vortex (Liquid) - Spiral swirl expansion
  FluidVortex: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 flex items-center justify-center">
      {/* Vortex Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
      
      {/* Vortex Spiral Mask overlay */}
      <div className="absolute inset-0 bg-zinc-950 transition-all duration-700 ease-out origin-center group-hover:scale-0 group-hover:rotate-[360deg] flex items-center justify-center">
        <svg className="w-24 h-24 text-[#0fa]/30" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C22 0 0 22 0 50 C0 78 22 100 50 100 C78 100 100 78 100 50 C100 22 78 0 50 0 Z M50 90 C28 90 10 72 10 50 C10 28 28 10 50 10 C72 10 90 28 90 50 C90 72 72 90 50 90 Z" />
        </svg>
      </div>
      
      <span className="relative z-10 text-white font-black text-xl tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">VORTEX</span>
    </div>
  ),

  // 70. Splatter Reveal (Liquid) - Vector ink blot splatter scale merge
  SplatterReveal: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 flex items-center justify-center">
      {/* Image behind splatters */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
      
      {/* Splatter masks (scale down on hover to reveal background) */}
      <div className="absolute inset-0 bg-zinc-900 transition-opacity duration-500 group-hover:opacity-0 z-10 flex items-center justify-center gap-2">
        <div className="w-12 h-12 bg-zinc-950 rounded-full transition-transform duration-500 group-hover:scale-0" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
        <div className="w-16 h-16 bg-zinc-950 rounded-full transition-transform duration-500 group-hover:scale-0 delay-75" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }} />
        <div className="w-10 h-10 bg-zinc-950 rounded-full transition-transform duration-500 group-hover:scale-0 delay-150" style={{ clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)' }} />
      </div>
      
      <span className="relative z-20 text-white font-black text-2xl tracking-[0.2em] mix-blend-difference">SPLATTER</span>
    </div>
  ),

  // 71. Mirror Split (Creative)
  MirrorSplit: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 flex items-center justify-center">
      {/* Background to reveal */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 flex flex-col items-center justify-center p-6">
        <h3 className="text-[#0fa] font-black text-3xl tracking-widest animate-pulse">MIRROR SPLIT</h3>
        <span className="text-zinc-400 text-xs font-mono mt-2 tracking-[0.2em]">SYSTEM_ONLINE</span>
      </div>
      
      {/* Left Mirror Half */}
      <div 
        className="absolute inset-y-0 left-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80')] bg-cover bg-[position:left_center] border-r border-[#0fa]/30 transition-all duration-700 ease-in-out group-hover:-translate-x-full group-hover:opacity-0"
      />
      {/* Right Mirror Half */}
      <div 
        className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80')] bg-cover bg-[position:right_center] border-l border-[#0fa]/30 transition-all duration-700 ease-in-out group-hover:translate-x-full group-hover:opacity-0"
      />
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
    </div>
  ),

  // 72. Page Curl (Creative)
  PageCurl: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-950">
      {/* Revealed content */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-zinc-900 to-purple-950 flex flex-col justify-between p-6">
        <span className="text-[10px] font-mono text-indigo-400">PAGE_02_INDEX</span>
        <h4 className="text-white text-2xl font-black italic">UNCOVERED LAYER</h4>
        <span className="text-zinc-500 text-xs">Aesthetic Interface Systems</span>
      </div>
      
      {/* Cover Page */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-all duration-700 origin-bottom-left group-hover:[transform:rotate3d(1,-1,0,35deg)] group-hover:opacity-0" />
      
      {/* Curl Corner Overlay */}
      <div className="absolute top-0 right-0 w-0 h-0 bg-gradient-to-bl from-white/30 via-white/10 to-transparent transition-all duration-700 group-hover:w-16 group-hover:h-16 shadow-lg rounded-bl-xl border-l border-b border-white/20" />
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
    </div>
  ),

  // 73. Lens Blur (Creative)
  LensBlur: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 flex items-center justify-center">
      {/* Base Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-all duration-700 group-hover:scale-105 group-hover:blur-md" />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-500" />
      
      {/* Bokeh circles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-cyan-400/20 rounded-full blur-[2px] animate-[pulse_2s_infinite] scale-75 group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-pink-400/20 rounded-full blur-[2px] animate-[pulse_3s_infinite] scale-50 group-hover:scale-125 transition-transform duration-700 delay-100" />
        <div className="absolute bottom-1/4 left-1/2 w-6 h-6 bg-yellow-300/10 rounded-full blur-[2px] animate-[pulse_2.5s_infinite] scale-90 group-hover:scale-150 transition-transform duration-700 delay-200" />
        <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-purple-500/20 rounded-full blur-[2px] animate-[pulse_4s_infinite] scale-50 group-hover:scale-100 transition-transform duration-700 delay-300" />
      </div>

      <div className="relative text-center z-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <span className="text-xs font-mono tracking-widest text-[#0fa] bg-black/40 px-3 py-1.5 rounded-full border border-[#0fa]/30">BOKEH_EFFECT</span>
      </div>
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
    </div>
  ),

  // 74. Ink Bleed (Creative)
  InkBleed: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 flex items-center justify-center">
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="ink-bleed-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      
      {/* Background Image to reveal */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
      
      {/* Ink blots container */}
      <div className="absolute inset-0 z-0 bg-white flex items-center justify-center group-hover:bg-zinc-950 transition-colors duration-500" style={{ filter: 'url(#ink-bleed-filter)' }}>
        <div className="w-10 h-10 bg-zinc-950 rounded-full transition-transform duration-700 scale-[25] group-hover:scale-0" />
        <div className="w-8 h-8 bg-zinc-950 rounded-full absolute transition-transform duration-700 scale-[20] group-hover:scale-0 translate-x-12 translate-y-8 delay-75" />
        <div className="w-6 h-6 bg-zinc-950 rounded-full absolute transition-transform duration-700 scale-[15] group-hover:scale-0 -translate-x-14 -translate-y-6 delay-150" />
        <div className="w-7 h-7 bg-zinc-950 rounded-full absolute transition-transform duration-700 scale-[18] group-hover:scale-0 translate-x-[-10px] translate-y-[-12px] delay-200" />
      </div>
      
      <span className="relative z-20 text-white font-black text-2xl tracking-[0.25em] group-hover:text-black mix-blend-difference uppercase">INK_BLEED</span>
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none z-30" />
    </div>
  ),

  // 75. Neon Drawing (Creative)
  NeonDrawing: () => (
    <div className="group relative w-full aspect-video rounded-2xl cursor-pointer flex items-center justify-center bg-zinc-950 overflow-hidden border border-zinc-900">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-10 transition-opacity duration-500" />
      
      {/* SVG drawing borders */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect 
          x="1" y="1" width="98" height="98" rx="8"
          fill="none" 
          stroke="url(#neon-draw-grad)" 
          strokeWidth="1.5" 
          strokeDasharray="400" 
          strokeDashoffset="400"
          className="transition-all duration-1000 group-hover:stroke-dashoffset-0"
        />
        <defs>
          <linearGradient id="neon-draw-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0fa" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Scanning laser line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0fa] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan-line_2s_linear_infinite]" />
      
      <style>{`
        @keyframes scan-line {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
      `}</style>
      
      <div className="relative text-center z-10">
        <span className="text-sm font-mono text-zinc-500 group-hover:text-white transition-colors duration-500 tracking-[0.3em]">LASER_ENGRAVE</span>
      </div>
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
    </div>
  ),

  // 76. Magnetic Particle (Creative)
  MagneticParticle: () => {
    return (
      <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 flex items-center justify-center border border-zinc-900">
        <div className="absolute inset-0 bg-radial-gradient from-purple-900/10 to-transparent pointer-events-none" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-2.5 h-2.5 rounded-full bg-[#0fa] blur-[1px] transition-all duration-700 ease-out group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:scale-0 group-hover:opacity-0"
              style={{
                top: `${20 + (i * 9) + (i % 2 ? 10 : 0)}%`,
                left: `${15 + (i * 11) + (i % 3 ? 12 : 0)}%`,
                boxShadow: '0 0 8px #0fa',
                transitionDelay: `${i * 40}ms`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:border-[#0fa]/50 group-hover:shadow-[0_0_20px_rgba(0,255,170,0.2)]">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#0fa] to-blue-500 animate-pulse" />
        </div>
        
        <span className="absolute bottom-4 text-[10px] font-mono text-zinc-600 group-hover:text-[#0fa] tracking-[0.2em] transition-colors">MAGNET_FORCE</span>
        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
      </div>
    );
  },

  // 77. Matrix Rain (Creative)
  MatrixRain: () => {
    return (
      <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black flex flex-col justify-between p-6 border border-green-950/40">
        {/* Matrix rain columns */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 flex justify-around pointer-events-none font-mono text-[9px] text-[#0fa] select-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="flex flex-col animate-[matrix-fall_3s_linear_infinite]"
              style={{
                animationDelay: `${i * 150}ms`,
                transform: 'translateY(-100%)'
              }}
            >
              {"1010011010010110".split("").map((char, cIndex) => (
                <span key={cIndex} className="my-0.5">{char}</span>
              ))}
            </div>
          ))}
        </div>
        
        <style>{`
          @keyframes matrix-fall {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}</style>
        
        <div className="flex justify-between items-start z-10">
          <span className="text-[10px] font-mono text-green-500/60 group-hover:text-green-500">DECRYPTING_SECURE_NODE</span>
          <span className="text-[10px] font-mono text-green-500/40 group-hover:text-green-400">80%</span>
        </div>
        <div className="z-10 mt-auto">
          <h3 className="text-xl font-bold font-mono tracking-widest text-zinc-600 group-hover:text-green-400 transition-colors">MATRIX_FLOW</h3>
        </div>
        <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
      </div>
    );
  },

  // 78. Kaleidoscope (Creative)
  Kaleidoscope: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 flex items-center justify-center border border-zinc-900">
      {/* 4 Quadrants mirror reflection */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 transition-all duration-700 group-hover:rotate-45">
        {/* Quadrant 1 */}
        <div className="relative overflow-hidden w-full h-full border-r border-b border-white/5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
        </div>
        {/* Quadrant 2 */}
        <div className="relative overflow-hidden w-full h-full border-l border-b border-white/5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center scale-x-[-1] transition-transform duration-700 group-hover:scale-[1.1_1.1]" />
        </div>
        {/* Quadrant 3 */}
        <div className="relative overflow-hidden w-full h-full border-r border-t border-white/5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center scale-y-[-1] transition-transform duration-700 group-hover:scale-[1.1_1.1]" />
        </div>
        {/* Quadrant 4 */}
        <div className="relative overflow-hidden w-full h-full border-l border-t border-white/5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center scale-[-1] transition-transform duration-700 group-hover:scale-[1.1_1.1]" />
        </div>
      </div>
      
      {/* Central lens overlay */}
      <div className="relative z-10 w-12 h-12 bg-black/60 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center transition-transform duration-700 group-hover:scale-125">
        <div className="w-4 h-4 bg-[#0fa] rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
      </div>
      
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
    </div>
  ),

  // 79. Holographic Flicker (Creative)
  HolographicFlicker: () => (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 flex items-center justify-center border border-purple-950/40">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_94%,rgba(139,92,246,0.1)_94%)] bg-[size:100%_6px]" />
      
      {/* Base Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
      
      {/* Flicker elements */}
      <div className="absolute inset-0 bg-purple-500/10 mix-blend-color-dodge opacity-0 group-hover:opacity-100 group-hover:animate-[flicker-anim_0.15s_infinite]" />
      <div className="absolute inset-0 bg-cyan-500/10 mix-blend-color-dodge opacity-0 group-hover:opacity-100 group-hover:animate-[flicker-anim_0.2s_infinite] translate-x-[2px]" />
      
      <style>{`
        @keyframes flicker-anim {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.8; }
        }
      `}</style>
      
      <div className="relative text-center z-10">
        <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 tracking-[0.3em] font-mono group-hover:animate-pulse">HOLO_LINK</h4>
        <span className="text-[9px] font-mono text-purple-400/60 group-hover:text-cyan-400 mt-2 block tracking-widest animate-pulse">FREQ_78.4_MHz</span>
      </div>
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
    </div>
  ),

  // 80. Paper Fold (Creative)
  PaperFold: () => (
    <div className="group w-full aspect-video cursor-pointer [perspective:1200px]">
      <div className="relative w-full h-full flex transition-all duration-700 [transform-style:preserve-3d]">
        {/* Background layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0fa]/30 via-indigo-900 to-purple-950 rounded-2xl flex flex-col justify-between p-6">
          <span className="text-[10px] font-mono text-[#0fa]/80">LAYER_REVEAL_SECURE</span>
          <h4 className="text-white text-2xl font-black italic">FOLD COMPLETED</h4>
          <span className="text-zinc-500 text-xs">3D Brochure System</span>
        </div>
        
        {/* Panel 1 (Left Fold) */}
        <div 
          className="w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=400&q=80')] bg-cover bg-left rounded-l-2xl border-r border-zinc-950/20 transition-transform duration-700 origin-left group-hover:[transform:rotateY(-120deg)]"
          style={{ backfaceVisibility: 'hidden' }}
        />
        {/* Panel 2 (Center Base) */}
        <div 
          className="w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center border-x border-zinc-950/20 transition-transform duration-700 group-hover:scale-y-95 group-hover:opacity-10"
        />
        {/* Panel 3 (Right Fold) */}
        <div 
          className="w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=400&q=80')] bg-cover bg-right rounded-r-2xl border-l border-zinc-950/20 transition-transform duration-700 origin-right group-hover:[transform:rotateY(120deg)]"
          style={{ backfaceVisibility: 'hidden' }}
        />
      </div>
    </div>
  )
};

