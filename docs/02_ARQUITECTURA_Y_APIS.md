# 02 - Arquitectura y APIs

## Estructura de Directorios
- `src/app/`: Rutas de la aplicación (Next.js App Router). Cada categoría de componentes tiene su propia página.
- `src/components/neon/`: Biblioteca de componentes categorizada por tipo (Buttons, Heroes, Inputs, etc.).
- `src/components/layout/`: Componentes globales de interfaz (Sidebar, Layout).
- `src/lib/`: Funciones de utilidad y configuración.

## Patrones de Diseño
- **Atomic Design (Simplificado):** Componentes base en `neon/` consumidos por páginas de showcase.
- **Showcase Pattern:** Uso de `CopyWrapper` para envolver componentes y proporcionar funcionalidad de "ver código" y "copiar".
- **Dynamic Variants:** Los componentes suelen recibir props para cambiar su estilo o usan nombres de variantes predefinidos.

## Integraciones
- **Tailwind CSS v4:** Gestión de estilos mediante `@theme` en `globals.css` en lugar de `tailwind.config.js`.
- **Lucide-React:** Set de iconos estándar.
- **Next.js 16.2.6:** Framework base (App Router).

## Animaciones Personalizadas
- `flicker`: Efecto de parpadeo neón verde.
- `pulsate`: Efecto de pulsación neón verde.
- `subtle-flicker`: Parpadeo rápido neón rosa.

## APIs y Datos
- Proyecto principalmente estático/cliente; no se han definido APIs externas aún.
