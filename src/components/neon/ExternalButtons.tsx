"use client";

import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- NES.css Styles (Emulados en Tailwind) ---
export const NesButton = ({ children, variant = "default", className = "" }: { children: React.ReactNode, variant?: "default" | "primary" | "success" | "error", className?: string }) => {
  const variants = {
    default: "bg-[#e7e7e7] text-[#212529] shadow-[inset_-4px_-4px_#adafbc] active:shadow-[inset_4px_4px_#adafbc]",
    primary: "bg-[#209cee] text-white shadow-[inset_-4px_-4px_#006bb3] active:shadow-[inset_4px_4px_#006bb3]",
    success: "bg-[#92cc41] text-white shadow-[inset_-4px_-4px_#4aa52e] active:shadow-[inset_4px_4px_#4aa52e]",
    error: "bg-[#e76e55] text-white shadow-[inset_-4px_-4px_#8c2022] active:shadow-[inset_4px_4px_#8c2022]",
  };

  return (
    <button className={cn(
      "relative inline-block px-4 py-2 font-mono uppercase tracking-tight text-sm",
      "border-4 border-black",
      variants[variant],
      "active:translate-y-1 transition-all",
      className
    )}>
      {children}
    </button>
  );
};

// --- Cool Buttons: Glitch Cyber ---
export const GlitchButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <button className={cn(
      "px-8 py-3 bg-zinc-900 text-white font-black italic rounded-none border-r-4 border-orange-500",
      "hover:animate-pulse hover:shadow-[4px_0_0_#0ea5e9,-4px_0_0_#f43f5e] transition-shadow",
      className
    )}>
      {children}
    </button>
  );
};

// --- Cool Buttons: Retro Cassette ---
export const CassetteButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <button className={cn(
      "relative px-10 py-4 bg-[#e5e0d8] dark:bg-[#2a2a2a] text-[#d97706] font-black rounded-lg border-x-8 border-t-2 border-b-8 border-zinc-400 dark:border-zinc-800 shadow-xl group overflow-hidden active:translate-y-1 active:border-b-4 transition-all",
      className
    )}>
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse group-hover:shadow-[0_0_10px_#ef4444]"></div>
        <span className="uppercase tracking-tighter text-sm italic">{children}</span>
      </div>
      <div className="absolute top-0 right-4 w-12 h-1 bg-zinc-400 opacity-20"></div>
    </button>
  );
};

// --- Cool Buttons: Bento Action ---
export const BentoButton = ({ className = "" }: { className?: string }) => {
  return (
    <button 
      className={cn(
        "flex items-center gap-0 p-2 bg-gradient-to-r from-zinc-100 to-zinc-50 rounded-2xl border border-zinc-200 group",
        "hover:bg-gradient-to-r hover:from-zinc-200 hover:to-zinc-100 hover:border-zinc-300 hover:shadow-lg",
        "active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",
        className
      )}
    >
      <div className="bg-white p-3 rounded-lg shadow-md border border-zinc-100 group-hover:shadow-lg group-hover:scale-105 group-active:scale-95 transition-all duration-200">
        <Zap size={20} className="text-orange-500" strokeWidth={2.5} />
      </div>
      <span className="px-4 py-1 text-sm font-semibold text-zinc-800 tracking-wide">Quick Start</span>
      <div className="pr-2">
        <ChevronRight size={18} className="text-zinc-400 group-hover:text-zinc-600 group-hover:translate-x-1 transition-all duration-200" strokeWidth={2.5} />
      </div>
    </button>
  );
};
