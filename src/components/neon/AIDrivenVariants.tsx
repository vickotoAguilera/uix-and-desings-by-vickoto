"use client";

import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Bot, 
  Sparkles, 
  Command, 
  MessageSquare, 
  Cpu, 
  Zap, 
  Shield, 
  Activity, 
  Layers,
  Search,
  Code,
  Terminal,
  Database,
  Link2,
  GitBranch,
  Eye,
  Settings,
  User,
  MoreHorizontal,
  Users,
  ArrowRight,
  ArrowUpRight,
  Workflow,
  BarChart,
  PieChart,
  Lock,
  Cloud,
  Server,
  Repeat,
  Play,
  Trash,
  Info,
  ChevronDown
} from 'lucide-react';

export const AIDrivenVariants = {
  // 1. CritiqueTheaterStage: Visual theater for AI feedback
  CritiqueTheaterStage: () => {
    const [activeAgent, setActiveAgent] = useState(0);
    const agents = [
      { name: "Logic_Core", role: "Verifier", color: "blue" },
      { name: "Creative_Mind", role: "Expander", color: "purple" },
      { name: "Security_Audit", role: "Filter", color: "red" },
      { name: "UX_Expert", role: "Refiner", color: "emerald" }
    ];

    return (
      <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-16 font-sans flex items-center justify-center overflow-hidden">
        <div className="max-w-6xl w-full space-y-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest">
              <Eye size={14} />
              <span>Critique_Theater_v1.0</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
              AGENTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">DEBATING.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            {/* Theater Stage */}
            <div className="lg:col-span-8 bg-zinc-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-xl space-y-8 min-h-[500px] flex flex-col">
              <div className="flex justify-between items-center border-b border-white/5 pb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40">PROMPT: "Architecture for a distributed AI system"</div>
              </div>

              <div className="flex-1 flex items-center justify-center relative">
                {agents.map((agent, i) => (
                  <div 
                    key={i}
                    className={`absolute transition-all duration-700 ease-out transform ${
                      activeAgent === i 
                        ? "scale-110 opacity-100 z-20" 
                        : "scale-90 opacity-40 z-10"
                    }`}
                    style={{
                      left: `${20 + i * 20}%`,
                      transform: activeAgent === i ? 'translateY(-20px)' : 'translateY(0)'
                    }}
                  >
                    <div className={`p-6 rounded-3xl bg-${agent.color}-500/10 border border-${agent.color}-500/30 flex flex-col items-center gap-4 shadow-[0_0_40px_rgba(0,0,0,0.3)]`}>
                      <div className={`p-4 bg-${agent.color}-500 rounded-2xl text-black`}>
                        <Bot size={32} />
                      </div>
                      <div className="text-center">
                        <div className="font-black text-sm">{agent.name}</div>
                        <div className={`text-[10px] font-bold text-${agent.color}-400 uppercase`}>{agent.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-black/40 border border-white/5 p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-center text-xs font-black">
                  <span className={`text-${agents[activeAgent].color}-400 uppercase tracking-widest`}>{agents[activeAgent].name} IS SPEAKING...</span>
                  <span className="text-white/20">SENTIMENT: ANALYTICAL</span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed italic">
                  "The proposed architecture is robust, but we need to consider the latency implications of the cross-region replication strategy..."
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-xl space-y-6">
                <div className="text-xs font-black uppercase tracking-widest text-white/40 border-b border-white/5 pb-4">Agent_Controls</div>
                <div className="space-y-4">
                  {agents.map((agent, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveAgent(i)}
                      className={`w-full p-4 rounded-2xl border transition-all flex items-center justify-between group ${
                        activeAgent === i 
                          ? `bg-${agent.color}-500/20 border-${agent.color}-500/50 text-white` 
                          : "bg-white/5 border-white/5 text-white/40 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-${agent.color}-500 flex items-center justify-center text-black`}>
                          <Bot size={16} />
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-black">{agent.name}</div>
                          <div className="text-[10px] opacity-60">{agent.role}</div>
                        </div>
                      </div>
                      <div className={`w-2 h-2 rounded-full bg-${agent.color}-500 ${activeAgent === i ? 'animate-pulse' : 'opacity-0'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.2em] rounded-3xl transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3">
                <Zap size={20} />
                <span>Synchronize_All</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  // 2. AgentOrchestratorGrid: Dashboard for multiple agents
  AgentOrchestratorGrid: () => (
    <div className="w-full min-h-screen bg-[#080808] text-white p-8 md:p-16 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-[0.6em] text-emerald-500">System_Control_Center</div>
            <h1 className="text-6xl md:text-8xl font-black leading-none uppercase tracking-tighter italic">
              ORCHESTRATOR.
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-zinc-900 border border-white/10 rounded-2xl flex items-center gap-4">
              <div className="text-right">
                <div className="text-[10px] font-black text-white/40 uppercase">Global_Uptime</div>
                <div className="text-xl font-black">99.98%</div>
              </div>
              <Activity className="text-emerald-500 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Grid */}
          {[
            { name: "Researcher_Alpha", status: "Active", task: "Web Scraping", color: "blue" },
            { name: "Writer_Beta", status: "Thinking", task: "Content Draft", color: "purple" },
            { name: "Coder_Gamma", status: "Idle", task: "Refactoring", color: "emerald" },
            { name: "Reviewer_Delta", status: "Active", task: "Quality Check", color: "amber" }
          ].map((agent, i) => (
            <div key={i} className="md:col-span-3 bg-zinc-900/50 border border-white/10 rounded-3xl p-8 space-y-6 hover:border-white/20 transition-all group">
              <div className="flex justify-between items-start">
                <div className={`p-4 bg-${agent.color}-500 rounded-2xl text-black`}>
                  <Bot size={24} />
                </div>
                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                  agent.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 
                  agent.status === 'Thinking' ? 'bg-blue-500/20 text-blue-400 animate-pulse' : 
                  'bg-white/5 text-white/40'
                }`}>
                  {agent.status}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-black uppercase italic tracking-tight">{agent.name}</div>
                <div className="text-xs text-white/40 font-medium">{agent.task}</div>
              </div>
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/20">
                  <span>Confidence</span>
                  <span>94%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full w-[94%] bg-${agent.color}-500`} />
                </div>
              </div>
            </div>
          ))}

          {/* Large Monitoring Section */}
          <div className="md:col-span-8 bg-zinc-900/50 border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between min-h-[400px]">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="text-xs font-black uppercase tracking-widest text-white/40 italic">Live_Inference_Stream</div>
                <div className="text-3xl font-black uppercase italic">Neural_Load: 1.4M OPS</div>
              </div>
              <Cpu className="text-white/20" size={40} />
            </div>
            
            <div className="flex-1 flex items-end gap-2 py-12">
              {Array.from({ length: 40 }).map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-white/5 hover:bg-blue-500/40 transition-all rounded-full"
                  style={{ height: `${Math.random() * 60 + 20}%` }}
                />
              ))}
            </div>

            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
              <span>* NODE_01_CONNECTED</span>
              <span>* SYNC_STATUS: STABLE</span>
              <span>* 2026.05.21_T17:45</span>
            </div>
          </div>

          <div className="md:col-span-4 bg-blue-600 rounded-[3rem] p-10 flex flex-col justify-between text-white shadow-2xl shadow-blue-500/20">
            <div className="space-y-2">
              <div className="text-xs font-black uppercase tracking-widest opacity-60 italic">Next_Update</div>
              <div className="text-5xl font-black uppercase italic leading-none">GPT-5 <br /> Integration.</div>
            </div>
            <button className="w-full py-4 bg-white text-blue-600 font-black uppercase rounded-2xl hover:scale-105 transition-all">
              Initialize_Update
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // 3. NeuralNetworkFlow: Animated nodes and connections
  NeuralNetworkFlow: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white flex items-center justify-center p-8 overflow-hidden font-sans relative">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 text-purple-400 font-black text-sm uppercase tracking-widest italic">
            <Brain size={18} />
            <span>Neural_Architecture_v4</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter uppercase italic">
            BRAIN <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">MAPPING.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-medium max-w-md leading-relaxed italic">
            Visualizing the complex synaptic pathways of artificial consciousness in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="px-12 py-5 bg-purple-600 text-white rounded-3xl font-black text-xl shadow-2xl shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all uppercase italic">
              Explore_Layers
            </button>
            <button className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-3xl font-black text-xl hover:bg-white/10 transition-all uppercase italic">
              Export_Nodes
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-20 bg-purple-500/10 blur-[120px] rounded-full animate-pulse" />
          <div className="relative aspect-square bg-zinc-900/50 backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-center border-b border-white/10 pb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500 animate-ping" />
                <div className="text-xs font-black uppercase tracking-widest">LIVE_NEURAL_ACTIVITY</div>
              </div>
              <Activity className="text-purple-400" size={24} />
            </div>

            <div className="flex-1 flex items-center justify-center relative">
              {/* Simulated Neural Nodes */}
              <div className="absolute inset-0">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)] animate-pulse"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
                {/* Simulated Connections */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                  <path d="M 50 50 L 150 150 M 150 150 L 250 50 M 250 50 L 350 150" stroke="currentColor" className="text-purple-500" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <div className="text-center space-y-2 relative z-10">
                <div className="text-6xl font-black uppercase italic tracking-tighter">84.2B</div>
                <div className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Parameters_Active</div>
              </div>
            </div>

            <div className="bg-black/40 border border-white/5 p-6 rounded-3xl flex justify-between items-center group-hover:bg-purple-500/10 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500 text-black rounded-2xl shadow-xl shadow-purple-500/20">
                  <Database size={20} />
                </div>
                <div>
                  <div className="text-sm font-black uppercase italic">Synaptic_Buffer</div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest italic">Optimizing_Flow</div>
                </div>
              </div>
              <Zap size={24} className="text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // 4. AIPanelistLane: Scrolling row of AI avatars with status
  AIPanelistLane: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-16 font-sans flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full space-y-20">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-black uppercase tracking-widest">
            <Users size={14} />
            <span>Expert_Panel_v2</span>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase italic leading-[0.7]">
            MEET THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">EXPERTS.</span>
          </h1>
        </div>

        <div className="relative group">
          <div className="absolute -inset-10 bg-emerald-500/5 blur-[100px] pointer-events-none" />
          <div className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar">
            {[
              { name: "Socrates_AI", role: "Philosophy", status: "Active", color: "emerald" },
              { name: "Newton_AI", role: "Physics", status: "Computing", color: "blue" },
              { name: "Ada_AI", role: "Algorithms", status: "Idle", color: "purple" },
              { name: "DaVinci_AI", role: "Art/Design", status: "Active", color: "amber" },
              { name: "Tesla_AI", role: "Energy", status: "Computing", color: "cyan" },
              { name: "Curie_AI", role: "Chemistry", status: "Active", color: "rose" }
            ].map((panelist, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-80 snap-center bg-zinc-900/50 border border-white/10 rounded-[3rem] p-10 space-y-8 hover:border-emerald-500/50 transition-all group/card cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className={`w-20 h-20 rounded-[2rem] bg-${panelist.color}-500 flex items-center justify-center text-black shadow-xl shadow-${panelist.color}-500/20 transform group-hover/card:rotate-12 transition-transform`}>
                    <Bot size={40} />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                    panelist.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-white/40'
                  }`}>
                    {panelist.status}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-black uppercase italic tracking-tight">{panelist.name}</div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest italic">{panelist.role}</div>
                </div>
                <div className="p-6 bg-black/40 rounded-3xl border border-white/5 space-y-4">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/20">Specialization</div>
                  <div className="flex flex-wrap gap-2">
                    {["Logic", "Synthesis", "History"].map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-white/5 rounded-full text-[8px] font-black uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-12 text-xs font-black uppercase tracking-[0.5em] text-white/20 italic">
          <span>* TOTAL_AGENTS: 24</span>
          <span>* AVG_LATENCY: 42MS</span>
          <span>* SYNC: ENABLED</span>
        </div>
      </div>
    </div>
  ),

  // 5. LivePromptBuilder: Visual blocks for building prompts
  LivePromptBuilder: () => {
    const [blocks, setBlocks] = useState([
      { type: "Role", text: "Senior Architect", color: "blue" },
      { type: "Task", text: "Optimize Database", color: "purple" },
      { type: "Constraint", text: "Under 200ms", color: "red" }
    ]);

    return (
      <div className="w-full min-h-screen bg-[#020202] text-white p-8 md:p-16 font-mono flex items-center justify-center">
        <div className="max-w-5xl w-full space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.5em] text-white/40">
              <div className="h-[2px] w-12 bg-white/40" />
              <span>Prompt_Orchestrator_v4</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
              BUILDER <br /> <span className="underline decoration-4 underline-offset-8">INTERFACE.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Builder Area */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-zinc-900/50 border-2 border-dashed border-white/10 rounded-3xl p-10 min-h-[300px] flex flex-wrap gap-4 items-center content-center relative">
                <div className="absolute top-4 left-6 text-[10px] font-black uppercase tracking-widest text-white/20 italic">Drop_Zone_A</div>
                {blocks.map((block, i) => (
                  <div 
                    key={i}
                    className={`px-6 py-4 bg-${block.color}-500 text-black font-black uppercase italic rounded-2xl shadow-xl shadow-${block.color}-500/10 flex items-center gap-4 animate-in zoom-in-50 duration-300`}
                  >
                    <div className="flex flex-col">
                      <span className="text-[8px] opacity-40 leading-none">{block.type}</span>
                      <span className="text-sm leading-none">{block.text}</span>
                    </div>
                    <Code size={16} className="opacity-40" />
                  </div>
                ))}
                <div className="px-6 py-4 border-2 border-dashed border-white/10 rounded-2xl text-white/20 font-black text-sm uppercase italic cursor-pointer hover:border-white/30 transition-all">
                  + Add_Module
                </div>
              </div>

              <div className="bg-black border-2 border-white/10 rounded-3xl p-8 space-y-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Compiled_Prompt_Preview</div>
                <p className="text-lg text-white/80 leading-relaxed italic">
                  {`"`}As a <span className="text-blue-400 font-black underline">Senior Architect</span>, your task is to <span className="text-purple-400 font-black underline">Optimize the Database</span> with the constraint that all queries must run <span className="text-red-400 font-black underline">Under 200ms</span>.{`"`}
                </p>
              </div>
            </div>

            {/* Sidebar Controls */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 space-y-6">
                <div className="text-xs font-black uppercase tracking-widest text-white/40 border-b border-white/5 pb-4">Templates</div>
                <div className="space-y-3">
                  {["Creative_Writing", "System_Audit", "Data_Analysis"].map((t, i) => (
                    <button key={i} className="w-full p-4 bg-white/5 border border-white/5 rounded-2xl text-xs font-black uppercase text-white/60 text-left hover:bg-white/10 transition-all flex justify-between items-center group">
                      <span>{t}</span>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full py-6 bg-white text-black font-black uppercase italic rounded-3xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                <Zap size={20} />
                <span>Execute_Prompt</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  // 6. AgentThoughtBubble: Animated thought bubbles for AI agents
  AgentThoughtBubble: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-16 font-sans flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl w-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        
        <div className="space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-white/40 text-[10px] font-black uppercase tracking-widest">
              <Brain size={14} />
              <span>Inference_Visualizer_v1</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">THOUGHT <span className="text-purple-500">STREAMS.</span></h1>
          </div>

          <div className="relative h-[400px]">
            {[
              { text: "Optimizing vectors...", delay: "0s", pos: "top-0 left-0", size: "text-lg", color: "purple" },
              { text: "Analyzing context...", delay: "1s", pos: "top-20 right-0", size: "text-2xl", color: "blue" },
              { text: "Calculating probability...", delay: "0.5s", pos: "bottom-10 left-20", size: "text-xl", color: "emerald" },
              { text: "Synthesizing response...", delay: "1.5s", pos: "bottom-0 right-10", size: "text-3xl", color: "rose" }
            ].map((bubble, i) => (
              <div 
                key={i}
                className={`absolute ${bubble.pos} p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl animate-float group hover:bg-white/10 transition-all cursor-pointer`}
                style={{ animationDelay: bubble.delay }}
              >
                <div className="flex flex-col gap-2">
                  <div className={`w-2 h-2 rounded-full bg-${bubble.color}-500 animate-ping`} />
                  <div className={`${bubble.size} font-black uppercase italic tracking-tight text-white/80 group-hover:text-white transition-colors`}>
                    {bubble.text}
                  </div>
                </div>
              </div>
            ))}
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 bg-purple-600 rounded-[3rem] text-black shadow-2xl shadow-purple-500/20 z-20">
               <Bot size={64} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // 7. MultiAgentChat: Advanced chat interface with agent tagging
  MultiAgentChat: () => {
    const [activeTab, setActiveTab] = useState('All');
    
    return (
      <div className="w-full min-h-screen bg-[#080808] text-white p-8 md:p-16 font-sans">
        <div className="max-w-6xl mx-auto h-[800px] bg-zinc-900/50 border border-white/10 rounded-[3rem] overflow-hidden flex flex-col shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="p-8 border-b border-white/5 flex justify-between items-center bg-black/20">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500 rounded-2xl text-black">
                <MessageSquare size={24} />
              </div>
              <div>
                <div className="text-xl font-black uppercase italic tracking-tight">ORCHESTRATED_CHAT</div>
                <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Session_ID: 0x4F2A...</div>
              </div>
            </div>
            <div className="flex gap-2">
              {['All', 'Logic', 'Creative', 'Audit'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeTab === tab ? 'bg-white text-black' : 'bg-white/5 text-white/40 hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
            {[
              { agent: "System", text: "Multi-agent session initialized. Welcome, Administrator.", type: "system" },
              { agent: "Researcher", text: "I have identified three potential vulnerabilities in the current smart contract implementation.", type: "agent", color: "blue" },
              { agent: "Developer", text: "Acknowledged. Researcher, please provide the specific line numbers for the audit.", type: "agent", color: "purple" },
              { agent: "Auditor", text: "Scanning for cross-contract re-entrancy risks... Scan complete: 0 risks found.", type: "agent", color: "emerald" }
            ].map((msg, i) => (
              <div key={i} className={`flex gap-6 ${msg.type === 'system' ? 'justify-center opacity-40' : ''}`}>
                {msg.type === 'agent' && (
                  <div className={`w-12 h-12 rounded-2xl bg-${msg.color}-500 flex-shrink-0 flex items-center justify-center text-black`}>
                    <Bot size={24} />
                  </div>
                )}
                <div className={`space-y-2 ${msg.type === 'system' ? 'text-center' : ''}`}>
                  {msg.type === 'agent' && (
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-black uppercase italic text-${msg.color}-400`}>{msg.agent}</span>
                      <span className="text-[10px] text-white/20">17:45:02</span>
                    </div>
                  )}
                  <div className={`p-6 rounded-3xl text-sm leading-relaxed ${
                    msg.type === 'system' ? 'bg-transparent' : 'bg-white/5 border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-8 border-t border-white/5 bg-black/20">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Message @Researcher or @Developer..."
                className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-8 py-5 text-sm font-medium focus:outline-none focus:border-blue-500/50 transition-all italic"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                <button className="p-3 bg-white/5 text-white/40 rounded-xl hover:text-white transition-all">
                  <Link2 size={18} />
                </button>
                <button className="px-6 bg-blue-600 text-white font-black uppercase text-xs rounded-xl hover:bg-blue-500 transition-all">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  // 8. ModelComparisonView: Split view for comparing AI outputs
  ModelComparisonView: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-16 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-black uppercase tracking-widest">
              <Layers size={14} />
              <span>Comparative_Analysis_v3</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
              MODEL <span className="text-white/20">VS</span> MODEL.
            </h1>
          </div>
          <button className="px-10 py-5 bg-white text-black font-black uppercase italic rounded-3xl hover:scale-105 transition-all">
            New_Benchmark
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { model: "GPT-4o", provider: "OpenAI", color: "emerald", score: 98, text: "The solution involves a complex orchestration of microservices using Kubernetes..." },
            { model: "Claude 3.5 Sonnet", provider: "Anthropic", color: "amber", score: 99, text: "For this specific use case, a serverless architecture would provide better scalability..." }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900/50 border border-white/10 rounded-[3rem] p-10 space-y-8 flex flex-col hover:border-white/20 transition-all group">
              <div className="flex justify-between items-center border-b border-white/5 pb-8">
                <div className="flex items-center gap-4">
                  <div className={`p-4 bg-${item.color}-500 rounded-2xl text-black`}>
                    <Zap size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-black uppercase italic tracking-tight">{item.model}</div>
                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest italic">{item.provider}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-4xl font-black text-${item.color}-400`}>{item.score}</div>
                  <div className="text-[8px] font-black uppercase tracking-widest text-white/20">Benchmark_Score</div>
                </div>
              </div>

              <div className="flex-1 bg-black/40 border border-white/5 rounded-3xl p-8 space-y-6">
                <div className="text-[10px] font-black uppercase tracking-widest text-white/20">Response_Output</div>
                <p className="text-lg leading-relaxed italic text-white/80">
                  {item.text}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { label: "Speed", value: "85ms" },
                  { label: "Tokens", value: "1.2k" },
                  { label: "Cost", value: "$0.01" }
                ].map((stat, j) => (
                  <div key={j} className="text-center p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="text-[8px] font-black uppercase text-white/20 mb-1">{stat.label}</div>
                    <div className="text-sm font-black italic">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // 9. AIStatusDashboard: Stats about tokens, latency, and models
  AIStatusDashboard: () => (
    <div className="w-full min-h-screen bg-[#080808] text-white p-8 md:p-16 font-mono">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-end border-b-4 border-white pb-8">
          <div className="space-y-2">
            <div className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Inference_Analytics_v1.2</div>
            <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter">AI_METRICS.</h1>
          </div>
          <div className="text-right space-y-2 hidden md:block">
            <div className="px-6 py-2 bg-emerald-500 text-black font-black uppercase text-xs">
              STATUS: NOMINAL_LOAD
            </div>
            <div className="text-[10px] opacity-40 uppercase tracking-widest">LAST_SYNC: 0.04s AGO</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3 space-y-8">
            <div className="p-8 border-2 border-white/10 bg-zinc-900/50 space-y-8">
              <div className="text-xs font-black uppercase tracking-widest border-b border-white/10 pb-4">Token_Usage</div>
              <div className="space-y-6">
                <div className="space-y-1">
                  <div className="text-3xl font-black italic">4.2M</div>
                  <div className="text-[10px] uppercase opacity-40 font-black tracking-widest">Total_Input</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-black italic text-emerald-500">12.8M</div>
                  <div className="text-[10px] uppercase opacity-40 font-black tracking-widest">Total_Output</div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-sm font-black italic">$1,420.42</div>
                  <div className="text-[10px] uppercase opacity-40 font-black tracking-widest italic">Estimated_Cost</div>
                </div>
              </div>
            </div>
            <button className="w-full py-5 bg-white text-black font-black uppercase italic text-sm hover:invert transition-all">
              [ DOWNLOAD_REPORT ]
            </button>
          </div>

          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 p-10 border-2 border-white/10 bg-zinc-900/50 space-y-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Settings size={40} /></div>
              <div className="text-xs font-black uppercase tracking-widest border-b border-white/10 pb-4">Latency_Graph_24H</div>
              <div className="h-48 w-full flex items-end gap-2 border-b-2 border-white/10 pb-2">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-white/10 hover:bg-emerald-500 transition-all cursor-pointer relative group" style={{ height: `${Math.random() * 80 + 20}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black px-1 text-[8px] font-black opacity-0 group-hover:opacity-100 transition-opacity">
                      {Math.floor(Math.random() * 100)}ms
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-1">
                  <div className="text-2xl font-black italic">142ms</div>
                  <div className="text-[10px] uppercase opacity-40 font-black">P95_LATENCY</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-black italic">42ms</div>
                  <div className="text-[10px] uppercase opacity-40 font-black">MIN_LATENCY</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-black italic">99.9%</div>
                  <div className="text-[10px] uppercase opacity-40 font-black">RELIABILITY</div>
                </div>
              </div>
            </div>

            <div className="p-10 border-2 border-white/10 bg-zinc-900/50 space-y-10">
              <div className="text-xs font-black uppercase tracking-widest border-b border-white/10 pb-4">Model_Health</div>
              <div className="space-y-8">
                {['GPT-4o', 'Claude-3.5', 'Llama-3'].map((model, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between text-xs font-black italic uppercase">
                      <span>{model}</span>
                      <span className="text-emerald-500">HEALTHY</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10"><div className="h-full w-full bg-white" /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // 10. PromptHistoryTimeline: Vertical timeline of interactions
  PromptHistoryTimeline: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-16 font-sans">
      <div className="max-w-4xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-white/40 text-[10px] font-black uppercase tracking-widest">
            <Activity size={14} />
            <span>Interaction_Log_v4</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">HISTORY <span className="text-blue-500">FLOW.</span></h1>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {[
            { time: "17:45", title: "Project Initialized", desc: "AI agent started new project scope analysis.", type: "start", color: "blue" },
            { time: "17:50", title: "Logic Check", desc: "Researcher agent identified 2 critical errors in schema.", type: "check", color: "emerald" },
            { time: "18:05", title: "Creative Phase", desc: "Design agent proposed 5 new visual variants.", type: "design", color: "purple" },
            { time: "18:30", title: "Final Review", desc: "Administrator approved the current build.", type: "approve", color: "amber" }
          ].map((item, i) => (
            <div key={i} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-zinc-950 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className={`w-3 h-3 rounded-full bg-${item.color}-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]`} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900/50 border border-white/10 p-8 rounded-[2.5rem] shadow-xl hover:border-white/20 transition-all cursor-pointer">
                <div className="flex items-center justify-between space-x-2 mb-2">
                  <div className={`font-black uppercase italic text-${item.color}-400`}>{item.title}</div>
                  <time className="font-mono text-[10px] font-bold text-white/20">{item.time}</time>
                </div>
                <div className="text-sm text-white/60 leading-relaxed italic">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-12">
          <button className="px-12 py-5 border-2 border-white/10 hover:border-white text-white/40 hover:text-white font-black uppercase italic tracking-widest text-xs transition-all rounded-3xl">
            [ LOAD_FULL_ARCHIVE ]
          </button>
        </div>
      </div>
    </div>
  ),

  // 11. AgentChainWorkflow: Visualizing agent-to-agent logic
  AgentChainWorkflow: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-16 font-sans flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full space-y-16 relative">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-white/40 text-[10px] font-black uppercase tracking-widest">
            <Workflow size={14} />
            <span>Workflow_Engine_v2.0</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">CHAIN <span className="text-blue-500">REACTION.</span></h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          {[
            { name: "Parser", task: "Input Analysis", color: "blue" },
            { name: "Logic", task: "Decision Making", color: "purple" },
            { name: "Executor", task: "Action Run", color: "emerald" },
            { name: "Validator", task: "Quality Check", color: "amber" }
          ].map((node, i) => (
            <React.Fragment key={i}>
              <div className="relative group">
                <div className={`absolute -inset-4 bg-${node.color}-500/10 blur-xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative p-8 bg-zinc-900/50 border border-white/10 rounded-[2rem] w-64 space-y-6 hover:border-white/20 transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-${node.color}-500 flex items-center justify-center text-black shadow-xl shadow-${node.color}-500/20`}>
                    <Bot size={24} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xl font-black uppercase italic tracking-tight">{node.name}</div>
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest italic">{node.task}</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full w-3/4 bg-${node.color}-500 animate-pulse`} />
                    </div>
                  </div>
                </div>
              </div>
              {i < 3 && (
                <div className="hidden md:flex items-center text-white/10">
                  <ArrowRight size={32} className="animate-pulse" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 backdrop-blur-xl">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <Activity className="text-blue-400" size={24} />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-white/40 italic">Chain_Status</div>
              <div className="text-xl font-black uppercase italic">Processing_Cycle: 42ms</div>
            </div>
          </div>
          <button className="px-10 py-4 bg-white text-black font-black uppercase italic rounded-2xl hover:scale-105 transition-all shadow-xl">
            [ RUN_FULL_SYNC ]
          </button>
        </div>
      </div>
    </div>
  ),

  // 12. TokenCostEstimator: Financial dashboard for AI usage
  TokenCostEstimator: () => (
    <div className="w-full min-h-screen bg-[#020202] text-white p-8 md:p-16 font-mono flex items-center justify-center">
      <div className="max-w-5xl w-full space-y-12">
        <div className="flex justify-between items-end border-b border-white/10 pb-8">
          <div className="space-y-2">
            <div className="text-xs font-black uppercase tracking-[0.4em] text-white/40 italic">Financial_Module_v1</div>
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">TOKEN_ECONOMY.</h1>
          </div>
          <div className="text-right">
             <div className="text-3xl font-black text-emerald-500">$0.0024</div>
             <div className="text-[10px] uppercase opacity-40 font-black tracking-widest italic">AVG_COST_PER_REQ</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Daily_Spend", value: "$42.08", trend: "+12%", color: "blue" },
            { label: "Token_Burn", value: "1.4M", trend: "-5%", color: "purple" },
            { label: "Efficiency", value: "98.2%", trend: "STABLE", color: "emerald" }
          ].map((stat, i) => (
            <div key={i} className="p-8 bg-zinc-900/50 border border-white/10 rounded-3xl space-y-6 hover:bg-white/5 transition-all group">
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">{stat.label}</div>
              <div className="text-4xl font-black italic">{stat.value}</div>
              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <span className={`text-[10px] font-black italic text-${stat.color}-400`}>{stat.trend}</span>
                <BarChart size={16} className="opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] space-y-8">
          <div className="flex justify-between items-center">
            <div className="text-xs font-black uppercase tracking-widest italic">Model_Price_Index</div>
            <div className="flex gap-4">
               <button className="px-4 py-1 bg-white text-black text-[10px] font-black uppercase italic">JSON</button>
               <button className="px-4 py-1 border border-white/10 text-[10px] font-black uppercase italic opacity-40">CSV</button>
            </div>
          </div>
          <div className="space-y-4">
            {['GPT-4o', 'Claude-3', 'Llama-3'].map((model, i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 group hover:bg-white/5 px-4 transition-all cursor-pointer">
                <span className="font-black italic uppercase text-lg">{model}</span>
                <div className="flex gap-12 text-sm font-black italic">
                   <span className="text-white/40">$0.01 / 1k</span>
                   <span className="text-emerald-500">LIVE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),

  // 13. AITrainingMonitor: Training progress dashboard
  AITrainingMonitor: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-24 font-sans flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        <div className="lg:col-span-5 space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[10px] font-black uppercase tracking-widest">
            <Repeat size={14} />
            <span>Training_Cycle_84</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter italic leading-[0.8]">
            EPOCH <br /> <span className="text-purple-500">SHIFT.</span>
          </h1>
          <p className="text-xl text-white/40 font-medium italic leading-relaxed max-w-sm">
            Monitoring weight updates and loss convergence in real-time across the cluster.
          </p>
          <div className="flex gap-6">
            <button className="p-6 bg-purple-600 rounded-3xl text-white shadow-2xl shadow-purple-500/20 hover:scale-110 transition-all">
              <Play size={32} />
            </button>
            <button className="px-10 py-6 border-2 border-white/10 rounded-3xl font-black uppercase italic text-lg hover:bg-white/10 transition-all">
              View_Logs
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 bg-zinc-900/50 border border-white/10 rounded-[4rem] p-12 space-y-12 relative overflow-hidden backdrop-blur-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10"><Cpu size={48} /></div>
          
          <div className="space-y-6">
            <div className="text-xs font-black uppercase tracking-widest text-white/40 border-b border-white/5 pb-4">Loss_Convergence</div>
            <div className="h-48 w-full flex items-end gap-1 pb-2 border-b-2 border-white/10">
              {Array.from({ length: 40 }).map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-purple-500/20 hover:bg-purple-500 transition-all cursor-pointer"
                  style={{ height: `${100 - (i * 2) - Math.random() * 10}%` }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bg-black/40 border border-white/5 rounded-3xl space-y-2">
              <div className="text-[10px] font-black uppercase text-white/20">Learning_Rate</div>
              <div className="text-4xl font-black italic">0.00042</div>
            </div>
            <div className="p-8 bg-black/40 border border-white/5 rounded-3xl space-y-2">
              <div className="text-[10px] font-black uppercase text-white/20">Val_Accuracy</div>
              <div className="text-4xl font-black italic text-emerald-500">94.8%</div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/20 italic">
             <span>* CLUSTER_01: ONLINE</span>
             <span>* CUDA_CORES: 10,240</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // 14. PromptOptimizerLab: Tool for fine-tuning prompts
  PromptOptimizerLab: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-16 font-mono flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-10 space-y-10">
            <div className="space-y-2">
              <div className="text-xs font-black uppercase tracking-widest text-blue-500 italic">Optimization_Lab</div>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter">LAB_v4.</h2>
            </div>
            <div className="space-y-6">
               {['Context_Inject', 'Chain_of_Thought', 'Few_Shot_Boost'].map((opt, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-2xl group cursor-pointer hover:border-blue-500/50 transition-all">
                    <span className="text-xs font-black uppercase italic">{opt}</span>
                    <div className="w-4 h-4 rounded-full border-2 border-white/20 group-hover:border-blue-500 transition-colors" />
                 </div>
               ))}
            </div>
            <button className="w-full py-5 bg-blue-600 text-white font-black uppercase italic rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-105 transition-all">
               [ RE-OPTIMIZE ]
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-8">
           <div className="flex-1 bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Zap size={48} /></div>
              <div className="text-xs font-black uppercase tracking-widest text-white/40 italic">Prompt_Engine_Output</div>
              <div className="bg-black/80 border border-white/5 p-8 rounded-3xl font-medium text-lg leading-relaxed italic text-white/70">
                {`"`}Analyze the <span className="text-blue-400 font-black">Architecture</span> with a <span className="text-purple-400 font-black">Security-First</span> mindset. Identify potential <span className="text-rose-400 font-black">Vulnerabilities</span> and suggest <span className="text-emerald-400 font-black">Mitigations</span>...{`"`}
              </div>
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                 <span>Score: 94/100</span>
                 <span>Complexity: High</span>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-zinc-900/50 border border-white/10 rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-all">
                 <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase text-white/20">A/B_Test_Active</div>
                    <div className="text-2xl font-black italic uppercase">Variant_B</div>
                 </div>
                 <ChevronDown size={24} className="opacity-20 group-hover:opacity-100" />
              </div>
              <div className="p-8 bg-zinc-900/50 border border-white/10 rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-rose-500/10 transition-all">
                 <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase text-white/20">Clear_History</div>
                    <div className="text-2xl font-black italic uppercase">Purge</div>
                 </div>
                 <Trash size={24} className="opacity-20 group-hover:opacity-100 text-rose-500" />
              </div>
           </div>
        </div>
      </div>
    </div>
  ),

  // 15. AgentRoleSelector: UI for configuring agent behaviors
  AgentRoleSelector: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-16 font-sans flex items-center justify-center">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-white/40 text-[10px] font-black uppercase tracking-widest">
            <User size={14} />
            <span>Persona_Config_v3</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">AGENT <span className="text-emerald-500">ROLES.</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { role: "The_Critic", desc: "Hard logic, no fluff.", color: "blue" },
            { role: "The_Muse", desc: "Creative & abstract.", color: "purple" },
            { role: "The_Guard", desc: "Security & compliance.", color: "rose" },
            { role: "The_Sage", desc: "Vast knowledge base.", color: "amber" }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-10 space-y-8 hover:border-emerald-500/50 transition-all group cursor-pointer flex flex-col justify-between h-[400px]">
              <div className="space-y-6">
                 <div className={`w-20 h-20 rounded-3xl bg-${item.color}-500 flex items-center justify-center text-black shadow-2xl shadow-${item.color}-500/20 group-hover:scale-110 transition-transform`}>
                    <Bot size={40} />
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase italic tracking-tight">{item.role}</h3>
                    <p className="text-sm text-white/40 font-medium italic">{item.desc}</p>
                 </div>
              </div>
              <button className={`w-full py-4 border border-${item.color}-500/50 text-${item.color}-400 font-black uppercase italic text-xs rounded-xl hover:bg-${item.color}-500 hover:text-black transition-all`}>
                 [ ACTIVATE ]
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // 16. VectorSearchVisualizer: Visualizing semantic search in vector DB
  VectorSearchVisualizer: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 font-mono flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative">
        <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="space-y-12 relative z-10">
          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.5em] text-white/40">
            <div className="h-[2px] w-12 bg-white/40" />
            <span>Semantic_Engine_v1</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black leading-[0.7] tracking-tighter uppercase italic">
            VECTOR <br /> <span className="text-blue-500">SEARCH.</span>
          </h1>
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] space-y-6">
             <div className="flex items-center gap-4 text-blue-400">
                <Search size={24} />
                <span className="text-xl font-black uppercase italic tracking-tight">Query: "Distributed Systems"</span>
             </div>
             <p className="text-sm text-white/40 font-medium italic">Searching through 4.2M embeddings in 1,536 dimensions.</p>
          </div>
        </div>

        <div className="relative aspect-square bg-zinc-900/50 border border-white/10 rounded-[4rem] p-12 flex items-center justify-center group overflow-hidden shadow-2xl">
           <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           
           <div className="relative w-full h-full flex items-center justify-center">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 bg-blue-500 rounded-full animate-ping"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
              <div className="p-12 bg-blue-600 rounded-full shadow-[0_0_100px_rgba(59,130,246,0.5)] z-10 group-hover:scale-110 transition-transform">
                 <Database size={64} className="text-white" />
              </div>
           </div>

           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest italic text-white/40">
              SIMILARITY_SCORE: 0.9842
           </div>
        </div>
      </div>
    </div>
  ),

  // 17. AISentimentMap: Map showing sentiment distribution
  AISentimentMap: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-16 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12">
           <div className="space-y-4">
              <div className="text-xs font-black uppercase tracking-[0.6em] text-rose-500 italic">Sentiment_Analysis_Realtime</div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">SENTIMENT <span className="text-white/20">HEAT.</span></h1>
           </div>
           <div className="flex gap-4">
              <div className="px-6 py-3 bg-zinc-900 border border-white/10 rounded-2xl flex items-center gap-4">
                 <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse" />
                 <span className="text-sm font-black italic uppercase">Live_Inference</span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-8 bg-zinc-900/50 border border-white/10 rounded-[3rem] p-12 min-h-[500px] relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 flex flex-wrap gap-1 pointer-events-none">
                 {Array.from({ length: 400 }).map((_, i) => (
                   <div key={i} className={`w-8 h-8 rounded-sm bg-${Math.random() > 0.5 ? 'rose' : 'emerald'}-500`} style={{ opacity: Math.random() }} />
                 ))}
              </div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                 <div className="flex justify-between items-start">
                    <div className="space-y-1">
                       <div className="text-[10px] font-black uppercase text-white/20 italic">Global_Mood_Index</div>
                       <div className="text-4xl font-black italic uppercase">Positive_Shift</div>
                    </div>
                    <Activity size={32} className="text-emerald-500" />
                 </div>
                 <div className="flex justify-around items-end h-64 border-b border-white/10 pb-4">
                    {[30, 45, 60, 80, 55, 40, 75, 90, 65, 50].map((h, i) => (
                      <div key={i} className="w-12 bg-emerald-500/20 border-t-4 border-emerald-500 hover:bg-emerald-500 transition-all cursor-pointer" style={{ height: `${h}%` }} />
                    ))}
                 </div>
              </div>
           </div>

           <div className="lg:col-span-4 space-y-8">
              {[
                { label: "Positive", val: "74%", color: "emerald" },
                { label: "Neutral", val: "18%", color: "blue" },
                { label: "Negative", val: "8%", color: "rose" }
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-zinc-900/50 border border-white/10 rounded-[2.5rem] space-y-4 hover:bg-white/5 transition-all">
                   <div className="flex justify-between items-center">
                      <span className="text-xs font-black uppercase italic tracking-widest text-white/40">{stat.label}</span>
                      <span className={`text-2xl font-black italic text-${stat.color}-400`}>{stat.val}</span>
                   </div>
                   <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full bg-${stat.color}-500`} style={{ width: stat.val }} />
                   </div>
                </div>
              ))}
              <button className="w-full py-6 bg-white text-black font-black uppercase italic rounded-[2rem] hover:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-2xl">
                 <PieChart size={20} />
                 <span>Detailed_Metrics</span>
              </button>
           </div>
        </div>
      </div>
    </div>
  ),

  // 18. AgentResourceAllocation: GPU/CPU monitoring per agent
  AgentResourceAllocation: () => (
    <div className="w-full min-h-screen bg-[#020202] text-white p-8 md:p-16 font-mono flex items-center justify-center">
      <div className="max-w-6xl w-full space-y-16">
        <div className="flex justify-between items-start border-b-4 border-white pb-8">
           <div className="space-y-2">
              <div className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Resource_Orchestrator_v2</div>
              <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter">HARDWARE_SYNC.</h1>
           </div>
           <div className="text-right space-y-2">
              <div className="px-6 py-2 bg-blue-600 text-white font-black uppercase text-xs">8x A100 GPU ACTIVE</div>
              <div className="text-[10px] opacity-40 uppercase tracking-widest italic font-black">TOTAL_VRAM: 640GB</div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {[
             { agent: "VISION_CORE", gpu: "42%", vram: "12.4GB", color: "blue" },
             { agent: "NLP_ENGINE", gpu: "88%", vram: "40.2GB", color: "purple" },
             { agent: "VECTOR_DB", gpu: "12%", vram: "4.8GB", color: "emerald" },
             { agent: "LOGIC_GRID", gpu: "65%", vram: "18.1GB", color: "rose" }
           ].map((item, i) => (
             <div key={i} className="p-10 bg-zinc-900/50 border border-white/10 rounded-[3rem] space-y-8 hover:border-white/30 transition-all group">
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-4">
                      <div className={`p-4 bg-${item.color}-500 rounded-2xl text-black shadow-xl shadow-${item.color}-500/20`}>
                         <Server size={24} />
                      </div>
                      <span className="text-2xl font-black italic uppercase tracking-tight">{item.agent}</span>
                   </div>
                   <div className="text-xs font-black italic text-emerald-500 uppercase">ONLINE</div>
                </div>
                <div className="space-y-6">
                   <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40 italic">
                         <span>GPU_Load</span>
                         <span className="text-white">{item.gpu}</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className={`h-full bg-${item.color}-500`} style={{ width: item.gpu }} />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40 italic">
                         <span>VRAM_Allocation</span>
                         <span className="text-white">{item.vram}</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className={`h-full bg-${item.color}-500 opacity-60`} style={{ width: '60%' }} />
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  ),

  // 19. InferenceQueueManager: Queue management UI
  InferenceQueueManager: () => (
    <div className="w-full min-h-screen bg-[#050505] text-white p-8 md:p-24 font-sans flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-12">
        <div className="flex items-center justify-between border-b border-white/10 pb-8">
           <div className="space-y-2">
              <div className="text-xs font-black uppercase tracking-widest text-amber-500 italic">Queue_Controller_v4</div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">TRAFFIC_OPS.</h1>
           </div>
           <div className="text-right">
              <div className="text-4xl font-black italic">142</div>
              <div className="text-[10px] uppercase opacity-40 font-black tracking-widest italic">PENDING_REQUESTS</div>
           </div>
        </div>

        <div className="space-y-4">
           {[
             { id: "0x4F2A", model: "GPT-4o", status: "Processing", progress: "64%", color: "blue" },
             { id: "0x9B1C", model: "Claude-3", status: "Queued", progress: "0%", color: "zinc" },
             { id: "0xA7D2", model: "Llama-3", status: "Processing", progress: "12%", color: "purple" },
             { id: "0xE8F5", model: "GPT-4o", status: "Queued", progress: "0%", color: "zinc" }
           ].map((item, i) => (
             <div key={i} className="p-6 bg-zinc-900/50 border border-white/10 rounded-3xl flex items-center justify-between group hover:border-white/20 transition-all cursor-pointer">
                <div className="flex items-center gap-6">
                   <div className="font-mono text-[10px] font-black text-white/20">{item.id}</div>
                   <div className="space-y-1">
                      <div className="text-sm font-black italic uppercase">{item.model}</div>
                      <div className={`text-[8px] font-black uppercase tracking-widest text-${item.color}-400`}>{item.status}</div>
                   </div>
                </div>
                <div className="flex items-center gap-12">
                   {item.progress !== '0%' && (
                     <div className="w-48 h-1.5 bg-white/5 rounded-full overflow-hidden hidden md:block">
                        <div className={`h-full bg-${item.color}-500 animate-pulse`} style={{ width: item.progress }} />
                     </div>
                   )}
                   <div className="flex items-center gap-4">
                      <span className="text-xs font-black italic">{item.progress}</span>
                      <button className="p-3 bg-white/5 rounded-xl hover:bg-rose-500/10 text-white/20 hover:text-rose-500 transition-all">
                         <Trash size={16} />
                      </button>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <button className="w-full py-6 border-2 border-dashed border-white/10 rounded-[2rem] text-white/20 font-black uppercase italic tracking-widest hover:border-white/30 hover:text-white/40 transition-all">
           [ LOAD_QUEUE_ARCHIVE ]
        </button>
      </div>
    </div>
  ),

  // 20. AIFinalOrchestrator: Master dashboard
  AIFinalOrchestrator: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-12 font-sans flex flex-col justify-between overflow-hidden">
      <header className="flex justify-between items-start border-b border-white/10 pb-8">
         <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest italic">
               <Shield size={14} />
               <span>System_Master_Access</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.7]">ORCHESTRA <br /> <span className="text-white/20">v.4.0.0</span></h1>
         </div>
         <div className="flex flex-col items-end gap-4">
            <div className="text-right">
               <div className="text-3xl font-black italic uppercase">Nominal</div>
               <div className="text-[10px] uppercase font-black text-emerald-500 tracking-widest italic animate-pulse">ALL_SYSTEMS_GO</div>
            </div>
            <div className="flex gap-2">
               {Array.from({ length: 4 }).map((_, i) => (
                 <div key={i} className="w-8 h-8 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center"><Bot size={16} className="text-white/40" /></div>
               ))}
            </div>
         </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12">
         <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 border border-white/10 rounded-[3rem] p-10 space-y-8 relative overflow-hidden group hover:border-blue-500/50 transition-all">
               <div className="absolute top-0 right-0 p-8 opacity-10"><Workflow size={40} /></div>
               <div className="text-xs font-black uppercase tracking-widest text-white/40 italic">Active_Flows</div>
               <div className="text-6xl font-black italic uppercase">124</div>
               <div className="flex gap-2 h-12 items-end">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="flex-1 bg-blue-500/20 group-hover:bg-blue-500 transition-all" style={{ height: `${Math.random() * 100}%` }} />
                  ))}
               </div>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 rounded-[3rem] p-10 space-y-8 relative overflow-hidden group hover:border-purple-500/50 transition-all">
               <div className="absolute top-0 right-0 p-8 opacity-10"><Brain size={40} /></div>
               <div className="text-xs font-black uppercase tracking-widest text-white/40 italic">Knowledge_Sync</div>
               <div className="text-6xl font-black italic uppercase">98%</div>
               <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-purple-500" />
               </div>
            </div>
         </div>

         <div className="lg:col-span-4 bg-zinc-900/50 border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between">
            <div className="space-y-8">
               <div className="text-xs font-black uppercase tracking-widest text-white/40 italic border-b border-white/5 pb-4">Security_Grid</div>
               <div className="space-y-4">
                  {[
                    { label: "Enc_v2", status: "Stable" },
                    { label: "Firewall", status: "Active" },
                    { label: "Auth_0", status: "Verified" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm font-black uppercase italic">
                       <span className="text-white/40">{item.label}</span>
                       <span className="text-emerald-500">{item.status}</span>
                    </div>
                  ))}
               </div>
            </div>
            <button className="w-full py-6 bg-white text-black font-black uppercase italic rounded-2xl hover:scale-[0.98] transition-all shadow-2xl">
               [ MASTER_DEPLOY ]
            </button>
         </div>
      </div>

      <footer className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8 text-[10px] font-black uppercase tracking-[0.5em] text-white/20 italic">
         <div className="flex gap-12">
            <span>* CPU_LOAD: 12%</span>
            <span>* MEM_FREE: 42GB</span>
            <span>* NET_LATENCY: 4MS</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>SESSION_SECURE_0x94A2...</span>
         </div>
      </footer>
    </div>
  )
};

