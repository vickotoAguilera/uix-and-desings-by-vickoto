"use client";

import React, { useState, useEffect } from 'react';
import { 
  Atom, 
  Orbit, 
  Zap, 
  Layers, 
  Cpu, 
  Globe, 
  Maximize2, 
  Sparkles,
  RefreshCw,
  Box,
  Share2,
  ChevronRight,
  Clock,
  Link2,
  Dna,
  Waves,
  Grid3X3,
  Move,
  Target,
  Infinity,
  CheckCircle2,
  Shield
} from 'lucide-react';

export const QuantumEvolutionHero = {
  // 1. Quantum_Superposition: A hero that appears in two states at once
  Quantum_Superposition: () => (
    <div className="w-full min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center font-sans">
      <div className="absolute inset-0 opacity-20">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#3b82f6_0%,transparent_50%)] animate-pulse" />
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,#8b5cf6_0%,transparent_50%)] animate-pulse [animation-delay:1s]" />
      </div>

      <div className="max-w-6xl w-full px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        <div className="space-y-12">
           <div className="inline-flex items-center gap-3 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.5em] italic text-blue-400">
              <Atom size={14} className="animate-spin-slow" />
              <span>Quantum_State_Alpha_v16</span>
           </div>
           <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic relative">
              <span className="absolute inset-0 text-transparent stroke-white stroke-1 opacity-20 blur-sm translate-x-2 translate-y-2">QUANTUM</span>
              QUANTUM <br /> <span className="text-blue-500">EVO.</span>
           </h1>
           <p className="text-2xl text-white/40 font-medium italic leading-relaxed max-w-lg">
              Redefining existence through multi-state probability UI. Where every interaction collapses the multiverse.
           </p>
           <div className="flex flex-wrap gap-6">
              <button className="px-12 py-6 bg-blue-600 text-white font-black uppercase italic rounded-2xl hover:bg-white hover:text-black transition-all shadow-2xl shadow-blue-600/20 group">
                 [ COLLAPSE_PROBABILITY ] <ChevronRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
           </div>
        </div>

        <div className="relative aspect-square flex items-center justify-center">
           <div className="w-full h-full rounded-full border border-white/5 absolute animate-spin-slow" />
           <div className="w-4/5 h-4/5 rounded-full border border-blue-500/20 absolute animate-reverse-spin-slow" />
           <div className="relative z-10 scale-150">
              <Orbit size={160} className="text-blue-500 animate-pulse" />
           </div>
        </div>
      </div>
    </div>
  ),

  // 2. Multiverse_Grid: A grid that shifts between dimensions
  Multiverse_Grid: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-mono">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-16">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[0.8em] text-zinc-500 italic">Timeline_Selector_v16</div>
                <h2 className="text-7xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none italic">MULTIVERSE <br /> <span className="text-white/20">INTERFACE.</span></h2>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta'].map(t => (
                  <div key={t} className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl group hover:border-white transition-all cursor-crosshair">
                     <div className="text-[10px] font-black opacity-40 mb-4">{t}_Dimension</div>
                     <div className="h-1 w-12 bg-blue-500 group-hover:w-full transition-all duration-500" />
                  </div>
                ))}
             </div>
          </div>

          <div className="lg:col-span-5 h-[600px] bg-zinc-900 rounded-[4rem] border-4 border-white/5 overflow-hidden relative group">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
             <div className="absolute inset-0 flex items-center justify-center">
                <Box size={200} className="text-white/10 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-1000 rotate-12 group-hover:rotate-0" />
             </div>
             <div className="absolute bottom-12 left-12 right-12 p-8 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl">
                <div className="text-2xl font-black italic uppercase">ACTIVE_CORE</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-blue-500 mt-2 animate-pulse">Synchronizing_Reality...</div>
             </div>
          </div>
       </div>
    </div>
  ),

  // 3. Singularity_Focus: Concentric rings leading to a core
  Singularity_Focus: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-6xl w-full text-center space-y-16 relative z-10">
          <div className="relative inline-block">
             {[1, 1.2, 1.4].map((s, i) => (
               <div 
                key={i} 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black/5" 
                style={{ width: `${s * 300}px`, height: `${s * 300}px` }} 
               />
             ))}
             <div className="relative w-64 h-64 bg-black rounded-full flex items-center justify-center text-white shadow-[0_0_100px_rgba(0,0,0,0.2)]">
                <Maximize2 size={80} className="animate-pulse" />
             </div>
          </div>

          <div className="space-y-8">
             <h1 className="text-8xl lg:text-[14rem] font-black leading-[0.7] tracking-tighter uppercase italic italic">SINGULARITY.</h1>
             <p className="text-3xl text-zinc-400 font-bold uppercase tracking-widest italic max-w-2xl mx-auto">
                The point of no return for digital experiences. One focus. One reality.
             </p>
          </div>

          <div className="pt-12 flex justify-center gap-8">
             <button className="px-16 py-8 bg-black text-white font-black text-2xl uppercase italic hover:bg-zinc-800 transition-all">
                [ ENTER_VOID ]
             </button>
          </div>
       </div>
    </div>
  ),

  // 4. Entropy_Breaker: Fragmented UI that reconstructs on hover
  Entropy_Breaker: () => (
    <div className="w-full min-h-screen bg-zinc-950 text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-mono">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div className="space-y-12">
             <div className="text-xs font-black uppercase tracking-[0.5em] text-rose-500 animate-pulse">Entropy_Warning_v16</div>
             <h1 className="text-7xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none">FRAGMENTED <br /> <span className="text-white/20">REALITY.</span></h1>
             <div className="h-2 w-48 bg-rose-600" />
             <p className="text-2xl text-white/40 italic font-medium leading-relaxed">
                Breaking the second law of thermodynamics through UI reconstruction. Order from chaos.
             </p>
          </div>

          <div className="grid grid-cols-4 gap-4 aspect-square">
             {Array.from({ length: 16 }).map((_, i) => (
               <div 
                key={i} 
                className="bg-white/5 border border-white/10 rounded-2xl transition-all duration-500 hover:scale-110 hover:bg-rose-600 hover:border-white cursor-none flex items-center justify-center group"
                style={{ transform: `rotate(${(i % 4) * 10}deg)` }}
               >
                  <Sparkles size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 5. Neural_Collapse: AI-driven visual orchestration
  Neural_Collapse: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
       
       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative aspect-square">
             <svg className="w-full h-full" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" className="animate-spin-slow" />
                <path d="M200,50 Q350,200 200,350 Q50,200 200,50" fill="none" stroke="#3b82f6" strokeWidth="2" className="animate-pulse" />
                <path d="M50,200 Q200,50 350,200 Q200,350 50,200" fill="none" stroke="#8b5cf6" strokeWidth="2" className="animate-pulse [animation-delay:1s]" />
             </svg>
             <div className="absolute inset-0 flex items-center justify-center">
                <Cpu size={100} className="text-blue-500 drop-shadow-[0_0_30px_#3b82f6]" />
             </div>
          </div>

          <div className="space-y-12">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-blue-400 italic">Neural_Orchestration_v16</div>
                <h1 className="text-7xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">THOUGHT <br /> <span className="text-white/20">STREAM.</span></h1>
             </div>
             <div className="flex gap-4">
                <button className="px-12 py-5 bg-white text-black font-black uppercase italic rounded-2xl hover:bg-blue-600 hover:text-white transition-all">
                   [ SYNC_NEURAL_LINK ]
                </button>
             </div>
             <div className="pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-500 italic">
                <span>Core_Activity: 98%</span>
                <span>Latency: 0.02ms</span>
             </div>
          </div>
       </div>
    </div>
  ),

  // 6. Event_Horizon: A hero that pulls everything to the center
  Event_Horizon: () => (
    <div className="w-full min-h-screen bg-[#020202] text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-sans">
       <div className="max-w-4xl w-full text-center space-y-12 relative z-10">
          <div className="space-y-4">
             <div className="text-xs font-black uppercase tracking-[1em] text-zinc-600 italic">Universal_Constant_v16</div>
             <h1 className="text-8xl lg:text-[16rem] font-black leading-[0.7] tracking-tighter uppercase italic italic">HORIZON.</h1>
          </div>
          
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
          
          <p className="text-2xl text-white/40 font-medium italic max-w-2xl mx-auto leading-relaxed">
             The boundary where space and time become one. Experience the final frontier of digital evolution.
          </p>

          <div className="pt-12 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full animate-pulse" />
             <button className="px-20 py-8 border-4 border-white text-white font-black text-3xl uppercase italic hover:bg-white hover:text-black transition-all relative z-10">
                [ CROSS_LIMIT ]
             </button>
          </div>
       </div>
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
    </div>
  ),

  // 7. Quantum_Teleportation: Fast, glitchy transitions
  Quantum_Teleportation: () => (
    <div className="w-full min-h-screen bg-zinc-950 text-white p-8 md:p-16 relative overflow-hidden flex items-center justify-center font-mono">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
             <div className="inline-flex items-center gap-4 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest italic">
                <RefreshCw size={14} className="animate-spin" />
                <span>Instant_Relocation_Active</span>
             </div>
             <h1 className="text-7xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">TELEPORT <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">SYSTEM.</span></h1>
             <div className="flex gap-6 pt-8">
                {['Node_A', 'Node_B', 'Node_C'].map(n => (
                  <button key={n} className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-black italic uppercase hover:border-emerald-500 hover:bg-emerald-500/10 transition-all">
                     {n}
                  </button>
                ))}
             </div>
          </div>

          <div className="relative aspect-square bg-emerald-500/5 rounded-[4rem] border-2 border-emerald-500/20 flex items-center justify-center group">
             <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
             <Globe size={240} className="text-emerald-500/20 group-hover:text-emerald-500 transition-all duration-1000 group-hover:scale-110" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-full bg-emerald-500/20 animate-[scan_2s_linear_infinite]" />
             </div>
          </div>
       </div>
    </div>
  ),

  // 8. Dimensional_Shift: UI that changes perspective
  Dimensional_Shift: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-sans">
       <div className="max-w-6xl w-full space-y-24 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-b-8 border-white pb-16">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-zinc-500">Perspective_Engine_v16</div>
                <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic italic">SHIFT_UI.</h1>
             </div>
             <div className="text-right space-y-4">
                <div className="text-4xl font-black italic">4D_SPACE</div>
                <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Coordinating_Coordinates...</div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {Array.from({ length: 4 }).map((_, i) => (
               <div key={i} className="h-64 bg-zinc-900 rounded-3xl border border-white/5 p-8 flex flex-col justify-between group hover:bg-white hover:text-black transition-all cursor-pointer overflow-hidden relative">
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">Layer_0{i+1}</div>
                  <Layers size={48} className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl font-black italic uppercase leading-tight">EXPLORE <br /> REALITY.</div>
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 9. Probability_Cloud: Floating particles forming titles
  Probability_Cloud: () => (
    <div className="w-full min-h-screen bg-[#080808] text-white p-8 md:p-16 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-5xl w-full text-center space-y-12 relative z-10">
          <div className="inline-block px-4 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-black uppercase tracking-widest italic animate-pulse">
             Probability_Density_Active
          </div>
          <h1 className="text-7xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white via-white/40 to-transparent">
             PROBABLE <br /> FUTURE.
          </h1>
          <p className="text-2xl text-white/20 font-medium italic max-w-2xl mx-auto leading-relaxed">
             Visualizing the infinite possibilities of your digital presence through stochastic visual orchestration.
          </p>
          <div className="pt-12 flex justify-center gap-6">
             <button className="px-12 py-5 bg-purple-600 text-white font-black uppercase italic rounded-2xl hover:scale-110 transition-all shadow-2xl shadow-purple-600/20">
                [ MANIFEST_NOW ]
             </button>
             <button className="px-12 py-5 border-2 border-white/10 text-white font-black uppercase italic rounded-2xl hover:border-white transition-all">
                [ SIMULATE ]
             </button>
          </div>
       </div>
       <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse" 
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }} 
            />
          ))}
       </div>
    </div>
  ),

  // 10. Reality_Sync: Two sides aligning
  Reality_Sync: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10 border-4 border-white/5 rounded-[4rem] overflow-hidden">
          <div className="p-24 bg-zinc-950 border-r-2 border-white/5 space-y-12 group hover:bg-blue-600 transition-all duration-700">
             <h2 className="text-7xl font-black italic tracking-tighter uppercase italic leading-none">VIRTUAL.</h2>
             <div className="flex gap-4">
                <Share2 size={32} className="opacity-20 group-hover:opacity-100 transition-opacity" />
             </div>
          </div>
          <div className="p-24 bg-white text-black space-y-12 group hover:bg-zinc-900 hover:text-white transition-all duration-700">
             <h2 className="text-7xl font-black italic tracking-tighter uppercase italic leading-none">PHYSICAL.</h2>
             <div className="flex gap-4">
                <RefreshCw size={32} className="opacity-20 group-hover:opacity-100 transition-opacity" />
             </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black rounded-full border-4 border-white flex items-center justify-center z-20">
             <Zap size={48} className="text-white animate-pulse" />
          </div>
       </div>
       <div className="mt-12 text-[10px] font-black uppercase tracking-[1em] text-zinc-500 italic">Reality_Synchronization_v16_Complete</div>
    </div>
  ),

  // 11. Spacetime_Fabric: Deep cosmic grid with curvature effects
  Spacetime_Fabric: () => (
    <div className="w-full min-h-screen bg-[#020205] text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(1000px)_rotateX(60deg)_translateY(-100px)] animate-[pulse_4s_infinite]" />
       </div>
       
       <div className="max-w-6xl w-full text-center space-y-16 relative z-10">
          <div className="space-y-4">
             <div className="text-xs font-black uppercase tracking-[1.5em] text-blue-500 italic">Universal_Fabric_v16</div>
             <h1 className="text-8xl lg:text-[18rem] font-black leading-[0.7] tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-transparent">
                FABRIC.
             </h1>
          </div>
          <p className="text-2xl text-white/30 font-medium italic max-w-2xl mx-auto">
             Navigating the curvature of spacetime. Where geometry defines the flow of information.
          </p>
          <div className="pt-8">
             <button className="px-20 py-8 bg-white text-black font-black text-2xl uppercase italic hover:bg-blue-600 hover:text-white transition-all">
                [ WARP_DRIVE ]
             </button>
          </div>
       </div>
    </div>
  ),

  // 12. Observer_Effect: UI that changes when interaction occurs
  Observer_Effect: () => {
    const [isObserved, setIsObserved] = useState(false);
    return (
      <div 
        className="w-full min-h-screen bg-black text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-mono"
        onMouseEnter={() => setIsObserved(true)}
        onMouseLeave={() => setIsObserved(false)}
      >
         <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div className="space-y-12">
               <div className="text-xs font-black uppercase tracking-widest text-zinc-600 italic">Wave_Function_Status</div>
               <h1 className="text-7xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">
                  {isObserved ? "PARTICLE." : "WAVE_FORM."}
               </h1>
               <p className="text-xl text-white/40 italic leading-relaxed">
                  {isObserved 
                    ? "The act of measurement has collapsed the probability cloud into a singular reality." 
                    : "Existing in all possible states until the moment of observation."}
               </p>
               <div className="h-1 w-full bg-zinc-800 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-blue-500 transition-transform duration-1000 ${isObserved ? 'translate-x-0' : '-translate-x-full'}`} />
               </div>
            </div>

            <div className="relative aspect-square flex items-center justify-center">
               <div className={`w-full h-full border-2 transition-all duration-1000 ${isObserved ? 'rounded-2xl border-white rotate-0' : 'rounded-full border-white/10 rotate-180 scale-110'}`} />
               <Target size={120} className={`transition-all duration-1000 ${isObserved ? 'text-white scale-100 opacity-100' : 'text-blue-500 scale-150 opacity-20 blur-md'}`} />
            </div>
         </div>
      </div>
    );
  },

  // 13. Quantum_Entanglement: Mirroring interactions
  Quantum_Entanglement: () => (
    <div className="w-full min-h-screen bg-zinc-950 text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-2 gap-8 relative z-10">
          {[1, 2].map(i => (
            <div key={i} className="aspect-video bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 flex flex-col justify-between group hover:bg-blue-600/10 hover:border-blue-500 transition-all cursor-pointer">
               <div className="flex justify-between items-start">
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Particle_Node_0{i}</div>
                  <Link2 size={24} className="text-blue-500 animate-pulse" />
               </div>
               <div>
                  <h3 className="text-4xl lg:text-6xl font-black italic tracking-tighter uppercase italic group-hover:translate-x-4 transition-transform">ENTANGLED.</h3>
                  <div className="mt-4 text-[10px] font-black uppercase tracking-widest opacity-20">Spooky_Action_At_A_Distance</div>
               </div>
            </div>
          ))}
          <div className="col-span-2 text-center pt-12">
             <div className="inline-flex items-center gap-4 px-8 py-3 bg-blue-600 text-white font-black uppercase italic rounded-full text-sm">
                <Dna size={18} />
                <span>SYNC_STATE: 100%</span>
             </div>
          </div>
       </div>
       <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </div>
  ),

  // 14. Chronos_Engine: Time-bending visuals
  Chronos_Engine: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-mono">
       <div className="max-w-6xl w-full flex flex-col items-center space-y-16 relative z-10">
          <div className="relative">
             <Clock size={300} className="text-white/5 animate-[spin_60s_linear_infinite]" />
             <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-[12rem] lg:text-[24rem] font-black italic tracking-[ -0.1em] leading-none mix-blend-difference">TIME.</h1>
             </div>
          </div>
          
          <div className="grid grid-cols-3 gap-12 w-full">
             {['PAST', 'PRESENT', 'FUTURE'].map(t => (
               <div key={t} className="space-y-4 text-center">
                  <div className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 italic">{t}_COORDINATE</div>
                  <div className="h-px w-full bg-white/10" />
                  <div className="text-2xl font-black italic uppercase text-blue-500">{t === 'PRESENT' ? '00:00:00:00' : '--:--:--:--'}</div>
               </div>
             ))}
          </div>

          <button className="px-16 py-6 border-2 border-white text-white font-black uppercase italic hover:bg-white hover:text-black transition-all">
             [ BEND_CHRONOS ]
          </button>
       </div>
    </div>
  ),

  // 15. Dimension_Gate: Portal transition
  Dimension_Gate: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white flex items-center justify-center relative overflow-hidden font-sans">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
       
       <div className="max-w-5xl w-full text-center space-y-12 relative z-10">
          <div className="relative inline-block group cursor-pointer">
             <div className="absolute inset-0 bg-blue-500 blur-[80px] opacity-20 group-hover:opacity-60 transition-opacity" />
             <div className="w-80 h-80 lg:w-[32rem] lg:h-[32rem] border-8 border-white/10 rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-1000">
                <div className="w-4/5 h-4/5 border-4 border-blue-500/20 rounded-full animate-reverse-spin-slow" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Move size={100} className="text-white group-hover:rotate-90 transition-transform duration-1000" />
                </div>
             </div>
          </div>

          <div className="space-y-6">
             <h1 className="text-7xl lg:text-9xl font-black italic tracking-tighter uppercase italic leading-none">DIMENSION <br /> <span className="text-blue-500">GATEWAY.</span></h1>
             <p className="text-xl text-white/30 font-medium italic uppercase tracking-widest">Accessing_Level_05_Reality</p>
          </div>
       </div>
    </div>
  ),

  // 16. String_Theory: Vibrating strings
  String_Theory: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-mono">
       <div className="absolute inset-0 flex flex-col justify-between py-20 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[pulse_2s_infinite]" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
       </div>

       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
             <div className="text-xs font-black uppercase tracking-[1em] text-zinc-500 italic">Vibrational_Core_v16</div>
             <h1 className="text-8xl lg:text-[14rem] font-black leading-[0.7] tracking-tighter uppercase italic">STRINGS.</h1>
             <p className="text-2xl text-white/40 italic font-medium leading-relaxed">
                The fundamental vibration of the universe translated into digital syntax. 11 dimensions of code.
             </p>
          </div>

          <div className="relative aspect-square">
             <div className="absolute inset-0 flex items-center justify-center">
                <Waves size={300} className="text-blue-500 opacity-20 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Grid3X3 size={150} className="text-white rotate-45 animate-spin-slow" />
                </div>
             </div>
          </div>
       </div>
    </div>
  ),

  // 17. Void_Architect: Minimalist construction
  Void_Architect: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative z-10">
          <div className="lg:col-span-8 space-y-12">
             <div className="h-24 w-1 bg-black" />
             <h1 className="text-8xl lg:text-[16rem] font-black leading-[0.7] tracking-tighter uppercase italic">VOID_ <br /> <span className="text-zinc-200">SPACE.</span></h1>
             <p className="text-4xl font-black italic uppercase tracking-tighter max-w-2xl">
                Building within the nothingness. Architectural purity in a quantum vacuum.
             </p>
          </div>
          
          <div className="lg:col-span-4 aspect-square bg-black flex items-center justify-center group cursor-pointer">
             <Shield size={120} className="text-white group-hover:scale-150 transition-transform duration-1000" />
          </div>
       </div>
       <div className="absolute bottom-24 right-24 text-[10px] font-black uppercase tracking-[2em] text-black/20 italic">Architect_Signature_v16</div>
    </div>
  ),

  // 18. Nexus_Core: Central glowing hub
  Nexus_Core: () => (
    <div className="w-full min-h-screen bg-[#020202] text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full animate-pulse" />
       </div>

       <div className="max-w-6xl w-full text-center space-y-16 relative z-10">
          <div className="relative inline-block">
             <div className="absolute inset-0 bg-blue-500 blur-[50px] opacity-40 animate-pulse" />
             <div className="relative z-10 w-48 h-48 lg:w-72 lg:h-72 bg-black border-4 border-white rounded-[2rem] flex items-center justify-center rotate-45 group hover:rotate-90 transition-transform duration-1000">
                <Zap size={80} className="text-white -rotate-45" />
             </div>
          </div>

          <div className="space-y-4">
             <div className="text-xs font-black uppercase tracking-[1em] text-blue-500 italic">Central_Nexus_v16</div>
             <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic italic">NEXUS_CORE.</h1>
          </div>

          <div className="flex justify-center gap-12 pt-12">
             <div className="text-center">
                <div className="text-4xl font-black italic">1.21 GW</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Power_Input</div>
             </div>
             <div className="text-center">
                <div className="text-4xl font-black italic">99.9%</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Stability</div>
             </div>
          </div>
       </div>
    </div>
  ),

  // 19. Infinite_Loop: Recursive UI
  Infinite_Loop: () => (
    <div className="w-full min-h-screen bg-zinc-950 text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-mono">
       <div className="max-w-4xl w-full text-center space-y-16 relative z-10">
          <div className="relative inline-block">
             <Infinity size={240} className="text-white/5 animate-pulse" />
             <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-8xl lg:text-[14rem] font-black italic tracking-tighter uppercase italic leading-none">LOOP.</h1>
             </div>
          </div>

          <div className="space-y-8">
             <p className="text-2xl text-white/40 italic font-medium leading-relaxed max-w-2xl mx-auto">
                Recursive design patterns that transcend linear navigation. The beginning is the end.
             </p>
             <div className="flex flex-wrap justify-center gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase italic">Iter_0{i+1}</div>
                ))}
             </div>
          </div>
       </div>
    </div>
  ),

  // 20. Universal_Harmonic: Final stable state
  Universal_Harmonic: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div className="space-y-16">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[1em] text-zinc-400 italic">Evolution_Complete_v16</div>
                <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.7] tracking-tighter uppercase italic italic">HARMONIC.</h1>
             </div>
             <p className="text-3xl font-black italic uppercase leading-tight text-zinc-500">
                The perfect alignment of all quantum states. A definitive end to the digital multiverse.
             </p>
             <div className="flex gap-8">
                <button className="px-16 py-8 bg-black text-white font-black text-2xl uppercase italic hover:scale-105 transition-all">
                   [ RESET_REALITY ]
                </button>
             </div>
          </div>

          <div className="relative aspect-square flex items-center justify-center">
             <div className="w-full h-full border-[20px] border-black rounded-full" />
             <div className="absolute inset-0 flex items-center justify-center">
                <CheckCircle2 size={160} className="text-black" />
             </div>
          </div>
       </div>
       <div className="absolute top-12 right-12 text-[10px] font-black uppercase tracking-widest text-zinc-300 italic">Design_16_Final_Variant</div>
    </div>
  )
};
