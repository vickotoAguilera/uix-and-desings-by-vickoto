"use client"

import React, { memo } from "react"

interface AuroraTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  speed?: number
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
    speed = 1,
  }: AuroraTextProps) => {
    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="relative inline-block text-transparent"
          style={{
            backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
            backgroundSize: "200% auto",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: `aurora-text-bg ${10 / speed}s linear infinite`,
          }}
          aria-hidden="true"
        >
          {children}
        </span>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes aurora-text-bg {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
        `}} />
      </span>
    )
  }
)

AuroraText.displayName = "AuroraText"
