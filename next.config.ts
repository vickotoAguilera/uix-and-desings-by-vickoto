import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Marcar uix_and_designs como paquete externo del servidor
  serverExternalPackages: ["uix_and_designs"],

  // Usar Turbopack con configuración por defecto
  // Las exclusiones de archivo se manejan en .watchmanconfig y .env.local
  turbopack: {},
};

export default nextConfig;
