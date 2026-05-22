"use client";

import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Cpu, 
  Database, 
  Activity, 
  Shield, 
  Zap, 
  Globe, 
  Monitor, 
  Command, 
  Hash,
  ArrowRight,
  ArrowUpRight,
  Code
} from 'lucide-react';

export const ASCIIRetroVariants = {
  // 1. TerminalHero: Classic green phosphor terminal hero
  TerminalHero: () => {
    const [lines, setLines] = useState<string[]>([]);
    const fullText = [
      "SYSTEM_BOOT_SEQUENCE_INITIATED...",
      "LOADING_KERNEL_v1.0.4...",
      "CONNECTING_TO_NEURAL_GRID...",
      "AUTHENTICATION_SUCCESSFUL.",
      "WELCOME_TO_THE_FUTURE.",
      "> [ACCESS_GRANTED]"
    ];

    useEffect(() => {
      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < fullText.length) {
          const lineToAdd = fullText[currentLine];
          setLines(prev => [...prev, lineToAdd]);
          currentLine++;
        } else {
          clearInterval(interval);
        }
      }, 800);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="w-full min-h-screen bg-black text-[#00ff41] p-8 md:p-24 font-mono relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,65,0.05)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-scanline pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="border-2 border-[#00ff41] p-8 rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.2)] bg-black/80">
            <div className="flex items-center gap-4 mb-8 border-b border-[#00ff41]/30 pb-4">
              <Terminal size={24} />
              <span className="text-xs font-bold uppercase tracking-widest">SYSTEM_CONSOLE_ROOT</span>
              <div className="flex-1" />
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
            </div>
            
            <div className="space-y-4 min-h-[300px]">
              {lines.map((line, i) => (
                <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-300">
                  <span className="mr-4 text-green-500/40">[{i.toString().padStart(2, '0')}]</span>
                  <span className={line?.startsWith('>') ? 'text-white font-black' : ''}>{line}</span>
                </div>
              ))}
              <div className="inline-block w-3 h-6 bg-[#00ff41] animate-pulse align-middle ml-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <div className="space-y-6">
              <h1 className="text-6xl font-black tracking-tighter uppercase italic leading-none">
                RETRO <br /> <span className="text-white">FUTURE.</span>
              </h1>
              <p className="text-lg text-green-500/60 font-medium leading-relaxed italic">
                Experience the raw power of command-line aesthetics merged with modern performance.
              </p>
              <div className="flex gap-6">
                <button className="px-8 py-4 bg-[#00ff41] text-black font-black uppercase italic hover:bg-white transition-all">
                  [ START_INIT ]
                </button>
                <button className="px-8 py-4 border-2 border-[#00ff41] text-[#00ff41] font-black uppercase italic hover:bg-[#00ff41] hover:text-black transition-all">
                  [ VIEW_LOGS ]
                </button>
              </div>
            </div>
            
            <div className="bg-green-500/5 border border-[#00ff41]/20 rounded-xl p-8 flex items-center justify-center group cursor-pointer hover:bg-green-500/10 transition-all">
               <pre className="text-[10px] leading-tight text-green-500/40 group-hover:text-green-500 transition-colors">
{`      _    ____   ____ ___ ___ 
     / \\  / ___| / ___|_ _|_ _|
    / _ \\ \\___ \\| |    | | | | 
   / ___ \\ ___) | |___ | | | | 
  /_/   \\_\\____/ \\____|___|___|`}
               </pre>
            </div>
          </div>
        </div>
      </div>
    );
  },

  // 2. CrtMonitorScanline: Container with nostalgic CRT effect
  CrtMonitorScanline: () => (
    <div className="w-full py-24 bg-[#111] text-white p-8 md:p-24 font-mono relative overflow-hidden flex items-center justify-center">
      <div className="max-w-4xl w-full relative">
        <div className="absolute -inset-20 bg-green-500/10 rounded-full blur-[120px] animate-pulse" />
        
        <div className="relative z-10 aspect-video bg-[#0a0a0a] border-[16px] border-[#222] rounded-[4rem] shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-white/5 before:to-transparent before:animate-scanline before:z-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-10 pointer-events-none" />
          
          <div className="h-full p-12 flex flex-col justify-between items-center text-center">
             <div className="space-y-2">
                <div className="text-xs font-black uppercase tracking-[0.8em] text-white/20">Monitor_Model_88</div>
                <div className="h-1 w-24 bg-white/10 mx-auto" />
             </div>

             <div className="space-y-8">
               <div className="text-7xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                 NOSTALGIA.
               </div>
               <p className="max-w-md mx-auto text-white/40 font-medium italic">
                 Simulating the warmth and imperfections of cathode ray tubes. A digital ghost in the machine.
               </p>
             </div>

             <div className="flex gap-8">
                <div className="text-center">
                   <div className="text-2xl font-black italic">60Hz</div>
                   <div className="text-[8px] uppercase font-black text-white/20">Refresh</div>
                </div>
                <div className="text-center">
                   <div className="text-2xl font-black italic">P22</div>
                   <div className="text-[8px] uppercase font-black text-white/20">Phosphor</div>
                </div>
             </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center gap-12 opacity-20">
           <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase italic">Power_On</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white/20 rounded-sm" />
              <span className="text-[10px] font-black uppercase italic">Sync_Locked</span>
           </div>
        </div>
      </div>
    </div>
  ),

  // 3. AsciiArtGallery: Showcase of text-based graphics
  AsciiArtGallery: () => (
    <div className="w-full py-24 bg-black text-[#00ff41] p-8 md:p-16 font-mono">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-[#00ff41]/20 pb-12">
           <div className="space-y-4">
              <div className="text-xs font-black uppercase tracking-[0.5em] text-[#00ff41]/40 italic">Visual_Data_Matrix</div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">ART_GALLERY.</h2>
           </div>
           <p className="max-w-xs text-[#00ff41]/60 font-medium italic text-right">
             High-density character maps forming complex visual structures. No pixels, just text.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "THE_EYE", art: `   .---.
  /     \\
 (  (O)  )
  \\     /
   '---'` },
            { title: "THE_CORE", art: `   _____
  /     \\
 |  ( )  |
  \\_____/
     |
   --+--` },
            { title: "THE_NODE", art: `    /\\
   /  \\
  /----\\
 /      \\
/        \\` },
            { title: "SYSTEM_01", art: `[########]
[#  ##  #]
[#  ##  #]
[########]` },
            { title: "LOGIC_v2", art: `   _____
  |  _  |
  | | | |
  | |_| |
  |_____|` },
            { title: "VOID_INF", art: `   _  _
  ( )( )
   \\  /
    )(
   /  \\` }
          ].map((item, i) => (
            <div key={i} className="group bg-green-500/5 border border-[#00ff41]/20 rounded-2xl p-8 flex flex-col items-center justify-between hover:border-[#00ff41]/60 transition-all cursor-crosshair relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 text-[10px] font-black opacity-20">0{i + 1}</div>
               <pre className="text-lg md:text-2xl leading-tight group-hover:scale-110 transition-transform duration-500">
                 {item.art}
               </pre>
               <div className="mt-8 text-center space-y-2">
                 <div className="text-xs font-black uppercase italic tracking-widest">{item.title}</div>
                 <div className="text-[10px] font-bold opacity-30 italic">RENDERED_IN_CHARSET_v1</div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // 4. RetroBentoGrid: Pixelated bento layout
  RetroBentoGrid: () => (
    <div className="w-full py-24 bg-[#0a0a0a] text-white p-8 md:p-16 font-mono">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px]">
          <div className="md:col-span-8 md:row-span-2 bg-black border-4 border-zinc-800 rounded-3xl p-12 flex flex-col justify-between hover:border-white/40 transition-all group relative overflow-hidden">
             <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
             <div className="space-y-6 relative z-10">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center rounded-2xl">
                   <Cpu size={32} />
                </div>
                <h3 className="text-4xl font-black uppercase italic tracking-tighter">DATA_CENTER_ALPHA</h3>
                <p className="text-white/40 max-w-sm italic">High-performance computing modules for the modern web stack. 100% local, 100% secure.</p>
             </div>
             <div className="flex gap-4 relative z-10">
                <button className="px-8 py-3 bg-white text-black font-black uppercase italic text-sm">ACCESS_MODULE</button>
             </div>
          </div>

          <div className="md:col-span-4 md:row-span-1 bg-zinc-900 border-4 border-zinc-800 rounded-3xl p-8 flex items-center justify-between group hover:bg-white hover:text-black transition-all">
             <div className="text-3xl font-black italic">STORAGE</div>
             <Database size={32} className="opacity-40 group-hover:opacity-100" />
          </div>

          <div className="md:col-span-4 md:row-span-1 bg-zinc-900 border-4 border-zinc-800 rounded-3xl p-8 flex flex-col justify-between group hover:border-green-500 transition-all">
             <div className="flex justify-between items-center">
                <div className="text-xs font-black opacity-40 uppercase italic tracking-widest">Traffic</div>
                <Activity size={16} className="text-green-500" />
             </div>
             <div className="text-4xl font-black italic">2.4 TB/S</div>
          </div>

          <div className="md:col-span-4 md:row-span-2 bg-black border-4 border-zinc-800 rounded-3xl p-10 flex flex-col justify-between hover:border-blue-500 transition-all">
             <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                   <Shield size={24} />
                </div>
                <h3 className="text-3xl font-black uppercase italic leading-tight tracking-tighter">FIREWALL <br /> SECURE.</h3>
             </div>
             <div className="text-[10px] font-black uppercase italic text-white/20 tracking-[0.4em]">Auth_Protocol_v9</div>
          </div>

          <div className="md:col-span-4 md:row-span-1 bg-white text-black border-4 border-zinc-800 rounded-3xl p-8 flex items-center justify-between group cursor-pointer hover:invert transition-all">
             <span className="text-2xl font-black uppercase italic">DEPLOYS</span>
             <Zap size={32} />
          </div>

          <div className="md:col-span-4 md:row-span-1 bg-zinc-900 border-4 border-zinc-800 rounded-3xl p-8 flex items-center justify-center gap-6">
             <div className="text-center">
                <div className="text-2xl font-black italic tracking-tighter">120+</div>
                <div className="text-[8px] uppercase font-black text-white/20">Nodes</div>
             </div>
             <div className="w-px h-8 bg-white/10" />
             <div className="text-center">
                <div className="text-2xl font-black italic tracking-tighter">0.4ms</div>
                <div className="text-[8px] uppercase font-black text-white/20">Lat</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // 5. DosSystemMonitor: 16-bit system dashboard
  DosSystemMonitor: () => (
    <div className="w-full py-24 bg-[#000080] text-white p-8 md:p-16 font-mono relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="bg-[#c0c0c0] text-black border-b-4 border-r-4 border-black p-1 flex items-center justify-between px-4">
           <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-blue-800 flex items-center justify-center text-[10px] text-white">S</div>
              <span className="text-xs font-bold uppercase tracking-widest">SYSTEM_MONITOR_v3.11</span>
           </div>
           <div className="flex gap-1">
              <div className="w-6 h-6 border-2 border-white bg-[#c0c0c0] shadow-[inset_1px_1px_black] flex items-center justify-center font-bold">_</div>
              <div className="w-6 h-6 border-2 border-white bg-[#c0c0c0] shadow-[inset_1px_1px_black] flex items-center justify-center font-bold">X</div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {[
            { label: "MEMORY_USAGE", value: "640KB", detail: "BASE_RAM_OK", color: "green" },
            { label: "CPU_CYCLES", value: "33MHz", detail: "TURBO_MODE_ON", color: "yellow" },
            { label: "DISK_SPACE", value: "40MB", detail: "ST-251_DRIVE", color: "white" }
          ].map((stat, i) => (
            <div key={i} className="border-2 border-white bg-black p-8 shadow-[8px_8px_0_rgba(0,0,0,0.5)] space-y-6">
               <div className="text-xs font-black uppercase italic tracking-widest text-white/40">{stat.label}</div>
               <div className="text-5xl font-black italic tracking-tighter">{stat.value}</div>
               <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 bg-${stat.color}-500 animate-pulse`} />
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{stat.detail}</span>
               </div>
            </div>
          ))}
        </div>

        <div className="bg-black border-2 border-white p-12 text-center space-y-8">
           <h2 className="text-4xl font-black tracking-tighter uppercase italic">CRITICAL_SYSTEM_ALERT</h2>
           <p className="text-white/40 font-medium italic max-w-lg mx-auto leading-relaxed">
             Warning: Low memory detected in high memory area. Loading UIX modules into conventional memory.
           </p>
           <div className="flex justify-center gap-8">
              <button className="px-12 py-4 bg-[#c0c0c0] text-black border-t-2 border-l-2 border-white border-b-2 border-r-2 border-zinc-800 font-bold uppercase italic hover:bg-white transition-all">
                [ ABORT ]
              </button>
              <button className="px-12 py-4 bg-[#c0c0c0] text-black border-t-2 border-l-2 border-white border-b-2 border-r-2 border-zinc-800 font-bold uppercase italic hover:bg-white transition-all">
                [ RETRY ]
              </button>
              <button className="px-12 py-4 bg-[#c0c0c0] text-black border-t-2 border-l-2 border-white border-b-2 border-r-2 border-zinc-800 font-bold uppercase italic hover:bg-white transition-all">
                [ IGNORE ]
              </button>
           </div>
        </div>
      </div>
    </div>
  ),

  // 6. PixelatedButtonShowcase: 8-bit interactive elements
  PixelatedButtonShowcase: () => (
    <div className="w-full py-24 bg-zinc-100 text-black p-8 md:p-24 font-mono">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center space-y-4">
           <div className="text-xs font-black uppercase tracking-[0.8em] text-black/20 italic">Input_Methodology</div>
           <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">8-BIT_UI.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: "SELECT", color: "black", text: "white" },
            { label: "START", color: "green-500", text: "black" },
            { label: "BACK", color: "red-500", text: "white" },
            { label: "NEXT", color: "blue-600", text: "white" }
          ].map((btn, i) => (
            <div key={i} className="flex flex-col items-center gap-8">
               <button className={`w-full py-8 bg-${btn.color} text-${btn.text} border-b-8 border-r-8 border-black/30 font-black text-2xl uppercase italic hover:translate-y-2 hover:translate-x-2 hover:border-b-0 hover:border-r-0 transition-all active:scale-95`}>
                 {btn.label}
               </button>
               <div className="text-[10px] font-black uppercase italic tracking-widest opacity-20">Button_Type_0{i + 1}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
           {['A', 'B', 'X', 'Y', 'L', 'R'].map((key) => (
             <div key={key} className="w-16 h-16 rounded-full border-4 border-black bg-zinc-200 flex items-center justify-center font-black text-2xl shadow-[4px_4px_0_black] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer">
               {key}
             </div>
           ))}
        </div>
      </div>
    </div>
  ),

  // 7. AsciiDataStream: Vertical falling matrix characters
  AsciiDataStream: () => {
    const [streams, setStreams] = useState<{ x: number, y: number, chars: string[], speed: number }[]>([]);

    useEffect(() => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]";
      const newStreams = Array.from({ length: 20 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * -100,
        chars: Array.from({ length: 15 }).map(() => chars[Math.floor(Math.random() * chars.length)]),
        speed: 2 + Math.random() * 5
      }));
      setStreams(newStreams);

      const interval = setInterval(() => {
        setStreams(prev => prev.map(s => ({
          ...s,
          y: s.y > 110 ? -20 : s.y + s.speed / 5,
          chars: [chars[Math.floor(Math.random() * chars.length)], ...s.chars.slice(0, -1)]
        })));
      }, 50);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="w-full min-h-[600px] bg-black text-[#00ff41] p-8 md:p-24 font-mono relative overflow-hidden">
        {streams.map((s, i) => (
          <div key={i} className="absolute text-lg leading-none" style={{ left: `${s.x}%`, top: `${s.y}%` }}>
            {s.chars.map((char, j) => (
              <div key={j} style={{ opacity: (1 - j / s.chars.length), textShadow: j === 0 ? '0 0 10px #fff' : 'none', color: j === 0 ? '#fff' : '#00ff41' }}>
                {char}
              </div>
            ))}
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 bg-black/60 backdrop-blur-sm">
           <div className="space-y-6">
              <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase italic text-white mix-blend-difference">
                STREAM.
              </h1>
              <p className="max-w-md mx-auto text-green-500 font-bold italic tracking-widest text-xl bg-black/80 px-4 py-2">
                DECRYPTING_REALITY_v4.2
              </p>
           </div>
           
           <div className="mt-12 flex gap-8">
              <button className="px-10 py-4 bg-white text-black font-black uppercase italic hover:invert transition-all">
                [ INITIALIZE ]
              </button>
              <button className="px-10 py-4 border-2 border-green-500 text-green-500 font-black uppercase italic hover:bg-green-500 hover:text-black transition-all">
                [ BYPASS ]
              </button>
           </div>
        </div>
      </div>
    );
  },

  // 8. RetroLoadingStates: ASCII-based loading indicators
  RetroLoadingStates: () => (
    <div className="w-full py-24 bg-black text-[#00ff41] p-8 md:p-24 font-mono">
      <div className="max-w-4xl mx-auto space-y-20">
        <div className="text-center space-y-4">
           <div className="text-xs font-black uppercase tracking-[0.5em] text-green-500/40 italic">Process_Visualization</div>
           <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">LOADING_SEQUENCES.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-green-500/20 p-12 space-y-8 flex flex-col items-center justify-center group hover:bg-green-500/5 transition-all">
             <div className="text-4xl animate-spin duration-[2000ms]">/</div>
             <div className="text-center space-y-2">
                <div className="text-xs font-black uppercase italic tracking-widest">Spinning_Slash</div>
                <div className="text-[10px] opacity-40">WAITING_FOR_UPLINK...</div>
             </div>
          </div>

          <div className="border border-green-500/20 p-12 space-y-8 flex flex-col items-center justify-center group hover:bg-green-500/5 transition-all">
             <div className="flex gap-2">
                <div className="w-4 h-4 bg-green-500 animate-pulse" />
                <div className="w-4 h-4 bg-green-500 animate-pulse delay-75" />
                <div className="w-4 h-4 bg-green-500 animate-pulse delay-150" />
             </div>
             <div className="text-center space-y-2">
                <div className="text-xs font-black uppercase italic tracking-widest">Bit_Pulsar</div>
                <div className="text-[10px] opacity-40">PROCESSING_PACKETS...</div>
             </div>
          </div>

          <div className="md:col-span-2 border border-green-500/20 p-12 space-y-8 flex flex-col items-center justify-center group hover:bg-green-500/5 transition-all overflow-hidden">
             <div className="w-full max-w-md h-8 bg-green-500/10 border border-green-500/30 relative flex items-center px-1">
                <div className="h-4 bg-green-500 w-[65%] animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black italic">65%_COMPLETED</div>
             </div>
             <div className="text-center space-y-2">
                <div className="text-xs font-black uppercase italic tracking-widest">Progress_Bar_v1</div>
                <div className="text-[10px] opacity-40 italic">BUFFERING_NEURAL_INTERFACE_MODULES...</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // 9. PhosphorGlowInput: High-glow terminal inputs
  PhosphorGlowInput: () => (
    <div className="w-full py-24 bg-black text-[#00ff41] p-8 md:p-24 font-mono">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="space-y-4">
           <div className="text-xs font-black uppercase tracking-[0.5em] text-green-500/40 italic">User_Data_Entry</div>
           <h2 className="text-6xl font-black tracking-tighter uppercase italic leading-none">DATA_INPUT.</h2>
        </div>

        <form className="space-y-12" onSubmit={e => e.preventDefault()}>
           <div className="space-y-4 group">
              <label className="text-xs font-black uppercase italic tracking-widest opacity-40 group-focus-within:opacity-100 transition-opacity">IDENT_KEY_v1</label>
              <div className="relative">
                <input type="text" placeholder="ENTER_USERNAME..." className="w-full bg-black border-2 border-green-500/30 p-6 text-2xl font-black italic uppercase text-green-500 focus:border-green-500 focus:shadow-[0_0_30px_rgba(0,255,65,0.2)] outline-none transition-all placeholder:text-green-500/10" />
                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                   <Monitor size={24} className="opacity-20" />
                </div>
              </div>
           </div>

           <div className="space-y-4 group">
              <label className="text-xs font-black uppercase italic tracking-widest opacity-40 group-focus-within:opacity-100 transition-opacity">ACCESS_CODE</label>
              <div className="relative">
                <input type="password" placeholder="********" className="w-full bg-black border-2 border-green-500/30 p-6 text-2xl font-black italic uppercase text-green-500 focus:border-green-500 focus:shadow-[0_0_30px_rgba(0,255,65,0.2)] outline-none transition-all placeholder:text-green-500/10" />
                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                   <Shield size={24} className="opacity-20" />
                </div>
              </div>
           </div>

           <div className="pt-8">
              <button className="w-full py-8 bg-green-500 text-black font-black text-2xl uppercase italic hover:bg-white transition-all shadow-[0_10px_40px_rgba(0,255,65,0.3)] hover:shadow-none flex items-center justify-center gap-6">
                 <span>[ TRANSMIT_DATA ]</span>
                 <Command size={24} />
              </button>
           </div>
        </form>
      </div>
    </div>
  ),

  // 10. GlitchTextTerminal: Text with CRT glitch effect
  GlitchTextTerminal: () => (
    <div className="w-full py-24 bg-black text-white p-8 md:p-24 font-mono relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-zinc-900/10 z-0 pointer-events-none" />
      
      <div className="max-w-5xl w-full space-y-12 text-center relative z-10">
        <div className="relative group">
           <div className="absolute -inset-4 bg-white/5 blur-2xl group-hover:bg-white/10 transition-all" />
           <h1 className="text-[10rem] md:text-[15rem] font-black tracking-tighter uppercase italic leading-none relative">
              <span className="relative z-10">ERROR</span>
              <span className="absolute top-1 left-1 -z-10 text-rose-500 animate-glitch-1 opacity-70">ERROR</span>
              <span className="absolute -top-1 -left-1 -z-20 text-blue-500 animate-glitch-2 opacity-70">ERROR</span>
           </h1>
        </div>

        <div className="space-y-8">
           <p className="text-2xl text-white/40 font-medium italic max-w-2xl mx-auto leading-relaxed">
             System corruption detected at offset <span className="text-white">0x00FF41</span>. Critical failure in visual buffer rendering.
           </p>
           
           <div className="flex flex-col md:flex-row justify-center gap-12 pt-12">
              <div className="space-y-2">
                 <div className="text-4xl font-black italic">404</div>
                 <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Signal_Lost</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block" />
              <div className="space-y-2">
                 <div className="text-4xl font-black italic text-rose-500 animate-pulse">FIX</div>
                 <div className="text-[10px] font-black uppercase tracking-widest opacity-40">System_Repair</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block" />
              <div className="space-y-2">
                 <div className="text-4xl font-black italic">000</div>
                 <div className="text-[10px] font-black uppercase tracking-widest opacity-40">End_of_Line</div>
              </div>
           </div>
        </div>

        <div className="pt-16">
           <button className="px-16 py-6 bg-white text-black font-black text-2xl uppercase italic hover:invert transition-all relative group overflow-hidden">
              <div className="absolute inset-0 bg-rose-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative z-10">[ REBOOT_SYSTEM ]</span>
           </button>
        </div>
      </div>
    </div>
  ),

  // 11. TapeReelStorage: Rotating reels with data
  TapeReelStorage: () => (
    <div className="w-full py-24 bg-zinc-900 text-white p-8 md:p-24 font-mono flex flex-col items-center justify-center gap-16">
      <div className="flex gap-12 md:gap-32">
        {[0, 1].map(i => (
          <div key={i} className="relative group">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-zinc-700 bg-zinc-800 flex items-center justify-center animate-spin duration-[10s]">
               <div className="w-full h-1 bg-zinc-600 absolute rotate-0" />
               <div className="w-full h-1 bg-zinc-600 absolute rotate-45" />
               <div className="w-full h-1 bg-zinc-600 absolute rotate-90" />
               <div className="w-full h-1 bg-zinc-600 absolute rotate-135" />
               <div className="w-24 h-24 rounded-full bg-zinc-900 border-4 border-zinc-600 relative z-10" />
            </div>
            <div className="mt-8 text-center">
               <div className="text-xs font-black uppercase italic text-zinc-500">Reel_0{i + 1}</div>
               <div className="text-xl font-black italic">READING...</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="max-w-2xl w-full bg-black border-2 border-zinc-700 p-8 rounded-xl space-y-4">
         <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-2">Tape_Data_Stream</div>
         <div className="text-emerald-500/60 break-all text-xs leading-relaxed animate-pulse">
            {Array.from({ length: 400 }).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
         </div>
      </div>
    </div>
  ),

  // 12. BiosBootMenu: Classic system setup
  BiosBootMenu: () => {
    const [selected, setSelected] = useState(0);
    const items = ["Standard_CMOS_Setup", "Advanced_BIOS_Features", "Integrated_Peripherals", "Power_Management", "Load_Fail-Safe_Defaults", "Save_&_Exit_Setup"];
    
    return (
      <div className="w-full py-24 bg-blue-900 text-yellow-400 p-8 md:p-16 font-mono flex items-center justify-center">
        <div className="max-w-4xl w-full border-4 border-double border-yellow-400 p-8 space-y-12">
           <div className="text-center space-y-2 border-b-2 border-yellow-400/30 pb-6">
              <h2 className="text-3xl font-black uppercase italic">AMIBIOS_SETUP_UTILITY_v2.51</h2>
              <div className="text-xs font-bold opacity-60">(C) 1992 American Megatrends, Inc.</div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {items.map((item, i) => (
                <div key={i} 
                     className={`p-2 px-4 cursor-pointer transition-colors ${selected === i ? 'bg-red-600 text-white' : 'hover:text-white'}`}
                     onMouseEnter={() => setSelected(i)}>
                  {item}
                </div>
              ))}
           </div>

           <div className="border-t-2 border-yellow-400/30 pt-6 grid grid-cols-2 text-[10px] font-bold uppercase italic opacity-80">
              <div>ESC : Quit</div>
              <div>F10 : Save & Exit</div>
              <div>↑↓ : Select Item</div>
              <div>PU/PD : Modify</div>
           </div>
        </div>
      </div>
    );
  },

  // 13. RadarScanning: ASCII sweep animation
  RadarScanning: () => {
    const [angle, setAngle] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => setAngle(a => (a + 5) % 360), 50);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="w-full py-24 bg-black text-[#00ff41] p-8 flex flex-col items-center justify-center font-mono overflow-hidden">
        <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
           <div className="absolute inset-0 border-4 border-[#00ff41]/20 rounded-full" />
           <div className="absolute inset-0 border border-[#00ff41]/10 rounded-full scale-75" />
           <div className="absolute inset-0 border border-[#00ff41]/10 rounded-full scale-50" />
           <div className="absolute top-1/2 left-0 w-full h-px bg-[#00ff41]/20" />
           <div className="absolute left-1/2 top-0 w-px h-full bg-[#00ff41]/20" />
           
           <div className="absolute top-1/2 left-1/2 w-full h-[200px] bg-gradient-to-t from-[#00ff41]/40 to-transparent origin-left -translate-y-full"
                style={{ transform: `rotate(${angle}deg) translateY(-100%)` }} />
           
           {[
             { t: "OBJ_A", x: "20%", y: "30%", d: 100 },
             { t: "OBJ_B", x: "70%", y: "60%", d: 200 },
             { t: "OBJ_C", x: "40%", y: "80%", d: 300 }
           ].map((obj, i) => (
             <div key={i} className="absolute animate-pulse" style={{ left: obj.x, top: obj.y }}>
                <div className="w-2 h-2 bg-[#00ff41] rounded-full shadow-[0_0_10px_#00ff41]" />
                <div className="text-[8px] mt-1 font-black">{obj.t}</div>
             </div>
           ))}
        </div>
        <div className="mt-12 text-center space-y-2">
           <div className="text-xl font-black italic tracking-[0.4em]">SCANNING_AIRSPACE...</div>
           <div className="text-[10px] opacity-40 italic">LAT_40.7128_LON_74.0060</div>
        </div>
      </div>
    );
  },

  // 14. CommandPaletteRetro: Mono-font action bar
  CommandPaletteRetro: () => (
    <div className="w-full py-24 bg-zinc-100 text-black p-8 md:p-24 font-mono flex items-center justify-center">
       <div className="max-w-2xl w-full bg-white border-4 border-black shadow-[12px_12px_0_rgba(0,0,0,1)] p-1 overflow-hidden">
          <div className="bg-black text-white p-4 flex items-center gap-4">
             <Command size={20} />
             <input type="text" placeholder="TYPE_COMMAND_HERE..." className="bg-transparent border-none outline-none text-xl font-black italic uppercase w-full placeholder:text-zinc-700" autoFocus />
          </div>
          <div className="p-4 space-y-2">
             {[
               { cmd: "RUN_GEN_01", desc: "Initialize core generation" },
               { cmd: "LOG_EXPORT", desc: "Save system activity to disk" },
               { cmd: "SYS_REBOOT", desc: "Restart all interface modules" },
               { cmd: "HELP_DOCS", desc: "View technical manual" }
             ].map((item, i) => (
               <div key={i} className="flex items-center justify-between p-3 hover:bg-zinc-100 cursor-pointer group">
                  <div className="flex items-center gap-4">
                     <span className="text-zinc-400 text-xs">0{i+1}</span>
                     <span className="font-black italic uppercase">{item.cmd}</span>
                  </div>
                  <span className="text-[10px] font-bold opacity-0 group-hover:opacity-40 transition-opacity italic">{item.desc}</span>
               </div>
             ))}
          </div>
          <div className="bg-zinc-50 border-t border-zinc-200 p-4 flex justify-between text-[10px] font-black opacity-40 uppercase italic">
             <span>4_Commands_Found</span>
             <span>Press_Enter_to_Execute</span>
          </div>
       </div>
    </div>
  ),

  // 15. BinaryDataGrid: Matrix of logic
  BinaryDataGrid: () => (
    <div className="w-full py-24 bg-black text-[#00ff41] p-8 md:p-16 font-mono">
       <div className="max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-10 gap-2 opacity-20 hover:opacity-100 transition-opacity duration-1000">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="aspect-square border border-[#00ff41]/10 flex items-center justify-center text-[10px] font-black hover:bg-[#00ff41] hover:text-black transition-colors cursor-crosshair">
               {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
       </div>
       <div className="mt-12 text-center">
          <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-4">LOGIC_MATRIX.</h2>
          <p className="text-xs font-black opacity-40 italic tracking-widest">RAW_MEMORY_DUMP_v0.1</p>
       </div>
    </div>
  ),

  // 16. RetroToggleSwitch: ASCII interactive state
  RetroToggleSwitch: () => {
    const [isOn, setIsOn] = useState(false);
    return (
      <div className="w-full py-24 bg-zinc-200 text-black p-8 md:p-24 font-mono flex flex-col items-center gap-12">
         <div className="text-center space-y-4">
            <h3 className="text-3xl font-black uppercase italic tracking-tighter">HARDWARE_STATE</h3>
            <div className="text-[10px] font-black opacity-40 italic">Toggle_Physical_Bridge</div>
         </div>
         
         <div className="flex items-center gap-8">
            <div className={`text-4xl font-black italic transition-opacity ${!isOn ? 'opacity-100' : 'opacity-10'}`}>[ OFF ]</div>
            <div className="w-48 h-20 bg-black p-2 flex cursor-pointer" onClick={() => setIsOn(!isOn)}>
               <div className={`h-full w-1/2 bg-white transition-all duration-300 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] flex items-center justify-center font-black italic ${isOn ? 'translate-x-full bg-green-500' : ''}`}>
                  {isOn ? 'ON' : 'OFF'}
               </div>
            </div>
            <div className={`text-4xl font-black italic transition-opacity ${isOn ? 'opacity-100' : 'opacity-10'}`}>[ ON ]</div>
         </div>
         
         <div className="flex gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className={`w-4 h-4 rounded-full border-2 border-black ${isOn ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-zinc-400'}`} />
            ))}
         </div>
      </div>
    );
  },

  // 17. TeletextInfoSection: Blocky retro broadcast style
  TeletextInfoSection: () => (
    <div className="w-full py-24 bg-black text-white p-8 md:p-16 font-mono flex items-center justify-center">
       <div className="max-w-4xl w-full bg-black border-4 border-zinc-800 p-8 space-y-12">
          <div className="flex justify-between items-center border-b-4 border-zinc-800 pb-4">
             <div className="bg-white text-black px-4 py-1 text-2xl font-black italic">P100</div>
             <div className="text-xl font-black italic tracking-widest uppercase">UIX_BROADCAST</div>
             <div className="text-xl font-black italic text-yellow-400">20:25:01</div>
          </div>
          
          <div className="space-y-8">
             <h2 className="text-6xl font-black italic tracking-tighter uppercase leading-none">
                <span className="bg-red-600 px-4">LATEST</span> <br />
                <span className="bg-blue-600 px-4">NEWS_ALERT</span>
             </h2>
             
             <div className="space-y-4 text-2xl font-black italic leading-tight">
                <div className="flex gap-4"><span className="text-cyan-400">01</span> NEXT.JS 15 DEPLOYED SUCCESSFULLY</div>
                <div className="flex gap-4"><span className="text-cyan-400">02</span> TAILWIND CSS V4 INTEGRATION OK</div>
                <div className="flex gap-4"><span className="text-cyan-400">03</span> ASCII CATEGORY REACHES 100%</div>
             </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4 pt-12">
             <div className="bg-red-600 h-4" />
             <div className="bg-green-600 h-4" />
             <div className="bg-yellow-400 h-4" />
             <div className="bg-blue-600 h-4" />
          </div>
       </div>
    </div>
  ),

  // 18. AsciiMapExplorer: Text-based geographic map
  AsciiMapExplorer: () => (
    <div className="w-full py-24 bg-[#0a0a0a] text-emerald-500 p-8 md:p-16 font-mono overflow-hidden">
       <div className="max-w-6xl mx-auto space-y-12 relative">
          <div className="absolute top-0 right-0 text-right space-y-2 opacity-40">
             <div className="text-xs font-black italic uppercase">Sector_07_Grid</div>
             <div className="text-[10px] font-bold">SCAN_IN_PROGRESS...</div>
          </div>
          
          <div className="border-2 border-emerald-500/20 p-12 bg-black/40 backdrop-blur-sm rounded-3xl relative overflow-hidden group">
             <pre className="text-[10px] md:text-sm leading-none opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
{`   . _..oooOOOOOOOOOOOooo.._ .
  .      '''''OOOOOOOOO'''''      .
 .           'OOOOO'           .
.             'OOO'             .
.              'O'              .
.                               .
.     [X] NYC         [X] LON   .
.                               .
.             [X] TYO           .
.                               .
 .                             .
  .                           .
   ' .                     . '
       ' . _         _ . '
             ' ' ' ' '`}
             </pre>
             
             <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 p-4 bg-black border border-emerald-500 flex flex-col gap-2 shadow-2xl animate-in zoom-in duration-500">
                <div className="text-xs font-black italic uppercase text-white">NYC_NODE_ACTIVE</div>
                <div className="text-[10px] font-bold opacity-60 italic">LAT: 40.71 | LON: -74.00</div>
                <div className="h-1 w-full bg-emerald-500" />
             </div>
          </div>
          
          <div className="flex justify-between items-end">
             <div className="space-y-4">
                <h3 className="text-4xl font-black italic uppercase tracking-tighter">GLOBAL_NETWORK.</h3>
                <p className="text-emerald-500/40 font-medium italic max-w-sm">
                   Mapping the digital infrastructure across text-based coordinate systems.
                </p>
             </div>
             <button className="px-12 py-4 bg-emerald-500 text-black font-black uppercase italic hover:bg-white transition-all">
                [ DOWNLOAD_COORDS ]
             </button>
          </div>
       </div>
    </div>
  ),

  // 19. TerminalFileBrowser: ASCII file navigation
  TerminalFileBrowser: () => (
    <div className="w-full py-24 bg-black text-[#00ff41] p-8 md:p-24 font-mono">
       <div className="max-w-4xl mx-auto border-2 border-[#00ff41]/20 rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-[#00ff41]/10 p-4 border-b border-[#00ff41]/20 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <Database size={16} />
                <span className="text-xs font-black uppercase tracking-widest">FILE_EXPLORER_v1.0</span>
             </div>
             <div className="text-[10px] opacity-40 italic">/home/root/projects/neon</div>
          </div>
          
          <div className="p-8 space-y-4">
             {[
               { n: "src/", t: "DIR", s: "4.2kb" },
               { n: "  components/", t: "DIR", s: "1.8kb" },
               { n: "    ASCIIRetro.tsx", t: "FILE", s: "24kb" },
               { n: "    AIDriven.tsx", t: "FILE", s: "18kb" },
               { n: "  lib/", t: "DIR", s: "0.4kb" },
               { n: "package.json", t: "FILE", s: "1.2kb" },
               { n: "README.md", t: "FILE", s: "4.5kb" }
             ].map((file, i) => (
               <div key={i} className="flex items-center justify-between hover:bg-[#00ff41]/5 p-2 px-4 cursor-pointer group">
                  <div className="flex items-center gap-6">
                     <span className="text-[10px] opacity-20 font-black">0{i+1}</span>
                     <span className={`font-black italic uppercase ${file.t === 'DIR' ? 'text-white' : 'text-[#00ff41]'}`}>
                        {file.n}
                     </span>
                  </div>
                  <div className="flex gap-8 text-[10px] font-black italic opacity-40 group-hover:opacity-100">
                     <span>{file.t}</span>
                     <span>{file.s}</span>
                  </div>
               </div>
             ))}
          </div>
          
          <div className="p-4 bg-[#00ff41]/5 border-t border-[#00ff41]/20 flex items-center gap-4">
             <span className="text-white font-black animate-pulse">{">"}</span>
             <div className="w-2 h-4 bg-[#00ff41] animate-pulse" />
          </div>
       </div>
    </div>
  ),

  // 20. FinalASCIIHero: Complex animated scene
  FinalASCIIHero: () => (
    <div className="w-full min-h-screen bg-black text-white p-8 md:p-24 font-mono relative overflow-hidden flex flex-col items-center justify-center text-center">
       <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden text-[8px] leading-none break-all select-none animate-pulse">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
               {Array.from({ length: 100 }).map(() => Math.random().toString(36)[2]).join(' ')}
            </div>
          ))}
       </div>

       <div className="relative z-10 space-y-12">
          <div className="relative inline-block">
             <div className="absolute -inset-20 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse" />
             <pre className="text-[10px] md:text-sm lg:text-base leading-tight text-emerald-500 animate-in fade-in zoom-in duration-1000">
{`   ________________________________________________
  /                                                \\
 |    _________________________________________     |
 |   |                                         |    |
 |   |   [X] SYSTEM_ONLINE                     |    |
 |   |   [X] MISSION_50_20_COMPLETE            |    |
 |   |   [X] CATEGORY_08_FINALIZED             |    |
 |   |                                         |    |
 |   |   THANK_YOU_FOR_USING_UIX_PRO           |    |
 |   |_________________________________________|    |
 |                                                  |
  \\________________________________________________/
         |__________________________________|
      ___________________| |___________________
     /_________________________________________\\`}
             </pre>
          </div>

          <div className="space-y-6">
             <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
                MISSION <br /> <span className="text-emerald-500">ACCOMPLISHED.</span>
             </h1>
             <p className="max-w-2xl mx-auto text-xl text-white/40 font-medium italic leading-relaxed">
                20/20 ASCII & Retro variants successfully compiled and deployed. The system is now operating at peak efficiency.
             </p>
          </div>

          <div className="pt-12 flex flex-col md:flex-row justify-center gap-8">
             <button className="px-16 py-6 bg-white text-black font-black text-2xl uppercase italic hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-500/20">
                [ SYSTEM_SHUTDOWN ]
             </button>
             <button className="px-16 py-6 border-4 border-white text-white font-black text-2xl uppercase italic hover:bg-white hover:text-black transition-all">
                [ REBOOT_MISSION ]
             </button>
          </div>
       </div>
       
       <div className="absolute bottom-8 right-8 text-[10px] font-black uppercase italic text-white/20 tracking-widest">
          UIX_PRO_SYSTEM_CORE_v1.0.4_STABLE
       </div>
    </div>
  )
};

