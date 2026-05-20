"use client";

import { HeroVariants } from "@/components/neon/HeroVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { HERO_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";

export default function HeroesPage() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && HERO_STYLES[selectedStyle as keyof typeof HERO_STYLES]
    ? HERO_STYLES[selectedStyle as keyof typeof HERO_STYLES]
    : Object.keys(HeroVariants);

  return (
    <SafeHydration>
      <div className="p-10 space-y-20 max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent tracking-tighter uppercase">
            {selectedStyle ? `${selectedStyle} Heroes` : "Hero Sections Catalog"}
          </h1>
          <p className="text-zinc-500 text-xl max-w-3xl">
            {selectedStyle 
              ? `Explora variantes del estilo ${selectedStyle}.`
              : "Explora nuestra colección de +70 secciones hero organizadas por estilo."}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-32">
          {filteredVariants.map((name, index) => {
            const Component = HeroVariants[name as keyof typeof HeroVariants];
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
                  className="p-0 overflow-hidden border-zinc-800/50 hover:border-zinc-700 bg-transparent"
                  code={`// Componente Hero: ${name}\n// Requiere Tailwind CSS\n\n<Component />`}
                >
                  <div className="w-full">
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
