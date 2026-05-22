"use client";

import React from 'react';
import { 
  Leaf, 
  Wind, 
  Sun, 
  CloudRain, 
  Trees, 
  Mountain, 
  Zap, 
  Droplets, 
  Globe, 
  ChevronRight,
  ShieldCheck,
  Activity,
  ArrowUpRight,
  Home,
  Compass,
  ZapOff,
  Droplet,
  Waves,
  Recycle,
  Sprout,
  Binoculars,
  Activity as ActivityIcon,
  Shield,
  Clock,
  Link2,
  Move
} from 'lucide-react';

export const EcoCitiesHero = {
  // 1. Vertical_Forest: High-rise buildings covered in greenery
  Vertical_Forest: () => (
    <div className="w-full min-h-screen bg-[#F0F4F0] text-[#1B4332] p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#40916c_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,#95d5b2_0%,transparent_50%)]" />
       </div>
       
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
             <div className="inline-flex items-center gap-3 px-4 py-1 bg-[#40916c]/10 border border-[#40916c]/20 rounded-full text-[#40916c] text-[10px] font-black uppercase tracking-[0.5em] italic">
                <Trees size={14} className="animate-bounce" />
                <span>Sustainable_Living_v18</span>
             </div>
             <h1 className="text-7xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">
                VERTICAL <br /> <span className="text-[#40916c]">FOREST.</span>
             </h1>
             <p className="text-2xl text-[#2D6A4F]/60 font-medium italic max-w-lg leading-relaxed">
                Breathing life back into the urban jungle. Architectures that synthesize carbon and produce pure oxygen.
             </p>
             <div className="flex flex-wrap gap-6">
                <button className="px-12 py-6 bg-[#1B4332] text-white font-black uppercase italic rounded-2xl hover:bg-[#40916c] transition-all shadow-2xl shadow-[#1B4332]/20 group">
                   [ DISCOVER_PROJECT ] <ChevronRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
             </div>
          </div>

          <div className="relative aspect-[4/5] bg-white border border-[#D8E2DC] rounded-[4rem] p-12 flex flex-col justify-between group overflow-hidden shadow-xl">
             <div className="flex justify-between items-start">
                <div className="space-y-2">
                   <div className="text-[10px] font-black uppercase tracking-widest text-[#40916c]">Oxygen_Production</div>
                   <div className="text-4xl font-black italic">+240%</div>
                </div>
                <Leaf size={32} className="text-[#40916c] animate-pulse" />
             </div>

             <div className="flex-1 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                   <Mountain size={300} />
                </div>
                <div className="relative z-10 space-y-4 text-center">
                   <div className="w-48 h-1 bg-[#1B4332]" />
                   <div className="text-6xl font-black italic uppercase tracking-tighter">URBAN <br /> OASIS</div>
                   <div className="w-48 h-1 bg-[#1B4332] ml-auto" />
                </div>
             </div>

             <div className="bg-[#F0F4F0] border border-[#D8E2DC] p-6 rounded-3xl flex justify-between items-center">
                <div className="text-xs font-black uppercase tracking-widest text-[#2D6A4F] italic">Location: Singapore_Node_18</div>
                <div className="flex gap-2">
                   <div className="w-2 h-2 bg-[#40916c] rounded-full animate-pulse" />
                   <div className="w-2 h-2 bg-[#40916c] rounded-full animate-pulse [animation-delay:0.2s]" />
                </div>
             </div>
          </div>
       </div>
    </div>
  ),

  // 2. Solar_Pavilion: Clean energy focus
  Solar_Pavilion: () => (
    <div className="w-full min-h-screen bg-[#FFFDF5] text-[#333] p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-12">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[1em] text-[#EAB308]">Energy_Harvesting_v18</div>
                <h1 className="text-8xl lg:text-[14rem] font-black leading-[0.7] tracking-tighter uppercase italic">
                   SOLAR <br /> <span className="text-[#FDE047]">PEAK.</span>
                </h1>
             </div>
             <p className="text-3xl font-black italic uppercase leading-tight text-zinc-400 max-w-2xl">
                Powering the future through high-efficiency aesthetic integration. Every surface is a battery.
             </p>
             <div className="flex gap-8">
                <button className="px-16 py-8 bg-black text-white font-black text-2xl uppercase italic hover:bg-[#EAB308] transition-all">
                   [ VIEW_METRICS ]
                </button>
             </div>
          </div>

          <div className="lg:col-span-5 aspect-square bg-white border-[16px] border-black p-12 flex flex-col justify-between shadow-[40px_40px_0px_#EAB308] group cursor-pointer">
             <div className="flex justify-between items-start border-b-4 border-black pb-8">
                <div className="text-4xl font-black italic">KW/H_SYNC</div>
                <Sun size={40} className="group-hover:rotate-180 transition-transform duration-1000 text-[#EAB308]" />
             </div>
             
             <div className="flex-1 flex items-center justify-center">
                <Zap size={120} className="text-black group-hover:scale-150 transition-transform duration-500" />
             </div>

             <div className="pt-8 text-center border-t-4 border-black">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 italic">Self_Sustaining_Node_Active</div>
             </div>
          </div>
       </div>
    </div>
  ),

  // 3. Rain_Harvest: Water management and hydro-architecture
  Rain_Harvest: () => (
    <div className="w-full min-h-screen bg-[#0F172A] text-white p-8 md:p-16 relative overflow-hidden flex items-center justify-center font-mono">
       <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(transparent_0%,rgba(56,189,248,0.2)_100%)] bg-[size:100%_4px] animate-pulse" />
       </div>

       <div className="max-w-6xl w-full text-center space-y-16 relative z-10">
          <div className="relative inline-block">
             <div className="absolute inset-0 bg-sky-500 blur-[100px] opacity-20 animate-pulse" />
             <div className="relative z-10 w-64 h-64 border-2 border-sky-500/20 rounded-full bg-slate-900/50 flex items-center justify-center group hover:scale-110 transition-transform duration-1000">
                <CloudRain size={100} className="text-sky-400 group-hover:translate-y-4 transition-transform" />
             </div>
          </div>

          <div className="space-y-6">
             <div className="text-xs font-black uppercase tracking-[1em] text-sky-400 italic">Hydro_Cycle_Management_v18</div>
             <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic italic">AQUA_SYS.</h1>
             <p className="text-2xl text-slate-400 font-medium italic max-w-2xl mx-auto leading-relaxed">
                Collecting, filtering, and redistributing every drop. A circular approach to urban hydration.
             </p>
          </div>

          <div className="pt-12 flex justify-center gap-6">
             <button className="px-12 py-5 border-2 border-sky-500 text-sky-400 font-black uppercase italic hover:bg-sky-500 hover:text-white transition-all">
                [ WATER_LEVELS ]
             </button>
          </div>
       </div>
    </div>
  ),

  // 4. Bio_Dome: Protected ecosystems
  Bio_Dome: () => (
    <div className="w-full min-h-screen bg-emerald-950 text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div className="space-y-12">
             <div className="text-xs font-black uppercase tracking-[0.5em] text-emerald-400 italic">Climate_Controlled_v18</div>
             <h1 className="text-7xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none">BIOSPHERE <br /> <span className="text-white/20">ALPHA.</span></h1>
             <div className="h-2 w-48 bg-emerald-500" />
             <p className="text-2xl text-emerald-100/40 italic font-medium leading-relaxed">
                Self-contained micro-climates designed for biodiversity resilience in extreme environments.
             </p>
             <div className="flex gap-4">
                <button className="px-12 py-5 bg-white text-emerald-950 font-black uppercase italic rounded-full hover:bg-emerald-400 transition-all">
                   [ ENTER_DOME ]
                </button>
             </div>
          </div>

          <div className="relative aspect-square">
             <div className="absolute inset-0 border-[40px] border-white/5 rounded-full animate-spin-slow" />
             <div className="absolute inset-8 border-[2px] border-emerald-400/20 rounded-full flex items-center justify-center">
                <Globe size={200} className="text-emerald-400 opacity-20 animate-pulse" />
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <ShieldCheck size={80} className="text-white drop-shadow-[0_0_30px_#10b981]" />
             </div>
          </div>
       </div>
    </div>
  ),

  // 5. Smart_Grid: Efficient energy distribution
  Smart_Grid: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-mono">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
          <div className="lg:col-span-8 space-y-12 bg-zinc-900/50 border border-white/5 p-16 rounded-[3rem] backdrop-blur-xl">
             <div className="flex justify-between items-center">
                <div className="space-y-2">
                   <div className="text-xs font-black uppercase tracking-widest text-emerald-500 italic">Grid_Optimizer_v18</div>
                   <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                      ENERGY <br /> <span className="text-emerald-400 italic">MATRIX.</span>
                   </h1>
                </div>
                <Activity size={48} className="text-emerald-500 animate-pulse" />
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-white/5 py-12">
                {['Input', 'Storage', 'Loss'].map(label => (
                  <div key={label} className="space-y-1">
                     <div className="text-4xl font-black italic">{label === 'Loss' ? '0.2%' : '98.5%'}</div>
                     <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500">{label}_Metrics</div>
                  </div>
                ))}
             </div>

             <button className="px-12 py-5 bg-emerald-600 text-black font-black uppercase italic rounded-2xl hover:bg-white transition-all">
                [ REBALANCE_GRID ]
             </button>
          </div>

          <div className="lg:col-span-4 bg-white text-black p-12 rounded-[3rem] flex flex-col justify-between shadow-2xl group cursor-pointer overflow-hidden">
             <div className="text-xs font-black uppercase tracking-widest">Efficiency_Rating</div>
             <div className="text-7xl font-black italic leading-none text-emerald-600">A+++</div>
             <p className="text-sm font-bold uppercase italic opacity-40">Zero_Carbon_Protocol_Active</p>
             <ArrowUpRight size={64} className="self-end group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform" />
          </div>
       </div>
    </div>
  ),

  // 6. Wind_Towers: Aerodynamic skyscrapers
  Wind_Towers: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black animate-[slide_4s_linear_infinite]" />
          <div className="absolute top-1/3 left-0 w-full h-[2px] bg-black animate-[slide_6s_linear_infinite]" />
          <div className="absolute top-2/3 left-0 w-full h-[2px] bg-black animate-[slide_3s_linear_infinite]" />
       </div>

       <div className="max-w-6xl w-full flex flex-col items-center space-y-16 relative z-10 text-center">
          <div className="space-y-4">
             <div className="text-xs font-black uppercase tracking-[1.5em] text-zinc-400">Aeolian_Architecture_v18</div>
             <h1 className="text-8xl lg:text-[16rem] font-black leading-[0.7] tracking-tighter uppercase italic">
                WIND <br /> <span className="text-zinc-200">KINETIC.</span>
             </h1>
          </div>

          <div className="relative">
             <Wind size={200} className="text-zinc-100 animate-pulse" />
             <div className="absolute inset-0 flex items-center justify-center">
                <button className="px-12 py-5 bg-black text-white font-black uppercase italic hover:scale-110 transition-all">
                   [ HARNESS_WIND ]
                </button>
             </div>
          </div>

          <p className="text-2xl text-zinc-400 font-medium italic max-w-2xl uppercase tracking-widest">
             Towers designed by the flow of air. Turning drag into power.
          </p>
       </div>
    </div>
  ),

  // 7. Mycelium_Build: Bio-fabricated materials
  Mycelium_Build: () => (
    <div className="w-full min-h-screen bg-[#121212] text-white p-8 md:p-16 relative overflow-hidden flex items-center justify-center font-mono">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative aspect-square bg-[#1a1a1a] rounded-[4rem] border border-white/5 flex items-center justify-center group overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#4ade80_0%,transparent_70%)] group-hover:opacity-40 transition-opacity" />
             <div className="w-64 h-64 border-4 border-emerald-500/20 rounded-3xl rotate-45 animate-pulse" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                   <div className="text-4xl font-black italic">BIO_MAT</div>
                   <div className="text-[10px] uppercase font-black tracking-widest text-emerald-500">Self_Healing_v18</div>
                </div>
             </div>
          </div>

          <div className="space-y-12">
             <div className="h-1 w-24 bg-emerald-500" />
             <h1 className="text-7xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none">ROOTED <br /> <span className="text-white/20">SYSTEMS.</span></h1>
             <p className="text-2xl text-zinc-500 italic font-medium leading-relaxed">
                Buildings grown from fungi networks. Carbon-negative construction for a regenerative future.
             </p>
             <button className="px-12 py-6 border-2 border-white text-white font-black uppercase italic hover:bg-emerald-500 hover:border-emerald-500 transition-all">
                [ ANALYZE_STRUCTURE ]
             </button>
          </div>
       </div>
    </div>
  ),

  // 8. Urban_Agri: Food production in the city
  Urban_Agri: () => (
    <div className="w-full min-h-screen bg-[#FDFDFD] text-black p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-7xl w-full flex flex-col items-center space-y-20 relative z-10">
          <div className="w-full flex flex-col lg:flex-row justify-between items-end gap-12 border-b-8 border-black pb-16">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-zinc-400 italic">Hydroponic_Systems_v18</div>
                <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic text-emerald-600">FOOD_HUB.</h1>
             </div>
             <div className="text-right">
                <div className="text-4xl font-black italic">100%_LOCAL</div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Zero_Food_Miles</div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
             {['Vertical_Farm', 'Rooftop_Hive', 'Aquaponics'].map(label => (
               <div key={label} className="p-12 bg-zinc-50 border border-zinc-100 rounded-[3rem] hover:bg-emerald-50 transition-all group cursor-pointer">
                  <div className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-8 group-hover:text-emerald-600 transition-colors">Unit_0{label.length}</div>
                  <h3 className="text-4xl font-black italic uppercase leading-none mb-4">{label.replace('_', ' ')}</h3>
                  <div className="h-1 w-12 bg-black group-hover:w-full transition-all duration-500" />
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 9. Eco_Transit: Sustainable mobility
  Eco_Transit: () => (
    <div className="w-full min-h-screen bg-zinc-950 text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
       
       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-emerald-400 italic">Mobility_Solutions_v18</div>
                <h1 className="text-7xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none">ZERO <br /> <span className="text-white/20">EMISSION.</span></h1>
             </div>
             <p className="text-2xl text-zinc-500 italic font-medium leading-relaxed max-w-lg">
                Seamless, carbon-free transportation networks powered by the city{"'"}s own energy grid.
             </p>
             <button className="px-12 py-5 bg-white text-black font-black uppercase italic rounded-full hover:bg-emerald-500 transition-all">
                [ ROUTE_PLANNER ]
             </button>
          </div>

          <div className="relative aspect-video bg-white/5 border border-white/10 rounded-[3rem] p-12 flex items-center justify-center group overflow-hidden">
             <Compass size={120} className="text-emerald-500 group-hover:rotate-180 transition-transform duration-1000" />
             <div className="absolute bottom-12 right-12 text-[10px] font-black uppercase tracking-widest text-zinc-500">Syncing_Nodes...</div>
          </div>
       </div>
    </div>
  ),

  // 10. Net_Zero_Home: The future of residential living
  Net_Zero_Home: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-16 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-5xl w-full text-center space-y-16 relative z-10">
          <div className="space-y-4">
             <div className="text-xs font-black uppercase tracking-[1em] text-zinc-400 italic">Residential_Efficiency_v18</div>
             <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic italic">LIVING_0.</h1>
          </div>

          <div className="relative inline-block">
             <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full animate-pulse" />
             <div className="relative z-10 w-48 h-48 lg:w-72 lg:h-72 bg-zinc-50 border-8 border-black rounded-[4rem] flex items-center justify-center group hover:rotate-6 transition-transform">
                <Home size={100} className="text-black" />
             </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full pt-12">
             {['Solar', 'Geo', 'Insul', 'Recycle'].map(tag => (
               <div key={tag} className="text-center space-y-2">
                  <div className="text-3xl font-black italic">100%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{tag}_Opt</div>
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 11. Carbon_Capture: Industrial-aesthetic air purification
  Carbon_Capture: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-mono">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
             <div className="text-xs font-black uppercase tracking-[1em] text-emerald-500 italic">Atmospheric_Purification_v18</div>
             <h1 className="text-7xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">
                CARBON <br /> <span className="text-zinc-500">NEG.</span>
             </h1>
             <p className="text-2xl text-white/40 font-medium italic max-w-lg leading-relaxed">
                Direct air capture technology integrated into urban infrastructure. Turning emissions into building blocks.
             </p>
             <button className="px-12 py-6 bg-emerald-600 text-black font-black uppercase italic rounded-2xl hover:bg-white transition-all">
                [ START_CAPTURE ]
             </button>
          </div>

          <div className="relative aspect-square bg-zinc-900 border border-white/5 rounded-[4rem] flex items-center justify-center group">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
             <ZapOff size={160} className="text-zinc-700 group-hover:text-emerald-500 transition-all duration-1000 group-hover:rotate-12" />
             <div className="absolute bottom-12 left-12 right-12 h-1 bg-white/5 overflow-hidden">
                <div className="h-full bg-emerald-500 w-2/3 animate-[slide_3s_linear_infinite]" />
             </div>
          </div>
       </div>
    </div>
  ),

  // 12. Hydro_Tower: Water-centric skyscraper
  Hydro_Tower: () => (
    <div className="w-full min-h-screen bg-sky-50 text-sky-950 p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-8 space-y-12">
             <div className="h-24 w-1 bg-sky-500" />
             <h1 className="text-8xl lg:text-[16rem] font-black leading-[0.7] tracking-tighter uppercase italic">HYDRO_ <br /> <span className="text-sky-200">SPACE.</span></h1>
             <p className="text-4xl font-black italic uppercase tracking-tighter max-w-2xl leading-none">
                Architecture that flows. Integrated desalination and vertical irrigation.
             </p>
          </div>
          
          <div className="lg:col-span-4 aspect-[3/4] bg-sky-600 flex flex-col justify-between p-12 group cursor-pointer shadow-[30px_30px_0px_#0ea5e9]">
             <Droplet size={80} className="text-white group-hover:scale-125 transition-transform duration-500" />
             <div className="space-y-4">
                <div className="text-6xl font-black italic">98%</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-sky-200">Recycling_Efficiency</div>
             </div>
          </div>
       </div>
    </div>
  ),

  // 13. Green_Roof: Urban farming and cooling
  Green_Roof: () => (
    <div className="w-full min-h-screen bg-[#FDFDFD] text-black p-8 md:p-16 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-6xl w-full flex flex-col items-center space-y-16 relative z-10 text-center">
          <div className="relative inline-block group">
             <div className="absolute -inset-8 bg-emerald-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
             <Waves size={160} className="text-emerald-500 animate-pulse relative z-10" />
          </div>

          <div className="space-y-6">
             <h1 className="text-7xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none">ROOFTOP <br /> <span className="text-zinc-200">ALIVE.</span></h1>
             <p className="text-2xl text-zinc-400 font-medium italic max-w-2xl mx-auto uppercase tracking-[0.2em]">
                Lowering city temperatures through pervasive top-layer vegetation.
             </p>
          </div>

          <div className="flex gap-4">
             {['Albedo', 'Temp', 'Bio'].map(stat => (
               <div key={stat} className="px-8 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-xs font-black italic uppercase">
                  {stat}: -12°C
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 14. Thermal_Vault: Underground energy storage
  Thermal_Vault: () => (
    <div className="w-full min-h-screen bg-zinc-950 text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-mono">
       <div className="max-w-4xl w-full text-center space-y-16 relative z-10">
          <div className="relative inline-block">
             <div className="absolute inset-0 bg-orange-500/20 blur-[100px] animate-pulse" />
             <div className="relative z-10 w-48 h-48 lg:w-72 lg:h-72 border-4 border-orange-500 rounded-[3rem] flex items-center justify-center group hover:scale-105 transition-transform">
                <Zap size={100} className="text-orange-500" />
             </div>
          </div>

          <div className="space-y-4">
             <div className="text-xs font-black uppercase tracking-[1em] text-orange-500 italic">Geothermal_Exchange_v18</div>
             <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic italic">THERMAL.</h1>
             <p className="text-2xl text-zinc-500 font-medium italic max-w-2xl mx-auto leading-relaxed">
                Utilizing the earth{"'"}s constant temperature for high-efficiency urban heating and cooling.
             </p>
          </div>

          <button className="px-16 py-6 bg-orange-600 text-black font-black uppercase italic rounded-full hover:bg-white transition-all">
             [ SYNC_VAULT ]
          </button>
       </div>
    </div>
  ),

  // 15. Circular_Loop: Waste-to-resource cycle
  Circular_Loop: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative aspect-square flex items-center justify-center">
             <Recycle size={300} className="text-emerald-100 animate-spin-slow" />
             <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-8xl lg:text-[12rem] font-black italic tracking-tighter uppercase italic text-emerald-600">LOOP.</h1>
             </div>
          </div>

          <div className="space-y-12">
             <div className="h-1 w-24 bg-black" />
             <h1 className="text-7xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none">ZERO <br /> <span className="text-zinc-300">WASTE.</span></h1>
             <p className="text-2xl text-zinc-500 italic font-medium leading-relaxed">
                A closed-loop urban ecosystem where every output becomes a valuable input. No landfills, only resources.
             </p>
             <div className="flex gap-4">
                <button className="px-12 py-5 bg-black text-white font-black uppercase italic rounded-2xl hover:bg-emerald-600 transition-all">
                   [ OPTIMIZE_CYCLE ]
                </button>
             </div>
          </div>
       </div>
    </div>
  ),

  // 16. Biodiversity_Hub: Protecting local species
  Biodiversity_Hub: () => (
    <div className="w-full min-h-screen bg-emerald-950 text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-sans">
       <div className="max-w-6xl w-full text-center space-y-16 relative z-10">
          <div className="space-y-4">
             <div className="text-xs font-black uppercase tracking-[1em] text-emerald-400 italic">Species_Protection_v18</div>
             <h1 className="text-8xl lg:text-[14rem] font-black leading-[0.7] tracking-tighter uppercase italic italic">GAIA_HUB.</h1>
          </div>

          <div className="grid grid-cols-3 gap-8">
             {['Avian', 'Insect', 'Flora'].map(type => (
               <div key={type} className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-emerald-500 hover:text-black transition-all cursor-pointer">
                  <Sprout size={40} className="mb-4 opacity-40 group-hover:opacity-100" />
                  <div className="text-2xl font-black italic uppercase">{type}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest mt-2 opacity-40">Healthy_State</div>
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 17. Permaculture_Park: Regenerative public spaces
  Permaculture_Park: () => (
    <div className="w-full min-h-screen bg-[#F0F4F0] text-[#1B4332] p-8 md:p-16 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative z-10">
          <div className="lg:col-span-8 space-y-12">
             <div className="text-xs font-black uppercase tracking-widest text-[#40916c] italic">Social_Ecology_v18</div>
             <h1 className="text-8xl lg:text-[16rem] font-black leading-[0.7] tracking-tighter uppercase italic">PARK_ <br /> <span className="text-zinc-200">LIFE.</span></h1>
             <p className="text-4xl font-black italic uppercase tracking-tighter max-w-2xl">
                Parks that feed, heal, and connect. Designing for human and planetary health.
             </p>
          </div>
          
          <div className="lg:col-span-4 aspect-square bg-[#1B4332] flex items-center justify-center group cursor-pointer shadow-[20px_20px_0px_#40916c]">
             <Binoculars size={120} className="text-white group-hover:scale-150 transition-transform duration-1000" />
          </div>
       </div>
    </div>
  ),

  // 18. Zero_Waste_Node: Decentralized processing
  Zero_Waste_Node: () => (
    <div className="w-full min-h-screen bg-[#050505] text-emerald-400 p-8 md:p-16 relative overflow-hidden flex items-center justify-center font-mono">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
             <div className="inline-flex items-center gap-4 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest italic animate-pulse">
                <ActivityIcon size={14} />
                <span>Node_Status: ACTIVE</span>
             </div>
             <h1 className="text-7xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">RE <br /> <span className="text-white">SOURCE.</span></h1>
             <div className="flex gap-6 pt-8">
                {['Plastic', 'Metal', 'Organic'].map(n => (
                  <button key={n} className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-black italic uppercase hover:border-emerald-500 hover:bg-emerald-500/10 transition-all">
                     {n}
                  </button>
                ))}
             </div>
          </div>

          <div className="relative aspect-square bg-emerald-500/5 rounded-[4rem] border-2 border-emerald-500/20 flex items-center justify-center group">
             <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
             <Recycle size={240} className="text-emerald-500/20 group-hover:text-emerald-500 transition-all duration-1000 group-hover:scale-110" />
          </div>
       </div>
    </div>
  ),

  // 19. Active_Façade: Buildings that react to climate
  Active_Façade: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-sans">
       <div className="max-w-6xl w-full space-y-24 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-b-8 border-black pb-16">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-zinc-400">Reactive_Skin_v18</div>
                <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic italic">FAÇADE.</h1>
             </div>
             <div className="text-right space-y-4">
                <div className="text-4xl font-black italic">CLIMATE_SYNC</div>
                <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 italic">Adapting_to_Sunlight...</div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {Array.from({ length: 4 }).map((_, i) => (
               <div key={i} className="h-64 bg-zinc-50 rounded-3xl border border-black/5 p-8 flex flex-col justify-between group hover:bg-black hover:text-white transition-all cursor-pointer overflow-hidden relative">
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">Panel_0{i+1}</div>
                  <Sun size={48} className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl font-black italic uppercase leading-tight">SOLAR <br /> TRACK.</div>
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 20. Gaia_Network: Global city connectivity
  Gaia_Network: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div className="space-y-16">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[1em] text-emerald-500 italic">Project_Complete_v18</div>
                <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.7] tracking-tighter uppercase italic italic">GAIA_NET.</h1>
             </div>
             <p className="text-3xl font-black italic uppercase leading-tight text-zinc-500">
                The nervous system of a sustainable planet. Every city connected, every resource shared.
             </p>
             <div className="flex gap-8">
                <button className="px-16 py-8 bg-emerald-600 text-black font-black text-2xl uppercase italic hover:scale-105 transition-all">
                   [ RESET_NETWORK ]
                </button>
             </div>
          </div>

          <div className="relative aspect-square flex items-center justify-center">
             <div className="w-full h-full border-[20px] border-white/5 rounded-full" />
             <div className="absolute inset-0 flex items-center justify-center">
                <Globe size={160} className="text-emerald-500 animate-pulse" />
             </div>
          </div>
       </div>
       <div className="absolute top-12 right-12 text-[10px] font-black uppercase tracking-widest text-zinc-300 italic">Design_18_Final_Variant</div>
    </div>
  )
};
