"use client";

import React from 'react';
import { ShoppingBag, ShoppingCart, Tag, Star, ArrowRight, Zap, Heart, Search, Filter, Layers, Archive, Box, Cpu, Droplets, Gift, Info, Package, Shield, Truck, Sparkles } from 'lucide-react';
import { SmartImage } from '../SmartImage';

export const ShopHero = {
  // Variante 01: Neo-Memphis Shop (Colores vivos, formas geométricas, 80s vibes)
  NeoMemphis: () => (
    <div className="w-full min-h-screen bg-[#FFD700] flex items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-20 left-20 w-32 h-32 border-8 border-black rounded-full opacity-20" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 opacity-20 rotate-45" />
      <div className="absolute top-1/2 left-10 w-20 h-4 bg-blue-500 -rotate-12" />
      
      <div className="max-w-6xl w-full bg-white border-[6px] border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] p-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-block bg-pink-500 text-white px-6 py-2 border-[4px] border-black font-black uppercase italic -rotate-2">
            NEW COLLECTION 2024
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-black leading-none uppercase tracking-tighter">
            STYLE <br/> WITHOUT <br/> <span className="text-blue-600 underline decoration-black decoration-8">LIMITS.</span>
          </h1>
          <p className="text-xl font-bold text-black/60 max-w-md">
            The Memphis movement is back. Bold patterns, vibrant colors, and pure creative energy for your wardrobe.
          </p>
          <div className="flex gap-4">
            <button className="px-10 py-5 bg-black text-white font-black text-xl hover:bg-pink-500 transition-colors border-[4px] border-black shadow-[8px_8px_0px_rgba(0,0,0,0.2)] uppercase italic">
              Shop Now
            </button>
            <button className="px-10 py-5 bg-white text-black font-black text-xl hover:bg-blue-400 transition-colors border-[4px] border-black shadow-[8px_8px_0px_rgba(0,0,0,0.2)] uppercase italic">
              View Lookbook
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 translate-x-4 translate-y-4 border-[4px] border-black" />
          <div className="relative aspect-square bg-white border-[4px] border-black overflow-hidden group">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-4 right-4 bg-yellow-400 border-[3px] border-black p-4 font-black text-2xl -rotate-12">
              40% OFF
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 02: Luxury Editorial Shop (Serif, blanco/negro, minimalismo de alta gama)
  LuxuryEditorial: () => (
    <div className="w-full min-h-screen bg-white text-slate-950 flex items-center justify-center px-8 py-24 font-serif">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-7 space-y-12">
          <div className="w-20 h-[1px] bg-slate-900" />
          <h1 className="text-7xl md:text-[11rem] leading-[0.85] tracking-tight italic font-light">
            Essential <br/> <span className="font-bold not-italic">Elegance.</span>
          </h1>
          <div className="grid grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.4em] font-sans font-bold text-slate-400">Philosophy</span>
              <p className="text-lg leading-relaxed text-slate-600 italic">
                Crafted for those who appreciate the silence of true quality and the permanence of classic design.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.4em] font-sans font-bold text-slate-400">Material</span>
              <p className="text-lg leading-relaxed text-slate-600 italic">
                Sourced from the finest sustainable workshops in Northern Italy and Southern France.
              </p>
            </div>
          </div>
          <button className="group flex items-center gap-6 text-2xl font-bold italic pt-8 hover:translate-x-4 transition-transform">
            <span>Explore Collection</span>
            <div className="w-16 h-[1px] bg-slate-900 group-hover:w-32 transition-all" />
          </button>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[3/4] bg-slate-100 overflow-hidden shadow-2xl">
            <SmartImage className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-10 shadow-xl space-y-4 max-w-xs border border-slate-100">
             <div className="text-sm font-sans font-bold uppercase tracking-widest text-slate-400">Featured Item</div>
             <div className="text-2xl italic">The Silk Blouse No. 12</div>
             <div className="text-xl font-sans font-bold">$450.00</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 03: Bento Grid Shop (Apple-style, modular, interactivo)
  BentoShop: () => (
    <div className="w-full min-h-screen bg-[#F5F5F7] py-24 px-8 font-sans">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 grid-rows-6 md:grid-rows-4 gap-6 h-auto md:h-[900px]">
        <div className="md:col-span-8 md:row-span-2 bg-white rounded-[2.5rem] p-12 flex flex-col justify-between shadow-sm border border-slate-200 overflow-hidden relative group">
          <div className="relative z-10 space-y-4">
            <div className="text-blue-600 font-bold text-lg">Pro Edition</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
              Future of <br/> Performance.
            </h2>
            <p className="text-xl text-slate-500 max-w-md">
              Engineered with precision. Built for the creators of tomorrow.
            </p>
          </div>
          <div className="relative z-10 flex gap-4">
            <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all">
              Buy Now
            </button>
            <button className="px-8 py-3 bg-slate-100 text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-all">
              Learn More
            </button>
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 group-hover:scale-110 transition-transform duration-1000">
             <ShoppingBag size={400} />
          </div>
        </div>

        <div className="md:col-span-4 md:row-span-2 bg-slate-900 rounded-[2.5rem] p-10 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent" />
          <div className="relative z-10 space-y-2">
            <div className="text-indigo-400 font-bold">Limited Drop</div>
            <h3 className="text-3xl font-bold">Stealth Series</h3>
          </div>
          <div className="relative z-10 aspect-square rounded-2xl overflow-hidden">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <button className="relative z-10 w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-lg hover:scale-[0.98] transition-all">
            $299.00
          </button>
        </div>

        <div className="md:col-span-4 md:row-span-2 bg-emerald-50 rounded-[2.5rem] p-10 flex flex-col justify-between border border-emerald-100 shadow-sm group hover:bg-emerald-100 transition-all">
          <div className="flex justify-between items-start text-emerald-600">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <Zap size={32} />
            </div>
            <div className="px-4 py-1 bg-emerald-200 rounded-full text-[10px] font-black uppercase tracking-widest">Fast Delivery</div>
          </div>
          <div className="space-y-2">
            <div className="text-emerald-950 font-bold text-3xl">Instant Access</div>
            <p className="text-emerald-700/60 font-medium">Get your products delivered in under 24 hours.</p>
          </div>
        </div>

        <div className="md:col-span-4 md:row-span-1 bg-white rounded-[2.5rem] p-8 flex items-center justify-between border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer">
           <div className="space-y-1">
             <div className="text-slate-900 font-bold text-xl">Top Rated</div>
             <div className="flex text-yellow-400 gap-1">
               {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
             </div>
           </div>
           <div className="text-slate-400 font-medium italic">4.9/5.0</div>
        </div>

        <div className="md:col-span-4 md:row-span-1 bg-white rounded-[2.5rem] p-8 flex items-center gap-6 border border-slate-200 shadow-sm hover:border-blue-500 transition-all group cursor-pointer">
          <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
            <Heart size={24} />
          </div>
          <div className="font-bold text-slate-900 uppercase tracking-widest text-sm">Wishlist</div>
        </div>
      </div>
    </div>
  ),

  // Variante 04: Cyberpunk Drop (Neón, glitch, estética hacker, edición limitada)
  CyberDrop: () => (
    <div className="w-full min-h-screen bg-black relative flex items-center justify-center overflow-hidden font-mono">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#0ff 1px, transparent 1px), linear-gradient(90deg, #0ff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
      
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 px-8 items-center">
        <div className="space-y-10">
          <div className="flex items-center gap-4 text-cyan-400 text-xs uppercase tracking-[0.5em]">
            <Zap size={16} className="animate-bounce" />
            <span>DROP_ID: #771-X // LIMITED_AVAILABILITY</span>
          </div>
          
          <h1 className="text-7xl md:text-[9rem] font-black text-white leading-none tracking-tighter uppercase relative group">
            GLITCH <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 animate-gradient-x">GEAR.</span>
            <div className="absolute -inset-4 bg-cyan-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all" />
          </h1>
          
          <p className="text-cyan-100/40 text-xl md:text-2xl max-w-md leading-relaxed">
            High-performance hardware for the digital underground. Encrypted transactions only.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-10 py-5 bg-cyan-500 text-black font-black text-xl hover:bg-cyan-400 transition-all shadow-[0_0_40px_rgba(6,182,212,0.4)] uppercase tracking-tighter skew-x-[-12deg]">
              Decrypt Price
            </button>
            <div className="flex items-center gap-4 px-8 py-5 border border-fuchsia-500/30 text-fuchsia-500 font-black text-xl uppercase skew-x-[-12deg] hover:bg-fuchsia-500/10 transition-all cursor-pointer">
              <span>Technical Specs</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-fuchsia-600 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
          <div className="relative border-2 border-cyan-500/30 p-4 bg-black/80 backdrop-blur-xl">
             <div className="absolute top-0 left-0 w-full h-full border border-white/5 pointer-events-none" />
             <div className="aspect-[4/5] overflow-hidden relative">
               <SmartImage className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" />
               <div className="absolute bottom-4 left-4 bg-black/90 border border-cyan-500/50 px-4 py-2 text-cyan-400 text-[10px] uppercase tracking-widest">
                 Auth_Token: 0x92...f21
               </div>
             </div>
             <div className="mt-4 flex justify-between items-center text-cyan-400/60 text-[10px] uppercase tracking-[0.3em]">
               <span>Series_01</span>
               <span className="text-fuchsia-500">In Stock</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 05: Minimalist Dark Shop (Ultra-alto contraste, sharp, minimalista extremo)
  MinimalistDark: () => (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center p-8 font-sans">
      <div className="max-w-6xl w-full flex flex-col items-center text-center space-y-16">
        <div className="space-y-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.8em] text-white/30">The Essence of Form</div>
          <h1 className="text-8xl md:text-[14rem] font-black leading-[0.75] tracking-tighter uppercase">
            BLACK <br/> ON <br/> BLACK.
          </h1>
        </div>

        <div className="w-full max-w-4xl relative aspect-video bg-zinc-900 group overflow-hidden">
           <SmartImage className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
           <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="text-left space-y-1">
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Model 001</div>
                <div className="text-3xl font-black italic">SHADOW COAT</div>
              </div>
              <div className="text-4xl font-light italic">$1,200</div>
           </div>
        </div>

        <div className="flex gap-16 items-center">
          <button className="text-2xl font-black uppercase tracking-tighter hover:line-through transition-all decoration-4">
            Pre-Order
          </button>
          <div className="w-px h-12 bg-white/20" />
          <button className="text-2xl font-black uppercase tracking-tighter text-white/30 hover:text-white transition-all">
            Details
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 06: Claymorphism Store (Suave, redondeado, aspecto 3D/plastilina)
  Claymorphism: () => (
    <div className="w-full min-h-screen bg-[#E0EFFF] flex items-center justify-center p-8 font-sans">
      <div className="max-w-5xl w-full bg-[#E0EFFF] rounded-[4rem] p-16 shadow-[20px_20px_60px_#beccda,-20px_-20px_60px_#ffffff] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border border-white/40">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/10 rounded-full text-blue-600 font-bold text-sm">
            <ShoppingCart size={18} />
            <span>New Arrival</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-800 leading-none tracking-tight">
            Soft <br/> <span className="text-blue-500">Picks.</span>
          </h1>
          <p className="text-slate-500 text-xl font-medium leading-relaxed">
            Cute, comfortable, and designed for your daily life. Experience the touch of quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-10 py-5 bg-blue-500 text-white rounded-[2rem] font-black text-xl shadow-[8px_8px_16px_rgba(59,130,246,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all">
              Grab Yours
            </button>
            <button className="px-10 py-5 bg-white text-slate-700 rounded-[2rem] font-black text-xl shadow-[8px_8px_16px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(0,0,0,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all">
              See More
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-white rounded-[4rem] shadow-[inset_10px_10px_20px_#beccda,inset_-10px_-10px_20px_#ffffff] p-8 flex items-center justify-center overflow-hidden">
             <SmartImage className="w-3/4 h-3/4 object-contain drop-shadow-[20px_20px_30px_rgba(0,0,0,0.1)] hover:rotate-6 transition-transform duration-500" />
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-400 rounded-full shadow-[inset_8px_8px_16px_rgba(255,255,255,0.3),8px_8px_16px_rgba(244,114,182,0.3)] flex items-center justify-center text-white font-black text-xl">
            SALE
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 07: Swiss Style Catalog (Limpio, grid estricto, funcional, tipografía Helvetica)
  SwissCatalog: () => (
    <div className="w-full min-h-screen bg-[#F0F0F0] text-black p-8 md:p-24 font-sans uppercase">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 border-t-4 border-black pt-12">
        <div className="md:col-span-8">
          <h1 className="text-8xl md:text-[16rem] font-black leading-[0.75] tracking-tighter">
            THE <br/> OB <br/> JECT.
          </h1>
        </div>
        <div className="md:col-span-4 flex flex-col justify-between py-4">
           <div className="space-y-8">
             <div className="text-sm font-black tracking-widest border-b-2 border-black pb-2 inline-block">Design Catalogue Vol. 10</div>
             <p className="text-2xl font-bold leading-tight lowercase normal-case">
               Functional objects for the modern workspace. Designed in Switzerland, built for efficiency and clarity.
             </p>
           </div>
           <div className="space-y-4 pt-12">
             <button className="w-full py-6 bg-black text-white font-black text-2xl hover:bg-red-600 transition-colors">
               VIEW ALL
             </button>
             <button className="w-full py-6 border-2 border-black font-black text-2xl hover:bg-black hover:text-white transition-all">
               SEARCH
             </button>
           </div>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-2 md:grid-cols-5 gap-8 border-t-2 border-black pt-8">
        {['CHAIRS', 'TABLES', 'LAMPS', 'SHELVES', 'ACC.'].map((cat, i) => (
          <div key={i} className="flex flex-col gap-4 group cursor-pointer">
            <span className="text-[10px] font-black">0{i+1} / CATEGORY</span>
            <span className="text-2xl font-black group-hover:text-red-600 transition-colors">{cat}</span>
          </div>
        ))}
      </div>
    </div>
  ),

  // Variante 08: Solarpunk Green Market (Orgánico, verde/blanco, eco-tech, luz cálida)
  SolarGreen: () => (
    <div className="w-full min-h-screen bg-[#FDFCF8] flex items-center justify-center p-8 overflow-hidden font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
           <div className="absolute -inset-20 bg-emerald-100/30 rounded-full blur-[120px] animate-pulse" />
           <div className="relative aspect-[4/5] bg-emerald-50 rounded-[40%_60%_60%_40%/60%_40%_40%_60%] overflow-hidden shadow-2xl border border-emerald-100/50">
             <SmartImage className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
           </div>
           <div className="absolute top-10 -right-10 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white max-w-[200px] space-y-4">
              <div className="p-3 bg-emerald-500 text-white rounded-2xl w-fit shadow-lg shadow-emerald-200">
                <Tag size={24} />
              </div>
              <div className="text-sm font-bold text-emerald-900">Sustainable Source</div>
              <div className="text-[10px] text-emerald-600/60 uppercase tracking-widest font-black">Verified Eco</div>
           </div>
        </div>

        <div className="space-y-12">
          <div className="flex items-center gap-4">
             <div className="h-[2px] w-12 bg-emerald-500" />
             <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">Future Harvest 2024</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tight">
            Clean <br/> <span className="text-emerald-500">Supply.</span>
          </h1>
          
          <p className="text-slate-500 text-xl md:text-2xl leading-relaxed max-w-lg">
            Sustainably grown, ethically sourced, and technologically optimized. The market of the future is here.
          </p>

          <div className="flex flex-wrap gap-8 items-center pt-4">
            <button className="px-12 py-5 bg-emerald-600 text-white rounded-full font-bold text-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center gap-4">
              <span>Shop Market</span>
              <ArrowRight size={20} />
            </button>
            <div className="flex -space-x-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-emerald-100 overflow-hidden shadow-sm">
                   <SmartImage />
                 </div>
               ))}
               <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-900 flex items-center justify-center text-[10px] font-bold text-white">
                 +2k
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 09: Kinetic Typography Promo (Texto gigante, impacto visual, minimalismo de movimiento)
  KineticPromo: () => (
    <div className="w-full min-h-screen bg-rose-600 flex items-center justify-center overflow-hidden font-sans select-none">
      <div className="absolute inset-0 flex flex-col justify-between py-12 opacity-10">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="text-[15rem] font-black leading-none whitespace-nowrap -translate-x-20 tracking-tighter uppercase italic">
            BIG SALE • BIG SALE • BIG SALE • BIG SALE
          </div>
        ))}
      </div>
      
      <div className="relative z-10 text-center space-y-12 px-6">
        <h1 className="text-[12rem] md:text-[22rem] font-black text-white leading-[0.7] tracking-tighter uppercase italic drop-shadow-2xl">
          BUY <br/> FAST.
        </h1>
        <div className="flex flex-col items-center gap-8">
          <p className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter max-w-2xl italic">
            Up to 80% off on selected items. Limited time only.
          </p>
          <button className="px-20 py-8 bg-white text-rose-600 font-black text-4xl uppercase italic hover:scale-110 active:scale-95 transition-all shadow-2xl">
            Go Now
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 10: 8-Bit Retro Store (Pixel art, NES style, lúdico, nostálgico)
  RetroStore: () => (
    <div className="w-full min-h-screen bg-[#323c39] flex items-center justify-center p-8 font-mono">
      <div className="max-w-4xl w-full border-[8px] border-white bg-[#000] p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,0.5)] space-y-12">
        <div className="flex justify-between items-center border-b-8 border-white pb-8">
           <div className="text-white text-4xl font-black tracking-tighter uppercase">ITEM SHOP v1.0</div>
           <div className="flex gap-4">
             <div className="w-12 h-12 bg-yellow-400 border-4 border-white animate-pulse" />
             <div className="text-white text-2xl font-black self-center">9999 G</div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase">
              POWER UP <br/> <span className="text-blue-400">YOUR STYLE.</span>
            </h1>
            <div className="p-6 bg-zinc-900 border-4 border-white text-zinc-400 text-xl leading-relaxed uppercase">
              {">"} SELECT GEAR:<br/>
              {">"} [1] PIXEL HOODIE<br/>
              {">"} [2] RETRO KICKS<br/>
              {">"} [3] 8-BIT SHADES
            </div>
            <button className="w-full py-6 bg-emerald-600 text-white border-4 border-white shadow-[8px_8px_0px_rgba(0,0,0,1)] font-black text-3xl hover:-translate-y-2 transition-transform uppercase">
              EQUIP NOW
            </button>
          </div>
          <div className="aspect-square bg-zinc-900 border-8 border-white p-8 flex flex-col items-center justify-center space-y-8 relative group">
             <div className="absolute top-4 left-4 text-white text-xs uppercase font-black tracking-widest">Preview_Window</div>
             <div className="w-48 h-48 bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShoppingBag size={120} className="text-white" />
             </div>
             <div className="text-center">
               <div className="text-yellow-400 text-2xl font-black uppercase tracking-tighter italic">Legendary Cape</div>
               <div className="text-white/40 text-xs font-black uppercase mt-2">+50 Aesthetic</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 11: Wabi-Sabi Organic (Colores tierra, asimetría, texturas, zen)
  WabiSabiShop: () => (
    <div className="w-full min-h-screen bg-[#F4F1EA] text-[#4A453C] flex items-center justify-center p-8 font-serif overflow-hidden">
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#E8E2D5] rounded-full blur-[100px] opacity-60" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#DFD9CD] rounded-full blur-[120px] opacity-60" />
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-10">
          <div className="flex items-center gap-3 text-[#8C8471] tracking-[0.3em] text-xs uppercase font-medium">
            <span className="w-8 h-[1px] bg-[#8C8471]" />
            ESTABLISHED IN IMPERFECTION
          </div>
          <h1 className="text-7xl md:text-9xl font-light leading-[0.9] tracking-tight">
            The Art of <br /> <span className="italic">Presence.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#6B6455] max-w-md leading-relaxed font-light">
            Handcrafted vessels and textiles that celebrate the natural passage of time and the beauty of the raw.
          </p>
          <div className="pt-6">
            <button className="px-12 py-5 border border-[#4A453C] text-[#4A453C] text-xl hover:bg-[#4A453C] hover:text-[#F4F1EA] transition-all duration-700 flex items-center gap-6 group">
              <span>View Collection</span>
              <div className="w-12 h-[1px] bg-[#4A453C] group-hover:bg-[#F4F1EA] transition-colors" />
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] bg-[#E8E2D5] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden shadow-2xl relative">
            <SmartImage className="w-full h-full object-cover mix-blend-multiply opacity-80" />
            <div className="absolute inset-0 bg-[#4A453C]/5" />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-[#F4F1EA] p-8 border border-[#E8E2D5] shadow-lg max-w-[220px]">
            <div className="text-3xl font-light italic mb-2">No. 084</div>
            <div className="text-sm tracking-widest uppercase opacity-60">Ceramic Vessel</div>
            <div className="mt-4 text-xl font-bold">$185.00</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 12: ASCII Terminal (Estética de texto, low-tech, retro-futurismo)
  ASCIIShop: () => (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-[#00ff41] flex items-center justify-center p-4 font-mono">
      <div className="max-w-4xl w-full border-2 border-[#00ff41] p-8 space-y-8 relative shadow-[0_0_20px_rgba(0,255,65,0.2)]">
        <div className="flex justify-between items-center text-xs opacity-70 border-b border-[#00ff41]/30 pb-4">
          <span>{">"} SHOP_OS_v4.2.0</span>
          <span>EST_TIME: 2026-05-20</span>
          <span>USR: ANONYMOUS</span>
        </div>
        
        <div className="space-y-6">
          <div className="text-4xl md:text-6xl font-bold leading-none uppercase">
            +------------------+<br />
            | DATA_DRIVEN_WEAR |<br />
            +------------------+
          </div>
          
          <p className="text-xl md:text-2xl opacity-80 max-w-2xl leading-relaxed">
            [SYS_MSG]: Hardware for the modern explorer. Encrypted apparel for the digital age. No tracking. No cookies. Just gear.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-[#00ff41]/30">
            <div className="space-y-4">
              <div className="text-lg font-bold">[ CATALOG ]</div>
              <ul className="space-y-2 opacity-70">
                <li>{">"} 01. NEURAL_LINK_CAP</li>
                <li>{">"} 02. CRYPTO_PUNCH_GLOVES</li>
                <li>{">"} 03. DARK_WEB_PARKA</li>
                <li>{">"} 04. ANONYMOUS_KICKS</li>
              </ul>
            </div>
            <div className="flex flex-col justify-end gap-4">
              <div className="text-right text-3xl font-bold underline decoration-double">PRICE: 0.042 BTC</div>
              <button className="w-full py-4 bg-[#00ff41] text-[#0a0a0a] font-bold text-2xl hover:bg-white transition-colors uppercase">
                [ EXECUTE_BUY ]
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 text-[10px] opacity-40">
          <span>* AUTHENTICITY_GUARANTEED</span>
          <span>* SECURE_DROP</span>
          <span>* 256_BIT_ENCRYPTION</span>
        </div>
      </div>
    </div>
  ),

  // Variante 13: Skeuomorphic Glass (Realismo moderno, capas de vidrio, sombras profundas)
  SkeuoGlass: () => (
    <div className="w-full min-h-screen bg-[#D1D9E6] flex items-center justify-center p-8 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <div className="w-16 h-16 bg-[#D1D9E6] rounded-2xl shadow-[6px_6px_12px_#b8bec9,-6px_-6px_12px_#ebf4ff] flex items-center justify-center text-blue-500">
            <Sparkles size={32} />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-[#31456a] leading-tight tracking-tight">
            Tactile <br /> <span className="text-blue-500">Design.</span>
          </h1>
          <p className="text-[#31456a]/60 text-xl md:text-2xl font-medium leading-relaxed max-w-md">
            Interfaces you can almost feel. Experience the depth of modern craftsmanship.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="px-10 py-5 bg-blue-500 text-white rounded-2xl font-bold text-xl shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3),4px_4px_8px_rgba(0,0,0,0.1)] hover:scale-[0.98] active:scale-95 transition-all">
              Add to Cart
            </button>
            <button className="px-10 py-5 bg-[#D1D9E6] text-[#31456a] rounded-2xl font-bold text-xl shadow-[6px_6px_12px_#b8bec9,-6px_-6px_12px_#ebf4ff] hover:shadow-[inset_4px_4px_8px_#b8bec9,inset_-4px_-4px_8px_#ebf4ff] transition-all">
              Preview Specs
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-[#D1D9E6] rounded-[3rem] shadow-[20px_20px_60px_#b8bec9,-20px_-20px_60px_#ebf4ff] p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            <div className="relative h-full w-full bg-white/40 backdrop-blur-md rounded-[2rem] border border-white/50 shadow-inner flex items-center justify-center">
              <SmartImage className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl" />
            </div>
          </div>
          <div className="absolute -top-6 -right-6 px-8 py-4 bg-white/80 backdrop-blur-lg rounded-full shadow-xl border border-white text-[#31456a] font-black italic">
            $1,499.00
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 14: Industrial Blueprint (Azul técnico, rejillas, medidas, minimalismo funcional)
  BlueprintShop: () => (
    <div className="w-full min-h-screen bg-[#003366] text-white p-8 md:p-20 font-mono relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '200px 200px' }} />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between min-h-[80vh] relative z-10">
        <div className="flex justify-between items-start border-b border-white/20 pb-12">
          <div className="space-y-4">
            <div className="text-xs tracking-[0.4em] opacity-60 uppercase">System Specification // Ver. 1.0.4</div>
            <h1 className="text-6xl md:text-[10rem] font-bold leading-none tracking-tighter uppercase italic">
              STRUCT <br /> GEAR.
            </h1>
          </div>
          <div className="hidden md:block text-right space-y-2 opacity-40 text-[10px] uppercase">
            <div>REF_NO: 0991-X88</div>
            <div>TOLERANCE: +/- 0.001</div>
            <div>MATERIAL: REINFORCED_POLY</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 items-center">
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 border border-white/20 bg-white/5 backdrop-blur-sm space-y-4">
              <div className="flex justify-between text-xs opacity-60">
                <span>COMPONENT_ID</span>
                <span>STATUS: STABLE</span>
              </div>
              <p className="text-xl leading-relaxed">
                Precision engineered apparel for high-performance environments. Every seam calculated for maximum durability.
              </p>
            </div>
            <button className="w-full py-6 bg-white text-[#003366] font-black text-2xl hover:bg-cyan-400 transition-colors uppercase italic shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Initialize Order
            </button>
          </div>
          <div className="lg:col-span-8 relative">
             <div className="aspect-video bg-white/5 border border-white/20 relative group overflow-hidden">
               <div className="absolute top-4 left-4 text-[10px] opacity-40">XY_AXIS_ALIGNMENT</div>
               <div className="absolute bottom-4 right-4 text-[10px] opacity-40">MEASUREMENT_SCALE: 1:1</div>
               <SmartImage className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity" />
               <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10" />
               {/* Decorative lines */}
               <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10" />
               <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/10" />
             </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-12 text-xs font-bold opacity-40 uppercase tracking-widest border-t border-white/20 pt-8">
          <div className="flex items-center gap-2"><Box size={14} /> Modular Design</div>
          <div className="flex items-center gap-2"><Shield size={14} /> Load Tested</div>
          <div className="flex items-center gap-2"><Cpu size={14} /> Tech Integrated</div>
        </div>
      </div>
    </div>
  ),

  // Variante 15: Bauhaus Revival (Colores primarios, formas básicas, equilibrio asimétrico)
  BauhausShop: () => (
    <div className="w-full min-h-screen bg-[#EBE7E0] flex items-center justify-center p-8 font-sans overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-0 border-[4px] border-black bg-white shadow-[30px_30px_0px_rgba(0,0,0,0.1)]">
        <div className="lg:col-span-7 p-12 md:p-20 space-y-12 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black">
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-[#FF0000] border-2 border-black" />
            <div className="w-8 h-8 bg-[#0000FF] border-2 border-black rounded-full" />
            <div className="w-8 h-8 bg-[#FFFF00] border-2 border-black rotate-45" />
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black text-black leading-[0.8] tracking-tighter uppercase">
            FORM <br /> FOLLOWS <br /> <span className="text-[#FF0000]">FUNCTION.</span>
          </h1>
          <p className="text-2xl font-bold text-black max-w-lg leading-tight uppercase">
            A new synthesis of art and industry. Essential items for the modern lifestyle.
          </p>
          <div className="flex gap-4 pt-8">
            <button className="px-12 py-6 bg-black text-white font-black text-2xl hover:bg-[#0000FF] transition-colors uppercase">
              Shop Now
            </button>
            <button className="px-12 py-6 border-4 border-black text-black font-black text-2xl hover:bg-[#FFFF00] transition-colors uppercase">
              Archive
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 grid grid-rows-2">
          <div className="bg-[#0000FF] p-1 border-b-[4px] border-black relative group overflow-hidden">
            <SmartImage className="w-full h-full object-cover grayscale mix-blend-overlay group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute bottom-6 left-6 bg-white border-2 border-black px-4 py-2 font-black text-xl uppercase italic">
              The Chair No. 1
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="bg-[#FFFF00] border-r-[4px] border-black p-8 flex flex-col justify-between">
              <div className="text-4xl font-black text-black uppercase tracking-tighter italic">40% <br /> OFF</div>
              <ArrowRight size={48} className="text-black" />
            </div>
            <div className="bg-white p-8 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
               <ShoppingCart size={80} className="relative z-10 text-black group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 16: Glitch Flux (Distorsión digital, capas vibrantes, estética de error)
  GlitchShop: () => (
    <div className="w-full min-h-screen bg-[#050505] flex items-center justify-center p-8 overflow-hidden font-mono text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-red-500 animate-[glitch-line_2s_infinite]" />
        <div className="absolute top-1/4 left-0 w-full h-[2px] bg-blue-500 animate-[glitch-line_3s_infinite]" />
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-green-500 animate-[glitch-line_1.5s_infinite]" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 border border-magenta-500 text-fuchsia-500 text-xs font-bold uppercase tracking-[0.4em] animate-pulse">
            S_Y_S_T_E_M_E_R_R_O_R // DROP_09
          </div>
          <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tighter uppercase relative">
            <span className="relative z-10">BROKEN</span>
            <span className="absolute top-1 left-1 text-cyan-500 opacity-70 z-0">BROKEN</span>
            <span className="absolute -top-1 -left-1 text-fuchsia-500 opacity-70 z-0">BROKEN</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-white">STYLE.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-md leading-relaxed">
            Embrace the digital decay. Limited edition apparel for the post-physical world.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="px-10 py-5 bg-white text-black font-black text-xl hover:bg-fuchsia-500 hover:text-white transition-all skew-x-[-10deg] shadow-[5px_5px_0px_#0ff]">
              GET ACCESS
            </button>
            <button className="px-10 py-5 border border-white/20 text-white font-black text-xl hover:bg-white/10 transition-all skew-x-[-10deg]">
              LOGS
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-fuchsia-600 to-cyan-600 opacity-20 blur-xl group-hover:opacity-50 transition-opacity" />
          <div className="relative aspect-square border-2 border-white/10 overflow-hidden bg-zinc-900">
            <SmartImage className="w-full h-full object-cover grayscale contrast-150 group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-fuchsia-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            <div className="absolute bottom-4 right-4 bg-black p-4 border border-white/20">
               <div className="text-[10px] opacity-40 uppercase mb-1 font-bold">Encrypted_Price</div>
               <div className="text-2xl font-black text-cyan-400 tracking-tighter">$???.??</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 17: Pastel Cloud (Suave, redondeado, gradientes, ambiente onírico)
  PastelCloud: () => (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#FDFCFB] to-[#E2D1C3] flex items-center justify-center p-8 font-sans overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-pink-100 rounded-full blur-[150px] opacity-60 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-100 rounded-full blur-[150px] opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-5xl w-full text-center space-y-12 relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/40 backdrop-blur-md rounded-full border border-white/60 text-pink-500 font-bold text-sm shadow-sm">
          <Gift size={18} />
          <span>Curated for you</span>
        </div>
        
        <h1 className="text-7xl md:text-[11rem] font-black text-slate-800 leading-[0.8] tracking-tighter">
          Soft <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">Dreams.</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-slate-500/80 max-w-2xl mx-auto font-medium leading-relaxed">
          Lightweight essentials for your daily ritual. Designed with comfort as the primary language.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <button className="px-12 py-6 bg-white text-slate-800 rounded-full font-black text-2xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
            Explore Shop
          </button>
          <button className="px-12 py-6 bg-slate-900 text-white rounded-full font-black text-2xl shadow-xl hover:bg-slate-800 transition-all">
            Join Club
          </button>
        </div>

        <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="aspect-square bg-white/20 rounded-3xl border border-white/40 p-4">
              <SmartImage className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // Variante 18: Brutalist Archive (Estética de archivo crudo, tipografía gigante, minimalismo de datos)
  ArchiveShop: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-16 font-sans">
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between min-h-[85vh]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b-8 border-black pb-16">
          <h1 className="text-9xl md:text-[18rem] font-black leading-[0.7] tracking-[2px] uppercase">
            ARCH <br /> IVE.
          </h1>
          <div className="space-y-8 max-w-sm pt-8">
            <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest italic">
              <Archive size={24} />
              <span>Catalog System // No. 001</span>
            </div>
            <p className="text-2xl font-bold leading-tight">
              A curated selection of industrial objects, vintage tech, and rare apparel. No branding. No noise. Just the essence.
            </p>
            <div className="flex flex-col gap-4">
               <button className="w-full py-6 bg-black text-white font-black text-2xl uppercase hover:bg-white hover:text-black border-4 border-black transition-all">
                 Enter Archive
               </button>
               <div className="flex justify-between text-xs font-black uppercase tracking-widest border-t-2 border-black pt-4">
                 <span>Items: 1,402</span>
                 <span>Updated: Daily</span>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b-8 border-black">
          {[
            { label: 'TECH', count: '412' },
            { label: 'WEAR', count: '856' },
            { label: 'OBJECTS', count: '134' }
          ].map((cat, i) => (
            <div key={i} className={`p-12 flex flex-col justify-between h-80 group cursor-pointer border-black ${i < 2 ? 'md:border-r-8' : ''} hover:bg-black hover:text-white transition-all`}>
               <span className="text-sm font-black">CATEGORY_0{i+1}</span>
               <div className="flex justify-between items-end">
                 <span className="text-6xl font-black uppercase italic">{cat.label}</span>
                 <span className="text-xl font-bold opacity-40 group-hover:opacity-100">[{cat.count}]</span>
               </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between py-8 text-xs font-black uppercase tracking-[0.5em] opacity-30">
          <span>Global Shipping</span>
          <span>Verified Authenticity</span>
          <span>Zero Marketing</span>
        </div>
      </div>
    </div>
  ),

  // Variante 19: Frosted 3D Glass (Capas profundas, luces dinámicas, iconos 3D)
  Glass3DShop: () => (
    <div className="w-full min-h-screen bg-[#0f172a] flex items-center justify-center p-8 font-sans overflow-hidden relative">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[150px] opacity-30 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600 rounded-full blur-[150px] opacity-30 animate-pulse" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12">
          <div className="p-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl w-fit shadow-2xl">
            <Layers size={40} className="text-blue-400" />
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tight">
            Depth <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Layered.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-md leading-relaxed">
            The next generation of shopping experiences. Immerse yourself in a world of curated digital luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-[2rem] font-bold text-2xl shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all">
              Explore Drops
            </button>
            <button className="px-12 py-6 bg-white/5 backdrop-blur-2xl border border-white/10 text-white rounded-[2rem] font-bold text-2xl hover:bg-white/10 transition-all">
              Join Waitlist
            </button>
          </div>
        </div>

        <div className="relative group perspective-1000">
           <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           <div className="relative aspect-square bg-white/5 backdrop-blur-3xl border border-white/20 rounded-[4rem] p-12 shadow-2xl transform transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-12">
              <div className="absolute inset-4 border border-white/10 rounded-[3rem] pointer-events-none" />
              <div className="h-full w-full bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] flex items-center justify-center relative overflow-hidden">
                <SmartImage className="w-3/4 h-3/4 object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-8 left-8 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 p-10 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[3rem] shadow-2xl space-y-2">
                 <div className="text-blue-400 font-bold uppercase tracking-widest text-xs">Featured Item</div>
                 <div className="text-3xl font-black text-white italic">NEO_CASE_v2</div>
                 <div className="text-2xl font-light text-white/60">$899.00</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  ),

  // Variante 20: Hyper-Pop Shop (Estética saturada, neón, tipografía display, máxima energía)
  HyperPopShop: () => (
    <div className="w-full min-h-screen bg-[#FF00FF] flex items-center justify-center p-8 overflow-hidden font-sans relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#00FFFF] rounded-full blur-[80px] animate-bounce" style={{ animationDuration: '4s' }} />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FFFF00] rounded-full blur-[80px] animate-bounce" style={{ animationDuration: '5s' }} />
      
      <div className="max-w-6xl w-full bg-black border-[10px] border-white shadow-[25px_25px_0px_#00FFFF] p-12 md:p-20 relative z-10 text-center space-y-12 rotate-1">
        <div className="inline-block bg-[#FFFF00] text-black px-8 py-3 font-black text-2xl uppercase italic -rotate-3 border-4 border-white shadow-[8px_8px_0px_white]">
          MEGA DROP IS HERE!
        </div>
        
        <h1 className="text-8xl md:text-[14rem] font-black text-white leading-[0.75] tracking-tighter uppercase italic drop-shadow-[10px_10px_0px_#FF00FF]">
          WANT <br /> <span className="text-[#00FFFF]">MORE.</span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <p className="text-2xl md:text-4xl font-black text-white max-w-md uppercase tracking-tighter italic">
            Don{"'"}t wait. Don{"'"}t think. Just buy.
          </p>
          <div className="flex gap-4">
             <button className="px-16 py-8 bg-[#00FFFF] text-black font-black text-4xl uppercase italic hover:scale-110 active:scale-95 transition-all shadow-[10px_10px_0px_white] border-4 border-black">
               SHOP!
             </button>
             <button className="px-16 py-8 bg-[#FFFF00] text-black font-black text-4xl uppercase italic hover:scale-110 active:scale-95 transition-all shadow-[10px_10px_0px_white] border-4 border-black">
               FREE!
             </button>
          </div>
        </div>

        <div className="flex justify-center gap-12 pt-12">
          {[ShoppingCart, Star, Zap, Heart].map((Icon, i) => (
            <div key={i} className="p-4 bg-white rounded-full border-4 border-black shadow-[5px_5px_0px_#00FFFF] hover:scale-125 transition-transform cursor-pointer">
               <Icon size={40} className="text-black" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

