"use client";

import { FooterVariants } from "@/components/neon/FooterVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { FOOTER_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function FootersContent() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && FOOTER_STYLES[selectedStyle as keyof typeof FOOTER_STYLES]
    ? FOOTER_STYLES[selectedStyle as keyof typeof FOOTER_STYLES]
    : Object.keys(FooterVariants);

  return (
    <div className="p-10 space-y-20 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent tracking-tighter uppercase">
          {selectedStyle ? `${selectedStyle} Footers` : "Footers Catalog"}
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl">
          {selectedStyle 
            ? `Explora variantes del estilo ${selectedStyle}.`
            : "Secciones de pie de página optimizadas para navegación y SEO."}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-24">
        {filteredVariants.map((name, index) => {
          const Component = FooterVariants[name as keyof typeof FooterVariants];
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
                label={`Footer: ${name}`}
                className="p-0 overflow-hidden border-zinc-800/50 hover:border-zinc-700 bg-transparent"
                code={`// Componente Footer: ${name}\n// Requiere Tailwind CSS y Lucide React\n\n<Component />`}
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

      <footer className="py-20 text-center text-zinc-600 border-t border-zinc-900 mt-20">
        <p>© 2026 UIX SHOWCASE PRO - Catálogo de Componentes</p>
      </footer>
    </div>
  );
}

export default function FootersPage() {
  return (
    <SafeHydration>
      <Suspense fallback={<div className="p-20 text-center text-zinc-500 animate-pulse">Loading Catalog...</div>}>
        <FootersContent />
      </Suspense>
    </SafeHydration>
  );
}
