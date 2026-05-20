"use client";

import React from 'react';
import { SmartImage } from '../SmartImage';
import { Terminal, Cpu, Zap, Shield, Globe, Activity, Lock, Search } from 'lucide-react';

export const CyberpunkTerminalHero = {
  // Variante 01: Classic Terminal (D02-V01)
  Classic: () => (
    <div className="w-full min-h-[600px] bg-black p-4 md:p-12 font-mono relative overflow-hidden flex flex-col">
      {/* Background Matrix-like effect (subtle) */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,170,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Terminal Header */}
      <div className="relative z-10 w-full max-w-5xl mx-auto border border-[#0fa]/30 bg-black/80 backdrop-blur-md rounded-t-lg overflow-hidden">
        <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-[#0fa]/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[10px] text-[#0fa]/50 uppercase tracking-widest">system_terminal_v4.0.1</span>
          <div className="w-12" />
        </div>
        
        <div className="p-8 md:p-12 space-y-6">
          <div className="flex items-center gap-3 text-[#0fa]">
            <Terminal size={20} />
            <span className="animate-pulse">root@neon-mainframe:~#</span>
            <span className="text-white">init_hero_sequence --style cyberpunk</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase">
              <span className="text-[#0fa]">CORE</span>_PROTOCOL
            </h1>
            <p className="text-[#0fa]/70 text-lg max-w-xl leading-relaxed">
              Infiltrate the mainframe. Access the forbidden data streams of the future. The revolution will be programmed.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <button className="px-8 py-3 bg-[#0fa] text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-[0_0_15px_rgba(0,255,170,0.5)]">
              Establish Connection
            </button>
            <button className="px-8 py-3 border border-[#0fa]/30 text-[#0fa] font-black uppercase text-xs tracking-widest hover:bg-[#0fa]/10 transition-all">
              Bypass Firewall
            </button>
          </div>

          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'UPLINK', val: 'ACTIVE', color: 'text-green-500' },
              { label: 'ENCRYPTION', val: 'AES-256', color: 'text-[#0fa]' },
              { label: 'THREAT_LVL', val: 'CRITICAL', color: 'text-red-500' },
              { label: 'PACKETS', val: '99.9% SYNC', color: 'text-[#0fa]' },
            ].map((stat, i) => (
              <div key={i} className="border border-[#0fa]/10 p-4 bg-white/5">
                <p className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className={`text-sm font-bold ${stat.color}`}>{stat.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 02: Neon Override (D02-V02)
  NeonOverride: () => (
    <div className="w-full min-h-[700px] bg-zinc-950 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Glitchy Background Image */}
      <SmartImage className="absolute inset-0 opacity-20 grayscale scale-110 blur-[2px]" isBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950" />
      
      {/* Scanning Lines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[size:100%_4px,3px_100%]" />

      <div className="relative z-10 text-center space-y-8">
        <div className="inline-block border-2 border-[#f0f] px-6 py-2 shadow-[0_0_15px_rgba(255,0,255,0.5)] mb-4">
          <span className="text-[#f0f] font-mono text-xs font-black uppercase tracking-[0.5em]">Emergency Alert</span>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black text-white italic tracking-tighter uppercase relative group">
          <span className="absolute -inset-1 text-[#0ff] opacity-50 blur-[2px] group-hover:animate-pulse">OVERRIDE</span>
          <span className="relative">OVERRIDE</span>
        </h1>
        
        <p className="text-zinc-400 font-mono text-xl max-w-2xl mx-auto">
          The system has been compromised. Embrace the chaos of the neon city. No rules, only code.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
          <button className="group relative px-12 py-4 bg-transparent overflow-hidden">
            <div className="absolute inset-0 border-2 border-[#0ff] group-hover:bg-[#0ff] transition-all" />
            <span className="relative z-10 text-[#0ff] group-hover:text-black font-black uppercase tracking-widest text-sm transition-colors">Accept Protocol</span>
          </button>
          <button className="group relative px-12 py-4 bg-transparent overflow-hidden">
            <div className="absolute inset-0 border-2 border-[#f0f] group-hover:bg-[#f0f] transition-all" />
            <span className="relative z-10 text-[#f0f] group-hover:text-black font-black uppercase tracking-widest text-sm transition-colors">Deny Access</span>
          </button>
        </div>
      </div>

      {/* Floating HUD Elements */}
      <div className="absolute top-12 left-12 hidden lg:block text-[#0ff]/30 font-mono text-[10px] space-y-2">
        <p>SYSTEM_REBOOT: FAILED</p>
        <p>MEM_LEAK: DETECTED</p>
        <p>SECTOR_7: PURGED</p>
      </div>
      <div className="absolute bottom-12 right-12 hidden lg:block text-[#f0f]/30 font-mono text-[10px] text-right space-y-2">
        <p>TRACE_ID: 9x-772-B</p>
        <p>LOCATION: UNKNOWN</p>
        <p>PROXY: ACTIVE</p>
      </div>
    </div>
  ),

  // Variante 03: Data Stream (D02-V03)
  DataStream: () => (
    <div className="w-full min-h-[800px] bg-black flex flex-col md:flex-row items-center relative overflow-hidden">
      {/* Falling Data Effect (Visual representation) */}
      <div className="absolute inset-0 flex justify-around opacity-20 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`w-px h-full bg-gradient-to-b from-transparent via-[#0fa] to-transparent animate-[fall_${3+i}s_linear_infinite]`} style={{ animationDelay: `${i*0.5}s` }} />
        ))}
      </div>

      <div className="w-full md:w-1/2 p-12 md:p-24 relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-4 text-[#0fa]">
            <Cpu size={32} />
            <div className="h-px flex-1 bg-gradient-to-r from-[#0fa] to-transparent" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
            STREAMING<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0fa] to-white">INFOSYS</span>
          </h1>
          
          <p className="text-zinc-500 text-lg leading-relaxed max-w-md font-mono">
            Direct uplink to the neural network. Synchronizing data packets across all sectors. Welcome to the stream.
          </p>

          <div className="pt-8 flex flex-col gap-4">
            <div className="flex items-center justify-between p-4 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm group cursor-pointer hover:border-[#0fa] transition-all">
              <span className="text-white font-bold uppercase tracking-widest text-xs">Initialize Sync</span>
              <Activity className="text-[#0fa] group-hover:scale-125 transition-transform" />
            </div>
            <div className="flex items-center justify-between p-4 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm group cursor-pointer hover:border-[#0fa] transition-all">
              <span className="text-white font-bold uppercase tracking-widest text-xs">Verify Hash</span>
              <Lock className="text-zinc-500 group-hover:text-[#0fa] transition-colors" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[400px] md:h-full relative border-l border-zinc-800">
        <SmartImage className="absolute inset-0 grayscale contrast-125 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
        
        {/* Floating Code Snippets */}
        <div className="absolute top-1/4 right-12 p-4 bg-black/80 border border-[#0fa]/20 font-mono text-[10px] text-[#0fa] space-y-1 animate-pulse">
          <p className="text-white font-bold underline mb-2">AUTH_PROCESS</p>
          <p>const key = generate_v4();</p>
          <p>if(key.valid) return true;</p>
          <p>else self_destruct();</p>
        </div>
      </div>
    </div>
  ),

  // Variante 04: Holographic HUD (D02-V04)
  HolographicHUD: () => (
    <div className="w-full min-h-[700px] bg-[#050505] flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      
      {/* Center HUD Circle */}
      <div className="absolute w-[600px] h-[600px] border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute w-[580px] h-[580px] border border-dashed border-cyan-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      <div className="absolute w-[400px] h-[400px] border border-cyan-500/30 rounded-full" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        <div className="w-20 h-20 bg-cyan-500/10 border border-cyan-500 rounded-full flex items-center justify-center mb-12 shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-pulse">
          <Globe className="text-cyan-400" size={40} />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-cyan-500/50">
          GLOBAL_NET
        </h1>
        
        <div className="h-[2px] w-64 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-12" />
        
        <p className="text-cyan-100/60 text-lg max-w-xl font-light tracking-wide leading-relaxed italic">
          "The future is a holographic projection of our digital intentions. Access the global network. Control the narrative."
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 border border-cyan-500/40 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-cyan-500 transition-all">
              <Search className="text-cyan-400 group-hover:text-black" />
            </div>
            <span className="text-[9px] text-cyan-500 font-bold uppercase tracking-widest">Deep Scan</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 border border-cyan-500/40 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-cyan-500 transition-all">
              <Zap className="text-cyan-400 group-hover:text-black" />
            </div>
            <span className="text-[9px] text-cyan-500 font-bold uppercase tracking-widest">Overload</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 border border-cyan-500/40 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-cyan-500 transition-all">
              <Shield className="text-cyan-400 group-hover:text-black" />
            </div>
            <span className="text-[9px] text-cyan-500 font-bold uppercase tracking-widest">Protocol</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 05: Night City (D02-V05)
  NightCity: () => (
    <div className="w-full min-h-screen bg-black flex flex-col justify-end relative overflow-hidden">
      <SmartImage className="absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      
      {/* City Rain Effect (Subtle) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />

      <div className="relative z-10 p-8 md:p-24 space-y-12">
        <div className="flex items-center gap-6">
          <div className="px-3 py-1 bg-yellow-500 text-black font-black text-[10px] uppercase tracking-tighter">
            Sector 04
          </div>
          <div className="h-px flex-1 bg-yellow-500/30" />
        </div>
        
        <div className="max-w-4xl space-y-6">
          <h1 className="text-7xl md:text-[12vw] font-black text-white leading-[0.85] tracking-tighter uppercase">
            NEON<br/><span className="text-yellow-500">DREAMS</span>
          </h1>
          <p className="text-zinc-400 text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
            The city never sleeps. Neither do the machines. Welcome to the underworld of high-tech and low-life.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 pt-12">
          <button className="px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-yellow-500 transition-all">
            Enter The City
          </button>
          <button className="px-12 py-5 border border-white/20 text-white font-black uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-black transition-all">
            Underground Map
          </button>
        </div>
      </div>

      <div className="absolute top-12 right-12 flex flex-col items-end gap-1">
        <div className="w-16 h-1 bg-yellow-500" />
        <div className="w-8 h-1 bg-yellow-500/50" />
        <div className="w-4 h-1 bg-yellow-500/20" />
      </div>
    </div>
  ),

  // Variante 06: Matrix Rain (D02-V06)
  MatrixRain: () => (
    <div className="w-full min-h-[600px] bg-black relative overflow-hidden flex items-center justify-center font-mono">
      <div className="absolute inset-0 opacity-20 pointer-events-none flex justify-around">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="text-[#0f0] text-[10px] [writing-mode:vertical-lr] animate-[matrix_5s_linear_infinite]" style={{ animationDelay: `${i * 0.3}s` }}>
            {Array.from({ length: 20 }, () => String.fromCharCode(0x30A0 + Math.random() * 96)).join('')}
          </div>
        ))}
      </div>
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-5xl md:text-8xl font-black text-[#0f0] tracking-[0.2em] [text-shadow:0_0_10px_#0f0]">SOURCE_CODE</h1>
        <div className="p-4 border-2 border-[#0f0] bg-black/80">
          <p className="text-[#0f0] text-sm italic">"I don't even see the code anymore..."</p>
        </div>
        <button className="px-12 py-3 border-2 border-[#0f0] text-[#0f0] hover:bg-[#0f0] hover:text-black transition-all font-bold uppercase tracking-widest">
          Enter The Matrix
        </button>
      </div>
    </div>
  ),

  // Variante 07: Glitch Warning (D02-V07)
  GlitchWarning: () => (
    <div className="w-full min-h-[600px] bg-[#1a0000] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-red-500/5 animate-pulse" />
      <div className="relative z-10 space-y-8 text-center px-4">
        <div className="w-24 h-24 border-4 border-red-500 rounded-full flex items-center justify-center mx-auto animate-bounce shadow-[0_0_20px_#f00]">
          <Activity className="text-red-500" size={48} />
        </div>
        <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter animate-[glitch_0.5s_infinite]">
          SYSTEM_FAIL
        </h1>
        <p className="text-red-400 font-mono text-xl max-w-lg mx-auto">
          CRITICAL ERROR DETECTED IN SECTOR 4-G. IMMEDIATE EVACUATION REQUIRED.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-10 py-4 bg-red-600 text-white font-black uppercase text-xs tracking-widest shadow-[4px_4px_0px_#000]">
            ISOLATE ERROR
          </button>
          <button className="px-10 py-4 border-2 border-red-600 text-red-600 font-black uppercase text-xs tracking-widest bg-black">
            IGNORE
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 08: Deep Web (D02-V08)
  DeepWeb: () => (
    <div className="w-full min-h-[700px] bg-zinc-950 flex flex-col font-mono text-zinc-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
      <div className="p-4 border-b border-zinc-900 flex justify-between items-center text-[10px] bg-black/50 relative z-10">
        <span className="flex items-center gap-2"><Lock size={12} className="text-red-900" /> ENCRYPTED_CHANNEL</span>
        <span className="text-zinc-800">UPLINK_STABLE // TOR_ACTIVE</span>
      </div>
      <div className="flex-1 flex flex-col md:flex-row relative z-10">
        <div className="w-full md:w-1/3 p-12 space-y-8 border-r border-zinc-900">
          <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 flex items-center justify-center">
            <Search size={32} className="text-zinc-700" />
          </div>
          <div className="space-y-4">
            <p className="text-white font-bold text-lg">HIDDEN_MARKET_v2</p>
            <p className="text-sm leading-relaxed italic">"Everything has a price. Especially the truth."</p>
          </div>
          <div className="space-y-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full bg-zinc-700 w-1/3" style={{ width: `${Math.random() * 100}%` }} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 p-12 md:p-24 flex flex-col justify-center items-center text-center space-y-10">
          <h1 className="text-7xl md:text-9xl font-black text-white/5 tracking-widest uppercase">UNCENSORED</h1>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase -mt-16">ANONYMOUS_VOID</h2>
          <div className="w-full max-w-md h-px bg-zinc-900" />
          <div className="flex gap-6">
            <button className="px-12 py-4 bg-zinc-900 text-zinc-400 hover:text-white transition-colors border border-zinc-800 text-xs font-bold uppercase tracking-widest">
              Access Vault
            </button>
            <button className="px-12 py-4 bg-white text-black font-black uppercase text-xs tracking-widest">
              Join Shadow
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 09: Cyber Mechanic (D02-V09)
  CyberMechanic: () => (
    <div className="w-full min-h-[600px] bg-[#111] flex flex-col items-center justify-center p-8 relative overflow-hidden border-y-8 border-yellow-500">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-4 bg-yellow-500" />)}
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
            INDUSTRIAL<br/><span className="text-yellow-500 underline decoration-8 underline-offset-8">UPGRADE</span>
          </h1>
          <p className="text-zinc-400 text-xl font-mono">ENHANCING_HUMAN_CAPACITY_V3.0</p>
          <div className="flex gap-4 pt-4">
            <button className="px-10 py-5 bg-yellow-500 text-black font-black uppercase text-sm italic hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_#fff]">
              Install Mod
            </button>
            <button className="px-10 py-5 border-4 border-white text-white font-black uppercase text-sm italic hover:-translate-y-2 transition-transform">
              Schematics
            </button>
          </div>
        </div>
        <div className="relative aspect-square border-8 border-zinc-800 bg-zinc-900 flex items-center justify-center group overflow-hidden">
          <SmartImage className="absolute inset-0 grayscale group-hover:scale-110 transition-transform duration-700 opacity-50" />
          <div className="relative z-10 p-8 border-4 border-yellow-500 text-yellow-500 font-black text-center animate-pulse">
            <Cpu size={64} className="mx-auto mb-4" />
            <span className="text-xs uppercase tracking-[0.4em]">Hardware Connected</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 10: Neon Grid Pulse (D02-V10)
  NeonGridPulse: () => (
    <div className="w-full min-h-[800px] bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 perspective-[1000px]">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,#0ff_2%,transparent_3%)] bg-[size:100%_40px] [transform:rotateX(60deg)] origin-bottom animate-[grid-move_2s_linear_infinite]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#0ff_1%,transparent_2%)] bg-[size:40px_100%] [transform:rotateX(60deg)] origin-bottom" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      
      <div className="relative z-10 text-center space-y-12">
        <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#0ff] italic tracking-tighter uppercase drop-shadow-[0_0_20px_#0ff]">
          RETROWAVE
        </h1>
        <div className="w-64 h-1 bg-gradient-to-r from-transparent via-[#f0f] to-transparent mx-auto" />
        <div className="flex flex-wrap justify-center gap-12">
          <div className="text-center">
            <p className="text-4xl font-black text-[#f0f] tracking-tighter">80s</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Vibe Level</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-[#0ff] tracking-tighter">∞%</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Aesthetics</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-white tracking-tighter">VHS</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Signal Type</p>
          </div>
        </div>
        <button className="px-16 py-5 bg-gradient-to-r from-[#f0f] to-[#0ff] text-white font-black uppercase text-sm tracking-[0.5em] hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,0,255,0.5)]">
          Play Session
        </button>
      </div>
    </div>
  ),

  // Variante 11: Security Breach (D02-V11)
  SecurityBreach: () => (
    <div className="w-full min-h-[600px] bg-black p-8 md:p-24 font-mono text-red-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1)_0%,transparent_70%)]" />
      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        <div className="flex items-center justify-between border-b-2 border-red-900 pb-4">
          <div className="flex items-center gap-4">
            <Shield size={32} className="animate-pulse" />
            <h2 className="text-2xl font-black uppercase tracking-widest">Breach_Alert</h2>
          </div>
          <span className="text-[10px] font-bold">ID: 0x9928-FAIL</span>
        </div>
        <div className="space-y-6">
          <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter italic">
            ACCESS<br/>DENIED.
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl">Intento de intrusión detectado. Protocolos de contención activados. Su ubicación ha sido enviada a las autoridades locales.</p>
        </div>
        <div className="p-8 border-2 border-red-500 bg-red-500/10 backdrop-blur-md">
          <p className="text-white font-bold mb-4 uppercase tracking-widest">CONSEQUENCE_PROTOCOL:</p>
          <ul className="space-y-2 text-xs uppercase tracking-tighter">
            <li>{">"} Hard Drive Wipe: IN PROGRESS (12%)</li>
            <li>{">"} Neural Trace: ESTABLISHED</li>
            <li>{">"} Law Enforcement: DISPATCHED</li>
          </ul>
        </div>
        <div className="flex gap-4 pt-4">
          <button className="px-12 py-4 bg-red-600 text-white font-black uppercase text-xs tracking-widest animate-pulse">
            EMERGENCY_EXIT
          </button>
          <button className="px-12 py-4 border-2 border-red-600 text-red-600 font-black uppercase text-xs tracking-widest hover:bg-red-600 hover:text-white transition-colors">
            RETRY_AUTH
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 12: Cyber Login (D02-V12)
  CyberLogin: () => (
    <div className="w-full min-h-[700px] bg-zinc-950 flex items-center justify-center p-8 relative overflow-hidden">
      <SmartImage className="absolute inset-0 opacity-20" isBackground />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative z-10 w-full max-w-md bg-zinc-900/80 border-2 border-[#0fa] p-12 space-y-10 shadow-[0_0_50px_rgba(0,255,170,0.2)]">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-[#0fa]/10 border border-[#0fa] rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-[#0fa]" size={24} />
          </div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter">SECURE_AUTH</h1>
          <p className="text-[#0fa]/50 font-mono text-[10px] uppercase tracking-widest">Mainframe Access Point</p>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-[#0fa] uppercase tracking-widest">User_Identity</label>
            <input type="text" placeholder="ROUT_ID_88" className="w-full bg-black border border-zinc-800 p-4 text-[#0fa] font-mono outline-none focus:border-[#0fa] transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-[#0fa] uppercase tracking-widest">Access_Key</label>
            <input type="password" placeholder="********" className="w-full bg-black border border-zinc-800 p-4 text-[#0fa] font-mono outline-none focus:border-[#0fa] transition-colors" />
          </div>
          <button className="w-full py-4 bg-[#0fa] text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,170,0.4)]">
            LOGIN_TO_GRID
          </button>
        </div>
        <div className="flex justify-between text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
          <span className="hover:text-[#0fa] cursor-pointer">Forgot Key?</span>
          <span className="hover:text-[#0fa] cursor-pointer">Request ID</span>
        </div>
      </div>
    </div>
  ),

  // Variante 13: Neon HUD Stats (D02-V13)
  NeonHUDStats: () => (
    <div className="w-full min-h-[600px] bg-black p-8 md:p-24 flex flex-col justify-between relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(255,0,255,0.1)_0%,transparent_50%)]" />
      
      <div className="relative z-10 flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-ping" />
            <h1 className="text-4xl font-black text-white tracking-tighter italic">NEON_PULSE</h1>
          </div>
          <p className="text-cyan-500/50 font-mono text-[10px] uppercase tracking-[0.5em]">Sector 04 // District Alpha</p>
        </div>
        <div className="text-right font-mono space-y-1">
          <p className="text-white font-bold">22:45:01</p>
          <p className="text-zinc-600 text-[10px]">LOCAL_TIME</p>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-zinc-500 font-bold uppercase tracking-widest text-xs border-l-2 border-cyan-500 pl-4">System Overview</h2>
          <div className="space-y-4">
            {['CPU_LOAD', 'MEM_USAGE', 'NET_SPEED'].map((s, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest mb-1">
                  <span>{s}</span>
                  <span className="text-white">88%</span>
                </div>
                <div className="h-1 w-full bg-zinc-900">
                  <div className="h-full bg-cyan-500 w-[88%]" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-48 h-48 border-4 border-dashed border-zinc-800 rounded-full flex items-center justify-center relative">
            <div className="absolute inset-0 border-4 border-cyan-500 rounded-full animate-spin [border-top-color:transparent] [border-right-color:transparent]" />
            <div className="text-center">
              <span className="text-5xl font-black text-white tracking-tighter">98.2</span>
              <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Accuracy</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-zinc-500 font-bold uppercase tracking-widest text-xs border-r-2 border-magenta-500 pr-4 text-right">Active Threats</h2>
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-3 bg-zinc-900 border-r-4 border-magenta-500 flex justify-between items-center group cursor-pointer hover:bg-magenta-500/10 transition-colors">
                <span className="text-[10px] text-white font-bold tracking-widest">THREAT_LVL_{i}</span>
                <Zap size={12} className="text-magenta-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pt-12">
        <button className="px-20 py-4 border-2 border-white text-white font-black uppercase text-[10px] tracking-[0.5em] hover:bg-white hover:text-black transition-all">
          Sync_Session
        </button>
      </div>
    </div>
  ),

  // Variante 14: Matrix Code (D02-V14)
  MatrixCode: () => (
    <div className="w-full min-h-[600px] bg-black p-8 md:p-24 flex items-center justify-center relative overflow-hidden font-mono">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0f0_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="relative z-10 w-full max-w-4xl space-y-12">
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-[#0f0]">
            <Terminal size={24} />
            <h3 className="text-xs font-bold uppercase tracking-[0.5em]">Decryption_In_Progress...</h3>
          </div>
          <h1 className="text-5xl md:text-[10vw] font-black text-white leading-none tracking-tighter uppercase [text-shadow:0_0_20px_rgba(0,255,0,0.5)]">
            THE_VOID<br/><span className="text-[#0f0]">IS_CALLING</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#0f0]/60 text-xs leading-relaxed uppercase tracking-tighter">
          <p>
            {">"} const reality = null;<br/>
            {">"} let destiny = Math.random();<br/>
            {">"} if (destiny {">"} 0.5) wakeup();<br/>
            {">"} else continue_dreaming();
          </p>
          <p>
            {">"} Accessing neural pathways...<br/>
            {">"} Synchronizing conscious layers...<br/>
            {">"} Warning: Ego death imminent.<br/>
            {">"} Welcome to the architecture.
          </p>
        </div>
        <button className="px-12 py-5 bg-[#0f0] text-black font-black uppercase text-xs tracking-[0.5em] hover:bg-white transition-all shadow-[0_0_30px_rgba(0,255,0,0.6)]">
          Wake_Up_Protocol
        </button>
      </div>
    </div>
  ),

  // Variante 15: Cyber Glitch V2 (D02-V15)
  CyberGlitchV2: () => (
    <div className="w-full min-h-[700px] bg-zinc-950 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,0,0,0.05)_0%,rgba(0,255,255,0.05)_100%)]" />
      <div className="relative z-10 text-center space-y-12">
        <div className="relative inline-block">
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase italic relative z-10 animate-[glitch_1s_infinite]">
            TRANSCEND
          </h1>
          <div className="absolute top-1 left-1 w-full h-full text-red-500 font-black tracking-tighter uppercase italic opacity-70 animate-[glitch-1_0.8s_infinite] z-0">TRANSCEND</div>
          <div className="absolute -top-1 -left-1 w-full h-full text-cyan-500 font-black tracking-tighter uppercase italic opacity-70 animate-[glitch-2_1.2s_infinite] z-0">TRANSCEND</div>
        </div>
        
        <p className="text-zinc-500 font-mono text-xl max-w-xl mx-auto uppercase tracking-widest leading-relaxed">
          Break the simulation. Reality is a construct of the digital mind.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <button className="group relative px-12 py-5 bg-white overflow-hidden transition-all hover:scale-105">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500 group-hover:h-full transition-all duration-300 opacity-20" />
            <span className="relative z-10 text-black font-black uppercase text-xs tracking-[0.4em]">Break Free</span>
          </button>
          <div className="flex items-center gap-4 text-zinc-700 font-black italic uppercase text-xs tracking-widest">
            <div className="h-px w-12 bg-zinc-800" />
            <span>Or stay asleep</span>
            <div className="h-px w-12 bg-zinc-800" />
          </div>
        </div>
      </div>
      
      {/* HUD Noise */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between text-[9px] font-bold text-zinc-800 uppercase tracking-widest">
        <span>Signal_Quality: 22%</span>
        <span className="animate-pulse">Connection_Error: Recalibrating...</span>
        <span>Build_v4.2.0-Alpha</span>
      </div>
    </div>
  ),

  // Variante 16: Neural Interface (D02-V16)
  NeuralInterface: () => (
    <div className="w-full min-h-[700px] bg-black flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.2)_0%,transparent_70%)]" />
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-square">
          <div className="absolute inset-0 border-2 border-[#0fa]/20 rounded-full animate-ping" />
          <div className="absolute inset-4 border border-[#0fa]/40 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Cpu size={120} className="text-[#0fa] drop-shadow-[0_0_20px_#0fa]" />
          </div>
          {/* Neural Connection Lines */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#0fa] to-transparent opacity-20" />
          <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#0fa] to-transparent opacity-20" />
        </div>
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-[#0fa] text-[#0fa] text-[10px] font-bold uppercase tracking-widest">
            Neural_Link: Established
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            BRAIN<br/><span className="text-[#0fa]">MACHINE</span>
          </h1>
          <p className="text-zinc-500 text-lg font-mono leading-relaxed">
            Synchronizing neural pathways with the mainframe. Experience the web at the speed of thought. 
          </p>
          <div className="flex gap-4">
            <button className="px-10 py-4 bg-[#0fa] text-black font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">
              Initiate Sync
            </button>
            <button className="px-10 py-4 border border-zinc-800 text-zinc-500 hover:text-[#0fa] hover:border-[#0fa] transition-all text-xs font-bold uppercase tracking-widest">
              View Stats
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 17: Satellite Uplink (D02-V17)
  SatelliteUplink: () => (
    <div className="w-full min-h-[600px] bg-[#02040a] relative overflow-hidden flex items-end">
      {/* Map Background (Visual Representation) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[size:50px_50px] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]" />
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-ping" />
        <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
      </div>

      <div className="relative z-10 w-full p-8 md:p-24 bg-gradient-to-t from-[#02040a] via-[#02040a]/80 to-transparent">
        <div className="max-w-4xl space-y-8">
          <div className="flex items-center gap-6">
            <Globe className="text-blue-500 animate-pulse" size={40} />
            <div className="space-y-1">
              <h2 className="text-blue-400 font-mono text-xs uppercase tracking-[0.4em]">Satellite_Feed_Active</h2>
              <p className="text-zinc-600 text-[10px] font-mono tracking-tighter uppercase">Lat: 35.6895° N | Lon: 139.6917° E</p>
            </div>
          </div>
          <h1 className="text-7xl md:text-[10vw] font-black text-white leading-none tracking-tighter uppercase">
            ORBITAL<br/>STRIKE.
          </h1>
          <div className="flex flex-wrap gap-8 items-center pt-8">
            <button className="px-12 py-5 bg-blue-600 text-white font-black uppercase text-xs tracking-[0.3em] hover:bg-blue-400 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              Target Lock
            </button>
            <div className="flex gap-4">
              <div className="w-12 h-12 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-500 hover:text-white hover:border-white cursor-pointer transition-all">
                <Search size={20} />
              </div>
              <div className="w-12 h-12 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-500 hover:text-white hover:border-white cursor-pointer transition-all">
                <Activity size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 18: Neon Alley (D02-V18)
  NeonAlley: () => (
    <div className="w-full min-h-[800px] bg-black relative overflow-hidden flex items-center">
      <SmartImage className="absolute inset-0 opacity-40 grayscale contrast-125" isBackground />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      
      {/* Neon Sign Visuals */}
      <div className="absolute top-20 right-20 space-y-4 hidden md:block">
        <div className="px-6 py-2 border-2 border-[#f0f] text-[#f0f] font-black text-2xl tracking-widest italic [text-shadow:0_0_10px_#f0f] animate-pulse">
          HOTEL
        </div>
        <div className="px-6 py-2 border-2 border-[#0ff] text-[#0ff] font-black text-2xl tracking-widest italic [text-shadow:0_0_10px_#0ff]">
          BAR
        </div>
      </div>

      <div className="relative z-10 px-8 md:px-24 max-w-3xl space-y-10">
        <div className="w-20 h-1 bg-[#f0f] shadow-[0_0_10px_#f0f]" />
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase italic">
          RAINY<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0f] to-[#0ff]">STREETS</span>
        </h1>
        <p className="text-zinc-400 text-xl font-light leading-relaxed">
          Donde el asfalto brilla bajo las luces de neón y los secretos se esconden en las sombras de la ciudad eterna.
        </p>
        <div className="flex gap-6 pt-6">
          <button className="px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-[#f0f] hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Explore Alley
          </button>
          <button className="px-12 py-5 border-2 border-white/20 text-white font-black uppercase text-xs tracking-widest hover:border-[#0ff] hover:text-[#0ff] transition-all">
            Find Dealer
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 19: Bunker Access (D02-V19)
  BunkerAccess: () => (
    <div className="w-full min-h-[600px] bg-[#1a1a1a] flex flex-col md:flex-row items-stretch relative overflow-hidden">
      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center space-y-12 bg-[#0c0c0c] relative z-10">
        <div className="space-y-4">
          <div className="flex gap-2">
            {[1, 2, 3].map(i => <div key={i} className="w-3 h-3 bg-red-600 rounded-sm animate-pulse" />)}
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase">
            RESTRICTED<br/><span className="text-red-600">AREA.</span>
          </h1>
        </div>
        <p className="text-zinc-500 font-mono text-lg leading-relaxed uppercase tracking-tighter">
          Nivel de autorización requerido: OMEGA. Cualquier intento de acceso no autorizado será penalizado.
        </p>
        <div className="space-y-4">
          <div className="p-6 border-2 border-zinc-800 bg-zinc-900/50 flex items-center justify-between group cursor-pointer hover:border-red-600 transition-all">
            <span className="text-zinc-500 group-hover:text-white font-black uppercase tracking-widest text-xs">Enter Passcode</span>
            <Lock className="text-zinc-800 group-hover:text-red-600" />
          </div>
          <button className="w-full py-6 bg-red-600 text-white font-black uppercase text-sm tracking-[0.5em] hover:bg-white hover:text-black transition-all">
            Scan Biometrics
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative min-h-[400px] border-l-8 border-red-600">
        <SmartImage className="absolute inset-0 grayscale contrast-150 brightness-50" />
        <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay" />
        {/* Laser Grid Visual */}
        <div className="absolute inset-0 flex flex-col justify-around py-12">
          {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-full h-px bg-red-600/40 animate-[pulse_2s_infinite]" style={{ animationDelay: `${i * 0.4}s` }} />)}
        </div>
      </div>
    </div>
  ),

  // Variante 20: System Architecture (D02-V20)
  SystemArchitecture: () => (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-12 relative overflow-hidden">
      {/* 3D-like Mainframe Visualization (Visual) */}
      <div className="absolute inset-0 perspective-[1000px] flex items-center justify-center opacity-20">
        <div className="w-[600px] h-[600px] border-8 border-[#0fa]/30 [transform:rotateX(45deg)_rotateZ(45deg)] animate-[spin_30s_linear_infinite]" />
        <div className="absolute w-[400px] h-[400px] border-4 border-[#0fa]/20 [transform:rotateX(-45deg)_rotateZ(-45deg)] animate-[spin_20s_linear_infinite_reverse]" />
      </div>

      <div className="relative z-10 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-[#0fa] font-mono text-sm tracking-[1em] uppercase">Architecture_Complete</h2>
          <h1 className="text-7xl md:text-[12vw] font-black text-white leading-none tracking-tighter uppercase">
            NEON<br/>MAINFRAME
          </h1>
        </div>
        
        <div className="flex flex-wrap justify-center gap-16 pt-8">
          <div className="text-center space-y-2">
            <span className="text-4xl font-black text-white">D02</span>
            <p className="text-[10px] font-bold text-[#0fa] uppercase tracking-widest">Design Code</p>
          </div>
          <div className="text-center space-y-2">
            <span className="text-4xl font-black text-white">V20</span>
            <p className="text-[10px] font-bold text-[#0fa] uppercase tracking-widest">Variants Done</p>
          </div>
          <div className="text-center space-y-2">
            <span className="text-4xl font-black text-white">100%</span>
            <p className="text-[10px] font-bold text-[#0fa] uppercase tracking-widest">System Sync</p>
          </div>
        </div>

        <div className="pt-12">
          <button className="px-16 py-5 bg-transparent border-2 border-[#0fa] text-[#0fa] font-black uppercase text-sm tracking-[0.5em] hover:bg-[#0fa] hover:text-black transition-all shadow-[0_0_30px_rgba(0,255,170,0.3)]">
            Execute Design 03
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 flex gap-4 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
        <span>Memory_Optimized</span>
        <span>/</span>
        <span>Build_Stable</span>
      </div>
    </div>
  )
};


