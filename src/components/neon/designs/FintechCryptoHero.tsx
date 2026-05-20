"use client";

import React from 'react';
import { 
  Wallet, 
  TrendingUp, 
  Coins, 
  Lock, 
  RefreshCw, 
  ArrowUpRight, 
  ArrowDownRight, 
  Sparkles, 
  Shield, 
  Zap, 
  BarChart3, 
  PieChart, 
  Globe, 
  Activity, 
  Terminal, 
  Compass, 
  Feather, 
  Flame, 
  Sliders, 
  Cpu, 
  Layers, 
  Eye, 
  Settings, 
  Command, 
  Database,
  ArrowRight,
  ChevronRight,
  Percent,
  Server,
  DollarSign
} from 'lucide-react';
import { SmartImage } from '../SmartImage';

export const FintechCryptoHero = {
  // Variante 01: Modern Bento (Modular oscuro, acentos en oro y verde cripto)
  ModernBento: () => (
    <div className="w-full min-h-screen bg-[#070A13] text-slate-100 py-24 px-8 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(212,175,55,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <Sparkles size={14} className="animate-pulse" />
            <span>Smart Wallet Pro v2.4</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-white">
            Wealth management, <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-[#D4AF37] bg-clip-text text-transparent">reimagined for Web3.</span>
          </h1>
          <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
            The premium multi-chain terminal. Seamlessly trade, stake, and grow your digital estate in one unified bento environment.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-2xl font-bold text-lg transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)] flex items-center gap-2">
              <span>Connect Wallet</span>
              <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 rounded-2xl font-bold text-lg transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
          {/* Main Balance Box */}
          <div className="md:col-span-8 bg-slate-950/80 border border-slate-800 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex justify-between items-start">
              <div className="space-y-4">
                <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">Total Net Worth</div>
                <div className="text-5xl md:text-6xl font-black tracking-tight text-white">$142,504.82</div>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold bg-emerald-500/10 px-3 py-1 rounded-full w-fit">
                  <TrendingUp size={16} />
                  <span>+14.2% this week</span>
                </div>
              </div>
              <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20">
                <Wallet size={32} />
              </div>
            </div>
            <div className="mt-12 h-32 flex items-end gap-2 relative z-10">
              {[45, 60, 50, 75, 65, 80, 95, 85, 110].map((h, i) => (
                <div key={i} className="flex-1 bg-slate-900 hover:bg-emerald-500/20 rounded-t-lg transition-all relative overflow-hidden h-full flex items-end">
                  <div className="w-full bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t-lg shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-1000" style={{ height: `${h}%` }} />
                </div>
              ))}
            </div>
          </div>

          {/* APY Box */}
          <div className="md:col-span-4 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">Staking Yield</div>
                <div className="text-4xl font-extrabold text-white">18.42% <span className="text-sm font-bold text-[#D4AF37]">APY</span></div>
              </div>
              <Coins size={28} className="text-[#D4AF37]" />
            </div>
            <div className="space-y-4">
              <div className="text-xs text-slate-400 font-medium">Auto-compounding active on 14 pools. Boost rewards instantly.</div>
              <button className="w-full py-3 bg-[#D4AF37] text-slate-950 font-bold rounded-xl hover:brightness-110 transition-all text-sm uppercase tracking-wider">
                Manage Pools
              </button>
            </div>
          </div>

          {/* Security Box */}
          <div className="md:col-span-4 bg-slate-950/80 border border-slate-800 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-2xl hover:border-slate-700 transition-all">
            <div className="flex justify-between items-center">
              <div className="p-3 bg-slate-900 text-emerald-400 rounded-xl border border-slate-800">
                <Shield size={24} />
              </div>
              <span className="text-xs text-slate-400 font-bold tracking-widest">MULTI-SIG ACTIVE</span>
            </div>
            <div className="space-y-2">
              <div className="text-white font-bold text-xl">Cold Vault Secure</div>
              <p className="text-slate-400 text-sm">3 of 5 signature keys verified globally.</p>
            </div>
          </div>

          {/* Live Markets */}
          <div className="md:col-span-8 bg-slate-950/80 border border-slate-800 rounded-[2.5rem] p-8 flex items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-4 max-w-xs">
              <h3 className="text-2xl font-bold text-white">Cross-Chain Bridge</h3>
              <p className="text-slate-400 text-sm">Transfer assets with gas-optimized routes across 12 chains instantly.</p>
              <button className="px-6 py-2.5 bg-slate-900 border border-slate-800 rounded-xl font-bold text-xs text-slate-300 hover:text-white transition-all uppercase tracking-wider">
                Open Bridge
              </button>
            </div>
            <div className="flex-1 aspect-[16/6] bg-slate-900/50 rounded-2xl border border-slate-800/80 overflow-hidden relative opacity-60">
              <SmartImage className="w-full h-full object-cover grayscale opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 02: CyberTerminal (HUD táctico, velas japonesas y terminal de trading)
  CyberTerminal: () => (
    <div className="w-full min-h-screen bg-[#030303] text-cyan-400 p-6 md:p-12 font-mono relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#00f0ff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px]" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* Terminal logs */}
        <div className="lg:col-span-3 space-y-6">
          <div className="p-6 border border-cyan-500/20 bg-black/60 backdrop-blur-xl space-y-4 relative shadow-[0_0_20px_rgba(0,240,255,0.05)]">
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500" />
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <Terminal size={14} className="animate-pulse" />
              <span>ORDER_FLOW</span>
            </div>
            <div className="space-y-2 text-[11px] text-cyan-400/70">
              <div className="flex justify-between"><span>BTC_LMT: buy 1.25</span><span className="text-emerald-400">FILLED</span></div>
              <div className="flex justify-between"><span>ETH_MKT: sell 12.8</span><span className="text-emerald-400">FILLED</span></div>
              <div className="flex justify-between"><span>SOL_STK: locked 400</span><span className="text-[#ff00a0]">PEND</span></div>
              <div className="flex justify-between"><span>DOGE_LMT: cancel 5000</span><span className="text-slate-400">CNCL</span></div>
            </div>
          </div>

          <div className="p-6 border border-[#ff00a0]/20 bg-black/60 backdrop-blur-xl space-y-3 relative shadow-[0_0_20px_rgba(255,0,160,0.05)]">
            <div className="text-[10px] font-bold uppercase text-[#ff00a0] tracking-[0.3em]">GAS_ESTIMATE</div>
            <div className="flex justify-between items-baseline">
              <span className="text-3xl font-bold text-white italic">12 Gwei</span>
              <Zap size={18} className="text-[#ff00a0] animate-bounce" />
            </div>
            <div className="h-1.5 w-full bg-[#ff00a0]/10 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-[#ff00a0] shadow-[0_0_10px_#ff00a0]" />
            </div>
          </div>
        </div>

        {/* Trading HUD Main Panel */}
        <div className="lg:col-span-9 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-cyan-500/20 pb-6">
            <div className="space-y-1">
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
                CRYPTO_CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#ff00a0]">MATRIX.</span>
              </h1>
              <p className="text-xs text-cyan-500/60 uppercase tracking-widest">Global Decentralized Exchange HUD</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-cyan-500 hover:bg-white text-black font-black uppercase italic skew-x-[-8deg] transition-all shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                Launch trading
              </button>
              <button className="px-6 py-3 border border-white/20 hover:bg-white/5 text-white font-black uppercase italic skew-x-[-8deg] transition-all">
                Cold Wallet
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Candle chart simulation */}
            <div className="md:col-span-2 p-6 border border-cyan-500/20 bg-black/60 relative shadow-[0_0_20px_rgba(0,240,255,0.05)]">
              <div className="text-xs font-bold uppercase text-white/50 mb-6">BTC / USDT - Live Candlesticks</div>
              <div className="h-48 flex items-center justify-between gap-3 relative">
                <div className="absolute inset-x-0 h-px bg-cyan-500/10 top-1/4" />
                <div className="absolute inset-x-0 h-px bg-cyan-500/10 top-2/4" />
                <div className="absolute inset-x-0 h-px bg-cyan-500/10 top-3/4" />
                {[
                  { w: 1, c: 'h-16', bg: 'bg-emerald-500', t: 'h-24' },
                  { w: 2, c: 'h-24', bg: 'bg-emerald-500', t: 'h-32' },
                  { w: 3, c: 'h-10', bg: 'bg-red-500', t: 'h-20' },
                  { w: 4, c: 'h-20', bg: 'bg-emerald-500', t: 'h-28' },
                  { w: 5, c: 'h-12', bg: 'bg-red-500', t: 'h-24' },
                  { w: 6, c: 'h-28', bg: 'bg-emerald-500', t: 'h-36' },
                  { w: 7, c: 'h-16', bg: 'bg-red-500', t: 'h-28' }
                ].map((bar) => (
                  <div key={bar.w} className="flex-1 flex flex-col items-center justify-center h-full relative">
                    <div className={`w-0.5 bg-slate-600 absolute ${bar.t}`} />
                    <div className={`w-4 rounded-sm relative z-10 ${bar.c} ${bar.bg}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Matrix Stats */}
            <div className="p-6 border border-cyan-500/20 bg-black/60 relative flex flex-col justify-between">
              <div className="text-xs font-bold uppercase text-white/50">SYSTEM_INDEX</div>
              <div className="space-y-4 py-4">
                <div className="space-y-1">
                  <div className="text-[10px] uppercase text-cyan-500/50">Liquidity Index</div>
                  <div className="text-2xl font-bold text-white">99.84%</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] uppercase text-[#ff00a0]/60">Slippage Threshold</div>
                  <div className="text-2xl font-bold text-white">0.05% MAX</div>
                </div>
              </div>
              <div className="text-[10px] text-cyan-400/40">UPLINK_STABLE // POSIX_OS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 03: GlassExchange (Glassmorphism 3.0, transparencias y acentos de neon)
  GlassExchange: () => (
    <div className="w-full min-h-screen bg-gradient-to-tr from-[#0F0C20] via-[#15102A] to-[#0A0714] flex items-center justify-center p-8 font-sans overflow-hidden relative">
      <div className="absolute top-[-10%] left-[-15%] w-[45%] h-[45%] bg-blue-600 rounded-full blur-[140px] opacity-20" />
      <div className="absolute bottom-[-10%] right-[-15%] w-[45%] h-[45%] bg-[#ff00a0] rounded-full blur-[140px] opacity-15" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-cyan-400 font-bold text-xs shadow-xl shadow-black/20">
            <RefreshCw size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
            <span>Instant Liquid Swaps</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-[0.85]">
            Instant trade. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-[#ff00a0]">No custody.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-md font-medium">
            Swap native tokens with institutional liquidity and extreme low slip. Built on decentralized glassmorphic frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-10 py-4.5 bg-white text-[#0A0714] rounded-2xl font-black text-base shadow-2xl hover:scale-105 transition-all">
              Launch DEX app
            </button>
            <button className="px-10 py-4.5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl font-bold text-base transition-all">
              Documentation
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-8 bg-gradient-to-tr from-blue-500 to-[#ff00a0] rounded-[3.5rem] blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative aspect-square bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-white/10 pb-6">
              <span className="text-xs uppercase tracking-widest text-white/50 font-bold">Swap Assets</span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
            </div>

            <div className="space-y-4 py-8">
              {/* Pay field */}
              <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex justify-between items-center">
                <div className="space-y-1">
                  <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">You pay</span>
                  <div className="text-3xl font-black text-white">12.50</div>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/10 text-white font-bold text-sm">
                  <span>ETH</span>
                  <ArrowDownRight size={14} className="text-[#ff00a0]" />
                </div>
              </div>

              {/* Receive field */}
              <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex justify-between items-center">
                <div className="space-y-1">
                  <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">You receive</span>
                  <div className="text-3xl font-black text-white">40,124.95</div>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/10 text-white font-bold text-sm">
                  <span>USDC</span>
                  <ArrowUpRight size={14} className="text-emerald-400" />
                </div>
              </div>
            </div>

            <button className="w-full py-4.5 bg-gradient-to-r from-blue-500 to-[#ff00a0] hover:brightness-110 text-white font-bold rounded-2xl shadow-xl transition-all uppercase tracking-wider text-sm">
              Confirm Swap
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 04: NeoBrutalistSwap (Bordes negros duros, sombras planas y colores acidos)
  NeoBrutalistSwap: () => (
    <div className="w-full min-h-screen bg-[#00FFCC] flex items-center justify-center p-8 font-mono">
      <div className="max-w-5xl w-full bg-white border-[6px] border-black shadow-[16px_16px_0px_#000] p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-28 h-28 bg-[#FF3366] border-l-[6px] border-b-[6px] border-black flex items-center justify-center rotate-6 translate-x-8 -translate-y-8">
          <Zap size={44} className="text-white" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-black text-white px-5 py-1.5 border-[3px] border-black font-black uppercase tracking-wider text-xs -rotate-1">
              FINTECH_ENGINE_v4
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-black leading-[0.8] tracking-tighter uppercase">
              NO <br />
              <span className="bg-[#FF3366] text-white px-4 border-[4px] border-black inline-block my-2">FEES.</span>
            </h1>
            <p className="text-lg font-black text-black max-w-sm uppercase leading-tight">
              Raw peer-to-peer asset swap. No commissions, no middleman, direct blockchain execution.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-8 py-4 bg-black text-white font-black text-xl hover:bg-[#FF3366] transition-colors border-[4px] border-black shadow-[8px_8px_0px_rgba(0,0,0,0.15)] uppercase">
                Initiate swap
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-[4px] border-black p-6 shadow-[10px_10px_0px_#000] space-y-4">
              <div className="flex justify-between items-center border-b-[4px] border-black pb-3">
                <span className="text-sm font-black uppercase tracking-tight">Active Pool</span>
                <span className="text-xs bg-[#00FFCC] border-[2px] border-black px-2 py-0.5 font-bold">100% ONLINE</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-3xl font-black text-indigo-600 leading-none">$4.2M</div>
                  <div className="text-[10px] font-black uppercase text-black/50">24H Volume</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-black text-[#FF3366] leading-none">0.0%</div>
                  <div className="text-[10px] font-black uppercase text-black/50">Swap fees</div>
                </div>
              </div>
            </div>

            <div className="bg-black text-white border-[4px] border-black p-6 shadow-[10px_10px_0px_#00FFCC] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white text-black border-[2px] border-black">
                  <Lock size={20} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest">SYSTEM SECURED</span>
              </div>
              <ChevronRight size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 05: MinimalistOTC (Institutional premium, fondo negro puro, lineas 1px)
  MinimalistOTC: () => (
    <div className="w-full min-h-screen bg-black text-[#E5E5E5] flex items-center justify-center p-8 font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="text-[10px] font-bold uppercase tracking-[0.6em] text-slate-500">Institutional OTC Console</div>
          <h1 className="text-7xl md:text-8xl font-light tracking-tighter text-white uppercase italic leading-none">
            Heritage <br />
            <span className="text-slate-500 not-italic font-extrabold">& Capital.</span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-sm leading-relaxed">
            Exclusive multi-million dollar liquidity rails for corporate funds and elite family offices. Zero impact trades.
          </p>
          <div className="flex gap-8 items-center pt-4 border-t border-slate-900">
            <button className="text-sm font-bold uppercase tracking-widest text-white hover:text-slate-400 transition-colors">
              Access Private Desk
            </button>
            <div className="w-px h-8 bg-slate-800" />
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Verified AES-512</span>
          </div>
        </div>

        <div className="border border-slate-900 rounded-[2rem] bg-[#030303] p-10 flex flex-col justify-between aspect-square relative overflow-hidden group">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">OTC_SECURE</span>
              <div className="text-3xl font-extrabold tracking-tight text-white uppercase italic">LIQ_POOL_01</div>
            </div>
            <ArrowUpRight size={28} className="text-slate-500 group-hover:text-white transition-colors" />
          </div>

          <div className="space-y-4">
            <div className="h-px w-full bg-slate-900" />
            <div className="flex justify-between text-xs">
              <span className="text-slate-500 uppercase font-bold tracking-wider">Asset Class</span>
              <span className="text-white font-bold font-mono">XBT / USD</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500 uppercase font-bold tracking-wider">Execution Size</span>
              <span className="text-white font-bold font-mono">$10.0M+ Min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 06: ClayWallet (Aspecto neumorfico 3D y plastilina suave)
  ClayWallet: () => (
    <div className="w-full min-h-screen bg-[#E2F0FF] flex items-center justify-center p-8 font-sans">
      <div className="max-w-5xl w-full bg-[#E2F0FF] rounded-[3.5rem] p-12 md:p-16 shadow-[15px_15px_35px_#becbda,-15px_-15px_35px_#ffffff] border border-white/50 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 rounded-full text-blue-600 font-bold text-xs shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)]">
            <Wallet size={16} />
            <span>Cute Mobile Wallet</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-800 leading-none tracking-tight">
            Soft <br />
            <span className="text-blue-500">Savings.</span>
          </h1>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-sm">
            The friendliest crypto wallet ever built. Keep track of your coins in a beautifully tactile interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-4 bg-blue-500 text-white rounded-3xl font-black text-base shadow-[4px_4px_10px_rgba(59,130,246,0.3),inset_-3px_-3px_6px_rgba(0,0,0,0.2)] hover:scale-[1.02] transition-all">
              App Store
            </button>
            <button className="px-10 py-4 bg-white text-slate-700 rounded-3xl font-black text-base shadow-[4px_4px_10px_rgba(0,0,0,0.03),inset_2px_2px_4px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition-all">
              Google Play
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-white rounded-[3.5rem] shadow-[inset_8px_8px_16px_#becbda,inset_-8px_-8px_16px_#ffffff] p-10 flex flex-col justify-between overflow-hidden relative border border-white/40">
            <div className="flex justify-between items-center">
              <div className="w-14 h-14 bg-[#E2F0FF] rounded-2xl shadow-[3px_3px_6px_#becbda,-3px_-3px_6px_#ffffff] flex items-center justify-center text-blue-500">
                <Coins size={28} />
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-[10px] font-black shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05)]">SECURE</span>
            </div>

            <div className="space-y-4">
              <div className="h-3 w-1/4 bg-slate-100 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05)]" />
              <div className="h-8 w-full bg-slate-50 rounded-xl shadow-[inset_3px_3px_6px_#becbda,inset_-3px_-3px_6px_#ffffff] p-1 flex items-center">
                <div className="h-full w-2/3 bg-blue-500 rounded-lg shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.15)]" />
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-400 rounded-full shadow-[inset_4px_4px_8px_rgba(255,255,255,0.3)] flex items-center justify-center text-white font-black text-sm rotate-12">
            FREE!
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 07: SwissTrading (Grid estricto, Helvética, funcionalismo suizo)
  SwissTrading: () => (
    <div className="w-full min-h-screen bg-[#F5F5F5] text-black p-8 md:p-20 font-sans uppercase">
      <div className="max-w-7xl mx-auto border-t-8 border-black pt-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-8 space-y-8">
          <h1 className="text-7xl md:text-[12rem] font-black leading-[0.75] tracking-tighter">
            SWISS <br />
            DEFI <br />
            CORE.
          </h1>
        </div>
        <div className="md:col-span-4 flex flex-col justify-between py-4">
          <div className="space-y-6">
            <span className="text-xs font-black tracking-[0.3em] border-b-4 border-black pb-2 inline-block">Order Execution Desk v5</span>
            <p className="text-xl font-bold leading-snug lowercase normal-case text-slate-700">
              High speed, structurally verified capital allocation. Built under strict functional guidelines of Swiss fintech frameworks.
            </p>
          </div>

          <div className="space-y-4 pt-12">
            <button className="w-full py-6 bg-black text-white font-black text-2xl hover:bg-red-600 transition-colors flex justify-between px-8 items-center group">
              <span>ENTER_EXCHANGE</span>
              <ArrowUpRight size={32} className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform" />
            </button>
            <div className="flex justify-between text-[10px] font-black tracking-widest text-slate-400">
              <span>ZURICH / BASEL</span>
              <span>©2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-0 border-t-2 border-black">
        {['USDT', 'BTC_VAULT', 'GAS_POOL', 'SWISS_CERT'].map((stat, i) => (
          <div key={i} className="p-6 border-r-2 border-black last:border-r-0 hover:bg-black hover:text-white transition-all cursor-pointer group">
            <span className="text-[9px] font-black block mb-6 text-slate-400 group-hover:text-white/50">NODE_0{i+1}</span>
            <div className="flex justify-between items-end">
              <span className="text-2xl font-black italic">{stat}</span>
              <span className="text-xs font-bold opacity-0 group-hover:opacity-100">RUNNING</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  // Variante 08: SolarFinance (Eco-Fintech Solarpunk, verde/dorado, luz y plantas)
  SolarFinance: () => (
    <div className="w-full min-h-screen bg-[#FCFAF5] flex items-center justify-center p-8 font-sans overflow-hidden relative">
      <div className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] bg-emerald-50 rounded-full blur-[100px] opacity-80" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[55%] h-[55%] bg-amber-50 rounded-full blur-[100px] opacity-80" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10">
          <div className="flex items-center gap-3 text-emerald-600 text-xs font-black tracking-[0.3em] uppercase">
            <div className="h-[2px] w-10 bg-emerald-500" />
            <span>Sustainable Wealth</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tight">
            Green <br />
            <span className="text-emerald-500 italic font-light tracking-tighter">Finance.</span>
          </h1>
          <p className="text-lg text-slate-500 font-light leading-relaxed max-w-md">
            Decentralized carbon credits and green index funds. Grow your wealth while funding real reforestation projects worldwide.
          </p>
          <div className="flex flex-wrap gap-6 items-center pt-2">
            <button className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-base shadow-xl shadow-emerald-100 flex items-center gap-3">
              <span>Invest Green</span>
              <ArrowUpRight size={18} />
            </button>
            <div className="flex items-center gap-2 text-emerald-900 font-black text-xs uppercase tracking-widest border-b-2 border-emerald-500 pb-1 cursor-pointer">
              <Globe size={16} />
              <span>Carbon offset stats</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-8 bg-emerald-500/5 blur-[80px] rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative aspect-[4/5] bg-white rounded-[2.5rem] p-10 shadow-2xl border border-emerald-50 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                  <PieChart size={24} />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-emerald-900/40 uppercase tracking-widest">CO2 Offset</div>
                  <div className="text-2xl font-black text-emerald-600 italic">42.8 Tons</div>
                </div>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((node) => (
                  <div key={node} className="flex items-center gap-4 group/item cursor-pointer">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all">
                      <Activity size={18} />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        <span>Re-wilding Node_0{node}</span>
                        <span className="text-emerald-500">ACTIVE</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: `${50 + (node * 15)}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0f2d22] text-white p-5 rounded-2xl flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/10 rounded-xl">
                  <Zap size={20} className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider italic">SOLAR_DEFI</div>
                  <div className="text-[9px] text-emerald-400 uppercase tracking-widest font-bold">Carbon Verified</div>
                </div>
              </div>
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 09: KineticPromo (Tipografia gigante, ticker marquesina y contraste)
  KineticPromo: () => (
    <div className="w-full min-h-screen bg-black flex items-center justify-center overflow-hidden font-sans relative">
      <div className="absolute inset-0 flex flex-col justify-between py-12 opacity-[0.04] select-none pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="text-[14rem] font-black leading-none whitespace-nowrap -translate-x-20 tracking-tighter uppercase italic text-white">
            CRYPTO STAKE YIELD BRIDGE
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center space-y-12 px-6">
        <div className="space-y-4">
          <div className="text-emerald-500 font-bold text-lg tracking-[0.4em] uppercase italic animate-pulse">
            SWAP_PROTOCOL_ACTIVE
          </div>
          <h1 className="text-7xl md:text-[16rem] font-black text-white leading-[0.75] tracking-tighter uppercase italic">
            GROW <br />
            <span className="text-transparent border-t-8 border-emerald-500 pt-3 inline-block">FAST.</span>
          </h1>
        </div>

        <div className="flex flex-col items-center gap-8">
          <p className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter max-w-2xl italic leading-none">
            Secure, uncustodied cross-chain swaps. <br /> Built for the modern liquidity pioneer.
          </p>
          <div className="flex gap-6">
            <button className="px-14 py-6 bg-white hover:bg-emerald-400 text-black font-black text-2xl uppercase italic transition-all shadow-[10px_10px_0px_rgba(16,185,129,0.3)]">
              Trade now
            </button>
            <button className="px-14 py-6 border-4 border-white hover:bg-white/10 text-white font-black text-2xl uppercase italic transition-all">
              API Docs
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 10: ASCIIPaperWallet (Terminal low-tech, arte y bordes ASCII)
  ASCIIPaperWallet: () => (
    <div className="w-full min-h-screen bg-[#070707] text-[#00FF55] flex items-center justify-center p-6 md:p-12 font-mono">
      <div className="max-w-4xl w-full border-4 border-[#00FF55] p-6 md:p-12 space-y-8 shadow-[0_0_30px_rgba(0,255,85,0.1)] relative">
        <div className="flex justify-between items-center text-xs opacity-60 border-b border-[#00FF55]/30 pb-4">
          <span>{">"} COLD_WALLET_GENERATOR_v1.0</span>
          <span>SECURE_UPLINK: ACTIVE</span>
        </div>

        <div className="space-y-8">
          <div className="text-xs md:text-sm leading-none whitespace-pre overflow-x-auto text-[#00FF55]">
            {" +---------------------------------------------------------+\n"}
            {" |  [ PRIVATE_KEY_GENERATION_SHEET ]                      |\n"}
            {" +---------------------------------------------------------+\n"}
            {" |                                                         |\n"}
            {" |  1. MOVEMENT_ENTROPY: COMPLETED (256 BITS)              |\n"}
            {" |  2. SHIELD_ISOLATION: SECURE                            |\n"}
            {" |  3. GENERATED_ADDRESS: 1A1zP1eP5QGefi2DMPTfTL5SLmv7Div  |\n"}
            {" |                                                         |\n"}
            {" +---------------------------------------------------------+"}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-4">
              <div className="text-sm font-bold uppercase tracking-wider">[ Console logs ]</div>
              <div className="bg-[#00FF55]/5 border border-[#00FF55]/20 p-4 space-y-1.5 opacity-80 text-xs">
                <div>{">"} Initializing cold vault sequence...</div>
                <div>{">"} Entropy collection finished.</div>
                <div>{">"} Key pair generated successfully.</div>
                <div className="animate-pulse">{">"} Waiting for offline print command...</div>
              </div>
            </div>

            <div className="md:col-span-4 border border-[#00FF55]/30 p-6 space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-white">Execution Options</div>
              <div className="space-y-3">
                <button className="w-full py-3 bg-[#00FF55] text-black font-bold hover:bg-white transition-all uppercase text-xs shadow-[4px_4px_0px_rgba(0,255,85,0.3)]">
                  [ Print paper key ]
                </button>
                <button className="w-full py-3 border border-[#00FF55] text-[#00FF55] font-bold hover:bg-[#00FF55]/10 transition-all uppercase text-xs">
                  [ Refresh Entropy ]
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 11: SkeuoVault (Skeuomorphism moderno, metal, oro, dial tridimensional)
  SkeuoVault: () => (
    <div className="w-full min-h-screen bg-radial from-[#222831] to-[#12161A] text-slate-100 p-8 md:p-20 font-sans relative">
      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        <div className="bg-gradient-to-b from-[#343F4F] to-[#1E2530] border border-[#4B5A70] rounded-[2.5rem] p-10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_25px_50px_rgba(0,0,0,0.6)] flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151921] border border-[#2F3949] rounded-full text-xs text-[#FFC83B] font-bold shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
              <Lock size={12} />
              <span>COLD_VAULT_SYSTEM</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Premium <span className="text-[#FFC83B]">Security</span>
            </h1>
            <p className="text-slate-400 text-sm max-w-sm">Secure your physical assets on-chain with multi-signature hardware protection.</p>
          </div>

          <div className="relative w-44 h-44 bg-gradient-to-b from-[#2E3643] to-[#1A202A] rounded-full border-[6px] border-[#3F4B5E] shadow-[inset_0_4px_8px_rgba(0,0,0,0.6),0_10px_20px_rgba(0,0,0,0.4)] flex items-center justify-center group cursor-pointer">
            <div className="w-32 h-32 bg-gradient-to-b from-[#FFC83B] to-[#D4AF37] rounded-full border-4 border-[#FFF] shadow-[0_4px_12px_rgba(212,175,55,0.4)] flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-1000">
              <div className="w-4 h-16 bg-[#1A202A] rounded-full transform rotate-90" />
            </div>
            <div className="absolute text-[10px] font-black text-white/40 uppercase tracking-widest bottom-2">DIAL</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 12: PastelCard (Pastel Cloud, onírico, sumamente redondeado)
  PastelCard: () => (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#FFEAF2] via-[#EAE9FF] to-[#DDF9FF] flex items-center justify-center p-8 font-sans overflow-hidden">
      <div className="max-w-4xl w-full bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/60 p-10 md:p-16 shadow-2xl relative">
        <div className="absolute top-[-100px] left-[-100px] w-60 h-60 bg-[#FFD1E3] rounded-full blur-[90px] opacity-60" />
        <div className="absolute bottom-[-100px] right-[-100px] w-60 h-60 bg-[#D4F3FF] rounded-full blur-[90px] opacity-60" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EAE9FF] text-[#7A73E6] rounded-full border border-white/60 text-xs font-bold shadow-sm">
              <Sparkles size={14} />
              <span>Dreamy Credit Cards</span>
            </div>
            <h1 className="text-5xl font-black text-[#4E4A7D] leading-none tracking-tight">
              Friendly <br />
              <span className="text-[#FF9EBC]">Credit.</span>
            </h1>
            <p className="text-slate-500 text-base font-light">
              Get an instant credit card with soft dreamy aesthetics. Fully integrated into your daily finance tools.
            </p>
            <button className="px-8 py-3.5 bg-[#FF9EBC] text-white rounded-full font-bold text-sm shadow-lg shadow-[#FF9EBC]/20 hover:scale-105 transition-all">
              Apply Now
            </button>
          </div>

          <div className="bg-gradient-to-tr from-[#FF9EBC] to-[#7A73E6] aspect-[1.6/1] rounded-[2.5rem] border border-white/40 p-8 text-white flex flex-col justify-between shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <div className="flex justify-between items-start">
              <div className="text-lg font-bold italic tracking-wider">DreamyCard</div>
              <Sparkles size={24} className="opacity-80" />
            </div>
            <div className="space-y-2">
              <div className="text-xl font-bold font-mono">**** **** **** 4012</div>
              <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest opacity-80">
                <span>Jane Doe</span>
                <span>05 / 30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 13: LiquidYield (Liquid Motion, cosmic flow, yield pools)
  LiquidYield: () => (
    <div className="w-full min-h-screen bg-[#070313] text-white py-24 px-8 font-sans relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#9D4EDD] via-[#FF007F] to-[#00F0FF] rounded-full blur-[140px] opacity-20 animate-pulse" />
      
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        <header className="border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-gradient-to-r from-[#FF007F] to-[#00F0FF] rounded-full text-[10px] font-bold uppercase tracking-wider">
              LIQUID_YIELD_v2
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white">Yield Farming Pools</h1>
          </div>
          <button className="px-8 py-3 bg-white text-black font-extrabold rounded-full hover:bg-[#00F0FF] hover:text-black transition-all uppercase text-xs shadow-2xl">
            Stream Funds
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] space-y-4 hover:border-[#FF007F]/40 transition-colors">
            <div className="text-xs uppercase tracking-wider text-slate-400">Yield Dynamic</div>
            <div className="text-4xl font-black text-white">24.84%</div>
            <p className="text-xs text-slate-400">Real-time yield compounding calculated across 8 multi-chain aggregates.</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] space-y-4 hover:border-[#00F0FF]/40 transition-colors">
            <div className="text-xs uppercase tracking-wider text-slate-400">Total Pooled</div>
            <div className="text-4xl font-black text-white">$4.82M</div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#FF007F] to-[#00F0FF]" style={{ width: '68%' }} />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] space-y-4 hover:border-[#9D4EDD]/40 transition-colors">
            <div className="text-xs uppercase tracking-wider text-slate-400">Audited Security</div>
            <div className="text-2xl font-black text-white">CERTIFIED SECURE</div>
            <div className="flex gap-1.5">
              <span className="text-[9px] px-2 py-0.5 border border-white/20 rounded-full uppercase">SSL</span>
              <span className="text-[9px] px-2 py-0.5 border border-[#00F0FF]/30 text-[#00F0FF] rounded-full uppercase">TLS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 14: HyperPopStake (Hyperpop, fucsia y amarillo acido, tipografía gigante)
  HyperPopStake: () => (
    <div className="w-full min-h-screen bg-[#390099] text-white py-24 px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12 relative">
        <header className="bg-[#FF0054] border-[5px] border-black rounded-3xl p-8 shadow-[10px_10px_0px_#FFBD00] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-[#FFBD00] text-black border-[2px] border-black rounded-full text-xs font-black uppercase tracking-wider">
              HYPER_STAKE_v1
            </span>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              High Yield <span className="text-[#FFBD00]">Staking</span>
            </h1>
          </div>
          <button className="px-8 py-3 bg-[#FFBD00] text-black font-black border-[4px] border-black rounded-xl shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-[0_0_0_#000] transition-all uppercase text-xs">
            Stake now!
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FFBD00] border-[4px] border-black rounded-2xl p-6 shadow-[8px_8px_0px_#000] space-y-4 text-black">
            <div className="text-[10px] font-black uppercase tracking-widest text-black/50">Core Yield</div>
            <div className="text-4xl font-black">42.5%</div>
            <div className="h-4 w-full bg-white border-[3px] border-black rounded-full overflow-hidden">
              <div className="h-full bg-[#FF0054] border-r-[3px] border-black" style={{ width: '85%' }} />
            </div>
          </div>

          <div className="bg-[#4EA8DE] border-[4px] border-black rounded-2xl p-6 shadow-[8px_8px_0px_#000] space-y-4 text-black">
            <div className="text-[10px] font-black uppercase tracking-widest text-black/50">Staked Core</div>
            <div className="text-3xl font-black text-white" style={{ textShadow: '1.5px 1.5px #000' }}>14,204 tokens</div>
            <div className="flex gap-1.5">
              <span className="px-2 py-0.5 bg-white border border-black rounded-full text-[9px] font-bold">ETH_NODE</span>
              <span className="px-2 py-0.5 bg-[#FFBD00] border border-black rounded-full text-[9px] font-bold">SOL_NODE</span>
            </div>
          </div>

          <div className="bg-white border-[4px] border-black rounded-2xl p-6 shadow-[8px_8px_0px_#FF0054] space-y-4 flex flex-col justify-between text-black">
            <div className="text-[10px] font-black uppercase tracking-widest text-black/40">Status</div>
            <div className="text-4xl font-black text-slate-900">100% OK</div>
            <div className="h-3 w-full bg-slate-100 border-[2px] border-black rounded-full overflow-hidden">
              <div className="h-full bg-[#FFBD00] border-r-[2px] border-black" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 15: BauhausIndex (Asimetría geométrica, colores primarios, rejillas)
  BauhausIndex: () => (
    <div className="w-full min-h-screen bg-[#F0F0F0] grid grid-cols-3 gap-0 border-8 border-black font-sans uppercase">
      <div className="bg-[#E63946] aspect-square border-r-8 border-black flex items-center justify-center">
        <div className="w-2/3 h-2/3 bg-black rounded-full" />
      </div>
      <div className="col-span-2 bg-[#A8DADC] p-10 flex flex-col justify-between">
        <h1 className="text-5xl md:text-7xl font-black leading-none text-black">Bau<br />haus<br />Index</h1>
        <p className="text-black font-bold border-t-8 border-black pt-4">DECENTRALIZED PORTFOLIOS</p>
      </div>
      <div className="col-span-2 bg-[#F1FAEE] p-10 border-t-8 border-black">
        <p className="text-black text-lg italic font-serif">Verified cross-chain indices. Structured wealth generation based on pure geometric form.</p>
      </div>
      <div className="bg-[#1D3557] aspect-square border-t-8 border-l-8 border-black" />
    </div>
  ),

  // Variante 16: AuroraWealth (Aurora Glow, gradientes fluidos premium, relajante)
  AuroraWealth: () => (
    <div className="w-full min-h-screen bg-slate-950 relative overflow-hidden font-sans">
      <div className="absolute -top-[40%] -left-[10%] w-[80%] h-[80%] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute -bottom-[40%] -right-[10%] w-[80%] h-[80%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-4xl mx-auto text-center py-32 px-8 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-emerald-400">
          <Sparkles size={14} />
          <span>Aurora Premium Wealth Manager</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
          Asset management, <br />
          made simple.
        </h1>
        <p className="text-slate-400 text-lg max-w-lg mx-auto">
          High end yield aggregation matching modern aesthetic layout standards. Experience pure light fluidness.
        </p>
        <button className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all">
          Connect Premium Desk
        </button>
      </div>
    </div>
  ),

  // Variante 17: SpotlightNodes (Interactive spotlight, rejilla de validación)
  SpotlightNodes: () => (
    <div className="w-full py-24 px-8 bg-zinc-950 relative group overflow-hidden font-mono">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-white">Global Nodes Monitor</h1>
          <p className="text-zinc-500 text-sm">Decentralized validators tracking active block creation rates.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((node) => (
            <div key={node} className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl space-y-4 shadow-xl">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">NODE_0{node}</span>
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase text-zinc-500">Uptime</span>
                <div className="text-xl font-bold text-white">99.98%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // Variante 18: FrostedDEX (Frosted 3D depth, cristal esmerilado en el espacio)
  FrostedDEX: () => (
    <div className="w-full min-h-screen bg-[#02050E] flex items-center justify-center p-8 font-sans overflow-hidden relative">
      <div className="absolute w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] top-1/4 left-1/4 animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] bottom-1/4 right-1/4" />

      <div className="max-w-4xl w-full bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-2xl backdrop-blur-md relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
              Deep space <br />
              liquidity interface.
            </h1>
            <p className="text-slate-400 text-sm">
              Trade decentralized digital derivatives with extreme low fees and zero slippage guaranteed.
            </p>
            <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-sm shadow-xl shadow-indigo-500/20 transition-all">
              Initialize Portal
            </button>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6 shadow-2xl">
            <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-white/10 pb-4">
              <span>Token Vault</span>
              <span className="text-indigo-400">ACTIVE</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-500 uppercase">Collateral</span>
                <div className="text-2xl font-black text-white">$14.2k</div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-500 uppercase">Gas fee</span>
                <div className="text-2xl font-black text-emerald-400">FREE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 19: IndustrialBond (Blueprint técnico verde, drafting table)
  IndustrialBond: () => (
    <div className="w-full min-h-screen bg-[#0A3D36] text-[#00FFDD] p-8 md:p-16 font-mono relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-5xl mx-auto space-y-10 relative z-10 border-2 border-[#00FFDD]/40 p-8 md:p-12 bg-[#0A3D36]/90 rounded-2xl shadow-2xl">
        <header className="border-b-2 border-[#00FFDD]/40 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-widest text-[#00FFDD]/70">[FINANCIAL_SPECIFICATION_SHEET_v1.0]</div>
            <h1 className="text-3xl font-extrabold uppercase tracking-wider text-white">DECENTRALIZED_BOND</h1>
          </div>
          <button className="px-6 py-3 border border-[#00FFDD] text-[#00FFDD] hover:bg-[#00FFDD]/10 transition-all font-bold uppercase text-xs">
            Download PDF
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-[#00FFDD]/40 p-6 space-y-2 relative">
            <span className="absolute top-2 right-2 text-[9px] text-[#00FFDD]/40">SEC_01</span>
            <span className="text-[10px] uppercase text-white/50">Maturity Yield</span>
            <div className="text-3xl font-extrabold text-white">1 : 8.4</div>
          </div>

          <div className="border border-[#00FFDD]/40 p-6 space-y-4 relative flex flex-col justify-between">
            <span className="absolute top-2 right-2 text-[9px] text-[#00FFDD]/40">SEC_02</span>
            <div className="space-y-1">
              <span className="text-[10px] uppercase text-white/50">Pooled Liquidity</span>
              <div className="text-3xl font-extrabold text-white">$1.2M USD</div>
            </div>
            <div className="h-3 w-full bg-[#0A3D36]/50 border border-[#00FFDD]/40 relative">
              <div className="h-full bg-[#00FFDD]/40" style={{ width: '64%' }} />
            </div>
          </div>

          <div className="border border-[#00FFDD]/40 p-6 space-y-2 relative">
            <span className="absolute top-2 right-2 text-[9px] text-[#00FFDD]/40">SEC_03</span>
            <span className="text-[10px] uppercase text-white/50">Audit Signature</span>
            <div className="text-2xl font-extrabold text-white">APPROVED</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 20: EditorialLegacy (Luxury Serif de fideicomiso y patrimonio premium)
  EditorialLegacy: () => (
    <div className="w-full min-h-screen bg-[#FBFBF9] text-[#1C1C1A] py-24 px-8 font-serif relative">
      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        <header className="border-b border-[#1C1C1A]/10 pb-10 flex flex-col md:flex-row justify-between items-baseline gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.4em] font-sans text-slate-400">The Heritage Guild</span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-slate-900 leading-none">
              Legacy <span className="italic font-normal">Vault</span>
            </h1>
          </div>
          <div className="flex gap-8 items-center font-sans text-xs tracking-widest">
            <button className="hover:text-amber-600 transition-colors uppercase">Heritage</button>
            <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
            <button className="px-6 py-2 border border-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white transition-all uppercase">
              Extract Vault Key
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-3">
              <span className="text-[9px] uppercase tracking-[0.3em] font-sans text-slate-400">Vision</span>
              <p className="text-xl font-light leading-relaxed italic text-slate-700">
                "Preserving wealth across generations through advanced high-trust multi-sig cryptographic protection."
              </p>
            </div>
            <div className="border-t border-[#1C1C1A]/10 pt-6 grid grid-cols-2 gap-6 font-sans">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Aesthetic Index</span>
                <div className="text-2xl font-light text-slate-800">9.9/10</div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Trust Factor</span>
                <div className="text-2xl font-light text-slate-800">100%</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white border border-[#1C1C1A]/10 rounded-2xl p-8 relative overflow-hidden shadow-sm">
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-center font-sans text-xs">
                <span className="text-[#d4af37] font-bold uppercase tracking-wider">Heritage trust</span>
                <span className="text-slate-400 uppercase">MUTUAL_VAULT</span>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-light text-slate-900">$24.8M USD</div>
                <p className="text-sm font-sans text-slate-400 max-w-sm">Premium multi-sig portfolio structured specifically for long term legacy capital protection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
