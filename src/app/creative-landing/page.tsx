"use client";

import { CreativeLandingVariants } from "@/components/neon/CreativeLandingVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { CREATIVE_LANDING_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CreativeLandingContent() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && CREATIVE_LANDING_STYLES[selectedStyle as keyof typeof CREATIVE_LANDING_STYLES]
    ? CREATIVE_LANDING_STYLES[selectedStyle as keyof typeof CREATIVE_LANDING_STYLES]
    : Object.keys(CreativeLandingVariants);

  return (
    <div className="p-10 space-y-20 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-rose-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-tighter uppercase italic">
          {selectedStyle ? `${selectedStyle} Landing` : "Creative Landing Essentials"}
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl">
          {selectedStyle 
            ? `Secciones de landing page de alta fidelidad del estilo ${selectedStyle}.`
            : "Secciones premium para landing pages con animaciones avanzadas, layouts bento y componentes de conversión."}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-32">
        {filteredVariants.map((name, index) => {
          const Component = CreativeLandingVariants[name as keyof typeof CreativeLandingVariants];
          if (!Component) return null;
          
          return (
            <div key={name} className="space-y-8">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-black text-zinc-800 italic">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h2 className="text-3xl font-black text-zinc-300 uppercase tracking-tighter italic">
                    {name}
                  </h2>
                </div>
              </div>

              <CopyWrapper
                label={`Variante: ${name}`}
                className="p-0 overflow-hidden border-zinc-800/50 hover:border-zinc-700 bg-transparent rounded-[3rem] shadow-2xl"
                code={`// Componente Landing: ${name}\n// Requiere Lucide-React y Tailwind CSS\n\n<Component />`}
              >
                <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-zinc-950 isolate min-h-[600px]">
                  <LazyComponent>
                    <Component />
                  </LazyComponent>
                  <div className="absolute bottom-8 right-8 z-10 px-6 py-2 bg-rose-600 border border-rose-400/50 rounded-full text-xs font-black text-white select-none shadow-xl shadow-rose-500/20 uppercase italic">
                    Studio Preview ✨
                  </div>
                </div>
              </CopyWrapper>
            </div>
          );
        })}
      </div>

      <footer className="py-20 text-center text-zinc-600 border-t border-zinc-900 mt-20">
        <p>© 2026 UIX SHOWCASE PRO - Creative Landing Category</p>
      </footer>
    </div>
  );
}

export default function CreativeLandingPage() {
  return (
    <SafeHydration>
      <Suspense fallback={<div className="p-20 text-center text-zinc-500 animate-pulse">Cargando Componentes de Landing...</div>}>
        <CreativeLandingContent />
      </Suspense>
    </SafeHydration>
  );
}
