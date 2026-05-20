"use client";

import React from 'react';
import { SmartImage } from '../SmartImage';
import { 
  Heart, 
  HandHelping, 
  Globe, 
  Users, 
  Leaf, 
  GraduationCap, 
  Droplets, 
  Stethoscope, 
  Scale, 
  BarChart3,
  ArrowRight,
  ShieldCheck,
  Zap,
  Gift,
  Sun,
  HandHeart,
  Calendar,
  MapPin,
  Target,
  Sparkles,
  Bird,
  Home,
  Trophy,
  Wind,
  Flower2,
  PhoneCall,
  Coins,
  Waves,
  Accessibility,
  LayoutDashboard
} from 'lucide-react';

export const SocialImpactHero = {
  // Variante 01: Classic NGO (Professional & Trust)
  Classic: () => (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover brightness-[0.5] contrast-[1.1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-slate-950/80" />
      </div>
      
      <div className="relative z-10 max-w-5xl space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full text-blue-100 text-sm font-semibold">
          <ShieldCheck size={16} className="text-blue-400" />
          <span>Registered Non-Profit Organization</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tight">
          Changing Lives <br/> Through <span className="text-blue-400">Collective Action.</span>
        </h1>
        
        <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Join a global community dedicated to solving the world's most pressing challenges. 
          Your contribution makes a real, measurable difference.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2">
            Donate Now <Heart size={20} className="fill-white" />
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
            Our Mission
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10">
          {[
            { label: 'Funds Raised', value: '$12M+' },
            { label: 'Volunteers', value: '50k+' },
            { label: 'Lives Impacted', value: '1.2M' },
            { label: 'Countries', value: '45' }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
              <div className="text-blue-300 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // Variante 02: Urgent Cause (High Contrast & Emergency)
  UrgentCause: () => (
    <div className="w-full min-h-screen bg-rose-950 relative flex items-center overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <SmartImage className="w-full h-full object-cover grayscale opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950 via-rose-950/40 to-transparent" />
      </div>
      
      <div className="relative z-10 px-8 lg:px-24 max-w-4xl space-y-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600 rounded text-white text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">
          <Zap size={14} />
          <span>Emergency Appeal</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter">
          TIME IS <br/> <span className="text-rose-600">RUNNING OUT.</span>
        </h1>
        
        <p className="text-rose-200 text-xl md:text-2xl max-w-lg leading-relaxed font-medium">
          The crisis in the region is escalating. Thousands are without food, water, or shelter. 
          Every minute counts.
        </p>

        <div className="space-y-6">
          <div className="w-full bg-rose-900/50 rounded-full h-4 overflow-hidden border border-rose-800">
            <div className="bg-rose-500 h-full w-[75%] relative">
              <div className="absolute inset-0 bg-white/20 animate-shimmer" />
            </div>
          </div>
          <div className="flex justify-between text-rose-300 font-bold text-sm uppercase tracking-widest">
            <span>Raised: $750,000</span>
            <span>Goal: $1,000,000</span>
          </div>
        </div>

        <button className="group px-12 py-6 bg-white text-rose-950 rounded-full font-black text-2xl hover:bg-rose-100 transition-all flex items-center gap-4 shadow-2xl shadow-black">
          HELP NOW
          <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
        </button>
      </div>
    </div>
  ),

  // Variante 03: Volunteer Focus (Community & Human)
  VolunteerFocus: () => (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-full max-w-7xl px-8 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="flex items-center gap-3 text-orange-600 font-black text-sm uppercase tracking-[0.3em]">
            <Users size={20} />
            <span>Join the Community</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-none tracking-tight">
            Be the <span className="text-orange-500 italic">Change</span> You Want to See.
          </h1>
          
          <p className="text-slate-600 text-xl leading-relaxed">
            Your skills can transform communities. Whether you're a teacher, builder, or organizer, 
            there's a place for you in our mission.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all">
              Become a Volunteer
            </button>
            <button className="px-8 py-4 bg-orange-100 text-orange-700 rounded-2xl font-bold hover:bg-orange-200 transition-all">
              View Openings
            </button>
          </div>

          <div className="pt-8 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-slate-100 overflow-hidden">
                   <SmartImage className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm font-bold text-slate-400">
              <span className="text-slate-900">4,200+</span> active volunteers worldwide
            </div>
          </div>
        </div>

        <div className="relative aspect-square">
          <div className="absolute -inset-10 bg-orange-100 rounded-full -rotate-6" />
          <div className="relative h-full w-full rounded-[4rem] overflow-hidden shadow-2xl">
            <SmartImage className="w-full h-full object-cover" />
            <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white">
                  <HandHelping size={24} />
                </div>
                <div>
                  <div className="text-slate-900 font-black">Next Project</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Community Center, Nairobi</div>
                </div>
              </div>
              <div className="text-slate-600 text-sm leading-relaxed">
                "Volunteering here changed my perspective on global solidarity. It's not just about giving, it's about connecting."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 04: Eco Impact (Environmental & Green)
  EcoImpact: () => (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-end pb-24 px-8 overflow-hidden bg-emerald-950">
      <div className="absolute inset-0">
        <SmartImage className="w-full h-full object-cover opacity-60 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 rounded-full text-emerald-300 text-xs font-black uppercase tracking-widest">
              <Leaf size={16} />
              <span>Environmental Conservation</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter">
              RESTORE <br/> OUR <span className="text-emerald-400">PLANET.</span>
            </h1>
            
            <p className="text-emerald-100/70 text-xl md:text-2xl max-w-2xl leading-relaxed">
              Protecting ecosystems, planting millions of trees, and securing a sustainable future for the next generations.
            </p>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-emerald-900/40 backdrop-blur-2xl border border-emerald-800 rounded-[3rem] space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-emerald-400 font-black text-4xl">4.5M</div>
                <div className="text-emerald-200 text-xs font-bold uppercase tracking-widest text-right">Trees <br/> Planted</div>
              </div>
              <div className="h-px bg-emerald-800" />
              <button className="w-full py-5 bg-emerald-500 text-emerald-950 rounded-2xl font-black text-lg hover:bg-emerald-400 transition-all">
                Donate to Plant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 05: Global Health (Medical & Hopeful)
  GlobalHealth: () => (
    <div className="w-full min-h-screen bg-sky-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8 pt-32 text-center">
        <div className="max-w-4xl space-y-10">
          <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-sky-600 mx-auto border border-sky-100">
            <Stethoscope size={40} />
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-sky-950 leading-none tracking-tight">
            Health is a <br/> <span className="text-sky-500 underline decoration-sky-200 underline-offset-8">Human Right.</span>
          </h1>
          
          <p className="text-sky-700/60 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
            Bringing essential medical care, vaccines, and clean sanitation to the world's most vulnerable regions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-12 py-5 bg-sky-600 text-white rounded-full font-black text-xl hover:bg-sky-700 transition-all shadow-xl shadow-sky-200">
              Support Our Clinics
            </button>
            <div className="flex items-center gap-4 text-sky-900 font-bold">
              <Globe size={24} className="text-sky-400" />
              <span>Active in 120+ Medical Camps</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-96 mt-20 relative">
        <div className="absolute inset-x-8 -top-20 bottom-8 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
          <SmartImage className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-sky-900/20" />
        </div>
      </div>
    </div>
  ),

  // Variante 06: Education for All (Youth & Inspiring)
  EducationForAll: () => (
    <div className="w-full min-h-screen bg-indigo-900 flex flex-col items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-7 space-y-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-800 rounded-full text-indigo-200 text-sm font-bold border border-indigo-700">
            <GraduationCap size={20} className="text-yellow-400" />
            <span>Empowering the Next Generation</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter">
            KNOWLEDGE <br/> IS <span className="text-yellow-400 italic">FREEDOM.</span>
          </h1>
          
          <p className="text-indigo-200 text-xl md:text-2xl max-w-xl leading-relaxed">
            We build schools and provide scholarships to children who are the first in their families to learn.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-10 py-5 bg-yellow-400 text-indigo-950 rounded-2xl font-black text-xl hover:bg-yellow-300 transition-all flex items-center justify-center gap-3">
              Sponsor a Student <Gift size={24} />
            </button>
            <div className="flex flex-col justify-center">
              <div className="text-white font-black text-2xl">250,000+</div>
              <div className="text-indigo-300 text-xs font-bold uppercase tracking-widest">Students Enrolled</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transform hover:-rotate-2 transition-transform">
              <SmartImage className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-2 transition-transform">
              <SmartImage className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-2 transition-transform">
              <SmartImage className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transform hover:-rotate-2 transition-transform">
              <SmartImage className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 07: Clean Water (Blue & Basic Needs)
  CleanWater: () => (
    <div className="w-full min-h-screen bg-cyan-950 relative flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover brightness-[0.3]" />
        <div className="absolute inset-0 bg-cyan-900/40 mix-blend-overlay" />
      </div>
      
      <div className="relative z-10 max-w-4xl space-y-12">
        <div className="w-24 h-24 rounded-full bg-cyan-500/20 backdrop-blur-2xl border border-cyan-400/30 flex items-center justify-center text-cyan-400 mx-auto animate-pulse">
          <Droplets size={48} />
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter">
          WATER IS <br/> <span className="text-cyan-400">LIFE.</span>
        </h1>
        
        <p className="text-cyan-100/60 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          1 in 10 people lack access to clean water. We build sustainable wells and filtration systems to change that.
        </p>

        <div className="flex flex-col items-center gap-8">
          <button className="px-16 py-6 bg-cyan-500 text-white rounded-full font-black text-2xl hover:bg-cyan-400 transition-all shadow-2xl shadow-cyan-900/50">
            Give Clean Water
          </button>
          
          <div className="flex items-center gap-12 text-cyan-200/40 text-sm font-black uppercase tracking-[0.4em]">
            <div className="flex items-center gap-3">
              <Target size={16} />
              <span>100% Transparency</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} />
              <span>Sub-Saharan Africa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 08: Animal Welfare (Emotional & Compassionate)
  AnimalWelfare: () => (
    <div className="w-full min-h-screen bg-stone-50 flex flex-col lg:flex-row">
      <div className="lg:w-1/2 relative h-[50vh] lg:h-screen">
        <SmartImage className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-stone-900/20 lg:bg-transparent" />
      </div>
      
      <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-20 space-y-10">
        <div className="inline-flex items-center gap-2 text-stone-400 font-black text-xs uppercase tracking-[0.4em]">
          <HandHeart size={20} className="text-rose-500" />
          <span>Animal Rescue Network</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-stone-900 leading-[0.9] tracking-tight">
          A Voice for the <br/> <span className="text-rose-600">Voiceless.</span>
        </h1>
        
        <p className="text-stone-500 text-xl leading-relaxed max-w-lg">
          Rescue, rehabilitation, and rehoming for animals in need. Join us in protecting our planet's most vulnerable creatures.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <button className="px-8 py-5 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-all">
            Adopt a Pet
          </button>
          <button className="px-8 py-5 border-2 border-stone-200 text-stone-900 rounded-2xl font-bold hover:bg-stone-100 transition-all">
            Report Abuse
          </button>
        </div>

        <div className="p-8 bg-stone-100 rounded-[2rem] border border-stone-200 flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-stone-400 text-[10px] font-black uppercase tracking-widest">Weekly Goal</div>
            <div className="text-stone-900 font-black text-2xl">45 Rescues</div>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-stone-200 border-2 border-white" />
            ))}
            <div className="w-10 h-10 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
              +12
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 09: Social Justice (Bold & Powerful)
  SocialJustice: () => (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 select-none pointer-events-none flex flex-col justify-around text-[15vw] font-black text-white/5 leading-none whitespace-nowrap italic">
        <div className="-translate-x-20">EQUITY JUSTICE POWER</div>
        <div className="translate-x-20">VOICE CHANGE ACTION</div>
        <div className="-translate-x-10">SOLIDARITY FREEDOM</div>
      </div>

      <div className="relative z-10 max-w-5xl text-center space-y-12">
        <Scale className="text-white mx-auto" size={64} />
        
        <h1 className="text-7xl md:text-[11rem] font-black text-white leading-[0.8] tracking-tighter uppercase">
          JUSTICE <br/> FOR <span className="text-white/40">ALL.</span>
        </h1>
        
        <p className="text-zinc-400 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed">
          Dismantling systemic barriers and fighting for the rights of marginalized communities through legal advocacy and grassroots organizing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
          <button className="px-12 py-6 bg-white text-black rounded-none font-black text-2xl hover:invert transition-all uppercase tracking-tighter">
            Join the Movement
          </button>
          <button className="group flex items-center gap-4 text-white font-black text-xl uppercase tracking-widest">
            Learn More
            <ArrowRight className="group-hover:translate-x-4 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 10: Impact Dashboard (Data-Driven & Transparent)
  ImpactDashboard: () => (
    <div className="w-full min-h-screen bg-slate-950 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest">
            <BarChart3 size={16} />
            <span>Real-time Impact Tracking</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
            Transparent <br/> <span className="text-blue-500 italic">Results.</span>
          </h1>
          
          <p className="text-slate-400 text-xl leading-relaxed">
            We believe in radical transparency. Track every dollar donated and see exactly how it's being used to change lives around the world.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 space-y-2">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Efficiency</div>
              <div className="text-white font-black text-4xl">94%</div>
              <div className="text-slate-600 text-xs">Direct to programs</div>
            </div>
            <div className="p-6 bg-blue-600 rounded-3xl space-y-2">
              <div className="text-blue-200 text-[10px] font-black uppercase tracking-widest">Rating</div>
              <div className="text-white font-black text-4xl">A+</div>
              <div className="text-blue-100/60 text-xs">Charity Watchdog</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-20 bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="relative bg-slate-900 border border-slate-800 rounded-[3rem] p-10 shadow-2xl space-y-10">
            <div className="flex items-center justify-between">
              <div className="text-white font-black text-xl">Global Reach</div>
              <Sparkles className="text-blue-400" />
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Clean Water Projects', progress: 85, color: 'bg-blue-500' },
                { label: 'School Constructions', progress: 62, color: 'bg-emerald-500' },
                { label: 'Medical Supplies', progress: 91, color: 'bg-rose-500' },
                { label: 'Reforestation', progress: 44, color: 'bg-orange-500' }
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

            <div className="pt-6">
              <button className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-3">
                Download Annual Report <Calendar size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 11: Peace Ambassadors (Serene & Minimal)
  PeaceAmbassadors: () => (
    <div className="w-full min-h-screen bg-white relative flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <Bird className="absolute top-20 left-1/4 w-96 h-96 -rotate-12" />
        <Bird className="absolute bottom-20 right-1/4 w-64 h-64 rotate-12" />
      </div>
      
      <div className="relative z-10 max-w-4xl space-y-12">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mx-auto border border-slate-100 shadow-sm">
          <Bird size={40} />
        </div>
        
        <h1 className="text-6xl md:text-9xl font-light text-slate-900 leading-none tracking-tight font-serif">
          Harmony <br/> Starts <span className="italic text-slate-400">Within.</span>
        </h1>
        
        <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
          Mediating conflicts and fostering dialogue in divided communities. 
          Building a world where peace is not just a dream, but a reality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
          <button className="px-12 py-5 bg-slate-900 text-white rounded-full font-medium text-lg hover:bg-slate-800 transition-all">
            Join the Dialogue
          </button>
          <button className="text-slate-400 font-bold uppercase tracking-widest hover:text-slate-900 transition-colors">
            Our Methods
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 12: Refugee Support (Dignity & Protection)
  RefugeeSupport: () => (
    <div className="w-full min-h-screen bg-orange-50 relative flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-8 relative z-10">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-200 text-orange-800 rounded-full text-xs font-black uppercase tracking-widest">
            <Home size={16} />
            <span>Shelter & Protection</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
            Every Human <br/> Deserves a <br/> <span className="text-orange-600 underline decoration-8 underline-offset-8">Safe Haven.</span>
          </h1>
          
          <p className="text-slate-600 text-xl leading-relaxed max-w-lg">
            Providing immediate relief, legal aid, and long-term integration support for those forced to flee their homes.
          </p>

          <div className="flex gap-4">
            <button className="px-10 py-5 bg-orange-600 text-white rounded-2xl font-black text-lg hover:bg-orange-700 transition-all shadow-xl shadow-orange-200">
              Provide Shelter
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-orange-200 rounded-[4rem] rotate-3 group-hover:rotate-0 transition-transform" />
          <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl">
            <SmartImage className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-950/60 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 text-white space-y-2">
              <div className="text-orange-400 font-black text-xs uppercase tracking-widest">Ongoing Mission</div>
              <div className="text-2xl font-bold">Border Relief Camp #42</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 13: Youth Empowerment (Action & Energy)
  YouthEmpowerment: () => (
    <div className="w-full min-h-screen bg-violet-600 flex flex-col items-center justify-center p-8 overflow-hidden">
      <div className="max-w-6xl w-full text-center space-y-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-violet-600 font-black uppercase tracking-tighter shadow-xl">
          <Trophy size={20} className="animate-bounce" />
          <span>Championing Future Leaders</span>
        </div>
        
        <h1 className="text-7xl md:text-[12rem] font-black text-white leading-[0.75] tracking-[ -0.05em] uppercase italic">
          UNLEASH <br/> THE <span className="text-violet-300">POTENTIAL.</span>
        </h1>
        
        <p className="text-violet-100 text-xl md:text-3xl max-w-3xl mx-auto font-bold leading-tight">
          Sports, arts, and mentorship programs that keep kids off the streets and in the lead.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {[
            { label: 'After School Hubs', icon: <Users /> },
            { label: 'Talent Grants', icon: <Sparkles /> },
            { label: 'Mentorship', icon: <HandHeart /> }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-violet-500/30 backdrop-blur-md border border-violet-400/30 rounded-3xl text-white space-y-4 hover:bg-violet-400/40 transition-all cursor-default">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-violet-600">
                {item.icon}
              </div>
              <div className="text-xl font-black uppercase tracking-tighter">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // Variante 14: Clean Energy (Tech & Future)
  CleanEnergy: () => (
    <div className="w-full min-h-screen bg-slate-950 relative flex items-center justify-end px-8 lg:px-24">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover opacity-40 brightness-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.15),transparent_50%)]" />
      </div>
      
      <div className="relative z-10 max-w-3xl text-right space-y-10">
        <div className="flex items-center justify-end gap-3 text-sky-400 font-black text-sm uppercase tracking-[0.3em]">
          <span>Sustainable Innovation</span>
          <Wind size={24} className="animate-spin duration-[5000ms]" />
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter">
          POWERING <br/> THE <span className="text-sky-400">TRANSITION.</span>
        </h1>
        
        <p className="text-slate-400 text-xl md:text-2xl leading-relaxed">
          Bringing affordable, renewable energy to off-grid communities. 
          Solar, wind, and hydro solutions for a cleaner tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-6 pt-6">
          <button className="px-12 py-5 bg-sky-500 text-slate-950 rounded-full font-black text-xl hover:bg-sky-400 transition-all shadow-2xl shadow-sky-900/50">
            Fund a Microgrid
          </button>
          <div className="text-slate-500 font-bold uppercase tracking-widest border-b border-slate-800 pb-2">
            Net Zero by 2035
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 15: Indigenous Rights (Earth & Heritage)
  IndigenousRights: () => (
    <div className="w-full min-h-screen bg-[#2a1b0a] relative flex items-center p-8 lg:p-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')]" />
      </div>
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="relative aspect-square order-2 lg:order-1">
          <div className="absolute -inset-10 bg-amber-900/20 rounded-full blur-3xl" />
          <div className="relative h-full w-full rounded-full overflow-hidden border-8 border-amber-900/30 p-4">
            <div className="h-full w-full rounded-full overflow-hidden grayscale contrast-125">
              <SmartImage className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-600 rounded-3xl p-8 flex flex-col justify-between shadow-2xl rotate-6">
            <Flower2 size={40} className="text-amber-100" />
            <div className="text-amber-100 font-black leading-tight uppercase tracking-tighter">Preserving Ancestral Wisdom</div>
          </div>
        </div>

        <div className="space-y-10 order-1 lg:order-2">
          <div className="text-amber-500 font-black text-xs uppercase tracking-[0.5em]">Land & Culture</div>
          <h1 className="text-6xl md:text-8xl font-black text-amber-50 leading-[0.9] tracking-tighter uppercase">
            THE HEART <br/> OF THE <br/> <span className="text-amber-600 italic">FOREST.</span>
          </h1>
          <p className="text-amber-100/60 text-xl leading-relaxed max-w-lg">
            Supporting indigenous communities in the defense of their territories, languages, and traditional knowledge.
          </p>
          <button className="px-12 py-6 bg-amber-600 text-white rounded-none font-black text-2xl hover:bg-amber-500 transition-all shadow-2xl">
            SUPPORT THE DEFENSE
          </button>
        </div>
      </div>
    </div>
  ),

  // Variante 16: Crisis Hotline (Calm & Supportive)
  CrisisHotline: () => (
    <div className="w-full min-h-screen bg-indigo-50 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-[4rem] shadow-2xl shadow-indigo-200/50 p-12 md:p-24 text-center space-y-12 border border-indigo-100">
        <div className="w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center text-white mx-auto shadow-xl shadow-indigo-200">
          <PhoneCall size={48} className="animate-pulse" />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
            You're Never <br/> <span className="text-indigo-600">Alone.</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto">
            Free, confidential, 24/7 support for anyone in emotional distress or suicidal crisis. 
            We're here to listen.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="w-full md:w-auto px-12 py-6 bg-indigo-600 text-white rounded-2xl font-black text-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-4">
            Call 988 Now <PhoneCall size={28} />
          </button>
          <button className="w-full md:w-auto px-12 py-6 bg-white border-2 border-indigo-100 text-indigo-600 rounded-2xl font-bold text-xl hover:bg-indigo-50 transition-all">
            Chat Online
          </button>
        </div>

        <div className="pt-8 flex items-center justify-center gap-12 text-slate-400 font-bold text-sm uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} />
            <span>100% Confidential</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} />
            <span>Certified Counselors</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 17: Micro Finance (Empowerment & Growth)
  MicroFinance: () => (
    <div className="w-full min-h-screen bg-fuchsia-950 flex flex-col lg:flex-row items-stretch">
      <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center space-y-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/20 text-fuchsia-300 rounded-full text-xs font-black uppercase tracking-widest border border-fuchsia-500/30">
          <Coins size={16} />
          <span>Economic Inclusion</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
          SMALL LOANS. <br/> <span className="text-fuchsia-500 italic">BIG DREAMS.</span>
        </h1>
        
        <p className="text-fuchsia-200/60 text-xl leading-relaxed max-w-lg font-medium">
          Empowering women entrepreneurs in developing nations with micro-loans to start and scale their businesses.
        </p>

        <div className="space-y-8 pt-4">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-white font-black text-4xl">98%</div>
              <div className="text-fuchsia-400 text-xs font-bold uppercase tracking-widest">Repayment Rate</div>
            </div>
            <div>
              <div className="text-white font-black text-4xl">$500</div>
              <div className="text-fuchsia-400 text-xs font-bold uppercase tracking-widest">Avg. Loan Size</div>
            </div>
          </div>
          <button className="px-12 py-6 bg-fuchsia-500 text-white rounded-none font-black text-2xl hover:bg-fuchsia-400 transition-all shadow-2xl shadow-black">
            INVEST IN A DREAM
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 relative min-h-[50vh]">
        <SmartImage className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-950 via-transparent to-transparent lg:from-fuchsia-950/80 lg:to-transparent" />
      </div>
    </div>
  ),

  // Variante 18: Ocean Cleanup (Marine & Deep Blue)
  OceanCleanup: () => (
    <div className="w-full min-h-screen bg-blue-950 relative flex flex-col items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover brightness-50 contrast-125" />
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 max-w-6xl w-full text-center space-y-12">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-400/20 backdrop-blur-xl border border-blue-400/30 rounded-full text-blue-300 text-sm font-black uppercase tracking-[0.3em]">
          <Waves size={20} />
          <span>Plastic-Free Oceans</span>
        </div>
        
        <h1 className="text-7xl md:text-[13rem] font-black text-white leading-[0.8] tracking-tighter">
          TIDE <br/> <span className="text-blue-400 italic">TURNING.</span>
        </h1>
        
        <p className="text-blue-100/70 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed">
          Removing thousands of tons of plastic from our oceans using innovative autonomous technology.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-8">
          <div className="text-center">
            <div className="text-white font-black text-5xl">12k</div>
            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">Tons Removed</div>
          </div>
          <button className="px-16 py-8 bg-white text-blue-950 rounded-full font-black text-3xl hover:bg-blue-50 transition-all shadow-2xl">
            CLEAN 1KG
          </button>
          <div className="text-center">
            <div className="text-white font-black text-5xl">145</div>
            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">Cleanup Fleets</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 19: Disability Inclusion (Accessibility & Equality)
  DisabilityInclusion: () => (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col lg:flex-row items-center justify-center p-8 lg:p-24 gap-20">
      <div className="flex-1 space-y-12">
        <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center text-zinc-900 shadow-xl shadow-emerald-500/20">
          <Accessibility size={48} />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
          BUILT <br/> FOR <span className="text-emerald-500">EVERYONE.</span>
        </h1>
        
        <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-xl">
          Advocating for universal accessibility and creating inclusive opportunities for people with disabilities in the workplace and beyond.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button className="px-10 py-5 bg-emerald-500 text-zinc-950 rounded-2xl font-black text-xl hover:bg-emerald-400 transition-all">
            Join the Movement
          </button>
          <button className="px-10 py-5 bg-zinc-800 text-white border border-zinc-700 rounded-2xl font-bold text-xl hover:bg-zinc-700 transition-all">
            Accessibility Audit
          </button>
        </div>
      </div>

      <div className="flex-1 w-full grid grid-cols-2 gap-6 h-[600px]">
        <div className="bg-zinc-800 rounded-[3rem] p-10 flex flex-col justify-between border border-zinc-700">
          <div className="text-emerald-500 font-black text-4xl">1.3B</div>
          <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">People with disabilities globally</div>
        </div>
        <div className="relative rounded-[3rem] overflow-hidden group">
          <SmartImage className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-emerald-500/20 group-hover:bg-transparent transition-all duration-700" />
        </div>
        <div className="relative col-span-2 rounded-[3rem] overflow-hidden group">
          <SmartImage className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white font-bold text-2xl">Accessible Infrastructure Project 2024</div>
        </div>
      </div>
    </div>
  ),

  // Variante 20: Social Impact Showcase (Final Portfolio View)
  SocialImpactShowcaseFinal: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-[0.4em]">
              <LayoutDashboard size={20} />
              <span>Causas & Impacto</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-950 leading-none tracking-tighter">
              A Global <br/> <span className="text-blue-500 italic">Portfolio.</span>
            </h1>
          </div>
          <p className="text-slate-500 text-xl max-w-md leading-relaxed">
            Explora las diversas causas que apoyamos y el impacto real que estamos generando juntos en cada rincón del planeta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Environment', count: '142 Projects', color: 'bg-emerald-500', icon: <Leaf /> },
            { label: 'Education', count: '89 Schools', color: 'bg-indigo-500', icon: <GraduationCap /> },
            { label: 'Health', count: '215 Clinics', color: 'bg-sky-500', icon: <Stethoscope /> },
            { label: 'Human Rights', count: '67 Missions', color: 'bg-rose-500', icon: <ShieldCheck /> },
            { label: 'Emergency', count: '12 Active', color: 'bg-orange-500', icon: <Zap /> },
            { label: 'Innovation', count: '34 Startups', color: 'bg-violet-500', icon: <Sparkles /> }
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
                Explore Category <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

        <div className="p-12 bg-slate-900 rounded-[4rem] text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none">Ready to start <br/> your own cause?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-black text-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40">
              Launch Campaign
            </button>
            <button className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold text-2xl hover:bg-white/20 transition-all">
              Partner with Us
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
};
