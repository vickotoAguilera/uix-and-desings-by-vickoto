# 🚀 Guía de Ejecución - Neon Buttons Demo

## Problema Identificado

En Windows PowerShell, la sintaxis `NODE_OPTIONS=valor` no es reconocida. Hemos creado scripts específicos para cada plataforma.

---

## ✅ Opciones de Ejecución

### **Opción 1: Windows PowerShell (Recomendado)**

```powershell
npm run dev:ps
```

O manualmente:

```powershell
powershell -ExecutionPolicy Bypass -File dev.ps1
```

### **Opción 2: Windows CMD (Símbolo del Sistema)**

```cmd
npm run dev:win
```

O manualmente:

```cmd
dev.bat
```

### **Opción 3: macOS/Linux Terminal**

```bash
npm run dev:mac
```

O manualmente:

```bash
bash dev.sh
```

---

## ⚙️ ¿Qué Hacen Estos Scripts?

1. **Establecen `NODE_OPTIONS=--max-old-space-size=2048`** → Limita memoria a 2GB
2. **Establecen `NEXT_TELEMETRY_DISABLED=1`** → Deshabilita telemetría de Next.js
3. **Ejecutan `npm run dev`** → Inicia el servidor con webpack (no Turbopack)

---

## 🔧 Configuraciones Aplicadas

- **Bundler**: Webpack (Turbopack deshabilitado)
- **Memoria máxima**: 2GB
- **File Watching**: Excluye `uix_and_designs/`, `node_modules/`, `.git/`, `.next/`
- **Puerto**: `http://localhost:3000`

---

## ✨ Consumo Esperado

| Recurso                 | Antes                   | Después              |
| ----------------------- | ----------------------- | -------------------- |
| **RAM**                 | 8GB+                    | 200-400MB ✅         |
| **CPU**                 | 100% sostenido          | 10-30% ✅            |
| **Compilación inicial** | Rápida (pero inestable) | ~10-15s (estable) ✅ |
| **Cambios posteriores** | Inestable               | ~2-3s ✅             |

---

## 🆘 Si Aún Hay Problemas

1. **Elimina la carpeta `.next`**:

   ```powershell
   Remove-Item -Recurse -Force .next
   ```

2. **Limpia caché de npm**:

   ```powershell
   npm cache clean --force
   ```

3. **Reinstala dependencias**:

   ```powershell
   npm install
   ```

4. **Intenta de nuevo**:
   ```powershell
   npm run dev:ps
   ```
