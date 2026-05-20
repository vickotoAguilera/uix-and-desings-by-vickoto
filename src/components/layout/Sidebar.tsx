"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, MousePointer2, Type, ImageIcon, Home, PanelTop, PanelBottom } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { name: 'Inicio', href: '/', icon: Home },
  { name: 'Hero Sections', href: '/heroes', icon: LayoutGrid },
  { name: 'Navbars', href: '/navbars', icon: PanelTop },
  { name: 'Botones', href: '/buttons', icon: MousePointer2 },
  { name: 'Inputs & Forms', href: '/inputs', icon: Type },
  { name: 'Transiciones', href: '/transitions', icon: ImageIcon },
  { name: 'Footers', href: '/footers', icon: PanelBottom },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen sticky top-0 bg-black border-r border-zinc-800 flex flex-col p-6 z-50">
      <div className="mb-10">
        <h2 className="text-2xl font-black bg-gradient-to-r from-[#0fa] to-purple-500 bg-clip-text text-transparent">
          UIX PRO
        </h2>
        <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Design Catalog</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
              pathname === item.href 
                ? "bg-zinc-800 text-[#0fa]" 
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
            )}
          >
            <item.icon size={20} className={cn(
              "transition-colors",
              pathname === item.href ? "text-[#0fa]" : "text-zinc-500 group-hover:text-white"
            )} />
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-zinc-800">
        <div className="p-4 bg-zinc-900/50 rounded-2xl border border-zinc-800/50">
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Workspace</p>
          <p className="text-xs text-zinc-300 font-mono truncate">ias y programas/docs</p>
        </div>
      </div>
    </aside>
  );
};
