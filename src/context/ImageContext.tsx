"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ImageContextType {
  showPhotos: boolean;
  togglePhotos: () => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showPhotos, setShowPhotos] = useState(true);

  // Cargar preferencia guardada
  useEffect(() => {
    const saved = localStorage.getItem('design-show-photos');
    if (saved !== null) {
      setShowPhotos(saved === 'true');
    }
  }, []);

  const togglePhotos = () => {
    setShowPhotos(prev => {
      const next = !prev;
      localStorage.setItem('design-show-photos', String(next));
      return next;
    });
  };

  return (
    <ImageContext.Provider value={{ showPhotos, togglePhotos }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageMode = () => {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error('useImageMode must be used within an ImageProvider');
  }
  return context;
};
