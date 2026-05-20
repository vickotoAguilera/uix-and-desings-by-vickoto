"use client";

import React from 'react';
import { Check, Zap, Star, Shield, Rocket, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const PricingVariants: Record<string, React.FC> = {
  Minimalist: () => (
    <div className="p-8 bg-white border border-zinc-200 rounded-3xl text-zinc-900 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Essential</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-black">$29</span>
        <span className="text-zinc-400">/mo</span>
      </div>
      <ul className="space-y-3 mb-8">
        {['5 Projects', 'Basic Support', '1GB Storage'].map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-zinc-600">
            <Check size={16} className="text-emerald-500" /> {item}
          </li>
        ))}
      </ul>
      <button className="w-full py-3 bg-zinc-900 text-white rounded-xl font-bold hover:bg-zinc-800 transition-colors">
        Get Started
      </button>
    </div>
  ),

  NeonCyberpunk: () => (
    <div className="p-8 bg-black border-2 border-emerald-500/30 rounded-3xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors" />
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full" />
      
      <div className="relative z-10">
        <h3 className="text-emerald-400 font-mono text-lg mb-2 flex items-center gap-2">
          <Zap size={20} className="animate-pulse" /> PROTOCOL_X
        </h3>
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">$99</span>
          <span className="text-emerald-900 font-mono text-sm">/CYCLE</span>
        </div>
        <ul className="space-y-3 mb-8 font-mono text-sm text-emerald-100/70">
          {['∞ BANDWIDTH', 'NEURAL_LINK_V2', 'ENCRYPTED_OPS'].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_5px_#10b981]" /> {item}
            </li>
          ))}
        </ul>
        <button className="w-full py-4 bg-emerald-500 text-black font-black rounded-lg uppercase tracking-tighter hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all active:scale-95">
          INITIALIZE_NODE
        </button>
      </div>
    </div>
  ),

  NeonPink: () => (
    <div className="p-8 bg-zinc-950 border border-pink-500/50 rounded-3xl relative group">
      <div className="absolute inset-0 border-2 border-pink-500/20 rounded-3xl scale-105 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <h3 className="text-pink-500 font-black italic text-2xl mb-4">VAPORWAVE</h3>
      <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
        $49
      </div>
      <ul className="space-y-4 mb-8">
        {['Retro Filter Pack', 'Unlimited Dreams', 'Aesthetic Support'].map((item) => (
          <li key={item} className="text-pink-200/60 text-sm border-b border-pink-500/10 pb-2">
            {item}
          </li>
        ))}
      </ul>
      <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] transition-all">
        SUBSCRIBE
      </button>
    </div>
  ),

  Glassmorphism: () => (
    <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <h3 className="text-white/90 text-xl font-medium mb-2">Cloud Tier</h3>
      <div className="text-4xl font-light text-white mb-8">$150<span className="text-lg opacity-40">/year</span></div>
      <div className="space-y-4 mb-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-white/20 w-2/3" />
          </div>
        ))}
        <p className="text-xs text-white/30 uppercase tracking-widest text-center">Premium Access Enabled</p>
      </div>
      <button className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-2xl transition-all font-semibold">
        Upgrade Now
      </button>
    </div>
  ),

  CorporateBlue: () => (
    <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50">
      <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-4">MOST POPULAR</div>
      <h3 className="text-2xl font-bold text-slate-900 mb-1">Business Pro</h3>
      <p className="text-slate-500 text-sm mb-6">For scaling organizations</p>
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-5xl font-bold text-slate-900">$89</span>
        <span className="text-slate-400">/mo</span>
      </div>
      <div className="space-y-4 mb-8">
        {['Advanced Analytics', 'SSO Integration', 'Dedicated Manager', 'API Access'].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <div className="bg-blue-500 rounded-full p-0.5">
              <Check size={12} className="text-white" />
            </div>
            <span className="text-slate-600 text-sm">{item}</span>
          </div>
        ))}
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
        Contact Sales
      </button>
    </div>
  ),

  DarkModeSaaS: () => (
    <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl text-zinc-100">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold">Developer</h3>
          <p className="text-zinc-500 text-sm">For personal use</p>
        </div>
        <Rocket className="text-zinc-700" size={24} />
      </div>
      <div className="text-4xl font-black mb-8">$0<span className="text-lg font-normal text-zinc-600">/forever</span></div>
      <ul className="space-y-4 mb-8">
        {['Local Development', 'Community Access', 'Basic CLI'].map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-zinc-400">
            <div className="w-1 h-1 bg-zinc-700 rounded-full" /> {item}
          </li>
        ))}
      </ul>
      <button className="w-full py-3 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-colors">
        Deploy Now
      </button>
    </div>
  ),

  GradientBorder: () => (
    <div className="p-[2px] rounded-[2rem] bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 hover:scale-[1.02] transition-transform">
      <div className="p-8 bg-zinc-950 rounded-[1.9rem] h-full">
        <h3 className="text-orange-500 font-bold mb-2">Creator Mode</h3>
        <div className="text-4xl font-black text-white mb-6">$19.99</div>
        <p className="text-zinc-400 text-sm mb-8">Perfect for content creators looking to expand their reach.</p>
        <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl font-black uppercase tracking-wider">
          Join Creator Program
        </button>
      </div>
    </div>
  ),

  Brutalist: () => (
    <div className="p-8 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
      <h3 className="text-3xl font-black uppercase border-b-4 border-black mb-4 pb-2">RADICAL</h3>
      <div className="text-6xl font-black mb-6 italic">$66</div>
      <ul className="space-y-2 mb-8 font-bold">
        <li>- NO LIMITS</li>
        <li>- NO REGRETS</li>
        <li>- PURE CHAOS</li>
      </ul>
      <button className="w-full py-4 bg-black text-white text-xl font-black uppercase hover:bg-zinc-800">
        GET RADICAL
      </button>
    </div>
  ),

  Retro8Bit: () => (
    <div className="p-8 bg-blue-900 border-4 border-white shadow-[inset_-4px_-4px_0px_0px_#000,4px_4px_0px_0px_#fff] font-mono">
      <div className="text-white text-xs mb-2">LEVEL 01</div>
      <h3 className="text-white text-xl mb-4 uppercase tracking-tighter">Newbie Hero</h3>
      <div className="text-yellow-400 text-4xl mb-6">100 GP</div>
      <ul className="text-white text-[10px] space-y-2 mb-8 uppercase">
        <li>+ 10 STR</li>
        <li>+ 05 AGI</li>
        <li>+ WOODEN SWORD</li>
      </ul>
      <button className="w-full py-2 bg-white text-blue-900 font-bold border-2 border-black active:translate-y-1">
        BUY NOW
      </button>
    </div>
  ),

  ModernEcommerce: () => (
    <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-3xl group">
      <div className="aspect-square bg-zinc-200 rounded-2xl mb-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <Star className="absolute top-4 right-4 text-white fill-white" size={20} />
      </div>
      <h3 className="text-lg font-bold text-zinc-900">Premium Membership</h3>
      <p className="text-zinc-500 text-sm mb-4">Get exclusive deals every week.</p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-black text-zinc-900">$9.99</span>
        <button className="px-6 py-2 bg-emerald-600 text-white rounded-full font-bold text-sm hover:bg-emerald-700 transition-colors">
          Add
        </button>
      </div>
    </div>
  ),

  ProfessionalGold: () => (
    <div className="p-8 bg-zinc-950 border border-amber-900/30 rounded-3xl relative overflow-hidden text-center">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-700/0 via-amber-500/50 to-amber-700/0" />
      <Crown className="mx-auto text-amber-500 mb-4" size={32} />
      <h3 className="text-amber-200 text-xl font-serif mb-2 italic">Elite Consulting</h3>
      <div className="text-4xl font-light text-amber-500 mb-8 tracking-widest font-serif">$5,000<span className="text-sm text-amber-800 uppercase">/hr</span></div>
      <p className="text-amber-100/40 text-xs mb-8 uppercase tracking-[0.2em]">Excellence Defined</p>
      <button className="w-full py-3 bg-amber-600/10 hover:bg-amber-600/20 border border-amber-600/30 text-amber-500 rounded-lg transition-all font-serif tracking-widest uppercase text-xs">
        Request Invitation
      </button>
    </div>
  ),

  TechStartup: () => (
    <div className="p-8 bg-indigo-600 rounded-3xl text-white shadow-2xl shadow-indigo-600/40">
      <h3 className="text-xl font-bold mb-2">Unicorn Plan</h3>
      <p className="text-indigo-100/70 text-sm mb-6">Scale to billions of users effortlessly.</p>
      <div className="text-5xl font-black mb-8 tracking-tighter">$499<span className="text-xl font-medium opacity-50">/mo</span></div>
      <div className="space-y-4 mb-8">
        {['Unlimited Workers', 'Global Edge', '24/7 Priority'].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <Star size={16} className="text-indigo-300 fill-indigo-300" />
            <span className="font-medium">{item}</span>
          </div>
        ))}
      </div>
      <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-black hover:bg-indigo-50 transition-colors">
        Scale Now
      </button>
    </div>
  ),

  HealthWellness: () => (
    <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-[3rem] text-center">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
        <Star className="text-emerald-500" size={24} />
      </div>
      <h3 className="text-emerald-900 text-xl font-bold mb-2">Inner Peace</h3>
      <div className="text-4xl font-black text-emerald-600 mb-6">$12<span className="text-sm font-normal text-emerald-400">/class</span></div>
      <p className="text-emerald-700/60 text-sm mb-8 leading-relaxed">Mindfulness and meditation for the modern era.</p>
      <button className="w-full py-4 bg-emerald-900 text-white rounded-full font-bold hover:shadow-lg transition-shadow">
        Book a Session
      </button>
    </div>
  ),

  LuxuryBlack: () => (
    <div className="p-8 bg-black border border-zinc-800 rounded-none group hover:border-white transition-colors">
      <h3 className="text-white text-xs uppercase tracking-[0.5em] mb-8 text-center">The Collection</h3>
      <div className="text-center mb-12">
        <span className="text-white text-6xl font-light tracking-tighter">Luxe</span>
        <div className="h-px w-12 bg-zinc-800 mx-auto mt-4 group-hover:w-24 transition-all" />
      </div>
      <ul className="space-y-6 mb-12 text-center">
        {['Private Access', 'Curated Art', 'Global Concierge'].map((item) => (
          <li key={item} className="text-zinc-500 text-xs uppercase tracking-widest hover:text-white transition-colors cursor-default">
            {item}
          </li>
        ))}
      </ul>
      <button className="w-full py-5 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold">
        Enter Gallery
      </button>
    </div>
  ),

  CreativeAgency: () => (
    <div className="p-8 bg-purple-100 border-4 border-purple-900 rounded-3xl relative rotate-2 hover:rotate-0 transition-transform">
      <div className="absolute -top-4 -left-4 bg-yellow-400 border-2 border-purple-900 px-4 py-1 font-black -rotate-12">
        HOT DEAL!
      </div>
      <h3 className="text-purple-900 text-2xl font-black mb-4">Design Sprint</h3>
      <div className="text-5xl font-black text-purple-600 mb-6 underline decoration-yellow-400">$1,999</div>
      <p className="text-purple-900/70 font-bold mb-8 italic">"We make things look cool, fast."</p>
      <button className="w-full py-4 bg-purple-900 text-white rounded-xl font-black hover:bg-purple-800 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]">
        LETS WORK
      </button>
    </div>
  ),

  MobileApp: () => (
    <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-[2rem] max-w-[280px] mx-auto">
      <div className="bg-zinc-900 p-4 rounded-2xl mb-4 flex items-center justify-between">
        <div className="w-10 h-10 bg-zinc-800 rounded-xl" />
        <div className="flex-1 ml-3">
          <div className="h-2 w-16 bg-zinc-700 rounded mb-2" />
          <div className="h-2 w-10 bg-zinc-800 rounded" />
        </div>
        <Check className="text-emerald-500" size={16} />
      </div>
      <div className="text-center mb-6">
        <div className="text-3xl font-black text-zinc-900">$2.99</div>
        <div className="text-[10px] text-zinc-400 uppercase tracking-widest">In-app purchase</div>
      </div>
      <button className="w-full py-3 bg-zinc-900 text-white rounded-full text-sm font-black active:scale-95 transition-transform">
        Get Premium
      </button>
    </div>
  ),

  EnterpriseTiered: () => (
    <div className="p-8 bg-white border border-zinc-200 rounded-3xl flex flex-col items-center">
      <Shield className="text-blue-600 mb-4" size={40} />
      <h3 className="text-xl font-bold text-zinc-900 mb-2">Enterprise</h3>
      <p className="text-zinc-500 text-center text-sm mb-6">Custom solutions for the worlds largest companies.</p>
      <div className="w-full h-px bg-zinc-100 mb-6" />
      <div className="text-lg font-bold text-zinc-400 mb-8 italic">Contact for Pricing</div>
      <ul className="w-full space-y-3 mb-8">
        {['Custom SLA', 'On-premise option', 'White-labeling'].map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-zinc-600">
            <Check size={14} className="text-blue-500" /> {item}
          </li>
        ))}
      </ul>
      <button className="w-full py-3 border-2 border-zinc-900 text-zinc-900 rounded-xl font-bold hover:bg-zinc-900 hover:text-white transition-all">
        Book a Demo
      </button>
    </div>
  ),

  FreeTierFocused: () => (
    <div className="p-8 bg-emerald-500 rounded-3xl text-white text-center">
      <h3 className="text-2xl font-black mb-1">FREE PLAN</h3>
      <p className="opacity-80 text-sm mb-8">Start your journey today</p>
      <div className="text-7xl font-black mb-8">$0</div>
      <p className="text-sm font-medium mb-8">Includes all core features with 5GB bandwidth limit.</p>
      <button className="w-full py-4 bg-white text-emerald-600 rounded-2xl font-black hover:shadow-xl transition-shadow">
        Get Started for Free
      </button>
    </div>
  ),

  ToggleYearlyMonthly: () => (
    <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
      <div className="flex justify-center mb-8">
        <div className="p-1 bg-zinc-100 rounded-full flex gap-1">
          <button className="px-4 py-1 bg-white rounded-full text-xs font-bold shadow-sm">Monthly</button>
          <button className="px-4 py-1 text-xs font-bold text-zinc-400">Yearly</button>
        </div>
      </div>
      <div className="text-center mb-8">
        <h3 className="text-zinc-500 font-bold text-sm uppercase mb-2">Standard</h3>
        <div className="text-5xl font-black text-zinc-900">$24</div>
      </div>
      <button className="w-full py-3 bg-zinc-900 text-white rounded-xl font-bold">Choose Plan</button>
    </div>
  ),

  ExperimentalFlicker: () => (
    <div className="p-8 bg-black border-2 border-purple-500 rounded-3xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent)] group-hover:animate-pulse" />
      <h3 className="text-purple-400 font-black text-xl mb-4 animate-[flicker_2s_infinite]">
        GLITCH_CORE
      </h3>
      <div className="text-6xl font-black text-white mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
        $???
      </div>
      <div className="space-y-2 mb-8 font-mono text-[10px] text-purple-300/40">
        <p>{">"} DATA_CORRUPTED</p>
        <p>{">"} BYPASS_SECURITY: TRUE</p>
        <p className="animate-pulse">{">"} UNKNOWN_ENTITY_DETECTED</p>
      </div>
      <button className="w-full py-3 bg-purple-600 text-white font-black rounded-none skew-x-12 hover:skew-x-0 transition-all border-r-4 border-b-4 border-white active:translate-x-1 active:translate-y-1">
        ENTER VOID
      </button>
    </div>
  ),
};
