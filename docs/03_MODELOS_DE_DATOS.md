# 03 - Modelos de Datos

## Tipos de Componentes (TypeScript)

### Patrón de Variantes (Showcase)
Los componentes se agrupan en objetos exportados donde cada propiedad es un componente funcional:
```typescript
export const ComponentVariants = {
  VariantName: () => (
    <button className="...">...</button>
  ),
  // ...
}
```
Este patrón facilita la iteración y visualización dinámica en las páginas de showcase.

### Estructura de Showcase (Páginas)
- `ShowcaseSections`: Componente que mapea las variantes y las envuelve en `CopyWrapper`.
- `CopyWrapper`: Gestiona el estado de copia y muestra el código fuente del componente.

## Estado Global
- No se detecta Redux/Zustand aún. Se asume manejo de estado local de React para interacciones simples.

## Configuración de Temas
- Definido principalmente en `tailwind.config.ts` y `globals.css` (variables CSS para neón y colores personalizados).
