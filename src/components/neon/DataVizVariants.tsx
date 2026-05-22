"use client";

import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  Activity, 
  Zap, 
  Database, 
  Layers, 
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  Cpu,
  Globe,
  Gauge,
  Workflow
} from 'lucide-react';

export const DataVizVariants = {
  // 1. NeonBarChart: Animated bars with glowing effects
  NeonBarChart: () => {
    const data = [45, 78, 56, 92, 64, 85, 30];
    const labels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    
    return (
      <div className="w-full py-24 bg-black text-white p-8 md:p-16 font-sans relative overflow-hidden flex flex-col items-center">
        <div className="max-w-4xl w-full space-y-12 relative z-10">
          <div className="flex justify-between items-end border-b border-white/10 pb-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                <BarChart3 size={12} />
                <span>Performance_Metrics_v1</span>
              </div>
              <h2 className="text-5xl font-black tracking-tighter uppercase italic leading-none">
                WEEKLY <br /> <span className="text-emerald-500">GROWTH.</span>
              </h2>
            </div>
            <div className="text-right">
              <div className="text-4xl font-black italic">+24.8%</div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-40">System_Efficiency</div>
            </div>
          </div>

          <div className="h-80 flex items-end justify-between gap-4 pt-8">
            {data.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                <div 
                  className="w-full bg-emerald-500/20 border-t-4 border-emerald-500 relative transition-all duration-1000 group-hover:bg-emerald-500/40"
                  style={{ height: `${val}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-black italic opacity-0 group-hover:opacity-100 transition-opacity">
                    {val}%
                  </div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                  {labels[i]}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      </div>
    );
  },

  // 2. NeuralLineChart: Glowing smooth paths with pulses
  NeuralLineChart: () => (
    <div className="w-full py-24 bg-[#050505] text-white p-8 md:p-16 font-sans relative overflow-hidden flex flex-col items-center">
      <div className="max-w-5xl w-full space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
           <div className="space-y-4">
              <div className="text-xs font-black uppercase tracking-[0.6em] text-blue-500 italic">Neural_Network_Activity</div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
                TRAFFIC <br /> <span className="text-white/20">FLOW.</span>
              </h2>
           </div>
           <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-3xl flex items-center gap-8">
              <div className="space-y-1">
                 <div className="text-2xl font-black italic">850GB/S</div>
                 <div className="text-[10px] font-black uppercase tracking-widest opacity-20">Throughput</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="space-y-1">
                 <div className="text-2xl font-black italic">0.02ms</div>
                 <div className="text-[10px] font-black uppercase tracking-widest opacity-20">Latency</div>
              </div>
           </div>
        </div>

        <div className="h-64 relative">
           <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <defs>
                 <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                 </linearGradient>
                 <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                 </filter>
              </defs>
              <path 
                d="M0,150 Q100,50 200,120 T400,80 T600,150 T800,40 T1000,100" 
                fill="none" 
                stroke="url(#lineGrad)" 
                strokeWidth="4" 
                filter="url(#glow)"
                className="animate-[dash_10s_linear_infinite]"
                strokeDasharray="20 10"
              />
              {[200, 400, 600, 800].map((x, i) => (
                <circle key={i} cx={x} cy={x === 200 ? 120 : x === 400 ? 80 : x === 600 ? 150 : 40} r="6" fill="#3b82f6" className="animate-pulse" />
              ))}
           </svg>
           <div className="absolute inset-0 flex justify-between items-end opacity-10 pointer-events-none">
              {Array.from({ length: 10 }).map((_, i) => <div key={i} className="w-px h-full bg-white" />)}
           </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
    </div>
  ),

  // 3. GlassPieChart: 3D-style pie chart with glassmorphism
  GlassPieChart: () => (
    <div className="w-full py-24 bg-zinc-100 text-black p-8 md:p-16 font-sans flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        <div className="space-y-12">
           <div className="space-y-4">
              <div className="text-xs font-black uppercase tracking-widest text-zinc-400 italic">Distribution_Analysis</div>
              <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
                MARKET <br /> <span className="underline decoration-8 underline-offset-8">SHARE.</span>
              </h2>
           </div>
           <div className="space-y-6">
              {[
                { label: "SaaS Enterprise", val: "45%", color: "bg-black" },
                { label: "AI Integration", val: "30%", color: "bg-blue-600" },
                { label: "Cloud Infra", val: "25%", color: "bg-zinc-400" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 border-b-2 border-black/5 group cursor-pointer hover:bg-white transition-all">
                   <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-xl font-bold italic uppercase">{item.label}</span>
                   </div>
                   <span className="text-2xl font-black italic">{item.val}</span>
                </div>
              ))}
           </div>
        </div>

        <div className="relative aspect-square flex items-center justify-center">
           <div className="w-[80%] h-[80%] rounded-full bg-white border-4 border-black shadow-[20px_20px_0_rgba(0,0,0,1)] relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex">
                 <div className="w-[45%] h-full bg-black" />
                 <div className="w-[30%] h-full bg-blue-600" />
                 <div className="w-[25%] h-full bg-zinc-400" />
              </div>
              <div className="absolute inset-8 rounded-full bg-white border-4 border-black flex flex-col items-center justify-center text-center p-8 z-10">
                 <PieChart size={48} className="mb-4" />
                 <div className="text-3xl font-black italic leading-none">TOTAL<br/>REVENUE</div>
                 <div className="mt-4 text-sm font-bold opacity-40 uppercase tracking-widest">$4.2M</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  ),

  // 4. RadarSystemMetrics: Hexagonal radar chart
  RadarSystemMetrics: () => (
    <div className="w-full py-24 bg-black text-white p-8 md:p-16 font-mono relative overflow-hidden flex flex-col items-center">
       <div className="max-w-4xl w-full space-y-16 relative z-10">
          <div className="text-center space-y-4">
             <div className="text-xs font-black uppercase tracking-[0.5em] text-cyan-500 animate-pulse">System_Calibration_v4</div>
             <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic italic">RADAR_STATS.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
             <div className="lg:col-span-7 relative aspect-square">
                <svg className="w-full h-full opacity-60" viewBox="0 0 400 400">
                   {[1, 0.8, 0.6, 0.4, 0.2].map((scale, i) => (
                     <polygon 
                        key={i}
                        points="200,50 330,125 330,275 200,350 70,275 70,125" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="1" 
                        strokeOpacity={scale}
                        transform={`scale(${scale}) translate(${200/scale - 200}, ${200/scale - 200})`}
                     />
                   ))}
                   <polygon 
                      points="200,80 300,150 310,250 200,320 100,260 90,140" 
                      fill="rgba(6,182,212,0.3)" 
                      stroke="#06b6d4" 
                      strokeWidth="3"
                      className="animate-pulse"
                   />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                   <Zap size={40} className="text-cyan-400 drop-shadow-[0_0_15px_#06b6d4]" />
                </div>
             </div>

             <div className="lg:col-span-5 space-y-6">
                {[
                  { l: "STABILITY", v: "92%" },
                  { l: "LATENCY", v: "0.4ms" },
                  { l: "THROUGHPUT", v: "88%" },
                  { l: "UPTIME", v: "99.9%" },
                  { l: "SECURITY", v: "100%" }
                ].map((stat, i) => (
                  <div key={i} className="p-4 border border-white/10 bg-white/5 flex justify-between items-center group hover:border-cyan-500 transition-all cursor-crosshair">
                     <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-cyan-500">{stat.l}</span>
                     <span className="text-xl font-black italic">{stat.v}</span>
                  </div>
                ))}
             </div>
          </div>
       </div>
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]" />
    </div>
  ),

  // 5. ActivityHeatmap: Grid-based activity tracking
  ActivityHeatmap: () => (
    <div className="w-full py-24 bg-white text-black p-8 md:p-16 font-sans relative overflow-hidden flex flex-col items-center">
       <div className="max-w-6xl w-full space-y-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b-4 border-black pb-8">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-zinc-400">Activity_Matrix_v1</div>
                <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">HEAT <br /> <span className="text-zinc-300">MAP.</span></h2>
             </div>
             <div className="flex gap-4">
                <button className="px-8 py-3 bg-black text-white font-black uppercase italic hover:bg-zinc-800 transition-all">Filter_Logs</button>
             </div>
          </div>

          <div className="grid grid-cols-12 md:grid-cols-24 gap-2">
             {Array.from({ length: 240 }).map((_, i) => {
               const opacity = Math.random();
               return (
                 <div 
                   key={i} 
                   className="aspect-square border border-black/5 transition-all hover:scale-110 cursor-pointer relative group"
                   style={{ backgroundColor: `rgba(0,0,0,${opacity})` }}
                 >
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                       {Math.floor(opacity * 100)}%_INTENSITY
                    </div>
                 </div>
               );
             })}
          </div>

          <div className="flex justify-between items-center pt-8 text-[10px] font-black uppercase tracking-widest opacity-40 italic">
             <span>Less_Activity</span>
             <div className="flex gap-1 h-3">
                {[0.1, 0.3, 0.5, 0.7, 0.9].map(o => <div key={o} className="w-6 h-full" style={{ opacity: o, backgroundColor: 'black' }} />)}
             </div>
             <span>More_Activity</span>
          </div>
       </div>
    </div>
  ),

  // 6. BubbleCluster: Dynamic floating bubbles
  BubbleCluster: () => (
    <div className="w-full py-24 bg-[#080808] text-white p-8 md:p-24 font-sans relative overflow-hidden flex items-center justify-center">
       <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
             <div className="inline-block px-4 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-black uppercase tracking-widest italic">
                <Globe size={14} className="inline mr-2" />
                <span>Semantic_Cluster_v2</span>
             </div>
             <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">
                BUBBLE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">CLOUD.</span>
             </h1>
             <p className="text-2xl text-white/40 font-medium italic max-w-lg leading-relaxed">
                Visualizing multi-dimensional data relationships through dynamic spherical clusters.
             </p>
             <button className="px-10 py-5 bg-purple-600 text-white font-black uppercase italic rounded-2xl hover:bg-purple-500 transition-all shadow-2xl shadow-purple-600/20">
                [ EXPLORE_NODES ]
             </button>
          </div>

          <div className="relative aspect-square flex items-center justify-center">
             {[
               { s: 160, x: 0, y: 0, o: 0.3, c: "purple" },
               { s: 100, x: -80, y: -60, o: 0.5, c: "pink" },
               { s: 120, x: 90, y: 40, o: 0.4, c: "blue" },
               { s: 80, x: -40, y: 100, o: 0.6, c: "indigo" },
               { s: 60, x: 100, y: -90, o: 0.2, c: "purple" }
             ].map((b, i) => (
               <div 
                 key={i} 
                 className={`absolute rounded-full bg-${b.c}-500/20 border border-${b.c}-500/30 backdrop-blur-xl flex flex-col items-center justify-center text-center p-4 animate-pulse`}
                 style={{ 
                   width: b.s, 
                   height: b.s, 
                   transform: `translate(${b.x}px, ${b.y}px)`,
                   animationDelay: `${i * 0.5}s`
                 }}
               >
                  <div className="text-xl font-black italic">{Math.floor(b.s * 1.5)}K</div>
                  <div className="text-[8px] font-black uppercase tracking-widest opacity-40">Module_{i}</div>
               </div>
             ))}
          </div>
       </div>
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)]" />
    </div>
  ),

  // 7. HierarchicalTreeMap: Nested data blocks
  HierarchicalTreeMap: () => (
    <div className="w-full py-24 bg-black text-white p-8 md:p-16 font-sans relative overflow-hidden flex flex-col items-center">
       <div className="max-w-6xl w-full space-y-12 relative z-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-8">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-zinc-500">Storage_Hierarchy_v9</div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">TREE <br /> <span className="text-white">MAP.</span></h2>
             </div>
             <Layers size={48} className="opacity-20" />
          </div>

          <div className="h-[500px] grid grid-cols-12 grid-rows-6 gap-4">
             <div className="col-span-8 row-span-4 bg-zinc-900 border border-white/10 p-8 flex flex-col justify-between hover:bg-white hover:text-black transition-all group">
                <div className="text-xs font-black uppercase tracking-widest opacity-40">System_Core</div>
                <div className="text-5xl font-black italic">64.2 GB</div>
             </div>
             <div className="col-span-4 row-span-2 bg-blue-600 border border-white/10 p-6 flex flex-col justify-between hover:bg-white hover:text-black transition-all">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Assets</div>
                <div className="text-3xl font-black italic">12.8 GB</div>
             </div>
             <div className="col-span-4 row-span-2 bg-zinc-800 border border-white/10 p-6 flex flex-col justify-between hover:bg-white hover:text-black transition-all">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Database</div>
                <div className="text-3xl font-black italic">8.4 GB</div>
             </div>
             <div className="col-span-4 row-span-2 bg-emerald-500 border border-white/10 p-6 flex flex-col justify-between hover:bg-white hover:text-black transition-all">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Cache</div>
                <div className="text-3xl font-black italic">4.2 GB</div>
             </div>
             <div className="col-span-8 row-span-2 bg-zinc-900 border border-white/10 p-8 flex flex-col justify-between hover:bg-white hover:text-black transition-all">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">User_Data</div>
                <div className="text-3xl font-black italic">18.5 GB</div>
             </div>
          </div>
       </div>
    </div>
  ),

  // 8. CandlestickTrading: High-fidelity financial chart
  CandlestickTrading: () => (
    <div className="w-full py-24 bg-[#0a0a0a] text-white p-8 md:p-16 font-mono relative overflow-hidden flex flex-col items-center">
       <div className="max-w-6xl w-full space-y-12 relative z-10">
          <div className="flex justify-between items-center border-b border-white/10 pb-8">
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-500">
                   <TrendingUp size={32} />
                </div>
                <div className="space-y-1">
                   <h2 className="text-4xl font-black italic tracking-tighter">BTC / USDT</h2>
                   <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">Live_Market_Stream</div>
                </div>
             </div>
             <div className="text-right space-y-2">
                <div className="text-5xl font-black italic text-emerald-500">$64,280.45</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 italic">+5.24% (24H)</div>
             </div>
          </div>

          <div className="h-80 flex items-center justify-between gap-2 pt-8 relative">
             {Array.from({ length: 24 }).map((_, i) => {
               const isUp = Math.random() > 0.4;
               const height = 40 + Math.random() * 40;
               const offset = 20 + Math.random() * 40;
               return (
                 <div key={i} className="flex-1 flex flex-col items-center relative group h-full justify-center">
                    <div className={`w-px h-full ${isUp ? 'bg-emerald-500/20' : 'bg-rose-500/20'} absolute z-0`} />
                    <div 
                      className={`w-full max-w-[12px] ${isUp ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)]'} transition-all duration-500 hover:scale-x-150 cursor-crosshair`}
                      style={{ height: `${height}%`, transform: `translateY(${isUp ? -offset : offset}%)` }}
                    />
                 </div>
               );
             })}
             <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 border-t border-dashed border-white/10 pointer-events-none" />
          </div>
       </div>
    </div>
  ),

  // 9. PerformanceGauge: Animated multi-segment gauge
  PerformanceGauge: () => (
    <div className="w-full py-24 bg-black text-white p-8 md:p-24 font-sans relative overflow-hidden flex items-center justify-center">
       <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative aspect-square flex items-center justify-center">
             <div className="absolute w-full h-full rounded-full border-[20px] border-white/5" />
             <div className="absolute w-full h-full rounded-full border-[20px] border-emerald-500 [border-bottom-color:transparent] [border-left-color:transparent] rotate-45 animate-[spin_3s_ease-in-out_infinite]" />
             
             <div className="text-center space-y-4 relative z-10">
                <Gauge size={64} className="mx-auto text-emerald-500 drop-shadow-[0_0_15px_#10b981]" />
                <div className="space-y-1">
                   <div className="text-8xl font-black italic tracking-tighter">98.4</div>
                   <div className="text-xs font-black uppercase tracking-[0.5em] text-emerald-500/60">Percent_Optimal</div>
                </div>
             </div>
          </div>

          <div className="space-y-12">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[0.8em] text-emerald-500 italic">Hardware_Diagnostic_v4</div>
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
                   SYSTEM <br /> <span className="text-white/20">HEALTH.</span>
                </h1>
             </div>
             <p className="text-2xl text-white/40 font-medium italic leading-relaxed max-w-lg">
                Real-time performance monitoring across all hardware modules. Peak efficiency detected.
             </p>
             <div className="flex gap-4">
                <button className="px-12 py-5 bg-white text-black font-black uppercase italic rounded-2xl hover:bg-emerald-500 hover:text-white transition-all">
                   [ RUN_DIAGNOSTIC ]
                </button>
             </div>
          </div>
       </div>
    </div>
  ),

  // 10. DataFlowSankey: Animated flow transitions
  DataFlowSankey: () => (
    <div className="w-full py-24 bg-[#050505] text-white p-8 md:p-16 font-mono relative overflow-hidden flex flex-col items-center">
       <div className="max-w-6xl w-full space-y-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12">
             <div className="space-y-2 text-center md:text-left">
                <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-none">FLOW_ORCHESTRATOR.</h2>
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">Resource_Allocation_Map</div>
             </div>
             <Workflow size={48} className="text-blue-500 animate-pulse" />
          </div>

          <div className="h-80 relative flex items-center justify-between px-12">
             <div className="space-y-12 relative z-10">
                {['Source_A', 'Source_B', 'Source_C'].map(s => (
                  <div key={s} className="px-6 py-2 bg-zinc-900 border border-white/10 rounded-xl text-xs font-black italic uppercase hover:border-blue-500 transition-colors cursor-pointer">
                     {s}
                  </div>
                ))}
             </div>

             <div className="absolute inset-0 flex flex-col justify-around py-16 opacity-30 pointer-events-none">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-full h-8 bg-gradient-to-r from-blue-500/40 via-blue-500 to-blue-500/40 animate-[flow_3s_linear_infinite]" style={{ animationDelay: `${i * 0.5}s` }} />
                ))}
             </div>

             <div className="space-y-20 relative z-10">
                {['Processing_Hub', 'Storage_Vault'].map(s => (
                  <div key={s} className="px-8 py-4 bg-blue-600 border border-white/20 rounded-2xl text-sm font-black italic uppercase shadow-2xl shadow-blue-600/20">
                     {s}
                  </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  ),

  // 11. AreaChartWave: Smooth area chart with animated waves
  AreaChartWave: () => (
    <div className="w-full py-24 bg-black text-white p-8 md:p-16 font-sans relative overflow-hidden flex flex-col items-center">
       <div className="max-w-5xl w-full space-y-12 relative z-10">
          <div className="flex items-center gap-6 border-b border-white/10 pb-8">
             <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center text-blue-500">
                <Activity size={32} className="animate-pulse" />
             </div>
             <div className="space-y-1">
                <h2 className="text-4xl font-black italic tracking-tighter uppercase">WAVE_ANALYTICS.</h2>
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-400">Signal_Resonance_Pattern</div>
             </div>
          </div>

          <div className="h-64 relative bg-blue-500/5 rounded-3xl overflow-hidden border border-white/5">
             <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <path d="M0,200 L0,150 Q250,50 500,150 T1000,100 L1000,200 Z" fill="rgba(59,130,246,0.2)" className="animate-[wave_5s_ease-in-out_infinite]" />
                <path d="M0,200 L0,120 Q250,180 500,100 T1000,150 L1000,200 Z" fill="rgba(59,130,246,0.1)" className="animate-[wave_7s_ease-in-out_infinite_reverse]" />
                <path d="M0,150 Q250,50 500,150 T1000,100" fill="none" stroke="#3b82f6" strokeWidth="4" />
             </svg>
          </div>
       </div>
    </div>
  ),

  // 12. ScatterPlotCluster: Interactive points with clusters
  ScatterPlotCluster: () => (
    <div className="w-full py-24 bg-[#050505] text-white p-8 md:p-16 font-mono relative overflow-hidden flex flex-col items-center">
       <div className="max-w-6xl w-full space-y-16 relative z-10">
          <div className="flex justify-between items-end border-b border-white/10 pb-8">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-zinc-500">Vector_Space_Mapping</div>
                <h2 className="text-6xl font-black tracking-tighter uppercase italic">CLUSTER_v2.</h2>
             </div>
             <div className="flex gap-4">
                {['Logic', 'Sync', 'Data'].map(tag => (
                  <div key={tag} className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest italic">{tag}</div>
                ))}
             </div>
          </div>

          <div className="h-96 relative border border-white/5 bg-white/[0.02] rounded-3xl overflow-hidden cursor-crosshair group">
             {Array.from({ length: 50 }).map((_, i) => (
               <div 
                 key={i} 
                 className={`absolute w-3 h-3 rounded-full animate-pulse hover:scale-150 transition-transform ${i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-emerald-500' : 'bg-purple-500'}`}
                 style={{ 
                   left: `${10 + Math.random() * 80}%`, 
                   top: `${10 + Math.random() * 80}%`,
                   animationDelay: `${i * 0.1}s`
                 }}
               />
             ))}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.05)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
       </div>
    </div>
  ),

  // 13. FunnelConversion: Multi-step conversion funnel
  FunnelConversion: () => (
    <div className="w-full py-24 bg-white text-black p-8 md:p-16 font-sans relative overflow-hidden flex flex-col items-center">
       <div className="max-w-4xl w-full space-y-16 relative z-10">
          <div className="text-center space-y-4">
             <div className="text-xs font-black uppercase tracking-widest text-zinc-400">Conversion_Pipeline_v4</div>
             <h2 className="text-7xl font-black tracking-tighter uppercase italic italic">FUNNEL_MAP.</h2>
          </div>

          <div className="space-y-4">
             {[
               { l: "Awareness", v: "100%", w: "w-full", c: "bg-black" },
               { l: "Interest", v: "65%", w: "w-[85%]", c: "bg-zinc-800" },
               { l: "Decision", v: "32%", w: "w-[60%]", c: "bg-zinc-600" },
               { l: "Action", v: "14%", w: "w-[35%]", c: "bg-blue-600" }
             ].map((step, i) => (
               <div key={i} className="flex flex-col items-center">
                  <div className={`h-16 ${step.w} ${step.c} text-white flex items-center justify-between px-8 rounded-2xl group hover:scale-105 transition-all cursor-pointer shadow-2xl shadow-black/10`}>
                     <span className="font-black italic uppercase tracking-tight">{step.l}</span>
                     <span className="text-2xl font-black italic">{step.v}</span>
                  </div>
                  {i < 3 && <div className="w-px h-8 bg-black/10" />}
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 14. RadialBarPulse: Concentric progress bars
  RadialBarPulse: () => (
    <div className="w-full py-24 bg-black text-white p-8 md:p-16 font-sans relative overflow-hidden flex items-center justify-center">
       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative aspect-square flex items-center justify-center">
             {[
               { r: "w-full h-full", c: "border-blue-500", a: "animate-[spin_10s_linear_infinite]", v: "92%" },
               { r: "w-[80%] h-[80%]", c: "border-emerald-500", a: "animate-[spin_7s_linear_infinite_reverse]", v: "84%" },
               { r: "w-[60%] h-[60%]", c: "border-purple-500", a: "animate-[spin_5s_linear_infinite]", v: "76%" }
             ].map((bar, i) => (
               <div key={i} className={`absolute ${bar.r} rounded-full border-[12px] border-white/5 flex items-center justify-center`}>
                  <div className={`absolute inset-[-12px] rounded-full border-[12px] ${bar.c} ${bar.a} [border-bottom-color:transparent] [border-left-color:transparent]`} />
                  {i === 2 && (
                    <div className="text-center">
                       <Zap size={48} className="mx-auto text-blue-500 mb-2" />
                       <div className="text-4xl font-black italic tracking-tighter">SYNCED</div>
                    </div>
                  )}
               </div>
             ))}
          </div>

          <div className="space-y-12">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[0.8em] text-blue-400 italic">Concentric_Metric_v9</div>
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
                   RADIAL <br /> <span className="text-white/20">PULSE.</span>
                </h1>
             </div>
             <div className="grid grid-cols-3 gap-8">
                {['Core', 'Edge', 'Cloud'].map(m => (
                  <div key={m} className="space-y-2">
                     <div className="text-2xl font-black italic uppercase">{m}</div>
                     <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[80%]" />
                     </div>
                  </div>
                ))}
             </div>
             <button className="px-12 py-5 bg-white text-black font-black uppercase italic rounded-2xl hover:bg-blue-600 hover:text-white transition-all">
                [ ACCESS_STATS ]
             </button>
          </div>
       </div>
    </div>
  ),

  // 15. SparklineStream: High-density mini-charts
  SparklineStream: () => (
    <div className="w-full py-24 bg-zinc-950 text-white p-8 md:p-16 font-mono relative overflow-hidden flex flex-col items-center">
       <div className="max-w-6xl w-full space-y-12 relative z-10">
          <div className="flex items-center justify-between border-b border-white/5 pb-8">
             <div className="space-y-2">
                <h2 className="text-4xl font-black italic tracking-tighter">STREAM_DASH.</h2>
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Live_Mini_Charts_v1</div>
             </div>
             <TrendingUp className="text-emerald-500 animate-pulse" size={32} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {['Latency', 'Uptime', 'Traffic', 'Memory'].map((label, i) => (
               <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-6 group hover:border-emerald-500 transition-all cursor-pointer">
                  <div className="flex justify-between items-start">
                     <span className="text-xs font-black uppercase tracking-widest opacity-40">{label}</span>
                     <ArrowUpRight size={16} className="opacity-20 group-hover:opacity-100 group-hover:text-emerald-500 transition-all" />
                  </div>
                  <div className="h-12 flex items-end gap-1">
                     {Array.from({ length: 12 }).map((_, j) => (
                       <div 
                         key={j} 
                         className="flex-1 bg-emerald-500/20 border-t border-emerald-500" 
                         style={{ height: `${20 + Math.random() * 80}%` }} 
                       />
                     ))}
                  </div>
                  <div className="text-2xl font-black italic tracking-tighter">0.42ms</div>
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 16. ChordRelationship: Circular entity connections
  ChordRelationship: () => (
    <div className="w-full py-24 bg-black text-white p-8 md:p-24 font-sans relative overflow-hidden flex items-center justify-center">
       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div className="space-y-12">
             <div className="text-xs font-black uppercase tracking-[0.6em] text-cyan-500 italic">Entity_Linkage_Matrix</div>
             <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
                CHORD <br /> <span className="text-white/20">LINKS.</span>
             </h1>
             <p className="text-2xl text-white/40 font-medium italic max-w-lg leading-relaxed">
                Visualizing complex relationships between disparate entities in a high-dimensional vector space.
             </p>
             <div className="flex gap-6">
                <button className="px-10 py-4 bg-cyan-600 text-black font-black uppercase italic rounded-2xl hover:bg-white transition-all shadow-2xl shadow-cyan-600/20">
                   [ MAP_ENTITIES ]
                </button>
             </div>
          </div>

          <div className="relative aspect-square flex items-center justify-center">
             <div className="w-full h-full rounded-full border border-white/10 relative">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                  <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px origin-center" style={{ transform: `rotate(${deg}deg)` }}>
                     <div className="absolute left-0 w-4 h-4 bg-cyan-500 rounded-full animate-pulse" />
                     <div className="absolute right-0 w-4 h-4 bg-cyan-500 rounded-full animate-pulse" />
                  </div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 bg-cyan-600/10 border border-cyan-500/30 rounded-full backdrop-blur-3xl flex items-center justify-center">
                      <Globe size={48} className="text-cyan-500" />
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]" />
    </div>
  ),

  // 17. BulletChartPrecision: Compact comparison bars
  BulletChartPrecision: () => (
    <div className="w-full py-24 bg-white text-black p-8 md:p-16 font-sans relative overflow-hidden flex flex-col items-center">
       <div className="max-w-4xl w-full space-y-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b-4 border-black pb-12">
             <div className="space-y-2 text-center md:text-left">
                <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-none">PRECISION_UNIT.</h2>
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Target_vs_Actual_v1</div>
             </div>
             <TrendingDown size={48} className="text-rose-600" />
          </div>

          <div className="space-y-12">
             {[
                { l: "Revenue_Target", v: 85, t: 75 },
                { l: "User_Acquisition", v: 62, t: 80 },
                { l: "System_Uptime", v: 98, t: 95 }
             ].map((item, i) => (
               <div key={i} className="space-y-4 group cursor-pointer">
                  <div className="flex justify-between items-end">
                     <span className="text-xl font-black italic uppercase tracking-tighter">{item.l}</span>
                     <span className={`text-2xl font-black italic ${item.v >= item.t ? 'text-emerald-600' : 'text-rose-600'}`}>{item.v}%</span>
                  </div>
                  <div className="h-10 w-full bg-zinc-100 border-2 border-black relative flex items-center">
                     <div className="h-full bg-black transition-all duration-1000" style={{ width: `${item.v}%` }} />
                     <div className="absolute top-0 bottom-0 w-1 bg-rose-600 z-10 shadow-[0_0_10px_rgba(225,29,72,0.5)]" style={{ left: `${item.t}%` }} />
                     <div className="absolute -top-6 left-[75%] -translate-x-1/2 text-[8px] font-black uppercase tracking-widest opacity-40">Target</div>
                  </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 18. SunburstDrilldown: Hierarchical circular tree
  SunburstDrilldown: () => (
    <div className="w-full py-24 bg-black text-white p-8 md:p-24 font-sans relative overflow-hidden flex items-center justify-center">
       <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative aspect-square flex items-center justify-center">
             <div className="w-full h-full rounded-full border border-white/10 animate-spin duration-[30s]" style={{ backgroundImage: 'conic-gradient(from 0deg, #3b82f6 0%, #10b981 25%, #8b5cf6 50%, #f43f5e 75%, #3b82f6 100%)', opacity: 0.1 }} />
             <div className="absolute w-[80%] h-[80%] rounded-full border border-white/20" />
             <div className="absolute w-[60%] h-[60%] rounded-full border border-white/30" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                   <Layers size={48} className="mx-auto text-white/40" />
                   <div className="text-3xl font-black italic">DRILL_DOWN</div>
                </div>
             </div>
             {[0, 60, 120, 180, 240, 300].map(deg => (
               <div key={deg} className="absolute top-1/2 left-1/2 w-full h-px origin-center" style={{ transform: `rotate(${deg}deg)` }}>
                  <div className="absolute right-0 w-8 h-8 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center text-[10px] font-black italic">0{deg/60}</div>
               </div>
             ))}
          </div>

          <div className="space-y-12 text-right md:text-left">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[0.8em] text-white/20 italic">Deep_Structure_Explorer</div>
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
                   SUN <br /> <span className="text-white">BURST.</span>
                </h1>
             </div>
             <p className="text-2xl text-white/40 font-medium italic leading-relaxed max-w-lg">
                Navigate through infinite layers of hierarchical data with our interactive radial tree visualizer.
             </p>
             <button className="px-12 py-5 bg-white text-black font-black uppercase italic rounded-2xl hover:invert transition-all">
                [ START_EXPLORING ]
             </button>
          </div>
       </div>
    </div>
  ),

  // 19. BoxPlotStats: Statistical distribution chart
  BoxPlotStats: () => (
    <div className="w-full py-24 bg-[#0a0a0a] text-white p-8 md:p-16 font-mono relative overflow-hidden flex flex-col items-center">
       <div className="max-w-6xl w-full space-y-16 relative z-10">
          <div className="flex justify-between items-center border-b border-white/10 pb-8">
             <div className="space-y-2">
                <h2 className="text-5xl font-black italic tracking-tighter uppercase">DISTRIBUTION_BOX.</h2>
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Stat_Analysis_Unit_v4</div>
             </div>
             <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                <Activity size={32} />
             </div>
          </div>

          <div className="h-64 flex items-center justify-around gap-12 pt-12">
             {[
               { l: "Group_A", m: 50, q1: 30, q3: 70, min: 10, max: 90 },
               { l: "Group_B", m: 40, q1: 20, q3: 60, min: 5, max: 85 },
               { l: "Group_C", m: 60, q1: 40, q3: 80, min: 20, max: 95 }
             ].map((box, i) => (
               <div key={i} className="flex-1 flex flex-col items-center h-full relative group">
                  <div className="absolute top-0 bottom-0 w-px bg-white/20" />
                  <div className="absolute w-4 h-px bg-white" style={{ top: `${100-box.max}%` }} />
                  <div className="absolute w-4 h-px bg-white" style={{ top: `${100-box.min}%` }} />
                  <div 
                    className="absolute w-full max-w-[60px] bg-white/10 border-2 border-white transition-all group-hover:bg-white group-hover:text-black p-2 flex items-center justify-center"
                    style={{ top: `${100-box.q3}%`, height: `${box.q3-box.q1}%` }}
                  >
                     <div className="w-full h-px bg-white group-hover:bg-black absolute" style={{ top: `${box.q3-box.m}%` }} />
                  </div>
                  <div className="absolute bottom-[-32px] text-[10px] font-black uppercase tracking-widest opacity-40">{box.l}</div>
               </div>
             ))}
          </div>
       </div>
    </div>
  ),

  // 20. RealTimeFeedMatrix: Binary data matrix feed
  RealTimeFeedMatrix: () => (
    <div className="w-full min-h-screen bg-black text-[#00ff41] p-8 md:p-24 font-mono relative overflow-hidden flex flex-col items-center justify-center">
       <div className="absolute inset-0 opacity-10 pointer-events-none grid grid-cols-10 gap-4 p-8">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="text-[10px] break-all animate-pulse" style={{ animationDelay: `${i * 0.05}s` }}>
               {Math.random().toString(16).substring(2, 12).toUpperCase()}
            </div>
          ))}
       </div>

       <div className="max-w-4xl w-full space-y-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">
             <Cpu size={14} />
             <span>Core_Inference_Matrix_Online</span>
          </div>
          
          <h1 className="text-7xl md:text-[12rem] font-black tracking-tighter uppercase italic leading-none text-white">
             MATRIX <br /> <span className="text-green-500">FEED.</span>
          </h1>
          
          <div className="p-12 bg-zinc-900/50 border-2 border-green-500/20 rounded-[3rem] backdrop-blur-xl space-y-8">
             <div className="flex justify-between text-xs font-black opacity-40 uppercase tracking-widest italic border-b border-white/5 pb-4">
                <span>Incoming_Packets</span>
                <span>Source: 192.168.1.104</span>
             </div>
             <div className="text-xl md:text-3xl font-black italic text-left space-y-2 opacity-80">
                <div className="flex gap-4"><span className="text-white/20">01</span> SYNC_REQUEST: ACCEPTED</div>
                <div className="flex gap-4"><span className="text-white/20">02</span> DATA_STREAM_v4: ESTABLISHED</div>
                <div className="flex gap-4"><span className="text-white/20">03</span> ENCRYPTION_LEVEL: AES-256</div>
                <div className="flex gap-4"><span className="text-white/20">04</span> SYSTEM_STATUS: OPTIMAL</div>
             </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-center gap-8">
             <button className="px-16 py-6 bg-white text-black font-black text-2xl uppercase italic hover:bg-green-500 transition-all shadow-2xl">
                [ CONNECT ]
             </button>
             <button className="px-16 py-6 border-4 border-white text-white font-black text-2xl uppercase italic hover:bg-white hover:text-black transition-all">
                [ REBOOT ]
             </button>
          </div>
       </div>
    </div>
  )
};
