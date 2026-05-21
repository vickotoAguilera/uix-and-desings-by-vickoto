"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Github as GitHub, Twitter, Linkedin as LinkedIn, Mail, MapPin, Phone, Instagram, Youtube as YouTube, ArrowRight, Heart, Globe, Cpu, Zap, Shield, Layers, Maximize2, Search, Plus } from 'lucide-react';

export const FooterVariants = {
  // 1. Cyberpunk Neon
  Cyberpunk: () => (
    <footer className="w-full bg-black border-t-2 border-[#0fa] shadow-[0_-5px_15px_#0fa] px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="text-[#0fa] font-black italic text-2xl tracking-tighter">CYBER_CORP</div>
          <p className="text-zinc-500 font-mono text-xs">BUILDING THE FUTURE OF THE NET SINCE 2077.</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest border-b border-[#0fa] pb-2 inline-block">Directory</h4>
          <ul className="text-[#0fa] font-mono text-xs space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">/MAIN_HUB</a></li>
            <li><a href="#" className="hover:text-white transition-colors">/NEURAL_LINKS</a></li>
            <li><a href="#" className="hover:text-white transition-colors">/SECURE_NODES</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest border-b border-[#0fa] pb-2 inline-block">Protocols</h4>
          <ul className="text-[#0fa] font-mono text-xs space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">ENCRYPTION_v2</a></li>
            <li><a href="#" className="hover:text-white transition-colors">PRIVACY_OVERRIDE</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest border-b border-[#0fa] pb-2 inline-block">Transmission</h4>
          <div className="flex gap-4">
            <GitHub size={20} className="text-[#0fa] hover:text-white cursor-pointer" />
            <Twitter size={20} className="text-[#0fa] hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-zinc-600 font-mono text-[10px]">
        (C) 2077 CYBER_CORP - ALL RIGHTS RESERVED - SYSTEM_STABLE
      </div>
    </footer>
  ),

  // 2. Glassmorphism Modern
  GlassModern: () => (
    <div className="w-full p-8 bg-gradient-to-br from-indigo-900 to-slate-900">
      <footer className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="text-white font-bold text-2xl">AuraUI.</div>
            <p className="text-white/50 leading-relaxed">Siguiente generación de interfaces para aplicaciones web de alto impacto.</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <Twitter size={18} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Product</h4>
              <ul className="text-white/40 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Components</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design Kit</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Support</h4>
              <ul className="text-white/40 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          Made with <Heart size={14} className="inline text-rose-500 mx-1" /> by Aura Team
        </div>
      </footer>
    </div>
  ),

  // 3. Minimalist Clean
  Minimalist: () => (
    <footer className="w-full bg-white border-t border-zinc-100 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-4">
          <span className="text-xl font-bold tracking-tighter">MINIMAL.</span>
          <p className="text-zinc-500 max-w-xs text-sm">Pureza en el diseño, excelencia en el código.</p>
        </div>
        <div className="flex gap-16">
          <div className="space-y-4">
            <h4 className="text-zinc-900 font-bold text-xs uppercase tracking-[0.2em]">Explore</h4>
            <ul className="text-zinc-500 space-y-2 text-sm">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Works</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Studio</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-zinc-900 font-bold text-xs uppercase tracking-[0.2em]">Social</h4>
            <ul className="text-zinc-500 space-y-2 text-sm">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Dribbble</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 flex justify-between items-center text-zinc-400 text-xs">
        <span>© 2026 Minimal Studio</span>
        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  ),

  // 4. Brutalist Industrial
  Brutalist: () => (
    <footer className="w-full bg-black text-white p-12 border-t-[16px] border-yellow-400">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <h2 className="text-[10vw] font-black leading-none uppercase tracking-tighter italic">Get in touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="border-4 border-white p-6 hover:bg-white hover:text-black transition-colors cursor-pointer group">
            <h4 className="font-black text-xl mb-2">EMAIL_US</h4>
            <p className="font-mono text-sm opacity-60 group-hover:opacity-100">HELLO@BRUTAL.DESIGN</p>
          </div>
          <div className="border-4 border-white p-6 hover:bg-white hover:text-black transition-colors cursor-pointer group">
            <h4 className="font-black text-xl mb-2">VISIT_STU</h4>
            <p className="font-mono text-sm opacity-60 group-hover:opacity-100">123 CONCRETE ST. NY</p>
          </div>
          <div className="border-4 border-white p-6 hover:bg-white hover:text-black transition-colors cursor-pointer group">
            <h4 className="font-black text-xl mb-2">FOLLOW_ME</h4>
            <p className="font-mono text-sm opacity-60 group-hover:opacity-100">@BRUTAL_WORKS</p>
          </div>
        </div>
        <div className="flex justify-between items-end mt-12">
          <div className="text-4xl font-black italic">BRUTAL.</div>
          <div className="text-right font-mono text-xs opacity-40">
            ALL_RIGHTS_RESERVED<br/>DESIGNED_BY_MACHINES
          </div>
        </div>
      </div>
    </footer>
  ),

  // 5. Neumorphic Soft
  Neumorphic: () => (
    <div className="w-full bg-zinc-100 py-16 px-8">
      <footer className="max-w-7xl mx-auto bg-zinc-100 rounded-[40px] p-12 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-zinc-100 shadow-[4px_4px_10px_#bebebe,-4px_-4px_10px_#ffffff] flex items-center justify-center">
              <Zap size={32} className="text-blue-500" fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-800">SoftUI Solutions</h3>
            <p className="text-zinc-500 max-w-sm">Interfaces que se sienten naturales al tacto y a la vista.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-zinc-700">Explore</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Projects</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-zinc-700">Contact</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-zinc-200/50 text-center text-zinc-400 text-sm">
          © 2026 SoftUI Design System
        </div>
      </footer>
    </div>
  ),

  // 6. Bento Grid Footer
  Bento: () => (
    <footer className="w-full bg-zinc-950 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 flex flex-col justify-between">
          <div className="text-3xl font-bold text-white mb-8">BentoBox.</div>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-zinc-800 rounded-xl text-zinc-400 text-sm border border-zinc-700">v2.4.0</div>
            <div className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-xl text-sm border border-indigo-500/20 font-bold italic">PRO</div>
          </div>
        </div>
        <div className="md:col-span-3 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-indigo-500 transition-colors">
          <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <Mail size={24} />
          </div>
          <span className="text-white font-medium">Newsletter</span>
        </div>
        <div className="md:col-span-3 bg-indigo-600 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 text-white group cursor-pointer hover:bg-indigo-500 transition-colors">
          <div className="text-4xl font-black">20+</div>
          <span className="text-indigo-100 font-medium">Components</span>
        </div>
        <div className="md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-white font-bold">Twitter</div>
            <div className="text-zinc-500 text-xs">@BentoBox_UI</div>
          </div>
          <Twitter className="text-zinc-600" />
        </div>
        <div className="md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-white font-bold">GitHub</div>
            <div className="text-zinc-500 text-xs">bentobox-ui/pro</div>
          </div>
          <GitHub className="text-zinc-600" />
        </div>
        <div className="md:col-span-4 bg-zinc-800/50 border border-zinc-800 rounded-3xl p-8 flex items-center justify-center text-zinc-500 text-xs">
          © 2026 BENTO SYSTEMS
        </div>
      </div>
    </footer>
  ),

  // 7. SaaS Modern v2
  SaaS: () => (
    <footer className="w-full bg-zinc-50 border-t border-zinc-200 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-2xl font-black text-indigo-600">FlashPay.</div>
          <div className="flex gap-8 text-zinc-500 font-medium">
            <a href="#" className="hover:text-indigo-600 transition-colors">Product</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Developers</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Company</a>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-white border border-zinc-200 rounded-full font-bold text-sm shadow-sm hover:bg-zinc-50 transition-colors">Login</button>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold text-sm shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all">Sign Up</button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 border-t border-zinc-200 pt-16">
          <div className="space-y-4">
            <h4 className="font-bold text-sm">Product</h4>
            <ul className="text-zinc-500 text-sm space-y-3">
              <li><a href="#">Payments</a></li>
              <li><a href="#">Billing</a></li>
              <li><a href="#">Connect</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-sm">Solutions</h4>
            <ul className="text-zinc-500 text-sm space-y-3">
              <li><a href="#">Ecommerce</a></li>
              <li><a href="#">SaaS</a></li>
              <li><a href="#">Marketplaces</a></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-zinc-400">Subscribe to updates</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="email@example.com" className="bg-white border border-zinc-200 rounded-lg px-4 py-2 text-sm flex-1 outline-none focus:border-indigo-500" />
              <button className="bg-zinc-900 text-white p-2 rounded-lg hover:bg-black transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-400 text-xs">
          <div className="flex items-center gap-2">
            <Globe size={14} />
            <span>English (US)</span>
          </div>
          <span>© 2026 FlashPay Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  ),

  // 8. Retro Arcade
  RetroArcade: () => (
    <footer className="w-full bg-[#212529] border-t-8 border-[#333] p-12 font-mono">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 border-4 border-dashed border-[#555] p-10 relative">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 border-4 border-[#212529]" />
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 border-4 border-[#212529]" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellow-500 border-4 border-[#212529]" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-green-500 border-4 border-[#212529]" />
        
        <div className="space-y-6">
          <h3 className="text-[#92cc41] text-2xl font-bold uppercase tracking-widest underline decoration-4">Main_Menu</h3>
          <ul className="text-white space-y-4 text-lg">
            <li><a href="#" className="hover:text-[#e76e55]">{">"} START_GAME</a></li>
            <li><a href="#" className="hover:text-[#e76e55]">{">"} LOAD_DATA</a></li>
            <li><a href="#" className="hover:text-[#e76e55]">{">"} OPTIONS</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-[#f7d51d] text-2xl font-bold uppercase tracking-widest underline decoration-4">High_Scores</h3>
          <div className="space-y-2 text-white/60">
            <div className="flex justify-between"><span>AAA</span><span>99999</span></div>
            <div className="flex justify-between"><span>BBB</span><span>88888</span></div>
            <div className="flex justify-between"><span>CCC</span><span>77777</span></div>
          </div>
        </div>
        <div className="space-y-6 flex flex-col items-center justify-center">
          <div className="text-white text-xl animate-pulse">INSERT COIN</div>
          <div className="flex gap-4 mt-4">
            <div className="w-12 h-12 rounded-full bg-red-600 border-4 border-black shadow-[4px_4px_0px_black]" />
            <div className="w-12 h-12 rounded-full bg-blue-600 border-4 border-black shadow-[4px_4px_0px_black]" />
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-[#555] text-xs uppercase tracking-[0.5em]">
        GameOver (C) 198X Arcade Systems
      </div>
    </footer>
  ),

  // 9. Minimalist Sidebar Horizontal v2
  SidebarStyle: () => (
    <footer className="w-full bg-zinc-900 border-t border-zinc-800 p-8 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-6">
        <div className="text-white font-bold tracking-widest text-sm uppercase">Navigation</div>
        <div className="h-4 w-[1px] bg-zinc-700" />
        <div className="flex gap-6 text-zinc-500 text-xs font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">Team</a>
          <a href="#" className="hover:text-white transition-colors">Legal</a>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex gap-4">
          <GitHub size={18} className="text-zinc-500 hover:text-white cursor-pointer" />
          <Twitter size={18} className="text-zinc-500 hover:text-white cursor-pointer" />
        </div>
        <div className="px-4 py-1.5 bg-zinc-800 rounded-lg border border-zinc-700 text-zinc-300 text-xs font-mono">
          STATUS: ONLINE
        </div>
      </div>
    </footer>
  ),

  // 10. Holographic Security
  Holographic: () => (
    <footer className="w-full bg-black/60 backdrop-blur-3xl border-t border-cyan-500/20 p-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.1),transparent_70%)]" />
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <div className="flex items-center gap-3">
            <Shield className="text-cyan-500" />
            <span className="text-white font-black text-2xl tracking-[0.2em] uppercase">Sentinel</span>
          </div>
          <p className="text-cyan-100/40 max-w-md leading-relaxed">Protección de datos de nivel militar mediante protocolos de encriptación cuántica y redes neuronales descentralizadas.</p>
          <div className="flex gap-6 items-center">
            <span className="w-12 h-[1px] bg-cyan-500/30" />
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest">Protocols</h4>
          <ul className="text-cyan-200/50 space-y-4 text-xs font-mono">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">[ ACCESS_CONTROL ]</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">[ NODE_STATISTICS ]</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">[ ENCRYPTION_API ]</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest">Connect</h4>
          <ul className="text-cyan-200/50 space-y-4 text-xs font-mono">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">[ TERMINAL ]</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">[ NEURAL_LINK ]</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-cyan-500/10 flex justify-between items-center text-[10px] text-cyan-200/30 font-mono">
        <span>EST_2026_SENTINEL_NODE</span>
        <span>PROTOCOL_v4.2.0_STABLE</span>
      </div>
    </footer>
  ),

  // 11. Minimalist Pill v2
  PillFooter: () => (
    <div className="w-full py-12 px-8 flex justify-center bg-zinc-50">
      <footer className="bg-white/80 backdrop-blur-xl border border-zinc-200 rounded-[40px] px-12 py-8 flex flex-col md:flex-row items-center gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        <div className="text-xl font-black italic tracking-tighter">STUDIO_X</div>
        <div className="h-6 w-[1px] bg-zinc-200 hidden md:block" />
        <nav className="flex gap-8 text-zinc-500 text-sm font-medium">
          <a href="#" className="hover:text-zinc-900 transition-colors">Work</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Lab</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Press</a>
        </nav>
        <div className="h-6 w-[1px] bg-zinc-200 hidden md:block" />
        <div className="flex gap-4">
          <Twitter size={18} className="text-zinc-400 hover:text-zinc-900 cursor-pointer" />
          <Instagram size={18} className="text-zinc-400 hover:text-zinc-900 cursor-pointer" />
        </div>
      </footer>
    </div>
  ),

  // 12. Deep Space Footer
  DeepSpace: () => (
    <footer className="w-full bg-slate-950 py-20 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_20px_30px,#fff,transparent)] bg-[size:40px_40px] opacity-10" />
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12 relative z-10">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <h2 className="text-4xl font-black text-white tracking-widest uppercase">To Infinity</h2>
        <div className="flex flex-wrap justify-center gap-12 text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">
          <a href="#" className="hover:text-white transition-colors">Missions</a>
          <a href="#" className="hover:text-white transition-colors">Telemetry</a>
          <a href="#" className="hover:text-white transition-colors">Launchpad</a>
          <a href="#" className="hover:text-white transition-colors">Crew</a>
        </div>
        <div className="pt-12 border-t border-slate-900 w-full flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-slate-600 text-xs">© 2026 Galactic Exploration Corp.</span>
          <div className="flex gap-6">
            <YouTube className="text-slate-500 hover:text-white cursor-pointer" />
            <LinkedIn className="text-slate-500 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  ),

  // 13. Modern Architecture
  Architecture: () => (
    <footer className="w-full bg-white text-zinc-900 p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-12">
          <h2 className="text-6xl font-light tracking-tighter leading-none">Building<br/><span className="font-bold">Tomorrow.</span></h2>
          <div className="space-y-2">
            <p className="text-zinc-400 text-sm uppercase tracking-widest">Headquarters</p>
            <p className="text-lg">Concrete Avenue 45, Design District, NY</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12 pt-4">
          <div className="space-y-6">
            <h4 className="font-bold border-b border-zinc-100 pb-2">Projects</h4>
            <ul className="text-zinc-500 space-y-3 text-sm">
              <li><a href="#" className="hover:text-zinc-900">Residential</a></li>
              <li><a href="#" className="hover:text-zinc-900">Commercial</a></li>
              <li><a href="#" className="hover:text-zinc-900">Urban Planning</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold border-b border-zinc-100 pb-2">Studio</h4>
            <ul className="text-zinc-500 space-y-3 text-sm">
              <li><a href="#" className="hover:text-zinc-900">Team</a></li>
              <li><a href="#" className="hover:text-zinc-900">Process</a></li>
              <li><a href="#" className="hover:text-zinc-900">Awards</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-32 flex justify-between items-end">
        <div className="text-[10vw] font-black text-zinc-50 leading-none select-none">2026</div>
        <div className="pb-2 text-zinc-400 text-xs">ARCH_LABS_DESIGN_SYSTEM</div>
      </div>
    </footer>
  ),

  // 14. Gradient Mesh Drift
  MeshDrift: () => (
    <footer className="w-full bg-zinc-950 py-20 px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-2 space-y-8">
          <div className="text-3xl font-black text-white">Vibe.</div>
          <p className="text-zinc-500 text-lg max-w-sm">Explorando la intersección entre el color, la emoción y la tecnología digital.</p>
        </div>
        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">Connect</h4>
          <div className="flex flex-col gap-4 text-zinc-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">Newsletter</h4>
          <div className="space-y-4">
            <p className="text-zinc-500 text-xs">Get the latest vibes directly in your inbox.</p>
            <input type="text" placeholder="Your email" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-pink-500" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 text-zinc-700 text-xs flex justify-between">
        <span>© 2026 Vibe Mesh Studio</span>
        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  ),

  // 15. Bauhaus Primary v2
  BauhausV2: () => (
    <footer className="w-full bg-white border-t-8 border-black flex flex-col md:flex-row h-auto md:h-64">
      <div className="md:w-1/3 bg-yellow-400 p-10 flex flex-col justify-between border-b-8 md:border-b-0 md:border-r-8 border-black">
        <div className="text-4xl font-black uppercase italic leading-none">Theory</div>
        <div className="text-xs font-bold uppercase tracking-widest">Volume_01</div>
      </div>
      <div className="md:w-1/3 bg-blue-600 p-10 flex flex-col justify-between border-b-8 md:border-b-0 md:border-r-8 border-black text-white">
        <div className="text-4xl font-black uppercase italic leading-none">Form</div>
        <div className="flex gap-4">
          <div className="w-8 h-8 bg-white rounded-full" />
          <div className="w-8 h-8 bg-red-600" />
        </div>
      </div>
      <div className="md:w-1/3 bg-red-600 p-10 flex flex-col justify-between text-white">
        <div className="text-4xl font-black uppercase italic leading-none">Function</div>
        <div className="text-right text-xs font-bold uppercase tracking-widest">Bauhaus_2026</div>
      </div>
    </footer>
  ),

  // 16. Minimalist Line Center
  LineCenter: () => (
    <footer className="w-full bg-white py-12 px-8 flex flex-col items-center gap-8">
      <div className="w-px h-24 bg-zinc-200" />
      <div className="text-2xl font-black tracking-widest uppercase">Center</div>
      <nav className="flex gap-12 text-zinc-400 font-medium text-xs uppercase tracking-[0.3em]">
        <a href="#" className="hover:text-zinc-900 transition-colors">Projects</a>
        <a href="#" className="hover:text-zinc-900 transition-colors">About</a>
        <a href="#" className="hover:text-zinc-900 transition-colors">Contact</a>
      </nav>
      <div className="mt-12 text-zinc-300 text-[10px] tracking-widest uppercase">
        © MMXXVI Studio Center
      </div>
    </footer>
  ),

  // 17. Industrial Hazard v2
  Hazard: () => (
    <footer className="w-full bg-[#111] border-t-[20px] border-yellow-500 p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,#000_20px,#000_40px)] opacity-20" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-2 space-y-6">
          <div className="bg-yellow-500 text-black px-4 py-2 font-black inline-block text-2xl skew-x-[-10deg]">CAUTION_UI</div>
          <p className="text-zinc-500 font-mono text-sm max-w-sm">HEAVY DUTY INTERFACE COMPONENTS FOR MISSION CRITICAL APPLICATIONS.</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-yellow-500 font-bold font-mono text-xs uppercase tracking-widest underline decoration-2 underline-offset-4">Maintenance</h4>
          <ul className="text-zinc-400 font-mono text-xs space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">{">"} SYSTEM_DOCS</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{">"} HARDWARE_SPEC</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-yellow-500 font-bold font-mono text-xs uppercase tracking-widest underline decoration-2 underline-offset-4">Emergency</h4>
          <ul className="text-zinc-400 font-mono text-xs space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">{">"} CONTACT_TECH</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{">"} RECOVERY_NODE</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-zinc-800 text-zinc-600 font-mono text-[10px] flex justify-between">
        <span>SECURITY_LEVEL: 04</span>
        <span>(C) 2026 HAZARD_SYSTEMS</span>
      </div>
    </footer>
  ),

  // 18. Soft Bento Pastel
  SoftBento: () => (
    <footer className="w-full bg-rose-50/30 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-white rounded-3xl p-10 flex flex-col justify-between shadow-sm border border-rose-100/50">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-rose-500">LushUI.</div>
            <p className="text-zinc-500 leading-relaxed">Interfaces suaves para experiencias inolvidables.</p>
          </div>
          <div className="flex gap-4 mt-8">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-all cursor-pointer">
              <Instagram size={18} />
            </div>
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all cursor-pointer">
              <Twitter size={18} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-8 flex flex-col gap-4 shadow-sm border border-rose-100/50">
          <h4 className="font-bold text-zinc-800">Quick Links</h4>
          <ul className="text-zinc-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-rose-500 transition-colors">Components</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">About</a></li>
          </ul>
        </div>
        <div className="bg-indigo-600 rounded-3xl p-8 flex flex-col items-center justify-center gap-2 text-white shadow-lg shadow-indigo-100">
          <span className="text-xs uppercase tracking-widest font-bold opacity-70">New Release</span>
          <span className="text-2xl font-black italic">v3.0_CANDY</span>
        </div>
      </div>
      <div className="text-center mt-12 text-zinc-300 text-xs">
        © 2026 LushUI Design Systems
      </div>
    </footer>
  ),

  // 19. Cyber Login Focus v2
  CyberFocus: () => (
    <footer className="w-full bg-black py-20 px-8 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="relative">
          <div className="absolute -inset-4 bg-purple-500/20 blur-2xl rounded-full" />
          <h2 className="text-4xl font-black text-white relative z-10 tracking-[0.3em] uppercase italic">Quantum</h2>
        </div>
        <div className="flex gap-16 text-purple-400/60 font-mono text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-purple-400 transition-all hover:glow-purple">Vault</a>
          <a href="#" className="hover:text-purple-400 transition-all hover:glow-purple">Nodes</a>
          <a href="#" className="hover:text-purple-400 transition-all hover:glow-purple">Specs</a>
        </div>
        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="flex gap-8">
          <GitHub className="text-zinc-700 hover:text-white transition-colors cursor-pointer" />
          <Twitter className="text-zinc-700 hover:text-white transition-colors cursor-pointer" />
          <LinkedIn className="text-zinc-700 hover:text-white transition-colors cursor-pointer" />
        </div>
        <span className="text-zinc-800 text-[10px] font-mono tracking-[0.5em]">SYSTEM_VERSION_QUANTUM_STABLE</span>
      </div>
    </footer>
  ),

  // 20. Ultimate Glass Card Stack v2
  UltimateGlass: () => (
    <footer className="w-full bg-zinc-950 p-12 relative overflow-hidden">
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
              <Layers className="text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-2xl tracking-tighter">PRO_FOOTER</span>
              <span className="text-xs text-zinc-500 font-mono">NEXT_GEN_UI</span>
            </div>
          </div>
          <p className="text-zinc-400 max-w-sm leading-relaxed text-lg">La base perfecta para cualquier proyecto web moderno. Limpio, rápido y altamente personalizable.</p>
        </div>
        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm">Product</h4>
          <ul className="text-zinc-500 space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Components</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm">Legal</h4>
          <ul className="text-zinc-500 space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white transition-colors">
            <GitHub size={16} />
          </div>
          <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white transition-colors">
            <Twitter size={16} />
          </div>
        </div>
        <div className="text-zinc-600 text-sm">© 2026 UIX SHOWCASE PRO. All rights reserved.</div>
      </div>
    </footer>
  ),

  // 21. Glassmorphism Light Focus
  GlassLightFocus: () => (
    <footer className="w-full bg-white/40 backdrop-blur-md border-t border-white/60 p-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-400 blur-[2px]" />
          <span className="text-zinc-800 font-bold text-xl">SoftEdge</span>
        </div>
        <div className="flex gap-10 text-zinc-500 text-sm font-medium">
          <a href="#" className="hover:text-zinc-950 transition-colors">Design</a>
          <a href="#" className="hover:text-zinc-950 transition-colors">Case Studies</a>
          <a href="#" className="hover:text-zinc-950 transition-colors">Contact</a>
        </div>
        <div className="flex gap-4">
          <Instagram size={20} className="text-zinc-400 hover:text-zinc-950 cursor-pointer" />
          <Twitter size={20} className="text-zinc-400 hover:text-zinc-950 cursor-pointer" />
        </div>
      </div>
    </footer>
  ),

  // 22. Minimalist Split Border v2
  SplitBorder: () => (
    <footer className="w-full bg-white border-t border-zinc-100 p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <div className="text-4xl font-black tracking-tighter italic underline decoration-4 underline-offset-8">ICONIC.</div>
          <p className="text-zinc-400 text-lg">Definiendo el estándar visual de la próxima década.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-[0.3em]">Services</h4>
            <ul className="text-zinc-500 space-y-2 text-sm">
              <li><a href="#">Strategy</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Development</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-[0.3em]">Agency</h4>
            <ul className="text-zinc-500 space-y-2 text-sm">
              <li><a href="#">Archive</a></li>
              <li><a href="#">Process</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  ),

  // 23. Cyberpunk Alert (Yellow/Black)
  CyberAlert: () => (
    <footer className="w-full bg-yellow-400 border-t-4 border-black p-8 flex flex-col items-center gap-6">
      <div className="flex gap-8 items-center">
        <div className="bg-black text-yellow-400 px-6 py-2 font-black skew-x-[-12deg] text-xl">SYSTEM_WARNING</div>
        <div className="bg-black text-yellow-400 px-6 py-2 font-black skew-x-[-12deg] text-xl animate-pulse">REBOOT_REQUIRED</div>
      </div>
      <p className="text-black font-mono text-xs font-bold text-center max-w-xl">
        ESTA SECCIÓN CONTIENE PROTOCOLOS CRÍTICOS DE DISEÑO. NO DESCONECTE EL SISTEMA DURANTE EL RENDERIZADO.
      </p>
      <div className="w-full h-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] opacity-20" />
    </footer>
  ),

  // 24. Modern Tabbed Footer
  Tabbed: () => (
    <footer className="w-full bg-zinc-50 py-16 px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-wrap justify-center gap-4">
          {['Overview', 'Features', 'Pricing', 'Docs', 'Support'].map(tab => (
            <a key={tab} href="#" className="px-6 py-2 bg-white border border-zinc-200 rounded-xl text-zinc-500 text-sm font-bold hover:bg-zinc-900 hover:text-white transition-all shadow-sm">
              {tab}
            </a>
          ))}
        </div>
        <div className="h-px bg-zinc-200 w-full" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-400 text-xs font-medium uppercase tracking-widest">
          <span>© 2026 Tabbed Systems</span>
          <div className="flex gap-8">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  ),

  // 25. Floating Search Center v2
  SearchCenter: () => (
    <footer className="w-full bg-white border-t border-zinc-100 py-20 px-8">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h3 className="text-3xl font-black">Ready to start?</h3>
        <div className="relative max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="w-full bg-zinc-100 border-none rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20" />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-black transition-colors">
            Subscribe
          </button>
        </div>
        <div className="flex justify-center gap-12 text-zinc-400">
          <Twitter size={24} className="hover:text-black cursor-pointer" />
          <Instagram size={24} className="hover:text-black cursor-pointer" />
          <GitHub size={24} className="hover:text-black cursor-pointer" />
        </div>
      </div>
    </footer>
  ),

  // 26. Retro Terminal v2
  TerminalV2: () => (
    <footer className="w-full bg-[#1a1a1a] p-10 font-mono border-t border-[#333]">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="text-zinc-500 text-xs">{"// FOOTER_DUMP_START"}</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[#0fa] text-xs">
          <div>{"[HOME]"}</div>
          <div>{"[WORK]"}</div>
          <div>{"[NET]"}</div>
          <div>{"[SYNC]"}</div>
        </div>
        <div className="h-px bg-zinc-800 w-full" />
        <div className="flex justify-between items-center text-zinc-600 text-[10px]">
          <span>SSH_ESTABLISHED_2026</span>
          <span className="animate-pulse">{"_"}</span>
        </div>
      </div>
    </footer>
  ),

  // 27. Modern Glass Blur 3XL v2
  GlassBlur3XL: () => (
    <footer className="w-full bg-zinc-950 py-24 px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 relative z-10">
        <div className="space-y-6">
          <div className="text-white font-black text-4xl italic tracking-tighter">Opal.</div>
          <p className="text-zinc-500 text-lg leading-relaxed">Experiencias digitales transparentes y fluidas.</p>
        </div>
        <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-12">
          {['Explore', 'Company', 'Legal'].map(col => (
            <div key={col} className="space-y-6">
              <h4 className="text-white font-bold text-sm">{col}</h4>
              <ul className="text-zinc-600 space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Link 01</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Link 02</a></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  // 28. Double Border Minimal v2
  DoubleBorder: () => (
    <footer className="w-full bg-white border-t border-zinc-200 py-16 px-8 relative after:absolute after:top-1 after:left-0 after:w-full after:h-px after:bg-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="space-y-8">
          <div className="w-16 h-16 bg-black flex items-center justify-center text-white font-black text-3xl">D</div>
          <div className="flex gap-12 font-black text-zinc-900 text-xs uppercase tracking-[0.3em]">
            <a href="#">Work</a>
            <a href="#">Studio</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="text-right space-y-4">
          <p className="text-zinc-400 text-xs uppercase tracking-widest">© 2026 Double Studio</p>
          <div className="flex gap-6 justify-end">
            <Twitter size={20} className="text-zinc-300 hover:text-black" />
            <Instagram size={20} className="text-zinc-300 hover:text-black" />
          </div>
        </div>
      </div>
    </footer>
  ),

  // 29. Soft Neumorphic Dark v2
  NeumorphicDark: () => (
    <div className="w-full bg-zinc-900 p-8">
      <footer className="max-w-7xl mx-auto bg-zinc-900 rounded-[40px] p-12 shadow-[20px_20px_60px_#0a0a0a,-20px_-20px_60px_#1a1a1a] border border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-900 shadow-[4px_4px_10px_#0a0a0a,-4px_-4px_10px_#1a1a1a] flex items-center justify-center">
              <Zap size={24} className="text-purple-500" fill="currentColor" />
            </div>
            <span className="text-white font-bold text-2xl">Nova Systems</span>
          </div>
          <div className="flex gap-10 text-zinc-500 font-medium">
            <a href="#" className="hover:text-purple-500 transition-colors">Platform</a>
            <a href="#" className="hover:text-purple-500 transition-colors">Resources</a>
            <a href="#" className="hover:text-purple-500 transition-colors">Community</a>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-900 shadow-[4px_4px_8px_#0a0a0a,-4px_-4px_8px_#1a1a1a] flex items-center justify-center text-zinc-500 hover:text-white transition-colors">
              <Twitter size={18} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  ),

  // 30. Minimalist Vertical Dash v2
  VerticalDash: () => (
    <footer className="w-full bg-white py-24 px-10 border-t border-zinc-100 flex flex-col items-center gap-16">
      <div className="text-5xl font-light tracking-tighter">Lineage.</div>
      <div className="flex gap-16">
        {['Gallery', 'Story', 'Archives', 'Talk'].map(item => (
          <div key={item} className="flex items-center gap-16">
            <a href="#" className="text-sm font-bold text-zinc-300 hover:text-black transition-colors">{item}</a>
            {item !== 'Talk' && <div className="w-px h-4 bg-zinc-200" />}
          </div>
        ))}
      </div>
      <div className="text-zinc-200 text-[10px] tracking-[1em] uppercase">© MMXXVI</div>
    </footer>
  ),

  // 31. Cyberpunk Grid Overlay v2
  CyberGrid: () => (
    <footer className="w-full bg-black py-20 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-2 space-y-6">
          <div className="text-white font-black italic text-3xl tracking-widest border-l-4 border-[#0fa] pl-4">GRID_OS</div>
          <p className="text-zinc-600 font-mono text-xs max-w-sm">ARQUITECTURA DE DATOS DISTRIBUIDA PARA EL SIGUIENTE NIVEL DE LA RED.</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-[#0fa] font-bold text-xs font-mono uppercase">Directory</h4>
          <ul className="text-zinc-500 space-y-2 text-xs font-mono">
            <li><a href="#" className="hover:text-white transition-colors">/ROOT</a></li>
            <li><a href="#" className="hover:text-white transition-colors">/BIN</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-[#0fa] font-bold text-xs font-mono uppercase">Status</h4>
          <div className="flex items-center gap-3 text-zinc-500 text-[10px] font-mono">
            <div className="w-2 h-2 bg-[#0fa] rounded-full animate-pulse" />
            OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  ),

  // 32. Bento Box Horizontal v3
  BentoV3: () => (
    <footer className="w-full bg-zinc-50 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 bg-white border border-zinc-200 rounded-3xl p-10 flex flex-col justify-between shadow-sm">
          <div className="text-4xl font-black italic tracking-tighter">Lush.</div>
          <div className="flex gap-12 text-zinc-400 font-bold text-sm">
            <a href="#">Story</a>
            <a href="#">Process</a>
            <a href="#">Archive</a>
          </div>
        </div>
        <div className="md:col-span-4 bg-zinc-900 rounded-3xl p-10 flex flex-col items-center justify-center text-white gap-4 shadow-xl">
          <div className="text-xs uppercase tracking-widest opacity-50">Join Us</div>
          <button className="bg-white text-black px-8 py-3 rounded-2xl font-black uppercase text-sm hover:scale-105 transition-transform">Get in touch</button>
        </div>
      </div>
    </footer>
  ),

  // 33. Industrial Blueprint v3
  BlueprintV3: () => (
    <footer className="w-full bg-[#0d2a4a] py-20 px-8 relative font-mono overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#fff_0.5px,transparent_0.5px)] bg-[size:15px_15px] opacity-10" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 text-white/40">
        <div className="col-span-2 space-y-6">
          <div className="text-white font-black text-2xl tracking-tighter">SPEC_001</div>
          <p className="text-xs leading-relaxed max-w-sm uppercase">Manual de construcción de interfaces críticas. Versión final de despliegue estable.</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold text-xs uppercase underline underline-offset-8 decoration-white/20">Sections</h4>
          <ul className="text-[10px] space-y-3 uppercase">
            <li><a href="#" className="hover:text-white">01_Foundation</a></li>
            <li><a href="#" className="hover:text-white">02_Logic</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div className="text-[10px] uppercase text-right">
            System_Live<br/>
            Time_Stamp: 2026.05.19
          </div>
        </div>
      </div>
    </footer>
  ),

  // 34. Minimalist Dot Menu v2
  DotMenuV2: () => (
    <footer className="w-full bg-white py-16 px-10 flex flex-col items-center gap-12 border-t border-zinc-100">
      <div className="flex gap-2">
        {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-200" />)}
      </div>
      <div className="flex gap-16 font-black text-zinc-900 text-xs uppercase tracking-[0.4em]">
        <a href="#">Works</a>
        <a href="#">Story</a>
        <a href="#">Lab</a>
      </div>
      <div className="text-zinc-300 text-[10px] font-medium uppercase tracking-[0.2em]">© MMXXVI Studio Dot</div>
    </footer>
  ),

  // 35. Cyberpunk Pulse Border v2
  PulseBorderV2: () => (
    <footer className="w-full bg-black py-20 px-8 relative border-t border-[#f09]/10">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f09] to-transparent shadow-[0_0_15px_#f09] animate-pulse" />
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="text-white font-black italic text-4xl tracking-tighter">PULSE_CORP</div>
        <div className="flex gap-16 text-[#f09] font-mono text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Core_Data</a>
          <a href="#" className="hover:text-white transition-colors">Network</a>
        </div>
        <div className="flex gap-8">
          <GitHub size={24} className="text-zinc-800 hover:text-white cursor-pointer" />
          <Twitter size={24} className="text-zinc-800 hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  ),

  // 36. Soft Pastel Gradient Focus v2
  PastelFocusV2: () => (
    <footer className="w-full bg-zinc-50 py-20 px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-[48px] p-16 shadow-[0_20px_80px_rgba(0,0,0,0.02)] border border-zinc-100/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="text-3xl font-black italic tracking-tighter text-rose-500">Lush.</div>
            <p className="text-zinc-400 text-lg">Diseño suave, impacto profundo.</p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-400">
                <Instagram size={20} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="space-y-4">
              <h4 className="font-bold text-zinc-800">Studio</h4>
              <ul className="text-zinc-400 space-y-2 text-sm">
                <li><a href="#">About</a></li>
                <li><a href="#">Process</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-zinc-800">Legal</h4>
              <ul className="text-zinc-400 space-y-2 text-sm">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  ),

  // 37. Modern Dark Dashboard Footer
  DashboardFooter: () => (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-8 px-10 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">D</div>
        <span className="text-zinc-500 text-sm font-medium">Dashboard v4.0</span>
      </div>
      <div className="flex gap-10 text-zinc-600 text-xs font-bold uppercase tracking-widest">
        <a href="#" className="hover:text-white transition-colors">Docs</a>
        <a href="#" className="hover:text-white transition-colors">API</a>
        <a href="#" className="hover:text-white transition-colors">Support</a>
      </div>
      <div className="text-zinc-700 text-xs">© 2026 UIX Systems</div>
    </footer>
  ),

  // 38. Retro TV Static v2
  RetroTVV2: () => (
    <footer className="w-full bg-[#111] py-16 px-8 relative overflow-hidden font-mono border-t border-zinc-800">
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://media.giphy.com/media/oEI9uWUicKgR6m7_Dk/giphy.gif')] bg-cover" />
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 relative z-10">
        <div className="text-zinc-500 text-xl font-black italic animate-pulse">NO_SIGNAL_ESTABLISHED</div>
        <div className="flex gap-12 text-zinc-700 text-xs uppercase tracking-[0.5em]">
          <a href="#">Archive</a>
          <a href="#">Static</a>
          <a href="#">Noise</a>
        </div>
        <div className="text-zinc-800 text-[10px] uppercase">Channel_D_2026</div>
      </div>
    </footer>
  ),

  // 39. Minimalist Underline Sweep v2
  UnderlineSweepV2: () => (
    <footer className="w-full bg-white py-20 px-10 flex flex-col items-center gap-12 border-t border-zinc-100">
      <div className="text-4xl font-black italic tracking-tighter">SWEEP.</div>
      <div className="w-24 h-[2px] bg-black" />
      <div className="flex gap-16 font-black text-zinc-300 text-xs uppercase tracking-[0.4em]">
        <a href="#" className="hover:text-black transition-colors">Work</a>
        <a href="#" className="hover:text-black transition-colors">Story</a>
        <a href="#" className="hover:text-black transition-colors">About</a>
      </div>
      <div className="text-zinc-200 text-[10px] font-bold uppercase tracking-widest mt-12">© MMXXVI Studio Sweep</div>
    </footer>
  ),

  // 40. Ultimate Cinematic Glass v2
  CinematicGlassV2: () => (
    <footer className="w-full bg-black py-24 px-12 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12 relative z-10">
        <div className="space-y-8">
          <div className="text-white font-black text-5xl tracking-[0.4em] uppercase opacity-20">CINEMA</div>
          <div className="flex gap-12 text-white/40 font-bold text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Films</a>
            <a href="#" className="hover:text-white transition-colors">Studio</a>
            <a href="#" className="hover:text-white transition-colors">Press</a>
          </div>
        </div>
        <div className="text-right space-y-4">
          <div className="w-16 h-px bg-white/20 ml-auto" />
          <p className="text-white/20 text-[10px] font-mono tracking-[0.5em] uppercase">Established MMXXVI</p>
        </div>
      </div>
    </footer>
  ),

  // 41. Cyberpunk Glitch Text v2
  GlitchFooterV2: () => (
    <footer className="w-full bg-black py-20 px-8 border-t border-[#0fa]/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="relative group cursor-pointer">
          <span className="text-white font-black text-5xl italic relative z-10">GLITCH_UI</span>
          <span className="absolute top-0 left-0 text-[#f09] font-black text-5xl italic opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all animate-pulse">GLITCH_UI</span>
          <span className="absolute top-0 left-0 text-[#0fa] font-black text-5xl italic opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:translate-y-1 transition-all animate-pulse">GLITCH_UI</span>
        </div>
        <div className="flex gap-16 font-mono text-xs text-[#0fa]/40 uppercase tracking-[0.5em]">
          <a href="#" className="hover:text-white transition-colors">System</a>
          <a href="#" className="hover:text-white transition-colors">Network</a>
        </div>
        <span className="text-zinc-800 text-[10px] font-mono">SYSTEM_STABLE_v4.0.2</span>
      </div>
    </footer>
  ),

  // 42. Glassmorphism Light v3
  GlassLightV3: () => (
    <footer className="w-full bg-zinc-50 py-24 px-10">
      <div className="max-w-5xl mx-auto bg-white/40 backdrop-blur-2xl border border-white rounded-[64px] p-16 shadow-[0_30px_100px_rgba(0,0,0,0.02)] flex flex-col items-center gap-12">
        <div className="text-4xl font-black tracking-tighter italic text-indigo-600">Float.</div>
        <div className="flex gap-12 text-zinc-400 font-bold text-sm">
          <a href="#" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Team</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a>
        </div>
        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-3xl bg-indigo-50 flex items-center justify-center text-indigo-400">
            <Twitter size={20} />
          </div>
        </div>
      </div>
    </footer>
  ),

  // 43. Minimalist Bold Typography v2
  BoldTypeV2: () => (
    <footer className="w-full bg-white py-32 px-10 flex flex-col items-center gap-12">
      <div className="text-[12vw] font-black leading-none uppercase tracking-tighter opacity-5">Footer</div>
      <div className="flex gap-20 text-zinc-900 font-black uppercase text-xs tracking-[0.5em] relative -mt-20">
        <a href="#" className="hover:text-zinc-400 transition-colors">Works</a>
        <a href="#" className="hover:text-zinc-400 transition-colors">Studio</a>
        <a href="#" className="hover:text-zinc-400 transition-colors">Press</a>
      </div>
    </footer>
  ),

  // 44. Retro Command Terminal v2
  CommandTerminalV2: () => (
    <footer className="w-full bg-black py-12 px-8 font-mono border-t-2 border-zinc-800">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="text-zinc-600 text-xs">{"[ SYSTEM_SHUTDOWN_LOG ]"}</div>
        <div className="grid grid-cols-2 gap-4 text-[#0fa] text-[10px]">
          <div>{"> TERMINATING_PROCESSES..."}</div>
          <div>{"> SAVING_CACHE..."}</div>
          <div>{"> LOGGING_OUT_ROOT..."}</div>
          <div>{"> DONE."}</div>
        </div>
        <div className="flex justify-between items-end text-zinc-800 text-[10px] pt-8">
          <span>(C) 2026 UIX_TERMINAL</span>
          <span>42%_RECOVERY_KEY_READY</span>
        </div>
      </div>
    </footer>
  ),

  // 45. Modern Architecture Dark v2
  ArchDarkV2: () => (
    <footer className="w-full bg-zinc-950 py-24 px-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-12">
          <div className="text-white font-light text-6xl tracking-[0.2em] uppercase leading-none">Arch<br/><span className="font-black">Studio.</span></div>
          <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest">Built in New York, 2026</p>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex gap-16 text-zinc-500 font-bold text-xs uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-white transition-colors">Archive</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-zinc-800 text-[8vw] font-black leading-none opacity-20">26</div>
        </div>
      </div>
    </footer>
  ),

  // 46. Neon Path Draw v3
  NeonPathV3: () => (
    <footer className="w-full bg-black py-20 px-8 relative overflow-hidden group border-t border-[#0fa]/10">
      <div className="absolute top-0 left-0 w-full h-px bg-[#0fa]/40 shadow-[0_0_15px_#0fa] animate-pulse" />
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 relative z-10">
        <div className="w-16 h-16 border-2 border-[#0fa] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,170,0.2)]">
          <Zap size={32} className="text-[#0fa]" fill="currentColor" />
        </div>
        <div className="text-white font-black tracking-[0.5em] uppercase text-2xl">Voltage</div>
        <div className="flex gap-12 text-[#0fa]/40 font-bold text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-[#0fa] transition-colors">Grid</a>
          <a href="#" className="hover:text-[#0fa] transition-colors">Storage</a>
          <a href="#" className="hover:text-[#0fa] transition-colors">Sync</a>
        </div>
      </div>
    </footer>
  ),

  // 47. Floating Geometric Dark v2
  GeometricDarkV2: () => (
    <footer className="w-full bg-zinc-950 p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 flex flex-col justify-between gap-12">
          <div className="w-10 h-10 rotate-45 border-2 border-indigo-500" />
          <div className="text-white font-black text-4xl italic tracking-tighter">Shape.</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 flex flex-col justify-between gap-12">
          <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-widest">Explore</h4>
          <ul className="text-white text-sm font-bold space-y-4">
            <li><a href="#" className="hover:text-indigo-400">Exhibits</a></li>
            <li><a href="#" className="hover:text-indigo-400">Archives</a></li>
          </ul>
        </div>
        <div className="bg-indigo-600 rounded-3xl p-10 flex flex-col justify-between items-center text-white gap-8 shadow-2xl shadow-indigo-900/20">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest opacity-60">Next Event</div>
            <div className="text-2xl font-black italic mt-1">JUNE_26</div>
          </div>
          <button className="bg-white text-black px-8 py-3 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">Get Tickets</button>
        </div>
      </div>
    </footer>
  ),

  // 48. Cyber Login Focus v4
  CyberFocusV4: () => (
    <footer className="w-full bg-black py-24 px-8 border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="w-20 h-[1px] bg-emerald-500 shadow-[0_0_15px_#10b981]" />
        <div className="text-white font-black text-4xl tracking-[0.2em] uppercase">Core_Vault</div>
        <div className="flex gap-12 text-emerald-500/30 font-mono text-[10px] uppercase tracking-[0.4em]">
          <a href="#" className="hover:text-emerald-400 transition-colors">Access</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Nodes</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Sync</a>
        </div>
        <div className="text-zinc-900 text-[12vw] font-black leading-none absolute -bottom-10 select-none">CORE</div>
      </div>
    </footer>
  ),

  // 49. Soft Bento Pastel v3
  SoftBentoV3: () => (
    <footer className="w-full bg-indigo-50/30 p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-white rounded-[40px] p-12 flex flex-col justify-between border border-indigo-100/50 shadow-sm">
          <div className="text-3xl font-black text-indigo-600 tracking-tighter">Stack.</div>
          <div className="flex gap-4 mt-12">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-400">
              <Twitter size={20} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[40px] p-10 border border-indigo-100/50 shadow-sm flex flex-col gap-6">
          <h4 className="font-bold text-zinc-800">Resources</h4>
          <ul className="text-zinc-400 text-sm space-y-3">
            <li><a href="#" className="hover:text-indigo-600">Docs</a></li>
            <li><a href="#" className="hover:text-indigo-600">API</a></li>
          </ul>
        </div>
        <div className="bg-white rounded-[40px] p-10 border border-indigo-100/50 shadow-sm flex flex-col gap-6">
          <h4 className="font-bold text-zinc-800">Support</h4>
          <ul className="text-zinc-400 text-sm space-y-3">
            <li><a href="#" className="hover:text-indigo-600">Help</a></li>
            <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  ),

  // 50. Industrial Blueprint v4
  BlueprintV4: () => (
    <footer className="w-full bg-zinc-100 border-t-8 border-zinc-900 py-20 px-10 font-mono">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="space-y-6">
          <div className="text-zinc-900 font-black text-4xl uppercase leading-none tracking-tighter italic">Heavy_Duty</div>
          <p className="text-zinc-400 text-xs uppercase leading-relaxed">Sistemas de diseño industriales para aplicaciones de alta resistencia y fiabilidad crítica.</p>
        </div>
        <div className="space-y-6">
          <h4 className="font-black text-sm uppercase underline decoration-4 decoration-zinc-900 underline-offset-8">Documentation</h4>
          <ul className="text-xs font-bold space-y-3 uppercase">
            <li><a href="#" className="hover:bg-zinc-900 hover:text-white px-2 py-1 transition-colors">01_Specs</a></li>
            <li><a href="#" className="hover:bg-zinc-900 hover:text-white px-2 py-1 transition-colors">02_Deployment</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="w-24 h-24 border-4 border-zinc-900 flex items-center justify-center text-zinc-900 font-black text-4xl italic">HD</div>
          <div className="text-right text-[10px] font-bold uppercase mt-8">Build_v4.0.1_Stable</div>
        </div>
      </div>
    </footer>
  ),

  // 51. Spotlight Dark v4
  SpotlightV4: () => (
    <footer className="w-full bg-black py-32 px-10 relative group overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="text-white font-light text-5xl tracking-[0.5em] uppercase opacity-20 group-hover:opacity-100 transition-opacity duration-1000">Studio</div>
        <div className="w-1 h-24 bg-gradient-to-b from-white to-transparent mx-auto opacity-20" />
        <div className="flex justify-center gap-16 text-zinc-600 font-bold text-[10px] uppercase tracking-[0.4em]">
          <a href="#" className="hover:text-white transition-colors">Story</a>
          <a href="#" className="hover:text-white transition-colors">Press</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  ),

  // 52. Split Typography v3
  SplitTypeV3: () => (
    <footer className="w-full bg-white flex flex-col md:flex-row h-auto md:h-96 border-t border-zinc-100">
      <div className="md:w-1/2 p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-100 group hover:bg-zinc-950 transition-colors cursor-pointer">
        <div className="text-zinc-200 text-xs font-bold uppercase tracking-widest group-hover:text-zinc-700 transition-colors">01_Creative</div>
        <div className="text-6xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">Works.</div>
      </div>
      <div className="md:w-1/2 p-16 flex flex-col justify-between group hover:bg-zinc-950 transition-colors cursor-pointer">
        <div className="text-zinc-200 text-xs font-bold uppercase tracking-widest group-hover:text-zinc-700 transition-colors">02_Studio</div>
        <div className="text-6xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">Talk.</div>
      </div>
    </footer>
  ),

  // 53. Abstract Mesh Soft v3
  MeshSoftV3: () => (
    <footer className="w-full bg-zinc-950 py-24 px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-indigo-500/10 to-emerald-500/10 blur-[120px]" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 relative z-10">
        <div className="space-y-8">
          <div className="text-white font-black text-4xl italic tracking-tighter">Aura.</div>
          <p className="text-zinc-500 text-lg leading-relaxed">Elevando el estándar de la estética digital mediante algoritmos generativos.</p>
        </div>
        <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Lab', 'Design', 'Motion', 'Contact'].map(item => (
            <div key={item} className="space-y-6">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">{item}</h4>
              <ul className="text-zinc-600 space-y-3 text-sm">
                <li><a href="#" className="hover:text-white">Link</a></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-zinc-800 text-xs font-bold uppercase tracking-widest">
        Aura_Design_Labs_MMXXVI
      </div>
    </footer>
  ),

  // 54. Brutalist Pop v4
  BrutalistPopV4: () => (
    <footer className="w-full bg-white border-t-8 border-black p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-12">
          <div className="text-8xl font-black uppercase tracking-tighter leading-none italic">Hard<br/>Design</div>
          <div className="flex gap-4">
            <button className="bg-yellow-400 border-4 border-black px-10 py-4 font-black uppercase text-xl shadow-[8px_8px_0px_black] active:shadow-none active:translate-x-2 active:translate-y-2 transition-all">Start_Project</button>
          </div>
        </div>
        <div className="md:col-span-4 space-y-8">
          <div className="bg-black text-white p-8 space-y-4">
            <h4 className="font-black text-xl italic uppercase">Contact</h4>
            <p className="font-mono text-sm opacity-60">HELLO@HARD.DESIGN</p>
          </div>
          <div className="bg-emerald-400 border-4 border-black p-8">
            <h4 className="font-black text-xl italic uppercase">Follow</h4>
            <p className="font-mono text-sm">@HARD_WORKS</p>
          </div>
        </div>
      </div>
    </footer>
  ),

  // 55. Modern Tech SaaS v3
  TechSaaSV3: () => (
    <footer className="w-full bg-zinc-50 border-t border-zinc-200 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="text-3xl font-black text-zinc-900 tracking-tighter">Deploy.</div>
            <p className="text-zinc-500 text-lg max-w-sm">La plataforma de infraestructura para la siguiente generación de ingenieros.</p>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-zinc-900">Infrastructure</h4>
            <ul className="text-zinc-500 space-y-3 text-sm font-medium">
              <li><a href="#" className="hover:text-zinc-900">Database</a></li>
              <li><a href="#" className="hover:text-zinc-900">Compute</a></li>
              <li><a href="#" className="hover:text-zinc-900">Edge</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-zinc-900">Company</h4>
            <ul className="text-zinc-500 space-y-3 text-sm font-medium">
              <li><a href="#" className="hover:text-zinc-900">About</a></li>
              <li><a href="#" className="hover:text-zinc-900">Careers</a></li>
              <li><a href="#" className="hover:text-zinc-900">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-400 text-xs font-bold uppercase tracking-widest">
          <span>© 2026 Deploy Infrastructure Inc.</span>
          <div className="flex gap-8">
            <Twitter size={18} className="hover:text-zinc-900 cursor-pointer" />
            <GitHub size={18} className="hover:text-zinc-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  ),

  // 56. Vintage Magazine Cover v3
  VintageMagV3: () => (
    <footer className="w-full bg-[#fdfaf6] border-t-2 border-black py-20 px-12 font-serif italic">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="text-6xl font-black tracking-tighter leading-none">The Modernist</div>
        <div className="flex justify-center gap-16 text-lg border-y border-black/10 py-6">
          <a href="#" className="hover:underline">Design</a>
          <a href="#" className="hover:underline">Culture</a>
          <a href="#" className="hover:underline">Art</a>
          <a href="#" className="hover:underline">Archive</a>
        </div>
        <div className="text-[10px] uppercase tracking-[0.5em] opacity-40">Published in New York — MMXXVI</div>
      </div>
    </footer>
  ),

  // 57. Gradient Wave Footer v2
  GradientWaveV2: () => (
    <footer className="w-full bg-white py-24 px-8 relative overflow-hidden border-t border-zinc-100">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl shadow-blue-100" />
          <span className="text-3xl font-black tracking-tighter italic">WAVE.</span>
        </div>
        <div className="flex gap-12 text-zinc-400 font-bold text-sm uppercase tracking-widest">
          <a href="#" className="hover:text-black transition-colors">Products</a>
          <a href="#" className="hover:text-black transition-colors">Lab</a>
          <a href="#" className="hover:text-black transition-colors">Support</a>
        </div>
        <div className="text-zinc-300 text-xs font-bold uppercase tracking-widest">© 2026 Wave Design Systems</div>
      </div>
    </footer>
  ),

  // 58. Minimalist Portfolio Focus v3
  PortfolioFocusV3: () => (
    <footer className="w-full bg-white py-32 px-12 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-12">
          <div className="text-7xl font-black tracking-tighter leading-none italic opacity-10">M.</div>
          <p className="text-zinc-400 text-xl max-w-md">Creando valor a través del diseño minimalista y la ingeniería de precisión.</p>
        </div>
        <div className="flex flex-col justify-between items-end gap-12">
          <div className="flex gap-16 font-bold text-zinc-900 text-xs uppercase tracking-[0.4em]">
            <a href="#" className="hover:opacity-40 transition-opacity">Works</a>
            <a href="#" className="hover:opacity-40 transition-opacity">Contact</a>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-300">Located in London</div>
            <div className="text-lg font-black italic mt-1">EST_MMXXVI</div>
          </div>
        </div>
      </div>
    </footer>
  ),

  // 59. Glitch Static v4
  GlitchStaticV4: () => (
    <footer className="w-full bg-black py-24 px-8 relative overflow-hidden border-t border-[#f09]/20">
      <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uWUicKgR6m7_Dk/giphy.gif')] opacity-[0.03] pointer-events-none" />
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 relative z-10">
        <div className="text-white font-black italic text-4xl tracking-[0.2em] animate-pulse">SYSTEM_FAIL</div>
        <div className="flex gap-16 font-mono text-[10px] text-white/20 uppercase tracking-[0.5em]">
          <a href="#" className="hover:text-white transition-colors">Reboot</a>
          <a href="#" className="hover:text-white transition-colors">Secure</a>
          <a href="#" className="hover:text-white transition-colors">Sync</a>
        </div>
        <div className="w-32 h-[1px] bg-[#f09] shadow-[0_0_15px_#f09] opacity-40" />
      </div>
    </footer>
  ),

  // 60. Ultimate Glass Card Stack v3
  UltimateGlassV3: () => (
    <footer className="w-full bg-zinc-950 py-32 px-12 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
        <div className="col-span-1 md:col-span-2 space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
              <Layers className="text-black" size={32} />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-4xl tracking-tighter italic">PRO_UI</span>
              <span className="text-xs text-zinc-600 font-mono tracking-widest uppercase mt-1">Design System v4.0</span>
            </div>
          </div>
          <p className="text-zinc-500 text-xl leading-relaxed max-w-lg italic">"La simplicidad es la máxima sofisticación en el diseño digital."</p>
        </div>
        <div className="space-y-8 pt-4">
          <h4 className="text-white font-black text-xs uppercase tracking-widest">Directory</h4>
          <ul className="text-zinc-600 space-y-4 text-sm font-bold uppercase tracking-widest">
            <li><a href="#" className="hover:text-white transition-colors">Components</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Lab</a></li>
          </ul>
        </div>
        <div className="space-y-8 pt-4">
          <h4 className="text-white font-black text-xs uppercase tracking-widest">Connect</h4>
          <div className="flex gap-6">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white transition-all cursor-pointer">
              <GitHub size={20} />
            </div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white transition-all cursor-pointer">
              <Twitter size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-700 text-xs font-bold uppercase tracking-[0.3em]">
        <span>© MMXXVI UIX SHOWCASE PRO</span>
        <span>Made with Precision</span>
      </div>
    </footer>
  ),

  // --- BATCH 1 FOOTERS (SIMMETRICAL EXPANSION) ---

  SEO_Sitemap: () => (
    <footer className="w-full bg-zinc-950 text-zinc-400 py-20 px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
        <div className="col-span-2 lg:col-span-1 space-y-6">
          <div className="text-white font-black text-2xl tracking-tighter">SEO_MASTER</div>
          <p className="text-xs leading-relaxed opacity-50">Optimized structure for maximum search visibility and crawlability.</p>
        </div>
        {[1, 2, 3, 4].map((col) => (
          <div key={col} className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Section {col}</h4>
            <ul className="space-y-2 text-xs">
              {[1, 2, 3, 4, 5].map((link) => (
                <li key={link}><a href="#" className="hover:text-white transition-colors">Internal Link {link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
        <span>XML_SITEMAP_INDEXED</span>
        <span>© 2026 SEO_MASTER_CORE</span>
      </div>
    </footer>
  ),

  SEO_KeywordCloud: () => (
    <footer className="w-full bg-white py-16 px-8 border-t border-zinc-100">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h4 className="text-zinc-400 font-bold text-xs uppercase tracking-[0.3em]">Trending Topics</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'UIX', 'Neon', 'Bento', 'Minimalist', 'SaaS', 'SEO', 'Creative', 'Modern'].map((tag) => (
            <span key={tag} className="px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full text-zinc-600 text-xs font-medium hover:bg-zinc-900 hover:text-white transition-all cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-10 border-t border-zinc-50 flex justify-between items-center text-zinc-300 text-[10px] uppercase tracking-widest">
          <span>Keywords_Dynamic_Cloud</span>
          <span>© 2026 Index_Systems</span>
        </div>
      </div>
    </footer>
  ),

  Social_InstagramFeed: () => (
    <footer className="w-full bg-zinc-50 py-20 px-8 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <h3 className="text-2xl font-black tracking-tighter">Follow @uix_showcase</h3>
            <p className="text-zinc-500 text-sm italic">Daily inspiration from our creative studio.</p>
          </div>
          <button className="px-6 py-2 bg-zinc-900 text-white rounded-xl text-sm font-bold hover:bg-black transition-all">Follow Us</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square bg-zinc-200 rounded-lg overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Heart size={20} fill="currentColor" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  Social_NewsletterWide: () => (
    <footer className="w-full bg-indigo-600 py-20 px-8 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-4">
          <h2 className="text-4xl font-black tracking-tighter leading-none">Join the inner circle.</h2>
          <p className="text-indigo-100 text-lg opacity-80">Get early access to new components and exclusive design tips.</p>
        </div>
        <div className="flex gap-2">
          <input type="email" placeholder="email@example.com" className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 outline-none focus:bg-white/20 transition-all" />
          <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-black uppercase text-sm hover:scale-105 transition-transform shadow-xl">Join</button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-white/10 flex justify-between items-center text-indigo-200/40 text-[10px] font-bold uppercase tracking-widest">
        <span>Newsletter_v2.0_Active</span>
        <span>© 2026 Circle_Studio</span>
      </div>
    </footer>
  ),

  SaaS_AppStore: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-black text-white tracking-tighter leading-none">Available on all devices.</h2>
          <p className="text-zinc-500 max-w-lg mx-auto leading-relaxed">Sync your projects across mobile, tablet, and desktop with our native applications.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center gap-4 group cursor-pointer hover:border-white/20 transition-all">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black">
              <Zap size={24} fill="currentColor" />
            </div>
            <div className="text-left">
              <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Download for</div>
              <div className="text-white font-bold">App Store</div>
            </div>
          </div>
          <div className="px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center gap-4 group cursor-pointer hover:border-white/20 transition-all">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black">
              <Zap size={24} fill="currentColor" />
            </div>
            <div className="text-left">
              <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Get it on</div>
              <div className="text-white font-bold">Play Store</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  ),

  Corporate_Locations: () => (
    <footer className="w-full bg-white py-24 px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="text-zinc-900 font-black text-2xl tracking-tighter italic">Global_Nodes.</div>
          <p className="text-zinc-400 text-sm leading-relaxed">Our presence spans across the world's leading tech hubs.</p>
        </div>
        {['San Francisco', 'London', 'Tokyo', 'Berlin'].map((city) => (
          <div key={city} className="space-y-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-zinc-300 transition-colors">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-zinc-400" />
              <h4 className="text-zinc-900 font-bold">{city}</h4>
            </div>
            <p className="text-zinc-500 text-xs font-mono">123 Tech Lane, Suite 100<br/>+1 (555) 000-0000</p>
          </div>
        ))}
      </div>
    </footer>
  ),

  Corporate_Trust: () => (
    <footer className="w-full bg-zinc-50 py-20 px-8 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h4 className="text-zinc-400 font-bold text-xs uppercase tracking-[0.3em]">Trusted by Industry Leaders</h4>
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Shield size={24} className="text-zinc-900" />
                <span className="text-zinc-900 font-black text-xl tracking-tighter italic">PARTNER_{i+1}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-zinc-200 w-full" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-400 text-xs font-bold uppercase tracking-widest">
          <span>Security_Certified_v2026</span>
          <span>© 2026 Trust_Systems_Global</span>
        </div>
      </div>
    </footer>
  ),

  Bento_Complex: () => (
    <footer className="w-full bg-zinc-950 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[400px]">
        <div className="md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 flex flex-col justify-between">
          <div className="text-white font-black text-4xl italic tracking-tighter leading-tight">Complex<br/>Bento.</div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"><GitHub size={20} /></div>
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"><Twitter size={20} /></div>
          </div>
        </div>
        <div className="md:col-span-5 grid grid-cols-2 gap-4">
          <div className="bg-indigo-600 rounded-3xl p-8 flex flex-col justify-between text-white">
            <h4 className="font-bold text-sm uppercase tracking-widest opacity-60">Status</h4>
            <div className="text-2xl font-black italic">ALL_STABLE</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between">
            <h4 className="text-zinc-500 font-bold text-sm uppercase tracking-widest">Uptime</h4>
            <div className="text-white text-2xl font-black italic">99.9%</div>
          </div>
          <div className="col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex items-center justify-between">
            <div className="text-white font-bold">API Reference</div>
            <ArrowRight size={20} className="text-zinc-600" />
          </div>
        </div>
        <div className="md:col-span-3 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-center gap-4 text-center">
          <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Join our community</div>
          <button className="w-full py-3 bg-white text-black rounded-2xl font-black uppercase text-sm hover:scale-105 transition-transform shadow-xl">Join Discord</button>
        </div>
      </div>
    </footer>
  ),

  Dark_NeonPulse: () => (
    <footer className="w-full bg-black py-24 px-8 relative overflow-hidden border-t border-emerald-500/20">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 relative z-10">
        <div className="space-y-8">
          <div className="text-emerald-500 font-black text-4xl tracking-widest border-l-4 border-emerald-500 pl-6">PULSE_OS</div>
          <p className="text-zinc-600 font-mono text-sm leading-relaxed uppercase">Neural architecture for the next evolution of the digital grid.</p>
        </div>
        <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-12">
          {['Root', 'Network', 'Sync'].map((node) => (
            <div key={node} className="space-y-6">
              <h4 className="text-white font-bold text-xs font-mono uppercase tracking-[0.3em]">{node}</h4>
              <ul className="text-emerald-500/40 space-y-3 text-xs font-mono uppercase">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">/access_01</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">/access_02</a></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 text-zinc-800 text-[10px] font-mono tracking-[0.5em] flex justify-between">
        <span>© 2026 PULSE_CORP_STABLE</span>
        <span className="animate-pulse">_CONNECTED_</span>
      </div>
    </footer>
  ),

  Creative_FloatingIcons: () => (
    <footer className="w-full bg-zinc-950 py-32 px-8 relative overflow-hidden border-t border-white/5 group">
      <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-500/10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500/10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000" />
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16 relative z-10">
        <div className="flex gap-12">
          <Cpu size={40} className="text-zinc-800 group-hover:text-indigo-500 transition-colors group-hover:animate-bounce" />
          <Zap size={40} className="text-zinc-800 group-hover:text-amber-500 transition-colors group-hover:animate-bounce [animation-delay:0.2s]" />
          <Globe size={40} className="text-zinc-800 group-hover:text-emerald-500 transition-colors group-hover:animate-bounce [animation-delay:0.4s]" />
        </div>
        <div className="space-y-6">
          <h2 className="text-white font-black text-6xl tracking-tighter leading-none italic uppercase">Float.</h2>
          <p className="text-zinc-500 text-lg max-w-md mx-auto italic leading-relaxed">Breaking the laws of digital physics with experimental UI primitives.</p>
        </div>
        <div className="flex gap-12 text-zinc-700 font-bold text-xs uppercase tracking-[0.4em]">
          <a href="#" className="hover:text-white transition-colors">Exhibits</a>
          <a href="#" className="hover:text-white transition-colors">Labs</a>
          <a href="#" className="hover:text-white transition-colors">Archives</a>
        </div>
      </div>
    </footer>
  ),

  SEO_DeepLinkMap: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] border-b border-white/10 pb-2">Category {i+1}</h4>
              <ul className="space-y-2">
                {Array.from({ length: 8 }).map((_, j) => (
                  <li key={j}><a href="#" className="text-zinc-500 text-[11px] hover:text-indigo-400 transition-colors">Deep Link Item {j+1}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="text-white/20 font-black text-3xl tracking-tighter">SEO_MAP_CORE</div>
          <div className="flex gap-8 text-[10px] font-mono text-zinc-600 uppercase">
            <span>Indexed_Pages: 12,402</span>
            <span>Last_Crawl: 2 mins ago</span>
          </div>
        </div>
      </div>
    </footer>
  ),

  SEO_SemanticGrid: () => (
    <footer className="w-full bg-white py-20 px-8 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {['Core Services', 'Industries', 'Resources'].map((title) => (
            <div key={title} className="space-y-6 p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100">
              <h4 className="text-zinc-900 font-black text-lg tracking-tight">{title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">Semantic optimization for {title.toLowerCase()} ensuring high relevance and keyword density.</p>
              <div className="flex flex-wrap gap-2">
                {['Strategy', 'Design', 'Growth', 'Scale'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-[10px] text-zinc-400">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  Minimalist_GlassPill: () => (
    <footer className="w-full py-12 px-8 flex justify-center">
      <div className="max-w-4xl w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full py-4 px-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-6">
          <div className="w-8 h-8 bg-indigo-500 rounded-full animate-pulse" />
          <span className="text-white font-bold tracking-tighter">GLASS_PILL</span>
        </div>
        <nav className="flex gap-8 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Work</a>
          <a href="#" className="hover:text-white transition-colors">Studio</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="text-zinc-600 text-[10px] font-mono">© 2026</div>
      </div>
    </footer>
  ),

  Minimalist_ThinLine: () => (
    <footer className="w-full bg-zinc-950 py-32 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-white/20 mb-12" />
        <h2 className="text-white text-5xl font-light tracking-[0.2em] uppercase mb-12">Architecture</h2>
        <div className="w-full max-w-2xl h-px bg-white/10 mb-12" />
        <div className="flex gap-16 text-[9px] font-medium text-zinc-500 uppercase tracking-[0.4em]">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  ),

  Social_IconShowcase: () => (
    <footer className="w-full bg-zinc-900 py-24 px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-wrap justify-center gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-20 h-20 bg-zinc-950 border border-white/5 rounded-3xl flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 hover:-translate-y-2 transition-all cursor-pointer group shadow-2xl">
              <Zap size={28} className="group-hover:scale-110 transition-transform" />
            </div>
          ))}
        </div>
        <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.5em]">Connect with our digital pulse</div>
      </div>
    </footer>
  ),

  SaaS_PlatformSupport: () => (
    <footer className="w-full bg-white py-24 px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-8">
          <div className="text-zinc-900 font-black text-3xl tracking-tighter italic">Platform_OS</div>
          <p className="text-zinc-500 leading-relaxed">Integrated infrastructure for the modern enterprise. Built to scale, designed for speed.</p>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-white shadow-lg"><Globe size={20} /></div>
            <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-400 hover:bg-zinc-200 transition-colors"><Cpu size={20} /></div>
          </div>
        </div>
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
          {[1, 2, 3].map(col => (
            <div key={col} className="space-y-6">
              <h4 className="text-zinc-900 font-bold text-sm uppercase tracking-widest">Platform {col}</h4>
              <ul className="space-y-3 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Changelog</a></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  Creative_GlitchBrutalist: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t-8 border-zinc-900 relative overflow-hidden group">
      <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-screen" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12 relative z-10">
        <div className="space-y-4">
          <h2 className="text-white font-black text-8xl tracking-tighter leading-[0.8] uppercase italic select-none">
            GLI<span className="text-indigo-500">TCH</span><br/>BRUTAL.
          </h2>
          <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">Experimental_Build_v.042</p>
        </div>
        <div className="flex flex-col items-end gap-6">
          <nav className="flex flex-col items-end gap-2 text-white font-black text-2xl italic uppercase tracking-tighter">
            <a href="#" className="hover:text-indigo-500 hover:translate-x-[-10px] transition-all">MANIFESTO</a>
            <a href="#" className="hover:text-indigo-500 hover:translate-x-[-10px] transition-all">PROJECTS</a>
            <a href="#" className="hover:text-indigo-500 hover:translate-x-[-10px] transition-all">LABS</a>
          </nav>
        </div>
      </div>
    </footer>
  ),

  Bento_MetricFooter: () => (
    <footer className="w-full bg-zinc-955 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="md:col-span-2 lg:col-span-3 bg-white rounded-[2.5rem] p-10 flex flex-col justify-between h-80 shadow-xl border border-zinc-100">
          <h3 className="text-zinc-900 font-black text-4xl tracking-tighter leading-tight italic">Metric<br/>Powered.</h3>
          <div className="flex gap-4">
            <div className="px-6 py-2 bg-zinc-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest">Get Started</div>
          </div>
        </div>
        <div className="bg-indigo-600 rounded-[2.5rem] p-8 flex flex-col justify-between text-white h-80 shadow-indigo-500/20 shadow-2xl">
          <Maximize2 size={32} />
          <div className="space-y-1">
            <div className="text-3xl font-black italic">100%</div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Accuracy</div>
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-2 bg-zinc-900 border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-center gap-8 h-80">
          <div className="space-y-2">
            <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Support Node</div>
            <div className="text-white font-bold text-xl">help@bento.io</div>
          </div>
          <div className="h-px bg-white/10 w-full" />
          <div className="space-y-2">
            <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Follow Flow</div>
            <div className="flex gap-4 text-white/40">
              <Twitter size={18} />
              <GitHub size={18} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  ),

  Dark_CyberOverlay: () => (
    <footer className="w-full bg-black py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent)]" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-indigo-500/20 to-transparent" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 relative z-10">
        <div className="space-y-12">
          <div className="text-white font-black text-7xl tracking-tighter leading-none italic uppercase">Cyber<br/><span className="text-indigo-500">Overlay.</span></div>
          <div className="flex gap-12 text-indigo-400 font-mono text-[10px] uppercase tracking-[0.5em]">
            <span>Active_State</span>
            <span>Sync_Lock</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16">
          {[1, 2].map(col => (
            <div key={col} className="space-y-8">
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em]">Protocol {col}</h4>
              <ul className="space-y-4">
                {['Sub_Zero', 'Frost_Byte', 'Null_Point'].map(item => (
                  <li key={item}><a href="#" className="text-zinc-600 hover:text-indigo-400 transition-colors font-mono text-xs uppercase">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  Corporate_Enterprise: () => (
    <footer className="w-full bg-zinc-50 py-32 px-8 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="max-w-md space-y-6">
            <div className="text-zinc-900 font-black text-3xl tracking-tighter">ENTERPRISE_CORE</div>
            <p className="text-zinc-500 text-lg leading-relaxed">Providing world-class digital solutions for the most demanding technical challenges of the 21st century.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {[1, 2, 3].map(col => (
              <div key={col} className="space-y-6">
                <h4 className="text-zinc-900 font-bold text-xs uppercase tracking-widest">Division {col}</h4>
                <ul className="space-y-3 text-zinc-400 text-sm">
                  <li><a href="#" className="hover:text-zinc-900 transition-colors">Overview</a></li>
                  <li><a href="#" className="hover:text-zinc-900 transition-colors">Resources</a></li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest italic">Quality_Standard_ISO_9001</span>
          </div>
          <div className="text-zinc-300 text-[10px] font-mono uppercase tracking-[0.2em]">© 2026 Enterprise_Core_Systems_International</div>
        </div>
      </div>
    </footer>
  ),

  SEO_MultiRegionSitemap: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <div className="text-white font-black text-4xl tracking-tighter">GLOBAL_SEO</div>
            <p className="text-zinc-500 text-sm italic">Multi-region indexing for international scale.</p>
          </div>
          <div className="flex gap-4">
            {['USA', 'EU', 'ASIA', 'LATAM'].map(region => (
              <span key={region} className="px-3 py-1 bg-zinc-900 border border-white/5 rounded text-[10px] font-mono text-zinc-400">{region}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 border-t border-white/5 pt-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <h5 className="text-white font-bold text-[9px] uppercase tracking-widest">Index {i+1}</h5>
              <ul className="space-y-1">
                {[1, 2, 3].map(j => (
                  <li key={j}><a href="#" className="text-zinc-600 text-[10px] hover:text-white transition-colors">Page_{j}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  Minimalist_CenterNav: () => (
    <footer className="w-full bg-white py-24 px-8 border-t border-zinc-100 flex flex-col items-center">
      <div className="text-zinc-900 font-serif italic text-3xl mb-12">Minimal.</div>
      <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12">
        {['Journal', 'Projects', 'Studio', 'Archive', 'Inquiry'].map(item => (
          <a key={item} href="#" className="text-zinc-400 text-xs font-medium uppercase tracking-[0.2em] hover:text-zinc-900 transition-colors">{item}</a>
        ))}
      </nav>
      <div className="w-12 h-px bg-zinc-200 mb-8" />
      <span className="text-zinc-300 text-[10px] font-mono uppercase tracking-widest">© 2026 Studio Minimalist Ltd.</span>
    </footer>
  ),

  Social_TwitchLiveStatus: () => (
    <footer className="w-full bg-zinc-950 py-20 px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(147,51,234,0.3)]">
              <Zap size={32} fill="currentColor" />
            </div>
            <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-red-600 text-white text-[8px] font-black rounded uppercase animate-pulse">Live</div>
          </div>
          <div className="space-y-1">
            <h4 className="text-white font-bold text-lg">Twitch_Stream_Core</h4>
            <p className="text-zinc-500 text-xs font-mono">Status: Broadcast_Active // 12.4k Viewers</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-purple-600 text-white rounded-xl font-black uppercase text-xs hover:bg-purple-700 transition-all shadow-xl shadow-purple-900/20">Subscribe Now</button>
        </div>
      </div>
    </footer>
  ),

  Social_DiscordCommunity: () => (
    <footer className="w-full bg-[#5865F2] py-20 px-8 text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        <h2 className="text-4xl font-black tracking-tighter">Ready to join the cult?</h2>
        <p className="text-blue-100 max-w-md opacity-80 leading-relaxed">Connect with 50,000+ developers and designers in our official community hub.</p>
        <div className="pt-4">
          <button className="px-10 py-4 bg-white text-[#5865F2] rounded-2xl font-black uppercase text-sm hover:scale-105 transition-transform shadow-2xl flex items-center gap-3">
            <Globe size={20} />
            Join Discord Server
          </button>
        </div>
        <div className="pt-8 text-blue-200/40 text-[10px] font-bold uppercase tracking-widest">
          Active_Members: 52,401 // Online: 4,202
        </div>
      </div>
    </footer>
  ),

  SaaS_PricingMini: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-6">
          <h3 className="text-white text-3xl font-black tracking-tighter">Scalable for any team.</h3>
          <p className="text-zinc-500 leading-relaxed">From solo founders to enterprise teams, we have a plan that fits your growth trajectory.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Starter', price: '$0' },
            { name: 'Pro', price: '$29' }
          ].map(plan => (
            <div key={plan.name} className="p-8 bg-zinc-900 border border-white/5 rounded-3xl space-y-4 hover:border-indigo-500/50 transition-colors cursor-pointer group">
              <h4 className="text-zinc-400 font-bold text-xs uppercase tracking-widest">{plan.name}</h4>
              <div className="text-white text-3xl font-black italic">{plan.price}<span className="text-xs text-zinc-600 not-italic">/mo</span></div>
              <ArrowRight size={20} className="text-zinc-700 group-hover:text-white transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  Creative_BackgroundVideo: () => (
    <footer className="w-full h-96 relative overflow-hidden flex items-center justify-center group">
      <div className="absolute inset-0 bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-1000 bg-zinc-800 flex items-center justify-center">
           <span className="text-white/5 font-black text-[20vw] select-none">VIDEO_BG</span>
        </div>
      </div>
      <div className="relative z-20 text-center space-y-6">
        <h2 className="text-white font-black text-6xl tracking-tighter italic uppercase">Immersive.</h2>
        <div className="flex justify-center gap-8 text-white/40 font-bold text-[10px] uppercase tracking-[0.4em]">
          <a href="#" className="hover:text-white transition-colors">Play Reel</a>
          <a href="#" className="hover:text-white transition-colors">Showcase</a>
        </div>
      </div>
    </footer>
  ),

  Bento_ContactGrid: () => (
    <footer className="w-full bg-zinc-950 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-zinc-900 border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between h-64 hover:bg-zinc-800 transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white group-hover:bg-indigo-600 transition-colors">
            <Zap size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="text-white font-bold">Email Us</h4>
            <p className="text-zinc-500 text-sm">hello@studio_flow.io</p>
          </div>
        </div>
        <div className="bg-zinc-900 border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between h-64 hover:bg-zinc-800 transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white group-hover:bg-indigo-600 transition-colors">
            <Globe size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="text-white font-bold">Visit Office</h4>
            <p className="text-zinc-500 text-sm">London, UK // Tech District</p>
          </div>
        </div>
        <div className="bg-indigo-600 rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center h-64 shadow-2xl shadow-indigo-500/20 group cursor-pointer hover:scale-[1.02] transition-transform">
          <h3 className="text-white font-black text-2xl tracking-tighter mb-4 italic">Start a Project.</h3>
          <ArrowRight size={32} className="text-white animate-bounce" />
        </div>
      </div>
    </footer>
  ),

  Bento_ResourceHub: () => (
    <footer className="w-full bg-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 bg-zinc-50 rounded-[2.5rem] p-10 flex flex-col justify-between h-80 border border-zinc-100">
          <div className="space-y-2">
            <h3 className="text-zinc-900 font-black text-3xl tracking-tighter italic leading-none">Resource<br/>Library.</h3>
            <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">Download our latest design systems and technical whitepapers.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-zinc-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest">Browse All</button>
          </div>
        </div>
        {[
          { title: 'Templates', count: '124' },
          { title: 'UI Kits', count: '42' }
        ].map(item => (
          <div key={item.title} className="bg-zinc-900 rounded-[2.5rem] p-10 flex flex-col justify-between h-80 text-white group cursor-pointer hover:bg-black transition-colors">
            <div className="text-indigo-400 font-black text-4xl italic">{item.count}</div>
            <div className="space-y-1">
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Ready to use</p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  ),

  Dark_HolographicInterface: () => (
    <footer className="w-full bg-black py-24 px-8 border-t border-white/5 relative overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.05),transparent)]" />
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16 relative z-10">
        <div className="size-48 rounded-full border border-white/10 flex items-center justify-center relative">
          <div className="absolute inset-0 border-t-2 border-white/20 rounded-full animate-spin" />
          <div className="size-32 rounded-full bg-white/5 backdrop-blur-3xl flex items-center justify-center text-white font-black text-xl italic tracking-tighter">HOLOG_OS</div>
        </div>
        <div className="space-y-6">
          <h2 className="text-white font-black text-6xl tracking-tighter leading-none uppercase italic opacity-20 group-hover:opacity-100 transition-opacity duration-1000">Neural Interface</h2>
          <div className="flex justify-center gap-12 text-zinc-700 font-bold text-xs uppercase tracking-[0.5em]">
            <a href="#" className="hover:text-white transition-colors">Sync</a>
            <a href="#" className="hover:text-white transition-colors">Pulse</a>
            <a href="#" className="hover:text-white transition-colors">Core</a>
          </div>
        </div>
      </div>
    </footer>
  ),

  Corporate_LeadershipTrust: () => (
    <footer className="w-full bg-white py-32 px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-6">
          <h4 className="text-zinc-400 font-bold text-xs uppercase tracking-[0.3em]">Built on Excellence</h4>
          <h2 className="text-zinc-900 font-black text-5xl tracking-tighter leading-none italic">Leadership in Innovation.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map(i => (
            <div key={i} className="space-y-6 p-8 bg-zinc-50 rounded-3xl border border-zinc-100 text-center">
              <div className="w-20 h-20 bg-zinc-200 rounded-full mx-auto" />
              <div className="space-y-1">
                <h5 className="text-zinc-900 font-bold">Executive Member {i}</h5>
                <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold">Design Lead // Node_{i}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-12">
          <div className="px-8 py-3 bg-zinc-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">Contact Leadership</div>
        </div>
      </div>
    </footer>
  ),

  SEO_IndexExplorer: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t border-zinc-900 relative group">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex justify-between items-center">
          <div className="text-white font-black text-3xl tracking-tighter">INDEX_EXPLORER</div>
          <div className="w-32 h-1 bg-zinc-900 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-indigo-500 group-hover:w-full transition-all duration-1000" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-zinc-500 font-bold text-[9px] uppercase tracking-widest border-l-2 border-indigo-500 pl-3">CLUSTER_0{i+1}</h4>
              <ul className="space-y-2">
                {[1, 2, 3, 4].map(j => (
                  <li key={j} className="text-white text-xs hover:translate-x-1 transition-transform cursor-pointer opacity-40 hover:opacity-100 italic">Semantic_Entry_0{j}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  Minimalist_FloatingContact: () => (
    <footer className="w-full py-20 px-8 flex justify-center bg-zinc-50">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-zinc-900 text-4xl font-light tracking-tight italic">Let's build something <span className="font-bold">timeless.</span></h2>
          <div className="flex gap-12 text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-zinc-900 transition-colors">Instagram</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Behance</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Twitter</a>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end space-y-2">
          <span className="text-zinc-300 text-[10px] font-mono uppercase">Current Time</span>
          <span className="text-zinc-900 font-bold text-2xl tracking-tighter italic">18:42 GMT</span>
        </div>
      </div>
    </footer>
  ),

  Social_StreamingGrid: () => (
    <footer className="w-full bg-black py-24 px-8 border-t border-red-500/20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex items-center gap-4">
          <div className="size-3 bg-red-600 rounded-full animate-ping" />
          <h3 className="text-white font-black text-2xl tracking-widest uppercase italic">Streaming_Network_v4</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-video bg-zinc-900 border border-white/5 rounded-xl overflow-hidden relative group cursor-pointer hover:border-red-500/40 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-3">
                <span className="text-white text-[8px] font-bold uppercase tracking-widest">Channel_{i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  SaaS_StatusDashboard: () => (
    <footer className="w-full bg-zinc-950 py-20 px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-[2rem] space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">API Status</span>
            <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[8px] font-black rounded uppercase">Operational</span>
          </div>
          <div className="h-12 flex items-end gap-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="flex-1 bg-emerald-500/40 rounded-t-sm" style={{ height: `${Math.random() * 100}%` }} />
            ))}
          </div>
        </div>
        <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-[2rem] space-y-4 flex flex-col justify-center text-center">
          <h4 className="text-white font-bold italic">99.99% Uptime</h4>
          <p className="text-zinc-600 text-xs">Verified across 12 global regions.</p>
        </div>
        <div className="p-8 bg-indigo-600 rounded-[2rem] flex flex-col justify-center items-center text-center shadow-2xl shadow-indigo-500/20">
          <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-2">Technical Support</span>
          <button className="text-white font-black text-xl italic tracking-tighter hover:scale-105 transition-transform">Open Ticket →</button>
        </div>
      </div>
    </footer>
  ),

  Creative_RetroGrid: () => (
    <footer className="w-full h-80 bg-black relative overflow-hidden border-t border-indigo-500/30">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-indigo-500/10 to-transparent" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
        <h2 className="text-white font-black text-6xl tracking-[0.2em] italic uppercase opacity-40 group-hover:opacity-100 transition-opacity">RETRO_GRID</h2>
        <div className="flex gap-12 text-indigo-400 font-mono text-[10px] uppercase tracking-[0.5em]">
          <span>© MMXXVI</span>
          <span>System_Stable</span>
        </div>
      </div>
    </footer>
  ),

  Bento_TeamShowcase: () => (
    <footer className="w-full bg-zinc-950 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="col-span-2 row-span-1 bg-white rounded-[2.5rem] p-10 flex flex-col justify-between border border-zinc-100 shadow-xl">
          <h3 className="text-zinc-900 font-black text-3xl tracking-tighter italic leading-none">The<br/>Collective.</h3>
          <p className="text-zinc-400 text-xs">A decentralized team of creative engineers.</p>
        </div>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-zinc-900 border border-white/5 rounded-[2.5rem] p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:bg-zinc-800 transition-colors">
            <div className="size-16 bg-zinc-950 rounded-2xl flex items-center justify-center text-white group-hover:bg-indigo-600 transition-colors">
              <Cpu size={24} />
            </div>
            <div className="text-center">
              <h4 className="text-white text-xs font-bold">Node_{i+1}</h4>
              <p className="text-zinc-600 text-[9px] uppercase tracking-widest font-mono">Core_Dev</p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  ),

  Dark_NebulaGlow: () => (
    <footer className="w-full bg-black py-32 px-8 relative overflow-hidden border-t border-purple-500/20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16 relative z-10">
        <div className="space-y-6">
          <span className="text-purple-500 text-[10px] font-bold uppercase tracking-[0.5em]">Deep_Space_Sync</span>
          <h2 className="text-white font-black text-7xl tracking-tighter leading-none italic uppercase">Nebula.</h2>
        </div>
        <div className="flex gap-16 text-zinc-600 font-bold text-xs uppercase tracking-[0.3em]">
          <a href="#" className="hover:text-purple-400 transition-colors">Orbit</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Pulse</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Core</a>
        </div>
      </div>
    </footer>
  ),

  Corporate_GlobalNetwork: () => (
    <footer className="w-full bg-white py-24 px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="text-zinc-900 font-black text-3xl tracking-tighter italic uppercase underline decoration-indigo-500 decoration-4">Global_Nodes</div>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-md">Nuestra infraestructura se extiende a través de 4 continentes, garantizando una latencia mínima y una redundancia total.</p>
          <div className="flex gap-8 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
            <div className="space-y-1">
              <div className="text-zinc-900 text-xl font-black italic">52</div>
              <div>Data Centers</div>
            </div>
            <div className="space-y-1">
              <div className="text-zinc-900 text-xl font-black italic">140+</div>
              <div>Edge Locations</div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-50 rounded-[3rem] border border-zinc-100 p-12 flex items-center justify-center">
           <Globe size={120} className="text-zinc-200 animate-pulse" />
        </div>
      </div>
    </footer>
  ),

  Corporate_InvestorRelations: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1 space-y-6">
          <div className="text-white font-black text-2xl tracking-tighter">INVESTOR_PORTAL</div>
          <p className="text-zinc-500 text-sm italic leading-relaxed">Transparencia y resultados para nuestros accionistas globales.</p>
        </div>
        {[
          { title: 'Annual Reports', items: ['FY2025', 'FY2024', 'Archive'] },
          { title: 'Stock Info', items: ['Ticker: UIX', 'Market Cap: $2.4B', 'Dividends'] }
        ].map(section => (
          <div key={section.title} className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest border-b border-white/10 pb-2">{section.title}</h4>
            <ul className="space-y-3">
              {section.items.map(item => (
                <li key={item} className="text-zinc-500 text-sm hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  ),

  Corporate_CertificationBadge: () => (
    <footer className="w-full bg-white py-16 px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-wrap justify-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex items-center gap-3">
              <Shield size={32} className="text-zinc-900" />
              <div className="flex flex-col">
                <span className="text-zinc-900 font-black text-xs uppercase tracking-widest leading-none">Certified</span>
                <span className="text-zinc-400 text-[10px] font-mono">CORE_PROTO_0{i}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-right space-y-2">
          <div className="text-zinc-900 font-bold text-sm tracking-tighter">Compliance_Security_First</div>
          <div className="text-zinc-400 text-[9px] font-mono uppercase tracking-[0.2em]">© 2026 Enterprise_Core_International</div>
        </div>
      </div>
    </footer>
  ),

  SEO_BacklinkAudit: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-white font-black text-4xl tracking-tighter italic">Backlink_Audit.</h3>
          <p className="text-zinc-500 max-w-md leading-relaxed">Comprehensive profile analysis to ensure domain authority and organic health.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:col-span-2">
          <div className="p-6 bg-zinc-900 rounded-3xl border border-white/5 space-y-4">
            <span className="text-indigo-400 font-mono text-[10px] uppercase">Domain Rating</span>
            <div className="text-white text-3xl font-black italic">DR_78</div>
          </div>
          <div className="p-6 bg-zinc-900 rounded-3xl border border-white/5 space-y-4">
            <span className="text-emerald-400 font-mono text-[10px] uppercase">Healthy Links</span>
            <div className="text-white text-3xl font-black italic">94.2%</div>
          </div>
        </div>
      </div>
    </footer>
  ),

  SEO_AuthorityMetrics: () => (
    <footer className="w-full bg-white py-20 px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-16">
        <div className="text-center space-y-4">
          <h4 className="text-zinc-400 font-bold text-xs uppercase tracking-[0.3em]">Authority Metrics</h4>
          <div className="flex gap-16">
            {['Trust Flow', 'Citation Flow', 'Domain Auth'].map(metric => (
              <div key={metric} className="text-center">
                <div className="text-zinc-900 text-4xl font-black tracking-tighter italic mb-2">92</div>
                <div className="text-zinc-400 text-[9px] uppercase font-bold tracking-widest">{metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  ),

  SEO_CrawlBudget: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t border-zinc-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4">
          <div className="text-white font-black text-2xl tracking-widest italic">CRAWL_BUDGET_OPTIMIZER</div>
          <p className="text-zinc-600 text-xs font-mono uppercase">Status: Efficiency_High // Waste: 0.02%</p>
        </div>
        <div className="flex gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-1.5 h-8 bg-indigo-500/20 rounded-full overflow-hidden flex flex-col justify-end">
              <div className="w-full bg-indigo-500 animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  SEO_TechnicalAudit: () => (
    <footer className="w-full bg-zinc-900 py-24 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {['Infrastructure', 'Rendering', 'Performance'].map(node => (
          <div key={node} className="p-8 bg-black rounded-3xl border border-white/5 group hover:border-indigo-500/40 transition-all cursor-pointer">
            <div className="flex justify-between items-center mb-6">
              <span className="text-indigo-400 font-mono text-[10px] uppercase">{node}_Check</span>
              <Shield size={16} className="text-indigo-500" />
            </div>
            <div className="space-y-2">
              <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full w-full bg-indigo-500 group-hover:animate-pulse" />
              </div>
              <div className="text-white font-bold text-xs uppercase tracking-widest">Score: 100/100</div>
            </div>
          </div>
        ))}
      </div>
    </footer>
  ),

  Minimalist_SerifEditorial: () => (
    <footer className="w-full bg-zinc-50 py-32 px-8 border-t border-zinc-200">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">
        <h2 className="text-zinc-900 font-serif italic text-6xl leading-tight">Crafting digital<br/>narratives.</h2>
        <div className="w-16 h-px bg-zinc-900" />
        <nav className="flex gap-12 text-zinc-400 text-xs font-medium uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-zinc-900 transition-colors">Instagram</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Behance</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Journal</a>
        </nav>
        <span className="text-zinc-300 text-[10px] font-mono tracking-widest uppercase">Est. MMXXVI</span>
      </div>
    </footer>
  ),

  Minimalist_VerticalNav: () => (
    <footer className="w-full bg-white py-24 px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="flex flex-col justify-between h-full py-2">
          <div className="text-zinc-900 font-black text-4xl tracking-tighter italic leading-none">Vertical<br/>Lines.</div>
          <span className="text-zinc-300 text-[10px] font-mono uppercase tracking-[0.4em]">© 2026 Archive_System</span>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <nav className="flex flex-col gap-4">
            {['Index', 'Work', 'About'].map(item => (
              <a key={item} href="#" className="text-zinc-400 text-lg font-bold hover:text-zinc-900 transition-colors">{item}</a>
            ))}
          </nav>
          <nav className="flex flex-col gap-4">
            {['LinkedIn', 'Twitter', 'Studio'].map(item => (
              <a key={item} href="#" className="text-zinc-400 text-lg font-bold hover:text-zinc-900 transition-colors">{item}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  ),

  Social_YouTubeFeed: () => (
    <footer className="w-full bg-black py-24 px-8 border-t border-red-600/30">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-center gap-4">
          <div className="size-12 bg-red-600 rounded-2xl flex items-center justify-center text-white">
            <YouTube size={28} fill="currentColor" />
          </div>
          <h3 className="text-white font-black text-2xl tracking-tighter italic uppercase">UIX_Showcase_TV</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="aspect-video bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden relative group cursor-pointer hover:border-red-600/40 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <span className="text-white text-xs font-bold uppercase tracking-widest mb-1">Latest Video {i+1}</span>
                <span className="text-zinc-500 text-[10px] font-mono uppercase">12.4k Views</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  Social_TikTokVibe: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t border-cyan-400/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-white font-black text-5xl tracking-tighter leading-none italic uppercase underline decoration-cyan-400 decoration-4">TikTok_Pulse</h2>
          <p className="text-zinc-500 text-sm italic">Viral design trends, daily.</p>
        </div>
        <div className="flex gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-12 h-12 rounded-2xl border border-white/5 bg-zinc-900 flex items-center justify-center text-zinc-500 hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-pointer">
              <Zap size={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  Social_LinkedInProfessional: () => (
    <footer className="w-full bg-white py-24 px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <LinkedIn size={24} className="text-blue-600" />
            <span className="text-zinc-900 font-black text-xl tracking-tighter">B2B_Network_Connect</span>
          </div>
          <h3 className="text-zinc-900 text-3xl font-bold tracking-tight">Expand your professional horizon with our curated network.</h3>
        </div>
        <div className="flex justify-end">
          <button className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">Connect on LinkedIn</button>
        </div>
      </div>
    </footer>
  ),

  Social_GlobalConnect: () => (
    <footer className="w-full bg-zinc-950 py-32 px-8 border-t border-white/5 relative overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent)]" />
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12 relative z-10">
        <Globe size={64} className="text-zinc-800 group-hover:text-white transition-colors duration-1000" />
        <div className="space-y-4">
          <h2 className="text-white font-black text-6xl tracking-tighter leading-none uppercase italic">Global_Connect.</h2>
          <p className="text-zinc-500 text-lg max-w-md mx-auto italic leading-relaxed">Connecting the world's most innovative minds through digital excellence.</p>
        </div>
      </div>
    </footer>
  ),

  SaaS_CloudInfrastructure: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1 space-y-8">
          <div className="text-white font-black text-3xl tracking-tighter italic uppercase">Cloud_Core.</div>
          <div className="flex items-center gap-3">
            <div className="size-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Systems_Optimal</span>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="p-6 bg-zinc-900 border border-white/5 rounded-3xl space-y-4">
              <h4 className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest">Region_0{i}</h4>
              <div className="text-white text-xl font-bold italic tracking-tight">12ms Latency</div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  SaaS_SecurityFirst: () => (
    <footer className="w-full bg-white py-24 px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">
        <Shield size={64} className="text-zinc-900" />
        <div className="space-y-4">
          <h2 className="text-zinc-900 font-black text-5xl tracking-tighter leading-none italic uppercase underline decoration-zinc-900 decoration-4">Security_First.</h2>
          <p className="text-zinc-500 max-w-lg mx-auto leading-relaxed">Nuestra infraestructura está diseñada para proteger tus datos con los más altos estándares de cifrado global.</p>
        </div>
        <div className="flex gap-12 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
          <span>AES_256_ACTIVE</span>
          <span>SOC2_COMPLIANT</span>
          <span>ISO_27001</span>
        </div>
      </div>
    </footer>
  ),

  SaaS_IntegrationHub: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <h3 className="text-white text-3xl font-black tracking-tighter leading-none italic">Integration_Hub.</h3>
            <p className="text-zinc-500 text-sm">Conecta tus herramientas favoritas en segundos.</p>
          </div>
          <div className="flex -space-x-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="size-12 bg-zinc-900 border-2 border-zinc-950 rounded-2xl flex items-center justify-center text-white">
                <Zap size={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  ),

  SaaS_EnterpriseGrade: () => (
    <footer className="w-full bg-white py-32 px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-12">
          <div className="text-zinc-900 font-black text-6xl tracking-tighter leading-none italic uppercase">Enterprise<br/><span className="underline decoration-indigo-500 decoration-8">Grade.</span></div>
          <p className="text-zinc-500 text-xl leading-relaxed">Built for the world's largest organizations. Scale without limits, deploy with confidence.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {['Global Scale', '99.9% SLA', 'SSO/SAML', 'Audit Logs'].map(feature => (
            <div key={feature} className="p-8 bg-zinc-50 border border-zinc-100 rounded-[2rem] flex flex-col justify-center items-center text-center group hover:bg-zinc-900 hover:text-white transition-all">
              <span className="text-xs font-bold uppercase tracking-widest group-hover:text-indigo-400 transition-colors">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  Creative_InteractiveCanvas: () => (
    <footer className="w-full bg-black py-32 px-8 border-t border-white/5 relative overflow-hidden group">
      <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-1000">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(79,70,229,0.4),transparent_50%)]" 
             onMouseMove={(e) => {
               const rect = e.currentTarget.getBoundingClientRect();
               e.currentTarget.style.setProperty('--x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
               e.currentTarget.style.setProperty('--y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
             }}
        />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16 relative z-10">
        <h2 className="text-white font-black text-8xl tracking-tighter leading-none italic uppercase mix-blend-difference">Canvas.</h2>
        <div className="flex gap-16 text-zinc-700 font-bold text-xs uppercase tracking-[0.5em]">
          <a href="#" className="hover:text-white transition-colors">Experiments</a>
          <a href="#" className="hover:text-white transition-colors">Motion</a>
          <a href="#" className="hover:text-white transition-colors">Canvas_v4</a>
        </div>
      </div>
    </footer>
  ),

  Creative_AudioSpectrum: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-16">
        <div className="flex items-end gap-1.5 h-32">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-1.5 bg-indigo-500/20 rounded-t-full overflow-hidden flex flex-col justify-end">
              <div className="w-full bg-indigo-500 animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.05}s` }} />
            </div>
          ))}
        </div>
        <div className="text-center space-y-4">
          <h3 className="text-white font-black text-4xl tracking-tighter italic">AUDIO_SPECTRUM_CORE</h3>
          <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">Frequency_Analysis_Active // System_Stable</p>
        </div>
      </div>
    </footer>
  ),

  Creative_FutureLaboratory: () => (
    <footer className="w-full bg-black py-32 px-8 border-t border-emerald-500/20 relative overflow-hidden group">
      <div className="absolute top-10 right-10 size-64 bg-emerald-500/5 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
        <div className="space-y-12">
          <div className="text-emerald-500 font-black text-8xl tracking-tighter leading-[0.8] uppercase italic">FUTURE<br/>LABS.</div>
          <p className="text-zinc-600 font-mono text-sm uppercase leading-relaxed max-w-md">Experimental Research Facility for advanced digital primitives and neural UI systems.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="aspect-square bg-zinc-900/50 border border-emerald-500/10 rounded-3xl flex items-center justify-center text-emerald-900 group-hover:text-emerald-500 transition-colors">
              <Cpu size={48} className="opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  Corporate_ComplianceHub: () => (
    <footer className="w-full bg-white py-24 px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <div className="text-zinc-900 font-black text-3xl tracking-tighter italic uppercase underline decoration-indigo-500 decoration-4">Compliance_Hub</div>
          <p className="text-zinc-500 leading-relaxed max-w-md">Garantizando los más altos estándares éticos y legales en todas nuestras operaciones globales.</p>
        </div>
        {['Policies', 'Reporting', 'Training', 'Security'].map(title => (
          <div key={title} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4 hover:border-zinc-300 transition-colors cursor-pointer group">
            <h4 className="text-zinc-900 font-bold group-hover:text-indigo-600 transition-colors">{title}</h4>
            <div className="h-px bg-zinc-200 w-full" />
            <ArrowRight size={18} className="text-zinc-300 group-hover:translate-x-1 transition-transform" />
          </div>
        ))}
      </div>
    </footer>
  ),

  Corporate_SustainabilityReport: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
        <div className="space-y-6 max-w-md">
          <h3 className="text-white text-4xl font-black tracking-tighter italic leading-none">Sustainability<br/><span className="text-emerald-500">First.</span></h3>
          <p className="text-zinc-500 leading-relaxed">Comprometidos con un futuro neto cero. Nuestro impacto ambiental es auditado y transparente.</p>
        </div>
        <div className="flex gap-12">
          <div className="text-center">
            <div className="text-emerald-500 text-5xl font-black italic mb-2">0%</div>
            <div className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">Net Carbon</div>
          </div>
          <div className="text-center">
            <div className="text-emerald-500 text-5xl font-black italic mb-2">100%</div>
            <div className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">Renewable</div>
          </div>
        </div>
      </div>
    </footer>
  ),

  Bento_AnalyticsGrid: () => (
    <footer className="w-full bg-zinc-955 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-zinc-900 border border-white/5 rounded-3xl p-6 flex flex-col justify-between h-48 hover:border-indigo-500/30 transition-all cursor-pointer">
            <span className="text-zinc-600 text-[8px] font-mono uppercase">Stat_0{i+1}</span>
            <div className="text-white text-2xl font-black italic tracking-tighter">{(Math.random() * 100).toFixed(1)}%</div>
            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500" style={{ width: `${Math.random() * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </footer>
  ),

  Bento_GlobalClock: () => (
    <footer className="w-full bg-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {['London', 'New York', 'Tokyo'].map(city => (
          <div key={city} className="bg-zinc-50 rounded-[2.5rem] p-10 border border-zinc-100 flex flex-col justify-between h-64">
            <h4 className="text-zinc-900 font-black text-2xl tracking-tighter italic uppercase">{city}</h4>
            <div className="space-y-1">
              <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Current Time</div>
              <div className="text-zinc-900 text-4xl font-black italic tracking-tighter">18:42</div>
            </div>
          </div>
        ))}
      </div>
    </footer>
  ),

  Bento_TestimonialModule: () => (
    <footer className="w-full bg-zinc-950 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 bg-zinc-900 border border-white/5 rounded-[2.5rem] p-12 flex flex-col justify-between h-80">
          <p className="text-white text-2xl font-medium italic tracking-tight leading-relaxed max-w-2xl">"The attention to detail and technical execution is beyond anything we've seen in the industry."</p>
          <div className="flex items-center gap-4">
            <div className="size-12 bg-indigo-600 rounded-2xl" />
            <div>
              <div className="text-white font-bold">Alex Rivera</div>
              <div className="text-zinc-500 text-xs">Design Director @ Flow</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 bg-indigo-600 rounded-[2.5rem] p-12 flex flex-col justify-center items-center text-center h-80 shadow-2xl shadow-indigo-500/20">
          <h4 className="text-white font-black text-2xl tracking-tighter mb-4 italic">View Case Studies</h4>
          <ArrowRight size={48} className="text-white" />
        </div>
      </div>
    </footer>
  ),

  Bento_ProductShowcase: () => (
    <footer className="w-full bg-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-zinc-50 rounded-[2.5rem] p-8 border border-zinc-100 flex flex-col gap-6 h-80 group cursor-pointer hover:bg-zinc-900 hover:text-white transition-all">
            <div className="aspect-square bg-zinc-200 rounded-2xl group-hover:bg-zinc-800 transition-colors" />
            <div className="space-y-1">
              <h4 className="font-bold">Product_0{i+1}</h4>
              <p className="text-zinc-400 text-xs group-hover:text-zinc-500">Premium Digital Asset</p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  ),

  Dark_StarfieldMotion: () => (
    <footer className="w-full bg-black py-32 px-8 relative overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_var(--x,50%)_var(--y,50%),white_1px,transparent_0)] bg-[size:40px_40px] opacity-20" />
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12 relative z-10">
        <h2 className="text-white font-black text-7xl tracking-tighter italic uppercase opacity-10 group-hover:opacity-100 transition-opacity duration-1000">Starfield.</h2>
        <div className="flex gap-16 text-zinc-800 font-bold text-xs uppercase tracking-[0.5em] group-hover:text-zinc-500 transition-colors">
          <span>Explore_The_Void</span>
        </div>
      </div>
    </footer>
  ),

  Dark_CyberPunkTerminal: () => (
    <footer className="w-full bg-zinc-950 py-24 px-8 border-t border-emerald-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto font-mono text-xs text-emerald-500 space-y-4">
        <div className="flex gap-2">
          <span className="opacity-40">System:</span>
          <span className="animate-pulse">_INITIALIZING_UIX_PROTOCOL_</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="space-y-2">
              <div className="border border-emerald-500/20 p-4 rounded-lg bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors cursor-pointer">
                <div className="flex justify-between mb-2">
                  <span className="opacity-40">NODE_0{i}</span>
                  <span>ONLINE</span>
                </div>
                <div className="text-[10px] text-emerald-500/60">0x{Math.random().toString(16).substr(2, 8).toUpperCase()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  ),

  Dark_AbstractGlow: () => (
    <footer className="w-full bg-black py-40 px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 size-96 bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-1/4 size-96 bg-purple-600/10 blur-[120px] rounded-full animate-pulse [animation-delay:1s]" />
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8 relative z-10">
        <h2 className="text-white font-black text-8xl tracking-tighter leading-none italic uppercase mix-blend-screen opacity-10 hover:opacity-100 transition-opacity duration-1000">Glow.</h2>
        <div className="w-24 h-px bg-white/10" />
      </div>
    </footer>
  ),
};

const Footer_Placeholder = ({ label }: { label: string }) => (
  <footer className="w-full bg-zinc-955 border-t border-zinc-900 py-16 px-8 flex flex-col items-center justify-center relative overflow-hidden group select-none">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-40" />
    <span className="text-[10px] font-mono text-zinc-650 bg-zinc-900/50 border border-zinc-850 px-3 py-1 rounded-lg mb-4 tracking-widest uppercase">
      PREMIUM FOOTER VARIANT
    </span>
    <h4 className="text-zinc-550 text-sm font-bold tracking-widest uppercase group-hover:text-zinc-355 transition-colors">
      {label.replace(/_/g, ' ')}
    </h4>
    <p className="text-[9px] font-mono text-zinc-650 mt-2 uppercase tracking-wider">
      [ COMING SOON IN FUTURE BATCHES ]
    </p>
    <div className="absolute bottom-4 flex gap-1.5 opacity-30 group-hover:opacity-60 transition-opacity">
      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 animate-pulse" />
    </div>
  </footer>
);

const placeholderKeys: string[] = [];

placeholderKeys.forEach(key => {
  (FooterVariants as any)[key] = () => <Footer_Placeholder label={key} />;
});

