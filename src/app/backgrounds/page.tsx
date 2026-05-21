"use client";

import { BackgroundVariants } from "@/components/neon/BackgroundVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { BACKGROUND_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function BackgroundsContent() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && BACKGROUND_STYLES[selectedStyle as keyof typeof BACKGROUND_STYLES]
    ? BACKGROUND_STYLES[selectedStyle as keyof typeof BACKGROUND_STYLES]
    : Object.keys(BackgroundVariants);

  return (
    <div className="p-10 space-y-20 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-emerald-400 via-teal-500 to-indigo-500 bg-clip-text text-transparent tracking-tighter uppercase">
          {selectedStyle ? `${selectedStyle} Fondos` : "Catálogo de Fondos Interactivos"}
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl">
          {selectedStyle 
            ? `Explora variantes de fondos interactivos del estilo ${selectedStyle}.`
            : "Fondos inmersivos, reactivos al cursor y basados en WebGL/Canvas para tus proyectos."}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {filteredVariants.map((name, index) => {
          const Component = BackgroundVariants[name as keyof typeof BackgroundVariants];
          if (!Component) return null;
          
          return (
            <div key={name} className="space-y-6">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-zinc-800">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-bold text-zinc-300 uppercase tracking-widest">
                    {name}
                  </h2>
                </div>
              </div>

              <CopyWrapper
                label={`Variante: ${name}`}
                className="p-0 overflow-hidden border-zinc-800/50 hover:border-zinc-700 bg-transparent rounded-2xl min-h-[300px]"
                code={`// Componente Fondo: ${name}\n// Requiere OGL / GSAP y WebGL\n\n<Component />`}
              >
                <div className="relative w-full h-[300px] overflow-hidden rounded-[15px] bg-zinc-950 flex items-center justify-center isolate">
                  <LazyComponent>
                    <Component />
                  </LazyComponent>
                  <div className="absolute bottom-4 left-4 z-10 px-3 py-1 bg-black/60 border border-white/10 rounded-full text-xs text-white/80 select-none">
                    Preview en Vivo ⚡
                  </div>
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
  );
}

export default function BackgroundsPage() {
  return (
    <SafeHydration>
      <Suspense fallback={<div className="p-20 text-center text-zinc-500 animate-pulse">Cargando Fondos...</div>}>
        <BackgroundsContent />
      </Suspense>
    </SafeHydration>
  );
}
