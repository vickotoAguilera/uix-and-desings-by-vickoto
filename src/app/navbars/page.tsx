"use client";

import { NavbarVariants } from "@/components/neon/NavbarVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";

export default function NavbarsPage() {
  return (
    <SafeHydration>
      <div className="p-10 space-y-20 max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent tracking-tighter">
            NAVIGATION BARS CATALOG
          </h1>
          <p className="text-zinc-500 text-xl max-w-3xl">
            Navegaciones modernas y minimalistas cargadas de forma inteligente para mayor fluidez.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-24">
          {Object.keys(NavbarVariants).map((name, index) => {
            const Component = NavbarVariants[name as keyof typeof NavbarVariants];
            return (
              <div key={name} className="space-y-6">
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-zinc-800">{(index + 1).toString().padStart(2, '0')}</span>
                    <h2 className="text-xl font-bold text-zinc-300 uppercase tracking-widest">{name}</h2>
                  </div>
                </div>
                
                <CopyWrapper 
                  label={`Navbar: ${name}`} 
                  className="p-0 overflow-hidden border-zinc-800/50 hover:border-zinc-700 bg-transparent"
                  code={`// Componente Navbar: ${name}\n// Requiere Tailwind CSS y Lucide React\n\n// Copia el código del catálogo y adáptalo a tu proyecto.`}
                >
                  <div className="w-full min-h-[64px]">
                    <LazyComponent fallback={<div className="h-16 w-full bg-zinc-900/50 animate-pulse rounded-xl" />}>
                      <Component />
                    </LazyComponent>
                  </div>
                </CopyWrapper>
              </div>
            );
          })}
        </div>

        <footer className="py-20 text-center text-zinc-600 border-t border-zinc-900 mt-20">
          <p>© 2026 UIX SHOWCASE PRO - Catálogo de Componentes</p>
        </footer>
      </div>
    </SafeHydration>
  );
}
