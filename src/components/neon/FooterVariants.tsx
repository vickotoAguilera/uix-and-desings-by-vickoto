"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Github as GitHub, Twitter, Linkedin as LinkedIn, Mail, MapPin, Phone, Instagram, Youtube as YouTube, ArrowRight, Heart, Globe, Cpu, Zap, Shield, Layers } from 'lucide-react';

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
};

