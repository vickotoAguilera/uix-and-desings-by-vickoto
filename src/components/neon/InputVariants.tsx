"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Search, Mail, Lock, User, Send, CreditCard, Calendar, Mic, Terminal, ShieldCheck, Cpu } from 'lucide-react';

export const InputVariants = {
  // 1. Glowing Neon (From Image)
  GlowingNeon: () => (
    <div className="relative group w-full max-w-sm">
      <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg blur opacity-25 group-focus-within:opacity-100 transition duration-200"></div>
      <input type="text" placeholder="Focus me!" className="relative w-full px-4 py-3 rounded-lg border-2 border-gray-700 bg-black text-white outline-none focus:border-rose-500 transition-all" />
    </div>
  ),

  // 2. Cyberpunk Terminal
  Cyberpunk: () => (
    <div className="flex flex-col w-full max-w-sm gap-1">
      <label className="text-[10px] text-[#0fa] font-mono uppercase tracking-[0.2em]">User_Access</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0fa] font-mono">{'>'}</span>
        <input type="text" className="w-full bg-zinc-900 border-b-2 border-[#0fa] text-[#0fa] font-mono px-8 py-2 outline-none focus:bg-zinc-800 transition-all shadow-[0_4px_10px_rgba(0,255,170,0.1)]" placeholder="Enter credentials..." />
      </div>
    </div>
  ),

  // 3. Glassmorphism
  Glass: () => (
    <input type="text" className="w-full max-w-sm px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white placeholder:text-white/30 outline-none focus:bg-white/10 focus:border-white/20 transition-all" placeholder="Search anything..." />
  ),

  // 4. Neumorphic Inset
  Neumorphic: () => (
    <input type="text" className="w-full max-w-sm px-6 py-3 bg-[#e0e0e0] rounded-xl shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] text-zinc-600 outline-none placeholder:text-zinc-400" placeholder="Type here..." />
  ),

  // 5. Brutalist Bold
  Brutalist: () => (
    <div className="w-full max-w-sm relative">
      <input type="text" className="w-full px-4 py-3 border-4 border-black bg-white text-black font-black uppercase tracking-tight outline-none focus:-translate-x-1 focus:-translate-y-1 transition-transform relative z-10" placeholder="Username" />
      <div className="absolute inset-0 bg-yellow-400 translate-x-2 translate-y-2 border-4 border-black" />
    </div>
  ),

  // 6. Minimal Floating Label
  FloatingLabel: () => (
    <div className="relative w-full max-w-sm pt-4">
      <input type="text" id="floating" className="peer w-full bg-transparent border-b-2 border-zinc-700 py-2 outline-none focus:border-[#0fa] transition-colors text-white placeholder-transparent" placeholder="Name" />
      <label htmlFor="floating" className="absolute left-0 top-0 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#0fa]">Full Name</label>
    </div>
  ),

  // 7. Icon Animated Focus
  IconFocus: () => (
    <div className="relative w-full max-w-sm">
      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-blue-500" size={18} />
      <input type="email" className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" placeholder="email@example.com" />
    </div>
  ),

  // 8. Retro 8-Bit Input
  Retro8Bit: () => (
    <div className="w-full max-w-sm border-4 border-black p-1 bg-[#212529]">
      <input type="text" className="w-full bg-white border-4 border-zinc-400 px-4 py-2 font-mono text-black outline-none focus:border-[#92cc41]" placeholder="INSERT_NAME" />
    </div>
  ),

  // 9. Gradient Border Inset
  GradientBorder: () => (
    <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full max-w-sm group">
      <input type="text" className="w-full px-4 py-3 bg-[#0a0a0a] rounded-[10px] outline-none text-white" placeholder="Premium search..." />
    </div>
  ),

  // 10. Search with Kbd
  SearchKbd: () => (
    <div className="relative w-full max-w-sm flex items-center">
      <Search className="absolute left-4 text-zinc-500" size={18} />
      <input type="text" className="w-full pl-12 pr-16 py-3 bg-zinc-900 border border-zinc-800 rounded-2xl outline-none focus:border-zinc-600" placeholder="Search docs..." />
      <div className="absolute right-4 px-1.5 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-[10px] font-mono text-zinc-500">⌘K</div>
    </div>
  ),

  // 11. Liquid Bottom Line
  LiquidBottom: () => (
    <div className="relative w-full max-w-sm group">
      <input type="text" className="w-full bg-transparent py-3 outline-none text-white border-b border-zinc-800" placeholder="Focus for liquid effect" />
      <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-emerald-500 transition-all duration-500 group-focus-within:w-full group-focus-within:left-0" />
    </div>
  ),

  // 12. Soft Claymorphism Input
  SoftClay: () => (
    <input type="text" className="w-full max-w-sm px-6 py-4 bg-blue-50 rounded-2xl shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] text-blue-900 outline-none placeholder:text-blue-300" placeholder="Soft touch..." />
  ),

  // 13. Credit Card Inset
  CreditCard: () => (
    <div className="w-full max-w-sm p-4 bg-zinc-900 rounded-2xl border border-zinc-800 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <CreditCard className="text-zinc-500" size={24} />
        <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Payment System</span>
      </div>
      <input type="text" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 font-mono text-white outline-none focus:border-blue-500" placeholder="0000 0000 0000 0000" />
    </div>
  ),

  // 14. Glitch Input
  GlitchInput: () => (
    <div className="relative w-full max-w-sm">
      <input type="text" className="w-full px-4 py-3 bg-zinc-950 border-r-4 border-orange-500 text-white font-black italic outline-none focus:shadow-[2px_0_0_#0ea5e9,-2px_0_0_#f43f5e] transition-shadow" placeholder="GLITCH_INPUT" />
    </div>
  ),

  // 15. Minimal Underline
  MinimalUnderline: () => (
    <input type="text" className="w-full max-w-sm bg-transparent border-b border-zinc-800 py-2 outline-none focus:border-white transition-colors text-center text-2xl font-light" placeholder="Title here" />
  ),

  // 16. Tag Style Input
  TagInput: () => (
    <div className="flex flex-wrap gap-2 p-2 bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-sm">
      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-md border border-blue-500/30">React</span>
      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-md border border-purple-500/30">Tailwind</span>
      <input type="text" className="flex-1 bg-transparent outline-none text-sm px-2 py-1" placeholder="Add tags..." />
    </div>
  ),

  // 17. Rounded Pill Search
  RoundedPill: () => (
    <div className="relative w-full max-w-sm">
      <input type="text" className="w-full px-6 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-full outline-none focus:ring-2 focus:ring-blue-500 transition-all text-zinc-900 dark:text-white" placeholder="Search..." />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
        <Send size={16} />
      </button>
    </div>
  ),

  // 18. Neon Border Pulse
  NeonBorder: () => (
    <input type="text" className="w-full max-w-sm px-4 py-3 bg-black border-2 border-[#bc13fe] rounded-lg text-white shadow-[0_0_10px_rgba(188,19,254,0.2)] focus:shadow-[0_0_20px_rgba(188,19,254,0.5)] outline-none transition-all" placeholder="Pulsating border..." />
  ),

  // 19. Ghost Inset
  GhostInset: () => (
    <div className="w-full max-w-sm border-2 border-dashed border-zinc-800 rounded-xl p-1 group hover:border-zinc-600 transition-colors">
      <input type="text" className="w-full px-4 py-3 bg-transparent outline-none text-zinc-400 group-hover:text-white transition-colors" placeholder="Dashed border input..." />
    </div>
  ),

  // 20. Modern Calendar Select
  ModernCalendar: () => (
    <div className="relative w-full max-w-sm group">
      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
      <input type="date" className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 outline-none focus:text-white focus:border-[#0fa] transition-all appearance-none" />
    </div>
  ),

  // 21. Password with Visibility Toggle (Mockup)
  PasswordToggle: () => (
    <div className="relative w-full max-w-sm">
      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
      <input type="password" className="w-full pl-12 pr-12 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-purple-500 outline-none transition-all" placeholder="Enter password" />
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
      </button>
    </div>
  ),

  // 22. Underline Wave
  UnderlineWave: () => (
    <div className="relative w-full max-w-sm group">
      <input type="text" className="w-full bg-transparent py-3 outline-none text-white border-b-2 border-zinc-800 focus:border-transparent transition-all" placeholder="Wave animation focus" />
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  ),

  // 23. Shake Error Style
  ShakeError: () => (
    <input type="text" className="w-full max-w-sm px-4 py-3 bg-zinc-900 border-2 border-red-500/30 rounded-lg text-white outline-none focus:border-red-500 focus:animate-[shake_0.5s_ease-in-out]" placeholder="Error state focus..." />
  ),

  // 24. Soft Neumorphic Dark
  NeumorphicDark: () => (
    <input type="text" className="w-full max-w-sm px-6 py-3 bg-[#1a1a1a] rounded-xl shadow-[5px_5px_10px_#0d0d0d,-5px_-5px_10px_#272727] text-zinc-400 outline-none focus:shadow-[inset_5px_5px_10px_#0d0d0d,inset_-5px_-5px_10px_#272727] transition-all" placeholder="Dark neumorphism..." />
  ),

  // 25. Cyberpunk Label Slide
  CyberLabel: () => (
    <div className="relative w-full max-w-sm group">
      <input type="text" className="w-full bg-black border-2 border-zinc-800 px-4 py-4 text-[#0fa] outline-none focus:border-[#0fa] transition-all peer placeholder-transparent" placeholder="Cyber" />
      <label className="absolute left-2 -top-3 bg-black px-2 text-[10px] text-zinc-500 uppercase tracking-widest peer-focus:text-[#0fa] transition-colors">Security_Token</label>
      <div className="absolute right-0 top-0 h-full w-1 bg-[#0fa] opacity-0 group-focus-within:opacity-100 transition-opacity" />
    </div>
  ),

  // 26. Glass Inset with Glow
  GlassGlow: () => (
    <div className="relative w-full max-w-sm group">
      <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
      <input type="text" className="relative w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg text-white outline-none focus:border-blue-400/50 transition-all" placeholder="Glass glow focus..." />
    </div>
  ),

  // 27. Retro Command Line
  RetroCmd: () => (
    <div className="w-full max-w-sm bg-black border border-zinc-700 p-1">
      <div className="flex items-center gap-2 px-2 py-1 bg-zinc-800 text-[10px] font-mono text-zinc-400 uppercase">
        <span>Terminal</span>
        <div className="flex gap-1 ml-auto">
          <div className="w-2 h-2 rounded-full bg-zinc-600" />
          <div className="w-2 h-2 rounded-full bg-zinc-600" />
        </div>
      </div>
      <div className="flex items-center gap-2 p-3 font-mono">
        <span className="text-green-500">C:\{">"}</span>
        <input type="text" className="bg-transparent outline-none text-white w-full" placeholder="dir /w" />
      </div>
    </div>
  ),

  // 28. Minimalist Line Center
  LineCenter: () => (
    <div className="relative w-full max-w-sm">
      <input type="text" className="w-full bg-transparent py-2 text-center text-xl font-light outline-none border-b border-zinc-800 focus:border-white transition-all" placeholder="Centered focus" />
    </div>
  ),

  // 29. Dot Pattern Focus
  DotPattern: () => (
    <div className="relative w-full max-w-sm group">
      <div className="absolute inset-0 opacity-0 group-focus-within:opacity-10 transition-opacity bg-[radial-gradient(#0fa_1px,transparent_1px)] bg-[size:8px_8px] pointer-events-none" />
      <input type="text" className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg outline-none focus:border-[#0fa] transition-all" placeholder="Pattern reveal..." />
    </div>
  ),

  // 30. Search with Shimmer
  SearchShimmer: () => (
    <div className="relative w-full max-w-sm overflow-hidden rounded-full group">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-focus-within:animate-[shimmer_2s_infinite] pointer-events-none" />
      <input type="text" className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-full outline-none focus:border-zinc-600 transition-all" placeholder="Shimmer search..." />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
    </div>
  ),

  // 31. Brutalist Shadow v2
  BrutalistV2: () => (
    <input type="text" className="w-full max-w-sm px-4 py-3 bg-white border-4 border-black text-black font-bold shadow-[8px_8px_0px_#000] outline-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all" placeholder="HARD_INPUT" />
  ),

  // 32. Soft Gradient Inset
  SoftGradient: () => (
    <div className="w-full max-w-sm p-[2px] rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500">
      <div className="bg-zinc-950 rounded-[14px] p-1">
        <input type="text" className="w-full px-4 py-2 bg-transparent outline-none text-white placeholder:text-zinc-600" placeholder="Gradient frame..." />
      </div>
    </div>
  ),

  // 33. Animated Border Dash
  DashBorder: () => (
    <div className="relative w-full max-w-sm group">
      <input type="text" className="w-full px-4 py-3 bg-black border-2 border-dashed border-zinc-800 rounded-lg outline-none focus:border-solid focus:border-blue-500 transition-all" placeholder="Dashed to solid..." />
    </div>
  ),

  // 34. Floating Icon Right
  IconRight: () => (
    <div className="relative w-full max-w-sm">
      <input type="text" className="w-full pr-12 pl-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl outline-none focus:border-orange-500 transition-all" placeholder="Username..." />
      <User className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-orange-500 transition-colors" size={18} />
    </div>
  ),

  // 35. Double Underline
  DoubleUnderline: () => (
    <div className="relative w-full max-w-sm group">
      <input type="text" className="w-full bg-transparent py-2 outline-none text-white border-b border-zinc-800" placeholder="Double line focus" />
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-center" />
      <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-zinc-800 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 delay-100 origin-center" />
    </div>
  ),

  // 36. Plastic Skeuomorphic
  PlasticInput: () => (
    <div className="w-full max-w-sm p-1 bg-zinc-400 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
      <input type="text" className="w-full px-4 py-3 bg-gradient-to-b from-zinc-100 to-zinc-300 rounded-lg border border-zinc-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] text-black outline-none" placeholder="Plastic style..." />
    </div>
  ),

  // 37. Pill with Badge
  PillBadge: () => (
    <div className="relative w-full max-w-sm flex items-center">
      <input type="text" className="w-full px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full outline-none focus:border-blue-500" placeholder="v4.0 update..." />
      <span className="absolute right-4 px-2 py-0.5 bg-blue-500 text-[8px] font-black text-white rounded-full uppercase">New</span>
    </div>
  ),

  // 38. Typewriter Effect (Placeholder)
  Typewriter: () => (
    <input type="text" className="w-full max-w-sm px-4 py-3 bg-transparent border-2 border-zinc-800 rounded-lg text-white font-mono outline-none focus:border-[#0fa] placeholder:animate-pulse" placeholder="system.input(_)" />
  ),

  // 39. Vertical Label Inset
  VerticalLabel: () => (
    <div className="flex w-full max-w-sm border border-zinc-800 rounded-xl overflow-hidden group focus-within:border-white transition-colors">
      <div className="bg-zinc-900 px-2 py-3 border-r border-zinc-800 flex items-center group-focus-within:bg-white group-focus-within:text-black transition-all">
        <span className="text-[8px] font-black uppercase [writing-mode:vertical-lr] rotate-180">Secure</span>
      </div>
      <input type="text" className="flex-1 bg-black px-4 py-3 outline-none text-white" placeholder="Vertical side label..." />
    </div>
  ),

  // 40. Bento Style Form Field
  BentoField: () => (
    <div className="w-full max-w-sm p-4 bg-zinc-900 rounded-3xl border border-zinc-800 space-y-3">
      <div className="flex items-center justify-between px-1">
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Personal Info</span>
        <User size={14} className="text-zinc-500" />
      </div>
      <input type="text" className="w-full bg-black border border-zinc-800 rounded-2xl px-4 py-2 text-sm outline-none focus:border-white transition-all" placeholder="Full name" />
    </div>
  ),

  // 41. Voice Search Glass
  VoiceSearch: () => (
    <div className="relative w-full max-w-sm flex items-center">
      <Search className="absolute left-4 text-white/40" size={18} />
      <input type="text" className="w-full pl-12 pr-12 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white outline-none focus:bg-white/10 transition-all" placeholder="Ask anything..." />
      <button className="absolute right-4 p-1.5 bg-blue-500/20 text-blue-400 rounded-full hover:bg-blue-500/40 transition-colors">
        <Mic size={16} />
      </button>
    </div>
  ),

  // 42. Neon Underline Glow (Cian)
  NeonUnderline: () => (
    <div className="relative w-full max-w-sm group">
      <input type="text" className="w-full bg-transparent py-3 outline-none text-white border-b-2 border-zinc-800 transition-all" placeholder="Cian glow focus" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0fa] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 shadow-[0_0_15px_#0fa]" />
    </div>
  ),

  // 43. Retro Arcade Text
  RetroArcade: () => (
    <div className="w-full max-w-sm p-1 bg-black border-4 border-[#ffac33] shadow-[4px_4px_0_#ffac33]">
      <input type="text" className="w-full bg-black text-[#ffac33] font-mono px-4 py-2 outline-none uppercase placeholder:text-[#ffac33]/30" placeholder="Insert Coin" />
    </div>
  ),

  // 44. Futuristic Data Field
  DataField: () => (
    <div className="relative w-full max-w-sm group">
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-500" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-blue-500" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-blue-500" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-500" />
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity animate-pulse" />
      <input type="text" className="w-full bg-transparent px-6 py-3 font-mono text-blue-400 outline-none text-sm" placeholder="[PROTOCOL_INIT]" />
    </div>
  ),

  // 45. Minimalist Dot Placeholder
  DotPlaceholder: () => (
    <div className="relative w-full max-w-sm">
      <input type="text" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-white transition-all peer placeholder-transparent" placeholder="Name" />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex gap-1 pointer-events-none peer-focus:opacity-0 transition-opacity">
        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
      </div>
    </div>
  ),

  // 46. Glassmorphism Search Light
  GlassSearchLight: () => (
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 blur-lg opacity-10" />
      <input type="text" className="relative w-full px-6 py-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/20 rounded-full outline-none focus:ring-4 focus:ring-teal-500/20 transition-all" placeholder="Smart search..." />
    </div>
  ),

  // 47. Cyberpunk Glitch Input v2
  CyberGlitchV2: () => (
    <div className="relative w-full max-w-sm group">
      <input type="text" className="w-full bg-black border-2 border-zinc-800 px-4 py-3 text-white font-black italic outline-none focus:border-rose-500 transition-all relative z-10" placeholder="SYSTEM_ERROR" />
      <div className="absolute -inset-0.5 bg-rose-500 opacity-0 group-focus-within:opacity-50 blur-[2px] -z-0 translate-x-[2px] transition-opacity" />
      <div className="absolute -inset-0.5 bg-cyan-500 opacity-0 group-focus-within:opacity-50 blur-[2px] -z-0 -translate-x-[2px] transition-opacity" />
    </div>
  ),

  // 48. Bento Box Form Field v2
  BentoFormV2: () => (
    <div className="w-full max-w-sm p-1 bg-zinc-900 border border-zinc-800 rounded-[1.5rem] group focus-within:bg-zinc-800 transition-colors">
      <div className="flex items-center gap-3 p-3">
        <div className="p-2 bg-zinc-800 rounded-xl group-focus-within:bg-black group-focus-within:text-[#0fa] transition-all">
          <Mail size={18} />
        </div>
        <input type="email" className="flex-1 bg-transparent outline-none text-sm" placeholder="Subscribe to news" />
      </div>
    </div>
  ),

  // 49. 3D Inset Shadow Soft
  Inset3DSoft: () => (
    <div className="w-full max-w-sm p-2 bg-[#f0f0f0] rounded-2xl shadow-[inset_-4px_-4px_8px_#ffffff,inset_4px_4px_8px_#bebebe]">
      <input type="text" className="w-full bg-transparent px-4 py-2 outline-none text-zinc-600 font-medium" placeholder="Inset depth..." />
    </div>
  ),

  // 50. Industrial Stencil v2
  StencilV2: () => (
    <div className="w-full max-w-sm relative">
      <input type="text" className="w-full bg-zinc-900 border-4 border-zinc-800 px-4 py-3 font-black uppercase text-zinc-500 outline-none focus:text-[#0fa] focus:border-[#0fa] transition-colors" placeholder="Serial_Number" />
      <div className="absolute top-0 right-4 px-2 bg-black -translate-y-1/2 text-[8px] font-bold text-zinc-600 uppercase tracking-[0.3em]">Hardware_ID</div>
    </div>
  ),

  // 51. Soft Purple Glow Focus
  PurpleGlowFocus: () => (
    <input type="text" className="w-full max-w-sm px-6 py-3 bg-zinc-900 border-2 border-transparent rounded-2xl outline-none focus:border-purple-500 focus:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all text-center font-bold" placeholder="Magic touch" />
  ),

  // 52. Double Line Inset Tech
  DoubleLineTech: () => (
    <div className="relative w-full max-w-sm group">
      <input type="text" className="w-full bg-zinc-950 px-10 py-3 border border-zinc-800 rounded-sm outline-none focus:border-blue-500 transition-all" placeholder="Admin Access" />
      <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-blue-500 transition-colors" size={18} />
      <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-500 opacity-0 group-focus-within:opacity-100 transition-opacity" />
    </div>
  ),

  // 53. Floating Icon Left User
  UserFloat: () => (
    <div className="relative w-full max-w-sm">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-500 group-focus-within:bg-orange-500 group-focus-within:text-white transition-all duration-300 ml-1">
        <User size={20} />
      </div>
      <input type="text" className="w-full pl-14 pr-4 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl outline-none focus:border-orange-500/50" placeholder="Display name" />
    </div>
  ),

  // 54. Minimalist Frame Focus
  MinimalFrame: () => (
    <div className="relative w-full max-w-sm">
      <input type="text" className="w-full bg-transparent py-3 text-center outline-none text-white border-y border-zinc-800 focus:border-white transition-all duration-500" placeholder="Border focus animation" />
      <div className="absolute top-0 left-0 h-full w-[1px] bg-white scale-y-0 focus-within:scale-y-100 transition-transform duration-500 origin-top" />
      <div className="absolute top-0 right-0 h-full w-[1px] bg-white scale-y-0 focus-within:scale-y-100 transition-transform duration-500 origin-bottom" />
    </div>
  ),

  // 55. Liquid Fill Background Green
  LiquidFillGreen: () => (
    <div className="relative w-full max-w-sm rounded-lg overflow-hidden border-2 border-emerald-500/20 focus-within:border-emerald-500 transition-colors">
      <div className="absolute inset-0 bg-emerald-500 translate-y-full group-focus-within:translate-y-0 transition-transform duration-500 opacity-10" />
      <input type="text" className="relative w-full bg-transparent px-4 py-3 outline-none text-emerald-400 placeholder:text-emerald-500/30" placeholder="Liquid environment..." />
    </div>
  ),

  // 56. Retro Typewriter Mono
  RetroTypewriter: () => (
    <div className="w-full max-w-sm font-mono text-zinc-400 bg-zinc-900 p-4 border-l-4 border-zinc-700 focus-within:border-[#0fa] transition-colors">
      <div className="flex gap-2 mb-2">
        <span className="text-[10px] uppercase font-bold text-zinc-600 tracking-[0.2em]">Manual_Input</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="animate-pulse">{">"}</span>
        <input type="text" className="bg-transparent outline-none text-white w-full" placeholder="_" />
      </div>
    </div>
  ),

  // 57. Modern Dark Glass Blur 2xl
  DarkGlass2XL: () => (
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full opacity-50" />
      <input type="text" className="relative w-full px-8 py-4 bg-black/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] text-white outline-none focus:border-white/20 transition-all text-lg" placeholder="Deep glass..." />
    </div>
  ),

  // 58. Perspective Tilt Focus Input
  PerspectiveTiltInput: () => (
    <div className="[perspective:1000px] w-full max-w-sm">
      <input type="text" className="w-full bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-xl outline-none focus:border-[#0fa] transition-all duration-500 hover:[transform:rotateX(10deg)_rotateY(5deg)] focus:[transform:rotateX(0deg)_rotateY(0deg)]" placeholder="Perspective hover..." />
    </div>
  ),

  // 59. Neon Border Dash Yellow
  NeonDashYellow: () => (
    <input type="text" className="w-full max-w-sm px-4 py-3 bg-black border-2 border-dashed border-yellow-500 rounded-lg text-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.2)] focus:border-solid focus:shadow-[0_0_20px_rgba(234,179,8,0.4)] outline-none transition-all" placeholder="Caution: Active focus" />
  ),

  // 60. Ultimate Hybrid Terminal v2
  HybridTerminal: () => (
    <div className="w-full max-w-sm bg-black border-2 border-zinc-800 rounded-lg overflow-hidden group focus-within:border-blue-500 transition-colors">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-zinc-700" />
          <div className="w-2 h-2 rounded-full bg-zinc-700" />
          <div className="w-2 h-2 rounded-full bg-zinc-700" />
        </div>
        <Cpu size={12} className="text-zinc-600 group-focus-within:text-blue-500 animate-spin" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest">
          <Terminal size={14} />
          <span>Kernel_Shell</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-500 font-mono">#</span>
          <input type="text" className="bg-transparent outline-none text-white font-mono w-full text-sm" placeholder="root@user:~$" />
        </div>
      </div>
    </div>
  ),

  // 61. Interactive OTP verification input blocks
  Interactive_OTP: () => {
    const [otp, setOtp] = React.useState(['', '', '', '']);
    const refs = [
      React.useRef<HTMLInputElement>(null),
      React.useRef<HTMLInputElement>(null),
      React.useRef<HTMLInputElement>(null),
      React.useRef<HTMLInputElement>(null)
    ];

    const handleChange = (index: number, val: string) => {
      if (!/^[0-9]?$/.test(val)) return;
      const newOtp = [...otp];
      newOtp[index] = val;
      setOtp(newOtp);

      if (val && index < 3) {
        refs[index + 1].current?.focus();
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && !otp[index] && index > 0) {
        refs[index - 1].current?.focus();
      }
    };

    return (
      <div className="flex flex-col gap-2 items-center w-full max-w-sm">
        <label className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">Verification Code</label>
        <div className="flex gap-3 justify-center">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={refs[idx]}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              className="w-12 h-14 bg-zinc-950/60 border border-zinc-800 text-center font-bold text-xl text-white rounded-xl focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none transition-all shadow-[0_0_15px_rgba(244,63,94,0.02)] focus:shadow-[0_0_20px_rgba(244,63,94,0.1)]"
            />
          ))}
        </div>
      </div>
    );
  },

  // 62. Creative GooeyLine fluid input
  Creative_GooeyLine: () => {
    return (
      <div className="relative w-full max-w-sm group">
        <svg className="hidden">
          <defs>
            <filter id="gooey-input-line">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <input
          type="text"
          className="w-full bg-transparent py-3 outline-none text-white border-b-2 border-zinc-800 placeholder-zinc-600 transition-colors focus:border-emerald-500/10"
          placeholder="Focus to activate gooey line..."
        />
        <div className="absolute -bottom-[2px] left-0 w-full h-[6px] pointer-events-none overflow-hidden [filter:url(#gooey-input-line)]">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-zinc-800 group-focus-within:bg-emerald-500 transition-colors duration-300" />
          <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full scale-0 group-focus-within:scale-100 transition-transform duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)" />
          <div className="absolute -top-[1px] left-1/4 w-2.5 h-2.5 bg-emerald-500 rounded-full scale-0 group-focus-within:scale-100 transition-transform duration-700 cubic-bezier(0.175, 0.885, 0.32, 1.275)" />
          <div className="absolute -top-[1px] right-1/4 w-2.5 h-2.5 bg-emerald-500 rounded-full scale-0 group-focus-within:scale-100 transition-transform duration-700 cubic-bezier(0.175, 0.885, 0.32, 1.275)" />
        </div>
      </div>
    );
  },

  // 63. Cyber TacHUD sci-fi telemetry field
  Cyber_TacHUD: () => {
    const [focused, setFocused] = React.useState(false);
    return (
      <div className="relative w-full max-w-sm font-mono text-xs">
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-500/40 group-focus-within:border-cyan-500 transition-all duration-300" />
        <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-cyan-500/40 group-focus-within:border-cyan-500 transition-all duration-300" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-cyan-500/40 group-focus-within:border-cyan-500 transition-all duration-300" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-cyan-500/40 group-focus-within:border-cyan-500 transition-all duration-300" />
        
        <div className="bg-zinc-950/80 border border-cyan-500/20 rounded-sm p-4 focus-within:border-cyan-500/60 focus-within:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300">
          <div className="flex justify-between text-[8px] text-cyan-500/50 uppercase tracking-widest mb-1.5">
            <span>SYS.ACCESS_FIELD</span>
            <span className={cn("animate-pulse", focused ? "text-cyan-400" : "")}>{focused ? "ONLINE" : "STANDBY"}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-cyan-400 font-bold">{">"}</span>
            <input
              type="text"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="w-full bg-transparent outline-none text-cyan-400 placeholder-cyan-500/30 tracking-wide text-xs"
              placeholder="ENTER SECURE PROTOCOL..."
            />
          </div>
          {focused && (
            <div className="mt-2 text-[8px] text-cyan-500/40 border-t border-cyan-500/10 pt-1.5 flex justify-between animate-[fadeIn_0.3s_ease-out]">
              <span>[SECURE_SHELL_V3]</span>
              <span>LOG: IDLE</span>
            </div>
          )}
        </div>
      </div>
    );
  },

  // 64. SaaS SpotlightCard search box
  SaaS_SpotlightCard: () => {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });
    const [hovering, setHovering] = React.useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative w-full max-w-sm p-[1px] rounded-2xl overflow-hidden bg-zinc-800/40 focus-within:bg-zinc-800 transition-colors duration-300"
      >
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-2xl"
          style={{
            opacity: hovering ? 1 : 0,
            background: `radial-gradient(120px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.15), transparent)`
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-2xl"
          style={{
            opacity: hovering ? 1 : 0,
            background: `radial-gradient(80px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.4), transparent)`
          }}
        />
        
        <div className="relative bg-zinc-950/90 rounded-2xl p-3 flex items-center gap-3">
          <Search className="text-zinc-500 group-focus-within:text-white" size={16} />
          <input
            type="text"
            className="w-full bg-transparent outline-none text-white text-sm placeholder-zinc-500"
            placeholder="AI Search platform..."
          />
          <div className="px-1.5 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-[9px] font-mono text-zinc-500 select-none">⌘K</div>
        </div>
      </div>
    );
  },

  // 65. Brutalist KineticPop elastic label field
  Brutalist_KineticPop: () => {
    const [value, setValue] = React.useState('');
    const [focused, setFocused] = React.useState(false);
    const active = focused || value.length > 0;
    return (
      <div className="relative w-full max-w-sm pt-5">
        <label
          className={cn(
            "absolute left-4 font-black uppercase text-[10px] tracking-tight border-2 border-black bg-yellow-400 text-black px-2 py-0.5 shadow-[2px_2px_0_#000] pointer-events-none transition-all duration-300 z-20",
            active 
              ? "-top-2 scale-100 rotate-2 shadow-[2px_2px_0_#000]" 
              : "top-8 -translate-y-1/2 scale-110 rotate-0 shadow-[0px_0px_0_#000]"
          )}
        >
          Username
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-white border-4 border-black text-black font-bold px-4 py-3 shadow-[6px_6px_0_#000] outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[4px_4px_0_#000] transition-all text-sm"
        />
      </div>
    );
  },

  // 66. Modern TagCombo selector and text box
  Modern_TagCombo: () => {
    const [tags, setTags] = React.useState(['AI', 'NextJS']);
    const [input, setInput] = React.useState('');

    const handleAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && input.trim()) {
        e.preventDefault();
        if (!tags.includes(input.trim())) {
          setTags([...tags, input.trim()]);
        }
        setInput('');
      }
    };

    const handleRemove = (tagToRemove: string) => {
      setTags(tags.filter(t => t !== tagToRemove));
    };

    return (
      <div className="w-full max-w-sm p-3 bg-zinc-900/60 border border-zinc-800 rounded-2xl focus-within:border-zinc-700 focus-within:ring-4 focus-within:ring-zinc-800/20 transition-all">
        <div className="flex flex-wrap gap-2 items-center">
          {tags.map(t => (
            <span
              key={t}
              className="flex items-center gap-1.5 px-2 py-0.5 bg-zinc-800 text-zinc-300 text-xs rounded-lg border border-zinc-700/50"
            >
              {t}
              <button
                type="button"
                onClick={() => handleRemove(t)}
                className="text-zinc-500 hover:text-zinc-200 transition-colors ml-1"
              >
                ✕
              </button>
            </span>
          ))}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleAdd}
            className="flex-1 min-w-[100px] bg-transparent outline-none text-white text-xs py-1"
            placeholder="Add categories..."
          />
        </div>
      </div>
    );
  },

  // 67. Luxury SerifMinimal editorial search bar
  Luxury_SerifMinimal: () => {
    const [focused, setFocused] = React.useState(false);
    return (
      <div className="relative w-full max-w-sm flex flex-col pt-4">
        <label
          className={cn(
            "text-[10px] text-amber-500/70 tracking-[0.2em] font-serif uppercase transition-all duration-500 ease-in-out pointer-events-none mb-1.5",
            focused ? "opacity-100 pl-1" : "opacity-60 pl-0"
          )}
        >
          Maison Luxury Search
        </label>
        <div className="relative w-full">
          <input
            type="text"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent py-2 text-white font-serif text-base outline-none placeholder:text-zinc-700"
            placeholder="Exquisite collection..."
          />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-800" />
          <div className={cn(
            "absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 transition-all duration-700 origin-left",
            focused ? "w-full" : "w-0"
          )} />
        </div>
      </div>
    );
  },

  // 68. Retro Chamber glowing mainframe CRT prompt
  Retro_Chamber: () => {
    return (
      <div className="relative w-full max-w-sm overflow-hidden bg-black border border-green-500/40 rounded p-4 font-mono text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none" />
        <div className="absolute inset-0 bg-green-500/5 opacity-5 pointer-events-none" />
        
        <div className="flex flex-col gap-1">
          <span className="text-[8px] text-green-500/60 uppercase tracking-widest font-black flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-green-500 animate-ping" />
            mainframe_system_terminal
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-green-400">{">"}</span>
            <input
              type="text"
              className="w-full bg-transparent outline-none text-green-500 font-mono text-xs caret-green-400"
              placeholder="sys.mount_storage(_)"
            />
          </div>
        </div>
      </div>
    );
  },

  // 69. Interactive PasswordStrength visual gauge field
  Interactive_PasswordStrength: () => {
    const [password, setPassword] = React.useState('');
    
    const getStrength = () => {
      const len = password.length;
      if (len === 0) return { pct: 0, color: 'bg-zinc-800', label: 'Empty' };
      if (len < 6) return { pct: 25, color: 'bg-rose-500', label: 'Weak' };
      
      const hasNumber = /\d/.test(password);
      const hasUpper = /[A-Z]/.test(password);
      const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      
      let score = 50;
      if (hasNumber) score += 15;
      if (hasUpper) score += 15;
      if (hasSpecial) score += 20;
      
      if (score < 65) return { pct: 50, color: 'bg-amber-500', label: 'Medium' };
      return { pct: 100, color: 'bg-emerald-500', label: 'Strong' };
    };

    const strength = getStrength();

    return (
      <div className="relative w-full max-w-sm flex flex-col gap-2">
        <div className="relative flex items-center">
          <Lock className="absolute left-4 text-zinc-500" size={16} />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/5 outline-none transition-all text-white text-sm"
            placeholder="Secure password"
          />
        </div>
        {password.length > 0 && (
          <div className="px-1 flex flex-col gap-1">
            <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
              <div
                className={cn("h-full transition-all duration-500 ease-out", strength.color)}
                style={{ width: `${strength.pct}%` }}
              />
            </div>
            <div className="flex justify-between text-[9px] text-zinc-500">
              <span>Security Gauge</span>
              <span className="font-bold text-zinc-400">{strength.label}</span>
            </div>
          </div>
        )}
      </div>
    );
  },

  // 70. Clay SoftBubble tactile squishy 3D input
  Clay_SoftBubble: () => {
    return (
      <input
        type="text"
        className="w-full max-w-sm px-6 py-3.5 bg-blue-100 rounded-[2rem] border border-blue-200/40 text-blue-900 font-bold outline-none placeholder:text-blue-300 shadow-[inset_-6px_-6px_10px_#ffffff,inset_6px_6px_10px_#a3b8cc,0_8px_16px_rgba(163,184,204,0.3)] hover:scale-[1.02] focus:scale-95 active:scale-95 transition-all duration-300 text-center text-sm"
        placeholder="Squish me bubble input..."
      />
    );
  }
};
