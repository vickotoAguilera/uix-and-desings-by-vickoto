"use client";

import React from 'react';
import { SmartImage } from '../SmartImage';
import { 
  Compass, 
  Map, 
  Mountain, 
  Palmtree, 
  Plane, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  ArrowRight, 
  Search, 
  Navigation,
  Tent,
  Waves,
  Camera,
  Globe,
  Wind,
  Sun,
  Sunrise,
  Backpack,
  Ship,
  Train,
  BaggageClaim,
  Binoculars,
  Tickets,
  Hotel,
  MapPinned,
  CloudSnow,
  Sparkles,
  Timer,
  Car,
  Shield,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const TravelAdventureHero = {
  // Variante 01: Classic Explorer (Full Background & Centered)
  Classic: () => (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover brightness-[0.6]" />
      </div>
      
      <div className="relative z-10 max-w-5xl space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">
          <Compass className="text-emerald-400 animate-spin-slow" size={16} />
          <span>Discover Your Next Adventure</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter">
          Explore the <br/> <span className="text-emerald-400 italic">Unexplored.</span>
        </h1>
        
        <p className="text-zinc-200 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Curated travel experiences for the bold, the curious, and the ones who seek to lose themselves in nature.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <button className="px-10 py-5 bg-emerald-500 text-white rounded-full font-black text-lg hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-900/40">
            Start Planning
          </button>
          <button className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all">
            Watch Story
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 px-12 flex justify-between items-end text-white/60 text-xs font-bold uppercase tracking-[0.3em]">
        <div className="flex items-center gap-4">
          <MapPin size={16} />
          <span>Patagonia, Argentina</span>
        </div>
        <div className="flex items-center gap-4">
          <Navigation size={16} />
          <span>49.32° S, 72.88° W</span>
        </div>
      </div>
    </div>
  ),

  // Variante 02: Modern Search (UI Focused & Clean)
  ModernSearch: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col pt-32 pb-12 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-16">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-none tracking-tight">
            Where to <br/> <span className="text-blue-600">Next?</span>
          </h1>
          <p className="text-slate-500 text-xl leading-relaxed">
            From tropical beaches to snowy peaks, find and book your perfect getaway in seconds.
          </p>
        </div>

        <div className="w-full bg-white p-4 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 space-y-2 border-r border-slate-100">
            <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
              <MapPin size={14} />
              <span>Location</span>
            </div>
            <input type="text" placeholder="Where are you going?" className="w-full bg-transparent font-bold text-slate-900 outline-none" />
          </div>
          <div className="p-4 space-y-2 border-r border-slate-100">
            <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
              <Calendar size={14} />
              <span>Check In</span>
            </div>
            <div className="font-bold text-slate-900">Add Dates</div>
          </div>
          <div className="p-4 space-y-2 border-r border-slate-100">
            <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
              <Users size={14} />
              <span>Travelers</span>
            </div>
            <div className="font-bold text-slate-900">2 Adults, 1 Room</div>
          </div>
          <button className="bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
            <Search size={20} />
            Search
          </button>
        </div>

        <div className="flex items-center gap-8 overflow-x-auto pb-4 no-scrollbar">
          {['Trending', 'Mountains', 'Beach', 'Desert', 'Arctic', 'Forest'].map((cat, i) => (
            <button key={i} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-600 font-bold hover:border-blue-600 hover:text-blue-600 transition-all whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  ),

  // Variante 03: Luxury Escape (Elegant & Minimal)
  LuxuryEscape: () => (
    <div className="w-full min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-6">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative aspect-[3/4] rounded-full overflow-hidden border-8 border-zinc-900">
          <SmartImage className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
        </div>
        
        <div className="order-1 lg:order-2 space-y-12 text-left">
          <div className="w-20 h-px bg-zinc-700" />
          <h1 className="text-6xl md:text-8xl font-light text-white leading-none tracking-tight font-serif">
            Redefining <br/> the Art of <br/> <span className="italic text-zinc-400">Leisure.</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-md">
            Exclusive destinations, private retreats, and unparalleled service for the discerning traveler.
          </p>
          <div className="space-y-6 pt-4">
            <button className="group flex items-center gap-4 text-white font-bold text-xl uppercase tracking-widest hover:text-zinc-400 transition-colors">
              Request Invitation
              <ArrowRight className="group-hover:translate-x-4 transition-transform" />
            </button>
            <div className="flex items-center gap-2 text-zinc-700 font-black text-xs uppercase tracking-[0.4em]">
              <Star size={14} />
              <span>World's Best Hotels 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 04: Mountain Peak (Split & Impactful)
  MountainPeak: () => (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-stretch">
      <div className="lg:w-1/2 relative min-h-[50vh]">
        <SmartImage className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-12 left-12">
          <Mountain size={48} className="text-white" />
        </div>
      </div>
      
      <div className="lg:w-1/2 bg-slate-900 flex flex-col justify-center p-12 lg:p-24 space-y-10">
        <div className="inline-flex items-center gap-2 text-emerald-400 font-black text-xs uppercase tracking-[0.3em]">
          <Tent size={20} />
          <span>High Altitude Treks</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
          CONQUER <br/> THE <span className="text-emerald-500 underline decoration-8 underline-offset-8">SUMMIT.</span>
        </h1>
        
        <p className="text-slate-400 text-xl leading-relaxed max-w-lg">
          Push your limits with our expert-led expeditions to the world's most iconic mountain ranges.
        </p>

        <div className="grid grid-cols-2 gap-8 pt-4">
          <div>
            <div className="text-white font-black text-4xl">8k+</div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Meters Altitude</div>
          </div>
          <div>
            <div className="text-white font-black text-4xl">15+</div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Global Peaks</div>
          </div>
        </div>

        <button className="w-full sm:w-auto px-12 py-6 bg-white text-slate-900 rounded-none font-black text-2xl hover:bg-emerald-500 hover:text-white transition-all">
          BOOK EXPEDITION
        </button>
      </div>
    </div>
  ),

  // Variante 05: Tropical Vibe (Bright & Energetic)
  TropicalVibe: () => (
    <div className="w-full min-h-screen bg-cyan-50 relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-200/50 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-yellow-200/50 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-8 relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-cyan-600 text-sm font-black shadow-lg">
            <Palmtree size={18} />
            <span>Paradise Found</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-slate-950 leading-none tracking-tighter">
            Tropical <br/> <span className="text-cyan-500">Dreaming.</span>
          </h1>
          
          <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium">
            Crystal clear waters, white sand beaches, and the warm island sun are calling your name.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-10 py-5 bg-cyan-500 text-white rounded-2xl font-black text-lg hover:bg-cyan-600 transition-all shadow-xl shadow-cyan-200">
              Explore Islands
            </button>
            <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl shadow-slate-200 flex items-center gap-2">
              <Waves size={20} className="text-cyan-500" />
              View Activities
            </button>
          </div>
        </div>

        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[4rem] border-2 border-white/60 -rotate-6" />
          <div className="relative h-full w-full rounded-[4rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <SmartImage className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 06: Road Trip (Retro & Fun)
  RoadTrip: () => (
    <div className="w-full min-h-screen bg-orange-400 flex flex-col items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white border-t-8 border-b-8 border-dashed border-white/20" />
      </div>

      <div className="max-w-5xl w-full text-center space-y-12 relative z-10">
        <div className="w-24 h-24 bg-white rounded-3xl rotate-12 flex items-center justify-center text-orange-500 mx-auto shadow-2xl">
          <Navigation size={48} fill="currentColor" />
        </div>
        
        <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic">
          ROAD <br/> <span className="text-orange-900">READY.</span>
        </h1>
        
        <p className="text-orange-950 text-xl md:text-3xl max-w-2xl mx-auto font-bold leading-tight">
          The open road is the best therapist. Rent a van, pick a route, and make memories that last a lifetime.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button className="px-12 py-6 bg-white text-orange-500 rounded-none font-black text-2xl hover:bg-orange-950 hover:text-white transition-all shadow-[8px_8px_0px_rgba(0,0,0,0.2)]">
            RENT A VAN
          </button>
          <div className="flex items-center gap-4 text-orange-900 font-black text-xl">
            <Backpack size={32} />
            <span>Over 500 Routes</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 07: Urban Jungle (City & Fast-paced)
  UrbanJungle: () => (
    <div className="w-full min-h-screen bg-zinc-900 relative flex items-center overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-[60%] opacity-50">
        <SmartImage className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      
      <div className="relative z-10 px-8 lg:px-24 max-w-4xl space-y-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400 rounded text-zinc-950 text-[10px] font-black uppercase tracking-[0.2em]">
          <Plane size={14} />
          <span>City Break Specials</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter">
          NEON <br/> <span className="text-yellow-400">NIGHTS.</span>
        </h1>
        
        <p className="text-zinc-400 text-xl md:text-2xl max-w-lg leading-relaxed font-medium">
          Discover the world's most vibrant cities. From rooftop bars to underground clubs, experience the urban pulse.
        </p>

        <div className="flex gap-6">
          <button className="px-10 py-5 bg-white text-zinc-950 rounded-full font-black text-lg hover:bg-yellow-400 transition-all">
            Find Destinations
          </button>
          <div className="flex -space-x-3 items-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-zinc-900 bg-zinc-800" />
            ))}
            <div className="pl-6 text-zinc-500 font-bold">Joined by 2k+ this week</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 08: Desert Oasis (Warm & Minimal)
  DesertOasis: () => (
    <div className="w-full min-h-screen bg-[#e6d5bc] relative flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 z-0 opacity-40">
        <SmartImage className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 max-w-4xl space-y-12">
        <Sunrise className="text-[#8b5e34] mx-auto" size={64} />
        
        <h1 className="text-6xl md:text-[11rem] font-black text-[#4a3728] leading-[0.8] tracking-tighter uppercase">
          DESERT <br/> <span className="text-transparent border-2 border-[#4a3728] bg-clip-text">SILENCE.</span>
        </h1>
        
        <p className="text-[#8b5e34] text-xl md:text-3xl max-w-2xl mx-auto font-medium leading-relaxed">
          Escape the noise. Find peace in the shifting sands and starlit skies of the world's great deserts.
        </p>

        <button className="px-16 py-8 bg-[#4a3728] text-[#e6d5bc] rounded-none font-black text-2xl hover:bg-[#8b5e34] transition-all tracking-widest">
          DISCOVER OASIS
        </button>
      </div>
    </div>
  ),

  // Variante 09: Winter Wonder (Cool & Glassy)
  WinterWonder: () => (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center p-8 overflow-hidden bg-blue-900">
      <div className="absolute inset-0">
        <SmartImage className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-900/40 to-blue-950" />
      </div>
      
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-blue-100 text-xs font-black uppercase tracking-widest">
            <Wind size={16} className="animate-pulse" />
            <span>Arctic Expeditions</span>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter">
            FROZEN <br/> <span className="text-blue-300">BEAUTY.</span>
          </h1>
          
          <p className="text-blue-100/70 text-xl md:text-2xl max-w-xl leading-relaxed">
            Witness the northern lights and explore ice caves in the most remote corners of the world.
          </p>
        </div>
        
        <div className="lg:col-span-5">
          <div className="p-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] space-y-8">
            <div className="flex items-center justify-between text-white">
              <div className="font-black text-2xl">Lofoten, Norway</div>
              <div className="text-blue-300 font-bold">-12°C</div>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden">
              <SmartImage className="w-full h-full object-cover" />
            </div>
            <button className="w-full py-5 bg-white text-blue-950 rounded-2xl font-black text-lg hover:bg-blue-100 transition-all">
              Book Winter Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 10: Adventure Catalog (Bento Style)
  AdventureCatalog: () => (
    <div className="w-full min-h-screen bg-white flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-black text-sm uppercase tracking-[0.4em]">
              <Globe size={20} />
              <span>World Catalog 2024</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-950 leading-none tracking-tighter">
              Pick Your <br/> <span className="text-emerald-500 italic">Vibe.</span>
            </h1>
          </div>
          <p className="text-slate-500 text-xl max-w-md leading-relaxed">
            No matter the terrain, we have the perfect adventure waiting for you. Choose your category and start exploring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-[800px] md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 relative rounded-[3rem] overflow-hidden group">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 space-y-2">
              <h3 className="text-3xl font-bold text-white">Mountain Treks</h3>
              <p className="text-white/60 text-sm">Reach new heights.</p>
            </div>
          </div>
          
          <div className="relative rounded-[3rem] overflow-hidden group">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Beach</h3>
            </div>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden group bg-emerald-500 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <Camera className="text-white" size={48} />
            <h3 className="text-2xl font-black text-white">Photo Tours</h3>
            <div className="px-4 py-1 bg-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">New ✨</div>
          </div>

          <div className="md:col-span-2 relative rounded-[3rem] overflow-hidden group">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            <div className="absolute inset-y-0 left-10 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white">Road Trips</h3>
              <p className="text-white/60 text-sm">Freedom on wheels.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 11: Cruise Voyager (Marine & Vast)
  CruiseVoyager: () => (
    <div className="w-full min-h-screen relative flex items-center justify-start px-8 lg:px-24 overflow-hidden bg-blue-950">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover opacity-50 brightness-75 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/40 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-4xl space-y-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-400/20 backdrop-blur-xl border border-blue-400/30 rounded-full text-blue-200 text-sm font-black uppercase tracking-[0.3em]">
          <Ship size={24} />
          <span>Luxury Ocean Voyages</span>
        </div>
        
        <h1 className="text-7xl md:text-[11rem] font-black text-white leading-[0.8] tracking-tighter">
          SAIL THE <br/> <span className="text-blue-400 italic">HORIZON.</span>
        </h1>
        
        <p className="text-blue-100/70 text-xl md:text-3xl max-w-2xl font-light leading-relaxed">
          Unforgettable journeys across the seven seas. Fine dining, world-class entertainment, and endless blue.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
          <button className="px-12 py-6 bg-white text-blue-950 rounded-none font-black text-2xl hover:bg-blue-400 hover:text-white transition-all shadow-2xl">
            View Cruises
          </button>
          <div className="text-blue-300 font-bold uppercase tracking-[0.2em] border-b-2 border-blue-400 pb-2">
            All-Inclusive Packages
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 12: Rail Adventure (Vintage & Scenic)
  RailAdventure: () => (
    <div className="w-full min-h-screen bg-[#2c1810] flex flex-col lg:flex-row">
      <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center space-y-12">
        <div className="inline-flex items-center gap-2 text-amber-500 font-black text-xs uppercase tracking-[0.4em]">
          <Train size={24} />
          <span>The Great Railway Journeys</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
          TRAVERSE <br/> THE <span className="text-amber-600 italic">CONTINENT.</span>
        </h1>
        
        <p className="text-amber-100/60 text-xl leading-relaxed max-w-lg font-medium">
          Experience the romance of rail travel. Scenic routes through majestic landscapes and historic cities.
        </p>

        <div className="grid grid-cols-2 gap-8 pt-4">
          <div className="space-y-1">
            <div className="text-white font-black text-4xl">45+</div>
            <div className="text-amber-500 text-xs font-bold uppercase tracking-widest">Global Routes</div>
          </div>
          <div className="space-y-1">
            <div className="text-white font-black text-4xl">1st</div>
            <div className="text-amber-500 text-xs font-bold uppercase tracking-widest">Class Luxury</div>
          </div>
        </div>

        <button className="px-12 py-6 bg-amber-600 text-white rounded-none font-black text-2xl hover:bg-amber-500 transition-all shadow-2xl shadow-black">
          BOOK YOUR CABIN
        </button>
      </div>

      <div className="lg:w-1/2 relative min-h-[50vh]">
        <SmartImage className="w-full h-full object-cover grayscale brightness-75 contrast-125" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c1810] via-transparent to-transparent lg:from-[#2c1810]/80 lg:to-transparent" />
      </div>
    </div>
  ),

  // Variante 13: Solo Backpacker (Raw & Authentic)
  SoloBackpacker: () => (
    <div className="w-full min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>

      <div className="max-w-6xl w-full text-center space-y-12 relative z-10">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-zinc-950 mx-auto shadow-2xl animate-pulse">
          <Backpack size={48} />
        </div>
        
        <h1 className="text-7xl md:text-[12rem] font-black text-white leading-[0.75] tracking-tighter uppercase italic">
          GO <br/> <span className="text-zinc-500 underline decoration-zinc-800 decoration-8 underline-offset-8">ALONE.</span>
        </h1>
        
        <p className="text-zinc-400 text-xl md:text-3xl max-w-3xl mx-auto font-bold leading-tight">
          One backpack, zero plans. Discover the world on your own terms and find who you truly are.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {[
            { label: 'Hostel Deals', icon: <Hotel /> },
            { label: 'Local Guides', icon: <MapPinned /> },
            { label: 'Safety First', icon: <Shield /> }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl text-white space-y-4 hover:bg-zinc-800 transition-all cursor-default">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                {item.icon}
              </div>
              <div className="text-xl font-black uppercase tracking-tighter">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // Variante 14: Safari Wild (Earth & Natural)
  SafariWild: () => (
    <div className="w-full min-h-screen bg-[#1a1a1a] relative flex items-center justify-center p-8 lg:p-24 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="relative aspect-square">
          <div className="absolute -inset-10 bg-orange-900/20 rounded-full blur-3xl" />
          <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-4 border-orange-900/30">
            <SmartImage className="w-full h-full object-cover sepia-[0.3] contrast-125" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-600 rounded-3xl p-8 flex flex-col justify-between shadow-2xl rotate-6">
            <Binoculars size={40} className="text-orange-100" />
            <div className="text-orange-100 font-black leading-tight uppercase tracking-tighter">The Big Five Experience</div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="text-orange-500 font-black text-xs uppercase tracking-[0.5em]">African Safari</div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
            INTO THE <br/> <span className="text-orange-600 italic">WILD.</span>
          </h1>
          <p className="text-zinc-400 text-xl leading-relaxed max-w-lg">
            Witness nature's raw beauty. Private game drives, luxury lodges, and unforgettable sunsets in the Savannah.
          </p>
          <button className="px-12 py-6 bg-orange-600 text-white rounded-none font-black text-2xl hover:bg-orange-500 transition-all shadow-2xl">
            START YOUR SAFARI
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 15: Last Minute (Urgent & Conversion)
  LastMinute: () => (
    <div className="w-full min-h-screen bg-rose-600 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-[4rem] shadow-2xl shadow-rose-900/50 p-12 md:p-24 text-center space-y-12 border border-rose-100">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-rose-100 rounded-full text-rose-600 font-black uppercase tracking-tighter animate-pulse">
          <Timer size={24} />
          <span>Flash Deals Ending Soon</span>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
            Pack Now. <br/> <span className="text-rose-600">Save 60%.</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto">
            Spontaneous travel is the best travel. Unbeatable prices on flights and hotels leaving in the next 48 hours.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="w-full md:w-auto px-12 py-6 bg-rose-600 text-white rounded-2xl font-black text-2xl hover:bg-rose-700 transition-all shadow-xl shadow-rose-200 flex items-center justify-center gap-4">
            See Deals <Tickets size={28} />
          </button>
          <button className="w-full md:w-auto px-12 py-6 bg-white border-2 border-rose-100 text-rose-600 rounded-2xl font-bold text-xl hover:bg-rose-50 transition-all">
            Join Waitlist
          </button>
        </div>

        <div className="pt-8 flex items-center justify-center gap-12 text-slate-400 font-bold text-sm uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} />
            <span>Secure Booking</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} />
            <span>4.9/5 User Rating</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 16: Zen Wellness (Calm & Spiritual)
  ZenWellness: () => (
    <div className="w-full min-h-screen bg-emerald-50 relative flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 z-0 opacity-20">
        <SmartImage className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 max-w-4xl space-y-12">
        <div className="w-24 h-24 rounded-full bg-emerald-500/20 backdrop-blur-2xl border border-emerald-400/30 flex items-center justify-center text-emerald-600 mx-auto animate-pulse">
          <Sparkles size={48} />
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-emerald-950 leading-none tracking-tighter">
          HEAL YOUR <br/> <span className="text-emerald-500">SOUL.</span>
        </h1>
        
        <p className="text-emerald-900/60 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Yoga retreats, meditation centers, and spiritual journeys in the world's most peaceful sanctuaries.
        </p>

        <div className="flex flex-col items-center gap-8">
          <button className="px-16 py-6 bg-emerald-500 text-white rounded-full font-black text-2xl hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-900/50">
            Find Your Retreat
          </button>
          
          <div className="flex items-center gap-12 text-emerald-900/40 text-sm font-black uppercase tracking-[0.4em]">
            <div className="flex items-center gap-3">
              <Sun size={16} />
              <span>Bali, Indonesia</span>
            </div>
            <div className="flex items-center gap-3">
              <Sunrise size={16} />
              <span>Rishikesh, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 17: Car Rental (Utility & Fast)
  CarRental: () => (
    <div className="w-full min-h-screen bg-slate-900 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest">
            <Car size={16} />
            <span>Premium Car Rental</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
            Your Keys <br/> to the <span className="text-blue-500 italic">World.</span>
          </h1>
          
          <p className="text-slate-400 text-xl leading-relaxed">
            Freedom starts with a full tank. Rent the latest models at over 1,500 locations worldwide. No hidden fees.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-800 rounded-3xl border border-slate-700 space-y-2">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Daily Rate</div>
              <div className="text-white font-black text-4xl">From $29</div>
              <div className="text-slate-600 text-xs">Full insurance included</div>
            </div>
            <div className="p-6 bg-blue-600 rounded-3xl space-y-2">
              <div className="text-blue-200 text-[10px] font-black uppercase tracking-widest">Fleet Size</div>
              <div className="text-white font-black text-4xl">10k+</div>
              <div className="text-blue-100/60 text-xs">Cars across the globe</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-20 bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="relative bg-slate-800 border border-slate-700 rounded-[3rem] p-10 shadow-2xl space-y-10">
            <div className="flex items-center justify-between">
              <div className="text-white font-black text-xl">Quick Booking</div>
              <Sparkles className="text-blue-400" />
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'SUV & 4x4', icon: <Mountain /> },
                { label: 'Convertibles', icon: <Sun /> },
                { label: 'Electric', icon: <Zap /> },
                { label: 'Luxury', icon: <Star /> }
              ].map((item, i) => (
                <div key={i} className="group flex items-center justify-between p-4 bg-slate-900/50 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="text-blue-500">{item.icon}</div>
                    <span className="text-white font-bold">{item.label}</span>
                  </div>
                  <ArrowRight size={20} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                </div>
              ))}
            </div>

            <button className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all">
              Search Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 18: Digital Nomad (Tech & Work)
  DigitalNomad: () => (
    <div className="w-full min-h-screen bg-violet-950 flex flex-col items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 select-none pointer-events-none flex flex-col justify-around text-[15vw] font-black text-white/5 leading-none whitespace-nowrap italic">
        <div className="-translate-x-20">WORK TRAVEL LIVE</div>
        <div className="translate-x-20">CO-WORKING FREEDOM</div>
        <div className="-translate-x-10">REMOTE NOMAD GLOBAL</div>
      </div>

      <div className="relative z-10 max-w-5xl text-center space-y-12">
        <Globe className="text-violet-400 mx-auto animate-spin-slow" size={64} />
        
        <h1 className="text-7xl md:text-[11rem] font-black text-white leading-[0.8] tracking-tighter uppercase">
          WORK FROM <br/> <span className="text-white/40">ANYWHERE.</span>
        </h1>
        
        <p className="text-violet-200 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed">
          Curated co-living spaces, high-speed Wi-Fi, and a community of digital nomads waiting for you in every corner of the world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
          <button className="px-12 py-6 bg-white text-violet-950 rounded-none font-black text-2xl hover:invert transition-all uppercase tracking-tighter">
            Join the Community
          </button>
          <button className="group flex items-center gap-4 text-white font-black text-xl uppercase tracking-widest">
            Explore Hubs
            <ArrowRight className="group-hover:translate-x-4 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 19: Flight Tracker (Modern & Data)
  FlightTracker: () => (
    <div className="w-full min-h-screen bg-slate-950 relative flex flex-col items-center justify-end pb-24 px-8 overflow-hidden">
      <div className="absolute inset-0">
        <SmartImage className="w-full h-full object-cover opacity-60 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full text-blue-300 text-xs font-black uppercase tracking-widest">
              <Plane size={16} />
              <span>Real-time Flight Status</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter">
              KNOW YOUR <br/> <span className="text-blue-400">SKY.</span>
            </h1>
            
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl leading-relaxed">
              Track any flight in the world. Real-time data, gate changes, and delay alerts delivered straight to your device.
            </p>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-slate-900/40 backdrop-blur-2xl border border-slate-800 rounded-[3rem] space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-blue-400 font-black text-4xl">180k</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest text-right">Daily <br/> Flights</div>
              </div>
              <div className="h-px bg-slate-800" />
              <button className="w-full py-5 bg-blue-500 text-slate-950 rounded-2xl font-black text-lg hover:bg-blue-400 transition-all">
                Track a Flight
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 20: Travel Showcase Final (Full Portfolio)
  TravelShowcaseFinal: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-black text-sm uppercase tracking-[0.4em]">
              <Globe size={20} />
              <span>Travel & Adventure</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-950 leading-none tracking-tighter">
              World <br/> <span className="text-emerald-500 italic">Unlimited.</span>
            </h1>
          </div>
          <p className="text-slate-500 text-xl max-w-md leading-relaxed">
            Explora todas nuestras categorías y encuentra la experiencia perfecta para tu próximo viaje. Desde el mar hasta el cielo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Cruises', count: '45 Routes', color: 'bg-blue-500', icon: <Ship /> },
            { label: 'Safari', count: '12 Parks', color: 'bg-orange-500', icon: <Binoculars /> },
            { label: 'City Breaks', count: '150 Cities', color: 'bg-yellow-500', icon: <Hotel /> },
            { label: 'Mountain', count: '80 Treks', color: 'bg-emerald-500', icon: <Mountain /> },
            { label: 'Road Trips', count: '200 Routes', color: 'bg-orange-600', icon: <Car /> },
            { label: 'Wellness', count: '30 Retreats', color: 'bg-teal-500', icon: <Sparkles /> }
          ].map((item, i) => (
            <div key={i} className="group p-10 bg-white border border-slate-200 rounded-[3rem] space-y-6 hover:shadow-2xl hover:shadow-slate-200 transition-all cursor-pointer">
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                {item.icon}
              </div>
              <div className="space-y-1">
                <div className="text-slate-900 font-black text-2xl">{item.label}</div>
                <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">{item.count}</div>
              </div>
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore Now <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

        <div className="p-12 bg-emerald-950 rounded-[4rem] text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none">Your next adventure <br/> is just a click away.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-12 py-6 bg-emerald-500 text-white rounded-2xl font-black text-2xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-900/40">
              Plan My Trip
            </button>
            <button className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold text-2xl hover:bg-white/20 transition-all">
              Talk to Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
};
