"use client";

import { CursorVariants } from "@/components/neon/CursorVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { CURSOR_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CursorsContent() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && CURSOR_STYLES[selectedStyle as keyof typeof CURSOR_STYLES]
    ? CURSOR_STYLES[selectedStyle as keyof typeof CURSOR_STYLES]
    : Object.keys(CursorVariants);

  return (
    <div className="p-10 space-y-20 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-pink-400 via-rose-500 to-purple-500 bg-clip-text text-transparent tracking-tighter uppercase">
          {selectedStyle ? `${selectedStyle} Cursores` : "Cursores e Interacciones de Puntero"}
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl">
          {selectedStyle 
            ? `Explora variantes de cursores interactivos del estilo ${selectedStyle}.`
            : "Efectos magnéticos, chispas al hacer click, estelas de imágenes y burbujas de resplandor para el mouse."}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {filteredVariants.map((name, index) => {
          const Component = CursorVariants[name as keyof typeof CursorVariants];
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
                code={`// Componente Cursor Interactivo: ${name}\n// Requiere GSAP y animaciones en Canvas/DOM\n\n<Component />`}
              >
                <div className="w-full h-[300px] overflow-hidden rounded-[15px] bg-zinc-950 flex items-center justify-center relative border border-white/5">
                  <div className="w-full h-full">
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

export default function CursorsPage() {
  return (
    <SafeHydration>
      <Suspense fallback={<div className="p-20 text-center text-zinc-500 animate-pulse">Cargando Estructuras de Puntero...</div>}>
        <CursorsContent />
      </Suspense>
    </SafeHydration>
  );
}
