"use client";

import React from 'react';
import { SmartImage } from '../SmartImage';
import { 
  Home, 
  Key, 
  MapPin, 
  Search, 
  Building2, 
  Building, 
  Hotel, 
  Warehouse, 
  LandPlot, 
  Scaling, 
  Bed, 
  Bath, 
  CarFront, 
  Trees, 
  ArrowRight, 
  Phone, 
  Mail, 
  Calendar,
  CheckCircle2,
  LayoutDashboard,
  ShieldCheck,
  Zap,
  Star,
  Compass
} from 'lucide-react';

export const RealEstateHero = {
  // Variante 01: Luxury Estate (Elegant & Minimal)
  LuxuryEstate: () => (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-stone-950">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]" />
      </div>
      
      <div className="relative z-10 max-w-5xl space-y-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-stone-300 text-sm font-light tracking-[0.2em] uppercase">
          <Star className="text-amber-500 fill-amber-500" size={16} />
          <span>Curated Luxury Collection</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-light text-white leading-none tracking-tight font-serif">
          The Art of <br/> <span className="italic text-stone-400">Living Well.</span>
        </h1>
        
        <p className="text-stone-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
          Extraordinary properties for those who appreciate the finer details of architectural excellence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
          <button className="px-12 py-5 bg-stone-100 text-stone-950 rounded-none font-bold text-lg hover:bg-white transition-all shadow-2xl">
            View Residences
          </button>
          <button className="px-12 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-none font-bold text-lg hover:bg-white/10 transition-all">
            Private Showing
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 px-12 flex justify-between items-end text-stone-500 text-xs font-bold uppercase tracking-[0.4em]">
        <div className="flex items-center gap-4">
          <MapPin size={16} />
          <span>Bel Air, California</span>
        </div>
        <div className="flex items-center gap-4">
          <Scaling size={16} />
          <span>12,500 SQ FT</span>
        </div>
      </div>
    </div>
  ),

  // Variante 02: Modern Search (Functional & Clean)
  ModernSearch: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col pt-32 pb-12 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-16">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-none tracking-tight">
            Find Your <br/> <span className="text-blue-600">Perfect Home.</span>
          </h1>
          <p className="text-slate-500 text-xl leading-relaxed">
            Search over 50,000 active listings across the country with real-time updates and expert support.
          </p>
        </div>

        <div className="w-full bg-white p-6 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 space-y-2 border-r border-slate-100">
            <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
              <MapPin size={14} />
              <span>Location</span>
            </div>
            <input type="text" placeholder="City, Zip, or Area" className="w-full bg-transparent font-bold text-slate-900 outline-none" />
          </div>
          <div className="p-4 space-y-2 border-r border-slate-100">
            <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
              <Home size={14} />
              <span>Type</span>
            </div>
            <div className="font-bold text-slate-900">Single Family</div>
          </div>
          <div className="p-4 space-y-2 border-r border-slate-100">
            <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
              <Zap size={14} />
              <span>Price Range</span>
            </div>
            <div className="font-bold text-slate-900">$500k - $1.2M</div>
          </div>
          <button className="bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
            <Search size={20} />
            Search Now
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { label: 'Apartments', icon: Building2 },
            { label: 'Houses', icon: Home },
            { label: 'Condos', icon: Building },
            { label: 'Villas', icon: Hotel },
            { label: 'Offices', icon: Warehouse },
            { label: 'Land', icon: LandPlot }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <button key={i} className="p-6 bg-white border border-slate-200 rounded-3xl flex flex-col items-center gap-4 hover:border-blue-600 hover:text-blue-600 transition-all group">
                <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
                  <Icon size={24} />
                </div>
                <span className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  ),

  // Variante 03: Architecture Focus (Geometric & Bold)
  ArchitectureFocus: () => (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full opacity-20 select-none pointer-events-none flex flex-col justify-around text-[12vw] font-black text-white/5 leading-none whitespace-nowrap italic uppercase">
        <div className="-translate-x-20">STRUCTURE SPACE FORM</div>
        <div className="translate-x-20">LIGHT VOLUME DESIGN</div>
        <div className="-translate-x-10">URBAN CONTEXT LIFE</div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-7 space-y-12">
          <div className="inline-flex items-center gap-3 text-white font-black text-sm uppercase tracking-[0.5em]">
            <Compass size={24} className="text-white animate-spin-slow" />
            <span>Architectural Studio</span>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase">
            BEYOND <br/> THE <span className="text-white/30">WALLS.</span>
          </h1>
          
          <p className="text-zinc-400 text-xl md:text-3xl max-w-xl leading-relaxed font-light">
            We design spaces that inspire human connection and elevate the daily experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-12 py-6 bg-white text-black rounded-none font-black text-xl hover:bg-zinc-200 transition-all uppercase">
              Explore Portfolio
            </button>
            <div className="flex flex-col justify-center border-l border-zinc-800 pl-8">
              <div className="text-white font-black text-2xl">250+</div>
              <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Global Awards</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative aspect-[4/5] rounded-none overflow-hidden group">
          <SmartImage className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-10 left-10 space-y-2">
            <div className="text-white/40 font-black text-xs uppercase tracking-widest">Featured Project</div>
            <div className="text-white font-bold text-3xl">The Monolith House</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 04: Property Showcase (Interactive & Visual)
  PropertyShowcase: () => (
    <div className="w-full min-h-screen bg-white flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
            <CheckCircle2 size={16} />
            <span>Ready for Occupancy</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
            Coastal <br/> <span className="text-emerald-500 italic">Sanctuary.</span>
          </h1>
          
          <p className="text-slate-500 text-xl leading-relaxed max-w-lg">
            Experience the perfect blend of modern luxury and oceanfront tranquility in our newest development.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Beds', value: '4', icon: Bed },
              { label: 'Baths', value: '3.5', icon: Bath },
              { label: 'Garage', value: '2', icon: CarFront },
              { label: 'Garden', value: 'Yes', icon: Trees }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                  <div className="text-slate-400">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-slate-900 font-black text-lg">{stat.value}</div>
                    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 pt-4">
            <button className="flex-1 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl">
              Schedule a Tour
            </button>
            <button className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 hover:border-slate-900 transition-all">
              <Mail size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-emerald-50 rounded-[4rem] -rotate-6" />
          <div className="relative aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <SmartImage className="w-full h-full object-cover" />
            <div className="absolute top-8 right-8 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 font-black text-xl">
                $2.4M
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 05: Agent Focus (Human & Trust)
  AgentFocus: () => (
    <div className="w-full min-h-screen bg-indigo-50 flex flex-col lg:flex-row items-stretch">
      <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center space-y-12">
        <div className="inline-flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-[0.4em]">
          <ShieldCheck size={20} />
          <span>Top-Rated Agency 2024</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-none tracking-tighter">
          Guidance <br/> You Can <span className="text-indigo-600 italic">Trust.</span>
        </h1>
        
        <p className="text-slate-500 text-xl leading-relaxed max-w-lg font-medium">
          Our team of local experts is dedicated to helping you navigate the real estate market with ease and confidence.
        </p>

        <div className="flex items-center gap-6 p-8 bg-white rounded-[3rem] shadow-xl shadow-indigo-200/50 border border-white">
          <div className="w-24 h-24 rounded-2xl bg-slate-200 overflow-hidden shrink-0">
            <SmartImage className="w-full h-full object-cover" />
          </div>
          <div className="space-y-1">
            <div className="text-slate-900 font-black text-2xl">Sarah Jenkins</div>
            <div className="text-indigo-600 font-bold text-sm">Senior Property Consultant</div>
            <div className="flex items-center gap-4 pt-2">
              <Phone size={16} className="text-slate-400" />
              <Mail size={16} className="text-slate-400" />
            </div>
          </div>
        </div>

        <button className="w-full sm:w-auto px-12 py-6 bg-indigo-600 text-white rounded-3xl font-black text-2xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200">
          Book a Consultation
        </button>
      </div>

      <div className="lg:w-1/2 relative min-h-[50vh]">
        <SmartImage className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-transparent to-transparent lg:from-indigo-50/80 lg:to-transparent" />
      </div>
    </div>
  ),

  // Variante 06: Commercial Spaces (Professional & Urban)
  CommercialSpaces: () => (
    <div className="w-full min-h-screen bg-slate-950 relative flex items-center justify-end px-8 lg:px-24">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover opacity-40 brightness-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
      </div>
      
      <div className="relative z-10 max-w-3xl text-right space-y-10">
        <div className="flex items-center justify-end gap-3 text-blue-400 font-black text-sm uppercase tracking-[0.3em]">
          <span>Strategic Real Estate</span>
          <Building2 size={24} />
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter">
          BUILD YOUR <br/> <span className="text-blue-500">LEGACY.</span>
        </h1>
        
        <p className="text-slate-400 text-xl md:text-2xl leading-relaxed">
          Premium office spaces, retail hubs, and industrial locations designed for growth and performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-6 pt-6">
          <button className="px-12 py-5 bg-blue-600 text-white rounded-full font-black text-xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-900/50">
            Leasing Inquiries
          </button>
          <div className="text-slate-500 font-bold uppercase tracking-widest border-b border-slate-800 pb-2">
            2.5M+ SQ FT Managed
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 07: Urban Living (Chic & Minimal)
  UrbanLiving: () => (
    <div className="w-full min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-10">
          <div className="w-20 h-2 bg-slate-900" />
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-none tracking-tighter uppercase">
            City <br/> <span className="text-slate-400">Core.</span>
          </h1>
          <p className="text-slate-500 text-xl leading-relaxed max-w-sm">
            Boutique apartments in the heart of the city's most vibrant neighborhoods.
          </p>
          <button className="group flex items-center gap-4 text-slate-900 font-black text-2xl uppercase tracking-tighter hover:text-slate-500 transition-colors">
            See Availability
            <ArrowRight className="group-hover:translate-x-4 transition-transform" />
          </button>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-6 h-[700px]">
          <div className="relative rounded-[3rem] overflow-hidden group">
            <SmartImage className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
          </div>
          <div className="space-y-6">
            <div className="h-[45%] relative rounded-[3rem] overflow-hidden group">
              <SmartImage className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
            </div>
            <div className="h-[55%] bg-slate-950 rounded-[3rem] p-12 flex flex-col justify-between text-white">
              <div className="text-4xl font-black">100%</div>
              <div className="space-y-2">
                <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">Sustainability</div>
                <div className="text-xl font-medium">Net-zero energy certified buildings.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 08: Investment Portfolio (Data & Numbers)
  InvestmentPortfolio: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 text-xs font-black uppercase tracking-widest">
            <LayoutDashboard size={16} />
            <span>High-Yield Opportunities</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-none tracking-tight">
            Invest in <br/> <span className="text-blue-600 italic">Real Value.</span>
          </h1>
          
          <p className="text-slate-500 text-xl leading-relaxed">
            Maximize your returns with our data-driven approach to real estate investment. Residential, commercial, and land.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 space-y-2">
              <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Avg. ROI</div>
              <div className="text-slate-900 font-black text-4xl">12.4%</div>
              <div className="text-emerald-600 text-xs font-bold">+2.1% from last year</div>
            </div>
            <div className="p-6 bg-slate-900 rounded-3xl space-y-2">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Assets</div>
              <div className="text-white font-black text-4xl">$1.8B</div>
              <div className="text-slate-400 text-xs">Under management</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-20 bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="relative bg-white border border-slate-200 rounded-[3rem] p-10 shadow-2xl shadow-slate-200 space-y-10">
            <div className="flex items-center justify-between">
              <div className="text-slate-900 font-black text-xl">Market Performance</div>
              <Zap className="text-blue-600" />
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Residential', progress: 85, color: 'bg-blue-500' },
                { label: 'Commercial', progress: 62, color: 'bg-indigo-500' },
                { label: 'Land Dev', progress: 91, color: 'bg-emerald-500' },
                { label: 'Short-term', progress: 44, color: 'bg-orange-500' }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-slate-900">{item.progress}% Growth</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full transition-all duration-1000`} style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all">
              Download Investor Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 09: Vacation Rentals (Relaxing & Scenic)
  VacationRentals: () => (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-end pb-24 px-8 overflow-hidden bg-sky-950">
      <div className="absolute inset-0">
        <SmartImage className="w-full h-full object-cover opacity-60 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-sky-950/20 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 backdrop-blur-md border border-sky-400/30 rounded-full text-sky-300 text-xs font-black uppercase tracking-widest">
              <Calendar size={16} />
              <span>Vacation Retreats</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter">
              ESCAPE <br/> THE <span className="text-sky-400 italic">ORDINARY.</span>
            </h1>
            
            <p className="text-sky-100/70 text-xl md:text-2xl max-w-2xl leading-relaxed">
              Find your perfect home away from home. Luxury rentals for unforgettable holidays.
            </p>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-sky-900/40 backdrop-blur-2xl border border-sky-800 rounded-[3rem] space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-sky-400 font-black text-4xl">500+</div>
                <div className="text-sky-200 text-xs font-bold uppercase tracking-widest text-right">Premium <br/> Villas</div>
              </div>
              <div className="h-px bg-sky-800" />
              <button className="w-full py-5 bg-sky-500 text-sky-950 rounded-2xl font-black text-lg hover:bg-sky-400 transition-all">
                Browse Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 10: Neighborhood Guide (Community & Map)
  NeighborhoodGuide: () => (
    <div className="w-full min-h-screen bg-zinc-50 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-zinc-200 rounded-[4rem] animate-pulse" />
          <div className="relative h-full w-full rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
            <SmartImage className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-zinc-900/10" />
            
            {/* Map Pin Overlays */}
            <div className="absolute top-1/4 left-1/3 p-4 bg-white rounded-2xl shadow-xl flex items-center gap-3 animate-bounce duration-[3000ms]">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600"><Home size={16} /></div>
              <div className="text-xs font-black">Modern Loft</div>
            </div>
            <div className="absolute bottom-1/3 right-1/4 p-4 bg-white rounded-2xl shadow-xl flex items-center gap-3 animate-bounce duration-[4000ms]">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"><Trees size={16} /></div>
              <div className="text-xs font-black">Central Park</div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="text-zinc-400 font-black text-xs uppercase tracking-[0.4em]">Local Knowledge</div>
          <h1 className="text-6xl md:text-8xl font-black text-zinc-900 leading-[0.9] tracking-tighter">
            Love Where <br/> You <span className="text-emerald-600 underline decoration-8 underline-offset-8">Live.</span>
          </h1>
          <p className="text-zinc-500 text-xl leading-relaxed max-w-lg">
            Our neighborhood guides help you find not just a house, but a community that fits your lifestyle perfectly.
          </p>
          
          <div className="space-y-4">
            {['Schools & Education', 'Parks & Recreation', 'Dining & Nightlife', 'Market Trends'].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-white rounded-3xl border border-zinc-200 hover:border-emerald-500 transition-all group cursor-pointer">
                <span className="text-zinc-900 font-bold text-lg">{item}</span>
                <ArrowRight className="text-zinc-300 group-hover:text-emerald-500 group-hover:translate-x-2 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 11: Eco Friendly (Sustainable & Green)
  EcoFriendly: () => (
    <div className="w-full min-h-screen bg-emerald-950 relative flex items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-6xl w-full text-center space-y-12">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-black uppercase tracking-[0.3em]">
          <Trees size={20} />
          <span>Sustainable Living</span>
        </div>
        
        <h1 className="text-7xl md:text-[11rem] font-black text-white leading-[0.8] tracking-tighter">
          GREEN <br/> <span className="text-emerald-400 italic">FUTURE.</span>
        </h1>
        
        <p className="text-emerald-100/70 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed">
          Homes designed in harmony with nature. Solar power, rainwater harvesting, and passive cooling systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-8">
          <div className="text-center">
            <div className="text-white font-black text-5xl">A++</div>
            <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Energy Rating</div>
          </div>
          <button className="px-16 py-8 bg-white text-emerald-950 rounded-full font-black text-3xl hover:bg-emerald-50 transition-all shadow-2xl">
            VIEW ECO HOMES
          </button>
          <div className="text-center">
            <div className="text-white font-black text-5xl">0%</div>
            <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Carbon Footprint</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 12: Smart Home (Tech & Automated)
  SmartHome: () => (
    <div className="w-full min-h-screen bg-slate-950 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest">
            <Zap size={16} />
            <span>Fully Automated Living</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
            Intelligent <br/> <span className="text-blue-500 italic">Spaces.</span>
          </h1>
          
          <p className="text-slate-400 text-xl leading-relaxed">
            Control your environment from anywhere. Our smart homes integrate the latest IoT technology for comfort, security, and efficiency.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 space-y-2">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Security</div>
              <div className="text-white font-black text-4xl">24/7</div>
              <div className="text-slate-600 text-xs">AI-driven monitoring</div>
            </div>
            <div className="p-6 bg-blue-600 rounded-3xl space-y-2">
              <div className="text-blue-200 text-[10px] font-black uppercase tracking-widest">Efficiency</div>
              <div className="text-white font-black text-4xl">-40%</div>
              <div className="text-blue-100/60 text-xs">Energy consumption</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-20 bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="relative bg-slate-900 border border-slate-800 rounded-[3rem] p-10 shadow-2xl space-y-10">
            <div className="flex items-center justify-between">
              <div className="text-white font-black text-xl">Smart Controls</div>
              <LayoutDashboard className="text-blue-400" />
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Climate Control', progress: 72, color: 'bg-blue-500' },
                { label: 'Smart Lighting', progress: 100, color: 'bg-amber-500' },
                { label: 'Energy Management', progress: 88, color: 'bg-emerald-500' },
                { label: 'Security System', progress: 95, color: 'bg-rose-500' }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-white">{item.progress}% Active</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full transition-all duration-1000`} style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-3">
              Explore Tech Specs <Zap size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 13: Industrial Loft (Raw & Minimal)
  IndustrialLoft: () => (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col lg:flex-row items-stretch">
      <div className="lg:w-1/2 relative min-h-[50vh]">
        <SmartImage className="w-full h-full object-cover grayscale brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent" />
        <div className="absolute top-12 left-12">
          <Warehouse size={48} className="text-white" />
        </div>
      </div>
      
      <div className="lg:w-1/2 bg-zinc-900 flex flex-col justify-center p-12 lg:p-24 space-y-10">
        <div className="inline-flex items-center gap-2 text-zinc-500 font-black text-xs uppercase tracking-[0.3em]">
          <span>Converted Spaces</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
          RAW <br/> <span className="text-zinc-500">CANVAS.</span>
        </h1>
        
        <p className="text-zinc-400 text-xl leading-relaxed max-w-lg">
          Exposed brick, high ceilings, and industrial charm. Discover the ultimate urban living experience in our curated loft collection.
        </p>

        <div className="grid grid-cols-2 gap-8 pt-4">
          <div>
            <div className="text-white font-black text-4xl">14ft</div>
            <div className="text-zinc-600 text-xs font-bold uppercase tracking-widest">Ceiling Height</div>
          </div>
          <div>
            <div className="text-white font-black text-4xl">Open</div>
            <div className="text-zinc-600 text-xs font-bold uppercase tracking-widest">Floor Plan</div>
          </div>
        </div>

        <button className="w-full sm:w-auto px-12 py-6 bg-white text-zinc-950 rounded-none font-black text-2xl hover:bg-zinc-200 transition-all">
          VIEW LOFTS
        </button>
      </div>
    </div>
  ),

  // Variante 14: Luxury Penthouse (Sky High & Glam)
  LuxuryPenthouse: () => (
    <div className="w-full min-h-screen bg-black relative flex items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0">
        <SmartImage className="w-full h-full object-cover opacity-50 brightness-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>
      
      <div className="relative z-10 max-w-4xl text-center space-y-10">
        <div className="text-amber-500 font-black text-xs uppercase tracking-[0.5em]">The Pinnacle Collection</div>
        <h1 className="text-7xl md:text-[12rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic">
          TOUCH <br/> THE <span className="text-amber-500 underline decoration-8 underline-offset-8">SKY.</span>
        </h1>
        <p className="text-zinc-400 text-xl md:text-3xl max-w-2xl mx-auto font-light leading-relaxed">
          The highest point of luxury. Panoramic city views, private pools, and bespoke interiors at the world's most prestigious addresses.
        </p>
        <button className="px-16 py-8 bg-amber-600 text-white rounded-none font-black text-2xl hover:bg-amber-500 transition-all shadow-2xl tracking-widest uppercase">
          Explore Penthouses
        </button>
      </div>
    </div>
  ),

  // Variante 15: New Development (Fresh & Corporate)
  NewDevelopment: () => (
    <div className="w-full min-h-screen bg-blue-50 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full bg-white rounded-[4rem] shadow-2xl shadow-blue-900/10 p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-100 rounded-full text-blue-600 font-black uppercase tracking-tighter">
            <Building2 size={24} />
            <span>Coming Early 2025</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight">
              A New <br/> <span className="text-blue-600 underline decoration-8 underline-offset-8">Standard.</span>
            </h1>
            <p className="text-slate-500 text-xl md:text-2xl leading-relaxed">
              Our latest project redefines modern living with integrated workspaces, wellness centers, and premium retail at your doorstep.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <button className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-black text-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
              Register Interest
            </button>
            <div className="flex flex-col justify-center">
              <div className="text-slate-900 font-black text-2xl">85%</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Already Reserved</div>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl group">
          <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-white">
            <div className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2">Location</div>
            <div className="text-slate-900 font-bold text-2xl">The Waterfront District</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 16: Rural Retreat (Nature & Warm)
  RuralRetreat: () => (
    <div className="w-full min-h-screen bg-[#fcf8f1] relative flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 z-0 opacity-30">
        <SmartImage className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 max-w-4xl space-y-12">
        <Trees className="text-[#5d4037] mx-auto" size={64} />
        
        <h1 className="text-6xl md:text-9xl font-black text-[#3e2723] leading-none tracking-tighter uppercase font-serif">
          Country <br/> <span className="text-transparent border-2 border-[#3e2723] bg-clip-text">Serenity.</span>
        </h1>
        
        <p className="text-[#5d4037] text-xl md:text-3xl max-w-2xl mx-auto font-medium leading-relaxed">
          Escape the city noise. Discover charming cottages, expansive estates, and peaceful farmhouses in the heart of nature.
        </p>

        <div className="flex flex-col items-center gap-8">
          <button className="px-16 py-6 bg-[#3e2723] text-white rounded-full font-black text-2xl hover:bg-[#5d4037] transition-all shadow-2xl">
            FIND YOUR RETREAT
          </button>
          
          <div className="flex items-center gap-12 text-[#3e2723]/40 text-sm font-black uppercase tracking-[0.4em]">
            <div className="flex items-center gap-3">
              <LandPlot size={16} />
              <span>10+ Acres</span>
            </div>
            <div className="flex items-center gap-3">
              <Home size={16} />
              <span>Historic Charm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 17: Property Auctions (Urgent & Fast)
  PropertyAuctions: () => (
    <div className="w-full min-h-screen bg-rose-950 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-xs font-black uppercase tracking-widest">
            <Zap size={16} className="animate-pulse" />
            <span>Live Auctions Today</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
            Bid on <br/> Your <span className="text-rose-500 italic">Future.</span>
          </h1>
          
          <p className="text-rose-200/60 text-xl leading-relaxed">
            Exclusive access to below-market properties. Residential, commercial, and foreclosures. Fast-track your portfolio growth.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-rose-900 rounded-3xl border border-rose-800 space-y-2">
              <div className="text-rose-400 text-[10px] font-black uppercase tracking-widest">Ending Today</div>
              <div className="text-white font-black text-4xl">12</div>
              <div className="text-rose-300 text-xs">High-value properties</div>
            </div>
            <div className="p-6 bg-white rounded-3xl space-y-2">
              <div className="text-rose-900 text-[10px] font-black uppercase tracking-widest">Price Entry</div>
              <div className="text-rose-950 font-black text-4xl">-35%</div>
              <div className="text-rose-900/60 text-xs">Below market value</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-20 bg-rose-600/20 rounded-full blur-[120px]" />
          <div className="relative bg-rose-900 border border-rose-800 rounded-[3rem] p-10 shadow-2xl space-y-10">
            <div className="flex items-center justify-between">
              <div className="text-white font-black text-xl">Current Live Bids</div>
              <Star className="text-rose-400" />
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Sunset Villa', bid: '$850k', time: '12m left', color: 'bg-rose-500' },
                { label: 'Downtown Office', bid: '$1.2M', time: '45m left', color: 'bg-blue-500' },
                { label: 'Retail Space', bid: '$450k', time: '1h 20m left', color: 'bg-emerald-500' }
              ].map((item, i) => (
                <div key={i} className="group flex items-center justify-between p-4 bg-black/30 rounded-2xl border border-rose-800 hover:border-white transition-all cursor-pointer">
                  <div className="space-y-1">
                    <span className="text-white font-bold block">{item.label}</span>
                    <span className="text-rose-400 text-xs font-black uppercase tracking-widest">{item.time}</span>
                  </div>
                  <div className="text-white font-black text-xl">{item.bid}</div>
                </div>
              ))}
            </div>

            <button className="w-full py-5 bg-white text-rose-950 rounded-2xl font-black text-lg hover:bg-rose-100 transition-all flex items-center justify-center gap-3">
              Enter Auction Hall <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 18: Architect Portfolio (Clean & Aesthetic)
  ArchitectPortfolio: () => (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
      </div>

      <div className="relative z-10 max-w-5xl text-center space-y-12">
        <Scaling className="text-slate-900 mx-auto" size={64} />
        
        <h1 className="text-7xl md:text-[11rem] font-black text-slate-950 leading-[0.8] tracking-[ -0.05em] uppercase italic">
          DESIGN <br/> <span className="text-slate-300">MATTERS.</span>
        </h1>
        
        <p className="text-slate-500 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed">
          From concept to completion, we create spaces that define the modern era. Minimalism, functionality, and timeless aesthetics.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
          <button className="px-12 py-6 bg-slate-950 text-white rounded-none font-black text-2xl hover:bg-slate-800 transition-all uppercase tracking-tighter">
            View Projects
          </button>
          <button className="group flex items-center gap-4 text-slate-950 font-black text-xl uppercase tracking-widest">
            Our Studio
            <ArrowRight className="group-hover:translate-x-4 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 19: Home Valuation (Utility & Trust)
  HomeValuation: () => (
    <div className="w-full min-h-screen bg-indigo-950 relative flex flex-col items-center justify-end pb-24 px-8 overflow-hidden">
      <div className="absolute inset-0">
        <SmartImage className="w-full h-full object-cover opacity-60 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/20 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 rounded-full text-indigo-300 text-xs font-black uppercase tracking-widest">
              <Scaling size={16} />
              <span>Free Property Appraisal</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter">
              WORTH <br/> YOUR <span className="text-indigo-400 italic">VALUE.</span>
            </h1>
            
            <p className="text-indigo-100/70 text-xl md:text-2xl max-w-2xl leading-relaxed">
              Curious about your home's current market value? Get a detailed report from our local experts in less than 24 hours.
            </p>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-indigo-900/40 backdrop-blur-2xl border border-indigo-800 rounded-[3rem] space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-indigo-400 font-black text-4xl">100%</div>
                <div className="text-indigo-200 text-xs font-bold uppercase tracking-widest text-right">Free <br/> & Secure</div>
              </div>
              <div className="h-px bg-indigo-800" />
              <button className="w-full py-5 bg-indigo-500 text-white rounded-2xl font-black text-lg hover:bg-indigo-400 transition-all">
                Get Free Valuation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 20: Real Estate Showcase Final (Full Portfolio)
  RealEstateShowcaseFinal: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-[0.4em]">
              <LayoutDashboard size={20} />
              <span>Global Property Catalog</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-950 leading-none tracking-tighter">
              Building <br/> <span className="text-blue-500 italic">Tomorrow.</span>
            </h1>
          </div>
          <p className="text-slate-500 text-xl max-w-md leading-relaxed">
            Explora todas nuestras categorías y encuentra la propiedad perfecta para tu estilo de vida o inversión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Residential', count: '1,245 Units', color: 'bg-blue-500', icon: <Home /> },
            { label: 'Commercial', count: '458 Offices', color: 'bg-indigo-500', icon: <Building2 /> },
            { label: 'Luxury', count: '89 Estates', color: 'bg-amber-500', icon: <Star /> },
            { label: 'Vacation', count: '215 Villas', color: 'bg-sky-500', icon: <Hotel /> },
            { label: 'Investment', count: '67 Portfolios', color: 'bg-rose-500', icon: <LayoutDashboard /> },
            { label: 'Industrial', count: '34 Hubs', color: 'bg-zinc-500', icon: <Warehouse /> }
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

        <div className="p-12 bg-slate-900 rounded-[4rem] text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none">Ready to find <br/> your dream space?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-black text-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40">
              Get Started
            </button>
            <button className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold text-2xl hover:bg-white/20 transition-all">
              Contact Agency
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
};
