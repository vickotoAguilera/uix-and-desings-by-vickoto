"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface GlowingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const GlowingInput: React.FC<GlowingInputProps> = ({ className, ...props }) => {
  return (
    <div className="relative group">
      {/* Background Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg blur opacity-25 group-focus-within:opacity-100 transition duration-1000 group-focus-within:duration-200"></div>
      
      <input
        type="text"
        placeholder="Focus me!"
        className={cn(
          "relative w-80 px-4 py-3 rounded-lg border-2 border-gray-700 bg-black text-white outline-none transition-all duration-300",
          "focus:shadow-2xl focus:shadow-rose-500/50 focus:border-rose-500",
          className
        )}
        {...props}
      />
    </div>
  );
};
