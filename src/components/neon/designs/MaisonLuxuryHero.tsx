"use client";

import React from 'react';
import { SmartImage } from '../SmartImage';
import { ArrowRight, ShoppingBag, User, Search, ChevronRight } from 'lucide-react';

export const MaisonLuxuryHero = {
  // Variante 01: Classic Elegant (Inspirada en la foto)
  Classic: () => (
    <div className="w-full min-h-[800px] relative bg-white overflow-hidden flex flex-col">
      {/* Background Image with White Fade-out */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-white z-10 hidden md:block" />
        <div className="flex-1 relative">
          <SmartImage className="absolute inset-0" />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent z-10" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-12 py-8 border-b border-zinc-100">
        <h1 className="text-2xl font-black tracking-tighter text-black uppercase">MAISON</h1>
        <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
          <span className="text-black cursor-pointer">New Arrivals</span>
          <span className="hover:text-black cursor-pointer transition-colors">Collections</span>
          <span className="hover:text-black cursor-pointer transition-colors">Our Story</span>
          <span className="hover:text-black cursor-pointer transition-colors">Boutiques</span>
        </div>
        <div className="flex items-center gap-6 text-black">
          <Search size={20} className="cursor-pointer" />
          <User size={20} className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center">2</span>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-12 md:px-24">
        <div className="max-w-2xl space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-yellow-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Autumn / Winter 2024</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-serif italic text-black leading-[0.9] tracking-tighter">
            The Art of<br/>Timeless<br/>Elegance
          </h1>
          
          <p className="text-zinc-500 text-lg max-w-md leading-relaxed">
            Discover our curated collection of exceptional pieces, crafted with uncompromising attention to detail.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-10 py-5 bg-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center gap-3">
              Explore Collection
            </button>
            <button className="px-10 py-5 bg-transparent border border-zinc-200 text-black text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Stats Footer */}
      <div className="relative z-20 border-t border-zinc-100 px-12 py-12 flex flex-wrap gap-20">
        <div>
          <p className="text-3xl font-black text-black">150+</p>
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Exclusive Pieces</p>
        </div>
        <div>
          <p className="text-3xl font-black text-black">48</p>
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Global Boutiques</p>
        </div>
        <div>
          <p className="text-3xl font-black text-black">1892</p>
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Est. Paris</p>
        </div>
      </div>
    </div>
  ),

  // Variante 02: Maison Dark
  Dark: () => (
    <div className="w-full min-h-[700px] relative bg-zinc-950 overflow-hidden flex items-center">
      <SmartImage className="absolute inset-0 opacity-40 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
      
      <div className="relative z-10 w-full px-12 md:px-24 text-center">
        <span className="text-yellow-500 font-mono text-sm tracking-[0.5em] uppercase mb-6 block">Premium Selection</span>
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-12 italic">Luxury in every detail.</h1>
        <div className="w-px h-24 bg-gradient-to-b from-yellow-500 to-transparent mx-auto mb-12" />
        <button className="px-12 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all font-bold tracking-widest uppercase text-xs">
          View Collections
        </button>
      </div>
    </div>
  ),

  // Variante 03: Maison Split
  Split: () => (
    <div className="w-full min-h-[600px] flex flex-col md:flex-row bg-white">
      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
        <h1 className="text-5xl font-black text-black mb-6 tracking-tighter">PURE<br/>MINIMALISM.</h1>
        <p className="text-zinc-500 mb-8 max-w-sm">La belleza de lo simple. Diseños que no necesitan gritar para ser escuchados.</p>
        <div className="flex items-center gap-4 text-black font-bold text-sm cursor-pointer group">
          <span>Explore Now</span>
          <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
        <SmartImage className="absolute inset-0" />
      </div>
    </div>
  ),

  // Variante 04: Maison Golden Border
  GoldenBorder: () => (
    <div className="w-full min-h-[700px] bg-[#0c0c0c] flex items-center justify-center p-8 md:p-24 relative overflow-hidden">
      <SmartImage className="absolute inset-0 opacity-20" isBackground />
      <div className="relative z-10 w-full max-w-5xl border border-yellow-500/30 p-12 md:p-24 flex flex-col items-center text-center space-y-8 backdrop-blur-sm">
        <div className="w-12 h-12 border border-yellow-500 rounded-full flex items-center justify-center mb-4">
          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
        </div>
        <h2 className="text-yellow-500 font-mono text-xs tracking-[0.6em] uppercase">Limited Edition</h2>
        <h1 className="text-5xl md:text-7xl font-serif text-white italic tracking-tighter leading-tight">
          The Excellence of<br/>Handcrafted Details.
        </h1>
        <p className="text-zinc-500 text-lg max-w-md font-light">Cada pieza es única, diseñada para perdurar a través de las generaciones.</p>
        <button className="mt-8 px-12 py-4 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-yellow-400 transition-all">
          Discover Craftsmanship
        </button>
      </div>
    </div>
  ),

  // Variante 05: Maison Editorial
  Editorial: () => (
    <div className="w-full min-h-screen bg-zinc-100 flex flex-col font-serif">
      <div className="border-b border-zinc-300 py-6 px-12 flex justify-between items-center text-black">
        <span className="text-xs font-bold uppercase tracking-widest">Issue No. 01</span>
        <h1 className="text-3xl font-black tracking-tighter">MAISON JOURNAL</h1>
        <span className="text-xs font-bold uppercase tracking-widest">Paris / 2024</span>
      </div>
      <div className="flex-1 flex flex-col md:flex-row border-b border-zinc-300">
        <div className="w-full md:w-2/3 p-12 md:p-24 flex flex-col justify-center space-y-12">
          <h1 className="text-7xl md:text-[10vw] font-black text-black leading-[0.8] tracking-tighter">
            BEYOND<br/>FASHION.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-300 pt-12 font-sans">
            <p className="text-zinc-600 text-sm leading-relaxed uppercase tracking-wider font-bold">
              Explorando las raíces del diseño contemporáneo a través del lente de la alta costura. Una visión sin compromisos.
            </p>
            <div className="flex flex-col gap-4">
              <button className="w-fit flex items-center gap-4 text-black font-black uppercase text-xs border-b-2 border-black pb-2">
                Read Article <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 relative min-h-[500px] border-l border-zinc-300">
          <SmartImage className="absolute inset-0" />
        </div>
      </div>
    </div>
  ),

  // Variante 06: Maison Glass Cards
  GlassCards: () => (
    <div className="w-full min-h-[800px] relative bg-zinc-200 overflow-hidden flex items-center justify-center p-8">
      <SmartImage className="absolute inset-0 scale-110 blur-sm" isBackground />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        <div className="col-span-1 md:col-span-2 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[3rem] p-12 md:p-20 flex flex-col justify-end min-h-[500px] shadow-2xl">
          <h1 className="text-6xl md:text-8xl font-serif italic text-white mb-8 tracking-tighter">Liquid Silk.</h1>
          <p className="text-white/80 text-xl max-w-md font-light leading-relaxed">Nuestra nueva colección de seda natural, inspirada en el movimiento del agua.</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="bg-white/40 backdrop-blur-xl border border-white/40 rounded-[3rem] p-10 flex-1 flex flex-col justify-between shadow-xl">
            <ShoppingBag className="text-white" size={32} />
            <p className="text-white font-bold uppercase tracking-widest text-xs">Shop the look</p>
          </div>
          <div className="bg-black/80 backdrop-blur-md rounded-[3rem] p-10 flex-1 flex flex-col justify-center items-center text-center shadow-xl group cursor-pointer overflow-hidden relative">
            <div className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 text-white group-hover:text-black font-black text-xl tracking-tighter">VIEW ALL<br/>COLLECTIONS</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 07: Maison Minimal Shop
  MinimalShop: () => (
    <div className="w-full py-20 px-8 bg-white flex flex-col items-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-[4/5] bg-zinc-100 overflow-hidden rounded-sm group">
          <SmartImage className="absolute inset-0 group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute top-6 left-6 px-4 py-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest">
            In Stock
          </div>
        </div>
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-zinc-400 font-bold uppercase tracking-[0.4em] text-[10px]">Ready to Wear</p>
            <h1 className="text-6xl font-serif text-black tracking-tight leading-tight">Oversized Cashmere Coat</h1>
            <p className="text-2xl font-light text-zinc-900">$2,450.00</p>
          </div>
          <p className="text-zinc-500 leading-relaxed max-w-md">
            Un abrigo atemporal fabricado con el cashmere más fino del mundo. Corte minimalista para una silueta impecable en cualquier ocasión.
          </p>
          <div className="flex flex-col gap-4">
            <button className="w-full py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:opacity-90 transition-opacity">
              Add to Shopping Bag
            </button>
            <button className="w-full py-5 border border-zinc-200 text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-50 transition-all">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 08: Maison Archive
  Archive: () => (
    <div className="w-full py-32 px-12 bg-white flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <h1 className="text-8xl md:text-[12vw] font-black text-black tracking-tighter leading-none">ARCHIVE.</h1>
          <p className="text-zinc-400 font-bold uppercase tracking-[0.5em] text-[10px] mb-4">Established 1892</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 space-y-12">
            <div className="aspect-square bg-zinc-200 relative overflow-hidden">
              <SmartImage className="absolute inset-0 grayscale" />
            </div>
            <p className="text-zinc-500 font-serif italic text-2xl leading-tight">
              "La elegancia no consiste en destacar, sino en ser recordado."
            </p>
          </div>
          <div className="md:col-span-7 space-y-12 md:pt-32">
            <div className="aspect-video bg-zinc-200 relative overflow-hidden">
              <SmartImage className="absolute inset-0" />
            </div>
            <div className="max-w-md space-y-6">
              <h3 className="text-2xl font-bold text-black uppercase tracking-tighter">The Heritage Collection</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Nuestros archivos históricos reinterpretados para la era moderna. Una fusión perfecta de tradición y vanguardia técnica.
              </p>
              <button className="flex items-center gap-4 text-black font-black uppercase text-xs group">
                Explore Archive <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 09: Maison Video Focus
  VideoFocus: () => (
    <div className="w-full h-screen relative bg-black flex flex-col items-center justify-center text-white overflow-hidden">
      <SmartImage className="absolute inset-0 opacity-60" isBackground />
      <div className="relative z-10 text-center space-y-8 px-8">
        <h2 className="text-xs font-bold tracking-[1em] uppercase text-white/50">Maison Cinema</h2>
        <h1 className="text-7xl md:text-9xl font-serif italic tracking-tighter leading-none">The Silence of Luxury</h1>
        <div className="pt-12">
          <div className="w-20 h-20 border border-white/30 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:scale-110 transition-transform group">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
          </div>
          <p className="mt-8 text-xs font-bold uppercase tracking-widest text-white/40">Play Film</p>
        </div>
      </div>
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end border-t border-white/10 pt-8">
        <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-white/50">
          <span>SS24</span>
          <span>Film by Studio Maison</span>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white/20 rounded-full" />
          <div className="w-2 h-2 bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  ),

  // Variante 10: Maison Geometric Grid
  GeometricGrid: () => (
    <div className="w-full py-20 px-8 bg-[#f8f8f8] flex items-center justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
        <div className="md:col-span-2 relative overflow-hidden bg-zinc-200">
          <SmartImage className="absolute inset-0" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="text-3xl font-serif italic mb-2">New Season</h3>
            <button className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1">Shop Now</button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex-1 relative overflow-hidden bg-white p-8 flex flex-col justify-between">
            <h4 className="text-xl font-black text-black tracking-tighter">ACCESSORIES</h4>
            <ArrowRight size={24} className="text-black self-end" />
          </div>
          <div className="flex-1 relative overflow-hidden bg-zinc-200">
            <SmartImage className="absolute inset-0 grayscale" />
          </div>
        </div>
        <div className="relative overflow-hidden bg-zinc-900 p-10 flex flex-col justify-between text-white">
          <div className="space-y-4">
            <div className="w-10 h-10 bg-yellow-500 rounded-full" />
            <h3 className="text-2xl font-bold tracking-tighter leading-none">JOIN THE<br/>MAISON CLUB</h3>
          </div>
          <p className="text-zinc-500 text-xs leading-relaxed">Acceso exclusivo a preventas, eventos privados y servicios de concierge.</p>
          <button className="w-full py-4 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">Sign Up</button>
        </div>
      </div>
    </div>
  ),

  // Variante 11: Maison Vertical Typography
  VerticalTypography: () => (
    <div className="w-full min-h-[800px] bg-white flex relative overflow-hidden">
      <div className="w-24 border-r border-zinc-100 flex flex-col items-center justify-between py-12">
        <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400">Since 1892</span>
        <div className="w-px h-24 bg-zinc-200" />
        <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold uppercase tracking-[0.5em] text-black">Paris, FR</span>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center px-12 md:px-24">
          <div className="relative">
            <h1 className="text-[12vw] font-black text-black leading-none tracking-tighter mix-blend-difference">
              L'ART<br/>DE VIVRE.
            </h1>
            <div className="absolute top-1/2 -right-24 w-64 h-96 -translate-y-1/2 z-[-1]">
              <SmartImage className="absolute inset-0 grayscale contrast-125" />
            </div>
          </div>
        </div>
        <div className="h-32 border-t border-zinc-100 flex items-center justify-between px-12 md:px-24">
          <p className="text-xs text-zinc-400 max-w-xs uppercase tracking-widest font-bold">La expresión máxima del lujo contemporáneo en cada detalle.</p>
          <button className="text-xs font-black uppercase tracking-[0.3em] border-b-2 border-black pb-1">Discover More</button>
        </div>
      </div>
    </div>
  ),

  // Variante 12: Maison Parallax Reveal
  ParallaxReveal: () => (
    <div className="w-full min-h-[700px] bg-zinc-900 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <SmartImage className="absolute inset-0 scale-125 opacity-30 blur-sm" isBackground />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent to-white/50 mb-8" />
        <h2 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.6em] mb-4">The New Collection</h2>
        <div className="relative group">
          <h1 className="text-7xl md:text-9xl font-serif italic text-white tracking-tighter">Ephemeral.</h1>
          <div className="absolute -inset-4 border border-white/0 group-hover:border-white/20 transition-all duration-700" />
        </div>
        <p className="text-white/60 mt-12 text-center max-w-sm font-light leading-relaxed">Capturando la belleza de lo transitorio. Una visión efímera del lujo.</p>
        <button className="mt-12 px-12 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-yellow-500 transition-all">Explore</button>
      </div>
    </div>
  ),

  // Variante 13: Maison Brutalist
  Brutalist: () => (
    <div className="w-full min-h-screen bg-[#ffff00] p-4 md:p-12 flex flex-col gap-4">
      <div className="flex justify-between items-center border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-4xl font-black italic tracking-tighter">MAISON!!!</h1>
        <div className="flex gap-6 font-bold uppercase text-xs">
          <span className="cursor-pointer hover:underline">Shop</span>
          <span className="cursor-pointer hover:underline">Archive</span>
          <span className="cursor-pointer hover:underline">Contact</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row gap-4">
        <div className="flex-1 border-4 border-black bg-white p-8 md:p-16 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-7xl md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase">
            Raw<br/>Luxury<br/>Only.
          </h2>
          <button className="w-fit px-10 py-6 bg-black text-white font-black text-xl uppercase italic hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-[4px_4px_0px_0px_rgba(255,255,0,1)]">
            GET IT NOW
          </button>
        </div>
        <div className="w-full md:w-1/3 border-4 border-black relative min-h-[400px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
          <SmartImage className="absolute inset-0 grayscale contrast-150" />
          <div className="absolute top-4 right-4 bg-black text-[#ffff00] px-4 py-2 font-black uppercase text-sm rotate-12">
            NEW DROP
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 14: Maison Soft Pastel
  SoftPastel: () => (
    <div className="w-full min-h-[700px] bg-[#fdf6f0] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-4xl w-full px-8 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 aspect-[3/4] bg-white rounded-[4rem] p-4 shadow-2xl rotate-[-3deg] relative overflow-hidden">
          <SmartImage className="absolute inset-0 m-4 rounded-[3rem]" />
        </div>
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
          <span className="text-pink-400 font-bold uppercase tracking-widest text-xs">Maison Intimates</span>
          <h1 className="text-5xl md:text-7xl font-serif italic text-zinc-800 leading-tight">Softness as a<br/>Statement.</h1>
          <p className="text-zinc-500 font-light leading-relaxed">Materiales que acarician la piel. Diseños que celebran la feminidad en su estado más puro y delicado.</p>
          <button className="px-10 py-4 rounded-full bg-zinc-800 text-white text-xs font-bold uppercase tracking-widest hover:bg-pink-400 transition-colors shadow-lg">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 15: Maison High-Tech Atelier
  HighTech: () => (
    <div className="w-full min-h-[800px] bg-zinc-950 flex flex-col font-mono text-zinc-500 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-500/20 via-transparent to-transparent" />
        <div className="w-full h-full border-[0.5px] border-zinc-800 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>
      <div className="p-8 border-b border-zinc-800 flex justify-between items-center relative z-10">
        <div className="flex gap-4 items-center">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
          <span className="text-[10px] uppercase tracking-tighter">System Status: Optimal</span>
        </div>
        <h1 className="text-white font-black tracking-tighter">MAISON_ATELIER_V2</h1>
        <span className="text-[10px] uppercase">LAT: 48.8566° N | LON: 2.3522° E</span>
      </div>
      <div className="flex-1 flex flex-col md:flex-row relative z-10">
        <div className="w-full md:w-1/2 p-12 md:p-24 space-y-12">
          <div className="space-y-4">
            <span className="text-yellow-500 text-xs">// PROJECT_LUXURY_ENGINEERING</span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              REDEFINING<br/>PRECISION.
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-8 text-[10px] border-t border-zinc-800 pt-8">
            <div className="space-y-2">
              <span className="text-zinc-400 uppercase">Material:</span>
              <p className="text-white">CARBON-INFUSED SILK</p>
            </div>
            <div className="space-y-2">
              <span className="text-zinc-400 uppercase">Durability:</span>
              <p className="text-white">99.9% RATING</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-zinc-100 text-black font-black uppercase text-[10px] tracking-widest hover:bg-yellow-500 transition-all">
            Initiate Protocol
          </button>
        </div>
        <div className="w-full md:w-1/2 relative border-l border-zinc-800 bg-zinc-900 overflow-hidden">
          <SmartImage className="absolute inset-0 opacity-50 grayscale contrast-150" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-transparent" />
          {/* Scanning Line Effect */}
          <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.5)] animate-[scan_4s_linear_infinite]" />
        </div>
      </div>
    </div>
  ),

  // Variante 16: Maison Slider Layout
  Slider: () => (
    <div className="w-full min-h-[700px] bg-white flex flex-col">
      <div className="flex-1 relative flex overflow-hidden">
        <div className="w-full md:w-1/2 relative">
          <SmartImage className="absolute inset-0" />
          <div className="absolute bottom-12 left-12 flex gap-4">
            <div className="w-12 h-12 bg-white flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-all">
              <ArrowRight size={20} className="rotate-180" />
            </div>
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center cursor-pointer hover:bg-zinc-800 transition-all">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 p-24 flex-col justify-center space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-bold text-zinc-300">01 / 05</span>
            <h1 className="text-6xl font-serif text-black leading-tight">The Modernist<br/>Silhouette</h1>
          </div>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-md">Explorando formas geométricas y cortes arquitectónicos en nuestra colección de invierno.</p>
          <button className="w-fit px-12 py-5 border-2 border-black text-black font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">
            View Lookbook
          </button>
        </div>
      </div>
      <div className="h-32 border-t border-zinc-100 grid grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="border-r border-zinc-100 relative group cursor-pointer overflow-hidden">
            <SmartImage className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-black/50 group-hover:text-white mix-blend-difference">Look {i}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  // Variante 17: Maison Asymmetric Grid
  Asymmetric: () => (
    <div className="w-full min-h-[900px] bg-zinc-50 py-24 px-8 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7 space-y-12">
          <h1 className="text-7xl md:text-9xl font-black text-black tracking-tighter leading-[0.8]">
            BREAKING<br/>THE<br/>RULES.
          </h1>
          <div className="aspect-[16/9] bg-zinc-200 relative overflow-hidden rounded-br-[10rem]">
            <SmartImage className="absolute inset-0" />
          </div>
        </div>
        <div className="md:col-span-5 space-y-12 md:pt-48">
          <div className="aspect-square w-2/3 bg-zinc-200 relative overflow-hidden rounded-tl-[10rem] ml-auto">
            <SmartImage className="absolute inset-0 grayscale" />
          </div>
          <div className="space-y-6 max-w-sm">
            <p className="text-zinc-500 text-lg font-light leading-relaxed">
              La asimetría es la forma más honesta de equilibrio. Nuestra visión para 2024 desafía las estructuras convencionales.
            </p>
            <button className="px-12 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:rounded-full transition-all duration-500">
              Read Our Vision
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 18: Maison Monochrome Focus
  Monochrome: () => (
    <div className="w-full min-h-[700px] bg-white flex flex-col md:flex-row border-y border-black">
      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black">
        <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-none">MONO.<br/>CHROME.</h1>
        <div className="space-y-8">
          <p className="text-black text-sm font-bold uppercase tracking-widest">Absence of color, presence of style.</p>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-black rounded-full" />
            <div className="w-12 h-12 bg-zinc-100 border border-black rounded-full" />
            <div className="w-12 h-12 bg-zinc-400 rounded-full" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
        <SmartImage className="absolute inset-0 grayscale contrast-150 brightness-75 group-hover:scale-110 transition-transform duration-1000" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
          <button className="px-12 py-5 border-2 border-white text-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
            Enter The Void
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 19: Maison Luxury Newsletter
  Newsletter: () => (
    <div className="w-full min-h-[600px] bg-zinc-100 flex items-center justify-center p-8 md:p-24">
      <div className="w-full max-w-5xl bg-white border border-zinc-200 p-12 md:p-24 flex flex-col md:flex-row gap-16 items-center shadow-sm">
        <div className="w-full md:w-1/3 aspect-[3/4] relative overflow-hidden shadow-2xl">
          <SmartImage className="absolute inset-0" />
        </div>
        <div className="w-full md:w-2/3 space-y-10">
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-yellow-600 uppercase tracking-[0.4em]">The Inner Circle</h3>
            <h1 className="text-5xl font-serif text-black leading-tight">Privilege Awaits.</h1>
            <p className="text-zinc-500 leading-relaxed">Suscríbete para recibir invitaciones exclusivas a eventos de preventa y lanzamientos de edición limitada.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex-1 bg-zinc-50 border-b-2 border-zinc-200 px-0 py-4 text-xs font-bold tracking-widest focus:border-black outline-none transition-colors"
            />
            <button className="px-12 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all">
              Subscribe
            </button>
          </div>
          <p className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">Privacy guaranteed. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  ),

  // Variante 20: Maison Final Showcase
  FinalShowcase: () => (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center p-12 space-y-12">
        <div className="w-20 h-[1px] bg-black" />
        <h1 className="text-7xl md:text-[10vw] font-serif italic text-black tracking-tighter leading-none">
          Maison<br/>Luxury.
        </h1>
        <p className="text-zinc-500 text-xl max-w-2xl font-light leading-relaxed">
          Cincuenta diseños, veinte variantes, una sola visión: La excelencia técnica al servicio de la belleza atemporal.
        </p>
        <div className="flex flex-wrap justify-center gap-12 pt-12">
          <div className="text-center space-y-2">
            <span className="text-3xl font-black text-black">D01</span>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Design Code</p>
          </div>
          <div className="text-center space-y-2">
            <span className="text-3xl font-black text-black">V20</span>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Variants Done</p>
          </div>
          <div className="text-center space-y-2">
            <span className="text-3xl font-black text-black">100%</span>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Stable Build</p>
          </div>
        </div>
      </div>
      <div className="h-24 bg-black flex items-center justify-center">
        <span className="text-white text-[10px] font-bold uppercase tracking-[1em] animate-pulse">Proceed to Design 02: Cyberpunk Terminal</span>
      </div>
    </div>
  )
};

