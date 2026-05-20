"use client";

import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  ArrowUpRight, 
  ArrowDownRight, 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  Activity, 
  PieChart, 
  Layers, 
  Sparkles,
  Command,
  Database,
  Lock,
  Compass,
  Feather,
  Terminal,
  Sliders,
  Eye,
  RefreshCw,
  Play,
  Flame,
  TrendingUp,
  Coins
} from 'lucide-react';
import { SmartImage } from '../SmartImage';

export const DashboardSaaSHero = {
  // Variante 01: Modern Bento (Estilo Apple, modular, limpio)
  ModernBento: () => (
    <div className="w-full min-h-screen bg-[#FBFBFD] text-slate-900 py-24 px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold">
            <Sparkles size={16} />
            <span>Introducing Analytics v4.0</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
            Data that <br /> <span className="text-slate-400">works for you.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium">
            The most intuitive dashboard for modern teams. Beautifully modular, incredibly fast, and designed for scale.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
              Get Started
            </button>
            <button className="px-10 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-6 md:grid-rows-4 gap-6 h-auto md:h-[800px]">
          <div className="md:col-span-8 md:row-span-2 bg-white rounded-[3rem] p-12 border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="relative z-10 flex justify-between items-start">
              <div className="space-y-4">
                <div className="text-blue-600 font-bold uppercase tracking-widest text-xs">Growth Overview</div>
                <div className="text-6xl font-black">+142%</div>
                <p className="text-slate-400 font-medium">Increase in organic traffic <br /> this quarter.</p>
              </div>
              <div className="p-4 bg-blue-50 text-blue-600 rounded-3xl">
                <BarChart3 size={40} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
              <SmartImage className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="md:col-span-4 md:row-span-2 bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10 flex justify-between items-start">
              <div className="space-y-1">
                <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest">Active Users</div>
                <div className="text-4xl font-black">24,502</div>
              </div>
              <Users size={32} className="text-indigo-400" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-indigo-500" />
              </div>
              <div className="text-xs text-white/40 font-bold uppercase tracking-widest italic text-right">Target: 30k</div>
            </div>
          </div>

          <div className="md:col-span-4 md:row-span-2 bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-500 transition-all cursor-pointer group">
            <div className="flex justify-between items-center">
              <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Shield size={24} />
              </div>
              <div className="text-emerald-500 flex items-center gap-1 font-bold">
                <ArrowUpRight size={16} />
                <span>99.9%</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-slate-900 font-bold text-2xl">Security Ops</div>
              <p className="text-slate-400 text-sm">Enterprise-grade protection active.</p>
            </div>
          </div>

          <div className="md:col-span-8 md:row-span-2 bg-indigo-50 rounded-[3rem] p-12 border border-indigo-100 flex items-center gap-12 group overflow-hidden">
             <div className="space-y-6 max-w-xs">
                <h3 className="text-3xl font-black text-indigo-950">Intelligent Workflows.</h3>
                <p className="text-indigo-900/60 font-medium leading-relaxed">Automate your reporting with our new AI engine.</p>
                <button className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all">
                  Configure
                </button>
             </div>
             <div className="flex-1 h-full bg-white rounded-3xl shadow-xl border border-indigo-100 p-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                <div className="space-y-4 opacity-40">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="h-8 bg-slate-100 rounded-lg w-full" />
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 02: Dark Command Center (HUD táctico, ciberpunk, alta densidad)
  DarkCommand: () => (
    <div className="w-full min-h-screen bg-[#050505] text-cyan-400 p-8 md:p-16 font-mono relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#0ff 1px, transparent 1px), linear-gradient(90deg, #0ff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        <div className="lg:col-span-3 space-y-8">
          <div className="p-6 border border-cyan-500/30 bg-black/50 backdrop-blur-xl space-y-6">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em]">
              <Command size={16} />
              <span>NAV_SYSTEM_v2</span>
            </div>
            <div className="space-y-4 opacity-60">
              {['OVERVIEW', 'OPERATIONS', 'NETWORK', 'SECURITY', 'STORAGE'].map(item => (
                <div key={item} className="flex justify-between items-center hover:text-white cursor-pointer transition-colors">
                  <span>{item}</span>
                  <div className="w-2 h-2 rounded-full border border-cyan-500/30" />
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 border border-fuchsia-500/30 bg-black/50 backdrop-blur-xl space-y-4">
             <div className="text-[10px] font-black uppercase text-fuchsia-500 tracking-[0.4em]">System_Health</div>
             <div className="flex justify-between items-end">
               <span className="text-4xl font-black text-white italic leading-none">98.2%</span>
               <Activity size={24} className="text-fuchsia-500 animate-pulse" />
             </div>
             <div className="h-1 w-full bg-fuchsia-500/20">
               <div className="h-full w-[98%] bg-fuchsia-500 shadow-[0_0_10px_#f0f]" />
             </div>
          </div>
        </div>

        <div className="lg:col-span-9 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-cyan-500/20 pb-8">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
                CONTROL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">MATRIX.</span>
              </h1>
              <p className="text-xs font-bold text-cyan-500/60 uppercase tracking-widest">Global Operations Command Center</p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-cyan-500 text-black font-black uppercase italic skew-x-[-12deg] hover:bg-white transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                Initialize_Drop
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-black uppercase italic skew-x-[-12deg] hover:bg-white/10 transition-all">
                Manuals
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-cyan-500/20 bg-black/50 relative group overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500" />
               <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500" />
               <div className="text-xs font-black uppercase opacity-40 mb-4 tracking-widest">Network_Traffic</div>
               <div className="h-32 flex items-end gap-1">
                 {[40, 70, 45, 90, 65, 80, 50, 60, 40, 85].map((h, i) => (
                   <div key={i} className="flex-1 bg-cyan-500/20 group-hover:bg-cyan-500/40 transition-all" style={{ height: `${h}%` }} />
                 ))}
               </div>
            </div>
            
            <div className="md:col-span-2 p-8 border border-cyan-500/20 bg-black/50 relative overflow-hidden group">
               <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <SmartImage className="w-full h-full object-cover grayscale invert" />
               </div>
               <div className="relative z-10 space-y-6">
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-black uppercase tracking-widest text-white">Neural_Node_Status</span>
                    <span className="text-cyan-400 text-[10px]">UPTIME: 1,402 HRS</span>
                 </div>
                 <div className="grid grid-cols-2 gap-12">
                   <div className="space-y-1">
                     <div className="text-4xl font-black text-white italic">0.042ms</div>
                     <div className="text-[10px] uppercase opacity-40 tracking-widest font-black">Latency</div>
                   </div>
                   <div className="space-y-1">
                     <div className="text-4xl font-black text-white italic">1.2 PB</div>
                     <div className="text-[10px] uppercase opacity-40 tracking-widest font-black">Data_Flow</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 03: Glass Analytics (Transparencias, backdrop-blur, colores pastel)
  GlassAnalytics: () => (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-8 font-sans overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400 rounded-full blur-[150px] opacity-20 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-400 rounded-full blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/40 backdrop-blur-md rounded-full border border-white/60 text-indigo-600 font-bold text-sm shadow-sm">
            <PieChart size={18} />
            <span>Intuitive Insights</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-800 leading-[0.8] tracking-tighter">
            Clear <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">Vision.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-md leading-relaxed">
            Beautifully simple analytics for creative teams. Experience your data in high definition.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="px-12 py-5 bg-white text-indigo-600 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
              Try Free
            </button>
            <button className="px-12 py-5 bg-white/20 backdrop-blur-md border border-white/40 text-slate-700 rounded-2xl font-black text-xl hover:bg-white/40 transition-all">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative group">
           <div className="absolute -inset-10 bg-white/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           <div className="relative aspect-square bg-white/20 backdrop-blur-3xl border border-white/40 rounded-[4rem] p-12 shadow-2xl flex flex-col justify-between transform rotate-3 group-hover:rotate-0 transition-transform duration-700">
              <div className="flex justify-between items-center border-b border-white/30 pb-8">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                   <div className="w-3 h-3 rounded-full bg-green-400/50" />
                 </div>
                 <div className="text-slate-800 font-black text-xs uppercase tracking-[0.3em]">ANALYTICS_DASH</div>
              </div>
              
              <div className="flex-1 py-12 flex items-center justify-center">
                 <div className="w-64 h-64 rounded-full border-[20px] border-white/30 relative flex items-center justify-center">
                    <div className="absolute inset-0 border-[20px] border-indigo-500/60 rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 70%)' }} />
                    <div className="text-center">
                       <div className="text-4xl font-black text-slate-800">72%</div>
                       <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Efficiency</div>
                    </div>
                 </div>
              </div>

              <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-6 rounded-3xl flex justify-between items-center shadow-xl">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-500 text-white rounded-2xl">
                      <Zap size={20} />
                    </div>
                    <div>
                       <div className="text-sm font-black text-slate-800">Peak Performance</div>
                       <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Now</div>
                    </div>
                 </div>
                 <ArrowUpRight size={24} className="text-indigo-600" />
              </div>
           </div>
        </div>
      </div>
    </div>
  ),

  // Variante 04: Neo-Brutalist Dashboard (Bordes negros, colores vivos, sombras duras)
  NeoBrutalistDash: () => (
    <div className="w-full min-h-screen bg-[#FFD700] flex items-center justify-center p-8 font-mono">
      <div className="max-w-6xl w-full bg-white border-[6px] border-black shadow-[20px_20px_0px_#000] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500 border-l-[6px] border-b-[6px] border-black flex items-center justify-center rotate-12 translate-x-10 -translate-y-10">
          <Layers size={48} className="text-white" />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-block bg-black text-white px-6 py-2 border-[4px] border-black font-black uppercase tracking-tighter italic -rotate-2">
              DASHBOARD_ENGINE_v9
            </div>
            <h1 className="text-7xl md:text-9xl font-black text-black leading-[0.8] tracking-tighter uppercase">
              BOLD <br /> <span className="bg-blue-600 text-white px-4">DATA.</span>
            </h1>
            <p className="text-2xl font-bold text-black max-w-md uppercase leading-tight">
              Brutalist analytics for those who don{"'"}t fear the numbers. Raw, honest, and powerful.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <button className="px-10 py-5 bg-black text-white font-black text-2xl hover:bg-pink-500 hover:text-white transition-colors border-[4px] border-black shadow-[10px_10px_0px_rgba(0,0,0,0.2)] uppercase italic">
                Get Access
              </button>
              <button className="px-10 py-5 bg-white text-black font-black text-2xl hover:bg-blue-600 hover:text-white transition-colors border-[4px] border-black shadow-[10px_10px_0px_rgba(0,0,0,0.2)] uppercase italic">
                Documentation
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white border-[4px] border-black p-8 shadow-[12px_12px_0px_#000] space-y-6">
              <div className="flex justify-between items-center border-b-[4px] border-black pb-4">
                <span className="text-xl font-black uppercase italic tracking-tighter">Live_Metrics</span>
                <div className="w-4 h-4 bg-green-500 border-[2px] border-black rounded-full animate-ping" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-5xl font-black text-blue-600 italic leading-none">8.2k</div>
                  <div className="text-xs font-black uppercase tracking-widest text-black/40">Request_Sec</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-black text-pink-500 italic leading-none">12ms</div>
                  <div className="text-xs font-black uppercase tracking-widest text-black/40">Avg_Latency</div>
                </div>
              </div>
            </div>

            <div className="bg-black text-white border-[4px] border-black p-8 shadow-[12px_12px_0px_#FFD700] space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white text-black border-[2px] border-black">
                   <Database size={24} />
                </div>
                <div className="text-sm font-black uppercase tracking-[0.2em]">Storage_System: OK</div>
              </div>
              <div className="h-4 w-full bg-white/20 border-[2px] border-white">
                <div className="h-full w-2/3 bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 05: Minimalist SaaS (Blanco/Negro puro, tipografía fina, Apple-style)
  MinimalistSaaS: () => (
    <div className="w-full min-h-screen bg-white text-slate-950 flex items-center justify-center p-8 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="text-[10px] font-bold uppercase tracking-[0.8em] text-slate-300 italic">The Future of Efficiency</div>
            <h1 className="text-8xl md:text-[10rem] font-black leading-[0.75] tracking-tighter uppercase italic">
              LESS <br /> BUT <br /> <span className="text-slate-300">BETTER.</span>
            </h1>
          </div>
          <p className="text-2xl text-slate-500 max-w-md font-light leading-relaxed">
            A minimalist approach to complex data. We remove the noise so you can focus on the signal.
          </p>
          <div className="flex gap-12 items-center pt-8">
            <button className="text-2xl font-black uppercase tracking-tighter hover:line-through transition-all decoration-4">
              Join Waitlist
            </button>
            <div className="w-px h-12 bg-slate-200" />
            <button className="text-2xl font-black uppercase tracking-tighter text-slate-300 hover:text-slate-950 transition-all">
              Specs
            </button>
          </div>
        </div>

        <div className="relative aspect-square bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden group p-12 flex flex-col justify-between">
           <div className="flex justify-between items-start">
              <div className="space-y-1">
                 <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Overview</div>
                 <div className="text-4xl font-black italic">DASH_01</div>
              </div>
              <ArrowUpRight size={32} className="text-slate-300 group-hover:text-slate-950 transition-colors" />
           </div>
           
           <div className="flex-1 flex items-center justify-center">
              <div className="w-full h-1/2 bg-white rounded-3xl shadow-2xl border border-slate-50 p-8 flex flex-col justify-center gap-6 group-hover:scale-105 transition-transform duration-700">
                 {[1, 2].map(i => (
                   <div key={i} className="space-y-2">
                      <div className="h-2 w-1/4 bg-slate-100 rounded-full" />
                      <div className="h-4 w-full bg-slate-50 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-slate-900 group-hover:w-full transition-all duration-1000" />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 text-center">
             Verified System // 2024
           </div>
        </div>
      </div>
    </div>
  ),

  // Variante 06: Claymorphic Dashboard (Suave, redondeado, aspecto 3D/plastilina)
  ClayDash: () => (
    <div className="w-full min-h-screen bg-[#E0EFFF] flex items-center justify-center p-8 font-sans">
      <div className="max-w-6xl w-full bg-[#E0EFFF] rounded-[4rem] p-16 shadow-[20px_20px_60px_#beccda,-20px_-20px_60px_#ffffff] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border border-white/40">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/10 rounded-full text-blue-600 font-bold text-sm shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)]">
            <LayoutDashboard size={18} />
            <span>Smart Dashboard</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-800 leading-none tracking-tight">
            Soft <br /> <span className="text-blue-500">Flow.</span>
          </h1>
          <p className="text-slate-500 text-xl font-medium leading-relaxed">
            The friendliest way to manage your business. Beautifully tactile, incredibly powerful.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="px-12 py-5 bg-blue-500 text-white rounded-[2rem] font-black text-xl shadow-[8px_8px_16px_rgba(59,130,246,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all">
              Start Now
            </button>
            <button className="px-12 py-5 bg-white text-slate-700 rounded-[2rem] font-black text-xl shadow-[8px_8px_16px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(0,0,0,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all">
              Tutorial
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square bg-white rounded-[4rem] shadow-[inset_10px_10px_20px_#beccda,inset_-10px_-10px_20px_#ffffff] p-12 flex flex-col justify-between overflow-hidden group">
             <div className="flex justify-between items-center">
                <div className="w-16 h-16 bg-[#E0EFFF] rounded-3xl shadow-[4px_4px_8px_#beccda,-4px_-4px_8px_#ffffff] flex items-center justify-center text-blue-500">
                  <BarChart3 size={28} />
                </div>
                <div className="px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-xs font-black shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)]">
                  STABLE
                </div>
             </div>
             
             <div className="flex-1 flex flex-col justify-center gap-8">
                {[1, 2].map(i => (
                  <div key={i} className="space-y-4">
                     <div className="h-4 w-1/3 bg-slate-100 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)]" />
                     <div className="h-8 w-full bg-slate-50 rounded-2xl shadow-[inset_4px_4px_8px_#beccda,inset_-4px_-4px_8px_#ffffff] p-1">
                        <div className="h-full w-3/4 bg-blue-500 rounded-xl shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),2px_2px_4px_rgba(59,130,246,0.3)]" />
                     </div>
                  </div>
                ))}
             </div>
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-400 rounded-full shadow-[inset_8px_8px_16px_rgba(255,255,255,0.3),8px_8px_16px_rgba(244,114,182,0.3)] flex items-center justify-center text-white font-black text-xl rotate-12">
            PRO
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 07: Swiss Functional (Grid estricto, Helvetica, minimalismo corporativo)
  SwissFunctional: () => (
    <div className="w-full min-h-screen bg-[#F0F0F0] text-black p-8 md:p-24 font-sans uppercase">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 border-t-8 border-black pt-12">
        <div className="md:col-span-8">
           <h1 className="text-8xl md:text-[18rem] font-black leading-[0.7] tracking-tighter">
             AN <br /> AL <br /> YSIS.
           </h1>
        </div>
        <div className="md:col-span-4 flex flex-col justify-between py-6">
           <div className="space-y-10">
             <div className="text-sm font-black tracking-[0.4em] border-b-4 border-black pb-4 inline-block italic">Functional Dashboard Vol. 04</div>
             <p className="text-2xl font-bold leading-tight lowercase normal-case">
               Objective metrics for high-performance organizations. We prioritize structural clarity and rapid data retrieval.
             </p>
           </div>
           <div className="space-y-4 pt-16">
              <button className="w-full py-8 bg-black text-white font-black text-3xl hover:bg-red-600 transition-colors flex justify-between px-10 items-center group italic">
                 <span>ENTER_DASH</span>
                 <ArrowUpRight size={40} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
              <div className="flex justify-between text-xs font-black tracking-widest pt-4 opacity-40">
                 <span>BASEL / SAN FRANCISCO</span>
                 <span>©2024</span>
              </div>
           </div>
        </div>
      </div>
      
      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-0 border-t-2 border-black">
         {['USERS', 'REVENUE', 'SERVER', 'SECURITY'].map((cat, i) => (
           <div key={i} className="p-10 border-r-2 border-black last:border-r-0 hover:bg-black hover:text-white transition-all cursor-pointer group">
              <span className="text-[10px] font-black block mb-8 opacity-40 group-hover:opacity-100">METRIC_0{i+1}</span>
              <div className="flex justify-between items-end">
                <span className="text-4xl font-black italic">{cat}</span>
                <span className="text-sm font-bold opacity-0 group-hover:opacity-100">LIVE</span>
              </div>
           </div>
         ))}
      </div>
    </div>
  ),

  // Variante 08: Solarpunk Metrics (Eco-tech, verde/blanco, orgánico)
  SolarMetrics: () => (
    <div className="w-full min-h-screen bg-[#FDFCF8] flex items-center justify-center p-8 overflow-hidden font-sans relative">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-50 rounded-full blur-[120px] opacity-60 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-amber-50 rounded-full blur-[120px] opacity-60 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12">
          <div className="flex items-center gap-4 text-emerald-600 text-xs font-black tracking-[0.4em] uppercase">
             <div className="h-[2px] w-12 bg-emerald-500" />
             <span>Sustainable Insights</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tight">
            Clean <br /> <span className="text-emerald-500 italic font-light tracking-tighter">Metrics.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-md leading-relaxed">
            Regenerative data visualization for the next era of business. Grow your impact, not just your numbers.
          </p>
          <div className="flex flex-wrap gap-8 items-center pt-4">
            <button className="px-12 py-5 bg-emerald-600 text-white rounded-full font-bold text-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center gap-4">
              <span>Launch Console</span>
              <ArrowUpRight size={20} />
            </button>
            <div className="flex items-center gap-4 text-emerald-900 font-black text-sm uppercase tracking-widest border-b-2 border-emerald-500 pb-1 cursor-pointer group">
               <Globe size={18} className="group-hover:rotate-12 transition-transform" />
               <span>Global Impact</span>
            </div>
          </div>
        </div>
        
        <div className="relative group">
           <div className="absolute -inset-10 bg-emerald-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           <div className="relative aspect-[4/5] bg-white rounded-[3rem] p-12 shadow-2xl border border-emerald-50 flex flex-col justify-between overflow-hidden">
              <div className="space-y-8">
                 <div className="flex justify-between items-center">
                    <div className="p-4 bg-emerald-50 text-emerald-600 rounded-3xl">
                       <PieChart size={32} />
                    </div>
                    <div className="text-right">
                       <div className="text-xs font-black text-emerald-900/40 uppercase tracking-widest">Efficiency_Score</div>
                       <div className="text-3xl font-black text-emerald-600 italic">94/100</div>
                    </div>
                 </div>
                 
                 <div className="space-y-6">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-6 group/item cursor-pointer">
                         <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all">
                            <Activity size={20} />
                         </div>
                         <div className="flex-1 space-y-2">
                            <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                               <span>Node_0{i}</span>
                               <span className="text-emerald-500">ACTIVE</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                               <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: `${60 + (i * 10)}%` }} />
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-emerald-900 text-white p-6 rounded-3xl flex items-center justify-between shadow-xl shadow-emerald-200/50 group-hover:scale-105 transition-transform">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl">
                       <Zap size={24} className="text-emerald-400" />
                    </div>
                    <div>
                       <div className="text-sm font-black uppercase tracking-widest italic">Power_Save</div>
                       <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Optimized</div>
                    </div>
                 </div>
                 <ArrowUpRight size={24} />
              </div>
           </div>
        </div>
      </div>
    </div>
  ),

  // Variante 09: Kinetic Data (Texto gigante, impacto visual, minimalismo de movimiento)
  KineticData: () => (
    <div className="w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden font-sans relative">
      <div className="absolute inset-0 flex flex-col justify-between py-12 opacity-10 select-none pointer-events-none">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="text-[18rem] font-black leading-none whitespace-nowrap -translate-x-40 tracking-tighter uppercase italic text-white">
            DATA DATA DATA DATA DATA
          </div>
        ))}
      </div>
      
      <div className="relative z-10 text-center space-y-16 px-6">
        <div className="space-y-4">
          <div className="text-indigo-500 font-black text-2xl tracking-[0.5em] uppercase italic animate-pulse">
            S_Y_S_T_E_M_L_I_V_E
          </div>
          <h1 className="text-[10rem] md:text-[22rem] font-black text-white leading-[0.7] tracking-tighter uppercase italic drop-shadow-[0_0_80px_rgba(79,70,229,0.3)]">
            SCALE <br /> <span className="text-transparent border-t-8 md:border-t-[16px] border-indigo-500 pt-4">UP.</span>
          </h1>
        </div>
        
        <div className="flex flex-col items-center gap-12">
          <p className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter max-w-3xl italic leading-none">
            Processing billions of events <br /> with zero latency. Built for the elite.
          </p>
          <div className="flex gap-8">
            <button className="px-20 py-8 bg-white text-black font-black text-4xl uppercase italic hover:scale-110 active:scale-95 transition-all shadow-[15px_15px_0px_rgba(79,70,229,0.4)]">
              Console
            </button>
            <button className="px-20 py-8 border-4 border-white text-white font-black text-4xl uppercase italic hover:bg-white hover:text-black transition-all">
              API_Docs
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 10: ASCII Terminal Dashboard (Puro texto, low-tech, retro-futurista)
  ASCIIDash: () => (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-[#00ff41] flex items-center justify-center p-6 md:p-12 font-mono">
      <div className="max-w-5xl w-full border-4 border-[#00ff41] p-8 md:p-16 space-y-12 relative shadow-[0_0_40px_rgba(0,255,65,0.1)]">
        <div className="flex justify-between items-center text-xs opacity-60 border-b-2 border-[#00ff41]/30 pb-6">
          <span>{">"} DASHBOARD_PROTOCOL_v4.2.0</span>
          <span className="hidden md:block">LOC: 192.168.1.1</span>
          <span>STATUS: ENCRYPTED</span>
        </div>
        
        <div className="space-y-10">
          <div className="text-4xl md:text-6xl font-bold leading-none uppercase">
            +------------------------------------+<br />
            | GLOBAL_ANALYTICS_COMMAND_CENTER |<br />
            +------------------------------------+
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
               <div className="space-y-4">
                  <div className="text-xl font-black uppercase tracking-widest">[ SYSTEM_LOGS ]</div>
                  <div className="bg-[#00ff41]/5 border border-[#00ff41]/20 p-6 space-y-2 opacity-80 text-sm">
                    <div>{">"} AUTH_SUCCESS: ADMIN_01_X</div>
                    <div>{">"} KERNEL_LOADED: 100%</div>
                    <div>{">"} NETWORK_UPLINK: STABLE</div>
                    <div className="animate-pulse">{">"} LISTENING_FOR_EVENTS...</div>
                  </div>
               </div>
               
               <div className="space-y-6 py-8 border-y-2 border-[#00ff41]/30">
                  <div className="text-xl font-black uppercase tracking-widest">[ METRICS ]</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <div className="flex justify-between text-xs opacity-60">
                         <span>CPU_USAGE</span>
                         <span>[||||||----] 62%</span>
                       </div>
                       <div className="flex justify-between text-xs opacity-60">
                         <span>MEM_LOAD</span>
                         <span>[||||||||--] 84%</span>
                       </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                       <div className="text-4xl font-black italic underline decoration-double">24.5k REQ/S</div>
                       <div className="text-[10px] opacity-40 uppercase font-black tracking-widest italic text-right">Throughput_Metric</div>
                    </div>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-4 space-y-8">
               <div className="border-2 border-[#00ff41]/30 p-8 space-y-6">
                  <div className="text-xs font-black uppercase tracking-[0.3em] text-white underline decoration-white/20">Action_Panel</div>
                  <div className="space-y-4">
                    <button className="w-full py-4 bg-[#00ff41] text-[#0a0a0a] font-black text-xl hover:bg-white transition-all uppercase shadow-[8px_8px_0px_rgba(0,255,65,0.3)]">
                      [ RUN_QUERY ]
                    </button>
                    <button className="w-full py-4 border-2 border-[#00ff41] text-[#00ff41] font-black text-xl hover:bg-[#00ff41] hover:text-[#0a0a0a] transition-all uppercase">
                      [ FLUSH_CACHE ]
                    </button>
                  </div>
               </div>
               
               <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                  <Lock size={14} />
                  <span>Restricted Access Zone</span>
               </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-12 text-[10px] opacity-40 uppercase tracking-[0.5em]">
          <span>* AUTH: AES-256</span>
          <span>* UPTIME: 99.999%</span>
          <span>* MODE: DEV_OPS</span>
        </div>
      </div>
    </div>
  ),

  // Variante 11: SkeuoGlass (Skeuomorphism moderno, texturas metálicas, vidrio profundo)
  SkeuoGlass: () => (
    <div className="w-full min-h-screen bg-radial from-[#1e2230] to-[#0f111a] text-slate-200 p-8 md:p-16 font-sans relative">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-gradient-to-b from-[#2a3045]/80 to-[#1b1f2e]/80 border border-[#3e4766]/50 rounded-[2rem] p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151824] border border-[#2d344d] rounded-full text-xs text-[#00d2ff] font-bold shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
              <Cpu size={12} className="animate-spin" style={{ animationDuration: '4s' }} />
              <span>SKEUO_ENGINE_v4.5</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Operations <span className="text-[#00d2ff]">Console</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3.5 bg-gradient-to-b from-[#00d2ff] to-[#008cff] text-white font-bold rounded-xl shadow-[0_4px_12px_rgba(0,140,255,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-[#00c8ff] hover:brightness-110 active:scale-95 transition-all">
              Deploy Update
            </button>
            <button className="px-8 py-3.5 bg-gradient-to-b from-[#2d344d] to-[#1e2233] text-slate-300 font-bold rounded-xl border border-[#3d4666] shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.3)] hover:text-white transition-all">
              Diagnostics
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-[#2a3045]/60 to-[#1b1f2e]/60 border border-[#3e4766]/30 rounded-[2.5rem] p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Temperature</span>
              <Sliders size={18} className="text-[#00d2ff]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">42.8°C</span>
              <span className="text-emerald-400 text-sm font-bold">OPTIMAL</span>
            </div>
            <div className="h-8 bg-[#121520] border border-[#2b3147] rounded-xl p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-red-500 rounded-lg shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-1000" style={{ width: '42%' }} />
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#2a3045]/60 to-[#1b1f2e]/60 border border-[#3e4766]/30 rounded-[2.5rem] p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Network Throughput</span>
                <div className="text-4xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">842.1 GB/s</div>
              </div>
              <Activity size={24} className="text-[#ff00a0] animate-pulse" />
            </div>
            <div className="grid grid-cols-5 gap-2 pt-6">
              {[40, 60, 50, 85, 75].map((h, i) => (
                <div key={i} className="h-10 bg-[#121520] border border-[#2b3147] rounded-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#ff00a0] to-[#ff66c4] rounded-md shadow-[0_0_8px_rgba(255,0,160,0.5)]" style={{ height: `${h}%` }} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#2a3045]/60 to-[#1b1f2e]/60 border border-[#3e4766]/30 rounded-[2.5rem] p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Security Vault</span>
              <Shield size={18} className="text-[#00ff8c]" />
            </div>
            <div className="p-4 bg-[#121520] border border-[#2b3147] rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] flex items-center gap-4">
              <div className="p-3 bg-[#00ff8c]/10 text-[#00ff8c] border border-[#00ff8c]/20 rounded-xl shadow-[0_0_10px_rgba(0,255,140,0.2)]">
                <Lock size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">AES-256 Active</div>
                <div className="text-[10px] text-slate-400">No breaches detected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 12: LuxuryEditorial (Luxury Editorial, serif, blanco/negro/oro, espacio amplio)
  LuxuryEditorial: () => (
    <div className="w-full min-h-screen bg-[#FBFBF9] text-[#1C1C1A] py-24 px-8 font-serif relative">
      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        <header className="border-b border-[#1C1C1A]/10 pb-12 flex flex-col md:flex-row justify-between items-baseline gap-6">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] font-sans text-slate-400">The Obsidian Edition</span>
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-slate-900 leading-none">
              Maison <span className="italic font-normal">Analytics</span>
            </h1>
          </div>
          <div className="flex gap-8 items-center font-sans text-sm tracking-widest">
            <button className="hover:text-amber-600 transition-colors uppercase">Chronicle</button>
            <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
            <button className="px-6 py-2.5 border border-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white transition-all uppercase">
              Extract Report
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-slate-400">Philosophie</span>
              <p className="text-2xl font-light leading-relaxed normal-case italic text-slate-700">
                "Simplicity is the ultimate sophistication. We curate data points into a narrative of absolute clarity."
              </p>
            </div>
            <div className="border-t border-[#1C1C1A]/10 pt-8 grid grid-cols-2 gap-8 font-sans">
              <div className="space-y-1">
                <div className="text-xs text-slate-400 uppercase tracking-wider">Aesthetic Score</div>
                <div className="text-3xl font-light text-slate-800">9.8/10</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-400 uppercase tracking-wider">Growth Factor</div>
                <div className="text-3xl font-light text-slate-800">+24.5%</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div className="border border-[#1C1C1A]/10 bg-white rounded-xl p-10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBFBF9] border-l border-b border-[#1C1C1A]/5 rounded-bl-[4rem]" />
              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-center font-sans">
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">Quarterly Revenue</span>
                  <span className="text-[10px] text-slate-400">UPDATED MAY 2026</span>
                </div>
                <div className="space-y-2">
                  <div className="text-6xl font-light text-slate-900">$2.48M</div>
                  <p className="text-sm font-sans text-slate-400 max-w-sm">Refined performance metrics reflecting strong high-end portfolio growth.</p>
                </div>
                <div className="h-px w-full bg-[#1C1C1A]/10" />
                <div className="flex justify-between items-center text-xs font-sans text-slate-500 pt-2">
                  <span>Gross Margin: <strong className="text-slate-900 font-extrabold">84.2%</strong></span>
                  <span>Target Margin: <strong className="text-slate-900 font-extrabold">85.0%</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 13: Retro8Bit (8-bit, retro, Gameboy, terminal pixelada)
  Retro8Bit: () => (
    <div className="w-full min-h-screen bg-[#1b1e22] text-[#92cc41] p-8 md:p-16 font-mono">
      <div className="max-w-6xl mx-auto border-8 border-black bg-[#212529] p-8 md:p-12 relative shadow-[16px_16px_0px_#000] space-y-8">
        <header className="border-b-4 border-black pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#e76e55] font-bold">[PLAYER_ONE_CONSOLE]</span>
            <h1 className="text-4xl font-extrabold uppercase tracking-wider text-white">System: ONLINE</h1>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-[#e76e55] text-white font-bold border-4 border-black shadow-[4px_4px_0px_#000] hover:translate-y-1 hover:shadow-[0px_0px_0px_#000] transition-all uppercase">
              Start Update
            </button>
            <button className="px-6 py-3 bg-[#209cee] text-white font-bold border-4 border-black shadow-[4px_4px_0px_#000] hover:translate-y-1 hover:shadow-[0px_0px_0px_#000] transition-all uppercase">
              Save Stats
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-4 border-black bg-[#1b1e22] p-6 shadow-[8px_8px_0px_#000] space-y-4">
            <div className="text-xs uppercase tracking-wider text-[#f7d51d]">High Score</div>
            <div className="text-3xl font-extrabold text-white">999,950</div>
            <div className="text-[10px] text-slate-500 uppercase">Rank: Global Elite</div>
          </div>

          <div className="border-4 border-black bg-[#1b1e22] p-6 shadow-[8px_8px_0px_#000] space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wider text-[#92cc41]">CPU Load</div>
              <div className="text-3xl font-extrabold text-white">32%</div>
            </div>
            <div className="h-6 w-full bg-black border-4 border-black relative">
              <div className="h-full bg-[#92cc41]" style={{ width: '32%' }} />
            </div>
          </div>

          <div className="border-4 border-black bg-[#1b1e22] p-6 shadow-[8px_8px_0px_#000] space-y-4">
            <div className="text-xs uppercase tracking-wider text-[#e76e55]">Inventory</div>
            <div className="flex gap-2 text-xs">
              <span className="px-2 py-1 bg-black text-[#92cc41] border border-[#92cc41]">ITEMS: 42</span>
              <span className="px-2 py-1 bg-black text-[#f7d51d] border border-[#f7d51d]">GOLD: 1.2k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 14: WabiSabi (Wabi-Sabi, orgánico, tonos tierra, asimetría zen)
  WabiSabi: () => (
    <div className="w-full min-h-screen bg-[#F3F1EC] text-[#33312E] py-24 px-8 font-serif relative">
      <div className="absolute top-12 left-12 w-24 h-24 bg-[#E8E4DB] rounded-full blur-2xl opacity-80" />
      
      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-sans text-slate-400">Quiet Architecture</span>
          <h1 className="text-5xl md:text-7xl font-light italic leading-tight text-[#4A4742]">
            Earthy <span className="font-normal not-italic">Console</span>
          </h1>
          <p className="text-lg text-slate-500 font-sans leading-relaxed max-w-md mx-auto">
            Imperfection is beauty. A calm environment designed for organic metrics and daily contemplation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          <div className="md:col-span-7 bg-[#EBE7DF] rounded-[3rem] p-12 border border-[#DFDAD0] flex flex-col justify-between space-y-8">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <span className="text-xs font-sans uppercase tracking-widest text-slate-400">Daily Reflection</span>
                <h3 className="text-3xl font-light text-[#4A4742]">Calm Growth</h3>
              </div>
              <Compass size={24} className="text-[#7F796E]" />
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-light text-[#4A4742]">+8.4%</div>
              <p className="text-sm font-sans text-slate-400">Sustainable growth achieved through deliberate practice and patience.</p>
            </div>
          </div>

          <div className="md:col-span-5 bg-[#EBE7DF] rounded-[3rem] p-12 border border-[#DFDAD0] flex flex-col justify-between space-y-8">
            <div className="flex justify-between items-center">
              <span className="text-xs font-sans uppercase tracking-widest text-slate-400">Energy Level</span>
              <Feather size={20} className="text-[#7F796E]" />
            </div>
            <div className="space-y-6">
              <div className="h-[200px] w-full bg-[#E5E0D5] rounded-3xl relative overflow-hidden flex items-end p-2 shadow-inner">
                <div className="absolute inset-0 bg-[#E8E4DB] rounded-2xl transform translate-y-12" />
                <div className="relative z-10 w-full h-1/2 bg-[#7F796E] rounded-2xl shadow-lg" />
              </div>
              <div className="text-center text-xs font-sans text-slate-400 uppercase tracking-widest">Natural Balance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 15: NeoMemphis (Neo-Memphis, zig-zags, sombras duras, geometría 2D)
  NeoMemphis: () => (
    <div className="w-full min-h-screen bg-[#FFF0F5] text-black py-24 px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-16 relative">
        <div className="absolute top-[-50px] left-[-30px] w-20 h-20 border-[4px] border-black rounded-full bg-[#00F0FF] z-0" />
        <div className="absolute bottom-[-50px] right-[-30px] w-24 h-24 border-[4px] border-black bg-[#FFDE00] z-0" />
        
        <header className="relative z-10 bg-white border-[4px] border-black rounded-2xl p-8 shadow-[8px_8px_0px_#000] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-[#FF007F] text-white border-[2px] border-black rounded-full text-xs font-black uppercase tracking-wider">
              MEMPHIS_v2.0
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-slate-900 leading-none">
              Playful <span className="underline decoration-[#00F0FF] decoration-8">Dashboard</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-[#FFDE00] hover:bg-[#FF007F] hover:text-white text-black font-black border-[4px] border-black rounded-xl shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_#000] transition-all uppercase">
              Action Now
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="bg-white border-[4px] border-black rounded-2xl p-8 shadow-[8px_8px_0px_#000] space-y-6">
            <div className="text-xs font-black uppercase tracking-widest text-[#FF007F]">Traffic Stats</div>
            <div className="text-5xl font-black text-slate-900">+1,402</div>
            <div className="h-6 w-full bg-slate-100 border-[3px] border-black rounded-full overflow-hidden">
              <div className="h-full bg-[#00F0FF] border-r-[3px] border-black" style={{ width: '70%' }} />
            </div>
          </div>

          <div className="bg-[#00F0FF] border-[4px] border-black rounded-2xl p-8 shadow-[8px_8px_0px_#000] space-y-6">
            <div className="text-xs font-black uppercase tracking-widest text-black">Active Nodes</div>
            <div className="text-5xl font-black text-white" style={{ textShadow: '2px 2px #000' }}>24 Nodes</div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-white border-[2px] border-black rounded-full text-xs font-bold">NODE_A: OK</span>
              <span className="px-3 py-1 bg-[#FFDE00] border-[2px] border-black rounded-full text-xs font-bold">NODE_B: ON</span>
            </div>
          </div>

          <div className="bg-white border-[4px] border-black rounded-2xl p-8 shadow-[8px_8px_0px_#000] space-y-6 flex flex-col justify-between">
            <div className="text-xs font-black uppercase tracking-widest text-[#FFDE00]">System Load</div>
            <div className="text-5xl font-black text-slate-900">42%</div>
            <div className="h-4 w-full bg-slate-100 border-[3px] border-black rounded-full overflow-hidden">
              <div className="h-full bg-[#FF007F] border-r-[3px] border-black" style={{ width: '42%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 16: Blueprint (Drafting table, blanco sobre azul, líneas de plano técnico)
  Blueprint: () => (
    <div className="w-full min-h-screen bg-[#004B87] text-[#00E5FF] p-8 md:p-16 font-mono relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-6xl mx-auto space-y-12 relative z-10 border-2 border-[#00E5FF]/40 p-8 md:p-12 bg-[#004B87]/90 rounded-2xl">
        <header className="border-b-2 border-[#00E5FF]/40 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-[#00E5FF]/70">[ENG_SPECIFICATION_SHEET_v1.0]</div>
            <h1 className="text-3xl font-extrabold uppercase tracking-wider text-white">SYSTEM_ARCHITECTURE</h1>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 border border-[#00E5FF] text-[#00E5FF] font-bold hover:bg-[#00E5FF]/20 transition-all uppercase text-sm">
              Run Simulation
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-[#00E5FF]/40 p-6 space-y-4 relative">
            <div className="absolute top-0 right-0 p-2 text-[10px] text-[#00E5FF]/40">FIG_01</div>
            <div className="text-xs uppercase tracking-wider text-[#00E5FF]/70">Scale Factor</div>
            <div className="text-4xl font-extrabold text-white">1 : 4.2</div>
            <p className="text-[10px] text-[#00E5FF]/50 uppercase">Dimensions in millimeters</p>
          </div>

          <div className="border border-[#00E5FF]/40 p-6 space-y-4 flex flex-col justify-between relative">
            <div className="absolute top-0 right-0 p-2 text-[10px] text-[#00E5FF]/40">FIG_02</div>
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wider text-[#00E5FF]/70">Memory Allocation</div>
              <div className="text-4xl font-extrabold text-white">64.5 MB</div>
            </div>
            <div className="h-4 w-full bg-[#004B87]/50 border border-[#00E5FF]/40 relative">
              <div className="h-full bg-[#00E5FF]/40" style={{ width: '64%' }} />
            </div>
          </div>

          <div className="border border-[#00E5FF]/40 p-6 space-y-4 relative">
            <div className="absolute top-0 right-0 p-2 text-[10px] text-[#00E5FF]/40">FIG_03</div>
            <div className="text-xs uppercase tracking-wider text-[#00E5FF]/70">Security Protocol</div>
            <div className="text-3xl font-extrabold text-white">ACTIVE</div>
            <div className="flex gap-2">
              <span className="text-[9px] px-2 py-0.5 border border-[#00E5FF]/40 uppercase">ENCR: YES</span>
              <span className="text-[9px] px-2 py-0.5 border border-[#00E5FF]/40 uppercase">CERT: OK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 17: Glitch (Glitch cyberpunk v2, aberración cromática, luces radioactivas)
  Glitch: () => (
    <div className="w-full min-h-screen bg-[#050505] text-[#FF007F] p-8 md:p-16 font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FF007F]/5 animate-pulse pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-1 bg-[#00F0FF]/30 blur-[2px] animate-bounce" />
      
      <div className="max-w-6xl mx-auto space-y-12 relative z-10 border-4 border-[#FF007F] bg-black p-8 md:p-12 shadow-[0_0_50px_rgba(255,0,127,0.3)]">
        <header className="border-b-4 border-[#FF007F] pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase text-[#00F0FF] tracking-widest">
              [SYSTEM_STATE: CRITICAL]
            </span>
            <h1 className="text-4xl font-extrabold tracking-wider text-white" style={{ textShadow: '2px 2px #00F0FF, -2px -2px #FF007F' }}>
              ERROR: CORRUPTED_LOGS
            </h1>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-[#FF007F] text-white border-2 border-[#FF007F] font-black uppercase hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,0,127,0.5)]">
              Fix System
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-2 border-[#FF007F] p-6 bg-black/60 relative group">
            <div className="text-xs font-black uppercase tracking-widest text-[#00F0FF]">Diagnostic Feed</div>
            <div className="text-3xl font-black text-white mt-4 italic">SYS_WARN</div>
            <div className="text-[10px] text-slate-500 uppercase mt-2">Uptime: 0.04s</div>
          </div>

          <div className="border-2 border-[#FF007F] p-6 bg-black/60 relative flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-black uppercase tracking-widest text-[#FF007F]">Threat Count</div>
              <div className="text-4xl font-black text-white italic">402 Detected</div>
            </div>
            <div className="h-4 w-full bg-black border border-[#FF007F]/40 relative overflow-hidden">
              <div className="h-full bg-[#FF007F]" style={{ width: '82%' }} />
            </div>
          </div>

          <div className="border-2 border-[#FF007F] p-6 bg-black/60 relative">
            <div className="text-xs font-black uppercase tracking-widest text-[#00F0FF]">Data Flow</div>
            <div className="text-3xl font-black text-white mt-4 italic">1.2 PB/S</div>
            <div className="text-[10px] text-slate-500 uppercase mt-2">Buffer: Max Overflow</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 18: PastelCloud (Pastel cloud, onírico, bordes súper redondeados)
  PastelCloud: () => (
    <div className="w-full min-h-screen bg-gradient-to-tr from-[#FFF0F5] via-[#E6E6FA] to-[#E0FFFF] flex items-center justify-center p-8 font-sans overflow-hidden">
      <div className="max-w-6xl w-full bg-white/50 backdrop-blur-xl rounded-[3rem] border border-white/60 p-12 md:p-20 shadow-2xl relative">
        <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-[#FFE4E1] rounded-full blur-[100px] opacity-70 animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 bg-[#E0FFFF] rounded-full blur-[100px] opacity-70 animate-pulse" style={{ animationDelay: '2.5s' }} />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#E6E6FA]/40 backdrop-blur-md rounded-full border border-white/80 text-indigo-500 font-bold text-sm shadow-sm">
              <Sparkles size={16} />
              <span>Dreamy Analytics</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-slate-700 leading-none tracking-tight">
              Soft <br /> <span className="text-[#FFB6C1]">Visions.</span>
            </h1>
            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-sm">
              Beautifully rounded cloud-like interfaces designed for calm data processing and visualization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-10 py-4 bg-[#FFB6C1] text-white rounded-full font-bold text-lg shadow-xl shadow-[#FFB6C1]/20 hover:scale-105 active:scale-95 transition-all">
                Let{"'"}s Start
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-md border border-white/80 p-8 rounded-[2.5rem] shadow-xl space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Flow Rating</span>
                <span className="text-xs text-[#FFB6C1] font-black">9.2/10</span>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-extrabold text-slate-700">Stable Flow</div>
                <div className="h-6 w-full bg-[#E6E6FA]/30 border border-white rounded-full overflow-hidden p-1 shadow-inner">
                  <div className="h-full bg-[#FFB6C1] rounded-full" style={{ width: '82%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 19: LiquidMotion (Liquid motion, gradientes fluidos orgánicos)
  LiquidMotion: () => (
    <div className="w-full min-h-screen bg-[#0a0518] text-white py-24 px-8 font-sans relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#9400D3] via-[#FF007F] to-[#00FFFF] rounded-full blur-[180px] opacity-25 animate-pulse" />
      
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <header className="border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-gradient-to-r from-[#FF007F] to-[#00FFFF] rounded-full text-xs font-bold uppercase tracking-wider">
              LIQUID_STREAM
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white leading-none">
              Dynamic console
            </h1>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-white text-black font-extrabold rounded-full hover:bg-[#00FFFF] hover:text-black transition-colors uppercase text-sm shadow-2xl">
              Initiate Stream
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] space-y-6 hover:border-[#FF007F]/40 transition-colors">
            <div className="text-xs uppercase tracking-wider text-slate-400 flex justify-between items-center">
              <span>Dynamic Uptime</span>
              <Activity size={16} className="text-[#00FFFF] animate-ping" />
            </div>
            <div className="text-5xl font-black text-white">99.98%</div>
            <p className="text-xs text-slate-400">Continuous operation with absolute system fluidness.</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] space-y-6 hover:border-[#00FFFF]/40 transition-colors">
            <div className="text-xs uppercase tracking-wider text-slate-400">Total Stream Flow</div>
            <div className="text-5xl font-black text-white">2.8 GB/S</div>
            <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#FF007F] to-[#00FFFF]" style={{ width: '74%' }} />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] space-y-6 hover:border-[#9400D3]/40 transition-colors">
            <div className="text-xs uppercase tracking-wider text-slate-400">Network Security</div>
            <div className="text-3xl font-black text-white">CERTIFIED</div>
            <div className="flex gap-2">
              <span className="text-[10px] px-3 py-1 bg-white/10 rounded-full border border-white/10 font-bold uppercase tracking-wider">SSL</span>
              <span className="text-[10px] px-3 py-1 bg-[#00FFFF]/10 rounded-full border border-[#00FFFF]/20 text-[#00FFFF] font-bold uppercase tracking-wider">TLS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 20: HyperPop (HyperPop, colores ácidos contrastados, tipografía ultra-negra)
  HyperPop: () => (
    <div className="w-full min-h-screen bg-[#390099] text-white py-24 px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-16 relative">
        <header className="bg-[#FF0054] border-[6px] border-black rounded-3xl p-8 shadow-[12px_12px_0px_#FFBD00] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-[#FFBD00] text-black border-[3px] border-black rounded-full text-xs font-black uppercase tracking-wider">
              HYPER_DASH_v9.9
            </span>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              High Energy <span className="text-[#FFBD00]">Console</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-[#FFBD00] hover:bg-white text-black font-black border-[4px] border-black rounded-2xl shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_#000] transition-all uppercase">
              Action!
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#FFBD00] border-[5px] border-black rounded-3xl p-8 shadow-[10px_10px_0px_#000] space-y-6 text-black">
            <div className="text-xs font-black uppercase tracking-widest text-black/50">Core Frequency</div>
            <div className="text-5xl font-black">9.8 GHz</div>
            <div className="h-6 w-full bg-white border-[4px] border-black rounded-full overflow-hidden">
              <div className="h-full bg-[#FF0054] border-r-[4px] border-black" style={{ width: '85%' }} />
            </div>
          </div>

          <div className="bg-[#4EA8DE] border-[5px] border-black rounded-3xl p-8 shadow-[10px_10px_0px_#000] space-y-6 text-black">
            <div className="text-xs font-black uppercase tracking-widest text-black/50">Active Threads</div>
            <div className="text-5xl font-black text-white" style={{ textShadow: '2px 2px #000' }}>128k Live</div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-white border-[2px] border-black rounded-full text-xs font-bold">THREAD_A</span>
              <span className="px-3 py-1 bg-[#FFBD00] border-[2px] border-black rounded-full text-xs font-bold">THREAD_B</span>
            </div>
          </div>

          <div className="bg-white border-[5px] border-black rounded-3xl p-8 shadow-[10px_10px_0px_#FF0054] space-y-6 flex flex-col justify-between text-black">
            <div className="text-xs font-black uppercase tracking-widest text-black/40">Throughput Status</div>
            <div className="text-5xl font-black text-slate-900">100%</div>
            <div className="h-4 w-full bg-slate-100 border-[3px] border-black rounded-full overflow-hidden">
              <div className="h-full bg-[#FFBD00] border-r-[3px] border-black" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

