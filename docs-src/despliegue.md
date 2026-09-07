# Despliegue

## Generar el instalador de Windows

```bash
npm run build:electron
```

El pipeline completo:

1. Compila el frontend (TypeScript check + Vite build + esbuild del main/preload de Electron).
2. Copia el bundle a `backend/static/`.
3. Empaqueta el backend con PyInstaller en `Terra-backend.exe` (onedir).
4. Empaqueta Electron con electron-builder y genera el instalador NSIS en `dist-release/Terra-Setup.exe`.

## Lanzador rápido (Windows)

```bat
iniciar-terra.bat
```

Equivale a `npm run dev` con un doble clic. Útil en sesiones de desarrollo locales.

## Requisitos del sistema

- **Windows 10/11** para el instalador NSIS.
- **macOS / Linux**: el flujo con Electron funciona, pero no hay instalador empaquetado listo.
- **Espacio en disco**: el backend empaquetado ronda los 100–150 MB por las dependencias (rasterio, GDAL transitivo).
- **Permisos de escritura**: el instalador deja los adjuntos y GeoTIFFs subidos en una ruta por usuario (equivalente a `%LOCALAPPDATA%\Terra\data\uploads`).

## Dónde va cada cosa

| Recurso | Ruta instalada |
| --- | --- |
| Ejecutable principal | `<install dir>\Terra.exe` |
| Backend empaquetado | `<install dir>\Terra-backend.exe` (y carpeta `_internal/` con DLLs de Python y GDAL) |
| Frontend (estático) | `<install dir>\_internal\static\` |
| Datos de usuario | `%LOCALAPPDATA%\Terra\data\uploads\` |
| Lanzador dev | `<repo>\iniciar-terra.bat` (no se instala) |

## Próximos pasos

- Configura `SI_SIAR_TOKEN` antes de distribuir si tu despliegue está para usar el módulo de gestión de riego.
- Ajusta `SI_CORS_ORIGINS` si vas a servir el frontend desde otro origen que no sea `http://localhost:3000`.
- Considera `SI_DEBUG=false` para producción (desactiva los docs interactivos de FastAPI).
