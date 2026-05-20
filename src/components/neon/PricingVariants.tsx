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

  Bento_Tier: () => (
    <div className="p-8 bg-zinc-905 border border-zinc-800 rounded-3xl text-zinc-100 flex flex-col md:flex-row gap-6 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 blur-[80px] rounded-full" />
      <div className="flex-1 space-y-4">
        <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-bold font-mono">BENTO_PRO</span>
        <h3 className="text-2xl font-black text-white">Full Stack Package</h3>
        <p className="text-zinc-400 text-sm">Perfect for modern web apps & teams.</p>
        <div className="pt-4">
          <div className="text-5xl font-black text-white">$149</div>
          <div className="text-xs text-zinc-500 font-mono mt-1">PER QUARTER / BILLED ANNUALLY</div>
        </div>
      </div>
      <div className="w-px bg-zinc-800 hidden md:block" />
      <div className="flex-1 flex flex-col justify-between">
        <ul className="space-y-3 font-sans text-sm text-zinc-300">
          {['∞ Projects & DBs', 'Global Edge CDN', 'Shared Analytics', 'SSO & Multi-Tenant'].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check size={16} className="text-indigo-400 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button className="w-full mt-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5 active:scale-[0.98] transition-transform">
          Claim Tier
        </button>
      </div>
    </div>
  ),

  Editorial_Luxury: () => (
    <div className="p-10 bg-[#FAF9F6] border border-amber-900/10 rounded-none text-zinc-900 text-center font-serif relative group hover:border-amber-900/40 transition-colors duration-700">
      <div className="text-[10px] uppercase tracking-[0.3em] text-amber-800/60 mb-6">Maison Collection</div>
      <h3 className="text-3xl font-light tracking-wide text-zinc-800 mb-2">L'Atelier</h3>
      <div className="w-8 h-px bg-amber-900/20 mx-auto mb-6 group-hover:w-20 transition-all duration-700" />
      <div className="flex items-baseline justify-center gap-1 mb-8">
        <span className="text-5xl font-light tracking-tighter text-zinc-900">$390</span>
        <span className="text-zinc-400 font-sans text-xs italic">/season</span>
      </div>
      <ul className="space-y-4 mb-10 text-xs tracking-widest text-zinc-600 uppercase font-sans">
        {['Private Lounge Access', 'Curated Tailoring', 'Bi-annual Atelier Gifts'].map((item) => (
          <li key={item} className="hover:text-zinc-900 transition-colors cursor-default">
            {item}
          </li>
        ))}
      </ul>
      <button className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-sans text-xs uppercase tracking-[0.25em] font-medium transition-colors duration-300">
        Inquire Membership
      </button>
    </div>
  ),

  SaaS_Spotlight: () => {
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(0.15)}
        onMouseLeave={() => setOpacity(0)}
        className="p-8 bg-zinc-950 border border-zinc-800 rounded-3xl relative overflow-hidden group transition-all"
      >
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
          style={{
            opacity,
            background: `radial-gradient(circle 120px at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.8), transparent 80%)`,
          }}
        />
        <div className="relative z-10 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-zinc-300 font-bold text-lg uppercase tracking-wider">Spotlight Pro</h3>
            <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/25 rounded-md text-[10px] font-bold">POPULAR</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-black text-white">$49</span>
            <span className="text-zinc-550 text-xs">/month</span>
          </div>
          <p className="text-zinc-400 text-xs">Unleash the full potential of coordinate-based styling.</p>
          <div className="w-full h-px bg-zinc-905" />
          <ul className="space-y-3 text-xs text-zinc-300">
            {['100k API Requests', 'Live Support Chat', 'Custom CSS Overrides'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check size={14} className="text-indigo-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded-xl font-bold transition-all mt-4 hover:border-zinc-700">
            Get Spotlight
          </button>
        </div>
      </div>
    );
  },

  Brutalist_Kinetic: () => (
    <div className="p-8 bg-purple-400 border-4 border-black text-black font-sans shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all relative group">
      <div className="absolute top-2 right-2 bg-yellow-300 border-2 border-black px-2 py-0.5 text-xs font-black uppercase rotate-6">
        -30% OFF
      </div>
      <h3 className="text-3xl font-black uppercase tracking-tight mb-2">KINETIC</h3>
      <div className="text-5xl font-black tracking-tighter mb-4">$59</div>
      <p className="text-sm font-bold border-t-2 border-black pt-4 mb-6">Designed for creators who break boundaries.</p>
      <ul className="space-y-2 font-bold text-xs mb-8">
        <li>⚡ FULL RAW SOURCE FILES</li>
        <li>⚡ ACCESS TO KINETIC VIP</li>
        <li>⚡ WEEKLY ASSET DRAWS</li>
      </ul>
      <button className="w-full py-3.5 bg-yellow-300 text-black border-2 border-black font-black uppercase tracking-wider hover:bg-yellow-400 active:translate-y-0.5 transition-all">
        JOIN CRASH COURSE
      </button>
    </div>
  ),

  Cyber_Console: () => {
    const [progress, setProgress] = React.useState(23);
    const [hovered, setHovered] = React.useState(false);

    React.useEffect(() => {
      if (!hovered) return;
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + Math.floor(Math.random() * 8) + 2));
      }, 100);
      return () => clearInterval(interval);
    }, [hovered]);

    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
      setProgress(23);
    };

    return (
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="p-8 bg-zinc-950 border border-cyan-500/20 hover:border-cyan-500/60 rounded-xl relative overflow-hidden font-mono text-cyan-400 group transition-all"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/10 group-hover:bg-cyan-500/20" />
        <div className="text-[10px] text-cyan-600 mb-2 flex justify-between">
          <span>CONSOLE://DIAG_V8</span>
          <span className={hovered ? "animate-pulse" : ""}>{hovered ? "ACTIVE" : "STANDBY"}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">CYBER CORE</h3>
        <div className="text-4xl font-black text-cyan-300 mb-4">$79<span className="text-xs text-cyan-600 font-normal">/epoch</span></div>
        <div className="space-y-4 mb-6">
          <div className="space-y-1">
            <div className="text-[10px] text-cyan-600 flex justify-between">
              <span>SYNCING PROTOCOLS</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 bg-zinc-900 border border-cyan-500/20 rounded-sm overflow-hidden">
              <div 
                className="h-full bg-cyan-500 transition-all duration-100 shadow-[0_0_10px_#06b6d4]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <ul className="text-xs space-y-2 text-cyan-100/70">
            <li>{">"} SECURE SHELL BINDING</li>
            <li>{">"} QUANTUM ENCRYPTION KEY</li>
            <li>{">"} NEURAL SYNC MODULE</li>
          </ul>
        </div>
        <button className="w-full py-3 bg-cyan-500/10 border border-cyan-500/40 hover:bg-cyan-500 hover:text-black font-black uppercase text-xs tracking-widest transition-all">
          CONNECT INTERFACE
        </button>
      </div>
    );
  },

  Electric_Border: () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const animationRef = React.useRef<number | null>(null);
    const timeRef = React.useRef(0);
    const lastFrameTimeRef = React.useRef(0);

    const random = React.useCallback((x: number): number => {
      return (Math.sin(x * 12.9898) * 43758.5453) % 1;
    }, []);

    const noise2D = React.useCallback(
      (x: number, y: number): number => {
        const i = Math.floor(x);
        const j = Math.floor(y);
        const fx = x - i;
        const fy = y - j;

        const a = random(i + j * 57);
        const b = random(i + 1 + j * 57);
        const c = random(i + (j + 1) * 57);
        const d = random(i + 1 + (j + 1) * 57);

        const ux = fx * fx * (3.0 - 2.0 * fx);
        const uy = fy * fy * (3.0 - 2.0 * fy);

        return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
      },
      [random]
    );

    const octavedNoise = React.useCallback(
      (
        x: number,
        octaves: number,
        lacunarity: number,
        gain: number,
        amplitude: number,
        frequency: number,
        time: number,
        seed: number
      ): number => {
        let y = 0;
        let amp = amplitude;
        let freq = frequency;

        for (let i = 0; i < octaves; i++) {
          y += amp * noise2D(freq * x + seed * 100, time * freq * 0.3);
          freq *= lacunarity;
          amp *= gain;
        }

        return y;
      },
      [noise2D]
    );

    const getCornerPoint = React.useCallback(
      (
        centerX: number,
        centerY: number,
        radius: number,
        startAngle: number,
        arcLength: number,
        progress: number
      ): { x: number; y: number } => {
        const angle = startAngle + progress * arcLength;
        return {
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle)
        };
      },
      []
    );

    const getRoundedRectPoint = React.useCallback(
      (t: number, left: number, top: number, width: number, height: number, radius: number): { x: number; y: number } => {
        const straightWidth = width - 2 * radius;
        const straightHeight = height - 2 * radius;
        const cornerArc = (Math.PI * radius) / 2;
        const totalPerimeter = 2 * straightWidth + 2 * straightHeight + 4 * cornerArc;
        const distance = t * totalPerimeter;

        let accumulated = 0;

        if (distance <= accumulated + straightWidth) {
          const progress = (distance - accumulated) / straightWidth;
          return { x: left + radius + progress * straightWidth, y: top };
        }
        accumulated += straightWidth;

        if (distance <= accumulated + cornerArc) {
          const progress = (distance - accumulated) / cornerArc;
          return getCornerPoint(left + width - radius, top + radius, radius, -Math.PI / 2, Math.PI / 2, progress);
        }
        accumulated += cornerArc;

        if (distance <= accumulated + straightHeight) {
          const progress = (distance - accumulated) / straightHeight;
          return { x: left + width, y: top + radius + progress * straightHeight };
        }
        accumulated += straightHeight;

        if (distance <= accumulated + cornerArc) {
          const progress = (distance - accumulated) / cornerArc;
          return getCornerPoint(left + width - radius, top + height - radius, radius, 0, Math.PI / 2, progress);
        }
        accumulated += cornerArc;

        if (distance <= accumulated + straightWidth) {
          const progress = (distance - accumulated) / straightWidth;
          return { x: left + width - radius - progress * straightWidth, y: top + height };
        }
        accumulated += straightWidth;

        if (distance <= accumulated + cornerArc) {
          const progress = (distance - accumulated) / cornerArc;
          return getCornerPoint(left + radius, top + height - radius, radius, Math.PI / 2, Math.PI / 2, progress);
        }
        accumulated += cornerArc;

        if (distance <= accumulated + straightHeight) {
          const progress = (distance - accumulated) / straightHeight;
          return { x: left, y: top + height - radius - progress * straightHeight };
        }
        accumulated += straightHeight;

        const progress = (distance - accumulated) / cornerArc;
        return getCornerPoint(left + radius, top + radius, radius, Math.PI, Math.PI / 2, progress);
      },
      [getCornerPoint]
    );

    React.useEffect(() => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const octaves = 6;
      const lacunarity = 1.6;
      const gain = 0.7;
      const amplitude = 0.12;
      const frequency = 8;
      const displacement = 40;
      const borderOffset = 30;

      const updateSize = () => {
        const rect = container.getBoundingClientRect();
        const w = rect.width + borderOffset * 2;
        const h = rect.height + borderOffset * 2;
        const dpr = 2;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.scale(dpr, dpr);
        return { w, h };
      };

      let { w, h } = updateSize();

      const drawElectricBorder = (currentTime: number) => {
        if (!canvas || !ctx) return;

        const deltaTime = (currentTime - lastFrameTimeRef.current) / 1000;
        timeRef.current += deltaTime * 1.5;
        lastFrameTimeRef.current = currentTime;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.scale(2, 2);

        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const scale = displacement;
        const left = borderOffset;
        const top = borderOffset;
        const borderWidth = w - 2 * borderOffset;
        const borderHeight = h - 2 * borderOffset;
        const maxRadius = Math.min(borderWidth, borderHeight) / 2;
        const radius = Math.min(24, maxRadius);

        const approximatePerimeter = 2 * (borderWidth + borderHeight) + 2 * Math.PI * radius;
        const sampleCount = Math.floor(approximatePerimeter / 2);

        ctx.beginPath();

        for (let i = 0; i <= sampleCount; i++) {
          const progress = i / sampleCount;
          const point = getRoundedRectPoint(progress, left, top, borderWidth, borderHeight, radius);

          const xNoise = octavedNoise(
            progress * 8,
            octaves,
            lacunarity,
            gain,
            amplitude,
            frequency,
            timeRef.current,
            0
          );
          const yNoise = octavedNoise(
            progress * 8,
            octaves,
            lacunarity,
            gain,
            amplitude,
            frequency,
            timeRef.current,
            1
          );

          const displacedX = point.x + xNoise * scale;
          const displacedY = point.y + yNoise * scale;

          if (i === 0) {
            ctx.moveTo(displacedX, displacedY);
          } else {
            ctx.lineTo(displacedX, displacedY);
          }
        }

        ctx.closePath();
        ctx.stroke();

        animationRef.current = requestAnimationFrame(drawElectricBorder);
      };

      animationRef.current = requestAnimationFrame(drawElectricBorder);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [octavedNoise, getRoundedRectPoint]);

    return (
      <div 
        ref={containerRef}
        className="relative overflow-visible isolate p-8 bg-zinc-950 border border-indigo-500/20 rounded-[24px] text-zinc-150"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <canvas ref={canvasRef} className="block" />
        </div>
        <div className="absolute inset-0 rounded-[24px] pointer-events-none z-[1] border-2 border-indigo-500/30 filter blur-[2px]" />
        <div className="relative z-10 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono tracking-widest text-indigo-400">ARC_NODE_CONNECTED</span>
            <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-ping" />
          </div>
          <h3 className="text-xl font-bold text-white">ELECTRIC</h3>
          <div className="text-4xl font-black text-indigo-400">$180<span className="text-xs text-zinc-550 font-normal">/month</span></div>
          <p className="text-zinc-400 text-xs">High-performance computational stack wrapped in energy.</p>
          <button className="w-full mt-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all relative z-10 active:scale-95 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            Activate Arc Node
          </button>
        </div>
      </div>
    );
  },

  Matrix_Terminal: () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = canvas.parentElement?.clientWidth || 300;
      canvas.height = 300;

      const columns = Math.floor(canvas.width / 14);
      const yPositions = Array(columns).fill(0);

      const drawMatrix = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#22c55e';
        ctx.font = '10px monospace';

        for (let i = 0; i < yPositions.length; i++) {
          const char = Math.random() > 0.5 ? '1' : '0';
          const x = i * 14;
          const y = yPositions[i];
          ctx.fillText(char, x, y);

          if (y > canvas.height && Math.random() > 0.975) {
            yPositions[i] = 0;
          } else {
            yPositions[i] += 10;
          }
        }
      };

      const interval = setInterval(drawMatrix, 40);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="p-8 bg-black border-2 border-emerald-500/30 rounded-3xl relative overflow-hidden group font-mono text-emerald-400">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity" />
        <div className="relative z-10 space-y-4">
          <div className="text-[10px] text-emerald-600 flex justify-between">
            <span>KERNEL://PRICING</span>
            <span>ONLINE</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-widest uppercase">SYS_PRO</h3>
          <div className="text-4xl font-black text-emerald-400">$64<span className="text-xs text-emerald-600 font-normal">/month</span></div>
          <p className="text-zinc-550 text-xs leading-relaxed">Raw digital bandwidth with integrated terminal interfaces.</p>
          <div className="w-full h-px bg-emerald-500/10" />
          <ul className="text-xs space-y-2 text-emerald-300/80">
            <li>+ DIRECT SOCKET TUNNEL</li>
            <li>+ ROOT SHELL PRIVILEGES</li>
            <li>+ DIGITAL RAIN LOGS</li>
          </ul>
          <button className="w-full py-3 bg-emerald-50 text-black font-black uppercase text-xs tracking-wider hover:bg-emerald-400 active:scale-95 transition-all">
            MOUNT SYSTEM
          </button>
        </div>
      </div>
    );
  },

  Pixel_Card: () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const pixelsRef = React.useRef<{ x: number; y: number; size: number; alpha: number; speed: number }[]>([]);
    const animationRef = React.useRef<number | null>(null);

    React.useEffect(() => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = container.getBoundingClientRect();
      const w = Math.floor(rect.width);
      const h = 300;
      canvas.width = w * 2;
      canvas.height = h * 2;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(2, 2);

      const pxs: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];
      const gap = 12;
      for (let x = 0; x < w; x += gap) {
        for (let y = 0; y < h; y += gap) {
          if (Math.random() > 0.85) {
            pxs.push({
              x,
              y,
              size: Math.random() * 3 + 1,
              alpha: Math.random(),
              speed: Math.random() * 0.05 + 0.01,
            });
          }
        }
      }
      pixelsRef.current = pxs;

      const animate = () => {
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, w, h);

        pixelsRef.current.forEach((p) => {
          p.alpha += p.speed;
          if (p.alpha > 1 || p.alpha < 0) {
            p.speed = -p.speed;
          }
          p.alpha = Math.max(0, Math.min(1, p.alpha));
          ctx.fillStyle = `rgba(244, 63, 94, ${p.alpha * 0.35})`;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        });

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    }, []);

    return (
      <div 
        ref={containerRef}
        className="p-8 bg-zinc-955 border border-pink-500/20 hover:border-pink-500/50 rounded-[28px] relative overflow-hidden group transition-all"
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
        <div className="relative z-10 space-y-4">
          <span className="text-[9px] font-mono tracking-widest bg-pink-500/10 text-pink-400 border border-pink-500/20 px-2.5 py-1 rounded-full uppercase">RETRO_SHIMMER</span>
          <h3 className="text-xl font-bold text-white">PIXEL CARD</h3>
          <div className="text-4xl font-black text-pink-400">$32<span className="text-xs text-zinc-550 font-normal">/month</span></div>
          <p className="text-zinc-400 text-xs">Retro design integrated with custom particle grids that shimmer on hover.</p>
          <button className="w-full mt-4 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(236,72,153,0.4)]">
            Initialize Grid
          </button>
        </div>
      </div>
    );
  },

  Star_Border: () => (
    <div className="relative inline-block w-full overflow-hidden rounded-[24px] p-[1.5px] bg-zinc-950 group">
      <div
        className="absolute w-[200%] h-[80%] opacity-50 bottom-[-20px] right-[-100%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, #a855f7, transparent 20%)`,
        }}
      />
      <div
        className="absolute w-[200%] h-[80%] opacity-50 top-[-20px] left-[-100%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, #ec4899, transparent 20%)`,
        }}
      />
      <div className="relative z-10 bg-zinc-950 border border-zinc-900 text-white text-left p-8 rounded-[23px] space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xs text-zinc-500 font-semibold tracking-wider">AURA PLAN</span>
          <Star className="text-purple-400 fill-purple-400/20" size={16} />
        </div>
        <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Mistical</h3>
        <div className="text-4xl font-black">$45</div>
        <p className="text-zinc-400 text-xs">Unlock a glowing aura border around your products.</p>
        <button className="w-full py-3 bg-white text-black font-black rounded-xl hover:bg-zinc-200 transition-colors">
          Unlock Aura
        </button>
      </div>
    </div>
  ),

  "3D_FoldCard": () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [style, setStyle] = React.useState<React.CSSProperties>({});

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -y / 10;
      const rotateY = x / 10;
      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      });
    };

    const handleMouseLeave = () => {
      setStyle({
        transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`,
        transition: 'transform 0.5s ease',
      });
    };

    return (
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl text-zinc-150 transition-all duration-100 ease-out shadow-2xl relative overflow-hidden group select-none"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 blur-[50px] rounded-full" />
        <h3 className="text-violet-400 text-xl font-bold mb-2 tracking-tight flex items-center gap-2">
          <Zap className="text-violet-400" size={16} /> DIMENSION_3D
        </h3>
        <div className="text-4xl font-black text-white mb-6">$85<span className="text-sm font-normal text-zinc-500">/mo</span></div>
        <p className="text-zinc-400 text-xs mb-6">Fully realistic 3D perspective fold effect that follows your pointer.</p>
        <div className="w-full h-px bg-zinc-800 mb-6" />
        <button className="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)]">
          Fold Dimension
        </button>
      </div>
    );
  },
};
