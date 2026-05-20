"use client";

import React from 'react';
import { Star, Quote, Twitter, MessageSquare, CheckCircle, Shield, Zap, ArrowUpRight, Award, Lock, Sparkles, Play, Pause, Volume2, TrendingUp, Calendar, Clock, Sliders, RefreshCw, ChevronRight } from 'lucide-react';
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

  Social_RatingGroup: () => (
    <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-3xl text-zinc-100 relative group overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-3xl font-black text-white">4.9</span>
          <span className="text-zinc-500 text-xs font-mono ml-1">/ 5.0</span>
          <div className="flex gap-0.5 mt-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={12} className="fill-emerald-400 text-emerald-400" />
            ))}
          </div>
        </div>
        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-bold font-mono uppercase">VERIFIED AUDIT</span>
      </div>
      
      <div className="space-y-3 mb-6">
        {[
          { label: 'Visual Design', val: 98 },
          { label: 'Performance', val: 100 },
          { label: 'Ease of Integration', val: 95 }
        ].map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono text-zinc-400">
              <span>{item.label}</span>
              <span>{item.val}%</span>
            </div>
            <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-1000"
                style={{ width: `${item.val}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-zinc-300 text-xs leading-relaxed italic border-t border-zinc-900 pt-4">
        "Everything worked flawlessly right out of the box. Performance audit results on PageSpeed went from 45 to 99 instantly."
      </p>
    </div>
  ),

  Social_MarqueeFeed: () => {
    const reviews = [
      "Amazing code structure! 🌟",
      "Saved us over 120 hours of UI work. 🚀",
      "The CSS is extremely clean and editable.",
      "Beautiful 3D designs, highly interactive.",
      "Best purchase of the year, definitely! 🔥",
      "Next.js Turbopack SSR compiles perfectly."
    ];
    // Double reviews array to support seamless continuous marquee loop
    const doubledReviews = [...reviews, ...reviews];

    return (
      <div className="p-6 bg-zinc-950 border border-zinc-850 rounded-3xl overflow-hidden relative group flex flex-col justify-center min-h-[220px]">
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
        
        <h4 className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-4 px-2">LIVE STREAM FEED</h4>
        
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {doubledReviews.map((text, i) => (
            <div 
              key={i} 
              className="inline-block px-4 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-2xl text-xs font-mono shadow-md hover:border-zinc-700 transition-colors"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    );
  },

  Social_ThreadConversation: () => (
    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-3xl space-y-4">
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-xs font-bold text-violet-400 shrink-0">U</div>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-white">DevUser_77</span>
            <span className="text-[9px] font-mono text-zinc-500">2h ago</span>
          </div>
          <p className="text-xs text-zinc-300">
            Does this library support Next.js SSR out of the box? I had hydration issues with other UI kits.
          </p>
        </div>
      </div>
      
      <div className="h-6 w-px bg-zinc-800 ml-4 my-[-8px] border-dashed border-l" />
      
      <div className="flex gap-3 pl-4">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
          <CheckCircle size={14} className="text-emerald-400" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-emerald-400">UIX Showcase Team</span>
            <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 rounded text-[8px] font-mono">SUPPORT</span>
          </div>
          <p className="text-xs text-zinc-300">
            Yes! Every component is compiled and wrapped inside safe hydration boundaries. Total SSR support with zero server/client mismatch.
          </p>
        </div>
      </div>
    </div>
  ),

  Social_VerifiedBuyer: () => (
    <div className="p-6 bg-zinc-950 border border-zinc-850 rounded-2xl relative group">
      <div className="absolute top-4 right-4 flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-xs font-bold text-indigo-400">
          MR
        </div>
        <div>
          <div className="flex items-center gap-1">
            <h4 className="font-bold text-sm text-zinc-200">Mathew Reynolds</h4>
            <CheckCircle size={12} className="text-indigo-400 fill-indigo-400/20" />
          </div>
          <p className="text-[10px] text-zinc-550">Verified Business Account</p>
        </div>
      </div>
      <p className="text-zinc-400 text-xs leading-relaxed mb-4">
        "We migrated our complete marketing checkout to these inputs and pricing designs. Conversion rates increased by 4.2% in the first week."
      </p>
      <div className="text-[9px] text-zinc-600 font-mono flex justify-between">
        <span>ORDER ID: #UIX-9884</span>
        <span>DELIVERED: MAY 18, 2026</span>
      </div>
    </div>
  ),

  Professional_BentoHighlight: () => (
    <div className="p-8 bg-zinc-905 border border-zinc-800 rounded-3xl text-zinc-100 flex flex-col md:flex-row gap-6 relative overflow-hidden group">
      <div className="flex-1 space-y-4">
        <span className="inline-block px-2.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md text-[10px] font-bold font-mono">CLIENT_CASE</span>
        <blockquote className="text-sm text-zinc-300 font-serif leading-relaxed italic">
          "The modular hierarchy is stellar. We were able to swap core animation components in less than 15 minutes. Our codebase is now 40% smaller."
        </blockquote>
      </div>
      <div className="w-px bg-zinc-800 hidden md:block" />
      <div className="w-full md:w-48 shrink-0 flex flex-col justify-between">
        <div>
          <h4 className="font-black text-sm text-white">David Chen</h4>
          <p className="text-[10px] text-zinc-500">VP of Engineering</p>
        </div>
        <div className="mt-4 pt-4 border-t border-zinc-800 text-[10px] text-zinc-400 font-mono space-y-1">
          <div>COMPANY: SaaSify Inc</div>
          <div>EMPLOYEES: 450+</div>
          <div>STACK: Next.js + Tailwind</div>
        </div>
      </div>
    </div>
  ),

  Professional_MetricStats: () => (
    <div className="p-8 bg-zinc-950 border border-zinc-850 rounded-3xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 blur-[50px] rounded-full" />
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-5xl font-black bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent tracking-tighter">
          +320%
        </span>
        <span className="text-[10px] text-indigo-400 font-mono uppercase tracking-wider">Growth</span>
      </div>
      <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">PLATFORM METRIC LOG</h4>
      <p className="text-zinc-400 text-xs leading-relaxed mb-6 font-serif italic">
        "Our team completely replaced standard layout frames with neon-bento panels. Pagespeed metrics climbed immediately, driving engagement up."
      </p>
      <div className="flex justify-between items-center border-t border-zinc-900 pt-4">
        <div>
          <h5 className="font-bold text-xs text-zinc-200">Victoria Glass</h5>
          <p className="text-[9px] text-zinc-550 uppercase font-mono">Head of UX @ ApexMetrics</p>
        </div>
        <ArrowUpRight className="text-indigo-400" size={16} />
      </div>
    </div>
  ),

  Professional_SplitCompany: () => (
    <div className="flex flex-col sm:flex-row border border-zinc-800 rounded-3xl overflow-hidden min-h-[220px]">
      <div className="sm:w-1/3 bg-zinc-900 p-6 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-zinc-800 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
          <Award className="text-indigo-400" size={16} />
        </div>
        <div>
          <h4 className="font-black text-xs text-white uppercase tracking-widest font-mono">GLOBAL_TECH</h4>
          <p className="text-[9px] text-zinc-550">Enterprise Partner</p>
        </div>
      </div>
      <div className="flex-1 bg-zinc-950 p-6 flex flex-col justify-between">
        <p className="text-zinc-300 text-xs leading-relaxed font-sans">
          "Implementing neon designs into our secure customer dashboards allowed us to highlight critical telemetry logs in clean and visible fashion."
        </p>
        <span className="text-[9px] text-zinc-550 font-mono mt-4">— Marcus Thorne, Cybersecurity Principal</span>
      </div>
    </div>
  ),

  Professional_SSOValidated: () => (
    <div className="p-8 bg-zinc-950 border border-zinc-850 rounded-3xl relative overflow-hidden text-zinc-150">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-2 items-center">
          <Shield size={16} className="text-emerald-400" />
          <span className="text-[10px] text-emerald-400 font-mono font-bold tracking-widest">SSO_SECURED</span>
        </div>
        <Lock size={12} className="text-zinc-650" />
      </div>
      <blockquote className="text-xs text-zinc-300 leading-relaxed font-sans mb-6">
        "Security audit went flawlessly. Code modules are fully scoped, contain no third-party dependencies, and run completely locally on our static nodes."
      </blockquote>
      <div className="flex justify-between items-center text-[10px] text-zinc-500 border-t border-zinc-900 pt-4">
        <div>
          <h4 className="font-bold text-zinc-300">Audrey Sterling</h4>
          <p className="text-[9px] text-zinc-600 font-mono">SecOps Specialist</p>
        </div>
        <span className="text-[9px] font-mono text-zinc-600">COMPLIANT v2.4</span>
      </div>
    </div>
  ),

  Visual_SpotlightReflect: () => {
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(0.12)}
        onMouseLeave={() => setOpacity(0)}
        className="p-8 bg-zinc-950 border border-zinc-800 rounded-3xl relative overflow-hidden group transition-all duration-300 select-none min-h-[220px]"
      >
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
          style={{
            opacity,
            background: `radial-gradient(circle 140px at ${coords.x}px ${coords.y}px, rgba(168, 85, 247, 0.7), transparent 80%)`,
          }}
        />
        <div className="relative z-10 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-mono tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded">DYNAMIC_SPOT</span>
            <Sparkles size={12} className="text-purple-400 animate-pulse" />
          </div>
          <p className="text-zinc-300 text-xs italic font-serif leading-relaxed">
            "The coordinate tracking works like a charm. We added spotlight gradients across our testimonial blocks, keeping customer attention focused immediately."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-[10px] font-bold text-purple-400">
              JS
            </div>
            <div>
              <h5 className="font-bold text-xs text-white">Jason Snyder</h5>
              <p className="text-[9px] text-zinc-550 font-mono">Interactive Specialist</p>
            </div>
          </div>
        </div>
      </div>
    );
  },

  Visual_Tilt3D: () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [style, setStyle] = React.useState<React.CSSProperties>({});

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -y / 12;
      const rotateY = x / 12;
      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      });
    };

    const handleMouseLeave = () => {
      setStyle({
        transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`,
        transition: 'transform 0.5s ease',
      });
    };

    return (
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl text-zinc-150 transition-all duration-100 ease-out shadow-2xl relative overflow-hidden group select-none min-h-[220px]"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 blur-[50px] rounded-full" />
        <div className="flex justify-between items-start mb-4">
          <span className="text-[9px] font-mono tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/25 px-2 py-0.5 rounded">TILT_3D_PERSPECTIVE</span>
          <Star className="text-indigo-400 fill-indigo-400/20" size={14} />
        </div>
        <p className="text-zinc-300 text-xs leading-relaxed italic mb-6">
          "Incredible 3D folding perspective that brings flat cards to life. Smooth frame rates and zero overhead."
        </p>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden shrink-0 border border-zinc-700" />
          <div>
            <h5 className="font-bold text-xs text-white">Diana Ross</h5>
            <p className="text-[9px] text-zinc-500 uppercase font-mono">UI Architect</p>
          </div>
        </div>
      </div>
    );
  },

  /* Fase 2 Premium Symmetrical Testimonials */
  Social_VideoStory: () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [showTranscript, setShowTranscript] = React.useState(false);
    return (
      <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-3xl relative group overflow-hidden transition-all duration-300 hover:border-pink-500/50">
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative w-16 h-16 shrink-0 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 via-purple-600 to-yellow-500 active:scale-95 transition-transform"
          >
            <div className="w-full h-full rounded-full bg-zinc-955 p-[2px]">
              <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden relative">
                {isPlaying ? (
                  <Pause size={18} className="text-pink-500 animate-pulse" />
                ) : (
                  <Play size={18} className="text-pink-500 translate-x-[1px]" />
                )}
                <div className="absolute inset-0 border border-pink-500/30 rounded-full animate-ping pointer-events-none" style={{ animationDuration: '2s' }} />
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-pink-500 text-[8px] font-black text-white rounded font-mono uppercase tracking-wider scale-90">LIVE</span>
          </button>
          
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-bold text-sm text-zinc-100">Clara Sterling</h4>
              <CheckCircle size={12} className="text-pink-500 fill-pink-500/20" />
            </div>
            <p className="text-[10px] text-zinc-550">@clara_travels • Verified Influencer</p>
          </div>
        </div>

        <p className="text-zinc-300 text-xs leading-relaxed mb-4 font-sans italic">
          "Honestly, I was tired of lagging UI components on mobile views. After integration, my load speed jumped up by 2x. Watch my review transcript!"
        </p>

        <button 
          onClick={() => setShowTranscript(!showTranscript)}
          className="w-full py-2 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 rounded-xl text-[10px] font-mono text-zinc-450 hover:text-zinc-200 transition-colors flex items-center justify-center gap-1.5"
        >
          <span>{showTranscript ? "HIDE VIDEO TRANSCRIPT" : "EXPAND FULL TRANSCRIPT"}</span>
          <ChevronRight size={10} className={cn("transition-transform duration-300", showTranscript && "rotate-90")} />
        </button>

        {showTranscript && (
          <div className="mt-3 p-3 bg-zinc-900/60 border border-zinc-850 rounded-xl text-[10px] text-zinc-400 font-mono leading-relaxed">
            "[00:04] Clara: Hey guys! Just showing you my dashboard load times... It's instantly loading everything. Check this neat custom border glow. Absolutely love the neat design details!"
          </div>
        )}
      </div>
    );
  },

  Social_AudioWave: () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    return (
      <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-3xl relative group overflow-hidden transition-all duration-300 hover:border-emerald-500/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
              <Volume2 size={16} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-zinc-200">Gregory Vance</h4>
              <p className="text-[9px] text-zinc-500">Voice Note Review</p>
            </div>
          </div>
          <span className="text-[9px] font-mono text-emerald-400/80 bg-emerald-400/5 px-2 py-0.5 rounded border border-emerald-400/10">0:24</span>
        </div>

        <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-2xl mb-4 flex items-center gap-3">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full bg-emerald-500 text-zinc-950 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
          >
            {isPlaying ? <Pause size={12} className="fill-zinc-950" /> : <Play size={12} className="fill-zinc-955 translate-x-[0.5px]" />}
          </button>
          
          <div className="flex-1 flex items-end gap-[2px] h-6 overflow-hidden">
            {[14, 22, 10, 32, 18, 28, 12, 38, 24, 16, 26, 12, 32, 20, 28, 14, 22, 10, 38, 20, 14, 8].map((h, i) => (
              <span 
                key={i} 
                className={cn(
                  "w-[3px] bg-zinc-800 rounded-full transition-all duration-300 shrink-0", 
                  isPlaying && "animate-pulse"
                )}
                style={{ 
                  height: `${h}px`,
                  animationDelay: `${i * 80}ms`,
                  animationDuration: '600ms',
                  backgroundColor: isPlaying ? '#10b981' : undefined
                }}
              />
            ))}
          </div>
        </div>

        <p className="text-zinc-400 text-xs leading-relaxed italic">
          "The support team literally answered my questions via audio note! The code is fully structured, no bloated assets, and highly accessible."
        </p>
      </div>
    );
  },

  Professional_CaseStudy: () => (
    <div className="p-8 bg-zinc-950 border border-zinc-850 rounded-3xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[50px] rounded-full pointer-events-none" />
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
        <div className="sm:col-span-3 space-y-4">
          <span className="inline-block px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-400 text-[9px] font-mono rounded">
            CASE_STUDY_REF
          </span>
          <blockquote className="text-zinc-200 text-xs font-serif leading-relaxed italic">
            "We integrated the advanced input and table components directly into our secure trading dashboards. The absolute code simplicity saved us months of QA testing."
          </blockquote>
          <div className="flex items-center gap-3 pt-2">
            <div className="w-7 h-7 rounded bg-indigo-500/10 flex items-center justify-center text-[10px] font-black text-indigo-400">
              FT
            </div>
            <div>
              <h5 className="font-bold text-xs text-zinc-100">Arthur Pendelton</h5>
              <p className="text-[9px] text-zinc-550 font-mono">Principal Developer @ FinTechCorp</p>
            </div>
          </div>
        </div>
        
        <div className="sm:col-span-2 bg-zinc-900/60 border border-zinc-850 rounded-2xl p-4 flex flex-col justify-center gap-3 shrink-0">
          <div className="space-y-1">
            <span className="text-[9px] font-mono text-zinc-550">CONVERSION</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-indigo-400 tracking-tighter">+45.8%</span>
              <TrendingUp size={12} className="text-indigo-400" />
            </div>
          </div>
          <div className="h-px bg-zinc-850" />
          <div className="space-y-1">
            <span className="text-[9px] font-mono text-zinc-550">LOAD SPEED</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-emerald-400 tracking-tighter">1.2s</span>
              <span className="text-[8px] font-mono text-emerald-500">(-0.8s)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  Professional_Timeline: () => (
    <div className="p-8 bg-zinc-950 border border-zinc-855 rounded-3xl relative overflow-hidden">
      <h4 className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase mb-6 flex items-center gap-1.5">
        <Clock size={10} className="text-indigo-500" />
        IMPLEMENTATION TIMELINE
      </h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
        <div className="absolute top-4 left-6 right-6 h-[1px] bg-zinc-850 hidden sm:block pointer-events-none" />
        
        {[
          { step: "1. MIGRATION", desc: "Replaced old forms with custom glowing inputs.", status: "COMPLETED" },
          { step: "2. OPTIMIZATION", desc: "SSR boundaries cleared and bundle pod pruned.", status: "COMPLETED" },
          { step: "3. PERFORMANCE", desc: "Page speed soared, bounce rates dropped.", status: "10x ACCEL" }
        ].map((item, idx) => (
          <div key={idx} className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-mono font-bold text-indigo-400 shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.1)]">
                {idx + 1}
              </div>
              <span className="text-[10px] font-mono text-zinc-300 font-bold tracking-wider">{item.step}</span>
            </div>
            <p className="text-[11px] text-zinc-500 leading-relaxed pl-1">{item.desc}</p>
            <span className="inline-block text-[8px] font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1.5 py-0.5 rounded pl-1">
              {item.status}
            </span>
          </div>
        ))}
      </div>
      
      <blockquote className="mt-6 border-t border-zinc-900 pt-4 text-xs text-zinc-500 italic font-sans leading-relaxed">
        "Working through the milestones step-by-step let us audit every bundle block, resulting in a flawless production launch."
      </blockquote>
    </div>
  ),

  Visual_LiquidGlass: () => (
    <div className="p-8 bg-zinc-950/40 backdrop-blur-[24px] border border-white/10 rounded-[2.5rem] relative overflow-hidden min-h-[220px] group flex flex-col justify-between">
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute w-24 h-24 bg-pink-500/15 rounded-full blur-[30px] -top-6 -left-6" style={{ animation: 'pulse 6s infinite' }} />
        <div className="absolute w-32 h-32 bg-blue-500/15 rounded-full blur-[40px] -bottom-10 -right-10" style={{ animation: 'pulse 8s infinite' }} />
        <div className="absolute w-20 h-20 bg-yellow-500/10 rounded-full blur-[25px] top-1/2 left-1/3" style={{ animation: 'pulse 5s infinite' }} />
      </div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <Quote className="text-white/10 group-hover:text-white/20 transition-colors" size={36} />
          <span className="px-2 py-0.5 bg-white/5 text-white/60 border border-white/10 rounded text-[9px] font-mono tracking-widest">LIQUID_GLASS</span>
        </div>
        <p className="text-white/80 text-sm leading-relaxed font-sans italic">
          "The liquid glassmorphism background elevates flat interfaces to look like Apple luxury displays. Absolutely breathtaking aesthetic."
        </p>
      </div>

      <div className="flex items-center gap-3 relative z-10 mt-6 border-t border-white/5 pt-4">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 p-[1px] shrink-0">
          <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center text-[10px] text-white font-mono font-bold">
            KS
          </div>
        </div>
        <div>
          <h5 className="font-bold text-xs text-white">Kate Sorenson</h5>
          <p className="text-[9px] text-white/40 uppercase font-mono">Lead Visual Designer</p>
        </div>
      </div>
    </div>
  ),

  Visual_GlowBorder: () => (
    <div className="p-[1px] rounded-3xl bg-zinc-900 relative overflow-hidden group select-none min-h-[220px]">
      <div 
        className="pointer-events-none absolute inset-[-20%] opacity-20 group-hover:opacity-100 transition-opacity duration-700 bg-[conic-gradient(from_0deg,transparent,rgba(236,72,153,0.8),transparent,rgba(99,102,241,0.8),transparent)]" 
        style={{
          animation: 'spin 4s linear infinite',
        }}
      />
      <div className="p-8 bg-zinc-950 rounded-[23px] h-full flex flex-col justify-between relative z-10">
        <div>
          <div className="flex justify-between items-start mb-6">
            <span className="text-[9px] font-mono tracking-widest text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2 py-0.5 rounded">GLOW_BORDER_PATH</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={10} className="fill-pink-500 text-pink-500" />
              ))}
            </div>
          </div>
          <p className="text-zinc-300 text-xs italic font-serif leading-relaxed">
            "The dynamic border tracing acts as a stunning frame. When users hover over the testimonials grid, the cards feel alive and premium."
          </p>
        </div>

        <div className="flex items-center gap-3 mt-6 border-t border-zinc-900 pt-4">
          <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] font-bold text-pink-500">
            GB
          </div>
          <div>
            <h5 className="font-bold text-xs text-white">Geraldine Blanche</h5>
            <p className="text-[9px] text-zinc-550 font-mono">Senior UI/UX Consultant</p>
          </div>
        </div>
      </div>
    </div>
  ),

  Visual_BokehFloat: () => (
    <div className="p-8 bg-zinc-950 border border-zinc-850 rounded-3xl relative overflow-hidden group select-none min-h-[220px] flex flex-col justify-between">
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 opacity-30 group-hover:opacity-60 transition-opacity">
        <div className="absolute w-12 h-12 rounded-full bg-purple-500/10 blur-[10px] -bottom-4 left-10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute w-8 h-8 rounded-full bg-indigo-500/10 blur-[8px] top-6 right-16 animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute w-16 h-16 rounded-full bg-blue-500/5 blur-[15px] top-1/2 left-1/4 animate-bounce" style={{ animationDuration: '10s' }} />
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-[9px] font-mono tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/25 px-2 py-0.5 rounded">BOKEH_FLOAT_BLUR</span>
          <Sparkles size={12} className="text-indigo-400 animate-pulse" />
        </div>
        <p className="text-zinc-300 text-xs leading-relaxed italic">
          "The subtle bokeh lights drifting inside the deep dark card look extremely high-end. Gives a cinema layout that is absolutely gorgeous."
        </p>
      </div>

      <div className="flex justify-between items-center mt-6 border-t border-zinc-900 pt-4">
        <div>
          <h5 className="font-bold text-xs text-zinc-200">Nicholas Winding</h5>
          <p className="text-[9px] text-zinc-650 uppercase font-mono">Film Director</p>
        </div>
        <span className="text-[9px] font-mono text-zinc-600">CINEMATIC STYLES</span>
      </div>
    </div>
  ),

  Creative_InteractiveSwap: () => {
    const [activeTab, setActiveTab] = React.useState<'challenge' | 'breakthrough'>('challenge');
    return (
      <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-3xl relative group overflow-hidden transition-all duration-300 min-h-[220px] flex flex-col justify-between">
        <div>
          <div className="flex bg-zinc-900 border border-zinc-850 p-1 rounded-xl mb-4 self-start">
            <button 
              onClick={() => setActiveTab('challenge')}
              className={cn(
                "px-3 py-1 rounded-lg text-[9px] font-mono font-bold tracking-wider transition-all",
                activeTab === 'challenge' ? "bg-indigo-500 text-white" : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              CHALLENGE
            </button>
            <button 
              onClick={() => setActiveTab('breakthrough')}
              className={cn(
                "px-3 py-1 rounded-lg text-[9px] font-mono font-bold tracking-wider transition-all",
                activeTab === 'breakthrough' ? "bg-indigo-500 text-white" : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              BREAKTHROUGH
            </button>
          </div>

          <div className="min-h-[75px] flex items-center">
            {activeTab === 'challenge' ? (
              <p className="text-zinc-400 text-xs italic leading-relaxed">
                "Our marketing pages were extremely slow, hitting terrible SEO core web vitals and causing huge bounces on our price page."
              </p>
            ) : (
              <p className="text-zinc-200 text-xs italic leading-relaxed font-bold text-indigo-300">
                "Switching to static neon bento designs pushed our page speeds back to 99%. Conversion bounced up by 30% instantly!"
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-zinc-900 pt-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
              <RefreshCw size={10} className="text-indigo-400 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <h5 className="font-bold text-xs text-zinc-300">Nicoletta Rossi</h5>
              <p className="text-[9px] text-zinc-550 font-mono">Marketing Lead</p>
            </div>
          </div>
          <span className="text-[9px] font-mono text-zinc-650">SWAP_ACTIVE</span>
        </div>
      </div>
    );
  },

  Creative_DecayFriction: () => (
    <div className="relative group cursor-pointer select-none">
      <div className="absolute inset-0 bg-yellow-400 border-2 border-black rounded-2xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300 ease-out" />
      <div className="relative p-6 bg-white border-2 border-black rounded-2xl group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-out">
        <div className="flex justify-between items-center mb-4">
          <span className="px-2 py-0.5 bg-black text-white text-[8px] font-mono uppercase tracking-widest font-black">
            KINETIC_DISPLACE
          </span>
          <Sliders size={12} className="text-black" />
        </div>
        
        <p className="text-black font-black text-xs leading-relaxed mb-4">
          "THE KINETIC OFFSET LOOKS EXTREMELY STUNNING ON THE MAIN SCREEN. DISRUPTION MEETS PERFECT PIXEL LAYOUT."
        </p>
        
        <div className="flex items-center gap-2 border-t border-black/10 pt-4">
          <div className="w-6 h-6 bg-black text-yellow-400 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
            KD
          </div>
          <span className="font-mono text-[9px] font-bold text-black uppercase">Operator_Beta_78</span>
        </div>
      </div>
    </div>
  ),

  Creative_NeumorphicConcave: () => (
    <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] shadow-[inset_6px_6px_12px_rgba(0,0,0,0.8),inset_-6px_-6px_12px_rgba(255,255,255,0.02)] select-none min-h-[220px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-[9px] font-mono tracking-widest text-zinc-500 bg-zinc-900/50 border border-zinc-800/40 px-2 py-0.5 rounded">NEUMORPHIC_CONCAVE</span>
          <div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-800 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-650 animate-pulse" />
          </div>
        </div>
        <p className="text-zinc-400 text-xs italic leading-relaxed">
          "The pristine double-inset shadows create a tactile concave recess that looks so physical. Perfectly optimized for dark mode interfaces."
        </p>
      </div>

      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-zinc-900/50">
        <div className="w-8 h-8 rounded-full bg-zinc-900 shadow-[4px_4px_8px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.01)] border border-zinc-800/20 flex items-center justify-center text-zinc-300 text-[10px] font-bold shrink-0">
          NC
        </div>
        <div>
          <h5 className="font-bold text-xs text-zinc-300">Marcus Cole</h5>
          <p className="text-[9px] text-zinc-600 font-mono">Hardware Design Engineer</p>
        </div>
      </div>
    </div>
  ),
};
