# Pila técnica

Software libre publicado bajo **GPL-3.0**. Funciona como SPA en el navegador, con backend FastAPI y, opcionalmente, instalador de escritorio con Electron.

## Frontend

- React 19 + TypeScript
- Vite 8 + Tailwind 4
- Zustand (estado + persistencia en `localStorage`)
- OpenLayers 10 + proj4
- Axios para el cliente HTTP

## Backend

- Python 3.12
- FastAPI + Uvicorn
- Pydantic / Pydantic Settings
- rasterio (ráster GeoTIFF)
- pyogrio (vector GeoPackage/Shapefile)
- shapely (geometrías)
- numpy + Pillow (previews)

## Distribución

- Electron (diálogo nativo de archivos y protocolo `raster://` para servir GeoTIFFs locales con range requests)
- electron-builder (instalador NSIS para Windows)
- PyInstaller (backend empaquetado en `Terra-backend.exe`)

## Scripts npm

| Script | Qué hace |
| --- | --- |
| `dev` | Orquesta Electron + Vite + backend Python en desarrollo. |
| `dev:vite` | Solo Vite en el puerto 3000. Úsalo junto a `python launcher.py` en otra terminal. |
| `build` | TypeScript check + Vite build + compila main/preload de Electron con esbuild. |
| `build:electron` | Pipeline completo: compila frontend, lo copia a `backend/static/`, empaqueta el backend con PyInstaller (`Terra-backend.exe`) y genera el instalador NSIS en `dist-release/Terra-Setup.exe`. |
| `lint` | ESLint + Prettier sobre TS/TSX. |
| `lint:fix` | ESLint con autofix. |
| `format` | Prettier con `--write` sobre `src/**/*.{ts,tsx,css}`. |
| `format:check` | Prettier con `--check`, sin modificar archivos. |
