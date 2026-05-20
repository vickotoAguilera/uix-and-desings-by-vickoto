@echo off
REM Script para ejecutar Next.js en desarrollo con optimizaciones de memoria en Windows
setlocal enabledelayedexpansion

echo.
echo ========================================
echo   Iniciando Neon Buttons Demo
echo   Modo: Desarrollo (Optimizado para Windows)
echo   Memoria: 2GB
echo ========================================
echo.

REM Establecer variables de entorno para Windows
set NODE_OPTIONS=--max-old-space-size=2048
set NEXT_TELEMETRY_DISABLED=1

REM Ejecutar Next.js
echo Compilando con webpack (Turbopack deshabilitado)...
echo.

call npm run dev

pause
