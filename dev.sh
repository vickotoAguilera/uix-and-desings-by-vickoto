#!/bin/bash
# Script para ejecutar Next.js en desarrollo con optimizaciones de memoria en macOS/Linux

echo ""
echo "========================================"
echo "  Iniciando Neon Buttons Demo"
echo "  Modo: Desarrollo (Optimizado)"
echo "  Memoria: 2GB"
echo "========================================"
echo ""

# Establecer variables de entorno
export NODE_OPTIONS="--max-old-space-size=2048"
export NEXT_TELEMETRY_DISABLED=1

# Ejecutar Next.js
echo "Compilando con webpack (Turbopack deshabilitado)..."
echo ""

npm run dev
