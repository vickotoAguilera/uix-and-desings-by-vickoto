"use client";

import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Ticket, 
  Mic2, 
  Video, 
  Globe, 
  Clock, 
  Zap, 
  Star, 
  Music, 
  Coffee, 
  Camera, 
  Share2, 
  Award, 
  ArrowRight, 
  ArrowUpRight,
  Sparkles,
  Layers,
  Layout,
  Terminal,
  Activity,
  Search,
  Code,
  Shield,
  Cpu,
  Database,
  Link2
} from 'lucide-react';
import { SmartImage } from '../SmartImage';

export const EventsConferencesHero = {
  // Variante 01: Modern Bento (Estilo Apple, modular, limpio)
  ModernBento: () => (
    <div className="w-full min-h-screen bg-[#FBFBFD] text-slate-900 py-24 px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold">
            <Calendar size={16} />
            <span>September 24-26, 2024 • San Francisco</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
            The Future <br /> <span className="text-slate-400">of Design.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium">
            Join the world{"'"}s most influential designers and developers for three days of inspiration, learning, and networking.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
              Register Now
            </button>
            <button className="px-10 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
              View Schedule
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-6 md:grid-rows-4 gap-6 h-auto md:h-[800px]">
          <div className="md:col-span-8 md:row-span-2 bg-white rounded-[3rem] p-12 border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="relative z-10 flex justify-between items-start">
              <div className="space-y-4">
                <div className="text-blue-600 font-bold uppercase tracking-widest text-xs">Main Keynote</div>
                <div className="text-6xl font-black">Design Systems <br /> for Scale</div>
                <p className="text-slate-400 font-medium">Featuring leaders from <br /> Figma, Apple, and Google.</p>
              </div>
              <div className="p-4 bg-blue-50 text-blue-600 rounded-3xl">
                <Mic2 size={40} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
              <SmartImage className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="md:col-span-4 md:row-span-2 bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10 flex justify-between items-start">
              <div className="space-y-1">
                <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest">Limited Spots</div>
                <div className="text-4xl font-black">150 Left</div>
              </div>
              <Ticket size={32} className="text-indigo-400" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-5/6 bg-indigo-500" />
              </div>
              <div className="text-xs text-white/40 font-bold uppercase tracking-widest italic text-right">Sold out soon</div>
            </div>
          </div>

          <div className="md:col-span-4 md:row-span-2 bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-500 transition-all cursor-pointer group">
            <div className="flex justify-between items-center">
              <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Globe size={24} />
              </div>
              <div className="text-emerald-500 flex items-center gap-1 font-bold">
                <ArrowUpRight size={16} />
                <span>Online Access</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-slate-900 font-bold text-2xl">Virtual Pass</div>
              <p className="text-slate-400 text-sm">Join from anywhere in the world.</p>
            </div>
          </div>

          <div className="md:col-span-8 md:row-span-2 bg-indigo-50 rounded-[3rem] p-12 border border-indigo-100 flex items-center gap-12 group overflow-hidden">
             <div className="space-y-6 max-w-xs">
                <h3 className="text-3xl font-black text-indigo-950">Networking Sessions.</h3>
                <p className="text-indigo-900/60 font-medium leading-relaxed">Meet and collaborate with peers in curated groups.</p>
                <button className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all">
                  Book Spot
                </button>
             </div>
             <div className="flex-1 h-full bg-white rounded-3xl shadow-xl border border-indigo-100 p-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                <div className="flex flex-wrap gap-4 opacity-40">
                   {[1, 2, 3, 4, 5, 6].map(i => (
                     <div key={i} className="w-12 h-12 bg-slate-100 rounded-full" />
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 02: Cyber Terminal (HUD táctico, ciberpunk, alta densidad)
  CyberTerminal: () => (
    <div className="w-full min-h-screen bg-[#050505] text-cyan-400 p-8 md:p-16 font-mono relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#0ff 1px, transparent 1px), linear-gradient(90deg, #0ff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        <div className="lg:col-span-3 space-y-8">
          <div className="p-6 border border-cyan-500/30 bg-black/50 backdrop-blur-xl space-y-6">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em]">
              <Calendar size={16} />
              <span>EVENT_SYS_v4</span>
            </div>
            <div className="space-y-4 opacity-60 text-xs">
              <div className="flex justify-between"><span>LOCATION:</span> <span>NEO_TOKYO</span></div>
              <div className="flex justify-between"><span>DATE:</span> <span>2077.05.21</span></div>
              <div className="flex justify-between"><span>STATUS:</span> <span className="text-emerald-400">ENCRYPTED</span></div>
            </div>
          </div>

          <div className="p-6 border border-fuchsia-500/30 bg-black/50 backdrop-blur-xl space-y-4">
             <div className="text-[10px] font-black uppercase text-fuchsia-500 tracking-[0.4em]">Tickets_Left</div>
             <div className="flex justify-between items-end">
               <span className="text-4xl font-black text-white italic leading-none">042</span>
               <Ticket size={24} className="text-fuchsia-500 animate-pulse" />
             </div>
             <div className="h-1 w-full bg-fuchsia-500/20">
               <div className="h-full w-[42%] bg-fuchsia-500 shadow-[0_0_10px_#f0f]" />
             </div>
          </div>
        </div>

        <div className="lg:col-span-9 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-cyan-500/20 pb-8">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
                NEURAL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">CONFERENCE.</span>
              </h1>
              <p className="text-xs font-bold text-cyan-500/60 uppercase tracking-widest">Interface the Future of Human Connection</p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-cyan-500 text-black font-black uppercase italic skew-x-[-12deg] hover:bg-white transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                Initialize_Pass
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-cyan-500/20 bg-black/50 relative group overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500" />
               <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500" />
               <div className="text-xs font-black uppercase opacity-40 mb-4 tracking-widest">Speaker_Grid</div>
               <div className="grid grid-cols-4 gap-2">
                 {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                   <div key={i} className="aspect-square bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                     <Users size={12} className="opacity-40" />
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="md:col-span-2 p-8 border border-cyan-500/20 bg-black/50 relative overflow-hidden group">
               <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <SmartImage className="w-full h-full object-cover grayscale invert" />
               </div>
               <div className="relative z-10 space-y-6">
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-black uppercase tracking-widest text-white">Transmission_Node_v4</span>
                    <span className="text-cyan-400 text-[10px]">LIVE_FEED</span>
                 </div>
                 <div className="grid grid-cols-2 gap-12">
                   <div className="space-y-1">
                     <div className="text-4xl font-black text-white italic">09:00</div>
                     <div className="text-[10px] uppercase opacity-40 tracking-widest font-black">Opening_Ceremony</div>
                   </div>
                   <div className="space-y-1">
                     <div className="text-4xl font-black text-white italic">20+</div>
                     <div className="text-[10px] uppercase opacity-40 tracking-widest font-black">Technical_Labs</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 03: Glassmorphism (Transparencias, backdrop-blur, colores pastel)
  Glassmorphism: () => (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-8 font-sans overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400 rounded-full blur-[150px] opacity-20 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-400 rounded-full blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/40 backdrop-blur-md rounded-full border border-white/60 text-indigo-600 font-bold text-sm shadow-sm">
            <Mic2 size={18} />
            <span>Creative Summit 2024</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-800 leading-[0.8] tracking-tighter">
            Pure <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">Creation.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-md leading-relaxed">
            A celebration of the creative spirit. Join us for a weekend of pure artistic expression.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="px-12 py-5 bg-white text-indigo-600 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
              Reserve Spot
            </button>
            <button className="px-12 py-5 bg-white/20 backdrop-blur-md border border-white/40 text-slate-700 rounded-2xl font-black text-xl hover:bg-white/40 transition-all">
              View Artists
            </button>
          </div>
        </div>

        <div className="relative group">
           <div className="absolute -inset-10 bg-white/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           <div className="relative aspect-square bg-white/20 backdrop-blur-3xl border border-white/40 rounded-[4rem] p-12 shadow-2xl flex flex-col justify-between transform rotate-3 group-hover:rotate-0 transition-transform duration-700">
              <div className="flex justify-between items-center border-b border-white/30 pb-8">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                   <div className="w-3 h-3 rounded-full bg-green-400/50" />
                 </div>
                 <div className="text-slate-800 font-black text-xs uppercase tracking-[0.3em]">ART_PASS_LIVE</div>
              </div>
              
              <div className="flex-1 py-12 flex items-center justify-center">
                 <div className="w-64 h-64 rounded-full border-[20px] border-white/30 relative flex items-center justify-center">
                    <div className="absolute inset-0 border-[20px] border-indigo-500/60 rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 85%)' }} />
                    <div className="text-center">
                       <div className="text-4xl font-black text-slate-800">85%</div>
                       <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Full Capacity</div>
                    </div>
                 </div>
              </div>

              <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-6 rounded-3xl flex justify-between items-center shadow-xl">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-500 text-white rounded-2xl">
                      <Star size={20} />
                    </div>
                    <div>
                       <div className="text-sm font-black text-slate-800">Featured Guest</div>
                       <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Live Q&A</div>
                    </div>
                 </div>
                 <ArrowUpRight size={24} className="text-indigo-600" />
              </div>
           </div>
        </div>
      </div>
    </div>
  ),

  // Variante 04: Neo-Brutalist (Bordes negros, colores vivos, sombras duras)
  NeoBrutalist: () => (
    <div className="w-full min-h-screen bg-[#FFD700] flex items-center justify-center p-8 font-mono">
      <div className="max-w-6xl w-full bg-white border-[6px] border-black shadow-[20px_20px_0px_#000] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500 border-l-[6px] border-b-[6px] border-black flex items-center justify-center rotate-12 translate-x-10 -translate-y-10">
          <Music size={48} className="text-white" />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-block bg-black text-white px-6 py-2 border-[4px] border-black font-black uppercase tracking-tighter italic -rotate-2">
              ROCK_CONCERT_v24
            </div>
            <h1 className="text-7xl md:text-9xl font-black text-black leading-[0.8] tracking-tighter uppercase">
              LOUD <br /> <span className="bg-blue-600 text-white px-4">MUSIC.</span>
            </h1>
            <p className="text-2xl font-bold text-black max-w-md uppercase leading-tight">
              Brutalist energy for those who live for the stage. No filters, just pure sound.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <button className="px-10 py-5 bg-black text-white font-black text-2xl hover:bg-pink-500 hover:text-white transition-colors border-[4px] border-black shadow-[10px_10px_0px_rgba(0,0,0,0.2)] uppercase italic">
                Buy Tickets
              </button>
              <button className="px-10 py-5 bg-white text-black font-black text-2xl hover:bg-blue-600 hover:text-white transition-colors border-[4px] border-black shadow-[10px_10px_0px_rgba(0,0,0,0.2)] uppercase italic">
                Lineup
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white border-[4px] border-black p-8 shadow-[12px_12px_0px_#000] space-y-6">
              <div className="flex justify-between items-center border-b-[4px] border-black pb-4">
                <span className="text-xl font-black uppercase italic tracking-tighter">Venue_Status</span>
                <div className="w-4 h-4 bg-green-500 border-[2px] border-black rounded-full animate-ping" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-5xl font-black text-blue-600 italic leading-none">12k</div>
                  <div className="text-xs font-black uppercase tracking-widest text-black/40">Expected_Fans</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-black text-pink-500 italic leading-none">02</div>
                  <div className="text-xs font-black uppercase tracking-widest text-black/40">Main_Stages</div>
                </div>
              </div>
            </div>

            <div className="bg-black text-white border-[4px] border-black p-8 shadow-[12px_12px_0px_#FFD700] space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white text-black border-[2px] border-black">
                   <Star size={24} />
                </div>
                <div className="text-sm font-black uppercase tracking-[0.2em]">VIP_Access: ENABLED</div>
              </div>
              <div className="h-4 w-full bg-white/20 border-[2px] border-white">
                <div className="h-full w-2/3 bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 05: Luxury Editorial (Luxury Editorial, serif, blanco/negro/oro, espacio amplio)
  LuxuryEditorial: () => (
    <div className="w-full min-h-screen bg-[#FBFBF9] text-[#1C1C1A] py-24 px-8 font-serif relative">
      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        <header className="border-b border-[#1C1C1A]/10 pb-12 flex flex-col md:flex-row justify-between items-baseline gap-6">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] font-sans text-slate-400">The Obsidian Gala 2024</span>
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-slate-900 leading-none">
              Maison <span className="italic font-normal">Soirée</span>
            </h1>
          </div>
          <div className="flex gap-8 items-center font-sans text-sm tracking-widest">
            <button className="hover:text-amber-600 transition-colors uppercase">Invitation</button>
            <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
            <button className="px-6 py-2.5 border border-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white transition-all uppercase">
              Inquiry
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-slate-400">The Philosophy</span>
              <p className="text-2xl font-light leading-relaxed normal-case italic text-slate-700">
                "An evening dedicated to the pursuit of excellence and the celebration of timeless craftsmanship."
              </p>
            </div>
            <div className="border-t border-[#1C1C1A]/10 pt-8 grid grid-cols-2 gap-8 font-sans">
              <div className="space-y-1">
                <div className="text-xs text-slate-400 uppercase tracking-wider">Venue</div>
                <div className="text-xl font-light text-slate-800">Grand Atelier</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-400 uppercase tracking-wider">Dress Code</div>
                <div className="text-xl font-light text-slate-800">Black Tie</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div className="border border-[#1C1C1A]/10 bg-white rounded-xl p-10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBFBF9] border-l border-b border-[#1C1C1A]/5 rounded-bl-[4rem]" />
              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-center font-sans">
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">Event Schedule</span>
                  <span className="text-[10px] text-slate-400">MAY 21, 2026</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-light">Reception</span>
                    <span className="text-sm font-sans text-slate-400">19:00</span>
                  </div>
                  <div className="h-px w-full bg-[#1C1C1A]/10" />
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-light">Gala Dinner</span>
                    <span className="text-sm font-sans text-slate-400">20:30</span>
                  </div>
                  <div className="h-px w-full bg-[#1C1C1A]/10" />
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-light">Awards Ceremony</span>
                    <span className="text-sm font-sans text-slate-400">22:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 06: Claymorphism (Suave, redondeado, aspecto 3D/plastilina)
  Claymorphism: () => (
    <div className="w-full min-h-screen bg-[#E0EFFF] flex items-center justify-center p-8 font-sans">
      <div className="max-w-6xl w-full bg-[#E0EFFF] rounded-[4rem] p-16 shadow-[20px_20px_60px_#beccda,-20px_-20px_60px_#ffffff] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border border-white/40">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/10 rounded-full text-blue-600 font-bold text-sm shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)]">
            <Music size={18} />
            <span>Family Festival 2024</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-800 leading-none tracking-tight">
            Soft <br /> <span className="text-blue-500">Play.</span>
          </h1>
          <p className="text-slate-500 text-xl font-medium leading-relaxed">
            A friendly festival for all ages. Come and play in a world of soft textures and bright colors.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="px-12 py-5 bg-blue-500 text-white rounded-[2rem] font-black text-xl shadow-[8px_8px_16px_rgba(59,130,246,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all">
              Join Fun
            </button>
            <button className="px-12 py-5 bg-white text-slate-700 rounded-[2rem] font-black text-xl shadow-[8px_8px_16px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(0,0,0,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all">
              Activities
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square bg-white rounded-[4rem] shadow-[inset_10px_10px_20px_#beccda,inset_-10px_-10px_20px_#ffffff] p-12 flex flex-col justify-between overflow-hidden group">
             <div className="flex justify-between items-center">
                <div className="w-16 h-16 bg-[#E0EFFF] rounded-3xl shadow-[4px_4px_8px_#beccda,-4px_-4px_8px_#ffffff] flex items-center justify-center text-blue-500">
                  <Star size={28} />
                </div>
                <div className="px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-xs font-black shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)]">
                  OPEN
                </div>
             </div>
             
             <div className="flex-1 flex flex-col justify-center gap-8">
                <div className="space-y-4">
                  <div className="text-3xl font-black text-slate-800">Magic Castle</div>
                  <div className="h-8 w-full bg-slate-50 rounded-2xl shadow-[inset_4px_4px_8px_#beccda,inset_-4px_-4px_8px_#ffffff] p-1">
                    <div className="h-full w-4/5 bg-blue-500 rounded-xl shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),2px_2px_4px_rgba(59,130,246,0.3)]" />
                  </div>
                </div>
             </div>
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-400 rounded-full shadow-[inset_8px_8px_16px_rgba(255,255,255,0.3),8px_8px_16px_rgba(244,114,182,0.3)] flex items-center justify-center text-white font-black text-xl rotate-12">
            KIDS
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 07: Swiss Style (Grid-based, functional, Helvetica)
  SwissStyle: () => (
    <div className="w-full min-h-screen bg-[#F0F0F0] text-black p-8 md:p-24 font-sans uppercase">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 border-t-8 border-black pt-12">
        <div className="md:col-span-8">
           <h1 className="text-8xl md:text-[18rem] font-black leading-[0.7] tracking-tighter">
             CON <br /> FER <br /> ENCE.
           </h1>
        </div>
        <div className="md:col-span-4 flex flex-col justify-between py-6">
           <div className="space-y-10">
             <div className="text-sm font-black tracking-[0.4em] border-b-4 border-black pb-4 inline-block italic">International Design Forum Vol. 24</div>
             <p className="text-2xl font-bold leading-tight lowercase normal-case">
               Structural clarity and functional excellence in the heart of Zurich. Join the most rigorous design event of the year.
             </p>
           </div>
           <div className="space-y-4 pt-16">
              <button className="w-full py-8 bg-black text-white font-black text-3xl hover:bg-red-600 transition-colors flex justify-between px-10 items-center group italic">
                 <span>GET_PASS</span>
                 <ArrowUpRight size={40} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
              <div className="flex justify-between text-xs font-black tracking-widest pt-4 opacity-40">
                 <span>ZURICH / SWITZERLAND</span>
                 <span>JUNE 12-14, 2024</span>
              </div>
           </div>
        </div>
      </div>
      
      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-0 border-t-2 border-black">
         {['TYPOGRAPHY', 'SYSTEMS', 'GRID', 'LOGIC'].map((cat, i) => (
           <div key={i} className="p-10 border-r-2 border-black last:border-r-0 hover:bg-black hover:text-white transition-all cursor-pointer group">
              <span className="text-[10px] font-black block mb-8 opacity-40 group-hover:opacity-100">SESSION_0{i+1}</span>
              <div className="flex justify-between items-end">
                <span className="text-4xl font-black italic">{cat}</span>
                <span className="text-sm font-bold opacity-0 group-hover:opacity-100">BOOKED</span>
              </div>
           </div>
         ))}
      </div>
    </div>
  ),

  // Variante 08: Solarpunk (Eco-tech, natural colors, organic)
  Solarpunk: () => (
    <div className="w-full min-h-screen bg-[#FDFCF8] flex items-center justify-center p-8 overflow-hidden font-sans relative">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-50 rounded-full blur-[120px] opacity-60 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-amber-50 rounded-full blur-[120px] opacity-60 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12">
          <div className="flex items-center gap-4 text-emerald-600 text-xs font-black tracking-[0.4em] uppercase">
             <div className="h-[2px] w-12 bg-emerald-500" />
             <span>Sustainable Futures Summit</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tight">
            Green <br /> <span className="text-emerald-500 italic font-light tracking-tighter">Energy.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-md leading-relaxed">
            Integrating natural motifs with clean technology. Join us for a weekend of optimistic future building.
          </p>
          <div className="flex flex-wrap gap-8 items-center pt-4">
            <button className="px-12 py-5 bg-emerald-600 text-white rounded-full font-bold text-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center gap-4">
              <span>Register Now</span>
              <ArrowUpRight size={20} />
            </button>
            <div className="flex items-center gap-4 text-emerald-900 font-black text-sm uppercase tracking-widest border-b-2 border-emerald-500 pb-1 cursor-pointer group">
               <Globe size={18} className="group-hover:rotate-12 transition-transform" />
               <span>Eco-Campus</span>
            </div>
          </div>
        </div>
        
        <div className="relative group">
           <div className="absolute -inset-10 bg-emerald-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           <div className="relative aspect-[4/5] bg-white rounded-[3rem] p-12 shadow-2xl border border-emerald-50 flex flex-col justify-between overflow-hidden">
              <div className="space-y-8">
                 <div className="flex justify-between items-center">
                    <div className="p-4 bg-emerald-50 text-emerald-600 rounded-3xl">
                       <Sparkles size={32} />
                    </div>
                    <div className="text-right">
                       <div className="text-xs font-black text-emerald-900/40 uppercase tracking-widest">Sustainability_Score</div>
                       <div className="text-3xl font-black text-emerald-600 italic">98/100</div>
                    </div>
                 </div>
                 
                 <div className="space-y-6">
                    <div className="text-slate-800 font-black text-2xl">Workshops</div>
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-6 group/item cursor-pointer">
                         <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all">
                            <Activity size={20} />
                         </div>
                         <div className="flex-1 space-y-2">
                            <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                               <span>Lab_0{i}</span>
                               <span className="text-emerald-500">ACTIVE</span>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-emerald-900 text-white p-6 rounded-3xl flex items-center justify-between shadow-xl shadow-emerald-200/50 group-hover:scale-105 transition-transform">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl">
                       <Zap size={24} className="text-emerald-400" />
                    </div>
                    <div>
                       <div className="text-sm font-black uppercase tracking-widest italic">Solar Powered</div>
                       <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">100% Green</div>
                    </div>
                 </div>
                 <ArrowUpRight size={24} />
              </div>
           </div>
        </div>
      </div>
    </div>
  ),

  // Variante 09: Kinetic Typography (Large animated text, visual impact)
  KineticTypography: () => (
    <div className="w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden font-sans relative">
      <div className="absolute inset-0 flex flex-col justify-between py-12 opacity-10 select-none pointer-events-none">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="text-[18rem] font-black leading-none whitespace-nowrap -translate-x-40 tracking-tighter uppercase italic text-white">
            EVENT EVENT EVENT EVENT EVENT
          </div>
        ))}
      </div>
      
      <div className="relative z-10 text-center space-y-16 px-6">
        <div className="space-y-4">
          <div className="text-indigo-500 font-black text-2xl tracking-[0.5em] uppercase italic animate-pulse">
            S_Y_S_T_E_M_O_P_E_N
          </div>
          <h1 className="text-[10rem] md:text-[22rem] font-black text-white leading-[0.7] tracking-tighter uppercase italic drop-shadow-[0_0_80px_rgba(79,70,229,0.3)]">
            D_SIGN <br /> <span className="text-transparent border-t-8 md:border-t-[16px] border-indigo-500 pt-4">WEEK.</span>
          </h1>
        </div>
        
        <div className="flex flex-col items-center gap-12">
          <p className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter max-w-3xl italic leading-none">
            The largest design event in Europe. <br /> Seven days of intense creation.
          </p>
          <div className="flex gap-8">
            <button className="px-20 py-8 bg-white text-black font-black text-4xl uppercase italic hover:scale-110 active:scale-95 transition-all shadow-[15px_15px_0px_rgba(79,70,229,0.4)]">
              Get Pass
            </button>
            <button className="px-20 py-8 border-4 border-white text-white font-black text-4xl uppercase italic hover:bg-white hover:text-black transition-all">
              Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 10: ASCII Art (Puro texto, low-tech, retro-futurista)
  ASCIIArt: () => (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-[#00ff41] flex items-center justify-center p-6 md:p-12 font-mono">
      <div className="max-w-5xl w-full border-4 border-[#00ff41] p-8 md:p-16 space-y-12 relative shadow-[0_0_40px_rgba(0,255,65,0.1)]">
        <div className="flex justify-between items-center text-xs opacity-60 border-b-2 border-[#00ff41]/30 pb-6">
          <span>{">"} CONFERENCE_PROTOCOL_v4.2.0</span>
          <span className="hidden md:block">LOC: 127.0.0.1</span>
          <span>STATUS: ONLINE</span>
        </div>
        
        <div className="space-y-10">
          <div className="text-4xl md:text-6xl font-bold leading-none uppercase">
            +------------------------------------+<br />
            | GLOBAL_HACKATHON_COMMAND_CENTER |<br />
            +------------------------------------+
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
               <div className="space-y-4">
                  <div className="text-xl font-black uppercase tracking-widest">[ SYSTEM_LOGS ]</div>
                  <div className="bg-[#00ff41]/5 border border-[#00ff41]/20 p-6 space-y-2 opacity-80 text-sm">
                    <div>{">"} AUTH_SUCCESS: ADMIN_01_X</div>
                    <div>{">"} NETWORK_UPLINK: STABLE</div>
                    <div className="animate-pulse">{">"} LISTENING_FOR_PARTICIPANTS...</div>
                  </div>
               </div>
               
               <div className="space-y-6 py-8 border-y-2 border-[#00ff41]/30">
                  <div className="text-xl font-black uppercase tracking-widest">[ STATS ]</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <div className="flex justify-between text-xs opacity-60">
                         <span>REGISTRATION</span>
                         <span>[||||||||--] 84%</span>
                       </div>
                       <div className="flex justify-between text-xs opacity-60">
                         <span>SERVER_LOAD</span>
                         <span>[||||------] 42%</span>
                       </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                       <div className="text-4xl font-black italic underline decoration-double">1,024 DEV_LIVE</div>
                    </div>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-4 space-y-8">
               <div className="border-2 border-[#00ff41]/30 p-8 space-y-6">
                  <div className="text-xs font-black uppercase tracking-[0.3em] text-white underline decoration-white/20">Action_Panel</div>
                  <div className="space-y-4">
                    <button className="w-full py-4 bg-[#00ff41] text-[#0a0a0a] font-black text-xl hover:bg-white transition-all uppercase shadow-[8px_8px_0px_rgba(0,255,65,0.3)]">
                      [ REGISTER ]
                    </button>
                    <button className="w-full py-4 border-2 border-[#00ff41] text-[#00ff41] font-black text-xl hover:bg-[#00ff41] hover:text-[#0a0a0a] transition-all uppercase">
                      [ REW_RULES ]
                    </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-12 text-[10px] opacity-40 uppercase tracking-[0.5em]">
          <span>* AUTH: AES-256</span>
          <span>* UPTIME: 99.999%</span>
          <span>* MODE: DEV_OPS</span>
        </div>
      </div>
    </div>
  ),

  // Variante 11: Ascii_Terminal_Core (Terminal clásica, enfoque en comandos)
  Ascii_Terminal_Core: () => (
    <div className="w-full min-h-screen bg-[#020202] text-[#00ff00] p-6 font-mono selection:bg-[#00ff00] selection:text-[#020202]">
      <div className="max-w-6xl mx-auto border border-[#00ff00]/30 p-1 min-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center px-4 py-2 bg-[#00ff00]/10 border-b border-[#00ff00]/30 text-xs">
          <div className="flex gap-4">
            <span>[SESSION: ADMIN_X]</span>
            <span className="animate-pulse">● LIVE</span>
          </div>
          <div className="flex gap-6">
            <span>CPU: 12%</span>
            <span>MEM: 4.2GB</span>
          </div>
        </div>
        
        <div className="flex-1 p-8 space-y-12">
          <div className="space-y-4">
            <div className="text-[0.6rem] leading-none opacity-40">
              {`
  █████╗ ███████╗ ██████╗██╗██╗     ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ 
 ██╔══██╗██╔════╝██╔════╝██║██║     ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
 ███████║███████╗██║     ██║██║     ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
 ██╔══██║╚════██║██║     ██║██║     ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
 ██║  ██║███████║╚██████╗██║███████╗███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
 ╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ 
              `}
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              {">"} INITIALIZING_CORE_v2.0
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-y border-[#00ff00]/20 py-12">
            <div className="space-y-6">
              <div className="text-sm opacity-60 leading-relaxed">
                Welcome to ASCII Studio Core. Our interface is designed for maximum efficiency and minimum resource usage. 
                Experience the raw power of text-based design.
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-[#00ff00] text-[#020202] font-black uppercase text-xs hover:bg-white transition-all">
                  [ START_COMMAND ]
                </button>
                <button className="px-6 py-2 border border-[#00ff00] hover:bg-[#00ff00]/10 transition-all font-black uppercase text-xs">
                  [ VIEW_SOURCE ]
                </button>
              </div>
            </div>
            <div className="bg-[#00ff00]/5 p-6 border border-[#00ff00]/20 space-y-2 text-[10px] overflow-hidden">
              <div className="text-[#00ff00]/40"># system_check_log</div>
              <div>{">"} checking hardware compatibility... [OK]</div>
              <div>{">"} loading visual_dna_module... [OK]</div>
              <div>{">"} establishing secure_link... [OK]</div>
              <div>{">"} server_response: 200 OK</div>
              <div className="animate-pulse">{">"} waiting for input_</div>
            </div>
          </div>
        </div>

        <div className="mt-auto px-4 py-2 border-t border-[#00ff00]/30 text-[10px] flex justify-between opacity-40">
          <span>(C) 2026 ASCII_STUDIO_CORP</span>
          <span>STABILITY_LEVEL: ALPHA_7</span>
        </div>
      </div>
    </div>
  ),

  // Variante 12: Ascii_Crt_Glitch (Efecto CRT, scanlines, parpadeo)
  Ascii_Crt_Glitch: () => (
    <div className="w-full min-h-screen bg-[#0a0c0a] text-[#ffcc00] flex items-center justify-center p-6 font-mono relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50" style={{ backgroundSize: '100% 4px, 3px 100%' }} />
      <div className="absolute inset-0 pointer-events-none animate-pulse bg-amber-500/5 z-40" />
      
      <div className="max-w-4xl w-full border-4 border-amber-500/30 p-12 space-y-12 relative shadow-[0_0_100px_rgba(255,204,0,0.05)]">
        <div className="absolute top-4 right-6 text-[10px] opacity-40 uppercase tracking-widest">Signal_Strength: 82%</div>
        
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-amber-500 text-black text-xs font-black uppercase italic -skew-x-12">
            CRITICAL_BROADCAST
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">
            V_SUAL <br /> <span className="underline decoration-4 underline-offset-8">NOISE.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 space-y-6">
            <p className="text-xl font-bold italic leading-tight opacity-80">
              Low-fidelity interfaces for a high-bandwidth world. Emulating the imperfections of analog technology.
            </p>
            <div className="flex gap-4">
              <button className="flex-1 py-4 border-2 border-amber-500 font-black text-lg hover:bg-amber-500 hover:text-black transition-all group">
                [ DECODE_NOW ]
              </button>
            </div>
          </div>
          <div className="md:col-span-5 border border-amber-500/20 p-6 space-y-4">
            <div className="flex justify-between items-center text-[10px] opacity-40">
              <span>ENCODING: UTF-8</span>
              <span>TYPE: CRT_EMU</span>
            </div>
            <div className="aspect-video bg-amber-500/5 flex items-center justify-center border border-amber-500/10">
              <Terminal size={40} className="animate-bounce opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 13: Ascii_Data_Stream (Fondo tipo Matrix, flujo de datos)
  Ascii_Data_Stream: () => (
    <div className="w-full min-h-screen bg-black text-[#00ff41] flex items-center justify-center p-8 font-mono overflow-hidden relative">
      <div className="absolute inset-0 flex justify-around opacity-10 pointer-events-none select-none overflow-hidden">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <div key={i} className="text-[10px] flex flex-col gap-1 animate-marquee-vertical">
            {Array.from({ length: 100 }).map((_, j) => (
              <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-5xl w-full relative z-10 space-y-16">
        <div className="flex justify-between items-start border-b border-[#00ff41]/30 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.5em]">
              <Cpu size={16} />
              <span>NEURAL_UPLINK</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black leading-none uppercase tracking-tighter">
              STREAM <br /> <span className="text-white">DATA.</span>
            </h1>
          </div>
          <div className="hidden md:block text-right space-y-1">
            <div className="text-4xl font-black">2.4 TB/S</div>
            <div className="text-[10px] uppercase opacity-40 tracking-widest">CURRENT_THROUGHPUT</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 p-8 border border-[#00ff41]/30 bg-black/80 space-y-8">
            <div className="space-y-2">
              <div className="text-[10px] font-black uppercase opacity-40 tracking-widest">Protocol_X</div>
              <div className="text-2xl font-black">SECURE_SYNC</div>
            </div>
            <p className="text-sm opacity-60 leading-relaxed">
              Real-time synchronization across distributed nodes. Experience zero-latency data orchestration.
            </p>
            <button className="w-full py-4 bg-[#00ff41] text-black font-black uppercase text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,65,0.4)]">
              INITIALIZE_SYNC
            </button>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 gap-8">
            <div className="p-8 border border-[#00ff41]/30 bg-black/80 flex flex-col justify-between">
              <div className="text-[10px] font-black uppercase opacity-40 tracking-widest">Nodes_Active</div>
              <div className="text-6xl font-black italic">1,248</div>
              <div className="h-1 w-full bg-[#00ff41]/10 mt-4">
                <div className="h-full w-3/4 bg-[#00ff41]" />
              </div>
            </div>
            <div className="p-8 border border-[#00ff41]/30 bg-black/80 flex flex-col justify-between">
              <div className="text-[10px] font-black uppercase opacity-40 tracking-widest">Encryption</div>
              <div className="text-4xl font-black italic">AES_512</div>
              <Shield className="mt-4 opacity-40" size={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 14: Ascii_Bento_Matrix (Grid Bento con bordes ASCII)
  Ascii_Bento_Matrix: () => (
    <div className="w-full min-h-screen bg-[#050505] text-[#00ff00] p-8 md:p-16 font-mono">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 border-b border-[#00ff00]/20 pb-12">
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-[0.6em] opacity-40">Layout_Engine_v4</div>
            <h1 className="text-6xl md:text-8xl font-black leading-none uppercase tracking-tighter">
              BENTO <br /> <span className="italic">MATRIX.</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-[#00ff00] text-black font-black uppercase text-xs">
              [ DOWNLOAD_SPEC ]
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
          <div className="md:col-span-8 md:row-span-2 border-2 border-[#00ff00]/40 p-8 flex flex-col justify-between relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
              <Terminal size={32} />
            </div>
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest opacity-40">Main_Module</div>
              <div className="text-5xl font-black uppercase leading-tight italic">
                Advanced <br /> Structural <br /> Logic.
              </div>
            </div>
            <div className="flex gap-12 text-[10px] uppercase font-black opacity-40">
              <span>GRID_SIZE: 12x12</span>
              <span>GUTTER: 16PX</span>
            </div>
          </div>

          <div className="md:col-span-4 md:row-span-1 border-2 border-[#00ff00]/40 p-8 flex flex-col justify-between bg-[#00ff00]/5">
            <div className="text-xs uppercase tracking-widest opacity-40">Status</div>
            <div className="flex justify-between items-end">
              <div className="text-4xl font-black italic leading-none">99.9%</div>
              <Activity size={24} className="animate-pulse" />
            </div>
          </div>

          <div className="md:col-span-4 md:row-span-2 border-2 border-[#00ff00]/40 p-8 flex flex-col justify-between hover:bg-[#00ff00]/5 transition-all cursor-pointer">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest opacity-40">Connectivity</div>
              <div className="text-3xl font-black uppercase italic leading-tight">Global <br /> Node <br /> Sync.</div>
            </div>
            <Link2 className="opacity-40" size={32} />
          </div>

          <div className="md:col-span-4 md:row-span-1 border-2 border-[#00ff00]/40 p-8 flex items-center justify-between">
            <div className="text-4xl font-black italic">v2.0</div>
            <div className="text-right text-[10px] uppercase font-black opacity-40">
              LATEST_BUILD <br /> 2026.05.21
            </div>
          </div>

          <div className="md:col-span-4 md:row-span-1 border-2 border-[#00ff00]/40 p-8 bg-[#00ff00] text-black flex items-center justify-between group cursor-pointer">
            <span className="text-2xl font-black uppercase italic">EXPLORE</span>
            <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 15: Ascii_Hero_Profile (Perfil con arte ASCII)
  Ascii_Hero_Profile: () => (
    <div className="w-full min-h-screen bg-[#020202] text-[#00ff00] flex items-center justify-center p-8 font-mono">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="inline-block border border-[#00ff00] px-4 py-1 text-xs font-black uppercase tracking-widest">
            {">"} IDENTITY_VERIFIED
          </div>
          <h1 className="text-7xl md:text-9xl font-black uppercase leading-none tracking-tighter italic">
            ASCII <br /> <span className="text-white">STUDIO.</span>
          </h1>
          <p className="text-xl opacity-60 leading-relaxed max-w-md">
            Architecting digital experiences through the lens of terminal aesthetics and low-resource computation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="px-10 py-4 bg-[#00ff00] text-black font-black uppercase italic hover:bg-white transition-all shadow-[8px_8px_0px_rgba(0,255,0,0.2)]">
              [ VIEW_PORTFOLIO ]
            </button>
            <button className="px-10 py-4 border border-[#00ff00] font-black uppercase italic hover:bg-[#00ff00]/10 transition-all">
              [ CONTACT_AGENT ]
            </button>
          </div>
        </div>

        <div className="border-4 border-[#00ff00]/20 p-12 bg-[#00ff00]/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 text-[10px] opacity-20">ID: 0x94A2...</div>
          <div className="text-[0.5rem] leading-none mb-12 opacity-80 whitespace-pre">
            {`
       .---.
      /     \\
      | () () |
       \\  ^  /
        |||||
        |||||
     ___|||||___
    /  ASCII    \\
   /    STUDIO   \\
  |  [ONLINE]     |
            `}
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-[#00ff00]/20 pb-4">
              <span className="text-xs uppercase font-black opacity-40 tracking-widest">Skills_Matrix</span>
              <Code size={16} className="opacity-40" />
            </div>
            <div className="grid grid-cols-2 gap-6 text-xs uppercase font-black italic">
              <div className="flex justify-between border-b border-[#00ff00]/10 pb-2">
                <span>TS_SYSTEMS</span>
                <span>[||||||]</span>
              </div>
              <div className="flex justify-between border-b border-[#00ff00]/10 pb-2">
                <span>RUST_CORE</span>
                <span>[||||--]</span>
              </div>
              <div className="flex justify-between border-b border-[#00ff00]/10 pb-2">
                <span>UI_LOGIC</span>
                <span>[||||||]</span>
              </div>
              <div className="flex justify-between border-b border-[#00ff00]/10 pb-2">
                <span>AI_ENGINE</span>
                <span>[|||---]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 16: Ascii_System_Monitor (Dashboard con gráficas ASCII)
  Ascii_System_Monitor: () => (
    <div className="w-full min-h-screen bg-[#050505] text-[#00ff00] p-6 md:p-12 font-mono">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-start border-b-4 border-[#00ff00] pb-8">
          <div className="space-y-2">
            <div className="text-xs font-black uppercase tracking-[0.4em] opacity-40">System_Monitor_v2</div>
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">GLOBAL_OPS.</h1>
          </div>
          <div className="text-right space-y-2">
            <div className="px-4 py-2 bg-[#00ff00]/10 border border-[#00ff00] text-xs font-black animate-pulse">
              ALL_SYSTEMS_OPERATIONAL
            </div>
            <div className="text-[10px] opacity-40 uppercase tracking-widest">UPTIME: 1,422 HOURS</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-8">
            <div className="p-8 border-2 border-[#00ff00]/30 bg-[#00ff00]/5 space-y-6">
              <div className="text-xs font-black uppercase tracking-widest border-b border-[#00ff00]/20 pb-4">Resource_Usage</div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs"><span>CPU</span> <span>42%</span></div>
                  <div className="h-2 w-full bg-[#00ff00]/10 border border-[#00ff00]/20"><div className="h-full w-[42%] bg-[#00ff00]" /></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs"><span>MEM</span> <span>68%</span></div>
                  <div className="h-2 w-full bg-[#00ff00]/10 border border-[#00ff00]/20"><div className="h-full w-[68%] bg-[#00ff00]" /></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs"><span>NET</span> <span>12%</span></div>
                  <div className="h-2 w-full bg-[#00ff00]/10 border border-[#00ff00]/20"><div className="h-full w-[12%] bg-[#00ff00]" /></div>
                </div>
              </div>
            </div>

            <div className="p-8 border-2 border-[#00ff00]/30 bg-[#00ff00]/5">
              <div className="text-xs font-black uppercase tracking-widest border-b border-[#00ff00]/20 pb-4 mb-6">Active_Nodes</div>
              <div className="text-5xl font-black italic">42,084</div>
              <div className="text-[10px] uppercase opacity-40 mt-2 tracking-widest font-black italic">Distributed_Cluster_A</div>
            </div>
          </div>

          <div className="md:col-span-8 p-8 border-2 border-[#00ff00]/30 bg-[#00ff00]/5 relative overflow-hidden">
             <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00ff00 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
             <div className="relative z-10 space-y-12">
                <div className="flex justify-between items-center">
                   <div className="text-xs font-black uppercase tracking-widest border-b border-[#00ff00]/20 pb-4">Traffic_Analytics</div>
                   <div className="flex gap-4">
                      <button className="px-4 py-1 border border-[#00ff00] text-[10px] font-black uppercase hover:bg-[#00ff00] hover:text-black transition-all">24H</button>
                      <button className="px-4 py-1 border border-[#00ff00] text-[10px] font-black uppercase opacity-40">7D</button>
                   </div>
                </div>
                
                <div className="h-64 w-full flex items-end gap-2 border-b-2 border-[#00ff00]/20 pb-2">
                   {Array.from({ length: 24 }).map((_, i) => (
                     <div key={i} className="flex-1 bg-[#00ff00]/20 hover:bg-[#00ff00] transition-all cursor-pointer relative group" style={{ height: `${Math.random() * 80 + 20}%` }}>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#00ff00] text-black px-1 text-[8px] font-black opacity-0 group-hover:opacity-100 transition-opacity">
                           {Math.floor(Math.random() * 100)}%
                        </div>
                     </div>
                   ))}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                   <div className="space-y-1">
                      <div className="text-2xl font-black italic">8.4M</div>
                      <div className="text-[10px] uppercase opacity-40 font-black">Total_Requests</div>
                   </div>
                   <div className="space-y-1">
                      <div className="text-2xl font-black italic">0.02ms</div>
                      <div className="text-[10px] uppercase opacity-40 font-black">Avg_Latency</div>
                   </div>
                   <div className="space-y-1">
                      <div className="text-2xl font-black italic">100%</div>
                      <div className="text-[10px] uppercase opacity-40 font-black">Success_Rate</div>
                   </div>
                   <div className="space-y-1">
                      <div className="text-2xl font-black italic">4.2TB</div>
                      <div className="text-[10px] uppercase opacity-40 font-black">Data_Transferred</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 17: Ascii_Retro_Hack (Estética hacker, parpadeos, comandos)
  Ascii_Retro_Hack: () => (
    <div className="w-full min-h-screen bg-[#020202] text-[#ff3e3e] p-8 font-mono overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-16 relative">
        <div className="absolute -top-10 -left-10 text-[20vw] font-black opacity-[0.03] select-none pointer-events-none italic">HACK</div>
        
        <div className="flex justify-between items-start border-b-2 border-[#ff3e3e]/30 pb-12">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-[#ff3e3e] text-black text-xs font-black uppercase animate-pulse">
              UNAUTHORIZED_ACCESS_DETECTED
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.7] uppercase tracking-tighter italic">
              RETRO <br /> <span className="text-white">BREACH.</span>
            </h1>
          </div>
          <div className="text-right space-y-1">
             <div className="text-xs font-black uppercase opacity-40 tracking-widest">Protocol: SHADOW_v3</div>
             <div className="text-3xl font-black">ENCRYPTED</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <p className="text-2xl font-black italic leading-tight uppercase underline decoration-4 underline-offset-8">
              Break the system. Rewrite the rules. <br /> Explore the digital underground.
            </p>
            <div className="space-y-4">
              <div className="bg-[#ff3e3e]/10 border border-[#ff3e3e]/30 p-6 space-y-2 text-xs">
                 <div className="text-white/40"># terminal_input</div>
                 <div className="flex gap-2">
                    <span className="text-white">root@system:</span>
                    <span className="text-[#ff3e3e] animate-pulse">ssh admin@ghost_network -p 443_</span>
                 </div>
              </div>
              <div className="flex gap-4">
                 <button className="flex-1 py-4 bg-[#ff3e3e] text-black font-black uppercase italic text-lg hover:bg-white transition-all shadow-[10px_10px_0px_rgba(255,62,62,0.3)]">
                   [ INITIALIZE_HACK ]
                 </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
             <div className="p-8 border-2 border-[#ff3e3e]/30 bg-[#ff3e3e]/5 flex flex-col justify-between group cursor-pointer hover:border-[#ff3e3e] transition-all">
                <div className="text-[10px] font-black uppercase opacity-40 tracking-widest">Target_Nodes</div>
                <div className="text-5xl font-black italic group-hover:scale-110 transition-transform">064</div>
                <Shield size={32} className="mt-4 opacity-40 group-hover:opacity-100 transition-opacity" />
             </div>
             <div className="p-8 border-2 border-[#ff3e3e]/30 bg-[#ff3e3e]/5 flex flex-col justify-between group cursor-pointer hover:border-[#ff3e3e] transition-all">
                <div className="text-[10px] font-black uppercase opacity-40 tracking-widest">Security_Level</div>
                <div className="text-5xl font-black italic text-white group-hover:scale-110 transition-transform">NULL</div>
                <Activity size={32} className="mt-4 opacity-40 group-hover:opacity-100 transition-opacity" />
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 18: Ascii_Cyber_Scroll (Texto ASCII gigante con scroll)
  Ascii_Cyber_Scroll: () => (
    <div className="w-full min-h-screen bg-black text-white flex flex-col font-mono overflow-hidden">
      <div className="flex-1 flex flex-col justify-center items-center py-24 relative">
        <div className="absolute inset-0 flex flex-col justify-around opacity-5 pointer-events-none select-none italic font-black text-[20vw] leading-none whitespace-nowrap">
           <div className="animate-marquee-slow">CYBER_SCROLL_CYBER_SCROLL_CYBER_SCROLL</div>
           <div className="animate-marquee-slow-reverse" style={{ animationDelay: '-5s' }}>DIGITAL_PUNK_DIGITAL_PUNK_DIGITAL_PUNK</div>
        </div>

        <div className="relative z-10 text-center space-y-12 px-6">
           <div className="space-y-4">
              <div className="text-xs font-black uppercase tracking-[1em] text-blue-500 animate-pulse">L_O_A_D_I_N_G</div>
              <h1 className="text-[12rem] md:text-[25rem] font-black leading-[0.7] tracking-tighter uppercase italic">
                 ASCII <br /> <span className="text-transparent border-t-8 md:border-t-[16px] border-white pt-4">WAVE.</span>
              </h1>
           </div>
           
           <div className="max-w-4xl mx-auto space-y-12">
              <p className="text-2xl md:text-5xl font-black uppercase italic leading-none tracking-tighter">
                 Extreme high-contrast aesthetics. <br /> Minimalist resources, maximal impact.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                 <button className="px-16 py-6 bg-white text-black font-black text-3xl uppercase italic hover:scale-110 transition-all shadow-[12px_12px_0px_rgba(59,130,246,0.5)]">
                    [ ENTER_THE_WAVE ]
                 </button>
                 <button className="px-16 py-6 border-4 border-white text-white font-black text-3xl uppercase italic hover:bg-white hover:text-black transition-all">
                    [ ARCHIVE ]
                 </button>
              </div>
           </div>
        </div>
      </div>
      
      <div className="h-20 bg-blue-600 flex items-center overflow-hidden border-t-4 border-white">
         <div className="flex gap-20 animate-marquee whitespace-nowrap text-2xl font-black uppercase italic text-black">
            <span>{">"} SYSTEM_ONLINE</span>
            <span>{">"} BUFFER_STABLE</span>
            <span>{">"} UPLINK_ACTIVE</span>
            <span>{">"} NODE_42_READY</span>
            <span>{">"} PROTOCOL_X_LOADED</span>
            <span>{">"} SYSTEM_ONLINE</span>
            <span>{">"} BUFFER_STABLE</span>
         </div>
      </div>
    </div>
  ),

  // Variante 19: Ascii_Phosphor_Glow (Brillo intenso de fósforo)
  Ascii_Phosphor_Glow: () => (
    <div className="w-full min-h-screen bg-[#001000] text-[#00ff00] p-8 md:p-24 font-mono relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1)_0%,transparent_70%)] animate-pulse" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0,0,0,0.5) 50%)', backgroundSize: '100% 4px' }} />
      
      <div className="max-w-6xl w-full border-2 border-[#00ff00]/40 p-12 md:p-20 space-y-16 relative shadow-[0_0_100px_rgba(0,255,0,0.1)]">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#001000] px-8 py-2 border-2 border-[#00ff00]/40 text-xs font-black tracking-[0.5em] uppercase">
            {">"} PHOSPHOR_OS_v1.0
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
               <h1 className="text-7xl md:text-9xl font-black uppercase leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(0,255,0,0.8)]">
                  GLOW <br /> <span className="italic underline decoration-double">CORE.</span>
               </h1>
               <p className="text-xl md:text-3xl font-bold italic leading-tight opacity-80 max-w-lg">
                  Immersive phosphor aesthetics for the next generation of terminal interfaces. 
               </p>
               <div className="flex gap-6">
                  <button className="px-12 py-5 bg-[#00ff00] text-black font-black text-xl uppercase italic hover:bg-white transition-all shadow-[0_0_30px_rgba(0,255,0,0.6)]">
                    [ LAUNCH_INTERFACE ]
                  </button>
               </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
               <div className="p-8 border-2 border-[#00ff00]/30 bg-[#00ff00]/5 space-y-6 shadow-[inset_0_0_30px_rgba(0,255,0,0.1)]">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest border-b border-[#00ff00]/20 pb-4">
                     <span>System_Status</span>
                     <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-[#00ff00] rounded-full animate-pulse" />
                        <div className="w-1.5 h-1.5 bg-[#00ff00] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-1.5 h-1.5 bg-[#00ff00] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="text-5xl font-black italic leading-none">99.9%</div>
                     <div className="text-[10px] uppercase opacity-40 font-black tracking-widest">STABILITY_RATING</div>
                     <div className="h-1 w-full bg-[#00ff00]/10"><div className="h-full w-[99%] bg-[#00ff00] shadow-[0_0_10px_rgba(0,255,0,0.8)]" /></div>
                  </div>
               </div>
               
               <div className="flex justify-around text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                  <span>* CRT_EMU</span>
                  <span>* P1_PHOSPHOR</span>
                  <span>* 60HZ</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  ),

  // Variante 20: Ascii_Final_Command (Minimalista, línea de comandos)
  Ascii_Final_Command: () => (
    <div className="w-full min-h-screen bg-[#020202] text-white p-8 md:p-24 font-mono flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-16">
         <div className="space-y-6">
            <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.5em] text-white/40">
               <div className="h-[2px] w-12 bg-white/40" />
               <span>Command_Line_Interface</span>
            </div>
            <h1 className="text-7xl md:text-[12rem] font-black leading-[0.7] tracking-tighter uppercase italic">
               FINAL <br /> <span className="underline decoration-8 underline-offset-12">EXEC.</span>
            </h1>
         </div>

         <div className="space-y-12">
            <div className="bg-white/5 border border-white/20 p-8 space-y-4 relative group cursor-pointer hover:border-white transition-all">
               <div className="text-[10px] font-black uppercase opacity-40 tracking-widest">Execute_Command</div>
               <div className="flex items-center gap-4 text-2xl md:text-4xl font-black italic uppercase">
                  <span>{">"}</span>
                  <span className="animate-pulse">sudo initialize --project-ascii-studio_</span>
               </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-between border-t border-white/20 pt-12">
               <div className="flex gap-12 text-xs font-black uppercase tracking-widest opacity-40">
                  <div className="space-y-1">
                     <div>AUTHOR</div>
                     <div className="text-white">ASCII_STUDIO</div>
                  </div>
                  <div className="space-y-1">
                     <div>VERSION</div>
                     <div className="text-white">v4.0.0-STABLE</div>
                  </div>
               </div>
               <button className="px-12 py-5 bg-white text-black font-black text-2xl uppercase italic hover:bg-blue-600 hover:text-white transition-all">
                  [ RUN_PROJECT ]
               </button>
            </div>
         </div>
      </div>
    </div>
  ),
};
