# Pila técnica

Software libre publicado bajo **GPL-3.0**. Funciona como SPA en el navegador, con backend FastAPI y, opcionalmente, instalador de escritorio con Electron.

## Frontend

- **React 19.2** + TypeScript
- **Vite 8** (alias `@ → src`, manual chunks `react-vendor`, proxy `/api`+`/uploads` con `ws: true`)
- **Tailwind 4**
- **Zustand 5** con `persist` (migraciones versionadas) + `undoStore` global con pila de hasta 30 snapshots
- **OpenLayers 10** + **proj4 2.20** (CRS no-3857 vía proj4 string)
- **Axios** para el cliente HTTP, con interceptor que traduce `detail` de FastAPI a `Error`
- **React Router 7** (rutas y deep-linking con `?actuacion=`, `?cultivo=`, `?crop=`, etc.)

## Backend

- **Python 3.12**
- **FastAPI 0.115** + Uvicorn 0.34
- **Pydantic 2.11** + **Pydantic Settings 2.9** (prefijo `SI_`)
- **rasterio 1.4** (ráster GeoTIFF, render con percentil 2-98, dedup por firma)
- **pyogrio 0.12** (vector GeoPackage/Shapefile)
- **shapely 2.1** (geometrías)
- **numpy 2.2** + **Pillow 11.2** (previews)
- Cliente HTTPS con `urllib` para el SIAR (sin httpx/requests) con caché en memoria (6h listados, 15min datos)

## Distribución

- **Electron 42** (diálogo nativo de archivos, esquema `raster://` *privileged* con Range Requests 206 Partial Content, menú nativo en español, atajos Deshacer/Rehacer/Zoom/F11)
- **electron-builder** (instalador NSIS para Windows)
- **PyInstaller** (backend empaquetado en `Terra-backend.exe`, onedir con `_internal/`)

## Estado y persistencia (Zustand + persist)

| Store | Clave `localStorage` | Versión | Migraciones notables |
| --- | --- | --- | --- |
| `authStore` | `terra:auth-session-v1` | v1 | — |
| `cultivosStore` | `terra:cultivos-v1` | **v3** | `variedad` único → `variedades[]`; estados de cultivo |
| `actuacionesStore` | `terra:actuaciones-v1` | **v3** | `maquinaria` texto → `maquinariaKeys[]`; `trabajador` → `trabajadorKeys[]` |
| `tratamientosStore` | `terra:tratamientos-v1` | v1 | — |
| `maquinariaStore` | `terra:maquinaria-v1` | v1 | Marcas extra; mantenimientos/averías con adjuntos anidados |
| `muestrasSueloStore` | `terra:muestrasSuelo-v1` | **v5** | `cultivoKey` → `cultivoKeys[]`; `objetivo` opcional |
| `poiStore` | `terra:puntos-interes-v1` | v1 | POIs + conexiones + tipos extra |
| `calendarioStore` | `terra:calendario-v1` | v1 | — |
| `trabajadoresStore` | `terra:trabajadores-v1` | v1 | Trabajadores + `partes: ParteTrabajo[]` |
| `gestionRiegoStore` | `terra:gestionRiego-v1` | v1 | — |
| `progressStore` | (efímero) | — | `start/update/finish` para el overlay global |
| `undoStore` | (efímero) | — | Pila global con `withUndo(store, labels)`, MAX_STACK=30 |

!!! info "Migraciones versionadas"
    Cada store declara su `version` y un `migrate(persisted, version)` que se ejecuta al cargar. Al evolucionar el shape, basta con subir la versión y añadir la transformación — los usuarios con datos antiguos se actualizan sin perder información.

## Scripts npm

| Script | Qué hace |
| --- | --- |
| `dev` | Orquesta Electron + Vite + backend Python en desarrollo (con `uvicorn --reload --reload-dir app` para no reiniciar por uploads). Limpia procesos zombi. |
| `dev:vite` | Solo Vite en el puerto 3000. Úsalo junto a `python launcher.py` en otra terminal. |
| `build` | TypeScript check + Vite build + compila main/preload de Electron con esbuild. |
| `build:electron` | Pipeline completo: compila frontend, lo copia a `backend/static/`, empaqueta el backend con PyInstaller (`Terra-backend.exe`) y genera el instalador NSIS en `dist-release/Terra-Setup.exe`. |
| `lint` | ESLint + Prettier sobre TS/TSX. |
| `lint:fix` | ESLint con autofix. |
| `format` | Prettier con `--write` sobre `src/**/*.{ts,tsx,css}`. |
| `format:check` | Prettier con `--check`, sin modificar archivos. |

## Errores y depuración

- **PageErrorBoundary** por página: muestra el stack en dev y un botón "Limpiar caché y volver al inicio" en producción.
- **ProcessingOverlay** global: barra de progreso determinada/indeterminada (`progressStore.start/update/finish`).
- **Filtros de log** en `backend/app/main.py`: `_COGLayoutBreakFilter` silencia "breaks COG layout" y "invalidated by later changes" para que la consola no se inunde.
