import { NeonButton } from "@/components/neon/NeonButtons";
import { NesButton, GlitchButton, CassetteButton, BentoButton } from "@/components/neon/ExternalButtons";
import { HeroSection, ImageTransitionDemo } from "@/components/neon/ShowcaseSections";
import { GlowingInput } from "@/components/neon/GlowingInput";
import { CopyWrapper } from "@/components/neon/CopyWrapper";
import { SafeHydration } from "@/components/neon/SafeHydration";
import Link from 'next/link';

export default function Home() {
  return (
    <SafeHydration>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-8">Bienvenido a Neon Buttons Demo</h1>
        <p className="mb-4">Selecciona una categoría para explorar:</p>
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 text-white">Sobre UIX PRO CATALOG</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Bienvenido a la biblioteca definitiva de componentes de interfaz de usuario. 
              Este catálogo ha sido diseñado para desarrolladores y diseñadores que buscan 
              inspiración y componentes listos para usar con un enfoque en estéticas modernas, 
              desde el minimalismo suizo hasta el cyberpunk más agresivo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-4">
                <h3 className="text-emerald-500 font-bold uppercase tracking-widest">Tecnología Base</h3>
                <ul className="text-zinc-500 space-y-2">
                  <li>• Next.js 16.2.6 (Turbopack)</li>
                  <li>• Tailwind CSS para estilos atómicos</li>
                  <li>• Lucide React para iconografía</li>
                  <li>• TypeScript para un tipado riguroso</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-blue-500 font-bold uppercase tracking-widest">Características</h3>
                <ul className="text-zinc-500 space-y-2">
                  <li>• +260 Variantes de componentes</li>
                  <li>• Carga optimizada vía Lazy Loading</li>
                  <li>• Copy-paste de código instantáneo</li>
                  <li>• Diseño responsivo y modular</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 transition-colors">
              <h3 className="text-xl font-bold mb-2">Explora</h3>
              <p className="text-zinc-500 text-sm">Navega por las categorías en el panel lateral para descubrir cientos de estilos únicos.</p>
            </div>
            <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-bold mb-2">Copia</h3>
              <p className="text-zinc-500 text-sm">Usa el sistema de CopyWrapper para llevarte el código directamente a tu proyecto.</p>
            </div>
            <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-purple-500/50 transition-colors">
              <h3 className="text-xl font-bold mb-2">Personaliza</h3>
              <p className="text-zinc-500 text-sm">Todos los componentes son altamente modulares y fáciles de adaptar a tu marca.</p>
            </div>
          </section>
        </div>
      </div>
    </SafeHydration>
  );
}
