"use client";

import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  Activity, 
  Globe, 
  Layers, 
  Sparkles,
  Command,
  Search,
  MessageSquare,
  Users,
  ArrowRight,
  ArrowUpRight,
  Code,
  Database,
  Terminal,
  MousePointer2,
  Share2,
  Plus
} from 'lucide-react';
import { SmartImage } from '../SmartImage';

export const AIOrchestratorHero = {
  // 1. CentralIntelligence: Main core with radiating node connections
  CentralIntelligence: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 font-sans relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      
      <div className="max-w-7xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-3 px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest italic">
            <Brain size={14} />
            <span>AI_ORCHESTRATOR_v4.2</span>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">
            CORE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">LOGIC.</span>
          </h1>
          
          <p className="text-2xl text-white/40 font-medium italic max-w-lg leading-relaxed">
            The master controller for multi-agent systems. Orchestrating complex reasoning at the edge.
          </p>
          
          <div className="flex flex-wrap gap-8">
            <button className="px-12 py-6 bg-blue-600 text-white font-black text-2xl uppercase italic rounded-2xl hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(59,130,246,0.3)] flex items-center gap-4 group">
              <span>INITIALIZE</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative aspect-square">
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
              <div className="w-48 h-48 bg-black border-4 border-blue-500/30 rounded-full flex items-center justify-center relative z-20 group">
                 <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-ping opacity-20" />
                 <Brain size={80} className="text-blue-500 group-hover:scale-110 transition-transform duration-700" />
              </div>
           </div>
           
           {[0, 60, 120, 180, 240, 300].map((deg, i) => (
             <div key={i} className="absolute top-1/2 left-1/2 w-full h-px origin-left" style={{ transform: `rotate(${deg}deg) translateX(120px)` }}>
                <div className="flex items-center gap-4">
                   <div className="h-px w-24 bg-gradient-to-r from-blue-500/50 to-transparent" />
                   <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center text-blue-400 hover:border-blue-500 transition-colors cursor-pointer">
                      <Cpu size={20} />
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  ),

  // 2. AgentSwarm: Collective intelligence hero
  AgentSwarm: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24 relative">
        <div className="text-center space-y-8">
           <div className="text-xs font-black uppercase tracking-[0.8em] text-blue-500/60">Distributed_Intelligence</div>
           <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter uppercase italic leading-none">
             THE <span className="text-white/20">SWARM.</span>
           </h1>
           <p className="max-w-2xl mx-auto text-xl text-white/40 font-medium italic">
             Harness the power of 1,000+ autonomous agents working in parallel to solve your most complex architectural challenges.
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
           {Array.from({ length: 12 }).map((_, i) => (
             <div key={i} className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl flex flex-col items-center gap-6 hover:border-blue-500/50 transition-all group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                   <Activity size={24} />
                </div>
                <div className="text-center space-y-1">
                   <div className="text-[10px] font-black uppercase tracking-widest text-white/20">Agent_0{i + 1}</div>
                   <div className="text-lg font-black italic">ACTIVE</div>
                </div>
             </div>
           ))}
        </div>
        
        <div className="flex justify-center">
           <button className="px-16 py-8 border-4 border-white text-white font-black text-3xl uppercase italic hover:bg-white hover:text-black transition-all">
             [ DEPLOY_SWARM ]
           </button>
        </div>
      </div>
    </div>
  ),

  // 3. LogicFlowOrchestrator: Decision tree visualization
  LogicFlowOrchestrator: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-24 font-sans relative flex items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
             <div className="text-xs font-black uppercase tracking-widest text-zinc-400 italic">Reasoning_Engine_v1</div>
             <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
               LOGIC <br /> <span className="underline decoration-8 underline-offset-8">FLOW.</span>
             </h2>
          </div>
          <p className="text-2xl text-black/60 font-medium italic max-w-md">
            Visualize the internal reasoning process of your AI. Transparency in every decision.
          </p>
          <div className="flex gap-4">
             <button className="px-10 py-4 bg-black text-white font-black uppercase italic rounded-xl text-lg hover:scale-105 transition-all">
               Get Started
             </button>
             <button className="px-10 py-4 border-2 border-black text-black font-black uppercase italic rounded-xl text-lg hover:bg-zinc-100 transition-all">
               Documentation
             </button>
          </div>
        </div>

        <div className="space-y-8">
           {[
             { title: "Input_Analysis", status: "COMPLETE", color: "emerald" },
             { title: "Semantic_Mapping", status: "PROCESSING", color: "blue" },
             { title: "Logic_Synthesis", status: "PENDING", color: "zinc" }
           ].map((step, i) => (
             <div key={i} className={`p-8 border-4 border-black shadow-[12px_12px_0_rgba(0,0,0,1)] bg-white flex items-center justify-between group hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[20px_20px_0_rgba(0,0,0,1)] transition-all cursor-pointer`}>
                <div className="flex items-center gap-8">
                   <div className="text-4xl font-black italic opacity-20">0{i + 1}</div>
                   <div className="space-y-1">
                      <h3 className="text-2xl font-black uppercase italic tracking-tight">{step.title}</h3>
                      <div className={`text-[10px] font-black uppercase tracking-widest text-${step.color}-500`}>{step.status}</div>
                   </div>
                </div>
                <ArrowRight size={32} className="opacity-20 group-hover:opacity-100 transition-opacity" />
             </div>
           ))}
        </div>
      </div>
    </div>
  ),

  // 4. NeuralPathway: High-tech neural grid
  NeuralPathway: () => (
    <div className="w-full min-h-screen bg-[#080808] text-white p-8 md:p-24 font-sans relative overflow-hidden flex items-center justify-center">
       <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }} />
       
       <div className="max-w-5xl w-full space-y-16 text-center relative z-10">
          <div className="space-y-6">
             <div className="inline-block px-6 py-2 bg-blue-600 text-white font-black text-sm uppercase italic tracking-widest -skew-x-12">
               NEXT_GEN_INFRASTRUCTURE
             </div>
             <h1 className="text-7xl md:text-[14rem] font-black leading-none tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">
               NEURAL.
             </h1>
          </div>

          <p className="max-w-2xl mx-auto text-2xl text-white/40 font-medium italic leading-relaxed">
            A high-bandwidth substrate for the next generation of cognitive systems.
          </p>

          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { label: "LATENCY", value: "0.4ms", icon: Zap },
               { label: "THROUGHPUT", value: "850GB/s", icon: Activity },
               { label: "RELIABILITY", value: "99.99%", icon: Shield }
             ].map((stat, i) => (
               <div key={i} className="p-8 border border-white/10 bg-white/5 backdrop-blur-xl rounded-[3rem] space-y-4 hover:border-white/30 transition-all group">
                  <stat.icon size={32} className="mx-auto text-blue-500 group-hover:scale-110 transition-transform" />
                  <div className="space-y-1">
                     <div className="text-4xl font-black italic">{stat.value}</div>
                     <div className="text-[10px] font-black uppercase tracking-widest text-white/20">{stat.label}</div>
                  </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 5. AutonomousAgentDashboard: Built-in control panel
  AutonomousAgentDashboard: () => (
    <div className="w-full min-h-screen bg-zinc-100 text-black p-8 md:p-16 font-mono flex items-center justify-center">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-8">
             <div className="p-8 bg-black text-white rounded-[3rem] space-y-12">
                <div className="space-y-4">
                   <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Command_Center_v1</div>
                   <h2 className="text-5xl font-black uppercase italic leading-none">AGENT <br /> CONTROL.</h2>
                </div>
                <div className="space-y-6">
                   <button className="w-full py-4 bg-blue-600 text-white font-black uppercase italic rounded-2xl hover:bg-blue-500 transition-all">
                     [ BOOT_SEQUENCE ]
                   </button>
                   <button className="w-full py-4 border-2 border-white/20 text-white font-black uppercase italic rounded-2xl hover:bg-white/10 transition-all">
                     [ SYSTEM_LOGS ]
                   </button>
                </div>
             </div>
             
             <div className="p-8 border-4 border-black bg-white rounded-[3rem] space-y-6">
                <div className="flex justify-between items-center">
                   <span className="text-xs font-black uppercase tracking-widest">Active_Agents</span>
                   <Users size={20} />
                </div>
                <div className="text-6xl font-black italic">142</div>
                <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                   <div className="h-full w-[70%] bg-black animate-pulse" />
                </div>
             </div>
          </div>

          <div className="lg:col-span-8 bg-white border-4 border-black rounded-[4rem] p-12 relative overflow-hidden flex flex-col justify-between group">
             <div className="absolute top-0 right-0 p-8">
                <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
                   <Plus size={32} />
                </div>
             </div>
             
             <div className="space-y-8">
                <div className="inline-block px-4 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest italic">Live_Visualizer</div>
                <h3 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
                  ORCHESTRATING <br /> THE <span className="text-blue-600">UNKNOWN.</span>
                </h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t-2 border-black/10">
                <div className="space-y-4">
                   <p className="text-xl font-bold italic opacity-60 uppercase">System Status: OPTIMAL</p>
                   <div className="flex gap-4">
                      {['CORE', 'SYNC', 'AUTH', 'DATA'].map(mod => (
                        <div key={mod} className="px-3 py-1 bg-zinc-900 text-white text-[8px] font-black uppercase tracking-widest italic rounded-lg">
                           {mod}
                        </div>
                      ))}
                   </div>
                </div>
                <div className="flex items-end justify-end gap-4">
                   <div className="text-right">
                      <div className="text-[10px] font-black opacity-40 uppercase tracking-widest">Total_Reasoning_Time</div>
                      <div className="text-3xl font-black italic">0.024s</div>
                   </div>
                   <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-600/30">
                      <Activity size={24} />
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  ),

  // 6. MultiModalBrain: Input/Output representation
  MultiModalBrain: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 font-sans flex items-center justify-center overflow-hidden">
       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative aspect-square">
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-[120px] animate-pulse" />
             <div className="relative z-10 w-full h-full border border-white/10 rounded-[4rem] bg-zinc-900/50 backdrop-blur-3xl p-16 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8 w-full">
                   {[
                     { icon: MessageSquare, label: "Text", color: "blue" },
                     { icon: Globe, label: "Vision", color: "purple" },
                     { icon: Database, label: "Code", color: "emerald" },
                     { icon: Zap, label: "Action", color: "yellow" }
                   ].map((item, i) => (
                     <div key={i} className="aspect-square bg-black border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/40 transition-all cursor-pointer group">
                        <item.icon size={32} className={`text-${item.color}-500 group-hover:scale-110 transition-transform`} />
                        <div className="space-y-1">
                           <div className="text-2xl font-black italic uppercase">{item.label}</div>
                           <div className="text-[8px] font-black uppercase opacity-20 tracking-[0.4em]">MODULE_ACTIVE</div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="space-y-12">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[0.6em] text-purple-500 italic">Multimodal_Architecture</div>
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
                  UNIVERSAL <br /> <span className="text-white/20">INPUT.</span>
                </h1>
             </div>
             <p className="text-2xl text-white/40 font-medium italic leading-relaxed max-w-lg">
                Seamlessly transition between text, image, and code. One orchestrator for every type of intelligence.
             </p>
             <button className="px-12 py-6 bg-white text-black font-black text-2xl uppercase italic rounded-2xl hover:bg-purple-500 hover:text-white transition-all shadow-2xl">
                [ ACCESS_PLATFORM ]
             </button>
          </div>
       </div>
    </div>
  ),

  // 7. InfiniteReasoningLoop: Deep thought representation
  InfiniteReasoningLoop: () => (
    <div className="w-full min-h-screen bg-[#020202] text-white p-8 md:p-24 font-sans flex flex-col items-center justify-center text-center">
       <div className="relative mb-24">
          <div className="w-80 h-80 md:w-[500px] md:h-[500px] rounded-full border border-white/5 animate-spin duration-[20s] relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#fff]" />
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#fff]" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
             <div className="text-xs font-black uppercase tracking-[1em] text-white/20">System_Reasoning</div>
             <h2 className="text-8xl md:text-[12rem] font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white/20 to-white animate-pulse">
                THINK.
              </h2>
          </div>
       </div>

       <div className="max-w-3xl space-y-12">
          <p className="text-2xl text-white/40 font-medium italic leading-relaxed">
            Recursive architectural patterns enabling infinite depth in agent reasoning and problem decomposition.
          </p>
          <div className="flex justify-center gap-8">
             <div className="flex flex-col items-center gap-2">
                <div className="text-4xl font-black italic">128+</div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-20">Reasoning_Layers</div>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="flex flex-col items-center gap-2">
                <div className="text-4xl font-black italic">100%</div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-20">Traceability</div>
             </div>
          </div>
       </div>
    </div>
  ),

  // 8. OpenDesignCanvas: Collaborative AI workspace
  OpenDesignCanvas: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-24 font-sans relative overflow-hidden flex items-center justify-center">
       <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
       
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
             <div className="inline-flex items-center gap-3 px-6 py-2 bg-zinc-100 rounded-full border border-black/5 text-black font-black text-xs uppercase tracking-widest italic">
                <Sparkles size={16} />
                <span>AI_ASSISTED_DESIGN</span>
             </div>
             <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase italic leading-[0.8]">
                OPEN <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-400">CANVAS.</span>
             </h1>
             <p className="text-2xl text-black/40 font-medium italic max-w-lg leading-relaxed">
                Design alongside intelligent agents. Real-time visual synthesis and collaborative component generation.
             </p>
             <div className="flex gap-4">
                <button className="px-12 py-6 bg-black text-white font-black text-2xl uppercase italic rounded-[2rem] hover:scale-105 transition-all shadow-2xl">
                   [ CREATE_NEW ]
                </button>
             </div>
          </div>

          <div className="relative aspect-[4/3] bg-zinc-50 border-4 border-black rounded-[3rem] shadow-2xl p-12 overflow-hidden group">
             <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                <div className="px-8 py-4 bg-black text-white font-black uppercase italic rounded-2xl">
                   CONTINUE_GENERATION
                </div>
             </div>
             
             <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-center border-b border-black/10 pb-6">
                   <div className="flex gap-2">
                      <div className="w-10 h-10 rounded-full bg-zinc-200 border border-black/5" />
                      <div className="w-10 h-10 rounded-full bg-zinc-200 border border-black/5" />
                      <div className="w-10 h-10 rounded-full bg-blue-600 border border-black/5 flex items-center justify-center text-white text-[8px] font-black">AI</div>
                   </div>
                   <div className="text-[10px] font-black uppercase tracking-widest italic">Session_Active</div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                   <div className="aspect-square bg-white border-2 border-black/5 rounded-2xl flex items-center justify-center p-8">
                      <div className="w-full h-full border-2 border-dashed border-black/10 rounded-xl" />
                   </div>
                   <div className="aspect-square bg-zinc-900 rounded-2xl p-8 flex flex-col justify-between">
                      <div className="w-12 h-12 bg-white/10 rounded-xl" />
                      <div className="h-2 w-full bg-white/10 rounded-full" />
                   </div>
                </div>
             </div>
             
             <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                <div className="space-y-1">
                   <div className="text-[10px] font-black uppercase opacity-20 tracking-widest">Cursor_Position</div>
                   <div className="text-xl font-black italic tracking-tighter">X: 1024 | Y: 768</div>
                </div>
                <MousePointer2 size={32} className="rotate-[-20deg] text-blue-600 animate-bounce" />
             </div>
          </div>
       </div>
    </div>
  ),

  // 9. SemanticSearchHero: Vector space visualization
  SemanticSearchHero: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-24 font-sans relative overflow-hidden flex items-center justify-center">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
       
       <div className="max-w-6xl w-full space-y-16 text-center relative z-10">
          <div className="space-y-8">
             <div className="text-xs font-black uppercase tracking-[0.8em] text-blue-400 italic animate-pulse">Neural_Index_v9</div>
             <h1 className="text-8xl md:text-[15rem] font-black tracking-tighter uppercase italic leading-none">
               SEMANTIC.
             </h1>
          </div>

          <div className="max-w-3xl mx-auto relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-50 transition-opacity" />
             <div className="relative bg-zinc-900 border border-white/10 rounded-[2.5rem] p-4 flex items-center gap-6">
                <Search size={32} className="ml-6 text-white/40" />
                <input type="text" placeholder="Search across multi-agent vector space..." className="bg-transparent border-none outline-none text-2xl font-black italic uppercase w-full placeholder:text-white/10" />
                <button className="px-10 py-5 bg-blue-600 text-white font-black uppercase italic rounded-2xl hover:bg-blue-500 transition-all mr-2">
                   [ QUERY ]
                </button>
             </div>
          </div>

          <p className="max-w-2xl mx-auto text-xl text-white/40 font-medium italic leading-relaxed">
             Find what you need through conceptual understanding, not just keywords. High-dimensional search for modern data.
          </p>
       </div>
    </div>
  ),

  // 10. PromptEngineeringTerminal: High-end agent interaction
  PromptEngineeringTerminal: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 font-mono flex items-center justify-center overflow-hidden">
       <div className="max-w-6xl w-full border border-white/10 rounded-[3rem] bg-zinc-900/30 backdrop-blur-xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="p-8 border-b border-white/10 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
                <span className="ml-4 text-[10px] font-black uppercase tracking-widest opacity-40">Agent_Terminal_v2.0.4</span>
             </div>
             <div className="text-[10px] font-black uppercase tracking-widest text-blue-500 animate-pulse">System_Stable</div>
          </div>

          <div className="p-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
             <div className="lg:col-span-8 space-y-12">
                <div className="space-y-4">
                   <div className="text-[10px] font-black uppercase opacity-20 italic tracking-widest">Input_Prompt</div>
                   <div className="text-3xl font-black italic leading-tight uppercase">
                      Architect a multi-agent system for real-time visual orchestration using high-density neural pathways.
                   </div>
                </div>
                
                <div className="space-y-6">
                   <div className="text-[10px] font-black uppercase opacity-20 italic tracking-widest">System_Response</div>
                   <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 font-sans italic text-white/60 leading-relaxed">
                      "I've initiated the architectural blueprint for the requested system. Deploying 14 sub-agents to handle specific logic modules. Estimated completion time: 0.04s."
                   </div>
                </div>
             </div>

             <div className="lg:col-span-4 space-y-8">
                <div className="p-8 border border-white/10 rounded-[2.5rem] bg-black/40 space-y-8">
                   <div className="space-y-4">
                      <div className="text-xs font-black uppercase tracking-widest italic opacity-40 text-center underline">Agent_Parameters</div>
                      <div className="space-y-6">
                         {[
                           { l: "Temperature", v: "0.7", p: "70%" },
                           { l: "Top_P", v: "0.9", p: "90%" },
                           { l: "Max_Tokens", v: "4096", p: "100%" }
                         ].map(param => (
                           <div key={param.l} className="space-y-2">
                              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest italic">
                                 <span>{param.l}</span>
                                 <span>{param.v}</span>
                              </div>
                              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                 <div className="h-full bg-blue-500" style={{ width: param.p }} />
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                   <button className="w-full py-4 bg-white text-black font-black uppercase italic rounded-2xl hover:invert transition-all">
                      [ RUN_AGENT ]
                   </button>
                </div>
             </div>
          </div>

          <div className="p-4 bg-blue-600/10 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.5em] text-center italic text-blue-400">
             Mission_50_20_Orchestration_Active_Link_Established
          </div>
       </div>
    </div>
  ),

  // 11. KnowledgeGraphHero: Entity relationship visualization
  KnowledgeGraphHero: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 font-sans relative overflow-hidden flex items-center justify-center">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
             <div className="text-xs font-black uppercase tracking-[0.8em] text-emerald-500 italic">Semantic_Mapping</div>
             <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase italic leading-[0.8]">
                KNOWLEDGE <br /> <span className="text-white/20">GRAPH.</span>
             </h1>
             <p className="text-2xl text-white/40 font-medium italic max-w-lg">
                Connect the dots across millions of data points. Advanced entity recognition and relationship mapping.
             </p>
             <button className="px-12 py-6 bg-emerald-600 text-black font-black text-2xl uppercase italic rounded-2xl hover:bg-white transition-all">
                [ EXPLORE_GRAPH ]
             </button>
          </div>

          <div className="relative aspect-square">
             <svg className="w-full h-full opacity-40" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="200" cy="200" r="80" fill="none" stroke="white" strokeWidth="1" strokeDasharray="8 12" />
                {[
                  { x: 100, y: 100 }, { x: 300, y: 100 }, { x: 300, y: 300 }, { x: 100, y: 300 }, { x: 200, y: 50 }
                ].map((pos, i) => (
                  <g key={i}>
                    <line x1="200" y1="200" x2={pos.x} y2={pos.y} stroke="white" strokeWidth="0.5" />
                    <circle cx={pos.x} cy={pos.y} r="8" className="fill-emerald-500 animate-pulse" />
                  </g>
                ))}
                <circle cx="200" cy="200" r="20" className="fill-white" />
             </svg>
             <div className="absolute inset-0 flex items-center justify-center">
                <Share2 size={32} className="text-black" />
             </div>
          </div>
       </div>
    </div>
  ),

  // 12. AIAgentPersona: Individual agent profile
  AIAgentPersona: () => (
    <div className="w-full min-h-screen bg-zinc-100 text-black p-8 md:p-24 font-sans flex items-center justify-center">
       <div className="max-w-6xl w-full bg-white border-4 border-black rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-16 bg-black text-white space-y-12">
             <div className="w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center">
                <Users size={64} />
             </div>
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-white/40 italic">Agent_ID: 0x88F</div>
                <h2 className="text-6xl font-black uppercase italic tracking-tighter">LEAD_ARCHITECT</h2>
             </div>
             <div className="space-y-6">
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full w-[85%] bg-blue-500" />
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase italic tracking-widest opacity-40">
                   <span>Reliability_Score</span>
                   <span>98.4%</span>
                </div>
             </div>
          </div>
          <div className="md:w-1/2 p-16 space-y-12">
             <h3 className="text-4xl font-black uppercase italic tracking-tighter">SPECIALIZATION</h3>
             <p className="text-xl text-black/60 font-medium italic leading-relaxed">
                Expert in high-density neural orchestration and semantic vector mapping. Capable of handling 10k+ concurrent requests.
             </p>
             <div className="grid grid-cols-2 gap-4">
                {['Logic', 'Scale', 'Sync', 'Auth'].map(skill => (
                  <div key={skill} className="p-4 border-2 border-black rounded-xl text-center font-black uppercase italic text-sm hover:bg-black hover:text-white transition-all cursor-pointer">
                     {skill}
                  </div>
                ))}
             </div>
             <button className="w-full py-6 bg-black text-white font-black text-xl uppercase italic rounded-2xl">
                [ HIRE_AGENT ]
             </button>
          </div>
       </div>
    </div>
  ),

  // 13. RealTimeInference: Token generation visualizer
  RealTimeInference: () => {
    const [text, setText] = useState("");
    const fullMessage = "THE_QUICK_BROWN_FOX_JUMPS_OVER_THE_LAZY_DOG_WHILE_ORCHESTRATING_AI_SYSTEMS.";
    
    useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < fullMessage.length) {
          const charToAdd = fullMessage[i];
          setText(prev => prev + charToAdd);
          i++;
        } else {
          setText("");
          i = 0;
        }
      }, 50);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="w-full min-h-screen bg-black text-[#00ff41] p-8 md:p-24 font-mono flex flex-col items-center justify-center gap-16">
         <div className="text-center space-y-4">
            <div className="text-xs font-black uppercase tracking-[0.5em] text-green-500/40 italic">Live_Inference_Stream</div>
            <h2 className="text-7xl font-black italic tracking-tighter text-white">GENERATING...</h2>
         </div>
         
         <div className="max-w-4xl w-full bg-zinc-900 border-2 border-green-500/20 p-12 rounded-[2.5rem] relative">
            <div className="absolute top-4 left-8 text-[8px] font-black uppercase tracking-widest opacity-20 italic">Output_Buffer_v4</div>
            <div className="text-3xl md:text-5xl font-black italic leading-tight break-all">
               {text}
               <span className="inline-block w-4 h-10 bg-[#00ff41] animate-pulse ml-4 align-middle" />
            </div>
         </div>
         
         <div className="flex gap-12 opacity-40">
            <div className="text-center">
               <div className="text-3xl font-black italic">142</div>
               <div className="text-[10px] font-black uppercase italic tracking-widest">Tokens/Sec</div>
            </div>
            <div className="text-center">
               <div className="text-3xl font-black italic">0.02s</div>
               <div className="text-[10px] font-black uppercase italic tracking-widest">Latency</div>
            </div>
         </div>
      </div>
    );
  },

  // 14. SecurityHardenedAI: Guardrails and safety
  SecurityHardenedAI: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-24 font-sans relative overflow-hidden flex items-center justify-center">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0%,transparent_70%)]" />
       
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[80%] border-4 border-red-500/20 rounded-full animate-pulse" />
                <div className="w-[60%] h-[60%] border-4 border-red-500/40 rounded-full animate-ping" />
                <div className="w-48 h-48 bg-red-600 rounded-[3rem] flex items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.4)] relative z-10 group">
                   <Shield size={80} className="group-hover:scale-110 transition-transform" />
                </div>
             </div>
          </div>

          <div className="space-y-12">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[0.8em] text-red-500 italic">Safety_First_Protocol</div>
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8]">
                  SECURE <br /> <span className="text-white/20">AGENT.</span>
                </h1>
             </div>
             <p className="text-2xl text-white/40 font-medium italic max-w-lg leading-relaxed">
                Advanced guardrails and alignment layers. Protecting your data and brand from adversarial attacks.
             </p>
             <div className="flex gap-4">
                <button className="px-12 py-6 bg-red-600 text-white font-black text-2xl uppercase italic rounded-2xl hover:bg-red-500 transition-all">
                   [ ACTIVATE_SHIELD ]
                </button>
             </div>
          </div>
       </div>
    </div>
  ),

  // 15. GlobalDeploymentNode: Server distribution map
  GlobalDeploymentNode: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 font-sans relative flex items-center justify-center">
       <div className="max-w-7xl w-full space-y-24 text-center">
          <div className="space-y-8">
             <div className="text-xs font-black uppercase tracking-[0.8em] text-cyan-500 italic">Edge_Inference_Network</div>
             <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter uppercase italic leading-none">
                GLOBAL <br /> <span className="text-white/20">REACH.</span>
             </h1>
          </div>

          <div className="relative aspect-[21/9] bg-zinc-900/50 border border-white/10 rounded-[4rem] p-12 overflow-hidden group">
             <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
             <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <Globe size={400} />
             </div>
             
             <div className="relative z-10 h-full flex items-center justify-around">
                {[
                  { n: "SF", l: "12ms" }, { n: "LDN", l: "24ms" }, { n: "TKY", l: "8ms" }, { n: "SYD", l: "42ms" }
                ].map((node, i) => (
                  <div key={i} className="space-y-4 group/node cursor-pointer">
                     <div className="w-20 h-20 bg-black border border-white/10 rounded-2xl flex items-center justify-center group-hover/node:border-cyan-500 group-hover/node:bg-cyan-500/10 transition-all">
                        <span className="text-2xl font-black italic">{node.n}</span>
                     </div>
                     <div className="text-[10px] font-black uppercase tracking-widest text-cyan-500 animate-pulse">{node.l}</div>
                  </div>
                ))}
             </div>
          </div>

          <p className="text-2xl text-white/40 font-medium italic max-w-2xl mx-auto">
             Deploy your agents in 140+ locations worldwide. Zero-latency intelligence for every user.
          </p>
       </div>
    </div>
  ),

  // 16. VectorDatabaseExplorer: High-dimensional data hero
  VectorDatabaseExplorer: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-24 font-sans relative overflow-hidden flex items-center justify-center">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
             <div className="text-xs font-black uppercase tracking-widest text-zinc-400 italic">Data_Storage_v2</div>
             <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase italic leading-[0.8]">
               VECTOR <br /> <span className="underline decoration-8 underline-offset-8">STORE.</span>
             </h1>
             <p className="text-2xl text-black/60 font-medium italic max-w-md">
               The memory bank for your agents. Sub-millisecond similarity search across petabytes of semantic data.
             </p>
             <div className="flex gap-4">
                <button className="px-12 py-6 bg-black text-white font-black text-2xl uppercase italic rounded-2xl">
                   [ INDEX_DATA ]
                </button>
             </div>
          </div>

          <div className="relative aspect-square grid grid-cols-4 grid-rows-4 gap-4">
             {Array.from({ length: 16 }).map((_, i) => (
               <div key={i} className="bg-zinc-100 border-2 border-black rounded-2xl flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-crosshair group">
                  <Database size={24} className="opacity-20 group-hover:opacity-100" />
               </div>
             ))}
             <div className="absolute inset-0 border-4 border-dashed border-black/10 rounded-[3rem] -m-8 pointer-events-none" />
          </div>
       </div>
    </div>
  ),

  // 17. CustomTrainingMonitor: Model optimization view
  CustomTrainingMonitor: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-24 font-sans flex flex-col items-center justify-center text-center">
       <div className="max-w-4xl space-y-16">
          <div className="space-y-4">
             <div className="text-xs font-black uppercase tracking-[0.8em] text-emerald-500 italic">Fine_Tuning_Active</div>
             <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
               TRAINING.
             </h2>
          </div>

          <div className="aspect-video w-full bg-zinc-900 border border-white/10 rounded-[3rem] p-12 flex flex-col justify-between group">
             <div className="flex justify-between items-center">
                <div className="text-xs font-black uppercase tracking-widest opacity-40">Loss_Curve_Analysis</div>
                <Activity size={24} className="text-emerald-500" />
             </div>
             
             <div className="h-48 flex items-end gap-2">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-emerald-500/20 border-t-2 border-emerald-500 hover:bg-emerald-500 transition-all duration-500" style={{ height: `${Math.random() * 100}%` }} />
                ))}
             </div>

             <div className="flex justify-between items-end">
                <div className="text-left space-y-1">
                   <div className="text-3xl font-black italic">0.0014</div>
                   <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Current_Loss</div>
                </div>
                <div className="text-right space-y-1">
                   <div className="text-3xl font-black italic">98.2%</div>
                   <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Accuracy</div>
                </div>
             </div>
          </div>
          
          <p className="text-2xl text-white/40 font-medium italic">
             Optimize your models in real-time. Full visibility into the training process and model performance metrics.
          </p>
       </div>
    </div>
  ),

  // 18. AIPoweredSearch: Intelligent discovery hero
  AIPoweredSearch: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-24 font-sans flex items-center justify-center overflow-hidden">
       <div className="max-w-5xl w-full space-y-16 text-center relative z-10">
          <div className="space-y-8">
             <div className="text-xs font-black uppercase tracking-[0.8em] text-zinc-400 italic">Intelligent_Discovery</div>
             <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter uppercase italic leading-none">
                SEARCH.
             </h1>
          </div>

          <div className="relative group">
             <div className="absolute -inset-1 bg-black rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition-opacity" />
             <div className="relative bg-white border-4 border-black rounded-[3rem] p-6 flex items-center gap-6">
                <Search size={40} className="ml-8 text-black/20" />
                <input type="text" placeholder="Ask anything to the orchestrator..." className="bg-transparent border-none outline-none text-3xl font-black italic uppercase w-full placeholder:text-black/5" />
                <button className="px-12 py-6 bg-black text-white font-black text-2xl uppercase italic rounded-[2rem] hover:scale-105 transition-all mr-2">
                   [ ASK ]
                </button>
             </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
             {['Project_Planning', 'Code_Review', 'System_Audit', 'Data_Synthesis'].map(tag => (
               <div key={tag} className="px-6 py-2 bg-zinc-100 border border-black/5 rounded-full text-xs font-black uppercase italic tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer">
                  {tag}
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 19. CollaborativeCodingAgent: Human-AI pairing
  CollaborativeCodingAgent: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 font-mono flex items-center justify-center">
       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
             <div className="p-8 border border-white/10 bg-zinc-900/50 rounded-[3rem] space-y-8 relative overflow-hidden group">
                <div className="flex justify-between items-center opacity-40">
                   <span className="text-xs font-black uppercase tracking-widest italic">Human_Workspace</span>
                   <Users size={20} />
                </div>
                <div className="space-y-4">
                   <div className="h-4 w-[80%] bg-white/5 rounded-full" />
                   <div className="h-4 w-[60%] bg-white/5 rounded-full" />
                   <div className="h-4 w-[90%] bg-white/5 rounded-full" />
                </div>
                <div className="pt-8 text-2xl font-black italic uppercase text-white/40 group-hover:text-white transition-colors">
                   BUILDING_CORE_MODULE...
                </div>
             </div>
             
             <div className="p-8 border border-blue-500/30 bg-blue-600/5 rounded-[3rem] space-y-8 relative overflow-hidden group">
                <div className="flex justify-between items-center text-blue-400">
                   <span className="text-xs font-black uppercase tracking-widest italic">AI_Assistant</span>
                   <Brain size={20} />
                </div>
                <div className="space-y-4">
                   <div className="h-4 w-[70%] bg-blue-500/20 rounded-full animate-pulse" />
                   <div className="h-4 w-[90%] bg-blue-500/20 rounded-full animate-pulse delay-75" />
                   <div className="h-4 w-[50%] bg-blue-500/20 rounded-full animate-pulse delay-150" />
                </div>
                <div className="pt-8 text-2xl font-black italic uppercase text-blue-400">
                   OPTIMIZING_PERFORMANCE...
                </div>
             </div>
          </div>

          <div className="flex flex-col justify-center space-y-12 lg:pl-12">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[0.6em] text-blue-500 italic">Collaborative_Coding</div>
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
                   PAIRING.
                </h1>
             </div>
             <p className="text-2xl text-white/40 font-medium italic leading-relaxed">
                Experience the next evolution of development. Seamless collaboration between human creativity and AI precision.
             </p>
             <button className="px-12 py-6 bg-blue-600 text-white font-black text-2xl uppercase italic rounded-2xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/30">
                [ JOIN_SESSION ]
             </button>
          </div>
       </div>
    </div>
  ),

  // 20. MasterOrchestratorFinal: Grand finale visualization
  MasterOrchestratorFinal: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 font-sans relative overflow-hidden flex flex-col items-center justify-center text-center">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0%,transparent_70%)] animate-pulse" />
       <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
       
       <div className="relative z-10 space-y-16">
          <div className="space-y-8">
             <div className="inline-block px-8 py-2 bg-blue-600 text-white font-black text-sm uppercase italic tracking-[0.5em] rounded-full">
                MISSION_COMPLETE
             </div>
             <h1 className="text-8xl md:text-[15rem] font-black tracking-tighter uppercase italic leading-none">
                FINALE.
             </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
             {[
               { l: "DISEÑOS", v: "50/50", c: "white" },
               { l: "VARIANTES", v: "1,000+", c: "blue-500" },
               { l: "SYSTEM", v: "STABLE", c: "emerald-500" }
             ].map((stat, i) => (
               <div key={i} className="space-y-2">
                  <div className={`text-6xl md:text-8xl font-black italic tracking-tighter text-${stat.c}`}>
                     {stat.v}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.8em] opacity-40 italic">
                     {stat.l}
                  </div>
               </div>
             ))}
          </div>

          <div className="pt-12 flex flex-col md:flex-row justify-center gap-8">
             <button className="px-16 py-8 bg-white text-black font-black text-3xl uppercase italic hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
                [ ACCESS_VAULT ]
             </button>
             <button className="px-16 py-8 border-4 border-white text-white font-black text-3xl uppercase italic hover:bg-white hover:text-black transition-all">
                [ VIEW_CREDITS ]
             </button>
          </div>
       </div>
       
       <div className="absolute bottom-8 left-8 right-8 flex justify-between text-[10px] font-black uppercase italic opacity-20 tracking-widest">
          <span>AI_ORCHESTRATOR_v5.0_FINAL_BUILD</span>
          <span>© 2026 UIX STUDIO PRO</span>
       </div>
    </div>
  )
};

