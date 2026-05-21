"use client"

import { cn } from "@/lib/utils"

interface DotPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
  cr?: number
  cx?: number
  cy?: number
  className?: string
  glow?: boolean
}

export function DotPattern({
  width = 16,
  height = 16,
  cr = 1,
  className,
  glow = false,
  style,
  ...props
}: DotPatternProps) {
  // Create a radial-gradient dot as a repeating background pattern
  const dotColor = "currentColor"
  const glowSize = glow ? cr * 3 : cr

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-neutral-400/80",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(circle at center, ${dotColor} ${cr}px, transparent ${glowSize}px)`,
        backgroundSize: `${width}px ${height}px`,
        backgroundPosition: "0 0",
        ...style,
      }}
      {...props}
    />
  )
}
