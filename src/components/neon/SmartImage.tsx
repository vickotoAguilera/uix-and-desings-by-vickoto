"use client";

import React from 'react';
import { useImageMode } from '@/context/ImageContext';
import { DESIGN_CONFIG } from '@/lib/design-config';
import { cn } from '@/lib/utils';

interface SmartImageProps {
  src?: string;
  className?: string;
  alt?: string;
  isBackground?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({ 
  src = DESIGN_CONFIG.defaultImage, 
  className, 
  alt = "UI Showcase Image",
  isBackground = false 
}) => {
  const { showPhotos } = useImageMode();

  if (isBackground) {
    return (
      <div 
        className={cn(
          "absolute inset-0 transition-all duration-500",
          showPhotos ? "bg-cover bg-center" : DESIGN_CONFIG.placeholderColor,
          className
        )}
        style={showPhotos ? { backgroundImage: `url(${src})` } : {}}
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {showPhotos ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className={cn("w-full h-full animate-pulse", DESIGN_CONFIG.placeholderColor)} />
      )}
    </div>
  );
};
