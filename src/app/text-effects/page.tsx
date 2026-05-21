"use client";

import { TextVariants } from "@/components/neon/TextVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { TEXT_EFFECT_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function TextEffectsContent() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && TEXT_EFFECT_STYLES[selectedStyle as keyof typeof TEXT_EFFECT_STYLES]
    ? TEXT_EFFECT_STYLES[selectedStyle as keyof typeof TEXT_EFFECT_STYLES]
    : Object.keys(TextVariants);

  return (
    <div className="p-10 space-y-20 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent tracking-tighter uppercase">
          {selectedStyle ? `${selectedStyle} Efectos de Texto` : "Efectos de Texto Creativos"}
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl">
          {selectedStyle 
            ? `Explora variantes de efectos tipográficos del estilo ${selectedStyle}.`
            : "Efectos interactivos de compresión, distorsión, matrix y focus blur para interfaces dinámicas."}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {filteredVariants.map((name, index) => {
          const Component = TextVariants[name as keyof typeof TextVariants];
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
                className="p-0 overflow-hidden border-zinc-800/50 hover:border-zinc-700 bg-transparent rounded-2xl min-h-[200px]"
                code={`// Componente Texto Animado: ${name}\n// Requiere Framer Motion y Tailwind CSS\n\n<Component />`}
              >
                <div className="w-full min-h-[200px] flex items-center justify-center p-6 bg-zinc-950 rounded-[15px] border border-white/5 relative">
                  <div className="w-full">
                    <LazyComponent>
                      <Component />
                    </LazyComponent>
                  </div>
                  <div className="absolute bottom-3 right-4 z-10 px-2 py-0.5 bg-black/60 border border-white/10 rounded text-[10px] text-white/60">
                    Tipografía Activa ⚡
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

export default function TextEffectsPage() {
  return (
    <SafeHydration>
      <Suspense fallback={<div className="p-20 text-center text-zinc-500 animate-pulse">Cargando Efectos Tipográficos...</div>}>
        <TextEffectsContent />
      </Suspense>
    </SafeHydration>
  );
}
