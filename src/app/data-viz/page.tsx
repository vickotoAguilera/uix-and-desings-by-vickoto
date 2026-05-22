"use client";

import { DataVizVariants } from "@/components/neon/DataVizVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { DATA_VIZ_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function DataVizContent() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && DATA_VIZ_STYLES[selectedStyle as keyof typeof DATA_VIZ_STYLES]
    ? DATA_VIZ_STYLES[selectedStyle as keyof typeof DATA_VIZ_STYLES]
    : Object.keys(DataVizVariants);

  return (
    <div className="p-10 space-y-20 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 via-emerald-500 to-cyan-500 bg-clip-text text-transparent tracking-tighter uppercase italic">
          {selectedStyle ? `${selectedStyle} DATA VIZ` : "Data Visualization & Charts"}
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl">
          {selectedStyle 
            ? `Visualización de datos avanzada y dashboards interactivos del estilo ${selectedStyle}.`
            : "Exploración de gráficas dinámicas, métricas de rendimiento y flujos de datos con estética neon-pro."}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-32">
        {filteredVariants.map((name, index) => {
          const Component = DataVizVariants[name as keyof typeof DataVizVariants];
          if (!Component) return null;
          
          return (
            <div key={name} className="space-y-8">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-black text-zinc-800 italic">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h2 className="text-3xl font-black text-zinc-300 uppercase tracking-tighter italic">
                    {name}
                  </h2>
                </div>
              </div>

              <CopyWrapper
                label={`Variante: ${name}`}
                className="p-0 overflow-hidden border-zinc-800/50 hover:border-zinc-700 bg-transparent rounded-[3rem] shadow-2xl"
                code={`// Componente Data Viz: ${name}\n// Requiere Lucide-React y Tailwind CSS\n\n<Component />`}
              >
                <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-black isolate min-h-[600px]">
                  <LazyComponent>
                    <Component />
                  </LazyComponent>
                  <div className="absolute bottom-8 right-8 z-10 px-6 py-2 bg-blue-600 border border-blue-400/50 rounded-full text-xs font-black text-white select-none shadow-xl shadow-blue-500/20 uppercase italic">
                    Live Data Preview 📊
                  </div>
                </div>
              </CopyWrapper>
            </div>
          );
        })}
      </div>

      <footer className="py-20 text-center text-zinc-600 border-t border-zinc-900 mt-20">
        <p>© 2026 UIX SHOWCASE PRO - Data Visualization Category</p>
      </footer>
    </div>
  );
}

export default function DataVizPage() {
  return (
    <SafeHydration>
      <Suspense fallback={<div className="p-20 text-center text-zinc-500 animate-pulse">Cargando Componentes de Visualización...</div>}>
        <DataVizContent />
      </Suspense>
    </SafeHydration>
  );
}
