# Script de PowerShell para ejecutar Next.js en desarrollo con optimizaciones de memoria

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Iniciando Neon Buttons Demo" -ForegroundColor Cyan
Write-Host "  Modo: Desarrollo (Optimizado para Windows)" -ForegroundColor Cyan
Write-Host "  Memoria: 2GB" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Establecer variables de entorno para PowerShell
$env:NODE_OPTIONS = "--max-old-space-size=2048"
$env:NEXT_TELEMETRY_DISABLED = 1

Write-Host "Compilando con webpack (Turbopack deshabilitado)..." -ForegroundColor Yellow
Write-Host ""

# Ejecutar npm run dev (sin NODE_OPTIONS en el comando)
npm run dev
