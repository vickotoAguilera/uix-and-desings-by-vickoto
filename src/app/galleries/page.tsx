"use client";

import { GalleryVariants } from "@/components/neon/GalleryVariants";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import { LazyComponent } from "@/components/neon/LazyComponent";
import { GALLERY_STYLES } from "@/lib/component-styles";
import { useSearchParams } from "next/navigation";

export default function GalleriesPage() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  const filteredVariants = selectedStyle && GALLERY_STYLES[selectedStyle as keyof typeof GALLERY_STYLES]
    ? GALLERY_STYLES[selectedStyle as keyof typeof GALLERY_STYLES]
    : Object.keys(GalleryVariants);

  return (
    <SafeHydration>
      <div className="p-10 space-y-20 max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent tracking-tighter uppercase">
            {selectedStyle ? `${selectedStyle} Galleries` : "Galleries Catalog"}
          </h1>
          <p className="text-zinc-500 text-xl max-w-3xl">
            {selectedStyle 
              ? `Explora variantes del estilo ${selectedStyle}.`
              : "Exhibición de imágenes y contenido multimedia avanzado."}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-24">
          {filteredVariants.map((name, index) => {
            const Component = GalleryVariants[name as keyof typeof GalleryVariants];
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
                  label={`Gallery: ${name}`}
                  className="p-0 overflow-hidden border-zinc-800/50 hover:border-zinc-700 bg-transparent"
                  code={`// Componente Gallery: ${name}\n// Requiere Tailwind CSS\n\n<Component />`}
                >
                  <div className="w-full min-h-[400px]">
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
