"use client";

import React from 'react';
import { MousePointer2, ExternalLink, Camera, Palette, Code, Briefcase, Award, Users, ArrowUpRight, Plus, Sparkles, Zap, Layers, Box, Archive, Heart } from 'lucide-react';
import { SmartImage } from '../SmartImage';

export const PortfolioHero = {
  // Variante 01: Minimalist Studio (Blanco puro, tipografía fina, mucho espacio)
  MinimalistStudio: () => (
    <div className="w-full min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center p-8 font-sans">
      <div className="max-w-4xl w-full text-center space-y-12">
        <div className="flex justify-center">
          <div className="px-4 py-1 border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Available for Projects 2024
          </div>
        </div>
        <h1 className="text-7xl md:text-9xl font-extralight tracking-tighter leading-none">
          Design that <br /> <span className="font-medium italic">moves</span> people.
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
          Independent creative studio based in Tokyo. We specialize in digital experiences, brand identity, and interactive storytelling.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
          <button className="text-xl font-bold border-b-2 border-slate-900 pb-2 hover:opacity-50 transition-opacity flex items-center gap-2">
            <span>View Work</span>
            <ArrowUpRight size={20} />
          </button>
          <button className="text-xl font-bold text-slate-400 hover:text-slate-900 transition-colors">
            Our Story
          </button>
        </div>
      </div>
      
      <div className="mt-32 w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-100 pt-12">
        {['Strategy', 'Visual Identity', 'Digital Product'].map((service, i) => (
          <div key={i} className="space-y-4">
            <span className="text-[10px] font-black text-slate-300 uppercase">0{i+1} / SERVICE</span>
            <h3 className="text-2xl font-medium">{service}</h3>
          </div>
        ))}
      </div>
    </div>
  ),

  // Variante 02: Neo-Brutalist Agency (Bordes gruesos, colores primarios, sombras duras)
  BrutalistAgency: () => (
    <div className="w-full min-h-screen bg-[#FF5F1F] flex items-center justify-center p-8 font-mono">
      <div className="max-w-6xl w-full bg-white border-[6px] border-black shadow-[20px_20px_0px_rgba(0,0,0,1)] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-300 border-l-[6px] border-b-[6px] border-black flex items-center justify-center -rotate-12 translate-x-10 -translate-y-10">
          <Plus size={80} className="text-black" />
        </div>
        
        <div className="relative z-10 space-y-10">
          <div className="inline-block bg-black text-white px-6 py-2 border-[4px] border-black font-black uppercase tracking-tighter italic -rotate-1">
            CREATIVE_POWERHOUSE_v2
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black text-black leading-[0.8] tracking-tighter uppercase">
            WE BUILD <br /> <span className="bg-yellow-300 px-4">LEGENDS.</span>
          </h1>
          <p className="text-2xl font-bold text-black max-w-2xl uppercase">
            Forget boring interfaces. We create digital monsters that capture attention and never let go.
          </p>
          <div className="flex flex-wrap gap-6 pt-6">
            <button className="px-10 py-5 bg-black text-white font-black text-2xl hover:bg-yellow-300 hover:text-black transition-colors border-[4px] border-black shadow-[10px_10px_0px_rgba(0,0,0,0.2)] uppercase">
              See Monsters
            </button>
            <button className="px-10 py-5 bg-white text-black font-black text-2xl hover:bg-black hover:text-white transition-colors border-[4px] border-black shadow-[10px_10px_0px_rgba(0,0,0,0.2)] uppercase">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 right-10 flex gap-4 text-black font-black uppercase text-xs italic">
          <span>* High Impact</span>
          <span>* Zero Bullsh#t</span>
          <span>* Pure Creativity</span>
        </div>
      </div>
    </div>
  ),

  // Variante 03: Dark Cinematic (Oscuro, gradientes suaves, enfoque en imagen)
  CinematicDark: () => (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center p-8 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      <div className="absolute inset-0 opacity-40">
        <SmartImage className="w-full h-full object-cover scale-110 blur-sm" />
      </div>
      
      <div className="relative z-20 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-end pb-20">
        <div className="space-y-12">
          <div className="flex items-center gap-4 text-white/40 text-sm font-bold tracking-[0.4em] uppercase">
            <div className="w-12 h-[1px] bg-white/40" />
            <span>Director of Photography</span>
          </div>
          <h1 className="text-8xl md:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic">
            Visual <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">Poetry.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-md leading-relaxed">
            Capturing the essence of human emotion through the lens of modern cinema. Available worldwide.
          </p>
        </div>
        
        <div className="flex flex-col gap-12 items-start lg:items-end">
          <div className="flex gap-16">
            <div className="text-center">
              <div className="text-4xl font-black italic">120+</div>
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-2">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black italic">15</div>
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-2">Awards</div>
            </div>
          </div>
          <button className="group relative px-12 py-6 bg-white text-black font-black text-2xl uppercase italic overflow-hidden transition-all hover:scale-105 active:scale-95">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-fuchsia-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
             <span className="relative z-10">Showreel 2024</span>
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 04: Bauhaus Portfolio (Asimétrico, colores primarios, grid experimental)
  BauhausExperimental: () => (
    <div className="w-full min-h-screen bg-[#F0EAD6] flex items-center justify-center p-8 font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-0 border-[6px] border-black bg-white shadow-[40px_40px_0px_rgba(0,0,0,0.15)]">
        <div className="lg:col-span-8 p-12 md:p-24 space-y-16 border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-black">
          <div className="space-y-4">
             <div className="flex gap-4">
               <div className="w-10 h-10 bg-[#FFD700] border-4 border-black rotate-12" />
               <div className="w-10 h-10 bg-[#0047AB] border-4 border-black rounded-full -rotate-12" />
               <div className="w-10 h-10 bg-[#C41E3A] border-4 border-black" />
             </div>
             <h1 className="text-8xl md:text-[14rem] font-black text-black leading-[0.75] tracking-tighter uppercase italic">
               BOLD <br /> BY <br /> <span className="text-[#C41E3A]">DESIGN.</span>
             </h1>
          </div>
          <p className="text-3xl font-bold text-black max-w-2xl leading-tight uppercase italic underline decoration-[12px] decoration-[#FFD700]">
            We break the grid to find the soul of your brand. Experimental visual research for brave companies.
          </p>
          <div className="flex gap-8 pt-8">
            <button className="px-14 py-7 bg-black text-white font-black text-2xl uppercase italic hover:bg-[#0047AB] transition-colors shadow-[10px_10px_0px_rgba(196,30,58,0.3)]">
              View Archive
            </button>
          </div>
        </div>
        <div className="lg:col-span-4 grid grid-rows-2">
           <div className="bg-[#0047AB] border-b-[6px] border-black p-12 flex flex-col justify-between text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-20 rotate-45 group-hover:rotate-0 transition-transform duration-700">
                <MousePointer2 size={120} />
              </div>
              <div className="text-sm font-black tracking-widest uppercase">Since 2012</div>
              <div className="text-5xl font-black italic">ESTABLISHED <br /> IN BERLIN.</div>
           </div>
           <div className="grid grid-cols-2">
              <div className="bg-[#FFD700] border-r-[6px] border-black p-8 flex items-center justify-center group cursor-pointer">
                 <ArrowUpRight size={80} className="text-black group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform" />
              </div>
              <div className="bg-white p-8 flex items-center justify-center relative group overflow-hidden">
                 <div className="absolute inset-0 bg-[#C41E3A] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 <Code size={60} className="relative z-10 text-black group-hover:text-white transition-colors" />
              </div>
           </div>
        </div>
      </div>
    </div>
  ),

  // Variante 05: Glassmorphism Showcase (Suave, desenfocado, colores pastel vibrantes)
  GlassPortfolio: () => (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-8 overflow-hidden font-sans relative">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400 rounded-full blur-[120px] opacity-40 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-400 rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10 text-white">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-sm font-bold shadow-xl">
            <Sparkles size={18} className="text-yellow-300" />
            <span>Award Winning Studio</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tight drop-shadow-2xl">
            Crafting <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Digital Bliss.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-medium max-w-md leading-relaxed">
            We blend art and technology to create interfaces that feel as good as they look.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="px-12 py-5 bg-white text-indigo-600 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
              Explore Projects
            </button>
            <button className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl font-black text-xl hover:bg-white/20 transition-all">
              Say Hello
            </button>
          </div>
        </div>
        
        <div className="relative group">
           <div className="absolute -inset-10 bg-white/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           <div className="relative aspect-square bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[4rem] p-12 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
              <div className="absolute top-8 left-8 flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-400/50" />
                 <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                 <div className="w-3 h-3 rounded-full bg-green-400/50" />
              </div>
              <div className="h-full w-full bg-gradient-to-br from-white/20 to-transparent rounded-[3rem] overflow-hidden flex items-center justify-center relative">
                 <SmartImage className="w-3/4 h-3/4 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute bottom-6 right-6 p-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl text-white font-bold text-xs uppercase tracking-widest">
                   UI_EXPERIENCE_v4
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  ),

  // Variante 06: Swiss Type (Tipografía Helvetica, grid estricto, minimalismo suizo)
  SwissType: () => (
    <div className="w-full min-h-screen bg-[#F0F0F0] text-black p-8 md:p-24 font-sans uppercase">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 border-t-8 border-black pt-12">
        <div className="md:col-span-8">
           <h1 className="text-8xl md:text-[18rem] font-black leading-[0.7] tracking-tighter">
             AR <br /> CH <br /> IVE.
           </h1>
        </div>
        <div className="md:col-span-4 flex flex-col justify-between py-6">
           <div className="space-y-10">
             <div className="text-sm font-black tracking-[0.4em] border-b-4 border-black pb-4 inline-block">Design Portfolio Vol. 24</div>
             <p className="text-2xl font-bold leading-tight lowercase normal-case">
               Functional aesthetics for the digital era. We prioritize clarity, purpose, and structural integrity in every pixel.
             </p>
           </div>
           <div className="space-y-4 pt-16">
              <button className="w-full py-8 bg-black text-white font-black text-3xl hover:bg-red-600 transition-colors flex justify-between px-10 items-center group">
                 <span>ENTER</span>
                 <ArrowUpRight size={40} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
              <div className="flex justify-between text-xs font-black tracking-widest pt-4">
                 <span>ZURICH / TOKYO</span>
                 <span>©2024</span>
              </div>
           </div>
        </div>
      </div>
      
      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-0 border-t-2 border-black">
         {['IDENTITY', 'DIGITAL', 'SPACES', 'MOTION'].map((cat, i) => (
           <div key={i} className="p-10 border-r-2 border-black last:border-r-0 hover:bg-black hover:text-white transition-all cursor-pointer group">
              <span className="text-[10px] font-black block mb-8">0{i+1}</span>
              <span className="text-3xl font-black italic">{cat}</span>
           </div>
         ))}
      </div>
    </div>
  ),

  // Variante 07: Cybernetic HUD (Estética de interfaz de usuario táctica, ciberpunk)
  CyberHUD: () => (
    <div className="w-full min-h-screen bg-black text-cyan-400 flex items-center justify-center p-4 md:p-12 font-mono relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#0ff 1px, transparent 1px), linear-gradient(90deg, #0ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        <div className="lg:col-span-8 space-y-12">
          <div className="flex items-center gap-4 text-xs tracking-[0.6em] uppercase text-cyan-500/60 animate-pulse">
            <Zap size={16} />
            <span>NEURAL_LINK_ESTABLISHED // SYS_READY</span>
          </div>
          
          <h1 className="text-7xl md:text-[11rem] font-black leading-none tracking-tighter uppercase relative group">
            <span className="relative z-10 text-white">DECODE</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 animate-gradient-x">REALITY.</span>
            <div className="absolute -inset-8 bg-cyan-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-cyan-400/20">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-cyan-500/40 underline decoration-cyan-500/20">Biography_Module</div>
                <p className="text-lg leading-relaxed text-cyan-100/60">
                  Full-stack creative engineer specializing in high-performance digital architectures and sensory interfaces.
                </p>
             </div>
             <div className="space-y-4 flex flex-col justify-center">
                <div className="flex justify-between items-end border-b border-cyan-400/20 pb-2">
                   <span className="text-xs uppercase font-bold tracking-widest">Core_Engine</span>
                   <span className="text-2xl font-black italic">REACT_NEXT</span>
                </div>
                <div className="flex justify-between items-end border-b border-cyan-400/20 pb-2">
                   <span className="text-xs uppercase font-bold tracking-widest">Neural_Net</span>
                   <span className="text-2xl font-black italic">TYPESCRIPT</span>
                </div>
             </div>
          </div>
          
          <div className="flex flex-wrap gap-8">
            <button className="px-12 py-5 bg-cyan-500 text-black font-black text-2xl uppercase italic skew-x-[-12deg] hover:bg-white transition-all shadow-[0_0_40px_rgba(6,182,212,0.3)]">
              Initialize_Port
            </button>
            <div className="flex items-center gap-6 text-fuchsia-500 font-black text-xl uppercase tracking-tighter cursor-pointer hover:text-white transition-colors">
               <span>Download_CV.pdf</span>
               <div className="w-16 h-[2px] bg-fuchsia-500/30" />
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-4 relative group">
           <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 blur-2xl group-hover:opacity-100 transition-opacity" />
           <div className="relative border border-cyan-500/30 p-4 bg-black/80 backdrop-blur-xl">
              <div className="aspect-[3/4] overflow-hidden relative border border-white/5">
                 <SmartImage className="w-full h-full object-cover grayscale brightness-125 contrast-150 mix-blend-screen group-hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute inset-0 bg-cyan-900/10 pointer-events-none" />
                 <div className="absolute top-4 right-4 bg-black/90 border border-cyan-500/50 p-4 text-[10px] font-black">
                   SCAN_ID: 99x-A
                 </div>
              </div>
              <div className="mt-4 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                 <span>Lat: 35.6895° N</span>
                 <span>Lon: 139.6917° E</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  ),

  // Variante 08: Wabi-Sabi Portfolio (Minimalismo orgánico, tonos tierra, calma)
  OrganicZen: () => (
    <div className="w-full min-h-screen bg-[#FDFCF8] text-[#4A453C] flex items-center justify-center p-8 font-serif overflow-hidden relative">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#F2F0E9] rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#EBE9E1] rounded-full blur-[120px] opacity-60" />
      
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12">
          <div className="flex items-center gap-4 text-[#8C8471] text-xs font-medium tracking-[0.4em] uppercase">
            <span className="w-12 h-[1px] bg-[#8C8471]" />
            ESTABLISHED IN TRANQUILITY
          </div>
          <h1 className="text-7xl md:text-9xl font-light leading-[0.9] tracking-tight text-[#2D2A24]">
            Embracing the <br /> <span className="italic">Imperfect.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#6B6455] font-light max-w-md leading-relaxed">
            Multidisciplinary artist focused on organic textures, natural light, and the silence between objects.
          </p>
          <div className="pt-6">
            <button className="px-14 py-6 border border-[#4A453C] text-[#4A453C] text-2xl font-light italic hover:bg-[#4A453C] hover:text-[#FDFCF8] transition-all duration-1000 group flex items-center gap-8">
              <span>View Journal</span>
              <div className="w-16 h-[1px] bg-[#4A453C] group-hover:bg-[#FDFCF8] transition-all" />
            </button>
          </div>
        </div>
        
        <div className="relative">
           <div className="aspect-[4/5] bg-[#F2F0E9] rounded-[40%_60%_60%_40%/60%_30%_70%_40%] overflow-hidden shadow-2xl relative border border-white/40">
              <SmartImage className="w-full h-full object-cover mix-blend-multiply opacity-80 hover:scale-105 transition-transform duration-[2000ms]" />
              <div className="absolute inset-0 bg-[#4A453C]/5" />
           </div>
           <div className="absolute -bottom-12 -right-12 p-12 bg-[#FDFCF8] border border-[#F2F0E9] shadow-xl max-w-[240px] space-y-4">
              <div className="text-4xl font-light italic text-[#2D2A24]">01.</div>
              <div className="text-sm font-bold tracking-[0.2em] uppercase text-[#8C8471]">Ceramic Study</div>
              <p className="text-xs text-[#6B6455] leading-relaxed italic">
                A series of explorations in raw clay and high-fire glazes.
              </p>
           </div>
        </div>
      </div>
    </div>
  ),

  // Variante 09: Kinetic Typography (Texto gigante animado, minimalismo de impacto)
  KineticType: () => (
    <div className="w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden font-sans relative">
      <div className="absolute inset-0 flex flex-col justify-between py-12 opacity-5 select-none pointer-events-none">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="text-[18rem] font-black leading-none whitespace-nowrap -translate-x-40 tracking-tighter uppercase italic">
            CREATIVE CREATIVE CREATIVE CREATIVE
          </div>
        ))}
      </div>
      
      <div className="relative z-10 text-center space-y-16 px-6">
        <div className="space-y-4">
          <div className="text-fuchsia-500 font-black text-2xl tracking-[0.5em] uppercase italic animate-pulse">
            S_E_L_E_C_T_E_D_W_O_R_K_S
          </div>
          <h1 className="text-[10rem] md:text-[22rem] font-black text-white leading-[0.7] tracking-tighter uppercase italic drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            CREATE <br /> <span className="text-transparent border-t-8 md:border-t-[16px] border-white pt-4">IMPACT.</span>
          </h1>
        </div>
        
        <div className="flex flex-col items-center gap-12">
          <p className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter max-w-3xl italic leading-none">
            Transforming bold ideas into <br /> unforgettable visual experiences.
          </p>
          <div className="flex gap-8">
            <button className="px-20 py-8 bg-white text-black font-black text-4xl uppercase italic hover:scale-110 active:scale-95 transition-all shadow-[15px_15px_0px_rgba(255,0,255,0.4)]">
              GO WORK
            </button>
            <button className="px-20 py-8 border-4 border-white text-white font-black text-4xl uppercase italic hover:bg-white hover:text-black transition-all">
              INFO
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 10: ASCII Dev Portfolio (Baja fidelidad, puro texto, minimalismo técnico)
  ASCIIDev: () => (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-[#00ff41] flex items-center justify-center p-6 md:p-12 font-mono">
      <div className="max-w-5xl w-full border-4 border-[#00ff41] p-8 md:p-16 space-y-12 relative shadow-[0_0_40px_rgba(0,255,65,0.1)]">
        <div className="flex justify-between items-center text-xs opacity-60 border-b-2 border-[#00ff41]/30 pb-6">
          <span>{">"} PORTFOLIO_PROTOCOL_v1.0</span>
          <span className="hidden md:block">LOC: 127.0.0.1</span>
          <span>STATUS: ONLINE</span>
        </div>
        
        <div className="space-y-10">
          <div className="text-4xl md:text-6xl font-bold leading-none uppercase">
            +------------------------------------+<br />
            | FULL_STACK_ENGINEER_@_CORE_ZERO |<br />
            +------------------------------------+
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
               <p className="text-xl md:text-2xl leading-relaxed opacity-80">
                 [MISSION]: Building robust digital architectures for the future. Specializing in high-concurrency systems, decentralized protocols, and experimental UI.
               </p>
               
               <div className="space-y-6 py-8 border-y-2 border-[#00ff41]/30">
                  <div className="text-xl font-black">[ PROJECTS ]</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 hover:bg-[#00ff41]/10 p-4 transition-colors cursor-pointer group">
                      <div className="font-bold underline">01. NEURAL_GRID_v4</div>
                      <div className="text-sm opacity-60 italic group-hover:opacity-100">Experimental P2P protocol.</div>
                    </div>
                    <div className="space-y-2 hover:bg-[#00ff41]/10 p-4 transition-colors cursor-pointer group">
                      <div className="font-bold underline">02. QUANTUM_FLUX_UI</div>
                      <div className="text-sm opacity-60 italic group-hover:opacity-100">Web-based visualizer.</div>
                    </div>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-4 space-y-8">
               <div className="border-2 border-[#00ff41]/30 p-6 space-y-4">
                  <div className="text-sm font-black uppercase tracking-widest text-white">Technological_Stack:</div>
                  <ul className="space-y-2 text-sm opacity-70">
                    <li>{">"} RUST / WASM</li>
                    <li>{">"} TYPESCRIPT / GO</li>
                    <li>{">"} DOCKER / K8S</li>
                    <li>{">"} POSGRES / REDIS</li>
                  </ul>
               </div>
               <button className="w-full py-6 bg-[#00ff41] text-[#0a0a0a] font-black text-2xl hover:bg-white transition-all uppercase shadow-[10px_10px_0px_rgba(0,255,65,0.3)]">
                 [ CONTACT_INIT ]
               </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-8 text-[10px] opacity-40 uppercase tracking-widest">
          <span>* No cookies used</span>
          <span>* Powered by Coffee</span>
          <span>* End-to-end Encrypted</span>
        </div>
      </div>
    </div>
  ),

  // Variante 11: Claymorphic Creative (Suave, redondeado, aspecto 3D/plastilina)
  ClaymorphicCreative: () => (
    <div className="w-full min-h-screen bg-[#F0F7FF] flex items-center justify-center p-8 font-sans">
      <div className="max-w-6xl w-full bg-[#F0F7FF] rounded-[4rem] p-12 md:p-20 shadow-[20px_20px_60px_#d9e6f2,-20px_-20px_60px_#ffffff] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border border-white/40">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-500/10 rounded-full text-indigo-600 font-bold text-sm">
            <Palette size={18} />
            <span>Digital Artist</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-800 leading-none tracking-tight">
            Soft <br /> <span className="text-indigo-500">Works.</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed">
            Bringing tactile joy to the digital world. I create interfaces that you want to touch and play with.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-12 py-5 bg-indigo-500 text-white rounded-[2rem] font-black text-xl shadow-[8px_8px_16px_rgba(79,70,229,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all">
              View Playbook
            </button>
            <button className="px-12 py-5 bg-white text-slate-700 rounded-[2rem] font-black text-xl shadow-[8px_8px_16px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(0,0,0,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all">
              Say Hi!
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-white rounded-[4rem] shadow-[inset_10px_10px_20px_#d9e6f2,inset_-10px_-10px_20px_#ffffff] p-12 flex items-center justify-center overflow-hidden">
             <SmartImage className="w-3/4 h-3/4 object-contain drop-shadow-[20px_20px_30px_rgba(0,0,0,0.1)] hover:rotate-6 transition-transform duration-500" />
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-400 rounded-full shadow-[inset_8px_8px_16px_rgba(255,255,255,0.3),8px_8px_16px_rgba(244,114,182,0.3)] flex items-center justify-center text-white font-black text-xl rotate-12">
            FRESH
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 12: Solarpunk Architect (Futurismo verde, luz cálida, orgánico-tech)
  SolarpunkArchitect: () => (
    <div className="w-full min-h-screen bg-[#FDFCF8] flex items-center justify-center p-8 overflow-hidden font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
           <div className="absolute -inset-20 bg-emerald-100/40 rounded-full blur-[120px] animate-pulse" />
           <div className="relative aspect-[4/5] bg-emerald-50 rounded-[40%_60%_60%_40%/60%_40%_40%_60%] overflow-hidden shadow-2xl border border-emerald-100/50 group">
             <SmartImage className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
           </div>
           <div className="absolute top-10 -right-10 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white max-w-[220px] space-y-4">
              <div className="p-3 bg-emerald-500 text-white rounded-2xl w-fit shadow-lg shadow-emerald-200">
                <Layers size={24} />
              </div>
              <div className="text-sm font-bold text-emerald-900 uppercase tracking-widest">Regenerative Design</div>
              <p className="text-[10px] text-emerald-600/60 leading-relaxed italic">Building structures that breathe and heal with the environment.</p>
           </div>
        </div>

        <div className="space-y-12">
          <div className="flex items-center gap-4">
             <div className="h-[2px] w-12 bg-emerald-500" />
             <span className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-xs">Sustainability First</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tight">
            Clean <br /> <span className="text-emerald-500 italic font-light">Futures.</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl leading-relaxed max-w-lg font-light">
            Architectural vision focused on harmony between high-technology and the natural world.
          </p>
          <div className="flex flex-wrap gap-8 items-center pt-4">
            <button className="px-12 py-5 bg-emerald-600 text-white rounded-full font-bold text-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center gap-4">
              <span>View Projects</span>
              <ArrowUpRight size={20} />
            </button>
            <div className="text-emerald-900 font-black text-sm uppercase tracking-widest border-b-2 border-emerald-500 pb-1 cursor-pointer hover:text-emerald-500 transition-colors">
              Our Ethos
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 13: Industrial Blueprint (Azul técnico, rejillas, medidas, minimalismo funcional)
  IndustrialBlueprint: () => (
    <div className="w-full min-h-screen bg-[#003366] text-white p-8 md:p-20 font-mono relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '200px 200px' }} />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between min-h-[80vh] relative z-10">
        <div className="flex justify-between items-start border-b border-white/20 pb-12">
          <div className="space-y-4">
            <div className="text-xs tracking-[0.4em] opacity-60 uppercase italic">Creative Engineering // Ver. 2024.1</div>
            <h1 className="text-6xl md:text-[10rem] font-bold leading-none tracking-tighter uppercase italic">
              STRUCT <br /> VISUALS.
            </h1>
          </div>
          <div className="hidden md:block text-right space-y-2 opacity-40 text-[10px] uppercase">
            <div>REF_ID: 882-BLUEPRINT</div>
            <div>TOLERANCE: 0.00% ERROR</div>
            <div>STATUS: ARCHITECTING</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 items-center">
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 border border-white/20 bg-white/5 backdrop-blur-sm space-y-4">
              <div className="flex justify-between text-xs opacity-60 font-black">
                <span>MODULE_DATA</span>
                <span className="text-cyan-400">ONLINE</span>
              </div>
              <p className="text-xl leading-relaxed italic opacity-80">
                Precision-driven creative solutions for complex digital problems. We don{"'"}t guess, we calculate.
              </p>
            </div>
            <button className="w-full py-6 bg-white text-[#003366] font-black text-2xl hover:bg-cyan-400 transition-colors uppercase italic shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              INIT_PROJECT
            </button>
          </div>
          <div className="lg:col-span-8 relative">
             <div className="aspect-video bg-white/5 border border-white/20 relative group overflow-hidden">
               <div className="absolute top-4 left-4 text-[10px] opacity-40">GRID_ALIGNMENT: ACTIVE</div>
               <div className="absolute bottom-4 right-4 text-[10px] opacity-40">SCALE: 1:1.000</div>
               <SmartImage className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 transition-opacity duration-1000" />
               <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10" />
               <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20" />
               <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/20" />
               <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-cyan-400/30 animate-pulse" />
             </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-12 text-[10px] font-black opacity-40 uppercase tracking-[0.3em] border-t border-white/20 pt-8">
          <div className="flex items-center gap-2 italic"><Box size={14} /> Modular Systems</div>
          <div className="flex items-center gap-2 italic"><Award size={14} /> Certified Output</div>
          <div className="flex items-center gap-2 italic"><Briefcase size={14} /> 12y Experience</div>
        </div>
      </div>
    </div>
  ),

  // Variante 14: Liquid Motion (Fluido, gradientes dinámicos, tipografía suave)
  LiquidMotion: () => (
    <div className="w-full min-h-screen bg-[#050505] flex items-center justify-center p-8 overflow-hidden font-sans relative">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600 rounded-full blur-[150px] opacity-20 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-fuchsia-600 rounded-full blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-5xl w-full text-center space-y-16 relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 text-white/60 font-bold text-sm">
          <Zap size={18} className="text-yellow-400" />
          <span>Dynamic Motion Studio</span>
        </div>
        
        <h1 className="text-8xl md:text-[14rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic">
          FLUID <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-indigo-400 animate-gradient-x">FLOW.</span>
        </h1>
        
        <p className="text-2xl md:text-4xl text-white/40 max-w-3xl mx-auto font-light leading-tight italic">
          We bring static brands to life through liquid motion and immersive digital choreography.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
          <button className="px-16 py-8 bg-white text-black rounded-full font-black text-3xl italic shadow-2xl hover:scale-110 active:scale-95 transition-all">
            See Reel
          </button>
          <button className="px-16 py-8 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full font-black text-3xl italic hover:bg-white/10 transition-all">
            Contact
          </button>
        </div>

        <div className="pt-24 grid grid-cols-3 md:grid-cols-6 gap-4 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
           {[1, 2, 3, 4, 5, 6].map(i => (
             <div key={i} className="aspect-square bg-white/10 rounded-2xl overflow-hidden">
                <SmartImage className="w-full h-full object-cover" />
             </div>
           ))}
        </div>
      </div>
    </div>
  ),

  // Variante 15: Glitch Portfolio (Distorsión digital, estética de error, vibrante)
  GlitchPortfolio: () => (
    <div className="w-full min-h-screen bg-[#080808] flex items-center justify-center p-8 overflow-hidden font-mono text-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-red-500 animate-[glitch-line_2s_infinite]" />
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-500 animate-[glitch-line_3s_infinite]" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10">
          <div className="inline-block px-4 py-1 border border-magenta-500 text-fuchsia-500 text-xs font-bold uppercase tracking-[0.5em] animate-pulse bg-fuchsia-500/5">
            S_Y_S_T_E_M_O_V_E_R_R_I_D_E
          </div>
          <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tighter uppercase relative">
            <span className="relative z-10">BROKEN</span>
            <span className="absolute top-1 left-1 text-cyan-500 opacity-50 z-0">BROKEN</span>
            <span className="absolute -top-1 -left-1 text-fuchsia-500 opacity-50 z-0">BROKEN</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-white">GENIUS.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/40 max-w-md leading-relaxed italic">
            There is beauty in the breakdown. We find perfection in the glitches of modern technology.
          </p>
          <div className="flex gap-6 pt-6">
            <button className="px-12 py-6 bg-white text-black font-black text-2xl hover:bg-fuchsia-500 hover:text-white transition-all skew-x-[-12deg] shadow-[6px_6px_0px_#0ff] uppercase">
              DECODE_WORK
            </button>
            <button className="px-12 py-6 border border-white/20 text-white font-black text-2xl hover:bg-white/5 transition-all skew-x-[-12deg] uppercase">
              LOGS
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-600 to-cyan-600 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700" />
          <div className="relative aspect-square border-2 border-white/10 overflow-hidden bg-zinc-900 group-hover:border-cyan-500/50 transition-colors">
            <SmartImage className="w-full h-full object-cover grayscale contrast-150 group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-fuchsia-500/5 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            <div className="absolute bottom-6 right-6 bg-black p-6 border border-white/10 group-hover:border-fuchsia-500/50 transition-colors">
               <div className="text-[10px] opacity-40 uppercase mb-1 font-bold tracking-widest">Selected_Project</div>
               <div className="text-2xl font-black text-cyan-400 tracking-tighter italic uppercase">Neo_Decay_v9</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 16: Pastel Cloud (Suave, redondeado, gradientes, ambiente onírico)
  PastelCloudCreative: () => (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#FDFCFB] to-[#E2D1C3] flex items-center justify-center p-8 font-sans overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-pink-100 rounded-full blur-[150px] opacity-60 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-100 rounded-full blur-[150px] opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-5xl w-full text-center space-y-12 relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/40 backdrop-blur-md rounded-full border border-white/60 text-pink-500 font-bold text-sm shadow-sm">
          <Sparkles size={18} />
          <span>Dreams come true</span>
        </div>
        
        <h1 className="text-7xl md:text-[11rem] font-black text-slate-800 leading-[0.8] tracking-tighter uppercase italic">
          Soft <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">Visions.</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-slate-500/80 max-w-2xl mx-auto font-medium leading-relaxed italic">
          Crafting gentle experiences for a loud world. We believe in the power of soft aesthetics and quiet confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <button className="px-14 py-7 bg-white text-slate-800 rounded-full font-black text-2xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all uppercase italic">
            See Work
          </button>
          <button className="px-14 py-7 bg-slate-900 text-white rounded-full font-black text-2xl shadow-xl hover:bg-slate-800 transition-all uppercase italic">
            Hire Us
          </button>
        </div>

        <div className="pt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="aspect-square bg-white/30 rounded-[3rem] border border-white/40 p-6 shadow-lg backdrop-blur-sm">
              <SmartImage className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // Variante 17: Brutalist Archive (Estética de archivo crudo, tipografía gigante, minimalismo de datos)
  BrutalistArchive: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-16 font-sans">
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between min-h-[85vh]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b-8 border-black pb-16">
          <h1 className="text-9xl md:text-[20rem] font-black leading-[0.7] tracking-[2px] uppercase italic">
            DAT <br /> A.
          </h1>
          <div className="space-y-10 max-w-sm pt-12">
            <div className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] italic bg-black text-white px-4 py-2 w-fit">
              <Archive size={20} />
              <span>Project Archive 01-99</span>
            </div>
            <p className="text-2xl font-bold leading-tight uppercase italic">
              A raw collection of visual experiments, digital tools, and architectural research. No marketing fluff. Just output.
            </p>
            <div className="flex flex-col gap-6">
               <button className="w-full py-8 bg-black text-white font-black text-3xl uppercase italic hover:bg-white hover:text-black border-4 border-black transition-all shadow-[12px_12px_0px_rgba(0,0,0,0.1)]">
                 Enter Catalog
               </button>
               <div className="flex justify-between text-xs font-black uppercase tracking-[0.4em] border-t-2 border-black pt-6 opacity-40">
                 <span>VOL: 2024.05</span>
                 <span>LOC: GLOBAL</span>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b-8 border-black">
          {[
            { label: 'VISUAL', count: '142' },
            { label: 'CODE', count: '089' },
            { label: 'STUDY', count: '054' }
          ].map((cat, i) => (
            <div key={i} className={`p-12 flex flex-col justify-between h-80 group cursor-pointer border-black ${i < 2 ? 'md:border-r-8' : ''} hover:bg-black hover:text-white transition-all`}>
               <span className="text-sm font-black tracking-widest">CATEGORY_0{i+1}</span>
               <div className="flex justify-between items-end">
                 <span className="text-7xl font-black uppercase italic tracking-tighter">{cat.label}</span>
                 <span className="text-xl font-bold opacity-30 group-hover:opacity-100">[{cat.count}]</span>
               </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between py-10 text-[10px] font-black uppercase tracking-[0.8em] opacity-20">
          <span>Unfiltered</span>
          <span>Unbranded</span>
          <span>Unapologetic</span>
        </div>
      </div>
    </div>
  ),

  // Variante 18: Frosted 3D Glass (Capas profundas, luces dinámicas, iconos 3D)
  Frosted3D: () => (
    <div className="w-full min-h-screen bg-[#0f172a] flex items-center justify-center p-8 font-sans overflow-hidden relative">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[150px] opacity-30 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600 rounded-full blur-[150px] opacity-30 animate-pulse" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12 text-white">
          <div className="p-5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] w-fit shadow-2xl">
            <Layers size={40} className="text-blue-400" />
          </div>
          <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tight">
            Layered <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 italic">Genius.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-md leading-relaxed font-light">
            Multidimensional creative studio crafting the next generation of spatial digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <button className="px-14 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-[2.5rem] font-bold text-2xl shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.4)] hover:-translate-y-2 transition-all uppercase tracking-widest">
              Explore Depth
            </button>
            <button className="px-14 py-6 bg-white/5 backdrop-blur-3xl border border-white/10 text-white rounded-[2.5rem] font-bold text-2xl hover:bg-white/10 transition-all uppercase tracking-widest">
              Waitlist
            </button>
          </div>
        </div>

        <div className="relative group perspective-1000">
           <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           <div className="relative aspect-square bg-white/5 backdrop-blur-3xl border border-white/20 rounded-[4rem] p-12 shadow-2xl transform transition-transform duration-1000 hover:rotate-y-12 hover:rotate-x-12">
              <div className="absolute inset-6 border border-white/10 rounded-[3.5rem] pointer-events-none" />
              <div className="h-full w-full bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] flex items-center justify-center relative overflow-hidden">
                <SmartImage className="w-3/4 h-3/4 object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-10 left-10 flex gap-3">
                  <div className="w-4 h-4 rounded-full bg-red-500/40" />
                  <div className="w-4 h-4 rounded-full bg-yellow-500/40" />
                  <div className="w-4 h-4 rounded-full bg-green-500/40" />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 p-12 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[3.5rem] shadow-2xl space-y-3">
                 <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px]">Active_Module</div>
                 <div className="text-4xl font-black text-white italic tracking-tighter">SPATIAL_v2</div>
                 <div className="text-xl font-light text-white/40 tracking-widest">EST. 2024</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  ),

  // Variante 19: Hyper-Pop Creative (Estética saturada, neón, tipografía display, máxima energía)
  HyperPopCreative: () => (
    <div className="w-full min-h-screen bg-[#00FF00] flex items-center justify-center p-8 overflow-hidden font-sans relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
      <div className="absolute -top-20 -right-20 w-[40rem] h-[40rem] bg-[#FF00FF] rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] bg-[#00FFFF] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl w-full bg-white border-[12px] border-black shadow-[30px_30px_0px_#000] p-12 md:p-24 relative z-10 text-center space-y-16 rotate-1">
        <div className="inline-block bg-black text-[#00FF00] px-10 py-4 font-black text-3xl uppercase italic -rotate-3 border-4 border-white shadow-[10px_10px_0px_#FF00FF]">
          CREATIVE OVERLOAD!
        </div>
        
        <h1 className="text-8xl md:text-[16rem] font-black text-black leading-[0.75] tracking-tighter uppercase italic drop-shadow-[15px_15px_0px_#00FFFF]">
          WANT <br /> <span className="text-[#FF00FF]">UNIQUE?</span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          <p className="text-3xl md:text-5xl font-black text-black max-w-lg uppercase tracking-tighter italic leading-none">
            Stop blending in. Start standing out. Loud designs for bold brands.
          </p>
          <div className="flex gap-6">
             <button className="px-20 py-10 bg-black text-[#00FF00] font-black text-5xl uppercase italic hover:scale-110 active:scale-95 transition-all shadow-[15px_15px_0px_#FF00FF] border-4 border-white">
               WORK!
             </button>
             <button className="px-20 py-10 bg-[#FF00FF] text-white font-black text-5xl uppercase italic hover:scale-110 active:scale-95 transition-all shadow-[15px_15px_0px_black] border-4 border-black">
               HIRE!
             </button>
          </div>
        </div>

        <div className="flex justify-center gap-16 pt-12">
          {[Palette, Zap, Heart, Sparkles].map((Icon, i) => (
            <div key={i} className="p-6 bg-white rounded-full border-[6px] border-black shadow-[8px_8px_0px_#00FFFF] hover:scale-125 transition-transform cursor-pointer">
               <Icon size={50} className="text-black" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // Variante 20: Minimalist Mono (Blanco y negro puro, tipografía bold, enfoque en contraste)
  MinimalistMono: () => (
    <div className="w-full min-h-screen bg-white text-black flex items-center justify-center p-8 font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-7 space-y-16">
          <div className="text-xs font-black uppercase tracking-[1em] opacity-30">The Absolute Essence</div>
          <h1 className="text-9xl md:text-[22rem] font-black leading-[0.7] tracking-tighter uppercase">
            LESS <br /> IS <br /> <span className="text-white bg-black px-6">ALL.</span>
          </h1>
          <div className="flex gap-20 pt-10">
            <div className="space-y-4">
               <div className="text-sm font-black uppercase tracking-widest">Philosophy</div>
               <p className="text-xl max-w-xs font-medium opacity-60">We remove everything that doesn{"'"}t serve a purpose. Pure function, pure form.</p>
            </div>
            <div className="space-y-4">
               <div className="text-sm font-black uppercase tracking-widest">Services</div>
               <p className="text-xl max-w-xs font-medium opacity-60">Identity, Strategy, Digital, Print, Exhibition, Research.</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative aspect-[3/4] bg-black group overflow-hidden">
           <SmartImage className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
           <div className="absolute inset-0 border-[20px] border-white pointer-events-none" />
           <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end text-white">
              <div className="space-y-2">
                 <div className="text-xs font-black uppercase tracking-widest">Featured Work</div>
                 <div className="text-4xl font-black italic">MONO_STILL_01</div>
              </div>
              <ArrowUpRight size={60} className="group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700" />
           </div>
        </div>
      </div>
    </div>
  ),
};

