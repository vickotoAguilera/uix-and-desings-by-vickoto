"use client";

import React from 'react';

export const TestimonialVariants: Record<string, React.FC> = {
  // Las variantes se implementarán en la siguiente sesión
  SimpleTestimonial: () => (
    <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl">
      <p className="text-zinc-300 italic mb-6">"This UI kit is absolutely amazing. Saved us weeks of development time."</p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-zinc-700 rounded-full" />
        <div>
          <p className="text-white font-bold text-sm">John Doe</p>
          <p className="text-zinc-500 text-xs">CEO @ TechStart</p>
        </div>
      </div>
    </div>
  ),
};
