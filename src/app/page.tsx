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
        <nav className="space-y-4">
          <Link href="/buttons" className="text-blue-400 hover:underline block">
            Botones
          </Link>
          <Link href="/heroes" className="text-blue-400 hover:underline block">
            Héroes
          </Link>
          <Link href="/inputs" className="text-blue-400 hover:underline block">
            Inputs
          </Link>
          <Link href="/transitions" className="text-blue-400 hover:underline block">
            Transiciones
          </Link>
        </nav>
      </div>
    </SafeHydration>
  );
}
