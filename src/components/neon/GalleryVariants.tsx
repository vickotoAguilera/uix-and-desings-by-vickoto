"use client";

import React from 'react';
import { Maximize2, ExternalLink, Heart, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const ImagePlaceholder = ({ className, label }: { className?: string, label?: string }) => (
  <div className={cn("w-full h-full bg-zinc-900 border border-white/5 relative group overflow-hidden flex items-center justify-center", className)}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
    <span className="text-zinc-700 font-mono text-xs uppercase tracking-widest">{label || 'Image'}</span>
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
      <Maximize2 size={20} className="text-white hover:scale-110 transition-transform cursor-pointer" />
      <Heart size={20} className="text-white hover:scale-110 transition-transform cursor-pointer" />
    </div>
  </div>
);

export const GalleryVariants: Record<string, React.FC> = {
  StandardGrid: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="aspect-square rounded-2xl overflow-hidden">
          <ImagePlaceholder label={`IMG_${i}`} />
        </div>
      ))}
    </div>
  ),

  BentoClassic: () => (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 aspect-[16/9] w-full">
      <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden">
        <ImagePlaceholder label="FEATURED" className="bg-gradient-to-br from-indigo-900 to-black" />
      </div>
      <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden">
        <ImagePlaceholder label="DETAIL_1" />
      </div>
      <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden">
        <ImagePlaceholder label="DETAIL_2" />
      </div>
      <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden">
        <ImagePlaceholder label="WIDE_VIEW" className="bg-zinc-800" />
      </div>
    </div>
  ),

  BentoAsymmetric: () => (
    <div className="grid grid-cols-6 gap-4 h-[500px] w-full">
      <div className="col-span-3 row-span-2 rounded-3xl overflow-hidden">
        <ImagePlaceholder label="MAIN_STORY" />
      </div>
      <div className="col-span-3 row-span-1 rounded-3xl overflow-hidden">
        <ImagePlaceholder label="TOP_RIGHT" />
      </div>
      <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden">
        <ImagePlaceholder label="S_1" />
      </div>
      <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden">
        <ImagePlaceholder label="M_1" />
      </div>
    </div>
  ),

  MasonryStyle: () => (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 w-full">
      <div className="break-inside-avoid rounded-2xl h-64 overflow-hidden"><ImagePlaceholder label="TALL" /></div>
      <div className="break-inside-avoid rounded-2xl h-40 overflow-hidden"><ImagePlaceholder label="SHORT" /></div>
      <div className="break-inside-avoid rounded-2xl h-80 overflow-hidden"><ImagePlaceholder label="VERY_TALL" /></div>
      <div className="break-inside-avoid rounded-2xl h-52 overflow-hidden"><ImagePlaceholder label="MEDIUM" /></div>
      <div className="break-inside-avoid rounded-2xl h-72 overflow-hidden"><ImagePlaceholder label="TALL_2" /></div>
      <div className="break-inside-avoid rounded-2xl h-44 overflow-hidden"><ImagePlaceholder label="SHORT_2" /></div>
    </div>
  ),

  GlassmorphismCards: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] group hover:bg-white/10 transition-all">
          <div className="aspect-video rounded-3xl overflow-hidden mb-4">
            <ImagePlaceholder label={`PROJECT_${i}`} />
          </div>
          <div className="px-2">
            <h4 className="text-white font-bold mb-1">Visual Study {i}</h4>
            <p className="text-white/40 text-sm">Conceptual design for future web.</p>
          </div>
        </div>
      ))}
    </div>
  ),

  NeonBorderGallery: () => (
    <div className="flex flex-wrap gap-6 justify-center w-full">
      {['emerald', 'pink', 'blue', 'amber'].map((color) => (
        <div key={color} className={cn(
          "w-64 aspect-square rounded-full p-1 transition-all hover:scale-105 cursor-pointer",
          color === 'emerald' && "bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]",
          color === 'pink' && "bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.3)]",
          color === 'blue' && "bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]",
          color === 'amber' && "bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
        )}>
          <div className="w-full h-full bg-black rounded-full overflow-hidden flex items-center justify-center font-black text-white italic">
            {color.toUpperCase()}
          </div>
        </div>
      ))}
    </div>
  ),

  PolaroidStyle: () => (
    <div className="flex flex-wrap gap-8 justify-center w-full bg-zinc-50 p-12 rounded-3xl">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-4 pb-12 bg-white shadow-xl -rotate-3 hover:rotate-0 transition-transform cursor-pointer border border-zinc-200">
          <div className="w-48 h-48 bg-zinc-100 overflow-hidden mb-4">
            <ImagePlaceholder label={`MEMORY_${i}`} className="bg-zinc-200" />
          </div>
          <p className="font-serif text-zinc-400 text-sm italic">Summer of '26</p>
        </div>
      ))}
    </div>
  ),

  HorizontalScroll: () => (
    <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
      <div className="flex gap-6 min-w-max px-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-[300px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <ImagePlaceholder label={`SLIDE_${i}`} className="bg-gradient-to-t from-zinc-900 to-zinc-800" />
          </div>
        ))}
      </div>
    </div>
  ),

  DarkCyberpunk: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full bg-black p-2 rounded-xl">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="aspect-square relative group overflow-hidden border border-emerald-500/10">
          <ImagePlaceholder label={`NODE_${i}`} className="bg-zinc-950" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_5px_#10b981]" />
          <div className="absolute inset-0 border border-emerald-500/0 group-hover:border-emerald-500/50 transition-all pointer-events-none" />
        </div>
      ))}
    </div>
  ),

  HoverZoomGrid: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full rounded-3xl overflow-hidden">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="aspect-video relative group overflow-hidden cursor-pointer">
          <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700">
            <ImagePlaceholder label={`ZOOM_${i}`} />
          </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8">
            <h4 className="text-white font-black text-xl mb-2">VIEW DETAILS</h4>
            <div className="w-12 h-1 bg-white" />
          </div>
        </div>
      ))}
    </div>
  ),

  OverlayContent: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {[1, 2].map((i) => (
        <div key={i} className="relative aspect-video rounded-3xl overflow-hidden group">
          <ImagePlaceholder label={`BG_${i}`} className="bg-zinc-900" />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
            <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full mb-4 inline-block">TECH</span>
            <h3 className="text-white text-2xl font-bold mb-2">The future is automated.</h3>
            <p className="text-white/60 text-sm line-clamp-2">Exploring how AI and robotics are reshaping our daily workflows and urban environments.</p>
          </div>
        </div>
      ))}
    </div>
  ),

  MosaicStyle: () => (
    <div className="grid grid-cols-4 gap-1 w-full aspect-square md:aspect-video rounded-3xl overflow-hidden">
      <div className="col-span-2 row-span-2"><ImagePlaceholder label="1" /></div>
      <div className="col-span-1 row-span-1"><ImagePlaceholder label="2" /></div>
      <div className="col-span-1 row-span-1"><ImagePlaceholder label="3" /></div>
      <div className="col-span-1 row-span-1"><ImagePlaceholder label="4" /></div>
      <div className="col-span-1 row-span-1"><ImagePlaceholder label="5" /></div>
    </div>
  ),

  ProductShowcase: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {[1, 2, 3].map((i) => (
        <div key={i} className="group cursor-pointer">
          <div className="aspect-[3/4] rounded-2xl bg-zinc-100 overflow-hidden mb-4 relative">
            <ImagePlaceholder label={`PRODUCT_${i}`} className="bg-zinc-50" />
            <button className="absolute bottom-4 left-4 right-4 py-3 bg-white text-black font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all shadow-xl">
              Quick View
            </button>
          </div>
          <div className="flex justify-between items-start px-1">
            <div>
              <h4 className="font-bold text-zinc-900">Minimalist Chair v{i}</h4>
              <p className="text-zinc-500 text-sm italic">Designed by UIX</p>
            </div>
            <span className="font-black text-zinc-900">$299</span>
          </div>
        </div>
      ))}
    </div>
  ),

  BrutalistGrid: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 w-full border-4 border-black">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="aspect-square border-2 border-black group cursor-crosshair">
          <div className="w-full h-full bg-white group-hover:bg-yellow-400 transition-colors flex items-center justify-center font-black text-2xl">
            {i.toString().padStart(2, '0')}
          </div>
        </div>
      ))}
    </div>
  ),

  Retro8Bit: () => (
    <div className="grid grid-cols-3 gap-4 w-full p-4 bg-blue-900 border-4 border-white">
      {[1, 2, 3].map((i) => (
        <div key={i} className="aspect-square bg-black border-4 border-zinc-700 shadow-[inset_-4px_-4px_0px_0px_#444] p-2 flex flex-col">
          <div className="flex-1 bg-zinc-800 mb-2 border-2 border-white" />
          <div className="h-2 w-full bg-red-600" />
        </div>
      ))}
    </div>
  ),

  CinematicSlider: () => (
    <div className="w-full aspect-video rounded-3xl overflow-hidden relative group">
      <ImagePlaceholder label="CINEMATIC_VIEW" className="bg-zinc-950" />
      <div className="absolute inset-0 flex items-center justify-between px-8">
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          &lt;
        </button>
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          &gt;
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={cn("w-2 h-2 rounded-full", i === 1 ? "bg-white" : "bg-white/20")} />
        ))}
      </div>
    </div>
  ),

  MinimalistWhite: () => (
    <div className="grid grid-cols-3 gap-12 w-full py-12">
      {[1, 2, 3].map((i) => (
        <div key={i} className="text-center group">
          <div className="aspect-[4/5] bg-zinc-50 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
            <ImagePlaceholder label={`ART_${i}`} className="bg-white border-none" />
          </div>
          <h4 className="text-zinc-400 text-xs uppercase tracking-[0.4em] group-hover:text-zinc-900 transition-colors">Exhibit {i}</h4>
        </div>
      ))}
    </div>
  ),

  ParallaxStack: () => (
    <div className="relative h-[600px] w-full overflow-hidden rounded-3xl bg-zinc-950">
      <div className="absolute top-10 left-10 w-64 aspect-video rotate-6 opacity-40 hover:opacity-100 transition-opacity">
        <ImagePlaceholder label="LAYER_3" />
      </div>
      <div className="absolute top-40 right-10 w-72 aspect-video -rotate-12 opacity-60 hover:opacity-100 transition-opacity">
        <ImagePlaceholder label="LAYER_2" />
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 aspect-video rotate-2 shadow-2xl z-10">
        <ImagePlaceholder label="FRONT_LAYER" className="bg-zinc-800" />
      </div>
    </div>
  ),

  ExperimentalPerspective: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full py-20 [perspective:1000px]">
      {[1, 2, 3].map((i) => (
        <div key={i} className="aspect-square bg-zinc-900 rounded-2xl rotate-y-12 hover:rotate-y-0 transition-transform duration-500 shadow-2xl border border-white/10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
          <span className="text-white/20 font-black text-6xl italic">{i}</span>
        </div>
      ))}
    </div>
  ),

  MosaicCompact: () => (
    <div className="grid grid-cols-6 grid-rows-2 gap-2 h-48 w-full">
      <div className="col-span-2 row-span-2"><ImagePlaceholder label="1" /></div>
      <div className="col-span-2 row-span-1"><ImagePlaceholder label="2" /></div>
      <div className="col-span-1 row-span-1"><ImagePlaceholder label="3" /></div>
      <div className="col-span-1 row-span-1"><ImagePlaceholder label="4" /></div>
      <div className="col-span-4 row-span-1 flex gap-2">
        <div className="flex-1"><ImagePlaceholder label="5" /></div>
        <div className="flex-1"><ImagePlaceholder label="6" /></div>
      </div>
    </div>
  ),

  ExpandingAccordionClassic: () => (
    <div className="flex gap-2 h-[450px] w-full overflow-hidden group/accordion">
      {[1, 2, 3, 4, 5].map((i) => (
        <div 
          key={i} 
          className={cn(
            "relative h-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer overflow-hidden rounded-3xl",
            "flex-[1] hover:flex-[5] group",
            "bg-zinc-900 border border-white/5 shadow-2xl"
          )}
        >
          <ImagePlaceholder label={`VIEW_${i}`} className="opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h4 className="text-white text-2xl font-black mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 uppercase tracking-tighter">
              Instalaciones {i}
            </h4>
            <p className="text-zinc-400 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity delay-200">
              Espacios diseñados para el máximo rendimiento y confort en entornos modernos.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[#0fa] font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity delay-300">
              EXPLORAR SECCIÓN <ExternalLink size={14} />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),

  VerticalAccordion: () => (
    <div className="flex flex-col gap-2 h-[600px] w-full group/v-accordion">
      {[1, 2, 3, 4].map((i) => (
        <div 
          key={i} 
          className={cn(
            "relative w-full transition-all duration-500 ease-in-out cursor-pointer overflow-hidden rounded-2xl",
            "flex-[1] hover:flex-[3] group",
            "bg-zinc-800"
          )}
        >
          <ImagePlaceholder label={`LEVEL_${i}`} className="opacity-30 group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-4xl font-black opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all">0{i}</h3>
          </div>
        </div>
      ))}
    </div>
  ),

  BentoInteractiveHover: () => (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] w-full">
      <div className="col-span-2 row-span-2 group relative rounded-3xl overflow-hidden cursor-pointer">
        <ImagePlaceholder label="EXPAND_ME" className="group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-indigo-600/20 group-hover:bg-indigo-600/0 transition-colors" />
      </div>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="col-span-1 row-span-1 group relative rounded-3xl overflow-hidden cursor-pointer hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
          <ImagePlaceholder label={`S_${i}`} className="grayscale group-hover:grayscale-0 transition-all" />
        </div>
      ))}
    </div>
  ),

  CircularOrbitGallery: () => (
    <div className="relative h-[500px] w-full flex items-center justify-center bg-black rounded-3xl overflow-hidden">
      <div className="absolute w-32 h-32 bg-[#0fa] blur-[80px] rounded-full animate-pulse" />
      <div className="relative z-10 w-40 h-40 rounded-full border-4 border-[#0fa] overflow-hidden shadow-[0_0_30px_#0fa]">
        <ImagePlaceholder label="CORE" />
      </div>
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <div 
          key={i}
          className="absolute w-20 h-20 rounded-full border-2 border-white/20 overflow-hidden transition-all hover:scale-125 hover:border-[#0fa] cursor-pointer"
          style={{ 
            transform: `rotate(${deg}deg) translateX(160px) rotate(-${deg}deg)` 
          }}
        >
          <ImagePlaceholder label={`SAT_${i}`} />
        </div>
      ))}
    </div>
  ),

  BeforeAfterSlider: () => (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden group cursor-col-resize">
      <div className="absolute inset-0 bg-zinc-800">
        <ImagePlaceholder label="AFTER_STATE" className="bg-emerald-900/20" />
      </div>
      <div 
        className="absolute inset-0 bg-zinc-900 border-r-4 border-white z-10 w-1/2"
      >
        <ImagePlaceholder label="BEFORE_STATE" className="bg-zinc-950" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center font-black text-black text-xs">
        VS
      </div>
    </div>
  ),

  SkewedPerspectiveGrid: () => (
    <div className="grid grid-cols-3 gap-8 w-full py-10">
      {[1, 2, 3].map((i) => (
        <div key={i} className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl transform skew-y-3 hover:skew-y-0 hover:scale-105 transition-all duration-500 cursor-pointer">
          <ImagePlaceholder label={`ART_PIECE_${i}`} />
        </div>
      ))}
    </div>
  ),

  FloatingBubbleGallery: () => (
    <div className="relative h-[400px] w-full flex items-center justify-center gap-4">
      <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl hover:scale-110 transition-transform"><ImagePlaceholder label="BIG" /></div>
      <div className="flex flex-col gap-4">
        <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl hover:scale-110 transition-transform"><ImagePlaceholder label="S1" /></div>
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl hover:scale-110 transition-transform"><ImagePlaceholder label="M1" /></div>
      </div>
      <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl hover:scale-110 transition-transform self-end"><ImagePlaceholder label="MED" /></div>
    </div>
  ),

  InfiniteMarqueeHorizontal: () => (
    <div className="w-full overflow-hidden bg-zinc-950 py-8 rounded-3xl">
      <div className="flex gap-4 animate-marquee whitespace-nowrap">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="inline-block w-64 aspect-video rounded-2xl overflow-hidden border border-white/5 flex-shrink-0">
            <ImagePlaceholder label={`STREAM_${i}`} />
          </div>
        ))}
      </div>
    </div>
  ),

  SplitScreenGallery: () => (
    <div className="flex h-[500px] w-full rounded-3xl overflow-hidden group">
      <div className="flex-1 bg-zinc-900 hover:flex-[2] transition-all duration-700 relative group/left">
        <ImagePlaceholder label="NIGHT_MODE" className="opacity-40 group-hover/left:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h3 className="text-white text-3xl font-black tracking-tighter">DARK SIDE</h3>
        </div>
      </div>
      <div className="flex-1 bg-zinc-100 hover:flex-[2] transition-all duration-700 relative group/right border-l border-white/10">
        <ImagePlaceholder label="LIGHT_MODE" className="bg-white opacity-40 group-hover/right:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h3 className="text-zinc-900 text-3xl font-black tracking-tighter">LIGHT SIDE</h3>
        </div>
      </div>
    </div>
  ),

  StackHoverEffect: () => (
    <div className="relative h-[400px] w-full flex items-center justify-center">
      {[1, 2, 3].map((i) => (
        <div 
          key={i}
          className={cn(
            "absolute w-64 aspect-[4/5] rounded-2xl border-4 border-white bg-zinc-800 shadow-2xl transition-all duration-500",
            i === 1 && "z-30 rotate-0 hover:-translate-x-40 hover:-rotate-12",
            i === 2 && "z-20 rotate-0 hover:translate-x-0 hover:-translate-y-4",
            i === 3 && "z-10 rotate-0 hover:translate-x-40 hover:rotate-12"
          )}
        >
          <ImagePlaceholder label={`CARD_${i}`} />
        </div>
      ))}
    </div>
  ),

  NeonGlassCarousel: () => (
    <div className="flex gap-8 justify-center items-center py-10 w-full overflow-hidden">
      <div className="w-48 h-72 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl scale-90 opacity-50"><ImagePlaceholder label="PREV" /></div>
      <div className="w-64 h-96 bg-white/10 backdrop-blur-xl border border-[#0fa]/50 rounded-3xl shadow-[0_0_50px_rgba(0,255,170,0.2)] relative">
        <ImagePlaceholder label="ACTIVE" />
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#0fa] text-black font-black italic rounded-full text-xs">FEATURED</div>
      </div>
      <div className="w-48 h-72 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl scale-90 opacity-50"><ImagePlaceholder label="NEXT" /></div>
    </div>
  ),

  MinimalistPolaroidGrid: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full p-10 bg-zinc-50 rounded-3xl">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="group cursor-pointer">
          <div className="p-3 pb-12 bg-white shadow-lg border border-zinc-100 group-hover:-translate-y-4 transition-transform duration-500">
            <div className="aspect-square bg-zinc-50 overflow-hidden mb-4">
              <ImagePlaceholder label={`PHOTO_${i}`} className="bg-zinc-100 border-none" />
            </div>
            <div className="h-2 w-1/2 bg-zinc-100 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  ),

  CyberpunkStaticGallery: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {[1, 2].map((i) => (
        <div key={i} className="aspect-video relative group overflow-hidden rounded-lg border-2 border-pink-500/20">
          <ImagePlaceholder label={`CAM_FEED_0${i}`} className="bg-black opacity-60" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <span className="text-red-600 font-mono text-[10px] font-bold">REC</span>
          </div>
          <div className="absolute bottom-4 right-4 text-pink-500 font-mono text-[10px] font-bold group-hover:animate-bounce">
            {">"} SECURE_CONNECTION_STABLE
          </div>
        </div>
      ))}
    </div>
  ),

  MagicalRevealGallery: () => (
    <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-black group cursor-none">
      <ImagePlaceholder label="HIDDEN_CONTENT" className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-zinc-800 font-black text-4xl italic opacity-50 group-hover:opacity-0 transition-opacity">HOVER TO ILLUMINATE</p>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 pointer-events-none" />
    </div>
  ),

  BrutalistCollage: () => (
    <div className="relative h-[500px] w-full bg-zinc-200 rounded-3xl border-4 border-black p-8 overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 border-4 border-black -rotate-6 z-10 flex items-center justify-center font-black text-4xl">NO_1</div>
      <div className="absolute bottom-10 right-10 w-80 h-48 bg-blue-500 border-4 border-black rotate-3 z-20"><ImagePlaceholder label="COLLAGE_A" /></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white border-4 border-black rotate-12 z-30 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"><ImagePlaceholder label="CORE_IMAGE" /></div>
    </div>
  ),

  ModernPortfolioSlider: () => (
    <div className="w-full aspect-[21/9] bg-zinc-950 rounded-[3rem] overflow-hidden relative group">
      <ImagePlaceholder label="EDITORIAL_PHOTOGRAPHY" className="opacity-40" />
      <div className="absolute inset-0 p-16 flex flex-col justify-end">
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none group-hover:scale-105 transition-transform duration-700">
          CREATIVE <br /> DIRECTION.
        </h2>
        <div className="mt-8 flex gap-4">
          <div className="h-px flex-1 bg-white/20 self-center" />
          <span className="text-white font-mono text-xs uppercase tracking-widest">Est. 2026</span>
        </div>
      </div>
    </div>
  ),

  GridWithActiveState: () => (
    <div className="grid grid-cols-4 gap-4 w-full h-40">
      {[1, 2, 3, 4].map((i) => (
        <div 
          key={i} 
          className={cn(
            "rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden",
            i === 2 ? "bg-[#0fa] border-[#0fa] shadow-[0_0_20px_#0fa]/20" : "bg-zinc-900 border-white/5 hover:border-white/20"
          )}
        >
          <ImagePlaceholder label={`ITEM_${i}`} className={i === 2 ? "opacity-100" : "opacity-30"} />
        </div>
      ))}
    </div>
  ),

  PerspectiveScrollWheel: () => (
    <div className="flex gap-4 justify-center items-center h-[400px] w-full [perspective:1000px] overflow-hidden">
      {[-2, -1, 0, 1, 2].map((pos) => (
        <div 
          key={pos}
          className={cn(
            "w-48 aspect-[3/4] rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl transition-all duration-500",
            pos === 0 ? "z-30 scale-110 opacity-100" : "z-10 scale-75 opacity-20",
            pos === -2 && "rotate-y-[45deg] -translate-x-10",
            pos === -1 && "rotate-y-[25deg] -translate-x-5",
            pos === 1 && "rotate-y-[-25deg] translate-x-5",
            pos === 2 && "rotate-y-[-45deg] translate-x-10"
          )}
        >
          <ImagePlaceholder label={`P_${pos}`} />
        </div>
      ))}
    </div>
  ),

  FloatingInteractiveGrid: () => (
    <div className="grid grid-cols-3 gap-12 w-full py-20">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className={cn(
          "aspect-square rounded-[3rem] bg-zinc-900 border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-8 cursor-pointer overflow-hidden group",
          i % 2 === 0 ? "translate-y-12" : "translate-y-0"
        )}>
          <ImagePlaceholder label={`FLOAT_${i}`} className="group-hover:scale-125 transition-transform duration-1000" />
        </div>
      ))}
    </div>
  ),

  /* Batch 1 Symmetrical Premium Galleries & Grids */
  Carousel_CircularGallery: () => {
    const [activeIndex, setActiveIndex] = React.useState(2);
    const items = [
      { label: "NEON_GLOW", color: "from-pink-500 to-rose-600" },
      { label: "LIQUID_GLASS", color: "from-blue-500 to-indigo-600" },
      { label: "CYBER_GRID", color: "from-emerald-500 to-teal-600" },
      { label: "SOLAR_WIND", color: "from-amber-500 to-orange-600" },
      { label: "DEEP_SPACE", color: "from-purple-500 to-fuchsia-600" }
    ];
    return (
      <div className="w-full py-10 flex flex-col items-center justify-center bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden relative min-h-[360px]">
        <div className="absolute inset-0 bg-radial-gradient from-zinc-900/50 via-transparent to-transparent pointer-events-none" />
        <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-md mb-8 uppercase tracking-widest">
          3D_CIRCULAR_CYLINDER
        </span>
        <div className="flex gap-4 justify-center items-center h-48 [perspective:1000px] select-none">
          {items.map((item, idx) => {
            const offset = idx - activeIndex;
            const absOffset = Math.abs(offset);
            const isCenter = idx === activeIndex;
            return (
              <div 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  transform: `rotateY(${offset * 32}deg) translateZ(${isCenter ? 30 : -20}px) scale(${isCenter ? 1.05 : 0.85})`,
                  opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.35,
                  zIndex: 10 - absOffset,
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                }}
                className={cn(
                  "w-36 h-48 rounded-2xl bg-zinc-900 border border-white/5 shadow-2xl relative overflow-hidden group cursor-pointer shrink-0"
                )}
              >
                <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-25 group-hover:opacity-40 transition-opacity", item.color)} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[9px] font-mono text-zinc-550 group-hover:text-zinc-300 transition-colors uppercase tracking-wider block mb-1">
                    SLIDE 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">{item.label}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-1.5 mt-8 z-10">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                idx === activeIndex ? "bg-indigo-500 w-6" : "bg-zinc-800 hover:bg-zinc-700"
              )}
            />
          ))}
        </div>
      </div>
    );
  },

  Carousel_DomeGallery: () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const slides = [
      { label: "LUXURY_ESTATE", desc: "Premium architectural photography" },
      { label: "RETRO_CONSOLE", desc: "Low-fi interactive experience grid" },
      { label: "CYBER_TERRITORY", desc: "Data streams and tactical layout nodes" }
    ];
    return (
      <div className="w-full p-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[360px] flex flex-col justify-between group">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[9px] font-mono text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            PANORAMIC_DOME_LENS
          </span>
          <span className="text-[9px] font-mono text-zinc-650">REFRACT_DISTORTION</span>
        </div>
        <div className="relative flex-1 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/5 to-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />
          <div 
            style={{
              borderRadius: '20% / 10%',
              boxShadow: 'inset 0 0 40px rgba(0,0,0,0.9), 0 10px 40px rgba(0,0,0,0.5)',
              transform: 'perspective(500px) rotateX(2deg) scale(0.98)',
            }}
            className="w-full max-w-lg aspect-video bg-zinc-900 border border-white/5 relative overflow-hidden transition-all duration-500"
          >
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 pointer-events-none z-10" />
            <div className="absolute top-4 left-4 z-20 flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest">PANORAMA ACTIVE</span>
            </div>
            
            <div 
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
              className="w-full h-full flex"
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="w-full h-full shrink-0 flex items-center justify-center bg-zinc-950/20 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10" />
                  <div className="text-center p-8 z-10">
                    <h3 className="text-white text-lg font-black tracking-widest uppercase mb-2">{slide.label}</h3>
                    <p className="text-zinc-400 text-xs italic">{slide.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 mt-6">
          <button 
            onClick={() => setActiveIndex(prev => (prev - 1 + slides.length) % slides.length)}
            className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors active:scale-95"
          >
            &lt;
          </button>
          <span className="text-[10px] font-mono text-zinc-550">0{activeIndex + 1} / 0{slides.length}</span>
          <button 
            onClick={() => setActiveIndex(prev => (prev + 1) % slides.length)}
            className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors active:scale-95"
          >
            &gt;
          </button>
        </div>
      </div>
    );
  },

  Dynamic_FlyingPosters: () => {
    const [offsets, setOffsets] = React.useState({ x: 0, y: 0 });
    const containerRef = React.useRef<HTMLDivElement>(null);
    const handleMouseMove = (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setOffsets({ x: x * 15, y: y * 15 });
    };
    const handleMouseLeave = () => {
      setOffsets({ x: 0, y: 0 });
    };
    return (
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-80 rounded-[2.5rem] bg-zinc-955 border border-zinc-900 relative overflow-hidden group select-none flex items-center justify-center"
      >
        <div className="absolute top-4 left-4">
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            FLYING_POSTERS_KINETIC
          </span>
        </div>
        <div className="relative w-72 h-44 flex items-center justify-center [perspective:800px]">
          {[
            { label: "EXHIBIT_A", rot: -8, color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/25", offsetScale: 0.8 },
            { label: "EXHIBIT_B", rot: 6, color: "from-pink-500/10 to-rose-500/10 border-pink-500/25", offsetScale: -1 },
            { label: "CORE_FOCUS", rot: 1, color: "from-blue-500/20 to-indigo-500/20 border-blue-500/40", offsetScale: 1.5 }
          ].map((poster, idx) => (
            <div 
              key={idx}
              style={{
                transform: `rotate(${poster.rot}deg) translateX(${offsets.x * poster.offsetScale}px) translateY(${offsets.y * poster.offsetScale}px) translateZ(${idx * 15}px)`,
                transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                zIndex: idx
              }}
              className={cn(
                "absolute w-44 h-28 rounded-xl bg-zinc-900 border shadow-2xl p-4 flex flex-col justify-between overflow-hidden",
                poster.color
              )}
            >
              <div className="flex justify-between items-start">
                <span className="text-[7px] font-mono text-zinc-500">REF_NODE_0{idx+1}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-850" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-white tracking-widest uppercase mb-1">{poster.label}</h4>
                <p className="text-[7px] font-mono text-zinc-550 uppercase">KINETIC DRIFT ANGLE</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },

  Dynamic_ScrollStack: () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const projects = [
      { label: "NEON_STUDIOS", tag: "WEB GL / GRAPHICS", color: "bg-indigo-600" },
      { label: "CYBER_VESSEL", tag: "HUD / TACTICAL", color: "bg-pink-600" },
      { label: "Maison_LUXURY", tag: "EDITORIAL / COMMERCE", color: "bg-amber-600" }
    ];
    return (
      <div className="w-full p-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[360px] flex flex-col justify-between">
        <div>
          <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            STICKY_SCROLL_STACK
          </span>
          <p className="text-[10px] text-zinc-550 mt-2 font-mono uppercase">CLICK CARDS TO STACK / REVEAL</p>
        </div>
        
        <div className="relative h-48 w-full flex items-center justify-center mt-6">
          {projects.map((proj, idx) => {
            const isStacked = idx < activeIndex;
            const isCurrent = idx === activeIndex;
            return (
              <div 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  transform: isStacked 
                    ? `translateY(-${(projects.length - idx) * 12}px) scale(${0.85 + idx * 0.05})` 
                    : isCurrent 
                      ? "translateY(0px) scale(1)" 
                      : `translateY(${(idx - activeIndex) * 20}px) scale(${1 - (idx - activeIndex) * 0.05})`,
                  zIndex: 10 + idx,
                  opacity: isStacked ? 0.35 : 1,
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                }}
                className="absolute w-72 h-36 rounded-2xl bg-zinc-900 border border-white/5 shadow-2xl p-6 flex flex-col justify-between overflow-hidden cursor-pointer select-none"
              >
                <div className={cn("absolute top-0 right-0 w-24 h-24 blur-[40px] rounded-full opacity-10", proj.color)} />
                <div className="flex justify-between items-start relative z-10">
                  <span className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-[8px] font-mono text-zinc-400 rounded">
                    {proj.tag}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-650">0{idx + 1}</span>
                </div>
                <h4 className="text-white text-base font-black tracking-widest uppercase relative z-10">{proj.label}</h4>
              </div>
            );
          })}
        </div>
        
        <div className="flex gap-3 justify-center mt-4">
          <button 
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex(prev => prev - 1)}
            className="px-3 py-1 bg-zinc-900 border border-zinc-850 hover:border-zinc-800 disabled:opacity-30 rounded-lg text-[9px] font-mono text-zinc-450 hover:text-white transition-all"
          >
            PREV
          </button>
          <button 
            disabled={activeIndex === projects.length - 1}
            onClick={() => setActiveIndex(prev => prev + 1)}
            className="px-3 py-1 bg-zinc-900 border border-zinc-850 hover:border-zinc-800 disabled:opacity-30 rounded-lg text-[9px] font-mono text-zinc-450 hover:text-white transition-all"
          >
            NEXT
          </button>
        </div>
      </div>
    );
  },

  Dynamic_BounceCards: () => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full h-80 rounded-[2.5rem] bg-zinc-950 border border-zinc-900 relative overflow-hidden select-none flex items-center justify-center cursor-pointer"
      >
        <div className="absolute top-4 left-4">
          <span className="text-[9px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            ELASTIC_BOUNCE_STACK
          </span>
        </div>
        <div className="relative w-64 h-40 flex items-center justify-center">
          {[
            { label: "ART_PIECE_C", rot: -12, transX: -80, transY: -10, color: "from-amber-500/10 to-orange-500/10" },
            { label: "ART_PIECE_A", rot: 12, transX: 80, transY: 15, color: "from-red-500/10 to-rose-500/10" },
            { label: "ART_PIECE_B", rot: -2, transX: 0, transY: -15, color: "from-pink-500/20 to-purple-500/20 border-pink-500/40" }
          ].map((card, idx) => (
            <div 
              key={idx}
              style={{
                transform: isHovered 
                  ? `translateX(${card.transX}px) translateY(${card.transY}px) rotate(${card.rot}deg) scale(1.02)` 
                  : `translateX(0px) translateY(0px) rotate(${idx * 4 - 4}deg) scale(1)`,
                transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                zIndex: idx === 2 ? 10 : 5 + idx
              }}
              className={cn(
                "absolute w-36 h-24 rounded-2xl bg-zinc-900 border border-white/5 shadow-2xl p-4 flex flex-col justify-between overflow-hidden",
                card.color
              )}
            >
              <div className="flex justify-between items-start">
                <span className="text-[8px] font-mono text-zinc-500">SPRING_T_{idx+1}</span>
                <Heart size={10} className="text-zinc-600" />
              </div>
              <h4 className="text-[9px] font-bold text-white tracking-widest uppercase">{card.label}</h4>
            </div>
          ))}
        </div>
        <span className="absolute bottom-4 text-[9px] font-mono text-zinc-650 uppercase tracking-widest animate-pulse">
          HOVER CONTAINER TO SCATTER
        </span>
      </div>
    );
  },

  Interactive_MagicBento: () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = React.useState(false);
    
    const handleMouseMove = (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    return (
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full p-8 bg-zinc-955 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[320px] flex flex-col justify-between relative group cursor-none"
      >
        {isHovered && (
          <div 
            style={{
              left: `${coords.x}px`,
              top: `${coords.y}px`,
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
            }}
            className="absolute w-80 h-80 pointer-events-none transition-opacity duration-300"
          />
        )}
        
        <div className="flex justify-between items-start relative z-10">
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            MAGIC_BENTO_GLOW
          </span>
          <span className="text-[9px] font-mono text-zinc-600">CURSOR_LIGHT_TRACK</span>
        </div>
        
        <div className="space-y-3 relative z-10">
          <h3 className="text-white text-2xl font-black tracking-tighter uppercase leading-tight">
            INTELLIGENT BENTO SURFACES.
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed max-w-md">
            Interactive grid surfaces wrapped in sleek glass backdrop borders that trace and react to visitor movements dynamically.
          </p>
        </div>
        
        <div className="flex items-center gap-4 relative z-10 mt-6 border-t border-zinc-900/60 pt-4">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] text-emerald-400 font-mono font-bold">
            MB
          </div>
          <div>
            <h5 className="font-bold text-xs text-white uppercase tracking-wider">Spotlight Reactor</h5>
            <p className="text-[9px] font-mono text-zinc-550 uppercase">Grid System Core</p>
          </div>
        </div>
      </div>
    );
  },

  Interactive_SpotlightGridCard: () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = React.useState(0);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    return (
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        className="w-full p-8 bg-zinc-950 border border-zinc-850 rounded-[2.5rem] overflow-hidden min-h-[320px] flex flex-col justify-between relative group"
      >
        <div 
          style={{
            left: `${coords.x}px`,
            top: `${coords.y}px`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 60%)',
            opacity,
            transition: 'opacity 0.3s'
          }}
          className="absolute w-96 h-96 pointer-events-none"
        />
        
        <div className="flex justify-between items-start relative z-10">
          <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            GLASS_SPOTLIGHT_SHEET
          </span>
          <span className="text-[9px] font-mono text-zinc-650">0xINDIGO</span>
        </div>
        
        <div className="relative z-10 space-y-4">
          <p className="text-zinc-200 text-sm font-serif leading-relaxed italic">
            "We integrated these glass spotlight grids straight into our main dashboards, and our interface feels immediately alive."
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10 mt-6 border-t border-zinc-900/80 pt-4">
          <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-[10px] text-indigo-400 font-bold shrink-0">
            SC
          </div>
          <div>
            <h5 className="font-bold text-xs text-white uppercase tracking-wider">Spotlight Card</h5>
            <p className="text-[9px] text-zinc-550 font-mono">Principal Designer @ InteractiveUX</p>
          </div>
        </div>
      </div>
    );
  },

  Interactive_ReflectiveMetallic: () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [style, setStyle] = React.useState<React.CSSProperties>({});
    
    const handleMouseMove = (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setStyle({
        background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 50%), linear-gradient(${120 + x * 40}deg, #09090b, #18181b)`,
        transform: `perspective(1000px) rotateX(${(y - 0.5) * -10}deg) rotateY(${(x - 0.5) * 10}deg)`
      });
    };
    
    const handleMouseLeave = () => {
      setStyle({
        background: "linear-gradient(135deg, #09090b, #18181b)",
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        transition: 'transform 0.5s ease'
      });
    };
    
    return (
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className="w-full p-8 rounded-[2.5rem] border border-zinc-800 min-h-[320px] flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl select-none"
      >
        <div className="flex justify-between items-start">
          <span className="text-[9px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            METALLIC_SPECULAR_FOIL
          </span>
          <span className="text-[9px] font-mono text-zinc-600">3D_REFLECTIVE</span>
        </div>
        
        <div>
          <h4 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-2">SPECTRUM SHIFT</h4>
          <h2 className="text-white text-3xl font-black tracking-tighter uppercase leading-none">
            SPECULAR REFLECTION.
          </h2>
        </div>
        
        <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider">
          MOVE CURSOR TO ROTATE & REFLECT LIGHT
        </p>
      </div>
    );
  },

  Interactive_ImageComparison: () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [sliderPos, setSliderPos] = React.useState(50);
    const [isDragging, setIsDragging] = React.useState(false);
    
    const handleMove = (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setSliderPos(pct);
    };
    
    const handlePointerDown = () => {
      setIsDragging(true);
    };
    
    const handlePointerMove = (e: React.PointerEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };
    
    const handlePointerUp = () => {
      setIsDragging(false);
    };
    
    return (
      <div 
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative w-full aspect-video rounded-3xl overflow-hidden group select-none cursor-ew-resize border border-zinc-850"
      >
        <div className="absolute inset-0 bg-zinc-950">
          <ImagePlaceholder label="AFTER_STATE: CUSTOM_GLOW" className="bg-gradient-to-tr from-pink-500/10 to-indigo-500/10" />
        </div>
        <div 
          style={{ width: `${sliderPos}%` }}
          className="absolute inset-0 z-10 overflow-hidden border-r-2 border-white/60 shadow-[5px_0_15px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
            <ImagePlaceholder label="BEFORE_STATE: SOLID_DEFAULT" className="bg-zinc-900" />
          </div>
        </div>
        
        <div 
          onPointerDown={handlePointerDown}
          style={{ left: `${sliderPos}%` }}
          className="absolute top-0 bottom-0 w-10 -ml-5 z-20 flex items-center justify-center cursor-ew-resize active:scale-95 transition-transform"
        >
          <div className="w-7 h-7 bg-white rounded-full shadow-2xl flex items-center justify-center font-black text-black text-[9px]">
            ↔
          </div>
        </div>
        
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="text-[9px] font-mono text-zinc-350 bg-zinc-950/80 border border-zinc-800 px-2 py-0.5 rounded uppercase tracking-widest">
            BEFORE_AFTER_TRACK
          </span>
        </div>
      </div>
    );
  },

  Masonry_InteractiveFilter: () => {
    const [selectedTag, setSelectedTag] = React.useState<'ALL' | 'DARK' | 'LIGHT'>('ALL');
    const items = [
      { label: "GRID_01", theme: "DARK", color: "from-zinc-900 to-zinc-950 border-zinc-800" },
      { label: "GRID_02", theme: "LIGHT", color: "from-zinc-100 to-zinc-200 border-zinc-300 text-zinc-900" },
      { label: "GRID_03", theme: "DARK", color: "from-purple-950 to-zinc-955 border-purple-900/30" },
      { label: "GRID_04", theme: "LIGHT", color: "from-indigo-100 to-zinc-100 border-indigo-200 text-zinc-900" },
      { label: "GRID_05", theme: "DARK", color: "from-zinc-900 to-zinc-955 border-zinc-850" },
      { label: "GRID_06", theme: "LIGHT", color: "from-zinc-50 to-zinc-100 border-zinc-200 text-zinc-900" }
    ];
    
    const filtered = items.filter(item => selectedTag === 'ALL' || item.theme === selectedTag);
    
    return (
      <div className="w-full p-8 bg-zinc-955 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[360px] flex flex-col justify-between group">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            DYNAMIC_FILTER_MASONRY
          </span>
          
          <div className="flex bg-zinc-900 border border-zinc-850 p-1 rounded-xl">
            {(['ALL', 'DARK', 'LIGHT'] as const).map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={cn(
                  "px-2.5 py-1 rounded-lg text-[8px] font-mono font-bold tracking-wider transition-all",
                  selectedTag === tag ? "bg-indigo-500 text-white" : "text-zinc-500 hover:text-zinc-300"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1 items-center">
          {filtered.map((item, idx) => (
            <div 
              key={idx} 
              className={cn(
                "rounded-xl border p-4 aspect-video flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:scale-[1.03] shadow-md",
                item.color
              )}
            >
              <div className="flex justify-between items-start">
                <span className="text-[7px] font-mono opacity-50">NODE_0{idx + 1}</span>
                <span className="text-[7px] font-mono font-bold uppercase">{item.theme}</span>
              </div>
              <h4 className="font-bold text-[10px] tracking-widest uppercase">{item.label}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

const Gallery_Placeholder = ({ label }: { label: string }) => (
  <div className="w-full h-80 rounded-3xl bg-zinc-950/60 border border-zinc-900 flex flex-col items-center justify-center relative overflow-hidden group select-none">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-40" />
    <div className="absolute -inset-[10px] bg-gradient-to-tr from-pink-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900/50 border border-zinc-850 px-3 py-1 rounded-lg mb-3 tracking-widest uppercase">
      PREMIUM LAYOUT VARIANT
    </span>
    <h4 className="text-zinc-550 text-sm font-bold tracking-widest uppercase group-hover:text-zinc-350 transition-colors">
      {label.replace(/_/g, ' ')}
    </h4>
    <p className="text-[9px] font-mono text-zinc-650 mt-2 uppercase tracking-wider">
      [ COMING SOON IN FUTURE BATCHES ]
    </p>
    <div className="absolute bottom-4 flex gap-1.5 opacity-30 group-hover:opacity-60 transition-opacity">
      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 animate-pulse" />
    </div>
  </div>
);

const placeholderKeys = [
  'Gallery_Placeholder_A1',
  'Carousel_Placeholder_3', 'Carousel_Placeholder_4', 'Carousel_Placeholder_5',
  'Carousel_Placeholder_6', 'Carousel_Placeholder_7', 'Carousel_Placeholder_8',
  'Carousel_Placeholder_9', 'Carousel_Placeholder_10',
  'Mosaic_Placeholder_1', 'Mosaic_Placeholder_2', 'Mosaic_Placeholder_3',
  'Mosaic_Placeholder_4', 'Mosaic_Placeholder_5', 'Mosaic_Placeholder_6',
  'Mosaic_Placeholder_7', 'Mosaic_Placeholder_8', 'Mosaic_Placeholder_9',
  'Mosaic_Placeholder_10',
  'Interactive_Placeholder_5', 'Interactive_Placeholder_6', 'Interactive_Placeholder_7',
  'Interactive_Placeholder_8', 'Interactive_Placeholder_9', 'Interactive_Placeholder_10',
  'Dynamic_Placeholder_4', 'Dynamic_Placeholder_5', 'Dynamic_Placeholder_6',
  'Dynamic_Placeholder_7', 'Dynamic_Placeholder_8', 'Dynamic_Placeholder_9',
  'Dynamic_Placeholder_10'
];

placeholderKeys.forEach(key => {
  GalleryVariants[key] = () => <Gallery_Placeholder label={key} />;
});

