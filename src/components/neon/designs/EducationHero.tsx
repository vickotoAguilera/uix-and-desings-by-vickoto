"use client";

import React from 'react';
import { SmartImage } from '../SmartImage';
import { 
  GraduationCap, 
  BookOpen, 
  Laptop, 
  Users, 
  Trophy, 
  Globe, 
  Search, 
  ArrowRight, 
  Play, 
  Star, 
  Calendar,
  ShieldCheck,
  Zap,
  Sparkles,
  Award,
  BookMarked,
  Library,
  Video,
  MonitorPlay,
  Languages,
  Smile,
  CheckCircle2,
  Music,
  Flame,
  Target,
  Cpu,
  History,
  Palette,
  Dna,
  Atom,
  Rocket,
  Microscope,
  Compass,
  Briefcase,
  Layers,
  Code,
  Layout,
  Terminal,
  Brain,
  Globe2
} from 'lucide-react';

export const EducationHero = {
  // Variante 01: Modern University (Classic & Prestigious)
  UniversityClassic: () => (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover opacity-50 brightness-75 contrast-125" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40" />
      </div>
      
      <div className="relative z-10 max-w-5xl space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 rounded-full text-blue-100 text-sm font-black uppercase tracking-widest">
          <Library size={16} />
          <span>Established 1924 • Ivy League Standard</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase">
          Shaping the <br/> <span className="text-blue-500">Future</span> Leaders.
        </h1>
        
        <p className="text-slate-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
          Experience world-class education with our diverse range of undergraduate and graduate programs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <button className="px-12 py-5 bg-blue-600 text-white rounded-none font-black text-xl hover:bg-blue-700 transition-all shadow-2xl uppercase tracking-tighter">
            Apply Now
          </button>
          <button className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-none font-bold text-xl hover:bg-white/20 transition-all uppercase tracking-tighter">
            Virtual Tour
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 px-12 flex justify-between items-end text-slate-500 text-[10px] font-black uppercase tracking-[0.5em]">
        <div className="flex items-center gap-4">
          <Globe size={16} />
          <span>Global Campus Network</span>
        </div>
        <div className="flex items-center gap-4">
          <Award size={16} />
          <span>Top 10 Global Ranking</span>
        </div>
      </div>
    </div>
  ),

  // Variante 02: E-Learning Platform (Modern & UI Focused)
  ELearningPlatform: () => (
    <div className="w-full min-h-screen bg-white flex flex-col pt-32 pb-12 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100">
            <Sparkles size={16} />
            <span>AI-Driven Learning Experience</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-none tracking-tight">
            Learn Anything, <br/> <span className="text-indigo-600">Anytime.</span>
          </h1>
          
          <p className="text-slate-500 text-xl leading-relaxed max-w-lg">
            Join 10M+ students worldwide. Master new skills with expert-led courses in technology, business, and design.
          </p>

          <div className="w-full bg-slate-50 p-2 rounded-2xl border border-slate-200 flex items-center gap-2 max-w-md">
            <Search className="text-slate-400 ml-4" size={20} />
            <input type="text" placeholder="What do you want to learn?" className="flex-1 bg-transparent py-4 font-bold text-slate-900 outline-none placeholder:text-slate-400" />
            <button className="bg-indigo-600 text-white px-6 py-4 rounded-xl font-black hover:bg-indigo-700 transition-all">
              Search
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3 items-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden">
                  <SmartImage className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="pl-6 text-slate-400 font-bold">5-Star Rated by 50k+</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-indigo-50 rounded-[4rem] -rotate-6" />
          <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <Play size={32} fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <MonitorPlay size={20} />
                </div>
                <div>
                  <div className="text-slate-900 font-black text-sm uppercase italic leading-tight">Full Stack Web Dev</div>
                  <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">By Mark Thompson</div>
                </div>
              </div>
              <div className="text-indigo-600 font-black">Free</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 03: Language Academy (Vibrant & Global)
  LanguageAcademy: () => (
    <div className="w-full min-h-screen bg-amber-50 relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-amber-200/50 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-orange-200/50 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-8 relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-amber-600 text-sm font-black shadow-lg">
            <Languages size={18} />
            <span>Speak Like a Native</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-slate-950 leading-none tracking-tighter uppercase">
            Unlock the <br/> <span className="text-amber-500 italic">World.</span>
          </h1>
          
          <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium">
            Learn 30+ languages with immersive methods, native instructors, and a community of global explorers.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-10 py-5 bg-amber-500 text-white rounded-2xl font-black text-lg hover:bg-amber-600 transition-all shadow-xl shadow-amber-200">
              Start Learning
            </button>
            <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-xl">
               <div className="flex -space-x-2">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" />
                 ))}
               </div>
               <span className="text-slate-900 font-black uppercase text-xs tracking-tighter">Native Teachers Online</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { lang: 'English', flag: '🇺🇸', color: 'bg-blue-100 text-blue-600' },
            { lang: 'Spanish', flag: '🇪🇸', color: 'bg-red-100 text-red-600' },
            { lang: 'French', flag: '🇫🇷', color: 'bg-indigo-100 text-indigo-600' },
            { lang: 'Japanese', flag: '🇯🇵', color: 'bg-slate-100 text-slate-600' }
          ].map((item, i) => (
            <div key={i} className={`p-8 rounded-[2.5rem] ${item.color} flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform cursor-pointer shadow-lg`}>
              <span className="text-4xl">{item.flag}</span>
              <span className="font-black uppercase tracking-tighter">{item.lang}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // Variante 04: Tech Bootcamp (Dark & Energetic)
  TechBootcamp: () => (
    <div className="w-full min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 select-none pointer-events-none flex flex-col justify-around text-[15vw] font-black text-white/5 leading-none whitespace-nowrap italic uppercase">
        <div className="-translate-x-20">CODE BUILD SCALE</div>
        <div className="translate-x-20">DESIGN DATA AI</div>
        <div className="-translate-x-10">HIRED DEPLOY SHIP</div>
      </div>

      <div className="relative z-10 max-w-5xl text-center space-y-12">
        <div className="w-20 h-20 bg-emerald-500 rounded-3xl rotate-12 flex items-center justify-center text-zinc-950 mx-auto shadow-[0_0_50px_rgba(16,185,129,0.3)]">
          <Laptop size={48} />
        </div>
        
        <h1 className="text-7xl md:text-[11rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic">
          ZERO TO <br/> <span className="text-emerald-500">ENGINEER.</span>
        </h1>
        
        <p className="text-zinc-400 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed italic">
          Intensive 12-week bootcamps designed to get you hired at the world's top tech companies. No degree required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
          <button className="px-12 py-6 bg-emerald-500 text-zinc-950 rounded-none font-black text-2xl hover:bg-emerald-400 transition-all shadow-[8px_8px_0px_rgba(255,255,255,0.1)] uppercase italic tracking-tighter">
            Apply for Cohort
          </button>
          <div className="flex items-center gap-4 text-white font-black text-xl uppercase italic">
            <Trophy size={32} className="text-emerald-500" />
            <span>95% Hire Rate</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 05: Creative Studio (Aesthetic & Minimal)
  CreativeStudio: () => (
    <div className="w-full min-h-screen bg-rose-50 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-10">
          <div className="w-20 h-2 bg-rose-900" />
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-none tracking-tighter uppercase font-serif">
            Design <br/> <span className="text-rose-400 italic">Academy.</span>
          </h1>
          <p className="text-slate-500 text-xl leading-relaxed max-w-sm">
            Master the art of visual storytelling with world-renowned designers and creative directors.
          </p>
          <button className="group flex items-center gap-4 text-slate-900 font-black text-2xl uppercase tracking-tighter hover:text-rose-600 transition-colors italic">
            View Curricula
            <ArrowRight className="group-hover:translate-x-4 transition-transform" />
          </button>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-6 h-[700px]">
          <div className="relative rounded-[3rem] overflow-hidden group shadow-2xl">
            <SmartImage className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-rose-950/20 group-hover:bg-transparent transition-all" />
          </div>
          <div className="space-y-6">
            <div className="h-[45%] relative rounded-[3rem] overflow-hidden group shadow-xl">
              <SmartImage className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-rose-950/20 group-hover:bg-transparent transition-all" />
            </div>
            <div className="h-[55%] bg-rose-950 rounded-[3rem] p-12 flex flex-col justify-between text-white shadow-2xl">
              <div className="text-4xl font-black italic">100%</div>
              <div className="space-y-2">
                <div className="text-rose-400 font-bold uppercase tracking-widest text-xs italic">Student Success</div>
                <div className="text-xl font-medium leading-tight">Portfolios that land dream jobs. Every time.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 06: Academic Research (Professional & Formal)
  AcademicResearch: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-black uppercase tracking-widest">
            <Library size={16} />
            <span>International Research Hub</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-none tracking-tight uppercase">
            Advancing <br/> <span className="text-slate-400">Human</span> Knowledge.
          </h1>
          
          <p className="text-slate-500 text-xl leading-relaxed max-w-lg font-medium">
            Join a community of scholars dedicated to solving global challenges through rigorous research and innovation.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 space-y-2">
              <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Publications</div>
              <div className="text-slate-900 font-black text-4xl">12k+</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest italic">Peer Reviewed</div>
            </div>
            <div className="p-6 bg-slate-900 rounded-3xl space-y-2 shadow-2xl">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Funding</div>
              <div className="text-white font-black text-4xl">$85M</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest italic">Annual Grants</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-20 bg-slate-200 rounded-full blur-[120px]" />
          <div className="relative bg-white border border-slate-200 rounded-[3rem] p-10 shadow-2xl shadow-slate-200 space-y-10">
            <div className="flex items-center justify-between">
              <div className="text-slate-900 font-black text-xl italic uppercase tracking-tighter">Current Projects</div>
              <Zap className="text-slate-900" />
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Quantum Computing', progress: 85, color: 'bg-slate-900' },
                { label: 'Climate Resilience', progress: 62, color: 'bg-slate-600' },
                { label: 'Biotech Innovation', progress: 91, color: 'bg-slate-400' },
                { label: 'Urban Sociology', progress: 44, color: 'bg-slate-200' }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span className="text-slate-400 italic">{item.label}</span>
                    <span className="text-slate-900">{item.progress}% Funded</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full transition-all duration-1000`} style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all uppercase italic tracking-tighter">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 07: Early Childhood (Playful & Warm)
  EarlyChildhood: () => (
    <div className="w-full min-h-screen bg-sky-50 relative flex items-center justify-center p-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white border-t-8 border-b-8 border-dashed border-white/20" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full text-sky-600 font-black uppercase tracking-tighter shadow-xl">
            <Smile className="animate-bounce" size={24} />
            <span>Discover • Play • Grow</span>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black text-sky-900 leading-[0.8] tracking-tighter uppercase italic">
            FIRST <br/> <span className="text-sky-400">STEPS.</span>
          </h1>
          
          <p className="text-sky-950 text-xl md:text-3xl max-w-lg font-bold leading-tight italic">
            Un entorno seguro y creativo donde los más pequeños comienzan su viaje de aprendizaje a través del juego y la exploración.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-10 py-5 bg-sky-600 text-white rounded-none font-black text-xl hover:bg-sky-900 transition-all shadow-[8px_8px_0px_rgba(0,0,0,0.1)] uppercase italic tracking-tighter">
              Enroll Your Child
            </button>
          </div>
        </div>

        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[4rem] border-2 border-white/60 -rotate-6" />
          <div className="relative h-full w-full rounded-[4rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <SmartImage className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-400 rounded-full flex items-center justify-center text-white font-black text-2xl rotate-12 shadow-xl border-4 border-white">
            Ages <br/> 3-6
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 08: Test Prep (Intense & Success Driven)
  TestPrep: () => (
    <div className="w-full min-h-screen bg-indigo-950 relative flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover opacity-30 grayscale contrast-125" />
      </div>
      
      <div className="relative z-10 max-w-4xl space-y-12">
        <div className="w-24 h-24 rounded-full bg-indigo-500/20 backdrop-blur-2xl border border-indigo-400/30 flex items-center justify-center text-indigo-400 mx-auto animate-pulse">
          <Trophy size={48} />
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase italic">
          CRACK <br/> THE <span className="text-indigo-400 italic">EXAM.</span>
        </h1>
        
        <p className="text-indigo-100/60 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light italic">
          Master the SAT, GRE, or GMAT with our proven score-boosting strategies and personalized study plans.
        </p>

        <div className="flex flex-col items-center gap-8">
          <button className="px-16 py-6 bg-indigo-500 text-white rounded-none font-black text-2xl hover:bg-indigo-400 transition-all shadow-2xl uppercase italic tracking-tighter">
            Get Score Report
          </button>
          
          <div className="flex items-center gap-12 text-indigo-200/40 text-sm font-black uppercase tracking-[0.4em]">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={16} />
              <span>Score Guarantee</span>
            </div>
            <div className="flex items-center gap-3">
              <Users size={16} />
              <span>Expert Tutors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 09: Music Academy (Artistic & Expressive)
  MusicAcademy: () => (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col lg:flex-row items-stretch">
      <div className="lg:w-1/2 relative min-h-[50vh]">
        <SmartImage className="w-full h-full object-cover grayscale brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent" />
        <div className="absolute top-12 left-12">
          <Music size={48} className="text-white" />
        </div>
      </div>
      
      <div className="lg:w-1/2 flex flex-col justify-center p-12 lg:p-24 space-y-10">
        <div className="inline-flex items-center gap-2 text-rose-500 font-black text-xs uppercase tracking-[0.4em]">
          <span>Classical to Contemporary</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase italic font-serif">
          FIND YOUR <br/> <span className="text-rose-600">VOICE.</span>
        </h1>
        
        <p className="text-zinc-400 text-xl leading-relaxed max-w-lg italic font-light">
          From the first note to the final performance. Master your instrument with world-class musicians in a creative and inspiring environment.
        </p>

        <div className="grid grid-cols-2 gap-8 pt-4">
          <div className="space-y-1">
            <div className="text-white font-black text-4xl">1-on-1</div>
            <div className="text-rose-500 text-xs font-bold uppercase tracking-widest italic">Personal Lessons</div>
          </div>
          <div className="space-y-1">
            <div className="text-white font-black text-4xl">Live</div>
            <div className="text-rose-500 text-xs font-bold uppercase tracking-widest italic">Stage Experience</div>
          </div>
        </div>

        <button className="w-full sm:w-auto px-12 py-6 bg-white text-zinc-950 rounded-none font-black text-2xl hover:bg-rose-600 hover:text-white transition-all uppercase italic tracking-tighter">
          Book Audition
        </button>
      </div>
    </div>
  ),

  // Variante 10: Education Bento (Bento & Interactive)
  EducationBento: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-indigo-600 font-black text-sm uppercase tracking-[0.4em]">
              <Library size={20} />
              <span>Learning Hub 2024</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-950 leading-none tracking-tighter uppercase italic">
              Future of <br/> <span className="text-indigo-600 italic">Learning.</span>
            </h1>
          </div>
          <p className="text-slate-500 text-xl max-w-md leading-relaxed italic">
            Explora todas nuestras categorías y encuentra el camino perfecto para tu crecimiento personal y profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-[800px] md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 relative rounded-[3rem] overflow-hidden group shadow-2xl">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 space-y-2">
              <h3 className="text-3xl font-bold text-white uppercase italic tracking-tighter">Higher Ed</h3>
              <p className="text-white/60 text-sm italic">Academic excellence.</p>
            </div>
          </div>
          
          <div className="relative rounded-[3rem] overflow-hidden group bg-white border border-slate-200 shadow-xl flex flex-col items-center justify-center p-8 text-center space-y-4 hover:border-indigo-500 transition-all cursor-pointer">
            <MonitorPlay className="text-indigo-600" size={48} />
            <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">E-Learning</h3>
            <div className="px-4 py-1 bg-indigo-50 rounded-full text-indigo-600 text-[10px] font-bold uppercase tracking-widest">500+ Courses</div>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden group bg-indigo-600 flex flex-col items-center justify-center p-8 text-center space-y-4 shadow-2xl">
            <Zap className="text-white animate-pulse" size={48} />
            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">Live Cohorts</h3>
            <div className="px-4 py-1 bg-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">Join Now</div>
          </div>

          <div className="md:col-span-2 relative rounded-[3rem] overflow-hidden group shadow-2xl">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/80 to-transparent" />
            <div className="absolute inset-y-0 left-10 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white uppercase italic tracking-tighter">Tech Bootcamp</h3>
              <p className="text-white/60 text-sm italic">Career transform.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 11: Edu_Brutalist (Neo-Brutalismo: Bordes negros, sombras duras, colores vivos)
  Edu_Brutalist: () => (
    <div className="w-full min-h-screen bg-yellow-400 p-8 flex items-center justify-center font-mono">
      <div className="max-w-6xl w-full border-[6px] border-black bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-12 space-y-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 border-l-[6px] border-b-[6px] border-black bg-black text-white font-black text-2xl rotate-12 -translate-y-2 translate-x-2">
          NO BULLSH*T EDUCATION
        </div>
        
        <div className="space-y-4">
          <div className="inline-block bg-black text-white px-6 py-2 text-xl font-black uppercase tracking-tighter italic">
            Skills {"\u003e"} Degrees
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black text-black leading-[0.85] tracking-tight uppercase">
            LEARN <br/> FAST. <br/> <span className="bg-black text-yellow-400 px-4">BUILD.</span>
          </h1>
        </div>

        <p className="text-2xl md:text-4xl font-black text-black max-w-2xl border-l-[12px] border-black pl-8 italic">
          Forget the fluff. Get real-world skills from industry veterans who actually code.
        </p>

        <div className="flex flex-wrap gap-6">
          <button className="px-10 py-6 bg-black text-white border-[4px] border-black hover:bg-white hover:text-black transition-colors font-black text-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] uppercase">
            JOIN NOW
          </button>
          <button className="px-10 py-6 bg-white text-black border-[4px] border-black hover:bg-yellow-400 transition-colors font-black text-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] uppercase">
            CURRICULUM
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-[4px] border-black">
          {[
            { label: 'COURSES', val: '50+' },
            { label: 'STUDENTS', val: '10K' },
            { label: 'JOBS', val: '98%' },
            { label: 'RATING', val: '4.9' }
          ].map((stat, i) => (
            <div key={i} className="p-6 border-r-[4px] last:border-r-0 border-black flex flex-col items-center justify-center text-center group hover:bg-black hover:text-white transition-all">
              <div className="text-4xl font-black">{stat.val}</div>
              <div className="text-xs font-black uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // Variante 12: Edu_Glass20 (Glassmorphism 2.0: Background animado, desenfoque masivo)
  Edu_Glass20: () => (
    <div className="w-full min-h-screen relative flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-slate-950 animate-pulse" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[150px] animate-bounce duration-[10s]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px] animate-pulse duration-[8s]" />
      
      <div className="relative z-10 max-w-4xl w-full mx-6 p-12 md:p-24 rounded-[4rem] bg-white/5 backdrop-blur-[60px] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] text-center space-y-12 overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 rounded-full text-white text-sm font-black uppercase tracking-[0.3em] border border-white/5">
          <Sparkles className="text-purple-400" size={16} />
          <span>Infinite Learning Potential</span>
        </div>
        
        <h1 className="text-6xl md:text-[8rem] font-black text-white leading-none tracking-tighter uppercase italic">
          BEYOND <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">LIMITS.</span>
        </h1>
        
        <p className="text-slate-300 text-xl md:text-3xl max-w-2xl mx-auto leading-relaxed font-light italic opacity-80 group-hover:opacity-100 transition-opacity">
          An immersive education ecosystem designed for the next generation of digital pioneers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
          <button className="px-16 py-6 bg-white text-slate-950 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] uppercase italic">
            Get Started
          </button>
          <div className="flex items-center gap-4 text-white/40 font-black text-xl uppercase italic hover:text-white transition-colors cursor-pointer">
            <Play size={32} />
            <span>Watch Story</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 13: Edu_Retro8Bit (Retro 8-Bit: Estilo NES, bordes pixelados, fuente mono)
  Edu_Retro8Bit: () => (
    <div className="w-full min-h-screen bg-[#202020] flex items-center justify-center p-8 font-mono">
      <div className="max-w-4xl w-full border-[8px] border-white p-12 bg-black shadow-[16px_16px_0px_0px_rgba(255,255,255,0.1)] space-y-12">
        <div className="flex items-center justify-between border-b-8 border-white pb-8">
          <div className="text-white text-4xl font-black uppercase tracking-tighter">LVL 99 EDU</div>
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-8 bg-red-600 border-4 border-white shadow-[4px_4px_0px_rgba(0,0,0,0.5)]" />
            ))}
          </div>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase">
          PRESS START <br/> <span className="text-yellow-400 animate-pulse">TO LEARN.</span>
        </h1>
        
        <div className="p-8 bg-zinc-900 border-4 border-white text-zinc-400 text-xl md:text-2xl leading-relaxed uppercase">
          {">"} SELECT YOUR PATH:<br/>
          {">"} [1] FULL STACK WIZARD<br/>
          {">"} [2] DESIGN ALCHEMIST<br/>
          {">"} [3] DATA NECROMANCER
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <button className="px-12 py-6 bg-blue-600 text-white border-4 border-white shadow-[8px_8px_0px_rgba(0,0,0,0.5)] font-black text-2xl hover:-translate-y-2 transition-transform uppercase">
            CONTINUE
          </button>
          <button className="px-12 py-6 bg-zinc-800 text-white border-4 border-white shadow-[8px_8px_0px_rgba(0,0,0,0.5)] font-black text-2xl hover:-translate-y-2 transition-transform uppercase">
            LOAD GAME
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 14: Edu_CyberFuture (Cyberpunk: Neón, grids, HUD, glitch)
  Edu_CyberFuture: () => (
    <div className="w-full min-h-screen bg-black relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#0ff 1px, transparent 1px), linear-gradient(90deg, #0ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-8">
        <div className="space-y-12">
          <div className="flex items-center gap-4 text-cyan-400 font-mono text-xs uppercase tracking-[0.5em]">
            <Terminal size={20} />
            <span className="animate-pulse">SYSTEM_ONLINE // COHORT_2024</span>
          </div>
          
          <h1 className="text-7xl md:text-[11rem] font-black text-white leading-[0.8] tracking-tighter uppercase relative group">
            NEURAL <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 italic">ACADEMY.</span>
            <div className="absolute -inset-2 bg-cyan-400/20 blur-2xl group-hover:bg-fuchsia-500/20 transition-all" />
          </h1>
          
          <p className="text-cyan-100/60 text-xl md:text-2xl max-w-lg font-mono leading-relaxed">
            Upgrade your biological hardware with the latest industry-standard protocols. Direct neural link available for Premium members.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="px-10 py-5 bg-cyan-500 text-black font-black text-xl hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(6,182,212,0.5)] uppercase tracking-tighter skew-x-[-10deg]">
              INITIATE UPLOAD
            </button>
            <div className="flex items-center gap-4 px-8 py-5 border border-fuchsia-500/50 text-fuchsia-500 font-black text-xl uppercase skew-x-[-10deg] hover:bg-fuchsia-500/10 transition-all cursor-pointer">
              <Cpu size={24} />
              <span>CORE STATS</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-20 bg-fuchsia-500/10 rounded-full blur-[100px]" />
          <div className="relative border-2 border-cyan-500/30 p-8 bg-black/40 backdrop-blur-xl skew-y-3">
             <div className="flex justify-between border-b border-cyan-500/30 pb-4 mb-8">
               <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest">User_Interface.v4</span>
               <div className="flex gap-2">
                 <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                 <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-ping" />
               </div>
             </div>
             <div className="space-y-6">
               {[
                 { label: 'SYNAPTIC_BANDWIDTH', val: '95%', color: 'bg-cyan-500' },
                 { label: 'COGNITIVE_OVERCLOCK', val: '82%', color: 'bg-fuchsia-500' },
                 { label: 'DATA_RETENTION', val: '100%', color: 'bg-emerald-500' }
               ].map((stat, i) => (
                 <div key={i} className="space-y-2">
                   <div className="flex justify-between text-[10px] font-mono text-cyan-100/40 uppercase tracking-widest">
                     <span>{stat.label}</span>
                     <span className="text-white">{stat.val}</span>
                   </div>
                   <div className="h-1 w-full bg-white/5 overflow-hidden">
                     <div className={`${stat.color} h-full shadow-[0_0_10px_currentColor]`} style={{ width: stat.val }} />
                   </div>
                 </div>
               ))}
             </div>
             <div className="mt-8 p-4 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] leading-relaxed uppercase tracking-widest">
               Warning: High cognitive load detected. Ensure adequate hydration before proceeding.
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 15: Edu_SwissMinimal (Swiss Style: Grid asimétrico, tipografía gigante)
  Edu_SwissMinimal: () => (
    <div className="w-full min-h-screen bg-[#F0F0F0] text-[#1A1A1A] flex flex-col items-center justify-center p-8 md:p-24 font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-8 space-y-12">
          <div className="text-[12px] font-black uppercase tracking-[0.5em] border-b-2 border-black pb-4 inline-block">
            Zürich Academic Standards • Vol. 01
          </div>
          <h1 className="text-8xl md:text-[14rem] font-black leading-[0.75] tracking-tighter uppercase">
            PURE <br/> EDUCA <br/> TION.
          </h1>
        </div>
        <div className="md:col-span-4 space-y-8 pt-12">
          <p className="text-2xl md:text-3xl font-medium leading-tight tracking-tight border-l-4 border-black pl-8">
            The foundation of knowledge through the lens of functional design and clarity.
          </p>
          <div className="space-y-4">
            <button className="w-full py-6 bg-black text-white font-black text-2xl uppercase tracking-tighter hover:bg-red-600 transition-colors">
              COURSES
            </button>
            <button className="w-full py-6 bg-transparent border-2 border-black font-black text-2xl uppercase tracking-tighter hover:bg-black hover:text-white transition-all">
              ABOUT US
            </button>
          </div>
        </div>
      </div>

      <div className="mt-32 w-full grid grid-cols-2 md:grid-cols-6 gap-8 border-t-2 border-black pt-12">
        {['TYPOGRAPHY', 'LAYOUT', 'COLOR', 'GRID', 'HIERARCHY', 'SYSTEMS'].map((topic, i) => (
          <div key={i} className="flex flex-col gap-2 group cursor-pointer">
            <span className="text-[10px] font-black text-red-600">0{i+1}</span>
            <span className="text-sm font-black uppercase group-hover:underline">{topic}</span>
          </div>
        ))}
      </div>
    </div>
  ),

  // Variante 16: Edu_Neumorphic (Neumorfismo: Sombras suaves, tacto 3D suave)
  Edu_Neumorphic: () => (
    <div className="w-full min-h-screen bg-[#E0E5EC] flex items-center justify-center p-8">
      <div className="max-w-4xl w-full p-16 rounded-[4rem] bg-[#E0E5EC] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] space-y-12 text-center">
        <div className="w-24 h-24 bg-[#E0E5EC] rounded-3xl shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] mx-auto flex items-center justify-center text-slate-500">
          <Brain size={48} />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-slate-700 leading-none tracking-tight uppercase">
          Soft <br/> Learning.
        </h1>
        
        <p className="text-slate-500 text-xl md:text-2xl max-w-xl mx-auto font-medium">
          A tactile and intuitive approach to digital learning. Comfort for your mind.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-8">
          <button className="px-12 py-6 rounded-2xl bg-[#E0E5EC] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] text-slate-700 font-black text-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all uppercase tracking-widest">
            EXPLORE
          </button>
          <button className="px-12 py-6 rounded-2xl bg-[#E0E5EC] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] text-indigo-500 font-black text-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all uppercase tracking-widest">
            LOG IN
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 17: Edu_WabiSabi (Wabi-Sabi: Formas orgánicas, colores tierra)
  Edu_WabiSabi: () => (
    <div className="w-full min-h-screen bg-[#FAF7F2] flex items-center justify-center p-8 overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
           <div className="absolute -inset-10 bg-amber-100/50 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-pulse" />
           <div className="relative aspect-[4/5] bg-stone-200 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
             <SmartImage className="w-full h-full object-cover" />
           </div>
        </div>

        <div className="space-y-12">
          <div className="font-serif italic text-stone-400 text-2xl">Finding beauty in the journey.</div>
          
          <h1 className="text-7xl md:text-9xl font-serif text-stone-800 leading-none tracking-tighter">
            Slow <br/> <span className="text-amber-700/60">Study.</span>
          </h1>
          
          <p className="text-stone-500 text-xl md:text-2xl leading-relaxed font-light max-w-md">
            Education is not a race. It's a craft. Master your skills with patience and mindful practice.
          </p>

          <div className="flex gap-8 items-center pt-4">
            <button className="px-12 py-5 bg-stone-800 text-stone-100 rounded-full font-medium text-lg hover:bg-stone-700 transition-colors shadow-xl">
              Begin Journey
            </button>
            <div className="w-16 h-[1px] bg-stone-300" />
            <span className="text-stone-400 font-serif italic">Est. 2024</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 18: Edu_BentoPro (Bento Grid Pro: Estructura de cajas perfecta)
  Edu_BentoPro: () => (
    <div className="w-full min-h-screen bg-white flex flex-col pt-32 pb-24 px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 grid-rows-6 md:grid-rows-3 gap-6 h-auto md:h-[800px]">
        <div className="md:col-span-8 md:row-span-2 bg-indigo-600 rounded-[3rem] p-16 flex flex-col justify-end text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <GraduationCap size={300} />
          </div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-6xl md:text-9xl font-black leading-none tracking-tighter uppercase italic">
              MASTER <br/> THE ART.
            </h2>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-xl font-medium italic">
              Comprehensive professional training programs with industry certification.
            </p>
            <button className="px-10 py-4 bg-white text-indigo-600 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl uppercase italic">
              Browse Catalog
            </button>
          </div>
        </div>

        <div className="md:col-span-4 md:row-span-1 bg-slate-50 rounded-[3rem] p-10 flex flex-col justify-between border border-slate-200 shadow-xl group hover:border-indigo-500 transition-all">
          <div className="flex justify-between items-start">
            <div className="p-4 bg-indigo-100 rounded-2xl text-indigo-600">
              <Users size={32} />
            </div>
            <ArrowRight className="text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-2 transition-all" />
          </div>
          <div className="space-y-1">
            <div className="text-slate-950 font-black text-3xl uppercase italic tracking-tighter">Community</div>
            <div className="text-slate-400 text-sm font-bold uppercase italic">Connect with 50k+ Peers</div>
          </div>
        </div>

        <div className="md:col-span-4 md:row-span-1 bg-slate-950 rounded-[3rem] p-10 flex items-center gap-8 shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent" />
          <div className="text-white relative z-10">
            <div className="text-5xl font-black italic tracking-tighter">98%</div>
            <div className="text-slate-500 text-xs font-bold uppercase italic tracking-[0.2em]">Hire Rate</div>
          </div>
          <div className="h-full w-[2px] bg-white/10" />
          <div className="text-white relative z-10">
            <div className="text-2xl font-black italic tracking-tighter">Top 10</div>
            <div className="text-slate-500 text-xs font-bold uppercase italic tracking-[0.2em]">Global Rank</div>
          </div>
        </div>

        <div className="md:col-span-4 md:row-span-1 bg-rose-50 rounded-[3rem] p-10 flex flex-col justify-between border border-rose-100 shadow-xl group hover:bg-rose-100 transition-all">
          <div className="flex justify-between items-start text-rose-600">
            <MonitorPlay size={32} />
            <div className="px-4 py-1 bg-rose-200 rounded-full text-[10px] font-black uppercase tracking-widest">Live</div>
          </div>
          <div className="space-y-1">
            <div className="text-rose-950 font-black text-3xl uppercase italic tracking-tighter">Live Sessions</div>
            <div className="text-rose-400 text-sm font-bold uppercase italic">Every Tuesday & Thursday</div>
          </div>
        </div>

        <div className="md:col-span-4 md:row-span-1 bg-white border-4 border-slate-950 rounded-[3rem] p-10 flex flex-col justify-between shadow-[12px_12px_0px_rgba(0,0,0,1)] group hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all cursor-pointer">
          <div className="text-slate-950 font-black text-3xl uppercase italic tracking-tighter">Free Resources</div>
          <div className="flex items-center gap-4 text-slate-400 font-bold uppercase italic text-xs">
            <span>Check out our blog</span>
            <ArrowRight size={16} />
          </div>
        </div>

        <div className="md:col-span-4 md:row-span-1 relative rounded-[3rem] overflow-hidden group shadow-2xl">
          <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-950 shadow-2xl">
              <Play fill="currentColor" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 19: Edu_LuxuryEditorial (Luxury Editorial: Serif, alto contraste, elegancia)
  Edu_LuxuryEditorial: () => (
    <div className="w-full min-h-screen bg-white text-slate-950 flex flex-col items-center justify-center px-8 py-24">
      <div className="max-w-5xl w-full space-y-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="w-12 h-[1px] bg-slate-950" />
          <div className="text-sm font-bold uppercase tracking-[0.6em] text-slate-400">The Scholarly Review • MMXXIV</div>
          <h1 className="text-7xl md:text-[10rem] font-serif italic font-light leading-none tracking-tight">
            The <br/> <span className="font-black not-italic text-slate-900">Eminent</span> <br/> Path.
          </h1>
          <p className="text-xl md:text-3xl font-serif text-slate-500 max-w-2xl leading-relaxed italic">
            "Education is the most powerful weapon which you can use to change the world."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-y border-slate-100 py-16">
          {[
            { title: 'Heritage', desc: 'A century of academic excellence and prestige.' },
            { title: 'Vision', desc: 'Pioneering the future of global education.' },
            { title: 'Community', desc: 'A network of world-changing alumni.' }
          ].map((item, i) => (
            <div key={i} className="space-y-4 text-center">
              <h3 className="text-2xl font-serif font-black italic">{item.title}</h3>
              <p className="text-slate-400 font-serif leading-relaxed italic">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <button className="px-16 py-6 bg-slate-950 text-white font-serif italic text-2xl hover:bg-slate-800 transition-all shadow-2xl">
            Request Prospectus
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 20: Edu_SciFiAcademy (Futuristic: Formas abstractas, luz radial, sci-fi)
  Edu_SciFiAcademy: () => (
    <div className="w-full min-h-screen bg-slate-950 relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{ backgroundImage: 'radial-gradient(#38bdf8 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
      
      <div className="relative z-10 max-w-5xl w-full text-center space-y-16 px-6">
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-sky-500/20 blur-xl animate-pulse rounded-full" />
          <div className="relative w-24 h-24 border-2 border-sky-500/50 rounded-full flex items-center justify-center text-sky-400 animate-[spin_10s_linear_infinite]">
            <Atom size={48} />
          </div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-7xl md:text-[12rem] font-black text-white leading-none tracking-tighter uppercase italic bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-sky-900">
            XENO <br/> STUDY.
          </h1>
          <div className="h-1 w-64 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto" />
        </div>
        
        <p className="text-sky-100/40 text-xl md:text-3xl max-w-3xl mx-auto font-mono uppercase tracking-[0.2em] leading-relaxed">
          Unlocking the mysteries of the multiverse through advanced quantum education.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-8">
          <button className="relative group">
            <div className="absolute -inset-1 bg-sky-500 blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative px-16 py-6 bg-slate-900 border border-sky-500/50 text-sky-400 font-mono text-2xl uppercase tracking-tighter hover:text-white transition-colors">
              [ ENTER_PORTAL ]
            </div>
          </button>
          
          <div className="flex items-center gap-4 text-sky-900 font-mono text-sm uppercase tracking-widest">
            <Rocket size={24} />
            <span>Orbiting Earth // Sector 7</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 flex flex-col gap-4 text-sky-500/20 font-mono text-[10px] uppercase tracking-[0.5em]">
        <div>Coord: 40.7128° N, 74.0060° W</div>
        <div>Status: Nominal</div>
      </div>
    </div>
  ),
};

