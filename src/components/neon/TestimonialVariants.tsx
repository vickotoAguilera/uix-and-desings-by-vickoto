"use client";

import React from 'react';
import { Star, Quote, Twitter, MessageSquare, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export const TestimonialVariants: Record<string, React.FC> = {
  ClassicCard: () => (
    <div className="p-8 bg-white border border-zinc-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-zinc-600 mb-8 leading-relaxed">
        "The attention to detail in these components is remarkable. It has completely transformed how we build our client projects."
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-zinc-200 rounded-full overflow-hidden" />
        <div>
          <h4 className="font-bold text-zinc-900">Sarah Jenkins</h4>
          <p className="text-zinc-400 text-sm">Lead Designer @ CreativeFlow</p>
        </div>
      </div>
    </div>
  ),

  NeonPinkGlow: () => (
    <div className="p-8 bg-zinc-950 border border-pink-500/30 rounded-3xl relative group overflow-hidden">
      <div className="absolute top-0 right-0 p-4 text-pink-500/20 group-hover:text-pink-500/40 transition-colors">
        <Quote size={48} />
      </div>
      <p className="text-pink-100/90 text-lg mb-8 relative z-10 italic">
        "Absolutely futuristic. If you want your app to stand out, this is the way to go."
      </p>
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-10 h-10 rounded-full border-2 border-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
        <div>
          <h4 className="font-black text-pink-500 uppercase tracking-tighter">Alex Cyber</h4>
          <p className="text-pink-900 text-xs font-mono">CORE_DEVELOPER</p>
        </div>
      </div>
    </div>
  ),

  MinimalistBorder: () => (
    <div className="p-8 bg-transparent border-l-4 border-zinc-900">
      <p className="text-2xl font-medium text-zinc-800 mb-6 leading-tight">
        "Simplicity is the ultimate sophistication. This kit delivers exactly that."
      </p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-zinc-900 rounded-sm" />
        <span className="font-bold text-sm uppercase tracking-widest">Markus Aurelius</span>
      </div>
    </div>
  ),

  Glassmorphism: () => (
    <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] relative">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-1">
          <div className="w-full h-full rounded-full bg-zinc-900" />
        </div>
      </div>
      <p className="text-white/70 text-center mb-8 italic">
        "Floating between design and reality. The glass effects are the best I've seen in any UI library."
      </p>
      <div className="text-center">
        <h4 className="text-white font-bold">Elena Sky</h4>
        <p className="text-white/30 text-xs">Product Architect</p>
      </div>
    </div>
  ),

  ChatBubble: () => (
    <div className="space-y-4">
      <div className="p-6 bg-zinc-100 rounded-2xl rounded-bl-none relative">
        <p className="text-zinc-800 text-sm">
          "Hey team, just wanted to say that the new components are fire! 🔥"
        </p>
      </div>
      <div className="flex items-center gap-3 ml-2">
        <div className="w-8 h-8 bg-emerald-500 rounded-full" />
        <span className="text-xs font-bold text-zinc-400">David G. • 2m ago</span>
      </div>
    </div>
  ),

  TwitterStyle: () => (
    <div className="p-6 bg-white border border-zinc-200 rounded-2xl hover:bg-zinc-50 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-zinc-200 rounded-full" />
          <div>
            <div className="flex items-center gap-1">
              <h4 className="font-bold text-zinc-900">Elon Musk</h4>
              <CheckCircle size={14} className="text-blue-500 fill-blue-500" />
            </div>
            <p className="text-zinc-500 text-sm">@elonmusk</p>
          </div>
        </div>
        <Twitter className="text-blue-400" size={20} />
      </div>
      <p className="text-zinc-800 mb-4">
        This UI kit is actually pretty good. To the moon! 🚀
      </p>
      <div className="text-zinc-500 text-xs">
        10:30 PM · May 20, 2026
      </div>
    </div>
  ),

  CorporateFormal: () => (
    <div className="p-10 bg-slate-50 rounded-lg border border-slate-200 text-center">
      <Quote className="mx-auto text-slate-300 mb-6" size={40} />
      <p className="text-slate-700 text-lg font-serif mb-8 leading-relaxed">
        "We have integrated these components across our entire SaaS portfolio. The scalability and documentation are top-tier."
      </p>
      <div className="w-12 h-px bg-slate-300 mx-auto mb-6" />
      <h4 className="font-bold text-slate-900 uppercase tracking-widest text-sm">Robert C. Martin</h4>
      <p className="text-slate-500 text-xs mt-1">CTO @ Enterprise Solutions</p>
    </div>
  ),

  EcommerceProduct: () => (
    <div className="p-6 bg-white border border-zinc-200 rounded-2xl flex flex-col sm:flex-row gap-6">
      <div className="w-24 h-24 bg-zinc-100 rounded-xl flex-shrink-0" />
      <div>
        <div className="flex gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={14} className="fill-emerald-500 text-emerald-500" />
          ))}
        </div>
        <h4 className="font-bold text-zinc-900 mb-2">Best purchase this year!</h4>
        <p className="text-zinc-600 text-sm mb-4">
          "The quality of the code is as good as the design. Highly recommend for any dev."
        </p>
        <span className="text-xs font-bold text-zinc-400 uppercase">Verified Buyer: Mike R.</span>
      </div>
    </div>
  ),

  Brutalist: () => (
    <div className="p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <h3 className="text-xl font-black mb-4 underline decoration-4 decoration-yellow-400">USER_FEEDBACK</h3>
      <p className="font-bold text-lg mb-6 uppercase italic">
        "This is not just a UI kit. It's a statement. Bold, loud, and perfect."
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-black border-2 border-white" />
        <span className="font-black text-sm">OPERATOR_09</span>
      </div>
    </div>
  ),

  Retro8Bit: () => (
    <div className="p-6 bg-black border-4 border-white shadow-[inset_-4px_-4px_0px_0px_#555] font-mono">
      <p className="text-green-500 mb-6 uppercase leading-none text-xs">
        [MSG] "POWER-UP COMPLETE. DESIGN STATS +99."
      </p>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-red-500" />
        <span className="text-white text-[10px]">PIXEL_MASTER</span>
      </div>
    </div>
  ),

  GradientBackground: () => (
    <div className="p-1 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="p-8 bg-white rounded-[1.4rem] h-full">
        <p className="text-zinc-800 text-lg font-medium mb-8">
          "I've used many libraries, but the vibrancy and energy of this one is unmatched."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-zinc-100" />
          <div>
            <h4 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Julianne Moore
            </h4>
            <p className="text-zinc-400 text-xs">Creative Director</p>
          </div>
        </div>
      </div>
    </div>
  ),

  DarkModeSaaS: () => (
    <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl">
      <div className="flex items-center gap-1 mb-6">
        <Star size={16} className="fill-indigo-500 text-indigo-500" />
        <span className="text-indigo-500 font-bold ml-1">5.0</span>
        <span className="text-zinc-600 ml-2">Rating</span>
      </div>
      <p className="text-zinc-400 mb-8">
        "Integration was seamless. The TypeScript definitions are perfect, which is a rare find these days."
      </p>
      <div className="flex justify-between items-end">
        <div>
          <h4 className="text-white font-bold">Tom Hardy</h4>
          <p className="text-zinc-600 text-xs">Fullstack Engineer</p>
        </div>
        <div className="w-12 h-12 bg-zinc-800 rounded-xl" />
      </div>
    </div>
  ),

  CreativeAgency: () => (
    <div className="relative p-10 bg-yellow-400 rounded-tr-[5rem] rounded-bl-[5rem] border-2 border-black">
      <Quote className="absolute -top-4 -left-4 text-black bg-white rounded-full p-2 border-2 border-black" size={40} />
      <p className="text-black font-black text-xl italic mb-8">
        "WE DONT JUST BUILD APPS. WE BUILD EXPERIENCES. THIS KIT IS OUR SECRET WEAPON."
      </p>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-white border-2 border-black rounded-full" />
        <span className="font-black underline">THE_LAB_AGENCY</span>
      </div>
    </div>
  ),

  TrustpilotStyle: () => (
    <div className="p-6 bg-white border border-zinc-200 rounded-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center">
              <Star size={14} className="fill-white text-white" />
            </div>
          ))}
        </div>
        <span className="font-bold text-[#00b67a]">Excellent</span>
      </div>
      <p className="font-bold text-zinc-900 mb-2">Simply the best UI assets</p>
      <p className="text-zinc-600 text-sm mb-4">
        "I was skeptical at first, but after using it for 2 days, I'm a fan. Customer support is also very responsive."
      </p>
      <p className="text-zinc-400 text-xs italic">Reviewed 2 hours ago</p>
    </div>
  ),

  SingleQuoteLarge: () => (
    <div className="text-center max-w-2xl mx-auto py-12">
      <p className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-10 leading-none">
        "THE FUTURE OF WEB DESIGN IS ALREADY HERE."
      </p>
      <div className="inline-flex items-center gap-4 p-2 pr-6 bg-zinc-100 rounded-full">
        <div className="w-10 h-10 bg-zinc-900 rounded-full" />
        <span className="font-bold text-sm">Vickoto Aguilera</span>
      </div>
    </div>
  ),

  FloatingAvatars: () => (
    <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-3xl relative">
      <div className="flex -space-x-4 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-300" />
        ))}
        <div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-900 flex items-center justify-center text-[10px] text-white font-bold">
          +10k
        </div>
      </div>
      <p className="text-zinc-600 text-sm italic">
        "Joined a community of +10,000 developers who swear by this kit. Best decision for my career."
      </p>
    </div>
  ),

  StackedCards: () => (
    <div className="relative group cursor-pointer">
      <div className="absolute inset-0 bg-zinc-200 rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-all" />
      <div className="absolute inset-0 bg-zinc-100 rounded-3xl translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-all" />
      <div className="relative p-8 bg-white border-2 border-zinc-900 rounded-3xl">
        <p className="text-zinc-900 font-bold mb-6">
          "The depth of this library is incredible. Every time I think I've seen it all, I find a new gem."
        </p>
        <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Layered Reviews</span>
      </div>
    </div>
  ),

  ExperimentalGlitch: () => (
    <div className="p-8 bg-black border-2 border-emerald-500 rounded-3xl relative overflow-hidden group">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(16,185,129,1)_2px,rgba(16,185,129,1)_4px)]" />
      <h4 className="text-emerald-500 font-mono text-sm mb-4 tracking-[0.3em] uppercase">SYSTEM_OK</h4>
      <p className="text-white font-mono text-sm mb-8 leading-relaxed">
        "T-H-I-S IS THE_M-O-S-T_A-D-V-A-N-C-E-D_U-I_K-I-T_I_H-A-V-E_E-V-E-R_U-S-E-D."
      </p>
      <div className="h-1 w-full bg-emerald-900/30 rounded-full overflow-hidden">
        <div className="h-full bg-emerald-500 w-1/2 group-hover:w-full transition-all duration-1000" />
      </div>
    </div>
  ),

  GridStyle: () => (
    <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-3xl flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-zinc-200 rounded-full mb-6" />
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={14} className="fill-zinc-900 text-zinc-900" />
        ))}
      </div>
      <p className="text-zinc-600 text-sm mb-6">
        "Simple, clean, and efficient. Exactly what we needed for our portfolio site."
      </p>
      <h4 className="font-bold text-zinc-900">Anna W.</h4>
      <p className="text-zinc-400 text-xs">Freelance Dev</p>
    </div>
  ),

  VideoPlaceholder: () => (
    <div className="p-4 bg-zinc-900 rounded-3xl border border-zinc-800 group cursor-pointer">
      <div className="aspect-video bg-zinc-800 rounded-2xl mb-4 relative flex items-center justify-center overflow-hidden">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-black border-b-[8px] border-b-transparent ml-1" />
        </div>
        <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/20 rounded-full">
          <div className="h-full bg-red-500 w-1/3" />
        </div>
      </div>
      <div className="px-2">
        <h4 className="text-white font-bold text-sm">Video Review</h4>
        <p className="text-zinc-500 text-xs">2:45 • Watch how I built it</p>
      </div>
    </div>
  ),
};
