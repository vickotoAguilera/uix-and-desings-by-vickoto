"use client";

import React from 'react';
import { Maximize2, ExternalLink, Heart, Share2, ArrowLeft, ArrowRight, Play, Sparkles, Plus, Minus, Search, Image, Folder, FolderOpen, FileText, X, Volume2, User } from 'lucide-react';
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

  Carousel_InfiniteSlider: () => {
    const items = [
      { title: "NEON_WAVE", tag: "MOTION", color: "from-blue-600 to-indigo-600" },
      { title: "GLASS_CORE", tag: "REFRACT", color: "from-pink-600 to-rose-600" },
      { title: "CYBER_LOG", tag: "SECURITY", color: "from-emerald-600 to-teal-600" },
      { title: "SOLAR_DECK", tag: "ECO", color: "from-amber-600 to-orange-600" },
      { title: "DEEP_GLOW", tag: "CREATIVE", color: "from-purple-600 to-fuchsia-600" }
    ];
    return (
      <div className="w-full py-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden relative group">
        <div className="flex justify-between items-center px-8 mb-6">
          <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            INFINITE_MARQUEE_TRACK
          </span>
          <span className="text-[9px] font-mono text-zinc-650 animate-pulse">PAUSES ON HOVER</span>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 20s linear infinite;
          }
          .animate-marquee-track:hover {
            animation-play-state: paused;
          }
        `}} />

        <div className="relative overflow-hidden w-full mask-gradient-x">
          <div className="animate-marquee-track flex gap-4">
            {[...items, ...items].map((item, idx) => (
              <div 
                key={idx} 
                className="w-56 h-36 rounded-2xl bg-zinc-900 border border-white/5 shadow-2xl relative overflow-hidden group/item cursor-pointer flex flex-col justify-between p-5"
              >
                <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-10 group-hover/item:opacity-20 transition-opacity", item.color)} />
                <div className="flex justify-between items-start z-10">
                  <span className="text-[8px] font-mono text-zinc-550 bg-zinc-950 px-2 py-0.5 rounded border border-white/5">{item.tag}</span>
                  <ExternalLink size={10} className="text-zinc-600 group-hover/item:text-white transition-colors" />
                </div>
                <div className="z-10">
                  <span className="text-[7px] font-mono text-zinc-600 uppercase tracking-wider block mb-1">LOOP_NODE_0{idx%5+1}</span>
                  <span className="text-xs font-black text-white uppercase tracking-widest">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },

  Carousel_GlowNav: () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const items = [
      { label: "MAISON_LUXURY", desc: "Fine arts and boutique layout", color: "from-amber-500/10 to-stone-500/10" },
      { label: "CYBER_TERMINAL", desc: "Decentralized console protocol", color: "from-cyan-500/10 to-indigo-500/10" },
      { label: "BENTO_ANALYTICS", desc: "Modular dashboard analytics surface", color: "from-purple-500/10 to-pink-500/10" },
      { label: "SOLAR_SYSTEM", desc: "Eco-tech energy control panel", color: "from-emerald-500/10 to-teal-500/10" }
    ];
    return (
      <div className="w-full p-8 bg-zinc-955 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[380px] flex flex-col justify-between relative group">
        <div className="flex justify-between items-start">
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            GLOW_NAV_CAROUSEL
          </span>
          <span className="text-[9px] font-mono text-zinc-600">DOCK_INTERACTION</span>
        </div>
        
        <div className="flex-1 flex items-center justify-center my-6 relative min-h-[140px]">
          {items.map((item, idx) => (
            <div 
              key={idx}
              style={{
                opacity: idx === activeIndex ? 1 : 0,
                transform: idx === activeIndex ? "scale(1)" : "scale(0.95)",
                transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                zIndex: idx === activeIndex ? 10 : 0
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden animate-fade-in"
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 pointer-events-none", item.color)} />
              <h3 className="text-white text-lg font-black tracking-widest uppercase mb-2">{item.label}</h3>
              <p className="text-zinc-400 text-xs italic">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-3 bg-zinc-900/60 border border-zinc-850 p-2 rounded-2xl backdrop-blur-xl relative z-10 self-center">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "relative px-4 py-2 rounded-xl text-[9px] font-mono font-bold tracking-wider uppercase transition-all duration-300",
                idx === activeIndex 
                  ? "bg-zinc-800 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/10" 
                  : "text-zinc-500 hover:text-zinc-300 border border-transparent"
              )}
            >
              0{idx + 1}
              {idx === activeIndex && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#10b981]" />
              )}
            </button>
          ))}
        </div>
      </div>
    );
  },

  Mosaic_GlowEffectGrid: () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });
    const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);
    
    const handleMouseMove = (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    const cells = [
      { label: "BENTO_ALPHA", span: "col-span-2 row-span-2", color: "from-pink-500/10 to-indigo-500/10" },
      { label: "BENTO_BETA", span: "col-span-1 row-span-1", color: "from-amber-500/10 to-red-500/10" },
      { label: "BENTO_GAMMA", span: "col-span-1 row-span-1", color: "from-blue-500/10 to-teal-500/10" },
      { label: "BENTO_DELTA", span: "col-span-2 row-span-1", color: "from-purple-500/10 to-pink-500/10" }
    ];
    
    return (
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="w-full p-6 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] relative overflow-hidden"
      >
        <div className="flex justify-between items-center mb-6">
          <span className="text-[9px] font-mono text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            MOSAIC_GLOW_SPOTLIGHT
          </span>
          <span className="text-[9px] font-mono text-zinc-650 font-bold">X: {Math.round(coords.x)} Y: {Math.round(coords.y)}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-3 aspect-video md:aspect-[16/8] w-full">
          {cells.map((cell, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
              className={cn(
                "rounded-3xl border border-white/5 relative overflow-hidden bg-zinc-900/40 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300",
                cell.span
              )}
            >
              {hoverIndex === idx && (
                <div 
                  style={{
                    left: `${coords.x - (idx % 2 === 0 ? 40 : 180)}px`,
                    top: `${coords.y - (idx > 1 ? 160 : 20)}px`,
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle, rgba(244,63,94,0.12) 0%, transparent 60%)',
                  }}
                  className="absolute w-80 h-80 pointer-events-none transition-opacity duration-300"
                />
              )}
              <div className="flex justify-between items-start z-10">
                <span className="text-[8px] font-mono text-zinc-550">CELL_0{idx + 1}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 transition-colors" />
              </div>
              <div className="z-10">
                <h4 className="text-[10px] font-black text-white tracking-widest uppercase mb-1">{cell.label}</h4>
                <p className="text-[8px] font-mono text-zinc-600">FRACTAL GRID ALIGNMENT</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },

  Mosaic_MorphingDialog: () => {
    const [selectedItem, setSelectedItem] = React.useState<null | { label: string, desc: string, color: string }>(null);
    const items = [
      { label: "CYBER_VESSEL", desc: "Tactical flight HUD and diagnostic interface nodes.", color: "from-emerald-500 to-teal-500" },
      { label: "MAISON_STUDIO", desc: "Elegance minimal boutique architecture and negative space grids.", color: "from-pink-500 to-indigo-500" },
      { label: "DEEP_HORIZON", desc: "Generative fluid soundwaves and procedural physics modeling.", color: "from-amber-500 to-orange-500" }
    ];
    return (
      <div className="w-full p-6 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[350px] flex flex-col justify-between relative">
        <div>
          <span className="text-[9px] font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            MORPHING_POPUP_DIALOG
          </span>
          <p className="text-[9px] font-mono text-zinc-550 mt-2 uppercase">CLICK CARDS TO POPUP DETAILS</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 my-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedItem(item)}
              className="aspect-[4/5] bg-zinc-900 border border-white/5 rounded-2xl relative overflow-hidden group cursor-pointer flex flex-col justify-end p-4 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-800 animate-fade-in"
            >
              <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-5 group-hover:opacity-15 transition-opacity", item.color)} />
              <div className="z-10">
                <span className="text-[7px] font-mono text-zinc-550 block mb-1">TAP_ZOOM_0{idx+1}</span>
                <h4 className="text-[10px] font-bold text-white tracking-widest uppercase">{item.label}</h4>
              </div>
            </div>
          ))}
        </div>
        
        {selectedItem && (
          <div 
            className="absolute inset-0 bg-black/85 backdrop-blur-xl flex items-center justify-center p-8 z-30 transition-all duration-500"
            onClick={() => setSelectedItem(null)}
          >
            <div 
              className="w-full max-w-sm bg-zinc-900 border border-white/10 p-6 rounded-3xl relative overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={cn("absolute top-0 right-0 w-32 h-32 blur-[50px] opacity-15 rounded-full pointer-events-none", selectedItem.color)} />
              <div className="flex justify-between items-start mb-4">
                <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded uppercase">{selectedItem.label}</span>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="w-6 h-6 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <h3 className="text-white text-base font-bold uppercase tracking-widest mb-3">{selectedItem.label}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4">{selectedItem.desc}</p>
              <button 
                onClick={() => setSelectedItem(null)}
                className="w-full py-2.5 bg-white text-black font-black text-[10px] tracking-widest uppercase rounded-xl hover:bg-zinc-200 transition-colors"
              >
                CLOSE DOCUMENT
              </button>
            </div>
          </div>
        )}
      </div>
    );
  },

  Interactive_TiltCardHover: () => {
    const cards = [
      { title: "PERSPECTIVE_01", color: "from-blue-500 to-indigo-600" },
      { title: "PERSPECTIVE_02", color: "from-pink-500 to-rose-600" },
      { title: "PERSPECTIVE_03", color: "from-amber-500 to-orange-600" }
    ];
    return (
      <div className="w-full p-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[350px] flex flex-col justify-between [perspective:1000px]">
        <div>
          <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            3D_PERSPECTIVE_TILT
          </span>
          <p className="text-[9px] font-mono text-zinc-550 mt-2 uppercase">MOVE MOUSE OVER CARDS TO TILT</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 my-6 select-none">
          {cards.map((card, idx) => {
            const [rotation, setRotation] = React.useState({ x: 0, y: 0 });
            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              setRotation({ x: x * 20, y: y * -20 });
            };
            const handleMouseLeave = () => {
              setRotation({ x: 0, y: 0 });
            };
            return (
              <div
                key={idx}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg) scale(1.03)`,
                  transition: "transform 0.1s ease-out",
                  transformStyle: "preserve-3d"
                }}
                className="aspect-[4/5] bg-zinc-900 border border-white/5 rounded-2xl relative overflow-hidden group cursor-pointer flex flex-col justify-between p-5 shadow-2xl animate-fade-in"
              >
                <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-10 group-hover:opacity-20 transition-opacity", card.color)} />
                <div className="flex justify-between items-start" style={{ transform: "translateZ(20px)" }}>
                  <span className="text-[7px] font-mono text-zinc-550">TILT_NODE_0{idx + 1}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                </div>
                <div style={{ transform: "translateZ(30px)" }}>
                  <h4 className="text-[10px] font-black text-white tracking-widest uppercase">{card.title}</h4>
                  <p className="text-[6px] font-mono text-zinc-650 mt-1 uppercase">3D SPECULAR RATIO</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },

  Interactive_ProgressiveBlurGrid: () => {
    const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);
    const items = [
      { title: "CYBER_VESSEL", theme: "TACTICAL", color: "from-emerald-500 to-teal-500" },
      { title: "MAISON_LUXURY", theme: "EDITORIAL", color: "from-pink-500 to-indigo-500" },
      { title: "DEEP_HORIZON", theme: "GENERATIVE", color: "from-amber-500 to-orange-500" }
    ];
    return (
      <div className="w-full p-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[350px] flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="text-[9px] font-mono text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            PROGRESSIVE_BLUR_GRID
          </span>
          <span className="text-[9px] font-mono text-zinc-650 font-bold">FOCUS_DYNAMICS</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 my-6">
          {items.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            const isAnyHovered = hoveredIdx !== null;
            const isOtherHovered = isAnyHovered && !isHovered;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  filter: isOtherHovered ? "blur(4px)" : "blur(0px)",
                  opacity: isOtherHovered ? 0.35 : 1,
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
                }}
                className="aspect-[4/5] bg-zinc-900 border border-white/5 rounded-2xl relative overflow-hidden group cursor-pointer flex flex-col justify-between p-5 animate-fade-in"
              >
                <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-10 group-hover:opacity-20 transition-opacity", item.color)} />
                <div className="flex justify-between items-start">
                  <span className="text-[7px] font-mono text-zinc-550">{item.theme}</span>
                  <Heart size={10} className={cn("text-zinc-600 transition-colors", isHovered && "text-pink-500")} />
                </div>
                <div>
                  <span className="text-[6px] font-mono text-zinc-600 block mb-1">FOCUS_NODE_0{idx+1}</span>
                  <h4 className="text-[10px] font-black text-white tracking-widest uppercase">{item.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },

  Interactive_BorderTrailCard: () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const items = [
      { title: "TRAIL_NODE_01", color: "from-blue-500 to-indigo-500" },
      { title: "TRAIL_NODE_02", color: "from-pink-500 to-rose-500" }
    ];
    return (
      <div className="w-full p-8 bg-zinc-955 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[350px] flex flex-col justify-between">
        <div>
          <span className="text-[9px] font-mono text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            PERIMETER_BORDER_TRAIL
          </span>
          <p className="text-[9px] font-mono text-zinc-550 mt-2 uppercase">CLICK CARD TO ORBIT TRAIL</p>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes border-orbit {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-border-trail {
            position: absolute;
            inset: -50%;
            background: conic-gradient(from 0deg, transparent 70%, #10b981 100%);
            animation: border-orbit 4s linear infinite;
          }
        `}} />
        
        <div className="grid grid-cols-2 gap-6 my-6">
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="aspect-video bg-zinc-950 rounded-2xl relative p-0.5 overflow-hidden group cursor-pointer shadow-2xl animate-fade-in"
              >
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="animate-border-trail" />
                  </div>
                )}
                
                <div className="w-full h-full bg-zinc-900 rounded-[14px] p-5 flex flex-col justify-between relative z-10 border border-white/5 group-hover:border-zinc-800 transition-colors">
                  <div className="flex justify-between items-start">
                    <span className="text-[7px] font-mono text-zinc-550">0x00{idx + 1}</span>
                    <span className="text-[7px] font-mono text-emerald-400 uppercase tracking-widest">{isActive ? "TRAIL_ACTIVE" : "STANDBY"}</span>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-white tracking-widest uppercase">{item.title}</h4>
                    <p className="text-[6px] font-mono text-zinc-650 mt-1 uppercase">ORBITING PATH PATTERN</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },

  Dynamic_ChromaGrid: () => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
    const cells = Array.from({ length: 16 });
    
    const getChromaColor = (idx: number) => {
      if (hoveredIndex === null) return "bg-zinc-900/40 border-white/5";
      const distance = Math.abs(idx - hoveredIndex);
      if (distance === 0) return "bg-pink-500 border-pink-400 text-white scale-[1.05] shadow-[0_0_15px_rgba(236,72,153,0.4)]";
      if (distance === 1 || distance === 4) return "bg-indigo-600/60 border-indigo-500 scale-[1.02] shadow-[0_0_10px_rgba(79,70,229,0.2)]";
      if (distance === 2 || distance === 5) return "bg-blue-900/30 border-blue-800";
      return "bg-zinc-900/40 border-white/5 opacity-50";
    };
    
    return (
      <div className="w-full p-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[350px] flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="text-[9px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            DYNAMIC_CHROMA_WAVE
          </span>
          <span className="text-[9px] font-mono text-zinc-600 uppercase">MATRIX_REACTION</span>
        </div>
        
        <div className="grid grid-cols-4 gap-2.5 max-w-[280px] w-full aspect-square self-center my-4 select-none animate-fade-in">
          {cells.map((_, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "rounded-xl border flex items-center justify-center font-mono text-[8px] text-zinc-500 transition-all duration-350 cursor-crosshair aspect-square",
                getChromaColor(idx)
              )}
            >
              {idx.toString().padStart(2, '0')}
            </div>
          ))}
        </div>
      </div>
    );
  },

  Dynamic_DecayCardStack: () => {
    const [dragOffset, setDragOffset] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const [cardIndex, setCardIndex] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);
    
    const items = [
      { label: "DECAY_STACK_A", tag: "Procedural HUD", color: "from-blue-600 to-indigo-600" },
      { label: "DECAY_STACK_B", tag: "Liquid Shadows", color: "from-pink-600 to-rose-600" },
      { label: "DECAY_STACK_C", tag: "Organic Zen", color: "from-emerald-600 to-teal-600" }
    ];
    
    const activeItem = items[cardIndex % items.length];
    const nextItem = items[(cardIndex + 1) % items.length];
    
    const handlePointerDown = () => {
      setIsDragging(true);
    };
    
    const handlePointerMove = (e: React.PointerEvent) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const offset = (e.clientX - rect.left - rect.width / 2) * 1.5;
      setDragOffset(offset);
    };
    
    const handlePointerUp = () => {
      if (!isDragging) return;
      setIsDragging(false);
      
      if (Math.abs(dragOffset) > 100) {
        setCardIndex(prev => prev + 1);
      }
      setDragOffset(0);
    };
    
    return (
      <div 
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="w-full p-8 bg-zinc-955 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[350px] flex flex-col justify-between relative select-none cursor-grab active:cursor-grabbing"
      >
        <div className="flex justify-between items-start">
          <span className="text-[9px] font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            DECAY_SWIPE_STACK
          </span>
          <span className="text-[9px] font-mono text-zinc-650">SWIPE TO ROTATE</span>
        </div>
        
        <div className="relative h-44 w-full flex items-center justify-center my-4 overflow-visible animate-fade-in">
          <div 
            style={{
              transform: `scale(0.92) translateY(8px) rotate(${-4 + dragOffset * 0.01}deg)`,
              transition: isDragging ? "none" : "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
              opacity: 0.4,
              zIndex: 5
            }}
            className="absolute w-64 h-36 rounded-2xl bg-zinc-900 border border-white/5 p-6 flex flex-col justify-between overflow-hidden shadow-xl"
          >
            <div className="flex justify-between">
              <span className="text-[8px] font-mono text-zinc-555">{nextItem.tag}</span>
            </div>
            <h4 className="text-white text-base font-black tracking-widest uppercase">{nextItem.label}</h4>
          </div>
          
          <div 
            onPointerDown={handlePointerDown}
            style={{
              transform: `translateX(${dragOffset}px) translateY(${Math.abs(dragOffset) * 0.08}deg) rotate(${dragOffset * 0.08}deg) scale(1.02)`,
              transition: isDragging ? "none" : "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              zIndex: 10
            }}
            className="absolute w-64 h-36 rounded-2xl bg-zinc-900 border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-15", activeItem.color)} />
            <div className="flex justify-between items-start relative z-10">
              <span className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-[8px] font-mono text-zinc-400 rounded">
                {activeItem.tag}
              </span>
              <span className="text-[9px] font-mono text-zinc-650">0{cardIndex%3+1}</span>
            </div>
            <h4 className="text-white text-base font-black tracking-widest uppercase relative z-10">{activeItem.label}</h4>
          </div>
        </div>
      </div>
    );
  },

  Dynamic_PixelCardHover: () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [isHovered, setIsHovered] = React.useState(false);
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
    
    React.useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      let animationFrameId: number;
      let particles: Array<{ x: number, y: number, size: number, speedX: number, speedY: number, color: string, alpha: number }> = [];
      
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      const render = () => {
        ctx.fillStyle = 'rgba(9, 9, 11, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        if (isHovered && Math.random() < 0.4) {
          particles.push({
            x: mousePos.x,
            y: mousePos.y,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 1.5,
            speedY: (Math.random() - 0.5) * 1.5,
            color: Math.random() > 0.5 ? '#ec4899' : '#3b82f6',
            alpha: 1
          });
        }
        
        particles.forEach((p, idx) => {
          p.x += p.speedX;
          p.y += p.speedY;
          p.alpha -= 0.015;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size);
          ctx.restore();
          if (p.alpha <= 0) particles.splice(idx, 1);
        });
        
        animationFrameId = requestAnimationFrame(render);
      };
      
      render();
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, [isHovered, mousePos]);
    
    const handleMouseMove = (e: React.MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    return (
      <div 
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full p-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[320px] flex flex-col justify-between relative group cursor-crosshair"
      >
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
        
        <div className="flex justify-between items-start relative z-10">
          <span className="text-[9px] font-mono text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            DYNAMIC_PIXEL_TRAIL
          </span>
          <span className="text-[9px] font-mono text-zinc-650">CANVAS_RENDER</span>
        </div>
        
        <div className="relative z-10 space-y-3">
          <h3 className="text-white text-2xl font-black tracking-tighter uppercase leading-tight">
            SHINING PIXEL FIELD.
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
            Pass the pointer over the component to trace and light up floating digital energy particles rendered directly on canvas.
          </p>
        </div>
        
        <p className="relative z-10 text-zinc-600 text-[8px] font-mono uppercase tracking-widest">
          SYSTEM_OK [STABLE]
        </p>
      </div>
    );
  },

  Carousel_CardFlow: () => {
    const [activeIndex, setActiveIndex] = React.useState(2);
    const cards = [
      { id: 1, title: "SOLAR_WIND", tag: "Generative Art", color: "from-amber-500 to-orange-600", desc: "Interactive solar wind vector simulation." },
      { id: 2, title: "CYBER_DOCK", tag: "Tactical HUD", color: "from-emerald-500 to-teal-600", desc: "Command center metrics & telemetry nodes." },
      { id: 3, title: "LIQUID_GLASS", tag: "Visual Flow", color: "from-blue-500 to-indigo-600", desc: "Refractive glass with smooth fluid backdrop." },
      { id: 4, title: "NEON_GLOW", tag: "Cyberpunk Vibe", color: "from-pink-500 to-rose-600", desc: "High-contrast neon overlay grid elements." },
      { id: 5, title: "DEEP_SPACE", tag: "Minimalism", color: "from-purple-500 to-fuchsia-600", desc: "Cosmic purple dust particle field backdrop." }
    ];

    return (
      <div className="w-full py-10 px-6 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[380px] flex flex-col justify-between relative group">
        <div className="flex justify-between items-center mb-6 z-10">
          <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            3D_COVERFLOW_FLOW
          </span>
          <span className="text-[9px] font-mono text-zinc-650">PERSPECTIVE: 1200px</span>
        </div>

        <div className="relative flex-1 flex items-center justify-center [perspective:1200px] h-52 overflow-visible select-none">
          {cards.map((card, idx) => {
            const offset = idx - activeIndex;
            const absOffset = Math.abs(offset);
            const isActive = idx === activeIndex;
            
            const rotateY = offset * -25;
            const translateZ = isActive ? 100 : -120 - absOffset * 30;
            const translateX = offset * 110;
            const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.35;
            const zIndex = 20 - absOffset;

            return (
              <div
                key={card.id}
                onClick={() => setActiveIndex(idx)}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                  opacity: opacity,
                  zIndex: zIndex,
                  transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)"
                }}
                className={cn(
                  "absolute w-56 h-36 rounded-2xl bg-zinc-900 border relative overflow-hidden group/card cursor-pointer shrink-0 p-5 flex flex-col justify-between",
                  isActive ? "border-indigo-500/50 shadow-[0_15px_40px_rgba(99,102,241,0.25)]" : "border-white/5 hover:border-zinc-800"
                )}
              >
                <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-10 group-hover/card:opacity-20 transition-opacity", card.color)} />
                <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/20 transition-colors" />
                
                <div className="flex justify-between items-start relative z-10">
                  <span className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-[7px] font-mono text-zinc-400 rounded">
                    {card.tag}
                  </span>
                  <span className="text-[8px] font-mono text-zinc-600">0{card.id}</span>
                </div>

                <div className="relative z-10 space-y-1.5">
                  <h4 className="text-[11px] font-bold text-white tracking-widest uppercase">{card.title}</h4>
                  <p className="text-[8px] text-zinc-450 font-normal leading-normal line-clamp-2">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center mt-6 z-10">
          <button 
            onClick={() => setActiveIndex(prev => (prev - 1 + cards.length) % cards.length)}
            className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-450 hover:text-white flex items-center justify-center transition-colors hover:border-indigo-500/30 active:scale-95"
          >
            &lt;
          </button>
          <div className="flex gap-1.5">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  idx === activeIndex ? "bg-indigo-500 w-5" : "bg-zinc-800 hover:bg-zinc-700"
                )}
              />
            ))}
          </div>
          <button 
            onClick={() => setActiveIndex(prev => (prev + 1) % cards.length)}
            className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-450 hover:text-white flex items-center justify-center transition-colors hover:border-indigo-500/30 active:scale-95"
          >
            &gt;
          </button>
        </div>
      </div>
    );
  },

  Carousel_Thumbnails: () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const slides = [
      { id: 1, title: "COSMIC_DUST_FIELD", category: "PARTICLES", color: "from-purple-500/20 via-pink-500/10 to-transparent", spec: "1.2M particles, 60fps render rate" },
      { id: 2, title: "KINETIC_FLOW_VECTOR", category: "FLUIDS", color: "from-cyan-500/20 via-blue-500/10 to-transparent", spec: "Vector force drift grid simulation" },
      { id: 3, title: "REFRACTIVE_GLASS_MESH", category: "SHADERS", color: "from-emerald-500/20 via-teal-500/10 to-transparent", spec: "WebGL Glassmorphism depth field" },
      { id: 4, title: "SOLAR_WIND_PROMO", category: "CYBER", color: "from-amber-500/20 via-orange-500/10 to-transparent", spec: "Interactive solar flare metrics grid" }
    ];

    return (
      <div className="w-full p-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[380px] flex flex-col justify-between group">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[9px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            SLIDER_THUMBNAIL_DOCK
          </span>
          <span className="text-[9px] font-mono text-zinc-650 tracking-wider">INDEX: 0{activeIndex+1} / 0{slides.length}</span>
        </div>

        <div className="relative flex-1 bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden aspect-video max-w-md self-center w-full flex items-center justify-center p-6 mb-6">
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/70 pointer-events-none" />
          <div className={cn("absolute inset-0 bg-gradient-to-tr transition-all duration-700", slides[activeIndex].color)} />
          
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
            <span className="text-[8px] font-mono text-zinc-400 tracking-widest">RENDER CORE ACTIVE</span>
          </div>

          <div className="text-center space-y-2 z-10 max-w-xs animate-fade-in" key={activeIndex}>
            <span className="text-[8px] font-mono text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded uppercase tracking-widest inline-block mb-1">
              {slides[activeIndex].category}
            </span>
            <h3 className="text-white text-base font-black tracking-wider uppercase">{slides[activeIndex].title}</h3>
            <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">{slides[activeIndex].spec}</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-10 h-10 rounded-full bg-zinc-900 border flex items-center justify-center font-mono text-[10px] relative transition-all duration-300",
                  isActive 
                    ? "border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] scale-110" 
                    : "border-white/5 text-zinc-500 hover:border-zinc-800 hover:text-zinc-300"
                )}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-25" />
                )}
                0{slide.id}
              </button>
            );
          })}
        </div>
      </div>
    );
  },

  Carousel_ElasticSlider: () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [dragX, setDragX] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const slides = [
      { title: "ELASTIC_NODE_01", color: "from-rose-500/20 to-orange-500/10", label: "Spring physics grid" },
      { title: "ELASTIC_NODE_02", color: "from-blue-500/20 to-teal-500/10", label: "Fluid matrix damping" },
      { title: "ELASTIC_NODE_03", color: "from-purple-500/20 to-indigo-500/10", label: "Procedural layout float" }
    ];

    const handlePointerDown = (e: React.PointerEvent) => {
      setIsDragging(true);
      setStartX(e.clientX);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
      if (!isDragging) return;
      const currentX = e.clientX;
      const diffX = currentX - startX;
      const maxDrag = 180;
      const dampedX = Math.sign(diffX) * Math.min(Math.abs(diffX) * 0.7, maxDrag);
      setDragX(dampedX);
    };

    const handlePointerUp = () => {
      if (!isDragging) return;
      setIsDragging(false);
      
      const threshold = 80;
      if (dragX > threshold && activeIndex > 0) {
        setActiveIndex(prev => prev - 1);
      } else if (dragX < -threshold && activeIndex < slides.length - 1) {
        setActiveIndex(prev => prev + 1);
      }
      setDragX(0);
    };

    return (
      <div 
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="w-full p-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[380px] flex flex-col justify-between relative select-none cursor-grab active:cursor-grabbing"
      >
        <div className="flex justify-between items-start">
          <span className="text-[9px] font-mono text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            ELASTIC_DRAG_PHYSICS
          </span>
          <span className="text-[9px] font-mono text-zinc-650 uppercase">DAMPING: 0.70</span>
        </div>

        <div className="relative flex-1 w-full flex items-center justify-center my-6 overflow-visible">
          <div 
            style={{
              transform: `translateX(${dragX}px) rotate(${dragX * 0.04}deg)`,
              transition: isDragging ? "none" : "transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            }}
            className="w-full max-w-sm aspect-[16/9] bg-zinc-900 rounded-2xl border border-white/10 relative p-6 overflow-hidden flex flex-col justify-between shadow-2xl"
          >
            <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-20", slides[activeIndex].color)} />
            <div className="flex justify-between items-start relative z-10">
              <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider">{slides[activeIndex].label}</span>
              <span className="text-[8px] font-mono text-zinc-400">0{activeIndex+1} / 0{slides.length}</span>
            </div>
            
            <h3 className="text-white text-base font-black tracking-widest uppercase relative z-10">{slides[activeIndex].title}</h3>
            
            <div className="relative z-10 flex justify-between items-center">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              </div>
              <span className="text-[7px] font-mono text-zinc-550">VELOCITY_DRIFT_Z: {Math.round(dragX)}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[9px] font-mono text-zinc-600">
          <span>&larr; SLIDE LEFT</span>
          <div className="flex gap-1.5">
            {slides.map((_, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300", 
                  idx === activeIndex ? "bg-rose-500 w-4" : "bg-zinc-800"
                )} 
              />
            ))}
          </div>
          <span>SLIDE RIGHT &rarr;</span>
        </div>
      </div>
    );
  },

  Interactive_GlassIcons: () => {
    const icons = [
      { id: 1, title: "CYBER_SHIELD", desc: "Firewall & security system nodes.", color: "from-blue-500 to-indigo-600", glow: "rgba(59,130,246,0.3)", path: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
      { id: 2, title: "LIQUID_CORE", desc: "Generative fluid physics simulator.", color: "from-pink-500 to-rose-600", glow: "rgba(236,72,153,0.3)", path: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" },
      { id: 3, title: "VECTOR_DRIFT", desc: "High-contrast dynamic curve charts.", color: "from-emerald-500 to-teal-600", glow: "rgba(16,185,129,0.3)", path: "M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" },
      { id: 4, title: "SOLAR_METRIC", desc: "Energy distribution telemetry matrix.", color: "from-amber-500 to-orange-600", glow: "rgba(245,158,11,0.3)", path: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 2v20M2 12h20" }
    ];

    const [tiltStyles, setTiltStyles] = React.useState<Record<number, string>>({});

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const tiltX = (y / (rect.height / 2)) * -12;
      const tiltY = (x / (rect.width / 2)) * 12;

      setTiltStyles(prev => ({
        ...prev,
        [id]: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.03)`
      }));
    };

    const handleMouseLeave = (id: number) => {
      setTiltStyles(prev => ({
        ...prev,
        [id]: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
      }));
    };

    return (
      <div className="w-full p-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[380px] flex flex-col justify-between group relative">
        <div className="absolute top-4 left-4 z-20">
          <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            3D_INTERACTIVE_TILT_GRID
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 my-8 relative z-10 max-w-sm self-center w-full">
          {icons.map((item) => (
            <div
              key={item.id}
              onMouseMove={(e) => handleMouseMove(e, item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
              style={{
                transform: tiltStyles[item.id] || "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                transition: "transform 0.15s cubic-bezier(0.25, 0.8, 0.25, 1)",
                boxShadow: tiltStyles[item.id] ? `0 15px 30px ${item.glow}` : "none"
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 cursor-crosshair flex flex-col justify-between aspect-square hover:bg-white/10"
            >
              <div className="flex justify-between items-start">
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-tr text-white", item.color)}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                  </svg>
                </div>
                <span className="text-[7px] font-mono text-zinc-550">0{item.id}</span>
              </div>

              <div className="space-y-1 mt-4">
                <h4 className="text-[10px] font-bold text-white tracking-widest uppercase">{item.title}</h4>
                <p className="text-[8px] text-zinc-500 font-normal leading-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },

  Interactive_FlowingMenu: () => {
    const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);
    const menuItems = [
      { id: 1, title: "BRANDING_CORE", color: "from-pink-500/20 to-purple-500/10", path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
      { id: 2, title: "EDITORIAL_SHOW", color: "from-blue-500/20 to-cyan-500/10", path: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
      { id: 3, title: "KINETIC_MOTION", color: "from-emerald-500/20 to-teal-500/10", path: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" }
    ];

    return (
      <div className="w-full p-8 bg-zinc-955 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[380px] flex flex-col justify-between group relative">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes menu-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-menu-marquee {
            display: flex;
            width: max-content;
            animation: menu-marquee 12s linear infinite;
          }
        `}} />

        <div className="flex justify-between items-start mb-6">
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            FLOWING_ACCORDION_MENU
          </span>
          <span className="text-[9px] font-mono text-zinc-650 uppercase">HOVER_MARQUEE</span>
        </div>

        <div className="flex flex-col border-t border-white/10 my-4">
          {menuItems.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="border-b border-white/10 py-5 transition-all duration-350 cursor-pointer overflow-hidden relative group/item"
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-r transition-all duration-500 -z-10",
                  isHovered ? item.color : "from-transparent to-transparent opacity-0"
                )} />

                <div className="flex justify-between items-center relative z-10 px-2">
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] font-mono text-zinc-550 group-hover/item:text-white transition-colors">0{item.id}</span>
                    <h3 className="text-sm font-black tracking-widest text-zinc-300 group-hover/item:text-white transition-colors uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center text-zinc-600 group-hover/item:border-white/35 group-hover/item:text-white transition-all">
                    &rarr;
                  </div>
                </div>

                <div 
                  style={{
                    maxHeight: isHovered ? "40px" : "0px",
                    opacity: isHovered ? 1 : 0,
                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
                  }}
                  className="overflow-hidden mt-2 relative z-10 px-2 flex items-center border-t border-white/5 pt-2"
                >
                  <div className="animate-menu-marquee">
                    <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-widest whitespace-nowrap mr-8">
                      EXPLORE CORE CREATIVE • KINETIC DAMPING SYSTEM • PROCEDURAL FLUID GRAPHICS •
                    </span>
                    <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-widest whitespace-nowrap mr-8">
                      EXPLORE CORE CREATIVE • KINETIC DAMPING SYSTEM • PROCEDURAL FLUID GRAPHICS •
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },

  Interactive_Lanyard: () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [ropePath, setRopePath] = React.useState("M 150 0 Q 150 70 150 140");
    const [cardPos, setCardPos] = React.useState({ x: 150, y: 140 });
    const [cardRotation, setCardRotation] = React.useState(0);
    const physicsRef = React.useRef({
      x: 150, y: 140,
      vx: 0, vy: 0,
      targetX: 150, targetY: 140,
      rotation: 0, vrot: 0
    });

    React.useEffect(() => {
      let animId: number;
      const step = () => {
        const p = physicsRef.current;
        const anchorX = 150;
        const anchorY = 0;
        const restLength = 130;
        
        const dx = p.x - anchorX;
        const dy = p.y - anchorY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        const springK = 0.08;
        const damping = 0.90;
        const gravity = 0.8;
        
        const forceSpringX = -springK * dx;
        const forceSpringY = -springK * (dist - restLength) * (dy / (dist || 1));
        
        p.vx += forceSpringX;
        p.vy += forceSpringY + gravity;
        
        p.vx *= damping;
        p.vy *= damping;
        
        const pullK = 0.05;
        p.vx += (p.targetX - p.x) * pullK;
        p.vy += (p.targetY - p.y) * pullK;
        
        p.x += p.vx;
        p.y += p.vy;

        const targetRot = p.vx * 1.5;
        p.vrot += (targetRot - p.rotation) * 0.05;
        p.vrot *= 0.85;
        p.rotation += p.vrot;

        const ctrlX = 150 + dx * 0.5;
        const ctrlY = dy * 0.5;

        setRopePath(`M 150 0 Q ${ctrlX} ${ctrlY} ${p.x} ${p.y}`);
        setCardPos({ x: p.x, y: p.y });
        setCardRotation(p.rotation);

        animId = requestAnimationFrame(step);
      };
      
      step();
      return () => cancelAnimationFrame(animId);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      
      const anchorX = 150;
      const dx = mx - anchorX;
      const limit = 90;
      const targetX = anchorX + Math.sign(dx) * Math.min(Math.abs(dx), limit);
      const targetY = Math.max(100, Math.min(my, 200));

      physicsRef.current.targetX = targetX;
      physicsRef.current.targetY = targetY;
    };

    const handleMouseLeave = () => {
      physicsRef.current.targetX = 150;
      physicsRef.current.targetY = 140;
    };

    return (
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full p-8 bg-zinc-955 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[380px] flex flex-col justify-between relative select-none cursor-pointer group"
      >
        <div className="absolute top-4 left-4 z-20">
          <span className="text-[9px] font-mono text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            2D_PHYSICS_LANYARD
          </span>
        </div>

        <div className="relative flex-1 w-full flex items-center justify-center overflow-visible mt-8 min-h-[220px]">
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 300 240">
            <defs>
              <linearGradient id="rope-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <filter id="rope-glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path 
              d={ropePath} 
              fill="none" 
              stroke="url(#rope-grad)" 
              strokeWidth="2" 
              strokeLinecap="round"
              filter="url(#rope-glow)"
              className="opacity-80"
            />
            <circle cx="150" cy="3" r="4" fill="none" stroke="#fff" strokeWidth="1.5" />
          </svg>

          <div 
            style={{
              left: `${cardPos.x}px`,
              top: `${cardPos.y}px`,
              transform: `translate(-50%, 0px) rotate(${cardRotation}deg)`,
              transition: "transform 0.05s ease-out"
            }}
            className="absolute w-40 h-56 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col justify-between shadow-2xl z-20 hover:border-pink-500/50 transition-colors"
          >
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-6 h-3 bg-zinc-850 border border-white/10 rounded-t-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
            </div>

            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-[7px] font-mono text-zinc-500 tracking-wider">SECURE_ID</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_#10b981]" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center py-3 text-center space-y-2">
              <div className="w-14 h-14 rounded-full border border-pink-500/20 bg-zinc-950 flex items-center justify-center p-1.5">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center font-black italic text-white text-[10px]">
                  UIX
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-white uppercase tracking-widest leading-none">VICKOTO AGUILERA</h4>
                <span className="text-[6.5px] font-mono text-zinc-650 uppercase tracking-widest block mt-1">Lead Creative Architect</span>
              </div>
            </div>

            <div className="border-t border-white/5 pt-2 flex justify-between items-center text-[7px] font-mono text-zinc-550">
              <span>SCAN_NODE_404</span>
              <span>VERIFIED OK</span>
            </div>
          </div>
        </div>
      </div>
    );
  },

  Dynamic_BubbleMenu: () => {
    const [expanded, setExpanded] = React.useState(false);
    const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);

    const bubbles = [
      { id: 1, label: "CYBER", color: "from-blue-500 to-cyan-500", shadow: "rgba(59,130,246,0.3)", dx: -70, dy: -60, path: "M9 12l2 2 4-4" },
      { id: 2, label: "SOLAR", color: "from-amber-500 to-orange-500", shadow: "rgba(245,158,11,0.3)", dx: 70, dy: -60, path: "M12 3v1m0 16v1m9-9h-1M4 12H3" },
      { id: 3, label: "FLOW", color: "from-pink-500 to-rose-500", shadow: "rgba(236,72,153,0.3)", dx: -75, dy: 50, path: "M4 4h16v16H4z" },
      { id: 4, label: "GRID", color: "from-emerald-500 to-teal-500", shadow: "rgba(16,185,129,0.3)", dx: 75, dy: 50, path: "M12 2v20M2 12h20" }
    ];

    return (
      <div className="w-full p-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[380px] flex flex-col justify-between group relative select-none">
        <div className="absolute top-4 left-4 z-20">
          <span className="text-[9px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            DYNAMIC_BUBBLE_DOCK
          </span>
        </div>

        <div className="relative flex-1 w-full flex items-center justify-center overflow-visible mt-8 min-h-[220px]">
          <button
            onClick={() => setExpanded(prev => !prev)}
            className={cn(
              "w-16 h-16 rounded-full bg-zinc-900 border flex flex-col items-center justify-center z-20 relative transition-all duration-500",
              expanded 
                ? "border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.3)] rotate-45 scale-105" 
                : "border-white/10 hover:border-zinc-800 hover:scale-105"
            )}
          >
            <div className="w-6 h-6 flex items-center justify-center text-white relative">
              {expanded ? (
                <span className="text-lg font-mono">&times;</span>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              )}
            </div>
            <span className="text-[6.5px] font-mono text-zinc-550 uppercase absolute -bottom-4 tracking-widest">
              {expanded ? "COLLAPSE" : "EXPAND"}
            </span>
          </button>

          {bubbles.map((bubble, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={bubble.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  transform: expanded 
                    ? `translate(${bubble.dx}px, ${bubble.dy}px) scale(${isHovered ? 1.15 : 1})`
                    : "translate(0px, 0px) scale(0)",
                  opacity: expanded ? 1 : 0,
                  transition: `all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${idx * 0.05}s`,
                  boxShadow: expanded ? `0 10px 20px ${bubble.shadow}` : "none",
                  zIndex: isHovered ? 30 : 10
                }}
                className={cn(
                  "absolute w-12 h-12 rounded-full bg-gradient-to-tr text-white flex items-center justify-center cursor-pointer border border-white/10"
                )}
              >
                <div className={cn("absolute inset-0 rounded-full bg-black/35 group-hover:bg-transparent transition-all -z-10", bubble.color)} />
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={bubble.path} />
                </svg>
                
                <div 
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(28px) scale(1)" : "translateY(20px) scale(0.8)",
                    transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)"
                  }}
                  className="absolute pointer-events-none bg-zinc-900 border border-white/10 px-2 py-0.5 rounded text-[8px] font-mono tracking-widest text-white shadow-xl whitespace-nowrap"
                >
                  {bubble.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },

  Dynamic_CardSwap: () => {
    const [cardIndex, setCardIndex] = React.useState(0);
    const [isSwapping, setIsSwapping] = React.useState(false);
    
    const cards = [
      { id: 1, title: "CYBER_CORE_A", tag: "Procedural", color: "from-blue-600 to-indigo-700", spec: "Vector system tracking active." },
      { id: 2, title: "KINETIC_SHADOW_B", tag: "Liquid", color: "from-pink-600 to-rose-700", spec: "Procedural depth blur mesh." },
      { id: 3, title: "SOLAR_WIND_C", tag: "Solar", color: "from-amber-600 to-orange-700", spec: "Dynamic temperature flare telemetry." }
    ];

    const currentCard = cards[cardIndex % cards.length];
    const nextCard = cards[(cardIndex + 1) % cards.length];
    const nextNextCard = cards[(cardIndex + 2) % cards.length];

    const triggerSwap = () => {
      if (isSwapping) return;
      setIsSwapping(true);
      setTimeout(() => {
        setCardIndex(prev => prev + 1);
        setIsSwapping(false);
      }, 550);
    };

    return (
      <div className="w-full p-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[380px] flex flex-col justify-between group relative select-none">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[9px] font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            KINETIC_SWAP_STACK
          </span>
          <span className="text-[9px] font-mono text-zinc-650 uppercase">CLICK TO SWAP</span>
        </div>

        <div className="relative flex-1 w-full flex items-center justify-center overflow-visible mt-6 min-h-[220px]">
          <div 
            style={{
              transform: isSwapping 
                ? "translateY(8px) scale(0.96) rotate(4deg)" 
                : "translateY(16px) scale(0.92) rotate(-4deg)",
              opacity: isSwapping ? 0.6 : 0.3,
              transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
            }}
            className="absolute w-64 h-36 rounded-2xl bg-zinc-900 border border-white/5 shadow-md -z-20 p-5 flex flex-col justify-between"
          >
            <div className="flex justify-between">
              <span className="text-[8px] font-mono text-zinc-600">{nextNextCard.tag}</span>
            </div>
            <h4 className="text-zinc-550 text-sm font-bold tracking-widest uppercase">{nextNextCard.title}</h4>
          </div>

          <div 
            style={{
              transform: isSwapping 
                ? "translateY(0px) scale(1.02) rotate(0deg)" 
                : "translateY(8px) scale(0.96) rotate(3deg)",
              opacity: isSwapping ? 1 : 0.6,
              transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
              zIndex: isSwapping ? 10 : -10
            }}
            className="absolute w-64 h-36 rounded-2xl bg-zinc-900 border border-white/5 shadow-xl p-5 flex flex-col justify-between"
          >
            <div className="flex justify-between">
              <span className="text-[8px] font-mono text-zinc-600">{nextCard.tag}</span>
            </div>
            <h4 className="text-zinc-550 text-sm font-bold tracking-widest uppercase">{nextCard.title}</h4>
          </div>

          <div
            onClick={triggerSwap}
            style={{
              transform: isSwapping 
                ? "translateY(160px) scale(0.85) rotate(15deg)" 
                : "translateY(0px) scale(1.02) rotate(-2deg)",
              opacity: isSwapping ? 0 : 1,
              transition: "all 0.55s cubic-bezier(0.25, 0.8, 0.25, 1.1)",
              zIndex: isSwapping ? -5 : 20
            }}
            className="absolute w-64 h-36 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl p-6 flex flex-col justify-between cursor-pointer hover:border-purple-500/50 transition-colors"
          >
            <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-20", currentCard.color)} />
            <div className="flex justify-between items-start relative z-10">
              <span className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-[8px] font-mono text-zinc-400 rounded">
                {currentCard.tag}
              </span>
              <span className="text-[9px] font-mono text-zinc-650">0{currentCard.id}</span>
            </div>
            
            <div className="relative z-10 space-y-1">
              <h4 className="text-white text-base font-black tracking-widest uppercase">{currentCard.title}</h4>
              <p className="text-[8.5px] text-zinc-400 font-normal leading-normal">{currentCard.spec}</p>
            </div>
          </div>
        </div>
      </div>
    );
  },

  Dynamic_FluidGlass: () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = React.useState(false);

    React.useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      let animationFrameId: number;
      let particles: Array<{ x: number, y: number, r: number, vx: number, vy: number, color: string, alpha: number }> = [];
      
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      const render = () => {
        ctx.fillStyle = 'rgba(9, 9, 11, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        if (isHovered && Math.random() < 0.3) {
          particles.push({
            x: mousePos.x,
            y: mousePos.y,
            r: Math.random() * 25 + 10,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            color: Math.random() > 0.5 ? '#3b82f6' : '#818cf8',
            alpha: 0.6
          });
        }
        
        particles.forEach((p, idx) => {
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= 0.008;
          p.r += 0.2;
          
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 30;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.restore();
          
          if (p.alpha <= 0) particles.splice(idx, 1);
        });
        
        animationFrameId = requestAnimationFrame(render);
      };
      
      render();
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, [isHovered, mousePos]);

    const handleMouseMove = (e: React.MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    return (
      <div 
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full p-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[380px] flex flex-col justify-between relative group cursor-crosshair"
      >
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        <div className="flex justify-between items-start relative z-10">
          <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            CANVAS_LIQUID_BACKDROP
          </span>
          <span className="text-[9px] font-mono text-zinc-650 uppercase">DYNAMIC_FLUID</span>
        </div>

        <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-3 max-w-sm self-center w-full shadow-2xl my-6">
          <div className="flex justify-between items-center">
            <span className="text-[8px] font-mono text-indigo-400 tracking-wider">SECURE_DASHBOARD</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <h3 className="text-white text-base font-black tracking-widest uppercase">LIQUID GLASS CORE</h3>
          <p className="text-zinc-405 text-[10px] leading-relaxed">
            Move your cursor across this container to draw interactive glowing organic fluid ripple fields directly rendered on HTML5 Canvas.
          </p>
        </div>

        <p className="relative z-10 text-zinc-600 text-[7px] font-mono uppercase tracking-widest">
          SYSTEM_STABLE // 120FPS_MODE
        </p>
      </div>
    );
  },

  Dynamic_FolderAccordion: () => {
    const [openFolder, setOpenFolder] = React.useState<number | null>(1);
    
    const folders = [
      { 
        id: 1, 
        name: "CORE_COMPONENTS", 
        count: 3, 
        color: "text-blue-500",
        docs: ["GalleryVariants.tsx", "ButtonVariants.tsx", "component-styles.ts"] 
      },
      { 
        id: 2, 
        name: "DOCUMENTATION_LOGS", 
        count: 2, 
        color: "text-pink-500",
        docs: ["05_ESTADO_Y_TRASPASO.md", "06_MISION_50_20.md"] 
      },
      { 
        id: 3, 
        name: "ASSETS_CYBER_RESO", 
        count: 2, 
        color: "text-amber-500",
        docs: ["cyber_hud_telemetry.svg", "solar_pulse_vector.svg"] 
      }
    ];

    return (
      <div className="w-full p-8 bg-zinc-955 border border-zinc-900 rounded-[2.5rem] overflow-hidden min-h-[380px] flex flex-col justify-between group relative select-none">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[9px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            DYNAMIC_FOLDER_ACCORDION
          </span>
          <span className="text-[9px] font-mono text-zinc-650 uppercase">FILES_DOCK</span>
        </div>

        <div className="flex-1 flex flex-col gap-3 justify-center max-w-sm self-center w-full my-4">
          {folders.map((folder) => {
            const isOpen = openFolder === folder.id;
            return (
              <div 
                key={folder.id} 
                className="border border-white/5 rounded-2xl bg-zinc-900 overflow-hidden transition-all duration-350"
              >
                <button
                  onClick={() => setOpenFolder(isOpen ? null : folder.id)}
                  className="w-full px-5 py-4 flex justify-between items-center hover:bg-white/5 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className={cn("text-lg", folder.color)}>
                      {isOpen ? (
                        <FolderOpen className="w-4.5 h-4.5" />
                      ) : (
                        <Folder className="w-4.5 h-4.5" />
                      )}
                    </span>
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">{folder.name}</span>
                  </div>
                  <span className="text-[8px] font-mono text-zinc-550 uppercase tracking-widest">{folder.count} ITEMS</span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? "160px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
                  }}
                  className="overflow-hidden bg-zinc-950/50"
                >
                  <div className="px-5 py-4 space-y-2 border-t border-white/5">
                    {folder.docs.map((doc, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-zinc-450 hover:text-white transition-colors cursor-pointer">
                        <FileText className="w-3.5 h-3.5 text-zinc-550" />
                        <span className="text-[9px] font-mono">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

const Gallery_Placeholder = ({ label }: { label: string }) => (
  <div className="w-full h-80 rounded-3xl bg-zinc-955 border border-zinc-900 flex flex-col items-center justify-center relative overflow-hidden group select-none">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-40" />
    <div className="absolute -inset-[10px] bg-gradient-to-tr from-pink-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    <span className="text-[10px] font-mono text-zinc-650 bg-zinc-900/50 border border-zinc-850 px-3 py-1 rounded-lg mb-3 tracking-widest uppercase">
      PREMIUM LAYOUT VARIANT
    </span>
    <h4 className="text-zinc-550 text-sm font-bold tracking-widest uppercase group-hover:text-zinc-355 transition-colors">
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
  'Carousel_Placeholder_8',
  'Carousel_Placeholder_9', 'Carousel_Placeholder_10',
  'Mosaic_Placeholder_3', 
  'Mosaic_Placeholder_4', 'Mosaic_Placeholder_5', 'Mosaic_Placeholder_6',
  'Mosaic_Placeholder_7', 'Mosaic_Placeholder_8', 'Mosaic_Placeholder_9',
  'Mosaic_Placeholder_10'
];

placeholderKeys.forEach(key => {
  GalleryVariants[key] = () => <Gallery_Placeholder label={key} />;
});

