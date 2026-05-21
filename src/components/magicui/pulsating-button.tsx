"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface PulsatingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string
  duration?: string
  distance?: string
}

export const PulsatingButton = React.forwardRef<HTMLButtonElement, PulsatingButtonProps>(
  ({ className, children, pulseColor = "rgba(255,255,255,0.6)", duration = "1.5s", distance = "8px", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-center font-medium bg-white text-black transition-all hover:scale-105 active:scale-95",
          className
        )}
        style={{
          animation: `pulsate-shadow ${duration} ease-out infinite`,
        } as React.CSSProperties}
        {...props}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes pulsate-shadow {
            0% { box-shadow: 0 0 0 0 ${pulseColor}; }
            50% { box-shadow: 0 0 0 ${distance} rgba(255,255,255,0); }
            100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
          }
        `}} />
        <span className="relative z-10">{children}</span>
      </button>
    )
  }
)
PulsatingButton.displayName = "PulsatingButton"

