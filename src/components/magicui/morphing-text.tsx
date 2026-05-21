"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

export interface MorphingTextProps {
  className?: string
  texts: string[]
}

export const MorphingText: React.FC<MorphingTextProps> = ({ texts, className }) => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <div
      className={cn(
        "relative mx-auto h-24 w-full flex items-center justify-center text-center font-sans text-4xl font-bold md:text-5xl lg:text-6xl overflow-hidden",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(12px)", scale: 0.9 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)", scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center m-auto text-black dark:text-white"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

