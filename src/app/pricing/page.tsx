"use client";

import { PricingVariants } from "@/components/neon/PricingVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { PRICING_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PricingContent() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && PRICING_STYLES[selectedStyle as keyof typeof PRICING_STYLES]
    ? PRICING_STYLES[selectedStyle as keyof typeof PRICING_STYLES]
    : Object.keys(PricingVariants);

  return (
    <div className="p-10 space-y-20 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent tracking-tighter uppercase">
          {selectedStyle ? `${selectedStyle} Pricing` : "Pricing Sections Catalog"}
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl">
          {selectedStyle 
            ? `Explora variantes del estilo ${selectedStyle}.`
            : "Modelos de precios para SaaS, E-commerce y servicios profesionales."}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredVariants.map((name, index) => {
          const Component = PricingVariants[name as keyof typeof PricingVariants];
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
                label={`Pricing: ${name}`}
                className="p-0 overflow-hidden border-zinc-800/50 hover:border-zinc-700 bg-transparent"
                code={`// Componente Pricing: ${name}\n// Requiere Tailwind CSS\n\n<Component />`}
              >
                <div className="w-full min-h-[300px]">
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
  );
}

export default function PricingPage() {
  return (
    <SafeHydration>
      <Suspense fallback={<div className="p-20 text-center text-zinc-500 animate-pulse">Loading Catalog...</div>}>
        <PricingContent />
      </Suspense>
    </SafeHydration>
  );
}
