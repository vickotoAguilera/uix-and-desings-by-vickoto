"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Zap, 
  Star, 
  Users, 
  Shield, 
  Cpu, 
  Layers,
  Sparkles,
  Globe,
  Smartphone,
  Layout,
  MousePointer2,
  ExternalLink,
  ChevronRight,
  Plus,
  Play,
  Pause,
  Monitor,
  Search,
  MessageSquare,
  HelpCircle,
  Send,
  Mail,
  ChevronDown
} from 'lucide-react';

export const CreativeLandingVariants = {
  // 1. TextYAnimationHero: Hero with Y-axis text entry
  TextYAnimationHero: () => (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 overflow-hidden font-sans">
      <div className="max-w-5xl w-full space-y-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 rounded-full border border-white/20 text-xs font-black uppercase tracking-widest animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Sparkles size={14} className="text-yellow-400" />
          <span>Next_Gen_Landing_v1</span>
        </div>
        
        <div className="space-y-4 overflow-hidden">
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">
            <div className="animate-in slide-in-from-bottom-full duration-700 delay-100 fill-mode-both">CRAFTING</div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-rose-500 animate-in slide-in-from-bottom-full duration-700 delay-300 fill-mode-both">DIGITAL</div>
            <div className="animate-in slide-in-from-bottom-full duration-700 delay-500 fill-mode-both">DREAMS.</div>
          </h1>
        </div>

        <p className="max-w-2xl mx-auto text-xl text-white/60 font-medium leading-relaxed italic animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 fill-mode-both">
          High-performance landing pages designed for conversion. Experience the intersection of motion and minimalism.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-900 fill-mode-both">
          <button className="px-12 py-5 bg-white text-black font-black text-xl uppercase italic rounded-full hover:scale-105 transition-all shadow-2xl shadow-white/10">
            [ Start_Building ]
          </button>
          <button className="px-12 py-5 border-2 border-white/20 text-white font-black text-xl uppercase italic rounded-full hover:bg-white/10 transition-all flex items-center gap-3">
            <span>Live_Demo</span>
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </div>
  ),

  // 2. SponsorCloud3D: Interactive logo cloud
  SponsorCloud3D: () => (
    <div className="w-full py-24 bg-[#050505] text-white flex flex-col items-center justify-center p-8 overflow-hidden font-sans border-y border-white/5">
      <div className="max-w-6xl w-full space-y-16">
        <div className="text-center space-y-4">
          <div className="text-xs font-black uppercase tracking-[0.5em] text-white/40 italic">Trusted_By_Industry_Leaders</div>
          <div className="h-px w-24 bg-blue-500 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 opacity-40 hover:opacity-100 transition-opacity duration-1000">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center p-8 bg-zinc-900/50 border border-white/5 rounded-3xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group cursor-pointer grayscale hover:grayscale-0">
              <div className="font-black text-2xl uppercase italic tracking-tighter group-hover:scale-110 transition-transform">
                LOGO_{i + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <button className="text-sm font-black uppercase italic text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 mx-auto">
            <span>View_All_Success_Stories</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  ),

  // 3. BentoFeatureShowcase: Modular feature grid
  BentoFeatureShowcase: () => (
    <div className="w-full py-24 bg-black text-white p-8 md:p-16 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-[0.6em] text-purple-500 italic">Product_Capabilities</div>
            <h1 className="text-6xl md:text-8xl font-black leading-none uppercase tracking-tighter italic">
              FEATURE <br /> <span className="text-white/20">MATRIX.</span>
            </h1>
          </div>
          <p className="max-w-md text-white/40 font-medium italic">
            Everything you need to build at the speed of thought. Modular, scalable, and ridiculously fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[250px]">
          <div className="md:col-span-8 md:row-span-2 bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-12 flex flex-col justify-between hover:border-purple-500/40 transition-all group overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-all" />
            <div className="space-y-6 relative z-10">
              <div className="p-4 bg-purple-500 rounded-2xl w-fit text-black shadow-xl shadow-purple-500/20">
                <Zap size={32} />
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-black uppercase italic tracking-tight">Ultra_Fast_Processing</h3>
                <p className="text-white/60 max-w-sm font-medium">Engineered for sub-millisecond latency. Your data, processed at the speed of light.</p>
              </div>
            </div>
            <div className="flex gap-4 relative z-10">
              <button className="px-8 py-3 bg-white text-black font-black uppercase italic rounded-xl text-sm">Explore_Logic</button>
            </div>
          </div>

          <div className="md:col-span-4 md:row-span-1 bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/5 transition-all">
            <div className="flex justify-between items-start">
              <div className="text-xs font-black uppercase tracking-widest text-white/40">Status</div>
              <Check size={20} className="text-emerald-500" />
            </div>
            <div className="text-3xl font-black italic">99.9% UPTIME</div>
          </div>

          <div className="md:col-span-4 md:row-span-2 bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between hover:border-blue-500/40 transition-all group">
            <div className="space-y-6">
              <div className="p-4 bg-blue-500 rounded-2xl w-fit text-black shadow-xl shadow-blue-500/20">
                <Shield size={24} />
              </div>
              <h3 className="text-3xl font-black uppercase italic leading-tight">Secure <br /> by Design.</h3>
            </div>
            <p className="text-sm text-white/40 font-medium italic">End-to-end encryption for every packet sent.</p>
          </div>

          <div className="md:col-span-4 md:row-span-1 bg-blue-600 rounded-[2.5rem] p-8 flex items-center justify-between text-white group cursor-pointer hover:scale-[0.98] transition-all">
            <span className="text-2xl font-black uppercase italic">GET STARTED</span>
            <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
          </div>

          <div className="md:col-span-4 md:row-span-1 bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-8 flex items-center justify-center gap-6">
             <div className="text-center">
                <div className="text-2xl font-black italic">24/7</div>
                <div className="text-[10px] uppercase font-black text-white/40">Support</div>
             </div>
             <div className="w-px h-8 bg-white/10" />
             <div className="text-center">
                <div className="text-2xl font-black italic">140+</div>
                <div className="text-[10px] uppercase font-black text-white/40">Nodes</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // 4. PricingNeonCards: Glowing pricing table
  PricingNeonCards: () => (
    <div className="w-full py-24 bg-[#020202] text-white p-8 md:p-16 font-sans flex flex-col items-center">
      <div className="max-w-6xl w-full space-y-20">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest italic">
            <Layout size={14} />
            <span>Pricing_Plans_v2</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.7]">
            CHOOSE YOUR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">POWER.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Starter", price: "0", features: ["1 Project", "Basic Analytics", "Community Support"], color: "zinc" },
            { name: "Pro", price: "49", features: ["10 Projects", "Advanced AI", "Priority Support", "Custom Domain"], color: "blue", popular: true },
            { name: "Enterprise", price: "199", features: ["Unlimited", "Dedicated Server", "24/7 Phone Support", "SLA Guarantee"], color: "purple" }
          ].map((plan, i) => (
            <div key={i} className={`relative group ${plan.popular ? 'scale-105 z-10' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-black text-[10px] font-black uppercase italic rounded-full shadow-xl shadow-blue-500/40">
                  Most_Popular
                </div>
              )}
              <div className={`h-full bg-zinc-900/50 border ${plan.popular ? 'border-blue-500' : 'border-white/10'} rounded-[3rem] p-10 flex flex-col justify-between hover:border-white/20 transition-all shadow-2xl`}>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className={`text-xs font-black uppercase italic tracking-widest text-${plan.color}-400`}>{plan.name}</div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black italic">${plan.price}</span>
                      <span className="text-sm font-bold text-white/40 uppercase tracking-widest italic">/mo</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3 text-sm font-medium text-white/60 italic">
                        <Check size={16} className={`text-${plan.color}-400`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className={`w-full py-5 mt-12 rounded-2xl font-black uppercase italic text-sm transition-all ${
                  plan.popular ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20 hover:bg-blue-500' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}>
                  [ Select_Plan ]
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // 5. MarqueeShowcase: Smooth testimonial marquee
  MarqueeShowcase: () => (
    <div className="w-full py-24 bg-black overflow-hidden font-sans">
      <div className="space-y-12">
        <div className="text-center text-xs font-black uppercase tracking-[1em] text-white/20 italic">Global_Feedback</div>
        
        <div className="flex flex-col gap-8">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-[450px] p-8 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] flex flex-col gap-6 group hover:border-blue-500/40 transition-all cursor-default">
                <div className="flex gap-1 text-blue-500">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-lg text-white/80 font-medium italic leading-relaxed">
                  "{`The implementation was seamless. Our conversion rates increased by 40% in the first month using these layouts.`}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-black font-black italic">U{i}</div>
                  <div>
                    <div className="font-black text-sm uppercase italic">User_Name_{i + 1}</div>
                    <div className="text-[10px] font-bold text-white/40 uppercase italic">CTO @ Startup_{i + 1}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-8 animate-marquee-reverse whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-[450px] p-8 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] flex flex-col gap-6 group hover:border-purple-500/40 transition-all cursor-default">
                <div className="flex gap-1 text-purple-500">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-lg text-white/80 font-medium italic leading-relaxed">
                  "{`Best UI library we have ever used. The attention to detail in the animations is simply mind-blowing.`}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-black font-black italic">A{i}</div>
                  <div>
                    <div className="font-black text-sm uppercase italic">Agency_Owner_{i + 1}</div>
                    <div className="text-[10px] font-bold text-white/40 uppercase italic">Founder @ Studio_{i + 1}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),

  // 6. PixelPerfectHero: Sharp, high-contrast landing section
  PixelPerfectHero: () => (
    <div className="w-full min-h-screen bg-white text-black p-8 md:p-24 font-sans flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.5em] text-black/40">
            <div className="h-[2px] w-12 bg-black/40" />
            <span>Studio_Edition_v4</span>
          </div>
          <h1 className="text-7xl md:text-[11rem] font-black leading-[0.7] tracking-tighter uppercase italic">
            PIXEL <br /> <span className="underline decoration-[16px] underline-offset-[20px]">PERFECT.</span>
          </h1>
          <p className="text-2xl text-black/60 font-medium leading-relaxed max-w-md italic">
            Sharp aesthetics for modern products. No blur, no noise, just pure clarity.
          </p>
          <div className="flex gap-6">
            <button className="px-12 py-5 bg-black text-white font-black text-xl uppercase italic hover:invert transition-all">
              [ Build_Now ]
            </button>
            <button className="px-12 py-5 border-4 border-black text-black font-black text-xl uppercase italic hover:bg-black hover:text-white transition-all">
              [ Gallery ]
            </button>
          </div>
        </div>

        <div className="relative aspect-square border-[20px] border-black p-12 flex flex-col justify-between group cursor-crosshair">
          <div className="absolute top-0 right-0 p-8 text-4xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity">01</div>
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-widest opacity-40 italic">Structural_Logic</div>
            <div className="text-6xl font-black uppercase italic leading-none">GRID <br /> SYSTEM.</div>
          </div>
          <div className="flex justify-between items-end border-t-4 border-black pt-8">
            <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Resolution: 8K_READY</div>
            <ArrowRight size={48} className="group-hover:translate-x-4 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </div>
  ),

  // 7. GradientPulseShowcase: Pulsing gradient sections
  GradientPulseShowcase: () => (
    <div className="w-full py-24 bg-black text-white p-8 md:p-16 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
            VIBRANT <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">EXPERIENCES.</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-white/40 font-medium italic">
            Immerse your users in a world of color and motion. Our gradients are designed to captivate and engage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-[16/10] bg-zinc-900/50 border border-white/10 rounded-[3rem] p-12 flex flex-col justify-between group hover:border-white/30 transition-all overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 space-y-4">
              <div className="text-xs font-black uppercase tracking-widest text-white/40 italic">Motion_Design</div>
              <h3 className="text-4xl font-black uppercase italic tracking-tight">Fluid_Transitions</h3>
            </div>
            <MousePointer2 className="relative z-10 text-blue-400 group-hover:scale-150 transition-transform" size={40} />
          </div>

          <div className="aspect-[16/10] bg-zinc-900/50 border border-white/10 rounded-[3rem] p-12 flex flex-col justify-between group hover:border-white/30 transition-all overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 space-y-4">
              <div className="text-xs font-black uppercase tracking-widest text-white/40 italic">Visual_Impact</div>
              <h3 className="text-4xl font-black uppercase italic tracking-tight">Pulse_Core</h3>
            </div>
            <Sparkles className="relative z-10 text-purple-400 group-hover:scale-150 transition-transform" size={40} />
          </div>
        </div>
      </div>
    </div>
  ),

  // 8. FloatingImageGallery: Parallax image showcase
  FloatingImageGallery: () => (
    <div className="w-full py-24 bg-[#050505] text-white p-8 md:p-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 space-y-10">
          <div className="text-xs font-black uppercase tracking-[0.5em] text-blue-500 italic">Curated_Visuals</div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8]">
            FLOATING <br /> <span className="text-white/20">ASSETS.</span>
          </h2>
          <p className="text-xl text-white/60 font-medium italic leading-relaxed">
            Every element is carefully positioned to create a sense of depth and weightlessness.
          </p>
          <div className="flex flex-col gap-6 pt-4">
            {['Dynamic Layouts', 'Smooth Parallax', 'High Fidelity'].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-sm font-black uppercase italic tracking-widest">
                <div className="w-8 h-px bg-blue-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-6 relative">
          <div className="space-y-6 translate-y-12">
            <div className="aspect-[3/4] bg-zinc-900 rounded-[2.5rem] border border-white/10 flex items-center justify-center group overflow-hidden">
               <div className="text-2xl font-black italic text-white/20 group-hover:scale-110 transition-transform">IMG_01</div>
            </div>
            <div className="aspect-square bg-blue-600 rounded-[2.5rem] p-10 flex flex-col justify-between group cursor-pointer hover:rotate-2 transition-all">
               <ArrowUpRight size={40} />
               <div className="text-2xl font-black uppercase italic">EXPLORE</div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="aspect-square bg-zinc-900 rounded-[2.5rem] border border-white/10 flex items-center justify-center group overflow-hidden">
               <div className="text-2xl font-black italic text-white/20 group-hover:scale-110 transition-transform">IMG_02</div>
            </div>
            <div className="aspect-[3/4] bg-zinc-900 rounded-[2.5rem] border border-white/10 flex items-center justify-center group overflow-hidden">
               <div className="text-2xl font-black italic text-white/20 group-hover:scale-110 transition-transform">IMG_03</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // 9. InteractiveStepGuide: Neon connected steps
  InteractiveStepGuide: () => (
    <div className="w-full py-24 bg-black text-white p-8 md:p-16 font-sans">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="text-center space-y-4">
          <div className="text-xs font-black uppercase tracking-[0.6em] text-white/20 italic">Process_Workflow</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
            HOW IT <span className="text-emerald-500">WORKS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 -translate-y-1/2 z-0" />
          
          {[
            { step: "01", title: "Strategy", desc: "Defining the core objectives and target audience metrics." },
            { step: "02", title: "Design", desc: "Crafting visual identities and high-conversion layouts." },
            { step: "03", title: "Launch", desc: "Deploying high-performance assets to global edge nodes." }
          ].map((item, i) => (
            <div key={i} className="relative z-10 bg-zinc-900/50 border border-white/10 rounded-[3rem] p-10 space-y-8 hover:border-emerald-500/40 transition-all group">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-black font-black italic text-2xl shadow-xl shadow-emerald-500/20 group-hover:rotate-12 transition-transform">
                {item.step}
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase italic tracking-tight">{item.title}</h3>
                <p className="text-white/60 font-medium italic leading-relaxed">{item.desc}</p>
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500/60 italic">
                <span>PHASE_{item.step}</span>
                <div className="h-px flex-1 bg-emerald-500/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // 10. FinalCTASection: High-impact call to action
  FinalCTASection: () => (
    <div className="w-full py-32 bg-white text-black p-8 md:p-24 font-sans flex flex-col items-center text-center">
      <div className="max-w-5xl w-full space-y-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest italic">
            <Zap size={14} className="animate-pulse" />
            <span>Deployment_Ready</span>
          </div>
          <h2 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">
            READY TO <br /> <span className="underline decoration-[16px] underline-offset-[20px]">EVOLVE?</span>
          </h2>
        </div>
        
        <p className="max-w-2xl mx-auto text-2xl text-black/60 font-medium italic leading-relaxed">
          Join 2,000+ teams building the future with our high-performance design system. 
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
          <button className="px-16 py-6 bg-black text-white font-black text-2xl uppercase italic hover:scale-105 transition-all flex items-center gap-4">
            <span>[ Get_Started ]</span>
            <ArrowRight size={24} />
          </button>
          <button className="px-16 py-6 border-4 border-black text-black font-black text-2xl uppercase italic hover:bg-black hover:text-white transition-all">
            <span>Contact_Sales</span>
          </button>
        </div>

        <div className="pt-24 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="font-black text-xl uppercase italic tracking-tighter">PARTNER_{i + 1}</div>
          ))}
        </div>
      </div>
    </div>
  ),

  // 11. VideoRevealHero: Hero with cinematic mask reveal
  VideoRevealHero: () => (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 overflow-hidden font-sans relative">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
          <Play size={120} className="text-white/10 animate-pulse" />
        </div>
      </div>

      <div className="max-w-5xl w-full space-y-12 text-center relative z-20">
        <div className="space-y-6">
          <h1 className="text-7xl md:text-[12rem] font-black leading-none tracking-tighter uppercase italic">
            <span className="block animate-in slide-in-from-top-20 duration-1000">VISION</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 animate-in slide-in-from-bottom-20 duration-1000 delay-200">UNLEASHED.</span>
          </h1>
        </div>

        <p className="max-w-2xl mx-auto text-2xl text-white/60 font-medium italic animate-in fade-in duration-1000 delay-500">
          Experience cinematic quality in every interaction. Designed for the boldest storytellers.
        </p>

        <div className="flex justify-center gap-8 pt-12">
          <div className="group cursor-pointer">
            <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <Play size={32} fill="currentColor" />
            </div>
            <div className="mt-4 text-[10px] font-black uppercase tracking-widest text-white/40 italic">Watch_Film</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // 12. LayeredParallaxSections: Depth-based section layout
  LayeredParallaxSections: () => (
    <div className="w-full py-32 bg-[#080808] text-white p-8 md:p-24 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-10 relative z-20">
          <div className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest text-blue-400 italic">
            Layer_Architecture_v1
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8]">
            DEPTH IN <br /> <span className="text-white/20">DESIGN.</span>
          </h2>
          <p className="text-xl text-white/40 font-medium italic leading-relaxed max-w-md">
            Multiple layers of interaction create a tactile experience that feels alive and responsive.
          </p>
          <button className="px-10 py-4 bg-blue-600 text-white font-black uppercase italic rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
            [ Technical_Docs ]
          </button>
        </div>

        <div className="relative h-[600px] w-full lg:w-[120%] -ml-0 lg:-ml-[10%]">
          <div className="absolute top-0 right-0 w-[80%] aspect-square bg-zinc-900 border border-white/10 rounded-[3rem] p-12 shadow-2xl z-10 hover:-translate-y-8 transition-transform duration-700">
            <div className="h-full flex flex-col justify-between">
              <Layers size={48} className="text-blue-500" />
              <div className="text-4xl font-black italic uppercase">BASE <br /> CORE.</div>
            </div>
          </div>
          <div className="absolute top-1/4 left-0 w-[70%] aspect-square bg-blue-600 border border-white/20 rounded-[3rem] p-12 shadow-2xl z-20 hover:translate-y-8 transition-transform duration-700">
            <div className="h-full flex flex-col justify-between">
              <Sparkles size={48} className="text-white" />
              <div className="text-4xl font-black italic uppercase">MOTION <br /> LAYER.</div>
            </div>
          </div>
          <div className="absolute bottom-0 right-1/4 w-[60%] aspect-[4/3] bg-white text-black border border-white/10 rounded-[3rem] p-12 shadow-2xl z-30 hover:scale-105 transition-transform duration-700">
             <div className="h-full flex flex-col justify-between">
               <Cpu size={48} />
               <div className="text-3xl font-black italic uppercase">INTERFACE <br /> LOGIC.</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // 13. HorizontalFeatureScroll: Lateral movement feature grid
  HorizontalFeatureScroll: () => (
    <div className="w-full py-32 bg-black text-white p-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto mb-16 space-y-4">
        <div className="text-xs font-black uppercase tracking-[0.5em] text-white/20 italic">Lateral_Exploration</div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
          THE <span className="text-rose-500">WORKSPACE.</span>
        </h2>
      </div>

      <div className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x">
        {[
          { title: "Collaborate", icon: Users, color: "rose", desc: "Real-time sync for global teams." },
          { title: "Automate", icon: Zap, color: "yellow", desc: "Custom workflows with AI logic." },
          { title: "Scale", icon: Globe, color: "blue", desc: "Global edge deployment in seconds." },
          { title: "Secure", icon: Shield, color: "emerald", desc: "Bank-grade encryption by default." }
        ].map((item, i) => (
          <div key={i} className="flex-shrink-0 w-[350px] aspect-[4/5] bg-zinc-900/50 border border-white/10 rounded-[3rem] p-12 flex flex-col justify-between group hover:border-white/30 transition-all snap-center">
            <div className={`p-6 bg-${item.color}-500 rounded-3xl w-fit text-black shadow-xl shadow-${item.color}-500/20 group-hover:scale-110 transition-transform`}>
              <item.icon size={32} />
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-black uppercase italic tracking-tight">{item.title}</h3>
              <p className="text-white/40 font-medium italic leading-relaxed">{item.desc}</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-black uppercase italic text-white/20">
              <span>Feature_{i + 1}</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  // 14. ComparisonSlider: Interactive Before/After showcase
  ComparisonSlider: () => {
    const [sliderPos, setSliderPos] = useState(50);
    return (
      <div className="w-full py-24 bg-white text-black p-8 md:p-24 font-sans">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
             <div className="space-y-4">
               <div className="text-xs font-black uppercase tracking-[0.6em] text-black/40 italic">Result_Comparison</div>
               <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
                 VISIBLE <br /> <span className="underline decoration-8 underline-offset-8">IMPACT.</span>
               </h2>
             </div>
             <p className="max-w-xs text-black/60 font-medium italic">
               Drag the slider to witness the transformation our design system brings to your digital assets.
             </p>
          </div>

          <div className="relative aspect-[16/9] w-full bg-zinc-100 rounded-[3rem] overflow-hidden border-4 border-black group cursor-ew-resize select-none"
               onMouseMove={(e) => {
                 if (e.buttons === 1) {
                   const rect = e.currentTarget.getBoundingClientRect();
                   const x = ((e.clientX - rect.left) / rect.width) * 100;
                   setSliderPos(Math.min(Math.max(x, 0), 100));
                 }
               }}
               onTouchMove={(e) => {
                 const rect = e.currentTarget.getBoundingClientRect();
                 const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
                 setSliderPos(Math.min(Math.max(x, 0), 100));
               }}>
            <div className="absolute inset-0 bg-zinc-200 flex items-center justify-center">
               <div className="text-8xl font-black italic opacity-10 uppercase tracking-tighter">AFTER_GEN</div>
            </div>
            
            <div className="absolute inset-0 bg-black flex items-center justify-center transition-all duration-75"
                 style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
               <div className="text-8xl font-black italic text-white opacity-20 uppercase tracking-tighter">BEFORE_GEN</div>
            </div>

            <div className="absolute top-0 bottom-0 w-1 bg-white z-30" style={{ left: `${sliderPos}%` }}>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-black flex items-center justify-center shadow-xl">
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-black/20 rounded-full" />
                    <div className="w-1 h-4 bg-black/20 rounded-full" />
                  </div>
               </div>
            </div>
            
            <div className="absolute bottom-8 left-8 z-40 px-4 py-1 bg-black text-white text-[10px] font-black uppercase italic">Legacy_Stack</div>
            <div className="absolute bottom-8 right-8 z-40 px-4 py-1 bg-white text-black border border-black text-[10px] font-black uppercase italic">Modern_UIX</div>
          </div>
        </div>
      </div>
    );
  },

  // 15. TabbedShowcase: Module-based feature navigation
  TabbedShowcase: () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
      { title: "Velocity", desc: "Built with Next.js 15 for sub-second page loads and instant interaction.", icon: Zap },
      { title: "Precision", desc: "Tailwind CSS v4 ensures every pixel is exactly where it needs to be.", icon: MousePointer2 },
      { title: "Security", desc: "Rigorous TypeScript typing prevents errors before they even reach production.", icon: Shield }
    ];

    return (
      <div className="w-full py-24 bg-[#050505] text-white p-8 md:p-16 font-sans">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="text-xs font-black uppercase tracking-[0.5em] text-blue-500 italic">Technical_Core</div>
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
                BUILT FOR <br /> <span className="text-white/20">PERFORMANCE.</span>
              </h2>
            </div>

            <div className="space-y-4">
              {tabs.map((tab, i) => (
                <div key={i} 
                     className={`p-8 rounded-[2rem] border transition-all cursor-pointer group ${
                       activeTab === i ? 'bg-white text-black border-white' : 'bg-transparent border-white/10 hover:border-white/30'
                     }`}
                     onClick={() => setActiveTab(i)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <tab.icon size={24} className={activeTab === i ? 'text-blue-600' : 'text-blue-500'} />
                      <span className="text-2xl font-black uppercase italic tracking-tight">{tab.title}</span>
                    </div>
                    {activeTab === i && <ArrowRight size={24} />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-square bg-zinc-900 rounded-[3rem] border border-white/10 p-12 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-all" />
            
            <div className="space-y-8 relative z-10">
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 italic">Module_Insight_{activeTab + 1}</div>
               <p className="text-4xl font-black italic leading-tight uppercase">
                 {tabs[activeTab].desc}
               </p>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${(activeTab + 1) * 33.3}%` }} />
              </div>
              <div className="flex justify-between items-end">
                <div className="text-xs font-black uppercase italic tracking-widest text-white/20">Efficiency_Metric</div>
                <div className="text-5xl font-black italic">{(activeTab + 1) * 30}%+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  // 16. StatsCounterNeon: Grid of glowing metrics
  StatsCounterNeon: () => (
    <div className="w-full py-24 bg-black text-white p-8 md:p-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: "Active_Users", value: "24.5k", icon: Users, color: "blue" },
          { label: "Requests_Sec", value: "850+", icon: Zap, color: "yellow" },
          { label: "Uptime_Score", value: "99.9%", icon: Shield, color: "emerald" },
          { label: "Global_Nodes", value: "142", icon: Globe, color: "purple" }
        ].map((stat, i) => (
          <div key={i} className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-10 flex flex-col gap-8 group hover:border-white/20 transition-all">
            <div className={`w-14 h-14 rounded-2xl bg-${stat.color}-500/10 border border-${stat.color}-500/20 flex items-center justify-center text-${stat.color}-400 group-hover:scale-110 transition-transform`}>
              <stat.icon size={24} />
            </div>
            <div className="space-y-1">
              <div className="text-5xl font-black italic tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 italic">{stat.label}</div>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className={`h-full bg-${stat.color}-500 w-[70%] animate-in slide-in-from-left duration-1000 delay-${i * 200}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  // 17. TeamGridCreative: Dynamic team showcase
  TeamGridCreative: () => (
    <div className="w-full py-24 bg-white text-black p-8 md:p-24 font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-[0.5em] text-black/40 italic">Human_Capital</div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
              THE <span className="text-zinc-300">CORE.</span>
            </h2>
          </div>
          <p className="max-w-md text-black/60 font-medium italic">
            Meet the architects of the digital future. A multidisciplinary team driven by innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Alex_Chen", role: "Principal_Architect", color: "blue" },
            { name: "Sarah_Vance", role: "Design_Director", color: "rose" },
            { name: "Marcus_Kohl", role: "Lead_Engineer", color: "emerald" },
            { name: "Elena_Russo", role: "Product_Strategy", color: "purple" }
          ].map((member, i) => (
            <div key={i} className="group relative">
              <div className="aspect-[4/5] bg-zinc-100 rounded-[3rem] border-4 border-black overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users size={80} className="text-black/5 group-hover:scale-150 transition-transform duration-700" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-black text-white">
                   <div className="text-xs font-black uppercase tracking-widest text-white/40 italic mb-1">{member.role}</div>
                   <div className="text-2xl font-black italic uppercase">{member.name}</div>
                </div>
              </div>
              <div className={`absolute -top-4 -right-4 w-12 h-12 bg-${member.color}-500 rounded-full border-4 border-black z-10 flex items-center justify-center text-white font-black italic`}>
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // 18. FAQAccordionMinimal: Clean, structured support
  FAQAccordionMinimal: () => {
    const [openIndex, setOpenIndex] = useState(0);
    const faqs = [
      { q: "How fast is the deployment?", a: "Deployment takes less than 30 seconds to our global edge network of 140+ nodes." },
      { q: "Is the design system customizable?", a: "Yes, every component is built with Tailwind CSS v4, allowing for deep customization via CSS variables." },
      { q: "Do you offer enterprise support?", a: "We provide 24/7 dedicated support for our enterprise tier, including SLA guarantees." },
      { q: "Can I use it with React 19?", a: "Absolutely. Our components are optimized for React 19 and Next.js 15 features." }
    ];

    return (
      <div className="w-full py-24 bg-black text-white p-8 md:p-24 font-sans">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="text-xs font-black uppercase tracking-[0.6em] text-white/20 italic">Support_Center</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">COMMON_QUESTIONS.</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`border border-white/10 rounded-[2rem] overflow-hidden transition-all ${openIndex === i ? 'bg-zinc-900' : 'hover:border-white/30'}`}>
                <button 
                  className="w-full p-8 flex items-center justify-between text-left group"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                  <span className="text-2xl font-black uppercase italic tracking-tight">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-500 ${openIndex === i ? 'rotate-180 bg-white text-black' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div className={`px-8 transition-all duration-500 overflow-hidden ${openIndex === i ? 'pb-8 max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white/60 font-medium italic leading-relaxed text-lg">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <div className="inline-flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-[2rem]">
               <HelpCircle size={24} className="text-blue-500" />
               <span className="font-black italic uppercase">Still have questions?</span>
               <button className="px-6 py-2 bg-white text-black font-black uppercase italic rounded-xl text-sm hover:scale-105 transition-all">
                 Contact_Support
               </button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  // 19. IntegrationCloud: Connected service network
  IntegrationCloud: () => (
    <div className="w-full py-24 bg-[#050505] text-white p-8 md:p-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10">
          <div className="text-xs font-black uppercase tracking-[0.5em] text-purple-500 italic">Connected_Ecosystem</div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8]">
            GLOBAL <br /> <span className="text-white/20">SYNC.</span>
          </h2>
          <p className="text-xl text-white/40 font-medium italic leading-relaxed max-w-md">
            Integrate seamlessly with your favorite tools. Our API-first approach ensures compatibility across the stack.
          </p>
          <div className="grid grid-cols-2 gap-4">
             {['REST_API', 'Webhooks', 'GraphQL', 'SDKs'].map((tech, i) => (
               <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                 <span className="text-xs font-black uppercase italic tracking-widest">{tech}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="relative aspect-square">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-48 h-48 bg-purple-500/20 rounded-full blur-[80px] animate-pulse" />
             <div className="w-32 h-32 bg-purple-600 rounded-3xl border border-white/20 flex items-center justify-center shadow-2xl shadow-purple-500/40 relative z-20">
                <Zap size={48} fill="currentColor" />
             </div>
          </div>
          
          {[
            { pos: "top-0 left-1/4", icon: Globe },
            { pos: "top-1/4 right-0", icon: Layout },
            { pos: "bottom-1/4 right-1/4", icon: Smartphone },
            { pos: "bottom-0 left-0", icon: Monitor },
            { pos: "top-1/2 left-0", icon: Search }
          ].map((item, i) => (
            <div key={i} className={`absolute ${item.pos} w-20 h-20 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center hover:border-purple-500/50 hover:bg-white/5 transition-all group cursor-pointer z-10`}>
               <item.icon size={24} className="text-white/40 group-hover:text-purple-400 group-hover:scale-110 transition-all" />
               <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 400">
             <circle cx="200" cy="200" r="120" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
             <circle cx="200" cy="200" r="180" fill="none" stroke="white" strokeWidth="1" strokeDasharray="8 12" />
          </svg>
        </div>
      </div>
    </div>
  ),

  // 20. ContactFormSleek: Conversion-optimized form
  ContactFormSleek: () => (
    <div className="w-full py-24 bg-white text-black p-8 md:p-16 font-sans">
      <div className="max-w-6xl mx-auto bg-black rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-12 lg:p-20 space-y-12 text-white bg-gradient-to-br from-zinc-900 to-black border-r border-white/5">
          <div className="space-y-4">
             <div className="text-xs font-black uppercase tracking-[0.5em] text-white/40 italic">Inquiry_Portal</div>
             <h2 className="text-6xl font-black tracking-tighter uppercase italic leading-none">START A <br /> <span className="text-blue-500">PROJECT.</span></h2>
          </div>
          <p className="text-xl text-white/40 font-medium italic leading-relaxed">
            Ready to build something extraordinary? Fill out the form and our team will get back to you within 12 hours.
          </p>
          <div className="space-y-6">
             <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                   <Mail size={20} />
                </div>
                <span className="text-lg font-black italic uppercase tracking-tight">hello@uix.studio</span>
             </div>
             <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                   <MessageSquare size={20} />
                </div>
                <span className="text-lg font-black italic uppercase tracking-tight">Live_Chat_Available</span>
             </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-12 lg:p-20 bg-black">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Full_Name</label>
                <input type="text" placeholder="John_Doe" className="w-full bg-transparent border-b-2 border-white/10 p-4 text-white font-black italic focus:border-blue-500 outline-none transition-all placeholder:text-white/10" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Email_Address</label>
                <input type="email" placeholder="john@company.com" className="w-full bg-transparent border-b-2 border-white/10 p-4 text-white font-black italic focus:border-blue-500 outline-none transition-all placeholder:text-white/10" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Project_Type</label>
              <select className="w-full bg-transparent border-b-2 border-white/10 p-4 text-white font-black italic focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer">
                 <option className="bg-black">SaaS_Platform</option>
                 <option className="bg-black">Creative_Landing</option>
                 <option className="bg-black">Design_System</option>
                 <option className="bg-black">Mobile_App</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Project_Details</label>
              <textarea placeholder="Tell_us_about_your_vision..." rows={4} className="w-full bg-transparent border-b-2 border-white/10 p-4 text-white font-black italic focus:border-blue-500 outline-none transition-all placeholder:text-white/10 resize-none" />
            </div>
            <button className="w-full py-6 bg-blue-600 text-white font-black uppercase italic text-xl hover:bg-blue-500 transition-all flex items-center justify-center gap-4 shadow-xl shadow-blue-500/20">
              <span>[ Send_Message ]</span>
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};

