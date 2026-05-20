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
  )
};
