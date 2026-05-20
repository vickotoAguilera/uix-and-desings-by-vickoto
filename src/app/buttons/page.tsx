"use client";

import { ButtonVariants } from "@/components/neon/ButtonVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { BUTTON_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ButtonsContent() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && BUTTON_STYLES[selectedStyle as keyof typeof BUTTON_STYLES]
    ? BUTTON_STYLES[selectedStyle as keyof typeof BUTTON_STYLES]
    : Object.keys(ButtonVariants);

  return (
    <div className="p-10 space-y-16 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-[#0fa] to-blue-500 bg-clip-text text-transparent tracking-tighter uppercase">
          {selectedStyle ? `${selectedStyle} Buttons` : "Buttons Catalog"}
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl">
          {selectedStyle 
            ? `Explora variantes del estilo ${selectedStyle}.`
            : "Nuestra colección de botones optimizada para rendimiento. Carga bajo demanda."}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredVariants.map((name, index) => {
          const Component = ButtonVariants[name as keyof typeof ButtonVariants];
          if (!Component) return null;

          return (
            <div key={name} className="flex flex-col gap-4">
              <div className="flex items-center gap-2 px-2">
                <span className="text-xs font-mono text-zinc-600">{(index + 1).toString().padStart(2, '0')}</span>
                <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{name}</h2>
              </div>
              
              <CopyWrapper 
                label="" 
                className="h-48 flex items-center justify-center bg-zinc-900/20 border-zinc-800/40 hover:bg-zinc-900/40"
                code={`// Estilo de Botón: ${name}\n// Requiere Tailwind CSS\n\n<Component />`}
              >
                <LazyComponent fallback={<div className="h-10 w-32 bg-zinc-800 animate-pulse rounded-lg" />}>
                  <Component />
                </LazyComponent>
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

export default function ButtonsPage() {
  return (
    <SafeHydration>
      <Suspense fallback={<div className="p-20 text-center text-zinc-500 animate-pulse">Loading Catalog...</div>}>
        <ButtonsContent />
      </Suspense>
    </SafeHydration>
  );
}
