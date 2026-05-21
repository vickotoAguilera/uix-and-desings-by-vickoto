"use client";

import { ThreeDVariants } from "@/components/neon/ThreeDVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { THREED_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ThreeDContent() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && THREED_STYLES[selectedStyle as keyof typeof THREED_STYLES]
    ? THREED_STYLES[selectedStyle as keyof typeof THREED_STYLES]
    : Object.keys(ThreeDVariants);

  return (
    <div className="p-10 space-y-20 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent tracking-tighter uppercase">
          {selectedStyle ? `${selectedStyle} Elementos 3D` : "Componentes 3D e Interactivos"}
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl">
          {selectedStyle 
            ? `Explora variantes de componentes 3D del estilo ${selectedStyle}.`
            : "Potenciados por WebGL, HTML5 Canvas y matemáticas avanzadas de proyección para experiencias 3D impactantes."}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {filteredVariants.map((name, index) => {
          const Component = ThreeDVariants[name as keyof typeof ThreeDVariants];
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
                className="p-0 overflow-hidden border-zinc-800/50 hover:border-zinc-700 bg-transparent rounded-2xl min-h-[350px]"
                code={`// Componente 3D WebGL/Canvas: ${name}\n// Requiere OGL / GSAP / Canvas interactivo\n\n<Component />`}
              >
                <div className="w-full h-[350px] overflow-hidden rounded-[15px] bg-zinc-950 flex items-center justify-center relative border border-white/5">
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

export default function ThreeDPage() {
  return (
    <SafeHydration>
      <Suspense fallback={<div className="p-20 text-center text-zinc-500 animate-pulse">Invocando Entornos 3D WebGL...</div>}>
        <ThreeDContent />
      </Suspense>
    </SafeHydration>
  );
}
