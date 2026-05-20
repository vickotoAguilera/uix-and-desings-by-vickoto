"use client";

import React from 'react';
import { SmartImage } from '../SmartImage';
import { ArrowRight, CheckCircle2, Play, Layout, Zap, Shield, BarChart3, Globe, Users, ArrowUpRight } from 'lucide-react';

export const CorporateSaaSHero = {
  // Variante 01: Classic SaaS (Modern & Clean)
  Classic: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
          <Zap size={14} className="fill-blue-600" />
          <span>New: AI-Powered Analytics is here</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight max-w-4xl">
          Scale your business with <span className="text-blue-600">Intelligent</span> automation.
        </h1>
        
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
          The all-in-one platform to manage your team, track performance, and grow your revenue—all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group">
            Start Free Trial
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            <Play size={18} className="fill-slate-700" />
            Watch Demo
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="relative w-full max-w-5xl mt-16 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden aspect-[16/10]">
            <SmartImage className="w-full h-full object-cover" />
            {/* Overlay indicators */}
            <div className="absolute top-4 left-4 right-4 flex justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="mt-24 pb-12 w-full max-w-7xl mx-auto border-t border-slate-200 pt-12 flex flex-col items-center gap-8">
        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest text-center">Trusted by world-class teams</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-50">
          <div className="text-2xl font-black text-slate-900 tracking-tighter">FORBES</div>
          <div className="text-2xl font-black text-slate-900 tracking-tighter">TECHCRUNCH</div>
          <div className="text-2xl font-black text-slate-900 tracking-tighter">WIRED</div>
          <div className="text-2xl font-black text-slate-900 tracking-tighter">VERGE</div>
        </div>
      </div>
    </div>
  ),

  // Variante 02: Modern Grid (Left Content, Right UI)
  ModernGrid: () => (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 pt-32 lg:pt-48 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 space-y-8 text-left">
          <div className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-full text-xs font-bold">
            Analytics & Insights
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tight">
            Predict the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Future.</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed">
            Stop guessing and start knowing. Our platform analyzes millions of data points to give you actionable insights for your business.
          </p>
          <div className="flex items-center gap-6">
            <button className="px-8 py-4 bg-slate-950 text-white rounded-lg font-bold hover:scale-105 transition-all shadow-xl shadow-slate-200">
              Get Started Now
            </button>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                  <User size={20} className="text-slate-400" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                +2k
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-2xl">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-200 rounded-full blur-[100px] opacity-40 animate-pulse" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-violet-200 rounded-full blur-[100px] opacity-40 animate-pulse delay-700" />
          
          <div className="relative bg-slate-950 rounded-3xl p-6 shadow-2xl border border-white/10">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                <BarChart3 className="text-indigo-400" />
                <div className="text-2xl font-bold text-white">$45.2k</div>
                <div className="text-[10px] text-green-400 font-bold">+12% vs last month</div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                <Users className="text-violet-400" />
                <div className="text-2xl font-bold text-white">1.2k</div>
                <div className="text-[10px] text-indigo-400 font-bold">New users today</div>
              </div>
            </div>
            <div className="w-full h-48 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
              <SmartImage className="w-full h-full object-cover opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 03: Bento Highlight (Feature Focused)
  BentoHighlight: () => (
    <div className="w-full min-h-screen bg-slate-950 flex flex-col pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Build software <span className="text-emerald-400 italic">faster.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need to deploy and scale your applications without the infrastructure headaches.
          </p>
          <button className="px-10 py-4 bg-emerald-500 text-slate-950 rounded-full font-black hover:bg-emerald-400 transition-all">
            Deploy Now — Free
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 max-w-6xl mx-auto">
          <div className="md:col-span-2 md:row-span-2 p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] flex flex-col justify-between group hover:border-emerald-500/50 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Global Edge Network</h3>
              <p className="text-slate-400 leading-relaxed">Fast delivery to every user, everywhere. Our CDN covers 150+ locations worldwide.</p>
            </div>
            <SmartImage className="mt-8 rounded-xl border border-slate-800 group-hover:scale-[1.02] transition-transform" />
          </div>

          <div className="md:col-span-2 p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] flex items-center gap-8 group hover:border-indigo-500/50 transition-all">
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-bold text-white">Instant Rollbacks</h3>
              <p className="text-slate-400 text-sm">Deploy with confidence. One click to revert any changes instantly.</p>
            </div>
            <div className="w-24 h-24 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 shrink-0">
              <Zap size={32} />
            </div>
          </div>

          <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] flex flex-col justify-between group hover:border-amber-500/50 transition-all">
            <Shield className="text-amber-500 mb-4" size={32} />
            <div>
              <h3 className="text-lg font-bold text-white">SSO Ready</h3>
              <p className="text-slate-400 text-sm mt-1">Enterprise security from day one.</p>
            </div>
          </div>

          <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] flex flex-col justify-between group hover:border-blue-500/50 transition-all">
            <Users className="text-blue-500 mb-4" size={32} />
            <div>
              <h3 className="text-lg font-bold text-white">Collab</h3>
              <p className="text-slate-400 text-sm mt-1">Built for teams of all sizes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 04: Glassmorphism SaaS
  Glassmorphism: () => (
    <div className="w-full min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Floating Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400 rounded-full blur-[120px] opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-400 rounded-full blur-[120px] opacity-30 animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-left space-y-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 inline-block px-4 py-2 rounded-2xl">
            <span className="text-white text-sm font-medium tracking-wide">✨ Next-Gen Workspace</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tight">
            Design <br/> Your Work <br/> <span className="text-white/60 italic">Better.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-lg leading-relaxed">
            A beautiful, unified workspace for your documents, projects, and team. Experience the magic of seamless collaboration.
          </p>
          <div className="flex items-center gap-4">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-black hover:scale-105 transition-all shadow-2xl">
              Try for free
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all">
              See how it works
            </button>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center">
          <div className="relative w-full max-w-xl aspect-square bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl flex items-center justify-center shadow-2xl animate-bounce duration-[3000ms]">
              <div className="text-center">
                <div className="text-white font-black text-2xl">98%</div>
                <div className="text-white/60 text-[8px] font-bold uppercase tracking-widest">Efficiency</div>
              </div>
            </div>
            
            <div className="h-full w-full rounded-2xl bg-white/5 border border-white/10 flex flex-col">
              <div className="p-4 border-b border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 p-6">
                <div className="w-1/2 h-4 bg-white/20 rounded-full mb-8" />
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl" />
                      <div className="flex-1 space-y-2">
                        <div className="w-full h-2 bg-white/10 rounded-full" />
                        <div className="w-2/3 h-2 bg-white/5 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 05: Clean Minimalist
  Minimalist: () => (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h1 className="text-6xl md:text-9xl font-black text-black leading-[0.9] tracking-tighter">
          Less noise. <br/> More focus.
        </h1>
        <p className="text-zinc-500 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
          The task manager for people who value deep work and meaningful results. No distractions, just your work.
        </p>
        <div className="flex flex-col items-center gap-8">
          <button className="group relative px-12 py-5 bg-black text-white rounded-full font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10">Start Writing Now</span>
            <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <div className="flex items-center gap-12 text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px]">
            <span>No credit card</span>
            <span className="w-1 h-1 bg-zinc-200 rounded-full" />
            <span>14-day trial</span>
            <span className="w-1 h-1 bg-zinc-200 rounded-full" />
            <span>GDPR Ready</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 06: Gradient Flow
  GradientFlow: () => (
    <div className="w-full min-h-screen bg-slate-950 relative flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Animated Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-500/20 to-transparent blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Join the waitlist for v2.0
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight">
          Supercharge your <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">development flow.</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The platform built by developers, for developers. Deploy, monitor, and scale with the speed of light.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-xl font-black hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-all">
            Get early access
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all">
            Read documentation
          </button>
        </div>

        {/* Visual Terminal Element */}
        <div className="mt-20 max-w-2xl mx-auto bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="p-6 font-mono text-sm text-left text-slate-400 space-y-2">
            <div className="flex gap-2">
              <span className="text-blue-400">$</span>
              <span>npm install @supercharge/core</span>
            </div>
            <div className="text-green-400">✓ Installed successfully</div>
            <div className="flex gap-2">
              <span className="text-blue-400">$</span>
              <span>supercharge init</span>
            </div>
            <div className="text-white/60">Initializing project in /workspace...</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 07: Tech Dashboard (Dark focus)
  TechDashboard: () => (
    <div className="w-full min-h-screen bg-zinc-950 flex flex-col lg:flex-row">
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-20 py-20 space-y-8">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <Layout className="text-white" size={24} />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
          Intelligence <br/> at the <span className="text-blue-500">core.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-lg">
          The modern OS for your business operations. Real-time data, automated workflows, and global compliance.
        </p>
        <div className="space-y-4">
          {['Unlimited projects', 'Real-time collaboration', 'Custom domain'].map((item) => (
            <div key={item} className="flex items-center gap-3 text-zinc-300">
              <CheckCircle2 size={18} className="text-blue-500" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="pt-6">
          <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all flex items-center gap-3">
            Start building for free
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 bg-zinc-900/50 border-l border-zinc-800 p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent)]" />
        <div className="relative w-full max-w-2xl space-y-6">
          <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <div className="text-white font-bold">Revenue Growth</div>
              <div className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-[10px] font-black">+24.5%</div>
            </div>
            <div className="h-48 flex items-end gap-3">
              {[40, 65, 45, 90, 55, 75, 85].map((h, i) => (
                <div key={i} className="flex-1 bg-blue-600/20 rounded-t-lg relative group transition-all hover:bg-blue-600/40" style={{ height: `${h}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-[10px] font-bold text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    ${h}k
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6 flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500">
                <BarChart3 size={20} />
              </div>
              <div>
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Conversion</div>
                <div className="text-xl font-bold text-white">12.4%</div>
              </div>
            </div>
            <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6 flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500">
                <Globe size={20} />
              </div>
              <div>
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Regions</div>
                <div className="text-xl font-bold text-white">142</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 08: Interactive Dots (Modern Tech)
  InteractiveDots: () => (
    <div className="w-full min-h-screen bg-white relative flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Dots Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em]">
          Available Now
        </div>
        <h1 className="text-6xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter">
          Connect your <br/> entire <span className="italic underline decoration-indigo-600 decoration-8 underline-offset-[12px]">stack.</span>
        </h1>
        <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          The missing piece of your data infrastructure. Sync anything, anywhere, in milliseconds.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="px-10 py-5 bg-indigo-600 text-white rounded-full font-black text-lg hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200">
            Start integrating
          </button>
          <button className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-full font-black text-lg hover:border-indigo-600 transition-all">
            Talk to sales
          </button>
        </div>
      </div>

      {/* Floating Logos or Connections would go here */}
      <div className="mt-24 flex items-center gap-8 grayscale opacity-30">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-12 h-12 bg-slate-200 rounded-2xl" />
        ))}
      </div>
    </div>
  ),

  // Variante 09: Product Showcase (Feature focus)
  ProductShowcase: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 text-center space-y-8">
        <h1 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tight leading-none">
          Project management <br/> reimagined.
        </h1>
        <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed">
          Stop juggling apps. Plan, track, and collaborate on any project with a beautiful, intuitive interface.
        </p>
        <button className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all">
          Get started for free
        </button>
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 relative">
        <div className="relative rounded-[2rem] bg-white border border-slate-200 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden">
          <SmartImage className="w-full aspect-[16/9] object-cover" />
          
          {/* Floating Feature Tags */}
          <div className="absolute top-[20%] left-[10%] bg-white rounded-2xl p-4 shadow-xl border border-slate-100 animate-bounce duration-[4000ms]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                <CheckCircle2 size={16} />
              </div>
              <div className="text-xs font-bold text-slate-900">Task completed</div>
            </div>
          </div>

          <div className="absolute bottom-[30%] right-[10%] bg-white rounded-2xl p-4 shadow-xl border border-slate-100 animate-bounce duration-[5000ms] delay-500">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <Users size={16} />
              </div>
              <div className="text-xs font-bold text-slate-900">3 team members active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 10: Enterprise Solid (Trust focus)
  EnterpriseSolid: () => (
    <div className="w-full min-h-screen bg-[#001529] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Corporate Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-20 relative z-10">
        <div className="flex-1 space-y-10">
          <div className="flex items-center gap-3 text-blue-400 font-black uppercase tracking-[0.3em] text-xs">
            <Shield size={16} />
            <span>Bank-Grade Security</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tight">
            Enterprise-grade <br/> infrastructure <br/> for <span className="text-blue-500">everyone.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
            Scalable, secure, and reliable. Trusted by 40% of the Fortune 500 to power their mission-critical applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-10 py-5 bg-blue-600 text-white rounded-lg font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/40">
              Contact Enterprise Sales
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white/20 text-white rounded-lg font-black text-lg hover:bg-white/10 transition-all">
              View Case Studies
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-4 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-white">99.99%</div>
              <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">SOC2</div>
              <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Certified</div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl hidden lg:block">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] space-y-4 translate-y-12">
                <Globe className="text-blue-500" size={32} />
                <h3 className="text-xl font-bold text-white">Global Reach</h3>
                <p className="text-slate-400 text-sm">Deploy to any region instantly with local compliance.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] space-y-4 translate-y-12">
                <Zap className="text-yellow-500" size={32} />
                <h3 className="text-xl font-bold text-white">Fast Execution</h3>
                <p className="text-slate-400 text-sm">Low latency infrastructure for real-time apps.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] space-y-4">
                <Shield className="text-emerald-500" size={32} />
                <h3 className="text-xl font-bold text-white">Security</h3>
                <p className="text-slate-400 text-sm">Advanced encryption and DDoS protection.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] space-y-4">
                <BarChart3 className="text-indigo-500" size={32} />
                <h3 className="text-xl font-bold text-white">Insights</h3>
                <p className="text-slate-400 text-sm">Granular analytics for every resource.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
