"use client";

import React, { useState, useEffect } from 'react';
import { 
  Dna, 
  Microscope, 
  FlaskConical, 
  Activity, 
  Database, 
  ShieldCheck, 
  HeartPulse, 
  Droplets, 
  Zap, 
  ChevronRight,
  Search,
  Layers,
  Cpu,
  Globe,
  Plus,
  Box,
  Share2,
  RefreshCw,
  Target,
  Infinity,
  CheckCircle2,
  Shield,
  Clock,
  Link2,
  Waves,
  Grid3X3,
  Move
} from 'lucide-react';

export const BiotechGenomicsHero = {
  // 1. Genome_Sequencer: Real-time sequencing visualization
  Genome_Sequencer: () => (
    <div className="w-full min-h-screen bg-[#020617] text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#10b981_0%,transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,#0ea5e9_0%,transparent_50%)]" />
       </div>
       
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
             <div className="inline-flex items-center gap-3 px-4 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-[0.5em] italic">
                <Dna size={14} className="animate-spin-slow" />
                <span>Next_Gen_Sequencing_v17</span>
             </div>
             <h1 className="text-7xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">
                GENOME <br /> <span className="text-emerald-500">DECODE.</span>
             </h1>
             <p className="text-2xl text-white/40 font-medium italic max-w-lg leading-relaxed">
                Mapping the blueprint of life with sub-nanosecond precision. CRISPR-ready data streams for the next evolution.
             </p>
             <div className="flex flex-wrap gap-6">
                <button className="px-12 py-6 bg-emerald-600 text-white font-black uppercase italic rounded-2xl hover:bg-white hover:text-black transition-all shadow-2xl shadow-emerald-600/20 group">
                   [ START_SEQUENCING ] <ChevronRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
             </div>
          </div>

          <div className="relative aspect-square bg-white/[0.02] border border-white/10 rounded-[4rem] p-12 flex flex-col justify-between group overflow-hidden">
             <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
             </div>
             
             <div className="flex justify-between items-start">
                <div className="space-y-2">
                   <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Active_Nucleotides</div>
                   <div className="text-4xl font-black italic">ATGC_98%</div>
                </div>
                <Activity size={32} className="text-emerald-500 animate-pulse" />
             </div>

             <div className="flex-1 flex items-center justify-center">
                <div className="relative">
                   <div className="w-64 h-64 border-[12px] border-white/5 rounded-full animate-spin-slow" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Dna size={100} className="text-emerald-500 drop-shadow-[0_0_30px_#10b981]" />
                   </div>
                </div>
             </div>

             <div className="bg-black/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex justify-between items-center">
                <div className="text-xs font-black uppercase tracking-widest text-zinc-500 italic">Sequencing_Node: 042_SF</div>
                <div className="flex gap-2">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse [animation-delay:0.2s]" />
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse [animation-delay:0.4s]" />
                </div>
             </div>
          </div>
       </div>
    </div>
  ),

  // 2. CRISPR_Editor: Surgical precision gene editing
  CRISPR_Editor: () => (
    <div className="w-full min-h-screen bg-[#FDFDFD] text-[#0F172A] p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-12">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[1em] text-emerald-600">Genetic_Modification_v17</div>
                <h1 className="text-8xl lg:text-[14rem] font-black leading-[0.7] tracking-tighter uppercase italic">
                   CRISPR <br /> <span className="text-slate-200">LABS.</span>
                </h1>
             </div>
             <p className="text-3xl font-black italic uppercase leading-tight text-slate-400 max-w-2xl">
                The world{"'"}s most advanced gene-editing platform. Edit, verify, and deploy synthetic DNA with absolute confidence.
             </p>
             <div className="flex gap-8">
                <button className="px-16 py-8 bg-slate-900 text-white font-black text-2xl uppercase italic hover:bg-emerald-600 transition-all">
                   [ EDIT_GENOME ]
                </button>
             </div>
          </div>

          <div className="lg:col-span-5 aspect-[4/5] bg-white border-[16px] border-slate-900 p-12 flex flex-col justify-between shadow-[40px_40px_0px_#10b981] group cursor-crosshair">
             <div className="flex justify-between items-start border-b-4 border-slate-900 pb-8">
                <div className="text-4xl font-black italic">TARGET_X</div>
                <Microscope size={40} className="group-hover:rotate-12 transition-transform" />
             </div>
             
             <div className="space-y-8">
                {['Accuracy', 'Efficiency', 'Safety'].map(t => (
                  <div key={t} className="space-y-2">
                     <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span>{t}_Rating</span>
                        <span>99.9%</span>
                     </div>
                     <div className="h-4 w-full bg-slate-100 border-2 border-slate-900">
                        <div className="h-full w-full bg-emerald-500" />
                     </div>
                  </div>
                ))}
             </div>

             <div className="pt-8 text-center border-t-4 border-slate-900">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Validated_by_Protocol_v17</div>
             </div>
          </div>
       </div>
    </div>
  ),

  // 3. Molecular_Nexus: 3D-inspired molecular visualization
  Molecular_Nexus: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-16 relative overflow-hidden flex items-center justify-center font-mono">
       <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-500/20 rounded-full animate-reverse-spin-slow" />
       </div>

       <div className="max-w-6xl w-full text-center space-y-16 relative z-10">
          <div className="relative inline-block">
             <div className="absolute inset-0 bg-emerald-500 blur-[100px] opacity-20 animate-pulse" />
             <div className="relative z-10 w-64 h-64 border-2 border-white/10 rounded-[3rem] bg-zinc-900/50 flex items-center justify-center rotate-45 group hover:rotate-90 transition-transform duration-1000">
                <FlaskConical size={100} className="text-emerald-500 -rotate-45" />
             </div>
          </div>

          <div className="space-y-6">
             <div className="text-xs font-black uppercase tracking-[1em] text-emerald-500 italic">Molecular_Dynamics_v17</div>
             <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic italic">NEXUS_BIO.</h1>
             <p className="text-2xl text-white/30 font-medium italic max-w-2xl mx-auto leading-relaxed">
                Simulating molecular interactions in high-fidelity 4D space. The intersection of compute and biology.
             </p>
          </div>

          <div className="pt-12 flex justify-center gap-6">
             <button className="px-12 py-5 border-2 border-white text-white font-black uppercase italic hover:bg-white hover:text-black transition-all">
                [ START_SIM ]
             </button>
             <button className="px-12 py-5 bg-emerald-600 text-white font-black uppercase italic hover:scale-110 transition-all shadow-2xl shadow-emerald-600/20">
                [ VIEW_STRUCTURE ]
             </button>
          </div>
       </div>
    </div>
  ),

  // 4. Synthetic_Biology: Clean, bio-digital interface
  Synthetic_Biology: () => (
    <div className="w-full min-h-screen bg-zinc-950 text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div className="space-y-12">
             <div className="text-xs font-black uppercase tracking-[0.5em] text-cyan-500">Synthetic_Protocol_Active</div>
             <h1 className="text-7xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none">CELLULAR <br /> <span className="text-white/20">COMPUTE.</span></h1>
             <div className="h-2 w-48 bg-cyan-600" />
             <p className="text-2xl text-white/40 italic font-medium leading-relaxed">
                Programming biological circuits like software. The dawn of living technology.
             </p>
             <div className="flex gap-4">
                <button className="px-12 py-5 bg-white text-black font-black uppercase italic rounded-2xl hover:bg-cyan-600 hover:text-white transition-all">
                   [ DEPLOY_CIRCUIT ]
                </button>
             </div>
          </div>

          <div className="grid grid-cols-4 gap-4 aspect-square">
             {Array.from({ length: 16 }).map((_, i) => (
               <div 
                key={i} 
                className="bg-white/5 border border-white/10 rounded-full transition-all duration-500 hover:scale-110 hover:bg-cyan-600 hover:border-white cursor-none flex items-center justify-center group"
               >
                  <Zap size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 5. Clinical_Trials: Data-heavy research dashboard
  Clinical_Trials: () => (
    <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-900 p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
          <div className="lg:col-span-8 space-y-12 bg-white border border-slate-200 p-16 rounded-[3rem] shadow-sm">
             <div className="flex justify-between items-center">
                <div className="space-y-2">
                   <div className="text-xs font-black uppercase tracking-widest text-slate-400 italic">Trial_ID: CT_992_X</div>
                   <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                      PHASE <br /> <span className="text-emerald-600 italic">RESULTS.</span>
                   </h1>
                </div>
                <div className="p-6 bg-emerald-50 text-emerald-600 rounded-3xl">
                   <ShieldCheck size={48} />
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-slate-100 py-12">
                <div className="space-y-1">
                   <div className="text-4xl font-black italic">12k+</div>
                   <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">Participants</div>
                </div>
                <div className="space-y-1">
                   <div className="text-4xl font-black italic">94.2%</div>
                   <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">Efficacy</div>
                </div>
                <div className="space-y-1">
                   <div className="text-4xl font-black italic">Zero</div>
                   <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">Adverse_Events</div>
                </div>
             </div>

             <button className="px-12 py-5 bg-slate-900 text-white font-black uppercase italic rounded-2xl hover:bg-emerald-600 transition-all">
                [ DOWNLOAD_FULL_REPORT ]
             </button>
          </div>

          <div className="lg:col-span-4 bg-emerald-600 text-white p-12 rounded-[3rem] flex flex-col justify-between shadow-2xl shadow-emerald-600/20 group cursor-pointer overflow-hidden relative">
             <div className="absolute top-0 right-0 p-8 opacity-20">
                <Database size={120} className="group-hover:scale-150 transition-transform duration-1000" />
             </div>
             <div className="relative z-10">
                <div className="text-xs font-black uppercase tracking-widest mb-2">Real_Time_Sync</div>
                <div className="text-4xl font-black italic leading-tight">GLOBAL <br /> REPOSITORY.</div>
             </div>
             <div className="relative z-10 space-y-4">
                <div className="text-sm font-bold italic">Accessing 42 Petabytes of genomic research data.</div>
                <div className="h-1 w-full bg-white/20"><div className="h-full w-2/3 bg-white" /></div>
             </div>
          </div>
       </div>
    </div>
  ),

  // 6. Neural_BioLink: Connecting brain waves with biology
  Neural_BioLink: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
       
       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative aspect-square">
             <svg className="w-full h-full" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" className="animate-spin-slow" />
                <path d="M200,50 Q350,200 200,350 Q50,200 200,50" fill="none" stroke="#10b981" strokeWidth="2" className="animate-pulse" />
                <path d="M50,200 Q200,50 350,200 Q200,350 50,200" fill="none" stroke="#0ea5e9" strokeWidth="2" className="animate-pulse [animation-delay:1s]" />
             </svg>
             <div className="absolute inset-0 flex items-center justify-center">
                <Cpu size={100} className="text-emerald-500 drop-shadow-[0_0_30px_#10b981]" />
             </div>
          </div>

          <div className="space-y-12">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-emerald-400 italic">Neural_Link_v17</div>
                <h1 className="text-7xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">THOUGHT <br /> <span className="text-white/20">BIO.</span></h1>
             </div>
             <div className="flex gap-4">
                <button className="px-12 py-5 bg-white text-black font-black uppercase italic rounded-2xl hover:bg-emerald-600 hover:text-white transition-all">
                   [ SYNC_NEURAL_LINK ]
                </button>
             </div>
             <div className="pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-500 italic">
                <span>Brain_Core: 98%</span>
                <span>Bio_Latency: 0.02ms</span>
             </div>
          </div>
       </div>
    </div>
  ),

  // 7. Bioluminescent_Grid: Glowing organic patterns
  Bioluminescent_Grid: () => (
    <div className="w-full min-h-screen bg-[#020202] text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-sans">
       <div className="max-w-4xl w-full text-center space-y-12 relative z-10">
          <div className="space-y-4">
             <div className="text-xs font-black uppercase tracking-[1em] text-emerald-600 italic">Organic_Luminescence_v17</div>
             <h1 className="text-8xl lg:text-[16rem] font-black leading-[0.7] tracking-tighter uppercase italic italic">GLOW_GEN.</h1>
          </div>
          
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-20" />
          
          <p className="text-2xl text-white/40 font-medium italic max-w-2xl mx-auto leading-relaxed">
             Inspired by deep-sea organisms. Interfaces that live and breathe through bioluminescent visual patterns.
          </p>

          <div className="pt-12 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 blur-[100px] rounded-full animate-pulse" />
             <button className="px-20 py-8 border-4 border-white text-white font-black text-3xl uppercase italic hover:bg-white hover:text-black transition-all relative z-10">
                [ ACTIVATE_GLOW ]
             </button>
          </div>
       </div>
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
    </div>
  ),

  // 8. Lab_Protocol: Step-by-step experiment UI
  Lab_Protocol: () => (
    <div className="w-full min-h-screen bg-zinc-950 text-white p-8 md:p-16 relative overflow-hidden flex items-center justify-center font-mono">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
             <div className="inline-flex items-center gap-4 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest italic">
                <Activity size={14} className="animate-pulse" />
                <span>Lab_Status: STERILE</span>
             </div>
             <h1 className="text-7xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">PROTOCOL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">ENGINE.</span></h1>
             <div className="flex gap-6 pt-8">
                {['Phase_01', 'Phase_02', 'Phase_03'].map(n => (
                  <button key={n} className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-black italic uppercase hover:border-emerald-500 hover:bg-emerald-500/10 transition-all">
                     {n}
                  </button>
                ))}
             </div>
          </div>

          <div className="relative aspect-square bg-emerald-500/5 rounded-[4rem] border-2 border-emerald-500/20 flex items-center justify-center group">
             <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
             <FlaskConical size={240} className="text-emerald-500/20 group-hover:text-emerald-500 transition-all duration-1000 group-hover:scale-110" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-full bg-emerald-500/20 animate-[scan_2s_linear_infinite]" />
             </div>
          </div>
       </div>
    </div>
  ),

  // 9. Stem_Cell_Hub: Focus on cellular growth and regeneration
  Stem_Cell_Hub: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-sans">
       <div className="max-w-6xl w-full space-y-24 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-b-8 border-emerald-500 pb-16">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-zinc-500">Regeneration_Core_v17</div>
                <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic italic text-emerald-500">RE_GEN.</h1>
             </div>
             <div className="text-right space-y-4">
                <div className="text-4xl font-black italic">STEM_CELLS</div>
                <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Differentiating_States...</div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {Array.from({ length: 4 }).map((_, i) => (
               <div key={i} className="h-64 bg-zinc-900 rounded-3xl border border-white/5 p-8 flex flex-col justify-between group hover:bg-emerald-500 hover:text-black transition-all cursor-pointer overflow-hidden relative">
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">Cell_State_0{i+1}</div>
                  <Droplets size={48} className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl font-black italic uppercase leading-tight">GROWTH <br /> FACTOR.</div>
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 10. Genomic_Archive: Massive data library of human DNA
  Genomic_Archive: () => (
    <div className="w-full min-h-screen bg-[#080808] text-white p-8 md:p-16 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-5xl w-full text-center space-y-12 relative z-10">
          <div className="inline-block px-4 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-black uppercase tracking-widest italic animate-pulse">
             Genomic_Library_Sync_Active
          </div>
          <h1 className="text-7xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white via-white/40 to-transparent">
             ARCHIVE <br /> LIFE.
          </h1>
          <p className="text-2xl text-white/20 font-medium italic max-w-2xl mx-auto leading-relaxed">
             Preserving the digital fingerprint of humanity for eternity. Secure, immutable, biological data storage.
          </p>
          <div className="pt-12 flex justify-center gap-6">
             <button className="px-12 py-5 bg-emerald-600 text-white font-black uppercase italic rounded-2xl hover:scale-110 transition-all shadow-2xl shadow-emerald-600/20">
                [ ACCESS_VAULT ]
             </button>
             <button className="px-12 py-5 border-2 border-white/10 text-white font-black uppercase italic rounded-2xl hover:border-white transition-all">
                [ SEARCH_BASE ]
             </button>
          </div>
       </div>
       <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 bg-emerald-500 rounded-full animate-pulse" 
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }} 
            />
          ))}
       </div>
    </div>
  ),

  // 11. Cell_Differentiator: Visualizing stem cell specialization
  Cell_Differentiator: () => (
    <div className="w-full min-h-screen bg-[#020205] text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
             <div className="text-xs font-black uppercase tracking-[1em] text-emerald-500 italic">Stem_Cell_Specialization_v17</div>
             <h1 className="text-7xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">
                DIFFERENTIATE <br /> <span className="text-emerald-500/20">STATES.</span>
             </h1>
             <p className="text-2xl text-white/40 font-medium italic max-w-lg leading-relaxed">
                Directing the fate of pluripotent cells through precisely timed biochemical signaling.
             </p>
             <button className="px-12 py-6 border-4 border-emerald-500 text-white font-black uppercase italic hover:bg-emerald-500 hover:text-black transition-all">
                [ INDUCE_STATE ]
             </button>
          </div>

          <div className="relative aspect-square">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border-8 border-white/5 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-emerald-500 rounded-full blur-xl animate-ping" />
                   <RefreshCw size={100} className="text-emerald-500 animate-spin-slow" />
                </div>
             </div>
             {[0, 90, 180, 270].map(deg => (
               <div key={deg} className="absolute top-1/2 left-1/2 w-full h-px origin-left" style={{ transform: `rotate(${deg}deg) translateX(160px)` }}>
                  <div className="w-8 h-8 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center text-emerald-500 animate-pulse">
                     <Plus size={16} />
                  </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 12. Protein_Folding: Complex molecular structures
  Protein_Folding: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-mono">
       <div className="max-w-6xl w-full text-center space-y-12 relative z-10">
          <div className="space-y-4">
             <div className="text-xs font-black uppercase tracking-[0.5em] text-cyan-400 italic">AlphaFold_Integration_v17</div>
             <h1 className="text-8xl lg:text-[14rem] font-black leading-[0.7] tracking-tighter uppercase italic italic">FOLD_CORE.</h1>
          </div>
          
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
             {[1, 2, 3].map(i => (
               <div key={i} className="p-8 border border-white/10 bg-white/[0.02] rounded-[2rem] group hover:border-cyan-500 transition-all cursor-pointer">
                  <Box size={40} className="text-cyan-500 mb-6 group-hover:scale-125 transition-transform" />
                  <div className="text-left space-y-2">
                     <div className="text-[10px] font-black uppercase opacity-40">Structure_0{i}</div>
                     <div className="text-2xl font-black italic">BETA_SHEET</div>
                  </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 13. Bio_Circuit: Biological logic gates
  Bio_Circuit: () => (
    <div className="w-full min-h-screen bg-[#050505] text-emerald-400 p-8 md:p-16 relative overflow-hidden flex items-center justify-center font-mono">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-8 space-y-12">
             <div className="inline-flex items-center gap-4 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest italic">
                <Cpu size={14} />
                <span>Logic_Gates: ACTIVE</span>
             </div>
             <h1 className="text-7xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic">BIO <br /> <span className="text-white">LOGIC.</span></h1>
             <p className="text-2xl text-emerald-400/40 italic font-medium leading-relaxed max-w-2xl">
                Engineering genetic switches that process information within living cells.
             </p>
             <div className="flex gap-6">
                <button className="px-12 py-5 bg-emerald-600 text-black font-black uppercase italic rounded-2xl hover:bg-white transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                   [ RUN_ALGORITHM ]
                </button>
             </div>
          </div>

          <div className="lg:col-span-4 aspect-square bg-emerald-500/5 rounded-[4rem] border-2 border-emerald-500/20 p-12 flex flex-col justify-between group">
             <div className="flex justify-between items-center">
                <div className="text-[10px] font-black uppercase tracking-widest">Input_Signal_A</div>
                <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_#10b981]" />
             </div>
             <div className="flex-1 flex items-center justify-center">
                <div className="w-px h-full bg-gradient-to-b from-emerald-500/50 via-emerald-500 to-emerald-500/50" />
             </div>
             <div className="flex justify-between items-center">
                <div className="text-[10px] font-black uppercase tracking-widest">Output_Gate_X</div>
                <Zap size={24} />
             </div>
          </div>
       </div>
    </div>
  ),

  // 14. Organoid_Grower: Cellular growth visualization
  Organoid_Grower: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div className="space-y-16">
             <div className="h-24 w-1 bg-emerald-500" />
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[1em] text-zinc-400 italic">Tissue_Engineering_v17</div>
                <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.7] tracking-tighter uppercase italic italic">GROW_TH.</h1>
             </div>
             <p className="text-3xl font-black italic uppercase leading-tight text-zinc-500">
                Cultivating complex 3D organoid structures for precision medicine.
             </p>
             <div className="flex gap-8">
                <button className="px-16 py-8 bg-black text-white font-black text-2xl uppercase italic hover:scale-105 transition-all shadow-2xl">
                   [ INITIALIZE_GROWTH ]
                </button>
             </div>
          </div>

          <div className="relative aspect-square flex items-center justify-center">
             <div className="w-full h-full border-[20px] border-emerald-50 rounded-full animate-spin-slow" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                <Droplets size={160} className="text-emerald-500" />
             </div>
          </div>
       </div>
    </div>
  ),

  // 15. Viral_Vector: Gene delivery system
  Viral_Vector: () => (
    <div className="w-full min-h-screen bg-[#020205] text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-mono">
       <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
       </div>

       <div className="max-w-5xl w-full text-center space-y-16 relative z-10">
          <div className="inline-block px-8 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest italic animate-pulse">
             Delivery_System_Active
          </div>
          <h1 className="text-7xl lg:text-[14rem] font-black leading-[0.7] tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white via-white/40 to-transparent">
             VECTOR.
          </h1>
          <p className="text-2xl text-white/30 font-medium italic max-w-2xl mx-auto leading-relaxed">
             Precision viral engineering for the targeted delivery of genetic therapeutic payloads.
          </p>
          <div className="pt-8">
             <button className="px-20 py-8 bg-blue-600 text-white font-black text-2xl uppercase italic hover:bg-white hover:text-black transition-all shadow-[0_0_60px_rgba(37,99,235,0.4)]">
                [ DEPLOY_PAYLOAD ]
             </button>
          </div>
       </div>
    </div>
  ),

  // 16. Immune_Response: Body's defense visualization
  Immune_Response: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative z-10">
          <div className="lg:col-span-8 space-y-12">
             <div className="text-xs font-black uppercase tracking-widest text-emerald-600 italic">Immunology_Scan_v17</div>
             <h1 className="text-8xl lg:text-[16rem] font-black leading-[0.7] tracking-tighter uppercase italic">SHIELD_ <br /> <span className="text-zinc-200">BIO.</span></h1>
             <p className="text-4xl font-black italic uppercase tracking-tighter max-w-2xl">
                Real-time monitoring of lymphocyte activation and pathogen neutralization.
             </p>
          </div>
          
          <div className="lg:col-span-4 aspect-square bg-emerald-600 flex items-center justify-center group cursor-pointer shadow-[20px_20px_0px_#000]">
             <Shield size={120} className="text-white group-hover:scale-150 transition-transform duration-1000" />
          </div>
       </div>
       <div className="absolute bottom-24 right-24 text-[10px] font-black uppercase tracking-[2em] text-black/20 italic">Immune_System_Status: OPTIMAL</div>
    </div>
  ),

  // 17. Pathogen_Scanner: Identifying microorganisms
  Pathogen_Scanner: () => (
    <div className="w-full min-h-screen bg-[#050505] text-[#ff3e3e] p-8 md:p-16 relative overflow-hidden flex items-center justify-center font-mono">
       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
             <div className="inline-flex items-center gap-4 px-6 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-500 text-[10px] font-black uppercase tracking-widest italic animate-pulse">
                <Search size={14} />
                <span>Pathogen_Alert: LEVEL_04</span>
             </div>
             <h1 className="text-7xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">SCAN <br /> <span className="text-white">TRACE.</span></h1>
             <div className="flex gap-6 pt-8">
                {['ID_01', 'ID_02', 'ID_03'].map(n => (
                  <button key={n} className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-black italic uppercase hover:border-rose-500 hover:bg-rose-500/10 transition-all">
                     {n}
                  </button>
                ))}
             </div>
          </div>

          <div className="relative aspect-square bg-rose-500/5 rounded-[4rem] border-2 border-rose-500/20 flex items-center justify-center group">
             <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1)_0%,transparent_70%)]" />
             <Activity size={240} className="text-rose-500/20 group-hover:text-rose-500 transition-all duration-1000 group-hover:scale-110" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-full bg-rose-500/20 animate-[scan_2s_linear_infinite]" />
             </div>
          </div>
       </div>
    </div>
  ),

  // 18. Life_Matrix: Global biological information
  Life_Matrix: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-sans">
       <div className="max-w-6xl w-full space-y-24 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-b-8 border-white pb-16">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-zinc-500">Biological_Cloud_v17</div>
                <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic italic">MATRIX.</h1>
             </div>
             <div className="text-right space-y-4">
                <div className="text-4xl font-black italic">GLOBAL_BIO</div>
                <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Synchronizing_Ecosystems...</div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {Array.from({ length: 4 }).map((_, i) => (
               <div key={i} className="h-64 bg-zinc-900 rounded-3xl border border-white/5 p-8 flex flex-col justify-between group hover:bg-white hover:text-black transition-all cursor-pointer overflow-hidden relative">
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">Node_0{i+1}</div>
                  <Globe size={48} className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl font-black italic uppercase leading-tight">EXPLORE <br /> LIFE.</div>
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 19. Evolutionary_Loop: Accelerated selection
  Evolutionary_Loop: () => (
    <div className="w-full min-h-screen bg-zinc-950 text-white p-8 md:p-24 relative overflow-hidden flex flex-col items-center justify-center font-mono">
       <div className="max-w-4xl w-full text-center space-y-16 relative z-10">
          <div className="relative inline-block">
             <Infinity size={240} className="text-emerald-500/10 animate-pulse" />
             <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-8xl lg:text-[14rem] font-black italic tracking-tighter uppercase leading-none">EVOLVE.</h1>
             </div>
          </div>

          <div className="space-y-8">
             <p className="text-2xl text-white/40 italic font-medium leading-relaxed max-w-2xl mx-auto">
                Recursive biological iteration at silicon speed. Accelerating millions of years of evolution into days.
             </p>
             <div className="flex flex-wrap justify-center gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase italic">Gen_0{i+1}</div>
                ))}
             </div>
          </div>
       </div>
    </div>
  ),

  // 20. Final_Sequence: The complete genome
  Final_Sequence: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-24 relative overflow-hidden flex items-center justify-center font-sans">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div className="space-y-16">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[1em] text-zinc-400 italic">Project_Complete_v17</div>
                <h1 className="text-8xl lg:text-[12rem] font-black leading-[0.7] tracking-tighter uppercase italic italic">GENOME.</h1>
             </div>
             <p className="text-3xl font-black italic uppercase leading-tight text-emerald-600">
                The definitive sequence of human existence. Mapped, understood, and preserved.
             </p>
             <div className="flex gap-8">
                <button className="px-16 py-8 bg-black text-white font-black text-2xl uppercase italic hover:scale-105 transition-all">
                   [ RESET_SCAN ]
                </button>
             </div>
          </div>

          <div className="relative aspect-square flex items-center justify-center">
             <div className="w-full h-full border-[20px] border-black rounded-full" />
             <div className="absolute inset-0 flex items-center justify-center">
                <CheckCircle2 size={160} className="text-emerald-500" />
             </div>
          </div>
       </div>
       <div className="absolute top-12 right-12 text-[10px] font-black uppercase tracking-widest text-zinc-300 italic">Design_17_Final_Variant</div>
    </div>
  )
};
