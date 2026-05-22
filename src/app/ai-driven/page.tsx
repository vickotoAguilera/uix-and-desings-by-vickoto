"use client";

import { AIDrivenVariants } from "@/components/neon/AIDrivenVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { AIDRIVEN_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function AIDrivenContent() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && AIDRIVEN_STYLES[selectedStyle as keyof typeof AIDRIVEN_STYLES]
    ? AIDRIVEN_STYLES[selectedStyle as keyof typeof AIDRIVEN_STYLES]
    : Object.keys(AIDrivenVariants);

  return (
    <div className="p-10 space-y-20 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-tighter uppercase">
          {selectedStyle ? `${selectedStyle} AI-Driven` : "Catálogo de Componentes AI-Driven"}
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl">
          {selectedStyle 
            ? `Explora variantes de interfaces diseñadas para flujos de IA y orquestación del estilo ${selectedStyle}.`
            : "Interfaces avanzadas para flujos de agentes, orquestación de prompts y visualización de redes neuronales."}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-24">
        {filteredVariants.map((name, index) => {
          const Component = AIDrivenVariants[name as keyof typeof AIDrivenVariants];
          if (!Component) return null;
          
          return (
            <div key={name} className="space-y-8">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-black text-zinc-800">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h2 className="text-3xl font-black text-zinc-300 uppercase tracking-tighter italic">
                    {name}
                  </h2>
                </div>
              </div>

              <CopyWrapper
                label={`Variante: ${name}`}
                className="p-0 overflow-hidden border-zinc-800/50 hover:border-zinc-700 bg-transparent rounded-[2.5rem] shadow-2xl"
                code={`// Componente AI-Driven: ${name}\n// Requiere Lucide-React y Tailwind CSS\n\n<Component />`}
              >
                <div className="relative w-full overflow-hidden rounded-[2rem] bg-zinc-950 isolate min-h-[600px]">
                  <LazyComponent>
                    <Component />
                  </LazyComponent>
                  <div className="absolute bottom-8 right-8 z-10 px-4 py-2 bg-blue-600 border border-blue-400/50 rounded-full text-xs font-black text-white select-none shadow-xl shadow-blue-500/20">
                    Preview en Vivo ⚡
                  </div>
                </div>
              </CopyWrapper>
            </div>
          );
        })}
      </div>

      <footer className="py-20 text-center text-zinc-600 border-t border-zinc-900 mt-20">
        <p>© 2026 UIX SHOWCASE PRO - AI-Driven Category</p>
      </footer>
    </div>
  );
}

export default function AIDrivenPage() {
  return (
    <SafeHydration>
      <Suspense fallback={<div className="p-20 text-center text-zinc-500 animate-pulse">Cargando Componentes AI...</div>}>
        <AIDrivenContent />
      </Suspense>
    </SafeHydration>
  );
}
