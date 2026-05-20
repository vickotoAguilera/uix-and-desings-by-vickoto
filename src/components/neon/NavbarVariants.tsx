"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Search, ShoppingBag, User, Bell, Github as GitHub, Twitter, Layers, Zap, Cpu, Shield, Globe, ArrowRight, Terminal } from 'lucide-react';

export const NavbarVariants = {
  // 1. Cyberpunk Neon
  Cyberpunk: () => (
    <nav className="w-full bg-black border-b-2 border-[#0fa] shadow-[0_0_15px_#0fa] px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#0fa] rounded-sm animate-pulse" />
        <span className="text-xl font-black text-white italic tracking-tighter">CYBER_NAV</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-[#0fa] font-mono text-sm">
        <a href="#" className="hover:text-white hover:glow transition-all">TERMINAL</a>
        <a href="#" className="hover:text-white hover:glow transition-all">NETWORKS</a>
        <a href="#" className="hover:text-white hover:glow transition-all">ENCRYPTION</a>
      </div>
      <button className="px-4 py-1 border border-[#0fa] text-[#0fa] font-mono text-xs hover:bg-[#0fa] hover:text-black transition-all">
        CONNECT_ID
      </button>
    </nav>
  ),

  // 2. Glassmorphism Floating
  GlassFloating: () => (
    <div className="w-full p-4 bg-gradient-to-r from-indigo-500 to-purple-600">
      <nav className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-2 text-white font-bold">
          <Layers size={20} />
          <span>AuraUI</span>
        </div>
        <div className="flex gap-6 text-white/70 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Showcase</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <button className="bg-white text-indigo-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-opacity-90 transition-all">
          Get Started
        </button>
      </nav>
    </div>
  ),

  // 3. Minimalist Dark
  MinimalDark: () => (
    <nav className="w-full bg-zinc-950 px-8 py-6 flex items-center justify-between border-b border-zinc-900">
      <span className="text-white font-light tracking-[0.3em] uppercase">Minimal</span>
      <div className="flex gap-12 text-zinc-500 text-xs uppercase tracking-widest">
        <a href="#" className="hover:text-white transition-colors">Work</a>
        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>
      <div className="w-10 h-[1px] bg-zinc-700" />
    </nav>
  ),

  // 4. Brutalist Hard
  Brutalist: () => (
    <nav className="w-full bg-yellow-400 border-b-4 border-black px-6 py-4 flex items-center justify-between">
      <span className="text-2xl font-black text-black uppercase">Logo.</span>
      <div className="flex gap-1 bg-black p-1">
        <button className="bg-white text-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors">MENU_01</button>
        <button className="bg-white text-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors">MENU_02</button>
      </div>
      <button className="bg-black text-white px-6 py-2 font-bold border-2 border-black hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_rgba(0,0,0,1)]">
        JOIN
      </button>
    </nav>
  ),

  // 5. Apple Style Center
  AppleStyle: () => (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-zinc-200 px-6 py-3 flex items-center justify-between sticky top-0">
      <GitHub size={20} className="text-zinc-900" />
      <div className="flex gap-8 text-zinc-600 text-[13px]">
        <a href="#" className="hover:text-zinc-900 transition-colors">Store</a>
        <a href="#" className="hover:text-zinc-900 transition-colors">Mac</a>
        <a href="#" className="hover:text-zinc-900 transition-colors">iPad</a>
        <a href="#" className="hover:text-zinc-900 transition-colors">iPhone</a>
      </div>
      <div className="flex gap-4 items-center text-zinc-600">
        <Search size={18} />
        <ShoppingBag size={18} />
      </div>
    </nav>
  ),

  // 6. Neumorphic Soft
  Neumorphic: () => (
    <div className="w-full bg-zinc-100 p-4">
      <nav className="bg-zinc-100 rounded-3xl p-4 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-between px-8">
        <div className="w-10 h-10 rounded-full bg-zinc-100 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-blue-500" />
        </div>
        <div className="flex gap-8 text-zinc-600 font-medium">
          <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Explore</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Profile</a>
        </div>
        <button className="px-6 py-2 rounded-xl bg-zinc-100 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] text-zinc-600 font-bold transition-all">
          Login
        </button>
      </nav>
    </div>
  ),

  // 7. SaaS Modern
  SaaS: () => (
    <nav className="w-full bg-white px-8 py-4 flex items-center justify-between border-b border-zinc-100">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
          <Zap fill="currentColor" />
          <span>FlashPay</span>
        </div>
        <div className="hidden lg:flex gap-6 text-zinc-500 font-medium text-sm">
          <a href="#" className="hover:text-indigo-600 transition-colors">Products</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Solutions</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Developers</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-zinc-600 font-medium text-sm hover:text-zinc-900 transition-colors">Sign in</button>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all">
          Start for free
        </button>
      </div>
    </nav>
  ),

  // 8. Retro 8-Bit
  Retro8Bit: () => (
    <nav className="w-full bg-[#212529] border-b-4 border-black px-6 py-3 flex items-center justify-between font-mono">
      <div className="text-[#92cc41] text-xl font-bold uppercase tracking-tighter">
        {"<PIXEL_NAV />"}
      </div>
      <div className="flex gap-6 text-white text-sm">
        <a href="#" className="hover:text-[#e76e55] hover:underline decoration-2">STAGE_1</a>
        <a href="#" className="hover:text-[#e76e55] hover:underline decoration-2">ITEMS</a>
        <a href="#" className="hover:text-[#e76e55] hover:underline decoration-2">SAVE</a>
      </div>
      <div className="flex gap-2">
        <div className="w-6 h-6 bg-red-500 border-2 border-black" />
        <div className="w-6 h-6 bg-yellow-500 border-2 border-black" />
        <div className="w-6 h-6 bg-green-500 border-2 border-black" />
      </div>
    </nav>
  ),

  // 9. Minimalist Sidebar Style (Horizontal)
  SidebarStyle: () => (
    <nav className="w-full bg-zinc-900 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Menu className="text-zinc-400 hover:text-white cursor-pointer" />
        <div className="h-6 w-[1px] bg-zinc-800" />
        <span className="text-white font-medium">Dashboard</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-zinc-800 border border-zinc-700 rounded-lg pl-10 pr-4 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <Bell size={18} className="text-zinc-400 hover:text-white cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-rose-400 border border-white/20" />
      </div>
    </nav>
  ),

  // 10. Bento Grid Navbar
  Bento: () => (
    <div className="w-full p-4 bg-zinc-950">
      <nav className="max-w-5xl mx-auto grid grid-cols-12 gap-2">
        <div className="col-span-3 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <Cpu size={18} className="text-white" />
          </div>
          <span className="text-white font-bold">Core</span>
        </div>
        <div className="col-span-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-center justify-around text-zinc-400 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Engine</a>
          <a href="#" className="hover:text-white transition-colors">Docs</a>
          <a href="#" className="hover:text-white transition-colors">API</a>
        </div>
        <div className="col-span-3 bg-indigo-600 rounded-2xl p-4 flex items-center justify-center gap-2 text-white font-bold hover:bg-indigo-500 cursor-pointer transition-colors">
          <span>Deploy</span>
          <Zap size={16} fill="currentColor" />
        </div>
      </nav>
    </div>
  ),

  // 11. Holographic Dark
  Holographic: () => (
    <nav className="w-full bg-black/40 backdrop-blur-md border-b border-cyan-500/30 px-8 py-4 flex items-center justify-between relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="flex items-center gap-2 relative z-10">
        <Shield className="text-cyan-400" />
        <span className="text-white font-bold tracking-widest uppercase">Sentinel</span>
      </div>
      <div className="flex gap-10 text-cyan-200/60 text-xs font-mono relative z-10">
        <a href="#" className="hover:text-cyan-400 transition-colors">[ SECURITY ]</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">[ DATABASE ]</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">[ PROTOCOLS ]</a>
      </div>
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent absolute bottom-0 left-1/2 -translate-x-1/2 animate-pulse" />
    </nav>
  ),

  // 12. Floating Pill Center
  PillCenter: () => (
    <div className="w-full py-4 flex justify-center">
      <nav className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-full px-2 py-2 flex items-center gap-1 shadow-xl">
        <a href="#" className="px-6 py-2 rounded-full bg-zinc-900 text-white text-sm font-medium shadow-lg">Home</a>
        <a href="#" className="px-6 py-2 rounded-full text-zinc-600 text-sm font-medium hover:bg-white/50 transition-colors">Work</a>
        <a href="#" className="px-6 py-2 rounded-full text-zinc-600 text-sm font-medium hover:bg-white/50 transition-colors">Lab</a>
        <a href="#" className="px-6 py-2 rounded-full text-zinc-600 text-sm font-medium hover:bg-white/50 transition-colors">Contact</a>
      </nav>
    </div>
  ),

  // 13. Gradient Border Top
  GradientTop: () => (
    <nav className="w-full bg-white px-8 py-5 flex items-center justify-between relative">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-rose-500 via-orange-400 to-indigo-500" />
      <div className="text-2xl font-black italic tracking-tighter">VELOCITY</div>
      <div className="flex gap-8 font-semibold text-zinc-800">
        <a href="#" className="relative group">
          Racing
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full" />
        </a>
        <a href="#" className="relative group">
          Performance
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full" />
        </a>
        <a href="#" className="relative group">
          Shop
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
        </a>
      </div>
      <ShoppingBag className="text-zinc-800" />
    </nav>
  ),

  // 14. Modern Glass Dark v2
  GlassDarkV2: () => (
    <nav className="w-full bg-zinc-950/80 backdrop-blur-2xl border-b border-white/5 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rotate-45 border-2 border-purple-500 flex items-center justify-center">
          <div className="w-2 h-2 bg-purple-500" />
        </div>
        <span className="text-white font-bold">Prism.io</span>
      </div>
      <div className="flex gap-8 text-zinc-400 text-sm">
        <a href="#" className="hover:text-white transition-colors">Resources</a>
        <a href="#" className="hover:text-white transition-colors">Community</a>
        <a href="#" className="hover:text-white transition-colors">Enterprise</a>
      </div>
      <div className="flex gap-4">
        <button className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">Login</button>
        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-zinc-200 transition-colors">Register</button>
      </div>
    </nav>
  ),

  // 15. Industrial Blueprint
  Blueprint: () => (
    <nav className="w-full bg-blue-700 border-b-2 border-blue-400/30 px-6 py-4 flex items-center justify-between relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
      <div className="relative z-10 flex flex-col">
        <span className="text-white font-mono text-xs opacity-50">NAV_SYSTEM_v01</span>
        <span className="text-white font-black tracking-tighter text-xl">STRUCTURE</span>
      </div>
      <div className="relative z-10 flex gap-12 font-mono text-xs text-blue-100 uppercase">
        <a href="#" className="hover:bg-white hover:text-blue-700 px-2 py-1 transition-colors">Drafts</a>
        <a href="#" className="hover:bg-white hover:text-blue-700 px-2 py-1 transition-colors">Layers</a>
        <a href="#" className="hover:bg-white hover:text-blue-700 px-2 py-1 transition-colors">Render</a>
      </div>
      <div className="relative z-10 w-8 h-8 border border-white/30 flex items-center justify-center text-white">
        <Globe size={16} />
      </div>
    </nav>
  ),

  // 16. Bauhaus Primary
  Bauhaus: () => (
    <nav className="w-full bg-white border-b-8 border-black flex h-20">
      <div className="w-20 bg-red-600 border-r-8 border-black flex items-center justify-center">
        <div className="w-8 h-8 bg-white rounded-full" />
      </div>
      <div className="flex-1 flex items-center justify-center gap-16 font-black uppercase text-xl italic">
        <a href="#" className="hover:text-red-600 transition-colors">Art</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Theory</a>
        <a href="#" className="hover:text-yellow-500 transition-colors">Design</a>
      </div>
      <div className="w-20 bg-blue-600 border-l-8 border-black flex items-center justify-center">
        <X className="text-white stroke-[4]" />
      </div>
    </nav>
  ),

  // 17. Minimal Dot Navigation
  DotNav: () => (
    <nav className="w-full bg-zinc-50 px-8 py-6 flex items-center justify-between">
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded-full bg-zinc-900" />
        <div className="w-2 h-2 rounded-full bg-zinc-300" />
      </div>
      <div className="flex gap-10 font-medium text-zinc-900 text-sm">
        <a href="#" className="group relative">
          Journal
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-zinc-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <a href="#" className="group relative">
          Collection
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-zinc-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <a href="#" className="group relative">
          Archive
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-zinc-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
      <User size={20} className="text-zinc-900" />
    </nav>
  ),

  // 18. Cyberpunk Split
  CyberSplit: () => (
    <nav className="w-full h-16 bg-black flex border-y border-white/10">
      <div className="w-1/4 bg-[#f09] flex items-center justify-center text-white font-black italic skew-x-[-12deg] -ml-4">
        CORE_X
      </div>
      <div className="flex-1 flex items-center justify-center gap-12 text-white font-mono text-xs uppercase tracking-[0.4em]">
        <a href="#" className="hover:text-[#0fa] transition-colors">Data</a>
        <a href="#" className="hover:text-[#0fa] transition-colors">Link</a>
        <a href="#" className="hover:text-[#0fa] transition-colors">Sync</a>
      </div>
      <div className="w-1/4 bg-[#0fa] flex items-center justify-center text-black font-black italic skew-x-[-12deg] -mr-4">
        ACCESS
      </div>
    </nav>
  ),

  // 19. Soft Gradient Blur
  SoftGradient: () => (
    <div className="w-full p-4 bg-zinc-100">
      <nav className="bg-white rounded-3xl px-8 py-4 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-zinc-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-orange-400 to-rose-400 rounded-xl" />
          <span className="font-bold text-zinc-800">Lumina</span>
        </div>
        <div className="flex gap-8 text-zinc-500 font-medium text-sm">
          <a href="#" className="hover:text-rose-500 transition-colors">Design</a>
          <a href="#" className="hover:text-rose-500 transition-colors">Development</a>
          <a href="#" className="hover:text-rose-500 transition-colors">Marketing</a>
        </div>
        <button className="px-6 py-2 bg-zinc-900 text-white rounded-xl font-bold text-sm hover:scale-105 transition-transform">
          Contact
        </button>
      </nav>
    </div>
  ),

  // 20. Ultimate Glass Sticky
  UltimateGlass: () => (
    <nav className="w-full bg-white/10 backdrop-blur-3xl border-b border-white/20 px-8 py-4 flex items-center justify-between sticky top-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center shadow-lg border border-white/10">
          <Layers size={22} className="text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-black leading-none tracking-tight">PRO_UI</span>
          <span className="text-[10px] text-zinc-500 font-mono tracking-widest">v4.0.2</span>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-8 text-white/70 font-medium text-sm">
        <a href="#" className="hover:text-white transition-colors relative group">
          Components
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0fa] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </a>
        <a href="#" className="hover:text-white transition-colors relative group">
          Templates
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </a>
        <a href="#" className="hover:text-white transition-colors relative group">
          Resources
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </a>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex -space-x-3">
          {[1,2,3].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center overflow-hidden">
              <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
            </div>
          ))}
        </div>
        <button className="px-5 py-2.5 bg-[#0fa] text-black rounded-xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,255,170,0.4)] transition-all active:scale-95">
          Join_Beta
        </button>
      </div>
    </nav>
  ),

  // 21. Glassmorphism Light Focus
  GlassLightFocus: () => (
    <nav className="w-full bg-white/30 backdrop-blur-md border-b border-white/40 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-300 to-indigo-300 blur-[2px]" />
        <span className="text-zinc-800 font-bold tracking-tight">SoftFocus</span>
      </div>
      <div className="flex gap-8 text-zinc-600 text-sm font-medium">
        <a href="#" className="hover:text-zinc-950 transition-colors">Design</a>
        <a href="#" className="hover:text-zinc-950 transition-colors">Case Studies</a>
      </div>
      <Search size={20} className="text-zinc-400" />
    </nav>
  ),

  // 22. Minimalist Split Border
  SplitBorder: () => (
    <nav className="w-full bg-white px-8 py-6 flex items-center justify-between border-b border-zinc-100">
      <div className="flex gap-12">
        <a href="#" className="text-zinc-400 hover:text-black transition-colors text-xs font-bold uppercase tracking-widest">Men</a>
        <a href="#" className="text-zinc-400 hover:text-black transition-colors text-xs font-bold uppercase tracking-widest">Women</a>
      </div>
      <div className="text-2xl font-black tracking-[0.5em] uppercase pl-10">Iconic</div>
      <div className="flex gap-8">
        <Search size={18} className="text-zinc-400" />
        <ShoppingBag size={18} className="text-zinc-400" />
      </div>
    </nav>
  ),

  // 23. Cyberpunk Alert (Yellow/Black)
  CyberAlert: () => (
    <nav className="w-full bg-yellow-400 border-b-4 border-black px-6 py-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-black text-yellow-400 px-3 py-1 font-black skew-x-[-12deg]">SYSTEM_ERROR</div>
        <span className="text-black font-mono text-xs font-bold animate-pulse">REBOOT REQUIRED // STATUS: CRITICAL</span>
      </div>
      <div className="flex gap-2">
        <div className="w-8 h-8 bg-black flex items-center justify-center text-yellow-400">
          <X size={16} />
        </div>
      </div>
    </nav>
  ),

  // 24. Modern Tabbed Navbar
  Tabbed: () => (
    <div className="w-full bg-zinc-50 p-4">
      <nav className="max-w-3xl mx-auto bg-white border border-zinc-200 rounded-2xl p-1.5 flex gap-1 shadow-sm">
        <a href="#" className="flex-1 text-center py-2.5 bg-zinc-900 text-white rounded-xl text-sm font-bold shadow-lg">Overview</a>
        <a href="#" className="flex-1 text-center py-2.5 text-zinc-500 hover:bg-zinc-50 rounded-xl text-sm font-medium transition-colors">Analytics</a>
        <a href="#" className="flex-1 text-center py-2.5 text-zinc-500 hover:bg-zinc-50 rounded-xl text-sm font-medium transition-colors">Reports</a>
        <a href="#" className="flex-1 text-center py-2.5 text-zinc-500 hover:bg-zinc-50 rounded-xl text-sm font-medium transition-colors">Settings</a>
      </nav>
    </div>
  ),

  // 25. Floating Search Center
  SearchCenter: () => (
    <nav className="w-full bg-white px-8 py-4 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b border-zinc-100">
      <div className="font-black text-xl">SearchUI</div>
      <div className="flex-1 max-w-md mx-10 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
        <input 
          type="text" 
          placeholder="Search for components..." 
          className="w-full bg-zinc-100 border-none rounded-2xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
          <kbd className="bg-white px-2 py-0.5 rounded border border-zinc-200 text-[10px] text-zinc-400 font-mono">⌘</kbd>
          <kbd className="bg-white px-2 py-0.5 rounded border border-zinc-200 text-[10px] text-zinc-400 font-mono">K</kbd>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-colors cursor-pointer">
          <Bell size={20} />
        </div>
        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-100 cursor-pointer">
          <User size={20} />
        </div>
      </div>
    </nav>
  ),

  // 26. Retro Terminal v2
  TerminalV2: () => (
    <nav className="w-full bg-[#1e1e1e] border-b border-[#333] px-6 py-3 flex items-center justify-between font-mono">
      <div className="flex items-center gap-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-zinc-500 text-xs">bash — 80x24</div>
      </div>
      <div className="text-[#0fa] text-sm animate-pulse">{"$ ssh admin@uix-pro"}</div>
      <div className="text-zinc-600 text-xs">0.0.1-alpha</div>
    </nav>
  ),

  // 27. Modern Glass Blur 3XL
  GlassBlur3XL: () => (
    <nav className="w-full bg-white/5 backdrop-blur-3xl border-b border-white/10 px-10 py-5 flex items-center justify-between">
      <div className="text-white font-bold text-xl tracking-tighter">Opal.</div>
      <div className="flex gap-10 text-white/40 text-sm font-medium">
        <a href="#" className="hover:text-white transition-colors">Showcase</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
        <a href="#" className="hover:text-white transition-colors">Docs</a>
      </div>
      <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full border border-white/20 text-sm font-bold backdrop-blur-md transition-all">
        Launch App
      </button>
    </nav>
  ),

  // 28. Double Border Minimal
  DoubleBorder: () => (
    <nav className="w-full bg-white border-b border-zinc-200 px-8 py-4 flex items-center justify-between relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-px after:bg-zinc-100">
      <div className="w-10 h-10 bg-black flex items-center justify-center text-white font-black text-xl">D</div>
      <div className="flex gap-12 font-bold text-zinc-900 text-xs uppercase tracking-[0.2em]">
        <a href="#" className="hover:opacity-50 transition-opacity">Design</a>
        <a href="#" className="hover:opacity-50 transition-opacity">Agency</a>
        <a href="#" className="hover:opacity-50 transition-opacity">Journal</a>
      </div>
      <div className="flex gap-6">
        <Twitter size={18} className="text-zinc-400 hover:text-black transition-colors" />
        <GitHub size={18} className="text-zinc-400 hover:text-black transition-colors" />
      </div>
    </nav>
  ),

  // 29. Soft Neumorphic Dark v2
  NeumorphicDark: () => (
    <div className="w-full bg-zinc-900 p-4">
      <nav className="bg-zinc-900 rounded-2xl px-8 py-4 shadow-[10px_10px_20px_#0a0a0a,-10px_-10px_20px_#1a1a1a] flex items-center justify-between border border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 shadow-[4px_4px_8px_#0a0a0a,-4px_-4px_8px_#1a1a1a] flex items-center justify-center">
            <Zap size={16} className="text-purple-500" fill="currentColor" />
          </div>
          <span className="text-white font-bold">Nova</span>
        </div>
        <div className="flex gap-8 text-zinc-500 text-sm font-medium">
          <a href="#" className="hover:text-purple-500 transition-colors">Network</a>
          <a href="#" className="hover:text-purple-500 transition-colors">Assets</a>
        </div>
        <div className="w-10 h-10 rounded-full bg-zinc-900 shadow-[inset_4px_4px_8px_#0a0a0a,inset_-4px_-4px_8px_#1a1a1a] flex items-center justify-center">
          <User size={18} className="text-zinc-500" />
        </div>
      </nav>
    </div>
  ),

  // 30. Minimalist Vertical Dash
  VerticalDash: () => (
    <nav className="w-full bg-white px-10 py-8 flex items-center justify-between">
      <div className="text-3xl font-light tracking-tighter">Lineage.</div>
      <div className="flex items-center gap-10">
        <a href="#" className="text-sm font-medium text-zinc-400 hover:text-black transition-colors">Collection</a>
        <div className="w-px h-6 bg-zinc-200" />
        <a href="#" className="text-sm font-medium text-zinc-400 hover:text-black transition-colors">About</a>
        <div className="w-px h-6 bg-zinc-200" />
        <a href="#" className="text-sm font-medium text-zinc-400 hover:text-black transition-colors">Contact</a>
      </div>
      <button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
        <Menu size={20} />
      </button>
    </nav>
  ),

  // 31. Cyberpunk Grid Overlay
  CyberGrid: () => (
    <nav className="w-full bg-black px-8 py-4 flex items-center justify-between relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,170,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="flex items-center gap-2 relative z-10">
        <div className="w-6 h-6 border-2 border-[#0fa] flex items-center justify-center">
          <div className="w-2 h-2 bg-[#0fa]" />
        </div>
        <span className="text-white font-black italic tracking-widest text-lg">GRID_OS</span>
      </div>
      <div className="flex gap-10 text-zinc-500 font-mono text-xs relative z-10">
        <a href="#" className="hover:text-[#0fa] transition-colors">PROCESSOR</a>
        <a href="#" className="hover:text-[#0fa] transition-colors">STORAGE</a>
        <a href="#" className="hover:text-[#0fa] transition-colors">NODES</a>
      </div>
      <div className="relative z-10 flex gap-4">
        <div className="w-2 h-2 rounded-full bg-[#0fa] animate-ping" />
        <span className="text-[#0fa] font-mono text-[10px]">SYSTEM_LIVE</span>
      </div>
    </nav>
  ),

  // 32. Bento Box Horizontal v2
  BentoV2: () => (
    <div className="w-full bg-zinc-50 p-6">
      <div className="max-w-6xl mx-auto flex gap-4">
        <div className="bg-white border border-zinc-200 rounded-3xl p-4 flex items-center gap-4 shadow-sm px-8">
          <div className="w-10 h-10 bg-orange-500 rounded-2xl" />
          <span className="font-black text-xl">Lush.</span>
        </div>
        <div className="flex-1 bg-white border border-zinc-200 rounded-3xl p-4 flex items-center justify-center gap-12 shadow-sm">
          <a href="#" className="text-sm font-bold text-zinc-400 hover:text-black transition-colors">Work</a>
          <a href="#" className="text-sm font-bold text-zinc-400 hover:text-black transition-colors">Team</a>
          <a href="#" className="text-sm font-bold text-zinc-400 hover:text-black transition-colors">Blog</a>
        </div>
        <div className="bg-zinc-900 rounded-3xl p-4 px-10 flex items-center justify-center text-white font-bold text-sm shadow-xl hover:bg-black cursor-pointer transition-all">
          Hire Us
        </div>
      </div>
    </div>
  ),

  // 33. Industrial Blueprint v2
  BlueprintV2: () => (
    <nav className="w-full bg-[#1a365d] border-b-2 border-white/20 px-8 py-5 flex items-center justify-between relative font-mono">
      <div className="absolute inset-0 bg-[radial-gradient(#fff_0.5px,transparent_0.5px)] bg-[size:10px_10px] opacity-10" />
      <div className="relative z-10 flex items-center gap-4">
        <div className="w-10 h-10 border border-white/40 flex items-center justify-center">
          <Layers size={20} className="text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold leading-none">ARC_SYSTEM</span>
          <span className="text-[10px] text-white/40">BUILD_v2.0</span>
        </div>
      </div>
      <div className="relative z-10 flex gap-8 text-xs text-white/60">
        <a href="#" className="hover:text-white hover:underline underline-offset-8">COMPONENTS</a>
        <a href="#" className="hover:text-white hover:underline underline-offset-8">ASSETS</a>
        <a href="#" className="hover:text-white hover:underline underline-offset-8">LAYOUTS</a>
      </div>
      <div className="relative z-10 flex items-center gap-2 text-white font-bold text-xs bg-white/10 px-4 py-2 rounded">
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        READY
      </div>
    </nav>
  ),

  // 34. Minimalist Dot Menu
  DotMenu: () => (
    <nav className="w-full bg-white px-10 py-6 flex items-center justify-between">
      <div className="flex gap-1.5">
        {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-black" />)}
      </div>
      <div className="flex gap-12 text-zinc-400 text-xs font-bold uppercase tracking-[0.4em]">
        <a href="#" className="hover:text-black transition-colors">Gallery</a>
        <a href="#" className="hover:text-black transition-colors">Journal</a>
        <a href="#" className="hover:text-black transition-colors">About</a>
      </div>
      <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
        <Search size={16} className="text-zinc-400" />
      </div>
    </nav>
  ),

  // 35. Cyberpunk Pulse Border
  PulseBorder: () => (
    <nav className="w-full bg-black px-8 py-4 flex items-center justify-between relative border-b border-[#f09]/20">
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f09] shadow-[0_0_15px_#f09] animate-pulse" />
      <div className="text-white font-black italic text-2xl tracking-tighter">PULSE_X</div>
      <div className="flex gap-10 font-mono text-xs text-[#f09]">
        <a href="#" className="hover:text-white transition-all">{"<MODULES>"}</a>
        <a href="#" className="hover:text-white transition-all">{"<CORE_DATA>"}</a>
      </div>
      <button className="px-6 py-1.5 bg-[#f09] text-white font-black text-xs skew-x-[-12deg] hover:bg-white hover:text-[#f09] transition-all">
        ACCESS_GRANTED
      </button>
    </nav>
  ),

  // 36. Soft Pastel Gradient Focus
  PastelFocus: () => (
    <div className="w-full bg-white p-4">
      <nav className="max-w-5xl mx-auto bg-white rounded-[32px] px-10 py-4 flex items-center justify-between shadow-[0_20px_80px_rgba(0,0,0,0.03)] border border-zinc-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-100 via-purple-100 to-blue-100" />
          <span className="font-bold text-zinc-800 text-xl tracking-tight">Lush.</span>
        </div>
        <div className="flex gap-10 text-zinc-400 text-sm font-medium">
          <a href="#" className="hover:text-zinc-900 transition-colors">Collection</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Studio</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-6">
          <ShoppingBag size={20} className="text-zinc-300" />
          <div className="w-px h-6 bg-zinc-100" />
          <div className="w-10 h-10 rounded-2xl bg-zinc-950 flex items-center justify-center text-white shadow-xl shadow-zinc-200 cursor-pointer">
            <User size={20} />
          </div>
        </div>
      </nav>
    </div>
  ),

  // 37. Modern Dark Dashboard Nav
  DashboardNav: () => (
    <nav className="w-full bg-zinc-950 border-b border-zinc-900 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
          <Layers size={18} />
        </div>
        <div className="flex gap-6 text-zinc-500 text-sm font-medium">
          <a href="#" className="text-white">Dashboard</a>
          <a href="#" className="hover:text-white transition-colors">Projects</a>
          <a href="#" className="hover:text-white transition-colors">Team</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 flex items-center gap-2">
          <Search size={14} className="text-zinc-500" />
          <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-xs text-white w-32" />
        </div>
        <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
          <Bell size={16} className="text-zinc-400" />
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border border-white/20" />
      </div>
    </nav>
  ),

  // 38. Retro TV Static (Animated)
  RetroTV: () => (
    <nav className="w-full bg-[#111] px-8 py-4 flex items-center justify-between relative overflow-hidden font-mono">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUicKgR6m7_Dk/giphy.gif')] bg-cover" />
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-12 h-8 bg-[#333] rounded border-2 border-zinc-700 flex items-center justify-around px-1">
          <div className="w-1 h-4 bg-red-500/50" />
          <div className="w-1 h-4 bg-green-500/50" />
        </div>
        <span className="text-zinc-400 font-bold uppercase tracking-widest text-lg">Channel_04</span>
      </div>
      <div className="flex gap-10 text-zinc-600 text-xs relative z-10">
        <a href="#" className="hover:text-white transition-colors">PROGRAMS</a>
        <a href="#" className="hover:text-white transition-colors">SCHEDULE</a>
        <a href="#" className="hover:text-white transition-colors">ARCHIVE</a>
      </div>
      <div className="text-[#f7d51d] text-xs relative z-10 animate-pulse">
        [ NO_SIGNAL ]
      </div>
    </nav>
  ),

  // 39. Minimalist Underline Sweep
  UnderlineSweep: () => (
    <nav className="w-full bg-white px-10 py-6 flex items-center justify-between border-b border-zinc-100">
      <div className="text-2xl font-black italic tracking-tighter">SWEEP.</div>
      <div className="flex gap-12">
        {['Collection', 'Story', 'Contact'].map(item => (
          <a key={item} href="#" className="relative group text-sm font-bold text-zinc-400 hover:text-black transition-colors py-1">
            {item}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300" />
          </a>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <Search size={20} className="text-zinc-400" />
        <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center font-bold text-xs">01</div>
      </div>
    </nav>
  ),

  // 40. Ultimate Cinematic Glass
  CinematicGlass: () => (
    <nav className="w-full bg-black/40 backdrop-blur-2xl border-b border-white/5 px-12 py-6 flex items-center justify-between relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="flex items-center gap-4">
        <div className="w-12 h-[2px] bg-indigo-500" />
        <span className="text-white font-black text-2xl tracking-[0.3em] uppercase">Cinema</span>
      </div>
      <div className="flex gap-16 text-white/40 text-[11px] font-bold uppercase tracking-[0.4em]">
        <a href="#" className="hover:text-white transition-all hover:tracking-[0.6em] duration-500">Films</a>
        <a href="#" className="hover:text-white transition-all hover:tracking-[0.6em] duration-500">Directors</a>
        <a href="#" className="hover:text-white transition-all hover:tracking-[0.6em] duration-500">Studio</a>
      </div>
      <button className="group flex items-center gap-3 text-white">
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">Explore</span>
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
          <ArrowRight size={18} />
        </div>
      </button>
    </nav>
  ),

  // 41. Cyberpunk Glitch Text
  GlitchNav: () => (
    <nav className="w-full bg-black px-8 py-4 flex items-center justify-between border-y border-white/10">
      <div className="relative group cursor-pointer">
        <span className="text-white font-black text-2xl italic relative z-10">GLITCH_UI</span>
        <span className="absolute top-0 left-0 text-[#f09] font-black text-2xl italic opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all animate-pulse">GLITCH_UI</span>
        <span className="absolute top-0 left-0 text-[#0fa] font-black text-2xl italic opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:translate-y-1 transition-all animate-pulse">GLITCH_UI</span>
      </div>
      <div className="flex gap-12 font-mono text-xs text-white/40 uppercase tracking-[0.5em]">
        <a href="#" className="hover:text-[#0fa] transition-colors">System</a>
        <a href="#" className="hover:text-[#f09] transition-colors">Network</a>
        <a href="#" className="hover:text-white transition-colors">Core</a>
      </div>
      <div className="flex gap-4">
        <div className="w-2 h-8 bg-[#0fa] animate-pulse" />
        <div className="w-2 h-8 bg-[#f09] animate-pulse" style={{ animationDelay: '0.2s' }} />
      </div>
    </nav>
  ),

  // 42. Glassmorphism Light v2
  GlassLightV2: () => (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <nav className="max-w-4xl mx-auto bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[40px] px-10 py-4 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 shadow-lg shadow-blue-200" />
          <span className="font-black text-zinc-800 text-xl tracking-tighter italic">Float.</span>
        </div>
        <div className="flex gap-10 text-zinc-500 text-sm font-semibold">
          <a href="#" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-blue-600 transition-colors">About</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-xl shadow-blue-100 hover:scale-105 transition-transform">
          Get Started
        </button>
      </nav>
    </div>
  ),

  // 43. Minimalist Bold Typography
  BoldType: () => (
    <nav className="w-full bg-white px-10 py-10 flex flex-col items-center gap-8">
      <div className="text-[8vw] font-black leading-none uppercase tracking-tighter">Navigation</div>
      <div className="flex gap-16 text-zinc-400 font-black uppercase text-xs tracking-[0.4em]">
        <a href="#" className="hover:text-black transition-colors">Main</a>
        <a href="#" className="hover:text-black transition-colors">Works</a>
        <a href="#" className="hover:text-black transition-colors">About</a>
        <a href="#" className="hover:text-black transition-colors">Contact</a>
      </div>
    </nav>
  ),

  // 44. Retro Command Terminal
  CommandTerminal: () => (
    <nav className="w-full bg-black px-6 py-3 flex items-center justify-between font-mono border-b-2 border-zinc-800">
      <div className="flex items-center gap-4 text-xs text-zinc-500">
        <span className="text-[#0fa]">●</span>
        <span>ROOT@UIX-PRO: ~</span>
      </div>
      <div className="flex gap-8 text-[#0fa] text-xs">
        <a href="#" className="hover:underline">{"[ LS ]"}</a>
        <a href="#" className="hover:underline">{"[ CD ]"}</a>
        <a href="#" className="hover:underline">{"[ MKDIR ]"}</a>
      </div>
      <div className="text-zinc-500 text-[10px]">
        SESSION: 42:09:11
      </div>
    </nav>
  ),

  // 45. Modern Architecture Dark
  ArchDark: () => (
    <nav className="w-full bg-zinc-950 px-12 py-8 flex items-center justify-between border-b border-zinc-900">
      <div className="flex flex-col">
        <span className="text-white font-light text-2xl tracking-[0.2em] uppercase">Structure</span>
        <span className="text-zinc-600 text-[10px] uppercase tracking-[0.5em] mt-1">Architecture Studio</span>
      </div>
      <div className="flex gap-16 font-bold text-zinc-500 text-xs uppercase tracking-[0.3em]">
        <a href="#" className="hover:text-white transition-colors relative group">
          Projects
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
        </a>
        <a href="#" className="hover:text-white transition-colors relative group">
          About
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
        </a>
        <a href="#" className="hover:text-white transition-colors relative group">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
        </a>
      </div>
      <Menu size={24} className="text-white" />
    </nav>
  ),

  // 46. Neon Path Draw v2
  NeonPath: () => (
    <nav className="w-full bg-black px-8 py-5 flex items-center justify-between relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-px bg-[#0fa]/20" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#0fa]/20" />
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 border border-[#0fa] rounded-full flex items-center justify-center group-hover:shadow-[0_0_15px_#0fa] transition-all">
          <Zap size={20} className="text-[#0fa]" fill="currentColor" />
        </div>
        <span className="text-white font-black tracking-widest uppercase">Voltage</span>
      </div>
      <div className="flex gap-12 text-[#0fa]/50 font-bold text-xs uppercase tracking-widest">
        <a href="#" className="hover:text-[#0fa] transition-all hover:scale-110">Current</a>
        <a href="#" className="hover:text-[#0fa] transition-all hover:scale-110">Static</a>
        <a href="#" className="hover:text-[#0fa] transition-all hover:scale-110">Ground</a>
      </div>
      <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#0fa] to-transparent absolute bottom-0 -translate-x-full group-hover:translate-x-[500%] transition-transform duration-1000" />
    </nav>
  ),

  // 47. Floating Geometric Dark
  GeometricDark: () => (
    <div className="w-full bg-zinc-950 p-6">
      <nav className="max-w-5xl mx-auto flex gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-center gap-3 px-8">
          <div className="w-6 h-6 rotate-45 border-2 border-indigo-500" />
          <span className="text-white font-bold tracking-tighter text-xl">Shape.</span>
        </div>
        <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-center justify-around text-zinc-500 text-sm font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Gallery</a>
          <a href="#" className="hover:text-white transition-colors">Artist</a>
          <a href="#" className="hover:text-white transition-colors">Exhibits</a>
        </div>
        <div className="bg-indigo-600 rounded-2xl p-4 px-10 flex items-center justify-center text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-900/20 hover:bg-indigo-500 transition-all cursor-pointer">
          Tickets
        </div>
      </nav>
    </div>
  ),

  // 48. Cyber Login Focus v3
  CyberFocusV3: () => (
    <nav className="w-full bg-black/80 backdrop-blur-md px-10 py-5 flex items-center justify-between border-b border-emerald-500/20">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
        <span className="text-white font-black text-xl tracking-tighter">CORE_ACCESS</span>
      </div>
      <div className="hidden md:flex gap-10 text-emerald-500/40 font-mono text-xs">
        <a href="#" className="hover:text-emerald-500 transition-colors">ENCRYPTION</a>
        <a href="#" className="hover:text-emerald-500 transition-colors">DATABANK</a>
        <a href="#" className="hover:text-emerald-500 transition-colors">SECURITY</a>
      </div>
      <div className="flex gap-4">
        <button className="text-emerald-500 font-mono text-xs border border-emerald-500/30 px-4 py-1.5 hover:bg-emerald-500 hover:text-black transition-all">
          LOGIN_SECURE
        </button>
      </div>
    </nav>
  ),

  // 49. Soft Bento Pastel v2
  SoftBentoV2: () => (
    <div className="w-full bg-indigo-50/50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-3 bg-white rounded-3xl p-6 flex items-center gap-3 border border-indigo-100 shadow-sm">
          <div className="w-10 h-10 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
            <Layers size={22} />
          </div>
          <span className="font-bold text-zinc-800">Stack.</span>
        </div>
        <div className="col-span-6 bg-white rounded-3xl p-6 flex items-center justify-around text-zinc-400 text-sm font-bold border border-indigo-100 shadow-sm">
          <a href="#" className="hover:text-indigo-600 transition-colors">Frontend</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Backend</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Cloud</a>
        </div>
        <div className="col-span-3 bg-indigo-600 rounded-3xl p-6 flex items-center justify-center gap-2 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all cursor-pointer">
          Sign Up
        </div>
      </div>
    </div>
  ),

  // 50. Industrial Blueprint v3
  BlueprintV3: () => (
    <nav className="w-full bg-zinc-100 border-b-2 border-zinc-900 px-8 py-4 flex items-center justify-between font-mono">
      <div className="flex flex-col">
        <span className="text-[10px] text-zinc-400 font-bold uppercase">Spec_Nav</span>
        <span className="text-zinc-900 font-black text-xl tracking-tighter uppercase leading-none">Industrial</span>
      </div>
      <div className="flex gap-12 text-xs font-bold text-zinc-500">
        <a href="#" className="hover:text-black hover:bg-zinc-200 px-3 py-1 transition-colors underline decoration-2">PARTS</a>
        <a href="#" className="hover:text-black hover:bg-zinc-200 px-3 py-1 transition-colors underline decoration-2">MANUALS</a>
        <a href="#" className="hover:text-black hover:bg-zinc-200 px-3 py-1 transition-colors underline decoration-2">REPAIR</a>
      </div>
      <div className="w-10 h-10 border-2 border-zinc-900 flex items-center justify-center">
        <Menu size={20} />
      </div>
    </nav>
  ),

  // 51. Spotlight Dark v3
  SpotlightV3: () => (
    <nav className="w-full bg-black px-10 py-6 flex items-center justify-between border-b border-white/5 relative group overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="text-white font-light text-2xl tracking-[0.4em] uppercase">Focus</div>
      <div className="flex gap-16 text-zinc-600 font-bold text-[10px] uppercase tracking-[0.3em] relative z-10">
        <a href="#" className="hover:text-white transition-colors">Studio</a>
        <a href="#" className="hover:text-white transition-colors">Press</a>
        <a href="#" className="hover:text-white transition-colors">Journal</a>
      </div>
      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white relative z-10 hover:border-white transition-colors">
        <Search size={18} />
      </div>
    </nav>
  ),

  // 52. Split Typography v2
  SplitTypeV2: () => (
    <nav className="w-full h-24 bg-white flex border-b border-zinc-100">
      <div className="w-1/2 flex items-center justify-center border-r border-zinc-100 group cursor-pointer hover:bg-zinc-950 transition-colors">
        <span className="text-2xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">Creative</span>
      </div>
      <div className="w-1/2 flex items-center justify-center group cursor-pointer hover:bg-zinc-950 transition-colors">
        <span className="text-2xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">Studio</span>
      </div>
    </nav>
  ),

  // 53. Abstract Mesh Soft v2
  MeshSoftV2: () => (
    <nav className="w-full bg-white/10 backdrop-blur-xl border-b border-white/20 px-10 py-5 flex items-center justify-between overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 via-indigo-100/20 to-emerald-100/20 blur-2xl" />
      <div className="text-zinc-800 font-black text-2xl tracking-tighter relative z-10 italic">Aura.</div>
      <div className="flex gap-12 text-zinc-500 font-bold text-sm relative z-10">
        <a href="#" className="hover:text-zinc-900 transition-colors">Design</a>
        <a href="#" className="hover:text-zinc-900 transition-colors">Motion</a>
        <a href="#" className="hover:text-zinc-900 transition-colors">Web</a>
      </div>
      <button className="bg-zinc-900 text-white px-6 py-2 rounded-2xl font-bold text-sm shadow-xl shadow-zinc-200 relative z-10 hover:scale-105 transition-transform">
        Hire
      </button>
    </nav>
  ),

  // 54. Brutalist Pop v3
  BrutalistPopV3: () => (
    <nav className="w-full bg-emerald-400 border-b-4 border-black px-8 py-4 flex items-center justify-between">
      <div className="text-3xl font-black uppercase tracking-tighter bg-white px-4 py-1 border-4 border-black shadow-[4px_4px_0px_black]">Logo</div>
      <div className="flex gap-4">
        {['Menu', 'Work', 'Talk'].map(item => (
          <button key={item} className="bg-white border-4 border-black px-6 py-2 font-black uppercase hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1">
            {item}
          </button>
        ))}
      </div>
    </nav>
  ),

  // 55. Modern Tech SaaS v2
  TechSaaSV2: () => (
    <nav className="w-full bg-zinc-900 border-b border-zinc-800 px-10 py-4 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">D</div>
          <span className="text-white font-bold text-xl">Deploy.</span>
        </div>
        <div className="hidden lg:flex gap-8 text-zinc-400 font-medium text-sm">
          <a href="#" className="hover:text-white transition-colors">Infrastructure</a>
          <a href="#" className="hover:text-white transition-colors">Database</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-zinc-400 font-bold text-sm hover:text-white transition-colors">Login</button>
        <button className="bg-white text-black px-6 py-2 rounded-lg font-bold text-sm hover:bg-zinc-200 transition-colors">Dashboard</button>
      </div>
    </nav>
  ),

  // 56. Vintage Magazine Cover v2
  VintageMagV2: () => (
    <nav className="w-full bg-[#fdfaf6] border-b-2 border-black px-12 py-10 flex flex-col items-center gap-6">
      <div className="text-6xl font-serif italic tracking-tighter">The Modernist</div>
      <div className="w-full h-px bg-black/10 max-w-4xl" />
      <div className="flex gap-16 font-serif italic text-lg">
        <a href="#" className="hover:underline underline-offset-8">Design</a>
        <a href="#" className="hover:underline underline-offset-8">Culture</a>
        <a href="#" className="hover:underline underline-offset-8">Art</a>
        <a href="#" className="hover:underline underline-offset-8">Tech</a>
      </div>
    </nav>
  ),

  // 57. Gradient Wave Navbar
  GradientWave: () => (
    <nav className="w-full bg-white px-10 py-5 flex items-center justify-between relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full" />
        <span className="text-2xl font-black tracking-tighter">WAVE.</span>
      </div>
      <div className="flex gap-10 text-zinc-400 font-bold text-sm">
        <a href="#" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all">Products</a>
        <a href="#" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all">Company</a>
        <a href="#" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all">Lab</a>
      </div>
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
          <Search size={18} className="text-zinc-400" />
        </div>
      </div>
    </nav>
  ),

  // 58. Minimalist Portfolio Focus v2
  PortfolioFocusV2: () => (
    <nav className="w-full bg-white px-12 py-12 flex items-center justify-between">
      <div className="text-4xl font-black">M.</div>
      <div className="flex gap-16 font-medium text-zinc-400 text-sm uppercase tracking-[0.2em]">
        <a href="#" className="hover:text-black transition-colors">Archive</a>
        <a href="#" className="hover:text-black transition-colors">Process</a>
        <a href="#" className="hover:text-black transition-colors">Contact</a>
      </div>
      <button className="text-sm font-bold border-b-2 border-black pb-1 hover:pb-2 transition-all">Get in touch</button>
    </nav>
  ),

  // 59. Glitch Static v3
  GlitchStaticV3: () => (
    <nav className="w-full bg-[#111] px-8 py-4 flex items-center justify-between relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uWUicKgR6m7_Dk/giphy.gif')] opacity-[0.02] pointer-events-none" />
      <div className="text-white font-mono text-xl tracking-tighter animate-pulse">ERROR_NAV_0x00</div>
      <div className="flex gap-10 font-mono text-xs text-white/20">
        <a href="#" className="hover:text-white transition-colors">RECOVER</a>
        <a href="#" className="hover:text-white transition-colors">REBOOT</a>
        <a href="#" className="hover:text-white transition-colors">SYNC</a>
      </div>
      <div className="flex gap-2">
        <div className="w-3 h-3 bg-red-600 rounded-full" />
        <div className="w-3 h-3 bg-red-600/20 rounded-full animate-ping" />
      </div>
    </nav>
  ),

  // 60. Ultimate Hybrid Terminal v3
  UltimateHybrid: () => (
    <nav className="w-full bg-zinc-950 border-b-2 border-[#0fa]/30 px-10 py-6 flex items-center justify-between relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0fa]/50 to-transparent" />
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-zinc-900 border border-[#0fa]/40 flex items-center justify-center text-[#0fa] shadow-[0_0_15px_rgba(0,255,170,0.2)]">
          <Terminal size={24} />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-black text-xl leading-none italic tracking-tighter">HYBRID_CORE</span>
          <span className="text-[#0fa] font-mono text-[9px] uppercase tracking-widest mt-1">Status: Operational</span>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-10 text-white/50 font-mono text-xs uppercase">
        <a href="#" className="hover:text-[#0fa] hover:glow-white transition-all">/NET_NODES</a>
        <a href="#" className="hover:text-[#0fa] hover:glow-white transition-all">/DATA_VAULT</a>
        <a href="#" className="hover:text-[#0fa] hover:glow-white transition-all">/SECURE_LINK</a>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex gap-1">
          {[1,2,3].map(i => <div key={i} className="w-1.5 h-6 bg-[#0fa]/20 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
        </div>
        <button className="px-6 py-2.5 bg-zinc-900 border border-[#0fa] text-[#0fa] font-black text-xs uppercase tracking-widest hover:bg-[#0fa] hover:text-black transition-all shadow-[0_0_20px_rgba(0,255,170,0.2)]">
          EXEC_INIT
        </button>
      </div>
    </nav>
  ),

  // 61. SaaS Floating Expand (Modern)
  SaaS_FloatingExpand: () => {
    const [expanded, setExpanded] = React.useState(false);
    return (
      <div className="w-full py-4 flex justify-center px-4">
        <nav 
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          className={cn(
            "bg-zinc-950/90 border border-zinc-800/80 rounded-full px-4 py-2.5 flex items-center gap-4 shadow-2xl backdrop-blur-md transition-all duration-500 ease-out",
            expanded ? "max-w-xl px-6" : "max-w-[200px]"
          )}
        >
          <div className="flex items-center gap-2 text-white font-bold cursor-pointer shrink-0">
            <Zap className="text-emerald-400 w-5 h-5 fill-current" />
            <span className="text-sm tracking-tight">Expand.io</span>
          </div>
          
          <div className={cn(
            "flex items-center gap-6 overflow-hidden transition-all duration-500 ease-out text-xs font-semibold text-zinc-400",
            expanded ? "w-auto opacity-100 translate-x-0" : "w-0 opacity-0 -translate-x-4 pointer-events-none"
          )}>
            <a href="#" className="hover:text-white transition-colors shrink-0">Features</a>
            <a href="#" className="hover:text-white transition-colors shrink-0">Pricing</a>
            <a href="#" className="hover:text-white transition-colors shrink-0">Docs</a>
            <button className="bg-emerald-400 hover:bg-emerald-300 text-black text-[11px] font-black uppercase px-3 py-1.5 rounded-full transition-colors shrink-0">
              Go
            </button>
          </div>
        </nav>
      </div>
    );
  },

  // 62. SaaS Interactive Dropdown (Modern)
  SaaS_InteractiveDropdown: () => {
    const [activeTab, setActiveTab] = React.useState<string | null>(null);
    return (
      <nav className="w-full bg-zinc-950 border-b border-zinc-900 px-8 py-5 flex items-center justify-between relative">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2 text-white font-black text-xl">
            <Layers className="text-blue-500 w-6 h-6" />
            <span>MegaSaaS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-400">
            <div 
              onMouseEnter={() => setActiveTab('features')}
              onMouseLeave={() => setActiveTab(null)}
              className="relative py-2 cursor-pointer hover:text-white"
            >
              <span>Features</span>
              {activeTab === 'features' && (
                <div className="absolute top-full left-0 mt-2 w-[340px] bg-zinc-900 border border-zinc-800 rounded-2xl p-4 grid grid-cols-2 gap-3 shadow-2xl z-50">
                  <div className="p-2 hover:bg-zinc-800/50 rounded-xl transition-colors">
                    <span className="block text-white text-xs font-bold">Analytics</span>
                    <span className="text-[10px] text-zinc-500">Realtime dashboards</span>
                  </div>
                  <div className="p-2 hover:bg-zinc-800/50 rounded-xl transition-colors">
                    <span className="block text-white text-xs font-bold">Security</span>
                    <span className="text-[10px] text-zinc-500">AES-256 encryption</span>
                  </div>
                  <div className="p-2 hover:bg-zinc-800/50 rounded-xl transition-colors">
                    <span className="block text-white text-xs font-bold">Webhooks</span>
                    <span className="text-[10px] text-zinc-500">Instant notifications</span>
                  </div>
                  <div className="p-2 hover:bg-zinc-800/50 rounded-xl transition-colors">
                    <span className="block text-white text-xs font-bold">Database</span>
                    <span className="text-[10px] text-zinc-500">Postgres integrations</span>
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Enterprise</a>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95">
          Get Started
        </button>
      </nav>
    );
  },

  // 63. SaaS Dark Command Menu (Modern)
  SaaS_DarkCommandMenu: () => {
    const [cmdOpen, setCmdOpen] = React.useState(false);
    return (
      <nav className="w-full bg-zinc-950 px-8 py-4 flex items-center justify-between border-b border-zinc-900 relative">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 text-white font-bold">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center font-black text-black">C</div>
            <span className="tracking-tight">CmdUI</span>
          </div>
          <button 
            onClick={() => setCmdOpen(!cmdOpen)}
            className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800 rounded-xl px-4 py-2 text-xs text-zinc-500 font-medium transition-all"
          >
            <Search size={14} className="text-zinc-600" />
            <span>Search or jump to...</span>
            <div className="flex gap-0.5">
              <kbd className="bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800 text-[9px]">⌘</kbd>
              <kbd className="bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800 text-[9px]">K</kbd>
            </div>
          </button>
        </div>
        <div className="flex items-center gap-6 text-xs text-zinc-400 font-semibold">
          <a href="#" className="hover:text-white transition-colors">Specs</a>
          <a href="#" className="hover:text-white transition-colors">Changelog</a>
          <div className="w-px h-4 bg-zinc-800" />
          <User className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
        </div>

        {cmdOpen && (
          <div className="absolute top-full left-8 mt-2 w-80 bg-zinc-900 border border-zinc-800 rounded-2xl p-3 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-2 mb-2">Quick Actions</span>
            <div className="space-y-1">
              {['Go to Billing', 'Configure Webhooks', 'View Documentation', 'API Tokens'].map(action => (
                <div key={action} className="flex items-center justify-between p-2 hover:bg-zinc-800 rounded-lg cursor-pointer text-xs text-white font-medium group transition-colors">
                  <span>{action}</span>
                  <ArrowRight size={12} className="text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  },

  // 64. Glass Aurora Shift (Glassmorphism)
  Glass_AuroraShift: () => {
    const [mousePos, setMousePos] = React.useState({ x: 50, y: 50 });
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };
    return (
      <div 
        onMouseMove={handleMouseMove}
        className="w-full bg-zinc-950 p-6 relative overflow-hidden flex justify-center"
      >
        <div 
          className="absolute w-[400px] h-[150px] rounded-full blur-[100px] opacity-40 bg-gradient-to-r from-cyan-500 via-purple-500 to-rose-500 transition-transform duration-300 pointer-events-none"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        <nav className="w-full max-w-5xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] px-8 py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 relative">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 shadow-inner">
              <Globe className="text-cyan-400 w-4 h-4 animate-[spin_8s_linear_infinite]" />
            </div>
            <span className="text-white font-black tracking-widest text-lg">AURORA</span>
          </div>
          <div className="flex gap-10 text-white/50 font-medium text-sm">
            <a href="#" className="hover:text-white transition-colors">Ecosystem</a>
            <a href="#" className="hover:text-white transition-colors">Tokens</a>
            <a href="#" className="hover:text-white transition-colors">Governance</a>
          </div>
          <button className="bg-white hover:bg-zinc-200 text-black text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-2xl shadow-xl transition-all active:scale-95">
            Connect
          </button>
        </nav>
      </div>
    );
  },

  // 65. Brutalist Sticker Box (Brutalist)
  Brutalist_StickerBox: () => (
    <nav className="w-full bg-orange-500 border-b-4 border-black p-6 flex flex-col md:flex-row items-center justify-between gap-4 font-black">
      <div className="bg-yellow-300 border-4 border-black px-5 py-2 rotate-[-2deg] shadow-[4px_4px_0px_black] text-black text-2xl uppercase tracking-tighter cursor-pointer hover:rotate-0 transition-transform">
        STICKER_NAV!
      </div>
      
      <div className="flex flex-wrap gap-3">
        {[
          { name: '🔥 TRENDS', color: 'bg-white' },
          { name: '💿 MUSIC', color: 'bg-pink-400' },
          { name: '👾 ARCADE', color: 'bg-cyan-300' }
        ].map((item, i) => (
          <a 
            key={i} 
            href="#" 
            className={cn(
              "border-4 border-black px-4 py-1.5 shadow-[3px_3px_0px_black] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_black] transition-all text-black text-xs uppercase tracking-wide",
              item.color
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
      
      <button className="bg-black text-white hover:bg-white hover:text-black border-4 border-black px-6 py-3 rounded-none transition-colors shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
        BUY_TICKET
      </button>
    </nav>
  ),

  // 66. Retro Game Console (Brutalist)
  Retro_GameConsole: () => {
    const [hearts, setHearts] = React.useState(3);
    return (
      <nav className="w-full bg-[#1b122c] border-b-4 border-[#3c2a63] px-8 py-5 flex items-center justify-between font-mono">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-[#ff2a6d] flex items-center justify-center animate-bounce">
            <span className="text-white text-xs font-bold">🎮</span>
          </div>
          <span className="text-[#05d9e8] text-lg font-black tracking-wider uppercase">RETRO_STAGE</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-[#01c4e7] text-xs font-bold">
          <a href="#" className="hover:text-[#ff2a6d] hover:bg-[#2e1d4b] px-3 py-1.5 border-2 border-transparent hover:border-[#ff2a6d]">1P_START</a>
          <a href="#" className="hover:text-[#ff2a6d] hover:bg-[#2e1d4b] px-3 py-1.5 border-2 border-transparent hover:border-[#ff2a6d]">HIGHSCORES</a>
          <a href="#" className="hover:text-[#ff2a6d] hover:bg-[#2e1d4b] px-3 py-1.5 border-2 border-transparent hover:border-[#ff2a6d]">CONTROLS</a>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <span 
                key={i} 
                onClick={() => setHearts(i + 1)}
                className={cn(
                  "cursor-pointer text-sm transition-opacity",
                  i < hearts ? "opacity-100" : "opacity-30"
                )}
              >
                ❤️
              </span>
            ))}
          </div>
          <div className="bg-[#2e1d4b] border-2 border-[#05d9e8] px-3 py-1 text-[10px] text-white">
            HP: {hearts * 33}%
          </div>
        </div>
      </nav>
    );
  },

  // 67. Bento Asymmetric Header (Bento)
  Bento_AsymmetricHeader: () => (
    <div className="w-full p-4 bg-zinc-950">
      <div className="max-w-5xl mx-auto grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-3 bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 rounded-2xl p-4 flex items-center gap-3 transition-all duration-300 group cursor-pointer">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Cpu className="text-white w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold leading-none">Bento</span>
            <span className="text-[10px] text-zinc-500 mt-1">Header</span>
          </div>
        </div>
        <div className="col-span-8 md:col-span-6 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-4 flex items-center justify-around text-xs font-bold text-zinc-400 transition-all duration-300">
          <a href="#" className="hover:text-white transition-colors">Core API</a>
          <div className="w-1 h-1 bg-zinc-700 rounded-full" />
          <a href="#" className="hover:text-white transition-colors">Benchmarks</a>
          <div className="w-1 h-1 bg-zinc-700 rounded-full" />
          <a href="#" className="hover:text-white transition-colors">Ecosystem</a>
        </div>
        <div className="col-span-4 md:col-span-3 bg-emerald-500 hover:bg-emerald-400 rounded-2xl p-4 flex items-center justify-center gap-2 text-black font-black text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-lg hover:shadow-emerald-500/10">
          <span>Deploy</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </div>
  ),

  // 68. Bento Vertical Drawer (Bento)
  Bento_VerticalDrawer: () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return (
      <div className="w-full flex justify-center bg-zinc-950 p-6">
        <style>{`
          @keyframes drawer-fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-drawer-fade-in {
            animation: drawer-fade-in 0.3s ease-out forwards;
          }
        `}</style>
        <div 
          className={cn(
            "bg-zinc-900 border border-zinc-800 rounded-3xl p-4 flex items-center justify-between transition-all duration-500 shadow-2xl overflow-hidden",
            collapsed ? "w-40" : "w-full max-w-3xl"
          )}
        >
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => setCollapsed(!collapsed)}
              className="w-10 h-10 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl flex items-center justify-center text-white transition-colors"
            >
              <Menu size={18} />
            </button>
            {!collapsed && (
              <span className="text-white font-black text-sm tracking-widest uppercase animate-drawer-fade-in">DRAWER_SYSTEM</span>
            )}
          </div>
          
          {!collapsed && (
            <div className="flex gap-8 text-xs font-mono text-zinc-500 items-center animate-drawer-fade-in">
              <a href="#" className="hover:text-white transition-colors">/NODE_MONITOR</a>
              <a href="#" className="hover:text-white transition-colors">/DB_REDUNDANCY</a>
              <a href="#" className="hover:text-white transition-colors">/LOG_VAULT</a>
            </div>
          )}
          
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-3.5 h-3.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
            {!collapsed && <span className="text-emerald-400 font-mono text-[10px] animate-drawer-fade-in">SYS_ONLINE</span>}
          </div>
        </div>
      </div>
    );
  },

  // 69. Creative Liquid Morph (Creative)
  Creative_LiquidMorph: () => {
    const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);
    return (
      <div className="w-full bg-zinc-950 p-6 flex justify-center border-b border-zinc-900">
        <svg className="hidden">
          <defs>
            <filter id="liquid-morph-nav">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        
        <nav 
          className="relative bg-zinc-900/60 border border-zinc-800 rounded-full px-4 py-2 flex items-center gap-2 shadow-2xl"
          style={{ filter: 'url(#liquid-morph-nav)' }}
        >
          {['Home', 'Products', 'Changelog', 'Contact'].map((tab, i) => (
            <a 
              key={tab}
              href="#"
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className={cn(
                "relative z-10 px-6 py-2.5 rounded-full text-xs font-bold uppercase transition-all duration-300",
                hoverIndex === i ? "text-black bg-[#0fa]" : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              {tab}
            </a>
          ))}
        </nav>
      </div>
    );
  },

  // 70. Interactive Circular Orb (Creative)
  Interactive_CircularOrb: () => {
    const [active, setActive] = React.useState(false);
    return (
      <div className="w-full bg-zinc-950 border-b border-zinc-900 p-8 flex items-center justify-between relative overflow-hidden h-[180px]">
        <div className="flex flex-col">
          <span className="text-white font-black text-lg tracking-widest uppercase">ORBIT_CORE</span>
          <span className="text-[10px] text-zinc-500 mt-1 uppercase font-mono">Radial Navigation Interface</span>
        </div>
        
        <div className="relative w-32 h-32 flex items-center justify-center">
          {[
            { icon: '📁', label: 'Docs', angle: 0 },
            { icon: '📡', label: 'Sync', angle: 60 },
            { icon: '🛡️', label: 'Sec', angle: 120 },
            { icon: '⚙️', label: 'Set', angle: 180 }
          ].map((item, i) => {
            const rad = (item.angle * Math.PI) / 180;
            const radius = active ? 64 : 0;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius * -1;
            return (
              <div
                key={i}
                className={cn(
                  "absolute w-10 h-10 bg-zinc-800 hover:bg-[#0fa] hover:text-black text-white rounded-full flex items-center justify-center text-sm shadow-xl border border-zinc-700 hover:border-black transition-all duration-500 ease-out cursor-pointer z-10",
                  active ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
                )}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                title={item.label}
              >
                {item.icon}
              </div>
            );
          })}
          
          <button 
            onClick={() => setActive(!active)}
            className={cn(
              "absolute w-14 h-14 rounded-full flex items-center justify-center text-lg z-20 transition-all duration-300 font-bold border-2",
              active 
                ? "bg-[#0fa] text-black border-black shadow-[0_0_20px_#0fa] rotate-45" 
                : "bg-zinc-900 text-zinc-400 border-zinc-700 hover:border-zinc-500 hover:text-white"
            )}
          >
            {active ? '×' : '⊙'}
          </button>
        </div>
      </div>
    );
  }
};

