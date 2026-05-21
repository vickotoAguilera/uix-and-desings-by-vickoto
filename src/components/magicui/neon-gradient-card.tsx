"use client"

import {
  CSSProperties,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react"

import { cn } from "@/lib/utils"

interface NeonColorsProps {
  firstColor: string
  secondColor: string
}

interface NeonGradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @default <div />
   * @type ReactElement
   * @description
   * The component to be rendered as the card
   * */
  as?: ReactElement
  /**
   * @default ""
   * @type string
   * @description
   * The className of the card
   */
  className?: string

  /**
   * @default ""
   * @type ReactNode
   * @description
   * The children of the card
   * */
  children?: ReactNode

  /**
   * @default 5
   * @type number
   * @description
   * The size of the border in pixels
   * */
  borderSize?: number

  /**
   * @default 20
   * @type number
   * @description
   * The size of the radius in pixels
   * */
  borderRadius?: number

  /**
   * @default "{ firstColor: '#ff00aa', secondColor: '#00FFF1' }"
   * @type string
   * @description
   * The colors of the neon gradient
   * */
  neonColors?: NeonColorsProps
}

export const NeonGradientCard: React.FC<NeonGradientCardProps> = ({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current
        setDimensions({ width: offsetWidth, height: offsetHeight })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current
      setDimensions({ width: offsetWidth, height: offsetHeight })
    }
  }, [children])

  return (
    <div
      ref={containerRef}
      style={
        {
          "--border-size": `${borderSize}px`,
          "--border-radius": `${borderRadius}px`,
          "--neon-first-color": neonColors.firstColor,
          "--neon-second-color": neonColors.secondColor,
          "--card-width": `${dimensions.width}px`,
          "--card-height": `${dimensions.height}px`,
          "--card-content-radius": `${borderRadius - borderSize}px`,
          "--pseudo-element-background-image": `linear-gradient(0deg, ${neonColors.firstColor}, ${neonColors.secondColor})`,
          "--pseudo-element-width": `${dimensions.width + borderSize * 2}px`,
          "--pseudo-element-height": `${dimensions.height + borderSize * 2}px`,
          "--after-blur": `${dimensions.width / 3}px`,
        } as CSSProperties
      }
      className={cn(
        "relative z-10 size-full",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative size-full min-h-[inherit] bg-gray-100 p-6 neon-card-content",
          "dark:bg-neutral-900",
          "wrap-break-word"
        )}
      >
        {children}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .neon-card-content {
           border-radius: var(--card-content-radius);
        }
        .neon-card-content::before {
           position: absolute;
           top: calc(var(--border-size) * -1);
           left: calc(var(--border-size) * -1);
           z-index: -10;
           display: block;
           height: var(--pseudo-element-height);
           width: var(--pseudo-element-width);
           border-radius: var(--border-radius);
           content: '';
           background: linear-gradient(0deg, var(--neon-first-color), var(--neon-second-color));
           background-size: 100% 200%;
           animation: neon-spin 3s linear infinite;
        }
        .neon-card-content::after {
           position: absolute;
           top: calc(var(--border-size) * -1);
           left: calc(var(--border-size) * -1);
           z-index: -10;
           display: block;
           height: var(--pseudo-element-height);
           width: var(--pseudo-element-width);
           border-radius: var(--border-radius);
           filter: blur(var(--after-blur));
           content: '';
           background: linear-gradient(0deg, var(--neon-first-color), var(--neon-second-color));
           background-size: 100% 200%;
           opacity: 0.8;
           animation: neon-spin 3s linear infinite;
        }
        @keyframes neon-spin {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 200%; }
        }
      `}} />
    </div>
  )
}
