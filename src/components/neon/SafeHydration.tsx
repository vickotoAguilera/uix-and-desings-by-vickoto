"use client";

import { useEffect, useState } from "react";

/**
 * Componente para prevenir errores de hidratación en Next.js.
 * Útil cuando se renderizan componentes complejos que pueden ser afectados por extensiones del navegador
 * o que dependen de APIs del cliente.
 */
export function SafeHydration({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Retornamos un placeholder con la misma estructura básica para evitar saltos visuales bruscos
    return (
      <div className="opacity-0">
        {children}
      </div>
    );
  }

  return <>{children}</>;
}
