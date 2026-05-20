"use client";

import { InputVariants } from "@/components/neon/InputVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { INPUT_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function InputsContent() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && INPUT_STYLES[selectedStyle as keyof typeof INPUT_STYLES]
    ? INPUT_STYLES[selectedStyle as keyof typeof INPUT_STYLES]
    : Object.keys(InputVariants);

  return (
    <div className="p-10 space-y-16 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent tracking-tighter uppercase">
          {selectedStyle ? `${selectedStyle} Inputs` : "Inputs & Forms Catalog"}
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl">
          {selectedStyle 
            ? `Explora variantes del estilo ${selectedStyle}.`
            : "Colección de inputs y formularios cargados bajo demanda."}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredVariants.map((name, index) => {
          const Component = InputVariants[name as keyof typeof InputVariants];
          if (!Component) return null;

          return (
            <div key={name} className="flex flex-col gap-6">
              <div className="flex items-center gap-2 px-2">
                <span className="text-xs font-mono text-zinc-600">{(index + 1).toString().padStart(2, '0')}</span>
                <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{name}</h2>
              </div>
              
              <CopyWrapper 
                label="" 
                className="h-40 flex items-center justify-center bg-zinc-900/10 border-zinc-800/40 hover:bg-zinc-900/20 px-8"
                code={`// Estilo de Input: ${name}\n// Requiere Tailwind CSS\n\n<Component />`}
              >
                <LazyComponent fallback={<div className="h-10 w-full bg-zinc-800 animate-pulse rounded-lg" />}>
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

export default function InputsPage() {
  return (
    <SafeHydration>
      <Suspense fallback={<div className="p-20 text-center text-zinc-500 animate-pulse">Loading Catalog...</div>}>
        <InputsContent />
      </Suspense>
    </SafeHydration>
  );
}
