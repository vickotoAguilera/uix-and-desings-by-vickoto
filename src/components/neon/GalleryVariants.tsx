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
};
