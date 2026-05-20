"use client";

import { TransitionVariants } from "@/components/neon/TransitionVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { TRANSITION_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function TransitionsContent() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && TRANSITION_STYLES[selectedStyle as keyof typeof TRANSITION_STYLES]
    ? TRANSITION_STYLES[selectedStyle as keyof typeof TRANSITION_STYLES]
    : Object.keys(TransitionVariants);

  return (
    <div className="p-10 space-y-16 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-[#0fa] to-blue-500 bg-clip-text text-transparent tracking-tighter uppercase">
          {selectedStyle ? `${selectedStyle} Transitions` : "Transitions & Effects Catalog"}
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl">
          {selectedStyle 
            ? `Explora variantes del estilo ${selectedStyle}.`
            : "Colección de efectos de transición optimizada para rendimiento."}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredVariants.map((name, index) => {
          const Component = TransitionVariants[name as keyof typeof TransitionVariants];
          if (!Component) return null;

          return (
            <div key={name} className="flex flex-col gap-6">
              <div className="flex items-center gap-2 px-2">
                <span className="text-xs font-mono text-zinc-600">{(index + 1).toString().padStart(2, '0')}</span>
                <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{name}</h2>
              </div>
              
              <CopyWrapper 
                label="" 
                className="p-0 overflow-hidden border-zinc-800/40 hover:border-[#0fa]/30 transition-all duration-500"
                code={`// Efecto de Transición: ${name}\n// Requiere Tailwind CSS\n\n<Component />`}
              >
                <div className="w-full min-h-[200px]">
                  <LazyComponent fallback={<div className="h-40 w-full bg-zinc-900 animate-pulse rounded-2xl" />}>
                    <Component />
                  </LazyComponent>
                </div>
              </CopyWrapper>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TransitionsPage() {
  return (
    <SafeHydration>
      <Suspense fallback={<div className="p-20 text-center text-zinc-500 animate-pulse">Loading Catalog...</div>}>
        <TransitionsContent />
      </Suspense>
    </SafeHydration>
  );
}
