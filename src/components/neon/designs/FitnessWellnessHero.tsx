"use client";

import React from 'react';
import { SmartImage } from '../SmartImage';
import { 
  Dumbbell, 
  Flame, 
  Heart, 
  Timer, 
  Trophy, 
  Users, 
  Zap, 
  Apple, 
  Sprout, 
  Smile, 
  ArrowRight, 
  Play, 
  Target, 
  Sparkles, 
  Calendar,
  ShieldCheck,
  Star,
  Activity,
  Award,
  Bike,
  Wind,
  Waves,
  Music,
  CupSoda,
  Grape,
  Moon,
  Sun,
  Camera,
  MapPin,
  Clock,
  Layout
} from 'lucide-react';

export const FitnessWellnessHero = {
  // Variante 01: Hardcore Gym (Dark & Intense)
  HardcoreGym: () => (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover opacity-60 contrast-125 brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>
      
      <div className="relative z-10 max-w-5xl space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/20 backdrop-blur-md border border-orange-500/30 rounded-full text-orange-400 text-sm font-black uppercase tracking-widest">
          <Flame size={16} className="animate-pulse" />
          <span>No Excuses. Only Results.</span>
        </div>
        
        <h1 className="text-7xl md:text-[12rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic">
          PUSH <br/> YOUR <span className="text-orange-500">LIMITS.</span>
        </h1>
        
        <p className="text-zinc-400 text-xl md:text-3xl max-w-2xl mx-auto font-bold leading-tight uppercase italic">
          High-performance training for those who demand excellence. Join the elite.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button className="px-12 py-6 bg-orange-600 text-white rounded-none font-black text-2xl hover:bg-orange-500 transition-all shadow-[8px_8px_0px_rgba(255,255,255,0.1)] uppercase italic tracking-tighter">
            Start Training
          </button>
          <div className="flex items-center gap-4 text-white font-black text-xl uppercase italic">
            <Trophy size={32} className="text-orange-500" />
            <span>Championship Level</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 px-12 flex justify-between items-end text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em]">
        <div className="flex items-center gap-4 italic">
          <Dumbbell size={16} />
          <span>Elite Strength & Conditioning</span>
        </div>
        <div className="flex items-center gap-4 italic">
          <Activity size={16} />
          <span>Est. 1998</span>
        </div>
      </div>
    </div>
  ),

  // Variante 02: Zen Yoga (Calm & Natural)
  ZenYoga: () => (
    <div className="w-full min-h-screen bg-stone-50 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="max-w-4xl space-y-12">
        <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto animate-pulse">
          <Sprout size={48} />
        </div>
        
        <h1 className="text-6xl md:text-9xl font-light text-stone-900 leading-none tracking-tight font-serif">
          Find Your <br/> <span className="italic text-emerald-600">Inner Peace.</span>
        </h1>
        
        <p className="text-stone-500 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
          Reconnect with your body and mind through ancient practices in a modern sanctuary.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
          <button className="px-12 py-5 bg-stone-900 text-white rounded-full font-medium text-lg hover:bg-stone-800 transition-all">
            Join a Class
          </button>
          <button className="text-stone-400 font-bold uppercase tracking-widest hover:text-stone-900 transition-colors">
            Our Story
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 03: Modern Fitness App (Tech & Clean)
  FitnessApp: () => (
    <div className="w-full min-h-screen bg-white flex flex-col pt-32 pb-12 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">
            <Zap size={16} />
            <span>AI-Powered Personal Training</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-none tracking-tight">
            Your Coach <br/> in Your <span className="text-blue-600">Pocket.</span>
          </h1>
          
          <p className="text-slate-500 text-xl leading-relaxed max-w-lg">
            Personalized workouts, nutrition tracking, and real-time coaching. Achieve your goals faster with FitGenius.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-10 py-5 bg-slate-950 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl">
              Download App
            </button>
            <div className="flex -space-x-3 items-center pl-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100" />
              ))}
              <div className="pl-6 text-slate-400 font-bold">1M+ Users</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-blue-50 rounded-[4rem] -rotate-6" />
          <div className="relative aspect-[9/16] max-w-[320px] mx-auto bg-slate-900 rounded-[3rem] border-[12px] border-slate-950 shadow-2xl overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-20" />
             <SmartImage className="w-full h-full object-cover opacity-80" />
             <div className="absolute inset-0 p-8 flex flex-col justify-end text-white space-y-4">
               <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                 <div className="text-xs font-bold text-blue-400">Current Heart Rate</div>
                 <div className="text-2xl font-black flex items-center gap-2">142 BPM <Heart size={20} className="fill-rose-500 text-rose-500 animate-pulse" /></div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 04: Crossfit Box (Industrial & Bold)
  CrossfitBox: () => (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col lg:flex-row items-stretch">
      <div className="lg:w-1/2 relative min-h-[50vh]">
        <SmartImage className="w-full h-full object-cover grayscale contrast-125" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent" />
        <div className="absolute top-12 left-12">
          <Dumbbell size={48} className="text-white" />
        </div>
      </div>
      
      <div className="lg:w-1/2 flex flex-col justify-center p-12 lg:p-24 space-y-10">
        <div className="text-yellow-500 font-black text-xs uppercase tracking-[0.4em]">WOD OF THE DAY</div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
          EARN <br/> YOUR <span className="text-yellow-500 italic">STRIPES.</span>
        </h1>
        
        <p className="text-zinc-400 text-xl leading-relaxed max-w-lg">
          No fancy machines. Just hard work, community, and the most intense training of your life.
        </p>

        <div className="space-y-6 pt-4">
          <button className="w-full sm:w-auto px-12 py-6 bg-white text-zinc-950 rounded-none font-black text-2xl hover:bg-yellow-500 transition-all uppercase italic">
            Book a Drop-in
          </button>
          <div className="flex items-center gap-8 text-zinc-500 font-bold uppercase tracking-widest text-sm">
            <div className="flex items-center gap-2"><Timer size={18} /> 6:00 AM - 9:00 PM</div>
            <div className="flex items-center gap-2"><Users size={18} /> Community Driven</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 05: Pilates Studio (Soft & Chic)
  PilatesStudio: () => (
    <div className="w-full min-h-screen bg-[#fdfaf8] relative flex items-center justify-center p-8 overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-rose-100 rounded-full blur-[100px] opacity-50" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 text-rose-400 font-black text-xs uppercase tracking-[0.5em]">
            <Award size={20} />
            <span>Premium Reformer Studio</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-none tracking-tight">
            Stronger <br/> from the <span className="text-rose-300">Core.</span>
          </h1>
          
          <p className="text-slate-500 text-xl md:text-2xl leading-relaxed max-w-md">
            Sculpt, tone, and align your body with our signature reformer pilates method.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
              Intro Offer: 3 Classes $49
            </button>
          </div>
        </div>

        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-white rounded-[4rem] shadow-2xl" />
          <div className="relative h-full w-full rounded-[4rem] overflow-hidden p-4">
            <div className="h-full w-full rounded-[3rem] overflow-hidden">
              <SmartImage className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl border border-rose-50 flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500">
              <Smile size={24} />
            </div>
            <div className="text-slate-900 font-black uppercase tracking-widest text-xs italic leading-tight">Expert <br/> Instruction</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 06: Nutrition & Wellness (Fresh & Organic)
  NutritionWellness: () => (
    <div className="w-full min-h-screen bg-emerald-50 relative flex items-center justify-center text-center px-6">
      <div className="max-w-4xl space-y-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 text-sm font-black uppercase tracking-widest">
          <Apple size={16} />
          <span>Nourish Your Body</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-emerald-950 leading-none tracking-tighter uppercase">
          FUEL <br/> YOUR <span className="text-emerald-500 underline decoration-8 underline-offset-8">VITALITY.</span>
        </h1>
        
        <p className="text-emerald-900/60 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Expert nutrition plans and organic supplements tailored to your unique biology and lifestyle goals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <button className="px-12 py-5 bg-emerald-600 text-white rounded-2xl font-black text-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200">
            Get Your Plan
          </button>
          <div className="flex items-center gap-4 text-emerald-900 font-bold">
            <ShieldCheck size={24} className="text-emerald-500" />
            <span>Certified Nutritionists</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 opacity-10 flex flex-wrap justify-around pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Apple key={i} size={200} className="text-emerald-950 -rotate-12" />
        ))}
      </div>
    </div>
  ),

  // Variante 07: Martial Arts (Heritage & Power)
  MartialArts: () => (
    <div className="w-full min-h-screen bg-[#1a0f0f] relative flex items-center overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-[60%] opacity-40">
        <SmartImage className="w-full h-full object-cover grayscale contrast-150" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f0f] via-[#1a0f0f]/40 to-transparent" />
      </div>
      
      <div className="relative z-10 px-8 lg:px-24 max-w-4xl space-y-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 rounded text-white text-[10px] font-black uppercase tracking-[0.2em]">
          <span>Traditional & Modern Combat</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
          DISCIPLINE <br/> <span className="text-red-600">IS POWER.</span>
        </h1>
        
        <p className="text-zinc-400 text-xl md:text-2xl max-w-lg leading-relaxed font-medium italic">
          Master the art of self-defense. Build confidence, strength, and respect through world-class martial arts training.
        </p>

        <div className="flex gap-6 pt-4">
          <button className="px-12 py-6 bg-white text-red-950 rounded-none font-black text-xl hover:bg-red-600 hover:text-white transition-all">
            Book Trial Class
          </button>
          <div className="flex flex-col justify-center border-l border-zinc-800 pl-8">
            <div className="text-white font-black text-2xl">BJJ • MUAY THAI</div>
            <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Adults & Kids Programs</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 08: Spin & HIIT (High Energy & Neon)
  SpinHIIT: () => (
    <div className="w-full min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 select-none pointer-events-none flex flex-col justify-around text-[15vw] font-black text-white/5 leading-none whitespace-nowrap italic">
        <div className="-translate-x-20">RIDE SWEAT REPEAT</div>
        <div className="translate-x-20">HIGH INTENSITY FAST</div>
        <div className="-translate-x-10">BEAT MUSIC POWER</div>
      </div>

      <div className="relative z-10 max-w-5xl text-center space-y-12">
        <div className="w-20 h-20 bg-fuchsia-600 rounded-3xl rotate-12 flex items-center justify-center text-white mx-auto shadow-[0_0_50px_rgba(192,38,211,0.5)]">
          <Bike size={48} />
        </div>
        
        <h1 className="text-7xl md:text-[11rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic">
          LOSE <br/> THE <span className="text-fuchsia-500">BEAT.</span>
        </h1>
        
        <p className="text-zinc-400 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed italic">
          The ultimate cardio experience. Immersive lighting, world-class sound systems, and instructors that push you to your peak.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
          <button className="px-12 py-6 bg-fuchsia-600 text-white rounded-none font-black text-2xl hover:bg-fuchsia-500 transition-all shadow-[0_0_30px_rgba(192,38,211,0.3)] uppercase italic">
            Book a Bike
          </button>
          <div className="flex items-center gap-4 text-white font-black text-xl uppercase italic">
            <Play size={32} className="text-fuchsia-500 fill-fuchsia-500" />
            <span>Feel the Energy</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 09: Recovery & Biohacking (Futuristic & Data)
  RecoveryBiohacking: () => (
    <div className="w-full min-h-screen bg-slate-950 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-xs font-black uppercase tracking-widest">
            <Activity size={16} />
            <span>Optimal Recovery Protocol</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
            Evolve <br/> Your <span className="text-sky-500 italic">Recovery.</span>
          </h1>
          
          <p className="text-slate-400 text-xl leading-relaxed">
            Cryotherapy, infrared saunas, and compression therapy. Hack your biology to perform better, recover faster, and live longer.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 space-y-2">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Efficiency</div>
              <div className="text-white font-black text-4xl">2x</div>
              <div className="text-slate-600 text-xs">Faster tissue repair</div>
            </div>
            <div className="p-6 bg-sky-600 rounded-3xl space-y-2">
              <div className="text-sky-100 text-[10px] font-black uppercase tracking-widest">Status</div>
              <div className="text-white font-black text-4xl">PRO</div>
              <div className="text-sky-100/60 text-xs">Elite Athlete Tier</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-20 bg-sky-600/20 rounded-full blur-[120px]" />
          <div className="relative bg-slate-900 border border-slate-800 rounded-[3rem] p-10 shadow-2xl space-y-10">
            <div className="flex items-center justify-between">
              <div className="text-white font-black text-xl">Bio-Performance Hub</div>
              <Sparkles className="text-sky-400" />
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Cellular Repair', progress: 85, color: 'bg-sky-500' },
                { label: 'Neural Recovery', progress: 62, color: 'bg-indigo-500' },
                { label: 'Hormonal Balance', progress: 91, color: 'bg-emerald-500' },
                { label: 'Sleep Quality', progress: 98, color: 'bg-violet-500' }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-white">{item.progress}% Optimized</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full transition-all duration-1000`} style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-3">
              Scan Your Vitals <Target size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 10: Fitness Catalog (Bento & Modern)
  FitnessCatalog: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-slate-400 font-black text-sm uppercase tracking-[0.4em]">
              <Activity size={20} />
              <span>Full Access Catalog</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-950 leading-none tracking-tighter uppercase">
              Your <br/> <span className="text-blue-600 italic">Universe.</span>
            </h1>
          </div>
          <p className="text-slate-500 text-xl max-w-md leading-relaxed">
            No matter how you move, we have the space, the tools, and the community to help you excel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-[800px] md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 relative rounded-[3rem] overflow-hidden group">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 space-y-2">
              <h3 className="text-3xl font-bold text-white uppercase italic">Elite Gym</h3>
              <p className="text-white/60 text-sm">Professional equipment.</p>
            </div>
          </div>
          
          <div className="relative rounded-[3rem] overflow-hidden group">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white uppercase italic">Yoga</h3>
            </div>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden group bg-blue-600 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <Activity className="text-white" size={48} />
            <h3 className="text-2xl font-black text-white uppercase italic">Live Track</h3>
            <div className="px-4 py-1 bg-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">Join Now</div>
          </div>

          <div className="md:col-span-2 relative rounded-[3rem] overflow-hidden group">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            <div className="absolute inset-y-0 left-10 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white uppercase italic">Spin & HIIT</h3>
              <p className="text-white/60 text-sm">High energy classes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 11: Outdoor Boot Camp (Natural & Gritty)
  OutdoorBootCamp: () => (
    <div className="w-full min-h-screen bg-stone-900 relative flex items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover opacity-40 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-900" />
      </div>
      
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 rounded-full text-emerald-400 text-sm font-black uppercase tracking-[0.3em]">
            <Wind size={20} />
            <span>Open Air Training</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter uppercase italic">
            NATURE IS <br/> YOUR <span className="text-emerald-500">ARENA.</span>
          </h1>
          
          <p className="text-stone-300 text-xl md:text-2xl leading-relaxed font-light">
            Escápate del gimnasio convencional. Entrenamientos funcionales al aire libre diseñados para desafiar tu resistencia y fuerza real.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
            <button className="px-12 py-6 bg-emerald-500 text-stone-950 rounded-none font-black text-2xl hover:bg-emerald-400 transition-all shadow-2xl uppercase italic">
              Find a Camp
            </button>
            <div className="text-center sm:text-left">
              <div className="text-white font-black text-4xl">50+</div>
              <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Active Locations</div>
            </div>
          </div>
        </div>

        <div className="relative aspect-square order-first lg:order-last">
          <div className="absolute -inset-10 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-2 border-white/10 shadow-2xl">
            <SmartImage className="w-full h-full object-cover" />
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-stone-900/80 backdrop-blur-md rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-2">
                <MapPin className="text-emerald-500" />
                <span className="text-white font-bold text-lg uppercase italic tracking-tighter">Sunset Park, NY</span>
              </div>
              <p className="text-stone-400 text-sm italic">Next Session: Tomorrow, 6:30 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 12: Aquatic Fitness (Blue & Flowing)
  AquaticFitness: () => (
    <div className="w-full min-h-screen bg-sky-950 relative flex flex-col items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover opacity-50 brightness-75 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/60 via-transparent to-sky-950" />
      </div>
      
      <div className="relative z-10 max-w-6xl w-full text-center space-y-12">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-sky-400/20 backdrop-blur-xl border border-sky-400/30 rounded-full text-sky-200 text-sm font-black uppercase tracking-[0.3em]">
          <Waves size={24} />
          <span>Low Impact • High Results</span>
        </div>
        
        <h1 className="text-7xl md:text-[13rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic">
          DEEP <br/> <span className="text-sky-400 italic">IMPACT.</span>
        </h1>
        
        <p className="text-sky-100/70 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed">
          Master your movements in the water. Hydro-training for athletes and recovery seekers alike. Gentle on joints, tough on fat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-8">
          <button className="px-16 py-8 bg-white text-sky-950 rounded-full font-black text-3xl hover:bg-sky-50 transition-all shadow-2xl uppercase italic">
            Dive In
          </button>
          <div className="flex items-center gap-4 text-sky-300 font-black text-xl uppercase italic">
            <Zap size={32} />
            <span>Calorie Torch</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 13: Dance Cardio (Vibrant & Rhythmic)
  DanceCardio: () => (
    <div className="w-full min-h-screen bg-rose-600 flex flex-col items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 select-none pointer-events-none flex flex-col justify-around text-[18vw] font-black text-white/10 leading-none whitespace-nowrap italic">
        <div className="-translate-x-20">DANCE SHAKE MOVE</div>
        <div className="translate-x-20">SWEAT SMILE REPEAT</div>
      </div>

      <div className="relative z-10 max-w-5xl text-center space-y-12">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-rose-600 mx-auto shadow-2xl animate-bounce">
          <Music size={48} />
        </div>
        
        <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.75] tracking-tighter uppercase italic">
          MOVE TO <br/> THE <span className="text-rose-950">GROOVE.</span>
        </h1>
        
        <p className="text-rose-100 text-xl md:text-3xl max-w-3xl mx-auto font-bold leading-tight italic">
          The party that gets you fit. High-energy dance routines to the hottest beats. No experience required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button className="px-12 py-6 bg-white text-rose-600 rounded-none font-black text-2xl hover:bg-rose-950 hover:text-white transition-all shadow-[8px_8px_0px_rgba(0,0,0,0.2)] uppercase italic">
            Book a Spot
          </button>
          <div className="flex items-center gap-4 text-rose-950 font-black text-xl uppercase italic">
            <Smile size={32} />
            <span>Pure Joy</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 14: Juice Bar & Cleanse (Fresh & Minimal)
  JuiceBarCleanse: () => (
    <div className="w-full min-h-screen bg-white flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-black uppercase tracking-widest border border-orange-100">
            <CupSoda size={16} />
            <span>Liquid Gold Nutrition</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-none tracking-tight uppercase">
            Reset Your <br/> <span className="text-orange-500 italic">System.</span>
          </h1>
          
          <p className="text-slate-500 text-xl leading-relaxed max-w-lg">
            Cold-pressed juices and functional shots designed to detox, energize, and boost your immunity naturally.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            {[
              { label: 'Detox Cleanse', icon: <Grape />, color: 'text-purple-500' },
              { label: 'Immunity Boost', icon: <Zap />, color: 'text-orange-500' },
              { label: 'Green Energy', icon: <Sprout />, color: 'text-emerald-500' },
              { label: 'Glow Skin', icon: <Sparkles />, color: 'text-rose-400' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-orange-200 transition-all cursor-pointer">
                <div className={`${item.color}`}>{item.icon}</div>
                <span className="font-bold text-slate-900 text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          <button className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl">
            Order Your Cleanse
          </button>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-orange-50 rounded-[4rem] rotate-6" />
          <div className="relative aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <SmartImage className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 15: Mindful Meditation (Dark & Serene)
  MindfulMeditation: () => (
    <div className="w-full min-h-screen bg-indigo-950 relative flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 z-0 opacity-20">
        <SmartImage className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 max-w-4xl space-y-12">
        <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white mx-auto animate-pulse">
          <Moon size={48} />
        </div>
        
        <h1 className="text-6xl md:text-9xl font-light text-white leading-none tracking-tighter uppercase font-serif">
          SILENCE <br/> THE <span className="italic text-indigo-300">NOISE.</span>
        </h1>
        
        <p className="text-indigo-200/60 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light italic">
          Discover the power of being present. Guided meditation and sound healing for a deeper connection to self.
        </p>

        <div className="flex flex-col items-center gap-8">
          <button className="px-16 py-6 bg-indigo-400 text-indigo-950 rounded-none font-black text-2xl hover:bg-indigo-300 transition-all shadow-2xl uppercase italic">
            Begin Journey
          </button>
          
          <div className="flex items-center gap-12 text-white/20 text-sm font-black uppercase tracking-[0.4em]">
            <div className="flex items-center gap-3">
              <Clock size={16} />
              <span>10 Min Sessions</span>
            </div>
            <div className="flex items-center gap-3">
              <Users size={16} />
              <span>Global Sangha</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 16: Kids Fitness (Playful & Bright)
  KidsFitness: () => (
    <div className="w-full min-h-screen bg-yellow-400 relative flex items-center justify-center p-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white border-t-8 border-b-8 border-dashed border-white/20" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full text-yellow-600 font-black uppercase tracking-tighter shadow-xl">
            <Smile size={24} className="animate-bounce" />
            <span>Fun • Active • Growing</span>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic">
            PLAY <br/> <span className="text-yellow-900">HARDER.</span>
          </h1>
          
          <p className="text-yellow-950 text-xl md:text-3xl max-w-lg font-bold leading-tight italic">
            Nuestros programas para niños combinan juegos, deportes y desarrollo motor en un ambiente seguro y divertido.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-10 py-5 bg-white text-yellow-600 rounded-none font-black text-xl hover:bg-yellow-900 hover:text-white transition-all shadow-[8px_8px_0px_rgba(0,0,0,0.1)] uppercase italic">
              Enroll Now
            </button>
          </div>
        </div>

        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[4rem] border-2 border-white/60 -rotate-6" />
          <div className="relative h-full w-full rounded-[4rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <SmartImage className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-rose-500 rounded-full flex items-center justify-center text-white font-black text-2xl rotate-12 shadow-xl border-4 border-white">
            Ages <br/> 5-12
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 17: Senior Wellness (Gentle & Caring)
  SeniorWellness: () => (
    <div className="w-full min-h-screen bg-indigo-50 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full bg-white rounded-[4rem] shadow-2xl shadow-indigo-900/10 p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-indigo-100 rounded-full text-indigo-600 font-black uppercase tracking-tighter">
            <Heart size={24} />
            <span>Vitality at Any Age</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight">
              Graceful <br/> <span className="text-indigo-600 underline decoration-8 underline-offset-8 italic">Strength.</span>
            </h1>
            <p className="text-slate-500 text-xl md:text-2xl leading-relaxed">
              Programas de bienestar especializados para adultos mayores. Enfoque en movilidad, equilibrio y salud cognitiva.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <button className="px-12 py-6 bg-indigo-600 text-white rounded-2xl font-black text-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
              Free Trial Session
            </button>
            <div className="flex flex-col justify-center border-l-4 border-indigo-100 pl-8">
              <div className="text-slate-900 font-black text-2xl">4.9/5</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest text-nowrap">Member Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="relative aspect-video rounded-[3.5rem] overflow-hidden shadow-2xl group">
          <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-white flex items-center justify-between">
            <div>
              <div className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-1">Coming Next</div>
              <div className="text-slate-900 font-bold text-2xl italic tracking-tighter">Chair Yoga Flow</div>
            </div>
            <Play className="text-indigo-600 fill-indigo-600" size={32} />
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 18: Corporate Wellness (SaaS Style)
  CorporateWellness: () => (
    <div className="w-full min-h-screen bg-slate-950 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest">
            <Layout size={16} />
            <span>Productivity Through Health</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
            Work Well. <br/> <span className="text-blue-500 italic">Live Better.</span>
          </h1>
          
          <p className="text-slate-400 text-xl leading-relaxed">
            The all-in-one health platform for modern teams. Reduce burnout, increase engagement, and build a thriving culture.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 space-y-2">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Engagement</div>
              <div className="text-white font-black text-4xl">78%</div>
              <div className="text-slate-600 text-xs italic">Avg. team participation</div>
            </div>
            <div className="p-6 bg-blue-600 rounded-3xl space-y-2 shadow-2xl shadow-blue-500/20">
              <div className="text-blue-100 text-[10px] font-black uppercase tracking-widest">Retention</div>
              <div className="text-white font-black text-4xl">+24%</div>
              <div className="text-blue-100/60 text-xs italic">Employee stay longer</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-20 bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="relative bg-slate-900 border border-slate-800 rounded-[3rem] p-10 shadow-2xl space-y-10">
            <div className="flex items-center justify-between">
              <div className="text-white font-black text-xl italic tracking-tighter">Team Dashboard</div>
              <Activity className="text-blue-400" />
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Weekly Steps', progress: 85, color: 'bg-blue-500' },
                { label: 'Sleep Quality', progress: 62, color: 'bg-indigo-500' },
                { label: 'Mindfulness Min', progress: 91, color: 'bg-emerald-500' },
                { label: 'Hydration Goal', progress: 44, color: 'bg-orange-500' }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-white">{item.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full transition-all duration-1000`} style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-3 italic">
              Book a Demo <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 19: Athletic Recovery Center (Tech & Dark)
  AthleticRecovery: () => (
    <div className="w-full min-h-screen bg-black relative flex flex-col items-center justify-end pb-24 px-8 overflow-hidden">
      <div className="absolute inset-0">
        <SmartImage className="w-full h-full object-cover opacity-60 scale-105 contrast-125" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full text-blue-300 text-xs font-black uppercase tracking-widest">
              <Zap size={16} />
              <span>Elite Performance Recovery</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic">
              ZERO <br/> <span className="text-blue-500 italic">GRAVITY.</span>
            </h1>
            
            <p className="text-zinc-400 text-xl md:text-2xl max-w-2xl leading-relaxed italic">
              Optimiza tu recuperación con tecnología de grado médico. Cámaras hiperbáricas, crioterapia de cuerpo entero y terapia de luz roja.
            </p>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 rounded-[3rem] space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-blue-400 font-black text-4xl">PRO</div>
                <div className="text-zinc-400 text-xs font-bold uppercase tracking-widest text-right italic leading-tight">Recovery <br/> Tier</div>
              </div>
              <div className="h-px bg-zinc-800" />
              <button className="w-full py-5 bg-blue-600 text-white rounded-none font-black text-lg hover:bg-blue-500 transition-all uppercase italic">
                Schedule Scan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 20: Fitness Portfolio Final (Full Catalog View)
  FitnessShowcaseFinal: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-[0.4em]">
              <Trophy size={20} />
              <span>Elite Wellness Network</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-950 leading-none tracking-tighter uppercase italic">
              Level <br/> <span className="text-blue-600 italic">Unlimited.</span>
            </h1>
          </div>
          <p className="text-slate-500 text-xl max-w-md leading-relaxed italic">
            Explora nuestro ecosistema completo de salud y bienestar. Desde el entrenamiento más intenso hasta la recuperación más profunda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Elite Training', count: '12 Classes', color: 'bg-black', icon: <Dumbbell /> },
            { label: 'Zen Sanctuary', count: '8 Styles', color: 'bg-emerald-500', icon: <Sprout /> },
            { label: 'HIIT & Spin', count: '24 Daily', color: 'bg-fuchsia-600', icon: <Bike /> },
            { label: 'Recovery Hub', count: '6 Techs', color: 'bg-blue-500', icon: <Zap /> },
            { label: 'Nutri-Lab', count: 'Personalized', color: 'bg-orange-500', icon: <Apple /> },
            { label: 'Junior Pro', count: 'Ages 5-16', color: 'bg-yellow-500', icon: <Smile /> }
          ].map((item, i) => (
            <div key={i} className="group p-10 bg-white border border-slate-200 rounded-[3rem] space-y-6 hover:shadow-2xl hover:shadow-slate-200 transition-all cursor-pointer">
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                {item.icon}
              </div>
              <div className="space-y-1">
                <div className="text-slate-900 font-black text-2xl uppercase italic tracking-tighter">{item.label}</div>
                <div className="text-slate-400 font-bold uppercase tracking-widest text-xs italic">{item.count}</div>
              </div>
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm pt-4 opacity-0 group-hover:opacity-100 transition-opacity uppercase italic tracking-tighter">
                Start Now <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

        <div className="p-12 bg-slate-900 rounded-[4rem] text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none uppercase italic tracking-tighter">Ready to transform <br/> your life?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-12 py-6 bg-blue-600 text-white rounded-none font-black text-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 uppercase italic tracking-tighter">
              Get Started
            </button>
            <button className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-none font-bold text-2xl hover:bg-white/20 transition-all uppercase italic tracking-tighter">
              Talk to a Coach
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
};
