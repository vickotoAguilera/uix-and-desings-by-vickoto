"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutGrid, 
  MousePointer2, 
  Type, 
  ImageIcon, 
  Home, 
  PanelTop, 
  PanelBottom,
  Tag,
  MessageSquare,
  Images,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useImageMode } from '@/context/ImageContext';
import { 
  HERO_STYLES, 
  NAVBAR_STYLES, 
  BUTTON_STYLES, 
  PRICING_STYLES, 
  TESTIMONIAL_STYLES, 
  GALLERY_STYLES,
  INPUT_STYLES,
  TRANSITION_STYLES,
  FOOTER_STYLES
} from '@/lib/component-styles';

const menuItems = [
  { name: 'Inicio', href: '/', icon: Home },
  { 
    name: 'Hero Sections', 
    href: '/heroes', 
    icon: LayoutGrid,
    subItems: Object.keys(HERO_STYLES).map(style => ({
      name: style,
      href: `/heroes?style=${style}`
    }))
  },
  { 
    name: 'Navbars', 
    href: '/navbars', 
    icon: PanelTop,
    subItems: Object.keys(NAVBAR_STYLES).map(style => ({
      name: style,
      href: `/navbars?style=${style}`
    }))
  },
  { 
    name: 'Botones', 
    href: '/buttons', 
    icon: MousePointer2,
    subItems: Object.keys(BUTTON_STYLES).map(style => ({
      name: style,
      href: `/buttons?style=${style}`
    }))
  },
  { 
    name: 'Inputs & Forms', 
    href: '/inputs', 
    icon: Type,
    subItems: Object.keys(INPUT_STYLES).map(style => ({
      name: style,
      href: `/inputs?style=${style}`
    }))
  },
  { 
    name: 'Transiciones', 
    href: '/transitions', 
    icon: ImageIcon,
    subItems: Object.keys(TRANSITION_STYLES).map(style => ({
      name: style,
      href: `/transitions?style=${style}`
    }))
  },
  { 
    name: 'Pricing', 
    href: '/pricing', 
    icon: Tag,
    subItems: Object.keys(PRICING_STYLES).map(style => ({
      name: style,
      href: `/pricing?style=${style}`
    }))
  },
  { 
    name: 'Testimonials', 
    href: '/testimonials', 
    icon: MessageSquare,
    subItems: Object.keys(TESTIMONIAL_STYLES).map(style => ({
      name: style,
      href: `/testimonials?style=${style}`
    }))
  },
  { 
    name: 'Galleries', 
    href: '/galleries', 
    icon: Images,
    subItems: Object.keys(GALLERY_STYLES).map(style => ({
      name: style,
      href: `/galleries?style=${style}`
    }))
  },
  { 
    name: 'Footers', 
    href: '/footers', 
    icon: PanelBottom,
    subItems: Object.keys(FOOTER_STYLES).map(style => ({
      name: style,
      href: `/footers?style=${style}`
    }))
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>(['Hero Sections']);
  const { showPhotos, togglePhotos } = useImageMode();

  const toggleExpand = (name: string) => {
    setExpandedItems(prev => 
      prev.includes(name) 
        ? prev.filter(i => i !== name) 
        : [...prev, name]
    );
  };

  return (
    <aside className="w-72 h-screen bg-black border-r border-zinc-900 flex flex-col sticky top-0 overflow-y-auto custom-scrollbar">
      <div className="p-8">
        <h1 className="text-2xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent italic tracking-tighter">
          UIX PRO
        </h1>
        <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] mt-1">Design Catalog</p>
      </div>

      <nav className="flex-1 px-4 space-y-2 pb-20">
        {menuItems.map((item) => {
          const isExpanded = expandedItems.includes(item.name);
          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isActive = pathname === item.href;

          return (
            <div key={item.name} className="space-y-1">
              {hasSubItems ? (
                <button
                  onClick={() => toggleExpand(item.name)}
                  className={cn(
                    "w-full flex items-center justify-between p-3 rounded-xl transition-all group",
                    isExpanded ? "bg-zinc-900/50 text-emerald-400" : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className={cn(isExpanded ? "text-emerald-500" : "group-hover:text-emerald-500")} />
                    <span className="text-sm font-bold tracking-tight">{item.name}</span>
                  </div>
                  {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-xl transition-all group",
                    isActive ? "bg-zinc-900 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300"
                  )}
                >
                  <item.icon size={18} className={isActive ? "text-emerald-500" : "group-hover:text-emerald-500"} />
                  <span className="text-sm font-bold tracking-tight">{item.name}</span>
                </Link>
              )}

              {hasSubItems && isExpanded && (
                <div className="ml-9 space-y-1 border-l border-zinc-800/50 pl-2">
                  {item.subItems?.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className={cn(
                        "block p-2 text-xs font-medium rounded-lg transition-all",
                        pathname === sub.href.split('?')[0] && pathname !== '/' // Basic active check for sub-items
                          ? "text-emerald-400 bg-zinc-900/30"
                          : "text-zinc-600 hover:text-zinc-400 hover:bg-zinc-900/20"
                      )}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-900 bg-black/50 backdrop-blur-md space-y-2">
        <button 
          onClick={togglePhotos}
          className={cn(
            "w-full flex items-center justify-between p-3 rounded-xl transition-all border",
            showPhotos 
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20" 
              : "bg-zinc-900/50 border-zinc-800/50 text-zinc-500 hover:bg-zinc-900"
          )}
        >
          <div className="flex items-center gap-3">
            <Images size={16} className={showPhotos ? "text-emerald-500" : "text-zinc-600"} />
            <span className="text-xs font-bold uppercase tracking-wider">
              {showPhotos ? "Photos Enabled" : "Photos Disabled"}
            </span>
          </div>
          <div className={cn(
            "w-8 h-4 rounded-full relative transition-colors duration-300",
            showPhotos ? "bg-emerald-500" : "bg-zinc-700"
          )}>
            <div className={cn(
              "absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all duration-300",
              showPhotos ? "left-4.5" : "left-0.5"
            )} />
          </div>
        </button>

        <div className="p-4 bg-zinc-900/50 rounded-2xl border border-zinc-800/50">
          <p className="text-[10px] font-black text-zinc-700 uppercase tracking-widest mb-1">Workspace</p>
          <p className="text-[11px] text-zinc-500 truncate italic">S: Pro_v1.0 / Build_2026</p>
        </div>
      </div>
    </aside>
  );
};
