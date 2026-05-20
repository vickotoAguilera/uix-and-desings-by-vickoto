"use client";

import { TransitionVariants } from "@/components/neon/TransitionVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { TRANSITION_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";

export default function TransitionsPage() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && TRANSITION_STYLES[selectedStyle as keyof typeof TRANSITION_STYLES]
    ? TRANSITION_STYLES[selectedStyle as keyof typeof TRANSITION_STYLES]
    : Object.keys(TransitionVariants);

  return (
    <SafeHydration>
      <div className="p-10 space-y-20 max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent tracking-tighter uppercase">
            {selectedStyle ? `${selectedStyle} Transitions` : "Transitions & Effects Catalog"}
          </h1>
          <p className="text-zinc-500 text-xl max-w-3xl">
            {selectedStyle 
              ? `Explora variantes del estilo ${selectedStyle}.`
              : "Micro-interacciones y efectos de transición para elevar la UX de tu aplicación."}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredVariants.map((name, index) => {
            const Component = TransitionVariants[name as keyof typeof TransitionVariants];
            if (!Component) return null;

            return (
              <div key={name} className="space-y-6">
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-black text-zinc-800">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <h2 className="text-lg font-bold text-zinc-300 uppercase tracking-widest">
                      {name}
                    </h2>
                  </div>
                </div>

                <CopyWrapper
                  label={`Transition: ${name}`}
                  className="p-0 overflow-hidden border-zinc-800/50 hover:border-zinc-700 bg-transparent aspect-video"
                  code={`// Componente Transition: ${name}\n// Requiere Tailwind CSS\n\n<Component />`}
                >
                  <div className="w-full h-full flex items-center justify-center bg-zinc-900/10">
                    <LazyComponent>
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
