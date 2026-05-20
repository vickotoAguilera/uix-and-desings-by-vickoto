"use client";

import React from 'react';
import { SmartImage } from '../SmartImage';
import { ArrowRight, CheckCircle2, Play, Layout, Zap, Shield, BarChart3, Globe, Users, User, ArrowUpRight, MessageSquare, Send, Sparkles, Smartphone, Apple, PlayCircle, Monitor, MousePointer2, Layers, Lock } from 'lucide-react';

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

  // Variante 11: AIChatFocus (Intelligent Chat Interaction)
  AIChatFocus: () => (
    <div className="w-full min-h-screen bg-slate-900 flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-400 text-sm font-bold">
            <Sparkles size={16} />
            <span>Next-Gen AI Assistant</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight">
            Talk to your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Business Data.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
            Stop digging through spreadsheets. Just ask our AI assistant any question and get instant, accurate insights.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-all">
              Try AI Assistant
            </button>
            <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-indigo-500/20 blur-[100px] rounded-full" />
          <div className="relative bg-slate-950 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[500px]">
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">AI Business Analyst</div>
                  <div className="text-green-500 text-[10px] font-black uppercase tracking-widest">Active Now</div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              <div className="flex justify-end">
                <div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] text-sm font-medium">
                  How was our revenue growth in Q3 compared to last year?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 text-slate-300 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm leading-relaxed">
                  Your revenue in Q3 was <span className="text-white font-bold">$1.2M</span>, which is a <span className="text-green-400 font-bold">24% increase</span> compared to Q3 last year. Most growth came from the Enterprise sector.
                </div>
              </div>
            </div>
            <div className="p-4 bg-white/5 border-t border-white/10 flex gap-4">
              <div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-500 text-sm">
                Ask a question...
              </div>
              <button className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 12: DataVizDashboard (Complex Visualization Focus)
  DataVizDashboard: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 mb-16 relative z-10">
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
          Insights that <br/> drive <span className="text-blue-600 italic">action.</span>
        </h1>
        <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed">
          The most powerful data visualization platform for modern teams. Turn raw data into beautiful, actionable dashboards in minutes.
        </p>
        <div className="flex justify-center gap-6">
          <button className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all">
            Get started
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 space-y-8">
          <div className="flex justify-between items-center">
            <div className="text-slate-400 font-bold text-xs uppercase tracking-widest">Active Users</div>
            <BarChart3 className="text-blue-600" size={20} />
          </div>
          <div className="text-4xl font-black text-slate-900">12,450</div>
          <div className="h-32 flex items-end gap-1">
            {[30, 50, 40, 80, 60, 90, 70, 85, 45, 60].map((h, i) => (
              <div key={i} className="flex-1 bg-blue-100 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <div className="md:col-span-2 bg-slate-900 p-8 rounded-[2rem] shadow-2xl border border-white/5 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Globe size={200} className="text-white" />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="flex justify-between items-center">
              <div className="text-slate-500 font-bold text-xs uppercase tracking-widest">Global Performance</div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="w-2 h-2 rounded-full bg-slate-700" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-black text-white">99.9%</div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">Server Uptime</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white">45ms</div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">Avg. Latency</div>
              </div>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-blue-600" />
            </div>
          </div>
        </div>

        <div className="md:col-span-3 bg-white p-12 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-black text-slate-900 leading-tight">Predictive Analytics Engine</h3>
            <p className="text-slate-500">Our machine learning model analyzes historical patterns to predict future trends with 95% accuracy.</p>
            <div className="flex items-center gap-4 text-blue-600 font-bold text-sm">
              <span>Learn about our AI</span>
              <ArrowRight size={16} />
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-slate-50 rounded-2xl border border-slate-100" />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 13: MobileAppFirst (Mobile App Download Focus)
  MobileAppFirst: () => (
    <div className="w-full min-h-screen bg-indigo-600 flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10 text-center lg:text-left">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
            Your finances <br/> in your <span className="text-indigo-300 italic">pocket.</span>
          </h1>
          <p className="text-indigo-100 text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            The modern way to save, spend, and invest. Join 2 million people who manage their money better with our mobile app.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-all">
              <Apple size={24} />
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold opacity-60 leading-none">Download on the</div>
                <div className="text-lg leading-none mt-1">App Store</div>
              </div>
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-all">
              <Smartphone size={24} />
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold opacity-60 leading-none">Get it on</div>
                <div className="text-lg leading-none mt-1">Google Play</div>
              </div>
            </button>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
            <div>
              <div className="text-2xl font-black text-white">4.9/5</div>
              <div className="text-[10px] text-indigo-200 font-bold uppercase tracking-widest mt-1">App Store Rating</div>
            </div>
            <div className="w-px h-10 bg-indigo-400/30" />
            <div>
              <div className="text-2xl font-black text-white">2M+</div>
              <div className="text-[10px] text-indigo-200 font-bold uppercase tracking-widest mt-1">Active Users</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          {/* Decorative Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-white/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square border border-white/5 rounded-full" />
          
          <div className="relative w-72 h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />
            <div className="absolute inset-0 bg-white">
              <div className="p-8 pt-12 space-y-8">
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full" />
                  <div className="w-8 h-8 bg-slate-100 rounded-lg" />
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total Balance</div>
                  <div className="text-3xl font-black text-slate-900">$12,450.00</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl space-y-2">
                    <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                      <ArrowUpRight size={14} />
                    </div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase">Income</div>
                    <div className="text-sm font-bold text-slate-900">$2,4k</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl space-y-2">
                    <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center text-red-600 rotate-90">
                      <ArrowUpRight size={14} />
                    </div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase">Outcome</div>
                    <div className="text-sm font-bold text-slate-900">$1,2k</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Recent Activity</div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-100 rounded-xl" />
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-2 bg-slate-100 rounded-full" />
                        <div className="w-2/3 h-1 bg-slate-50 rounded-full" />
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

  // Variante 14: CinematicVideo (Cinematic Style with Simulated Video Background)
  CinematicVideo: () => (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black">
      {/* Background Simulation */}
      <div className="absolute inset-0 opacity-40">
        <SmartImage className="w-full h-full object-cover scale-110 blur-sm" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
      
      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
          <PlayCircle size={14} className="text-red-500" />
          Watch the film: Behind the design
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter">
          Crafting the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500 italic">Future.</span>
        </h1>
        
        <p className="text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          We combine cutting-edge technology with timeless design to build experiences that matter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <button className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-black text-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-3">
            Start a project
            <ArrowRight size={20} />
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3">
            <Play size={20} className="fill-white" />
            Watch Showreel
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 px-12 flex justify-between items-end">
        <div className="text-left space-y-2">
          <div className="text-white font-black text-2xl">2024</div>
          <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">Annual Collection</div>
        </div>
        <div className="flex gap-4">
          <div className="w-1 h-1 bg-white rounded-full" />
          <div className="w-1 h-1 bg-white/20 rounded-full" />
          <div className="w-1 h-1 bg-white/20 rounded-full" />
        </div>
        <div className="text-right space-y-2">
          <div className="text-white font-black text-2xl">London / NYC</div>
          <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">Global Studio</div>
        </div>
      </div>
    </div>
  ),

  // Variante 15: HighTrustPartners (High Trust & Security Focus)
  HighTrustPartners: () => (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-32 px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center space-y-12 relative z-10">
        <div className="flex items-center gap-3 text-blue-600 font-black uppercase tracking-[0.3em] text-xs">
          <Shield size={16} />
          <span>The Gold Standard in Data Security</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight max-w-4xl">
          Trusted by the world's <br/> most <span className="text-blue-600 italic">ambitious</span> companies.
        </h1>
        
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
          Over 50,000 teams use our platform to power their mission-critical operations. From startups to Fortune 500 enterprises.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
            Join 50,000+ Teams
          </button>
          <button className="px-10 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
            Talk to Enterprise Sales
          </button>
        </div>

        {/* Massive Logo Grid */}
        <div className="w-full pt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-center opacity-40 grayscale">
            {['MICROSOFT', 'GOOGLE', 'AMAZON', 'NETFLIX', 'SPOTIFY', 'STRIPE'].map((logo) => (
              <div key={logo} className="text-2xl font-black text-slate-900 tracking-tighter">
                {logo}
              </div>
            ))}
            {['UBER', 'AIRBNB', 'SLACK', 'ADOBE', 'SALESFORCE', 'DISNEY'].map((logo) => (
              <div key={logo} className="text-2xl font-black text-slate-900 tracking-tighter hidden lg:block">
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-20 pt-20 border-t border-slate-100">
          <div className="text-left space-y-4">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">End-to-end Encryption</h3>
            <p className="text-slate-500 text-sm">Your data is yours alone. We use the highest level of encryption available.</p>
          </div>
          <div className="text-left space-y-4">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">GDPR & SOC2 Ready</h3>
            <p className="text-slate-500 text-sm">We maintain the most rigorous compliance standards in the industry.</p>
          </div>
          <div className="text-left space-y-4">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">24/7 Priority Support</h3>
            <p className="text-slate-500 text-sm">Our team of experts is always available to help you scale.</p>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 16: SplitDemo (Content Left, Interactive Demo Right)
  SplitDemo: () => (
    <div className="w-full min-h-screen bg-white flex flex-col lg:flex-row items-stretch">
      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 py-32 space-y-10 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[80px]" />
        
        <div className="relative z-10 space-y-8">
          <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive Showcase
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tight">
            Build your <br/> <span className="text-blue-600">Vision.</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-lg leading-relaxed">
            The most intuitive drag-and-drop builder ever made. Experience the power of professional design without writing a single line of code.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-slate-950 text-white rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-2xl">
              Start Building
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
              See Components
            </button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                  <User size={24} className="text-slate-400" />
                </div>
              ))}
            </div>
            <div className="text-sm font-bold text-slate-400">
              <span className="text-slate-900">10k+</span> creators already joined
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-slate-50 flex items-center justify-center p-8 md:p-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
        
        <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-[0_64px_128px_-32px_rgba(0,0,0,0.1)] border border-slate-200 p-10 space-y-10 group">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-100" />
              <div className="w-3 h-3 rounded-full bg-slate-100" />
              <div className="w-3 h-3 rounded-full bg-slate-100" />
            </div>
            <div className="px-3 py-1 bg-blue-50 rounded-lg text-blue-600 text-[10px] font-black uppercase tracking-widest">Canvas v4.0</div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 bg-slate-50 rounded-3xl border border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-4 group-hover:border-blue-400 group-hover:bg-blue-50/50 transition-all duration-500">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-blue-500 group-hover:scale-110 transition-all">
                <Layout size={32} />
              </div>
              <div className="text-xs font-bold text-slate-400">Drag Layout</div>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-4 group-hover:border-indigo-400 group-hover:bg-indigo-50/50 transition-all duration-500 delay-100">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-indigo-500 group-hover:scale-110 transition-all">
                <Layers size={32} />
              </div>
              <div className="text-xs font-bold text-slate-400">Add Layers</div>
            </div>
          </div>

          <div className="relative h-48 bg-slate-900 rounded-[2rem] overflow-hidden">
            <SmartImage className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-6 py-3 bg-white text-slate-950 rounded-xl font-black text-sm shadow-2xl flex items-center gap-2 group-hover:translate-y-[-10px] transition-transform">
                <MousePointer2 size={16} className="text-blue-600" />
                Drop here to build
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 17: DarkCommandCenter (Dark Control Center Style)
  DarkCommandCenter: () => (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 py-20 overflow-hidden relative">
      {/* HUD Elements Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-blue-500/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-500/5 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10 text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-xs font-black uppercase tracking-[0.3em]">
            <Monitor size={14} />
            Command Center v2.0
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter">
            Total control. <br/> <span className="text-blue-600 italic underline decoration-blue-600/30 decoration-8 underline-offset-8">No compromises.</span>
          </h1>
          <p className="text-zinc-500 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            The most advanced operations platform for modern engineering teams. Monitor, deploy, and scale with real-time HUD analytics.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <button className="px-12 py-6 bg-blue-600 text-white rounded-full font-black text-xl hover:bg-blue-700 transition-all shadow-[0_0_50px_-10px_rgba(37,99,235,0.5)]">
            Deploy Mainframe
          </button>
          <button className="px-12 py-6 bg-zinc-900 text-white border border-white/10 rounded-full font-bold text-xl hover:bg-zinc-800 transition-all">
            Read API Docs
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10">
          {[
            { label: 'Uptime', val: '99.99%', color: 'text-green-500' },
            { label: 'Nodes', val: '1,452', color: 'text-blue-500' },
            { label: 'Latency', val: '12ms', color: 'text-yellow-500' },
            { label: 'Throughput', val: '450k/s', color: 'text-purple-500' }
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-3xl space-y-2">
              <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{stat.label}</div>
              <div className={`text-2xl font-black ${stat.color}`}>{stat.val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  // Variante 18: SoftClaymorphism (Modern Soft Shadows Style)
  SoftClaymorphism: () => (
    <div className="w-full min-h-screen bg-indigo-50 flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-10 text-center lg:text-left">
          <h1 className="text-6xl md:text-8xl font-black text-indigo-950 leading-[0.9] tracking-tight">
            Soft, simple <br/> and <span className="text-indigo-600">Powerful.</span>
          </h1>
          <p className="text-indigo-950/60 text-xl md:text-2xl max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium">
            We've reimagined the way you interact with software. A tactile, friendly experience that makes work feel like play.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <button className="w-full sm:w-auto px-12 py-5 bg-indigo-600 text-white rounded-[2rem] font-black text-xl shadow-[0_20px_40px_-10px_rgba(79,70,229,0.3)] hover:scale-105 transition-all">
              Try for free
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-white text-indigo-950 rounded-[2rem] font-bold text-xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] hover:scale-105 transition-all">
              Learn more
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <div className="relative aspect-square bg-white rounded-[4rem] shadow-[inset_0_-20px_40px_-10px_rgba(0,0,0,0.05),0_40px_80px_-20px_rgba(0,0,0,0.1)] p-12 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 shadow-[0_10px_20px_-5px_rgba(79,70,229,0.1)]">
                <Layout size={32} />
              </div>
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-indigo-100 border-4 border-white shadow-md" />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-full h-8 bg-indigo-50 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]" />
              <div className="w-2/3 h-8 bg-indigo-50 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]" />
              <div className="w-3/4 h-24 bg-indigo-600 rounded-[2.5rem] shadow-[0_15px_30px_-10px_rgba(79,70,229,0.4)] flex items-center justify-center">
                <div className="w-12 h-2 bg-white/30 rounded-full" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 h-20 bg-indigo-50 rounded-3xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]" />
              <div className="flex-1 h-20 bg-indigo-50 rounded-3xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 19: VerticalFeatureList (Benefit List Focus)
  VerticalFeatureList: () => (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-32 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tight">
            The platform <br/> that <span className="text-blue-600">Grows</span> <br/> with you.
          </h1>
          <p className="text-slate-500 text-xl max-w-lg leading-relaxed">
            From your first customer to your first million. Our infrastructure scales automatically so you can focus on building.
          </p>
          <div className="space-y-8">
            {[
              { icon: <Zap />, title: 'Instant Deployment', desc: 'Go from code to production in seconds.' },
              { icon: <Shield />, title: 'Enterprise Security', desc: 'Bank-grade protection for your users.' },
              { icon: <BarChart3 />, title: 'Real-time Analytics', desc: 'Understand your growth with precision.' }
            ].map((f, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-200">
                  {f.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
                  <p className="text-slate-500 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="sticky top-32 space-y-8">
            <div className="relative aspect-[4/5] bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
              <SmartImage className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 space-y-4">
                <div className="text-white font-black text-4xl leading-tight">Trusted by the next generation of founders.</div>
                <button className="px-8 py-4 bg-white text-slate-950 rounded-xl font-black text-sm flex items-center gap-2">
                  Read Case Study
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 20: SaaSShowcaseFinal (Ultimate Mix)
  SaaSShowcaseFinal: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center pt-32 pb-24 px-6 overflow-hidden relative">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-100 to-transparent opacity-50" />
      
      <div className="max-w-5xl mx-auto w-full text-center space-y-10 relative z-10 mb-20">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-900 text-sm font-bold">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
          v4.0 is now live — See what's new
        </div>
        <h1 className="text-7xl md:text-[10rem] font-black text-slate-950 leading-[0.8] tracking-tighter">
          THE ULTIMATE <br/> <span className="text-blue-600 italic">SHOWCASE.</span>
        </h1>
        <p className="text-slate-500 text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-medium">
          A masterclass in modern SaaS design. 20 variations of perfection, built for the next era of the web.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <button className="w-full sm:w-auto px-12 py-6 bg-slate-950 text-white rounded-3xl font-black text-xl hover:bg-blue-600 transition-all shadow-2xl">
            Get Started Now
          </button>
          <button className="w-full sm:w-auto px-12 py-6 bg-white text-slate-950 border-2 border-slate-200 rounded-3xl font-black text-xl hover:border-blue-600 transition-all">
            Talk to Sales
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {[
          { icon: <Zap size={32} />, title: 'Lightning Fast', desc: 'Built on the latest tech stack for zero-latency performance.', color: 'bg-blue-600' },
          { icon: <Shield size={32} />, title: 'Secure by Default', desc: 'Enterprise-grade security standards for every user.', color: 'bg-indigo-600' },
          { icon: <Sparkles size={32} />, title: 'AI Optimized', desc: 'Integrated intelligence to automate your entire workflow.', color: 'bg-purple-600' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 space-y-6 hover:translate-y-[-10px] transition-all duration-500 group">
            <div className={`w-20 h-20 ${item.color} rounded-[2rem] flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform`}>
              {item.icon}
            </div>
            <h3 className="text-3xl font-black text-slate-900">{item.title}</h3>
            <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Final Bottom Call to Action */}
      <div className="mt-32 w-full max-w-7xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center space-y-10">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight relative z-10">Ready to transform <br/> your business?</h2>
        <button className="relative z-10 px-12 py-6 bg-blue-600 text-white rounded-full font-black text-2xl hover:bg-blue-500 hover:scale-105 transition-all shadow-2xl">
          Start Your Free Trial
        </button>
        <div className="pt-10 flex flex-wrap justify-center gap-10 grayscale opacity-40 relative z-10">
          <div className="text-xl font-black text-white">FORBES</div>
          <div className="text-xl font-black text-white">TECHCRUNCH</div>
          <div className="text-xl font-black text-white">WIRED</div>
        </div>
      </div>
    </div>
  ),
};
};
