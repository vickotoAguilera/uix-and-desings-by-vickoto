"use client";

import { PrimitiveVariants } from "@/components/neon/PrimitiveVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { PRIMITIVE_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PrimitivesContent() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && PRIMITIVE_STYLES[selectedStyle as keyof typeof PRIMITIVE_STYLES]
    ? PRIMITIVE_STYLES[selectedStyle as keyof typeof PRIMITIVE_STYLES]
    : Object.keys(PrimitiveVariants);

  return (
    <div className="p-10 space-y-20 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent tracking-tighter uppercase">
          {selectedStyle ? `${selectedStyle} Primitivas` : "Primitivas de Diseño y Micro-Interacciones"}
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl">
          {selectedStyle 
            ? `Explora variantes de primitivas visuales del estilo ${selectedStyle}.`
            : "Efectos perimetrales, reflectores dinámicos, halos luminosos y transiciones líquidas premium para estructurar layouts."}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredVariants.map((name, index) => {
          const Component = PrimitiveVariants[name as keyof typeof PrimitiveVariants];
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
                className="p-0 overflow-hidden border-zinc-800/50 hover:border-zinc-700 bg-transparent rounded-2xl min-h-[220px]"
                code={`// Componente Primitiva Visual: ${name}\n// Requiere Tailwind CSS / CSS Masks\n\n<Component />`}
              >
                <div className="w-full min-h-[220px] overflow-hidden rounded-[15px] bg-zinc-950 flex items-center justify-center p-6 border border-white/5 relative">
                  <div className="w-full">
                    <LazyComponent>
                      <Component />
                    </LazyComponent>
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

export default function PrimitivesPage() {
  return (
    <SafeHydration>
      <Suspense fallback={<div className="p-20 text-center text-zinc-500 animate-pulse">Armando Primitivas y Luces...</div>}>
        <PrimitivesContent />
      </Suspense>
    </SafeHydration>
  );
}
