"use client";

import React from 'react';

export const GalleryVariants: Record<string, React.FC> = {
  // Las variantes se implementarán en la siguiente sesión
  BentoPlaceholder: () => (
    <div className="grid grid-cols-4 gap-4 aspect-video w-full max-w-4xl">
      <div className="col-span-2 row-span-2 bg-zinc-800 rounded-3xl animate-pulse" />
      <div className="bg-zinc-800 rounded-3xl animate-pulse" />
      <div className="bg-zinc-800 rounded-3xl animate-pulse" />
      <div className="col-span-2 bg-zinc-800 rounded-3xl animate-pulse" />
    </div>
  ),
};
