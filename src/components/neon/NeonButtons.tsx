"use client";

import React from "react";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "glow" | "flicker" | "pulsate" | "border" | "subtle" | "glass";
  color?: string;
  neonColor?: string;
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  variant = "glow",
  className = "",
  neonColor = "#0fa",
  ...props
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case "flicker":
        return "animate-flicker";
      case "pulsate":
        return "animate-pulsate";
      case "subtle":
        return "animate-subtle-flicker";
      case "glass":
        return "backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20";
      default:
        return "";
    }
  };

  const glowStyle = (variant === "glow" || variant === "glass") ? {
    textShadow: variant === "glass" ? "0 0 10px rgba(255,255,255,0.5)" : `
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px ${neonColor},
      0 0 82px ${neonColor},
      0 0 92px ${neonColor},
      0 0 102px ${neonColor},
      0 0 151px ${neonColor}
    `
  } : {};

  const borderStyle = variant === "border" ? {
    border: "0.2rem solid #fff",
    borderRadius: "2rem",
    padding: "0.4em 1.2em",
    boxShadow: `0 0 .2rem #fff,
                0 0 .2rem #fff,
                0 0 2rem ${neonColor},
                0 0 0.8rem ${neonColor},
                0 0 2.8rem ${neonColor},
                inset 0 0 1.3rem ${neonColor}`,
    textShadow: `0 0 7px #fff, 0 0 10px #fff, 0 0 21px ${neonColor}`
  } : {};

  return (
    <button
      className={`px-6 py-3 text-xl font-bold transition-all duration-300 rounded-lg text-white hover:scale-105 active:scale-95 ${getVariantClass()} ${className}`}
      style={{ ...glowStyle, ...borderStyle }}
      {...props}
    >
      {children}
    </button>
  );
};

export { NeonButton as NeonButtons };
