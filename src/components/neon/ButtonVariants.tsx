"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Zap, ChevronRight, Play, Download, Star, ExternalLink } from 'lucide-react';

export const ButtonVariants = {
  // 1. Neon Glow (Original)
  NeonGlow: () => (
    <button className="px-8 py-3 text-lg font-bold text-white transition-all hover:scale-105 active:scale-95" 
            style={{ textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 42px #0fa, 0 0 82px #0fa' }}>
      NEON GLOW
    </button>
  ),

  // 2. Flicker Neon (Original)
  NeonFlicker: () => (
    <button className="px-8 py-3 text-lg font-bold text-white animate-flicker border-2 border-[#f09] rounded-lg shadow-[0_0_15px_#f09]">
      FLICKER PINK
    </button>
  ),

  // 3. NES Primary (Retro)
  NesPrimary: () => (
    <button className="relative border-4 border-black bg-[#209cee] text-white px-6 py-2 font-mono uppercase text-sm shadow-[inset_-4px_-4px_#006bb3] active:shadow-[inset_4px_4px_#006bb3] active:translate-y-1 transition-all">
      NES_PRIMARY
    </button>
  ),

  // 4. Glitch Cyber (Experimental)
  GlitchCyber: () => (
    <button className="px-8 py-3 bg-zinc-900 text-white font-black italic rounded-none border-r-4 border-orange-500 hover:animate-pulse hover:shadow-[4px_0_0_#0ea5e9,-4px_0_0_#f43f5e] transition-shadow">
      GLITCH_ME
    </button>
  ),

  // 5. Retro Cassette (Retro)
  RetroCassette: () => (
    <button className="relative px-10 py-4 bg-[#e5e0d8] text-[#d97706] font-black rounded-lg border-x-8 border-t-2 border-b-8 border-zinc-400 shadow-xl group overflow-hidden active:translate-y-1 active:border-b-4 transition-all">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse group-hover:shadow-[0_0_10px_#ef4444]"></div>
        <span className="uppercase tracking-tighter text-sm italic">REC_MODE</span>
      </div>
    </button>
  ),

  // 6. Claymorphic Soft
  Claymorphic: () => (
    <button className="px-8 py-3 bg-indigo-500 text-white font-bold rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(0,0,0,0.2),inset_4px_4px_8px_rgba(255,255,255,0.3)] hover:translate-y-[-2px] active:translate-y-[2px] transition-all">
      SOFT CLAY
    </button>
  ),

  // 7. Glass Card
  GlassCard: () => (
    <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all shadow-xl">
      FROSTED GLASS
    </button>
  ),

  // 8. Neumorphic Soft
  Neumorphic: () => (
    <button className="px-8 py-3 bg-[#e0e0e0] text-zinc-600 font-bold rounded-xl shadow-[9px_9px_16px_#bebebe,-9px_-9px_16px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-all">
      NEUMORPHIC
    </button>
  ),

  // 9. Rainbow Border
  RainbowBorder: () => (
    <button className="relative p-[2px] rounded-xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-[spin_3s_linear_infinite]" />
      <div className="relative px-8 py-3 bg-black rounded-[10px] text-white font-bold group-hover:bg-zinc-900 transition-colors">
        RAINBOW
      </div>
    </button>
  ),

  // 10. Shimmer Effect
  Shimmer: () => (
    <button className="relative px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg overflow-hidden group">
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      SHIMMER_DRIVE
    </button>
  ),

  // 11. Bento Action
  BentoAction: () => (
    <button className="flex items-center gap-0 p-2 bg-gradient-to-r from-zinc-100 to-zinc-50 rounded-2xl border border-zinc-200 group hover:border-zinc-300 hover:shadow-lg transition-all active:scale-95">
      <div className="bg-white p-3 rounded-lg shadow-md border border-zinc-100 group-hover:scale-105 transition-all text-orange-500">
        <Zap size={20} />
      </div>
      <span className="px-4 py-1 text-sm font-semibold text-zinc-800">Quick Start</span>
    </button>
  ),

  // 12. Liquid Fill
  LiquidFill: () => (
    <button className="relative px-8 py-3 border-2 border-emerald-500 text-emerald-500 font-bold rounded-lg overflow-hidden group transition-colors hover:text-white">
      <div className="absolute bottom-0 left-0 w-full h-0 bg-emerald-500 group-hover:h-full transition-all duration-300 -z-0" />
      <span className="relative z-10 uppercase tracking-widest">Liquid_Fill</span>
    </button>
  ),

  // 13. Retro 3D Push
  Retro3D: () => (
    <button className="px-8 py-3 bg-rose-500 text-white font-black rounded-lg border-b-8 border-rose-800 active:border-b-0 active:translate-y-2 transition-all shadow-xl">
      PUSH_3D
    </button>
  ),

  // 14. Holographic
  Holographic: () => (
    <button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-full border border-white/10 relative overflow-hidden group shadow-[0_0_20px_rgba(255,255,255,0.1)]">
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      HOLOGRAPHIC
    </button>
  ),

  // 15. Cyber Gradient
  CyberGradient: () => (
    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black uppercase tracking-tighter rounded-sm shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
      CYBER_GRADIENT
    </button>
  ),

  // 16. Brutalist Hard
  Brutalist: () => (
    <button className="px-8 py-4 bg-yellow-400 border-4 border-black text-black font-black uppercase text-xl shadow-[8px_8px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_#000] transition-all active:shadow-none">
      HARD_CORE
    </button>
  ),

  // 17. Skeuomorphic Plastic
  SkeuoPlastic: () => (
    <div className="p-1 bg-zinc-400 rounded-xl">
      <button className="px-8 py-3 bg-gradient-to-b from-zinc-100 to-zinc-300 text-zinc-700 font-bold rounded-lg shadow-[inset_0_1px_0_white,0_5px_0_#888,0_10px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_0_1px_0_white,0_2px_0_#888] active:translate-y-1 transition-all">
        PLASTIC
      </button>
    </div>
  ),

  // 18. Underline Slide
  UnderlineSlide: () => (
    <button className="relative px-4 py-2 text-white font-medium group overflow-hidden">
      <span>UNDERLINE</span>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0fa] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
    </button>
  ),

  // 19. Ghost Reveal
  GhostReveal: () => (
    <button className="px-8 py-3 border-2 border-white/20 text-white/40 hover:text-white hover:border-white transition-all duration-500 rounded-full font-bold uppercase tracking-[0.2em]">
      Ghost_Reveal
    </button>
  ),

  // 20. Modern Download (Kit)
  ModernDownload: () => (
    <button className="flex items-center gap-3 px-8 py-3 bg-zinc-900 text-white rounded-full hover:bg-white hover:text-black transition-all border border-white/10 group">
      <Download size={18} className="group-hover:animate-bounce" />
      <span className="font-bold">DOWNLOAD</span>
    </button>
  ),

  // 21. Magnetic Floating
  MagneticFloat: () => (
    <button className="px-8 py-3 bg-white text-black font-bold rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-2 active:translate-y-0 transition-all duration-300">
      MAGNETIC_FLOAT
    </button>
  ),

  // 22. Cyberpunk Slice
  CyberSlice: () => (
    <button className="relative px-8 py-3 bg-transparent text-[#0fa] font-black uppercase tracking-widest group overflow-hidden border-2 border-[#0fa]">
      <div className="absolute inset-0 bg-[#0fa] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 -z-10" />
      <span className="group-hover:text-black transition-colors">SLICE_CORE</span>
    </button>
  ),

  // 23. Dot Matrix Button
  DotMatrix: () => (
    <button className="px-8 py-3 bg-zinc-900 border border-zinc-700 text-zinc-400 font-mono rounded-lg relative overflow-hidden group">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[size:4px_4px]" />
      <span className="group-hover:text-[#0fa] transition-colors relative z-10 uppercase tracking-widest">Dot_Matrix</span>
    </button>
  ),

  // 24. 3D Skeuomorphic Glass
  SkeuoGlass: () => (
    <button className="px-8 py-3 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-md border border-white/30 text-white font-bold rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37),inset_0_2px_4px_rgba(255,255,255,0.3)] hover:bg-white/30 active:shadow-inner transition-all">
      SKEUO_GLASS
    </button>
  ),

  // 25. Industrial Hazard
  Hazard: () => (
    <button className="px-8 py-3 bg-yellow-400 text-black font-black italic uppercase border-4 border-black shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden group">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,black_10px,black_20px)] opacity-10 group-hover:opacity-20 transition-opacity" />
      <span className="relative z-10">DANGER_ZONE</span>
    </button>
  ),

  // 26. Soft Glow Outline
  GlowOutline: () => (
    <button className="px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-500 font-bold rounded-full hover:bg-purple-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300">
      GLOW_OUTLINE
    </button>
  ),

  // 27. Paper Cutout
  PaperCut: () => (
    <button className="px-8 py-3 bg-zinc-100 text-zinc-800 font-bold border-2 border-zinc-300 rounded-lg shadow-[4px_4px_0_#d4d4d8] hover:shadow-[2px_2px_0_#d4d4d8] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
      PAPER_CUT
    </button>
  ),

  // 28. Futuristic Loader
  LoaderButton: () => (
    <button className="relative px-8 py-3 bg-zinc-900 text-white font-bold rounded-lg border border-zinc-800 overflow-hidden group">
      <div className="absolute bottom-0 left-0 h-1 bg-blue-500 w-0 group-hover:w-full transition-all duration-1000" />
      LOADING_STATE
    </button>
  ),

  // 29. Gradient Pulse
  GradientPulse: () => (
    <button className="px-8 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-black rounded-xl animate-pulse hover:animate-none hover:scale-105 transition-transform">
      PULSE_FIRE
    </button>
  ),

  // 30. Minimalist Arrow
  MinimalArrow: () => (
    <button className="flex items-center gap-2 px-6 py-3 text-white font-medium group border-b border-zinc-800 hover:border-white transition-all">
      NEXT_STEP
      <ChevronRight className="group-hover:translate-x-2 transition-transform" />
    </button>
  ),

  // 31. Brutalist Text Shadow
  BrutalistShadow: () => (
    <button className="text-4xl font-black text-white uppercase tracking-tighter hover:text-yellow-400 transition-colors" style={{ textShadow: '4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.1)' }}>
      BRUTAL
    </button>
  ),

  // 32. Soft Pill Neumorphic
  PillNeumorphic: () => (
    <button className="px-12 py-4 bg-[#e0e0e0] text-zinc-500 font-black rounded-full shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] transition-all">
      PILL_SOFT
    </button>
  ),

  // 33. Cyber Punk Outline
  CyberOutline: () => (
    <button className="px-8 py-3 border-2 border-[#f09] text-[#f09] font-black italic uppercase tracking-widest hover:bg-[#f09] hover:text-white hover:shadow-[0_0_30px_#f09] transition-all duration-300">
      CORE_VOID
    </button>
  ),

  // 34. Modern SaaS Action
  SaaSAction: () => (
    <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:bg-indigo-700 hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] transition-all">
      Get Started
    </button>
  ),

  // 35. Retro Game Boy
  GameBoy: () => (
    <button className="px-6 py-2 bg-[#8b8b8b] text-[#3d3d3d] border-b-4 border-zinc-600 rounded-sm font-mono font-bold active:border-b-0 active:translate-y-1 transition-all shadow-md">
      SELECT
    </button>
  ),

  // 36. Hologram Blue
  HologramBlue: () => (
    <button className="px-8 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-bold rounded-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-cyan-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <span className="relative z-10">HOLOGRAM_OS</span>
    </button>
  ),

  // 37. Double Border
  DoubleBorder: () => (
    <button className="px-8 py-3 bg-zinc-900 text-white font-bold border border-white/10 outline outline-2 outline-offset-4 outline-zinc-800 hover:outline-[#0fa] transition-all">
      DOUBLE_FRAME
    </button>
  ),

  // 38. Typography Focus
  TypeFocus: () => (
    <button className="text-2xl font-black text-zinc-700 hover:text-white hover:tracking-[0.2em] transition-all duration-500">
      TYPO_FOCUS
    </button>
  ),

  // 39. Liquid Ripple
  RippleButton: () => (
    <button className="relative px-8 py-3 bg-rose-600 text-white font-bold rounded-lg overflow-hidden group">
      <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-[3] transition-transform duration-700 rounded-full origin-center" />
      RIPPLE_TOUCH
    </button>
  ),

  // 40. Bento Icon Minimal
  BentoIcon: () => (
    <button className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl group hover:bg-zinc-800 transition-colors">
      <div className="w-8 h-8 flex items-center justify-center text-[#0fa] group-hover:scale-125 transition-transform">
        <Play size={24} fill="currentColor" />
      </div>
    </button>
  ),

  // 41. Social Media Glass
  SocialGlass: () => (
    <button className="px-8 py-3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/20 text-white font-bold rounded-2xl hover:from-purple-600/40 hover:to-pink-600/40 transition-all shadow-[0_8px_32px_0_rgba(255,0,255,0.1)]">
      INSTA_GLASS
    </button>
  ),

  // 42. Cyberpunk Warning
  CyberWarning: () => (
    <button className="px-8 py-3 bg-red-600 text-black font-black uppercase italic border-x-4 border-black animate-pulse hover:animate-none hover:bg-red-500 transition-colors">
      SYSTEM_CRITICAL
    </button>
  ),

  // 43. Minimal Dot Reveal
  MinimalDot: () => (
    <button className="group relative px-8 py-3 text-zinc-400 hover:text-white transition-colors">
      <span className="relative z-10 font-bold uppercase tracking-widest">Connect</span>
      <div className="absolute left-1/2 bottom-0 w-1 h-1 bg-[#0fa] rounded-full -translate-x-1/2 group-hover:scale-[15] transition-transform duration-500 opacity-0 group-hover:opacity-100 -z-0" />
    </button>
  ),

  // 44. Liquid Slide Background
  LiquidSlide: () => (
    <button className="relative px-8 py-3 bg-zinc-800 text-white font-bold rounded-lg overflow-hidden group">
      <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-[50%_50%_0_0] group-hover:rounded-none" />
      <span className="relative z-10">LIQUID_FLOW</span>
    </button>
  ),

  // 45. Brutalist 3D Hard
  Brutalist3D: () => (
    <button className="px-8 py-3 bg-emerald-400 border-4 border-black text-black font-black uppercase shadow-[8px_8px_0_0_#000] active:shadow-none active:translate-x-2 active:translate-y-2 transition-all">
      PUSH_HARD
    </button>
  ),

  // 46. Neon Pulse Ring
  NeonPulseRing: () => (
    <div className="relative">
      <div className="absolute -inset-2 bg-[#0fa]/20 rounded-full animate-ping" />
      <button className="relative px-8 py-3 bg-black border-2 border-[#0fa] text-[#0fa] font-bold rounded-full hover:bg-[#0fa] hover:text-black transition-all">
        PULSE_CORE
      </button>
    </div>
  ),

  // 47. Retro Pixel Art
  RetroPixel: () => (
    <button className="px-6 py-2 bg-white text-black font-mono font-bold border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all" style={{ imageRendering: 'pixelated' }}>
      SELECT_LVL
    </button>
  ),

  // 48. Modern Ghost Line
  ModernGhost: () => (
    <button className="relative px-8 py-3 text-white font-light uppercase tracking-[0.3em] group overflow-hidden">
      <span className="relative z-10">Invisible</span>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 group-hover:bg-white transition-colors" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 group-hover:bg-white transition-colors" />
    </button>
  ),

  // 49. Bento Hover Tile
  BentoTile: () => (
    <button className="p-6 bg-zinc-900 border border-zinc-800 rounded-[2rem] group hover:bg-zinc-100 transition-all duration-500">
      <div className="flex flex-col items-start gap-4">
        <div className="w-10 h-10 bg-zinc-800 group-hover:bg-black rounded-xl transition-colors" />
        <span className="text-zinc-500 group-hover:text-black font-bold uppercase tracking-tighter">Bento_Action</span>
      </div>
    </button>
  ),

  // 50. Shimmer Border Glow
  ShimmerBorder: () => (
    <button className="relative px-8 py-3 bg-black text-white font-bold rounded-lg group overflow-hidden">
      <div className="absolute inset-0 p-[2px] bg-gradient-to-r from-transparent via-[#0fa] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <div className="absolute inset-[1px] bg-black rounded-lg -z-0" />
      <span className="relative z-10">SCAN_LINE</span>
    </button>
  ),

  // 51. Soft Depth Shadow
  SoftDepth: () => (
    <button className="px-10 py-4 bg-zinc-100 text-zinc-900 font-bold rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] hover:scale-105 active:scale-95 transition-all">
      SOFT_DEPTH
    </button>
  ),

  // 52. Glitch Text Only
  GlitchText: () => (
    <button className="px-8 py-3 bg-transparent text-white font-black text-2xl uppercase tracking-tighter relative group">
      <span className="relative z-10 group-hover:hidden">GLITCH_ME</span>
      <span className="hidden group-hover:block relative z-10 animate-pulse text-[#f09]" style={{ textShadow: '2px 0 #0fa, -2px 0 #fff' }}>GLITCH_ME</span>
    </button>
  ),

  // 53. Perspective Tilt 3D
  PerspectiveTilt: () => (
    <div className="[perspective:1000px] group">
      <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl transition-all duration-500 group-hover:[transform:rotateX(20deg)_rotateY(10deg)] shadow-xl group-hover:shadow-indigo-500/50">
        3D_TILT
      </button>
    </div>
  ),

  // 54. Gradient Flow Motion
  GradientFlow: () => (
    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 bg-[length:200%_auto] text-white font-bold rounded-full animate-[shimmer_3s_linear_infinite] hover:scale-105 transition-transform">
      FLOW_GRADIENT
    </button>
  ),

  // 55. Industrial Stencil
  StencilButton: () => (
    <button className="px-8 py-3 bg-black border-4 border-zinc-800 text-zinc-800 font-black uppercase text-xl hover:text-[#0fa] hover:border-[#0fa] transition-colors relative overflow-hidden group">
      <div className="absolute inset-0 bg-[#0fa] opacity-0 group-hover:opacity-5 transition-opacity" />
      STENCIL_PRO
    </button>
  ),

  // 56. App Store Glass Style
  AppGlass: () => (
    <button className="px-6 py-1 bg-white/20 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/40 transition-all text-sm uppercase tracking-widest">
      GET
    </button>
  ),

  // 57. Retro Arcade Click
  ArcadeButton: () => (
    <button className="w-20 h-20 bg-red-600 rounded-full border-b-8 border-red-900 active:border-b-0 active:translate-y-2 transition-all flex items-center justify-center shadow-2xl group">
      <div className="w-16 h-16 bg-red-500 rounded-full border-t-4 border-red-400 group-active:border-t-0" />
    </button>
  ),

  // 58. Modern Minimalist Arrow
  ModernArrow: () => (
    <button className="group flex items-center gap-4 text-white font-light uppercase tracking-[0.4em] hover:tracking-[0.2em] transition-all duration-500">
      <span>Discover</span>
      <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 group-hover:bg-[#0fa] transition-all duration-500" />
    </button>
  ),

  // 59. Glow Scan Line
  GlowScan: () => (
    <button className="relative px-8 py-3 bg-zinc-950 border border-[#bc13fe]/30 text-[#bc13fe] font-mono rounded group overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#bc13fe] shadow-[0_0_15px_#bc13fe] -translate-y-full group-hover:translate-y-[40px] transition-transform duration-[2s] linear infinite" />
      LASER_SCAN
    </button>
  ),

  // 60. Ultimate Cyber Hybrid
  UltimateCyber: () => (
    <button className="relative px-10 py-4 bg-black text-[#0fa] font-black italic border-2 border-[#0fa] rounded-sm group overflow-hidden">
      <div className="absolute inset-0 bg-[#0fa] opacity-0 group-hover:opacity-10 transition-opacity" />
      <div className="absolute top-0 left-0 w-2 h-2 bg-[#0fa]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0fa]" />
      <span className="relative z-10 group-hover:tracking-widest transition-all duration-500 uppercase">Master_Control</span>
    </button>
  )
};
