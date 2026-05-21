"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl px-8 py-2 text-sm font-medium text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]",
          className
        )}
        style={{
          border: "solid 2px transparent",
          backgroundImage: `linear-gradient(#121213, #121213), linear-gradient(90deg, #ff4040, #b9ff40, #40a6ff, #40e6ff, #a640ff)`,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        } as React.CSSProperties}
        {...props}
      >
        {/* Animated aura container */}
        <div 
          className="pointer-events-none absolute -inset-1 -z-10 rounded-xl opacity-70 blur-xl transition-all group-hover:opacity-100"
          style={{
            background: `linear-gradient(90deg, #ff4040, #b9ff40, #40a6ff, #40e6ff, #a640ff)`,
            backgroundSize: "200% 100%",
            animation: "rainbow-aura 2s linear infinite",
          }}
        />
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes rainbow-aura {
            0% { background-position: 100% 0; }
            100% { background-position: -100% 0; }
          }
        `}} />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    )
  }
)
RainbowButton.displayName = "RainbowButton"
