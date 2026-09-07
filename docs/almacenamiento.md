# Almacenamiento y SIGPAC

Terra no usa base de datos. El backend solo guarda ficheros binarios; los datos estructurados (cultivos, actuaciones, tratamientos, maquinaria, muestras, POIs, calendario, trabajadores, sesión de auth) viven en `localStorage` del navegador con Zustand (`persist`).

## Rutas internas

| Concepto | Ruta | Notas |
| --- | --- | --- |
| GeoTIFFs subidos | `backend/data/uploads/{image_id}.tif` | Junto al preview `{image_id}_preview.png`, sidecars `{image_id}.json` y cachés de bandas. Migración de previews HQ al boot (`_PREVIEW_HQ_VERSION = 5`). |
| Adjuntos | `backend/data/uploads/<entity>/<key>/<adjunto_id>` | Entidades con subdirectorio: `cultivos`, `actuaciones`, `maquinaria`, `pois`. |
| Adjuntos anidados | `backend/data/uploads/maquinaria/<key>-mant-<id>/<adjunto_id>` | Para adjuntos dentro de un mantenimiento. Mismo patrón con `-averia-` para averías. |
| Mount estático | `/uploads/...` | Servido por FastAPI vía `CachedStaticFiles` con regen lazy y `Cache-Control: max-age=3600`. |
| Frontend compilado (producción) | `backend/static/` (dev) · `_internal/static/` (empaquetado PyInstaller) | Servido por FastAPI con fallback SPA a `index.html` para deep-links de React Router. |
| Datos estructurados | `localStorage` del navegador (claves `terra:*`) | Sin sincronización entre dispositivos. |

!!! warning "Sin `/outputs/`"
    El README y `vite.config.ts` mencionan un mount `/outputs/` que **no existe** en `main.py`. Los previews y sidecars viven junto a cada TIFF, dentro de `/uploads/`.

## Claves `localStorage` (versión actual)

| Clave | Contenido | Versión |
| --- | --- | --- |
| `terra:auth-session-v1` | Sesión del usuario actual (rol y nombre) | v1 |
| `terra:puntos-interes-v1` | Puntos de interés y conexiones del usuario | v1 |
| `terra:cultivos-v1` | Fichas de cultivo y geometrías de parcelas | **v3** |
| `terra:actuaciones-v1` | Registro de actuaciones | **v3** |
| `terra:tratamientos-v1` | Registro de tratamientos fitosanitarios y fertilizantes | v1 |
| `terra:maquinaria-v1` | Inventario de maquinaria (con mantenimientos/averías y adjuntos anidados) | v1 |
| `terra:muestras-suelo-v1` | Muestras y analíticas de suelo | **v5** |
| `terra:gestion-riego-v1` | Preferencias y cachés del módulo de riego | v1 |
| `terra:calendario-v1` | Eventos del calendario | v1 |
| `terra:trabajadores-v1` | Listado de trabajadores y sus partes de trabajo | v1 |

!!! info "Migraciones"
    Si el shape de un store cambia, se incrementa su `version` y se añade la transformación en `migrate(persisted, version)`. Ver [pila técnica](pila-tecnica.md#estado-y-persistencia-zustand--persist).

## Fuentes SIGPAC consumidas

Terra consume dos servicios del portal `sigpac-hubcloud.es`:

| Uso | URL | Origen |
| --- | --- | --- |
| WMS para el mapa | `https://sigpac-hubcloud.es/wms` · capa `AU.Sigpac:recinto` · min zoom 16 | `src/components/map/TerraMap.tsx` |
| Lookup de recinto por lon/lat | `https://sigpac-hubcloud.es/servicioconsultassigpac/query/recinfobypoint/4326/{lon}/{lat}.geojson` | `src/lib/sigpacMatch.ts` |

El WMS renderiza los recintos como capa base a partir de zoom 16 (por debajo de ese zoom el panel muestra *"Acércate para visualizar los recintos SIGPAC"*).

El endpoint de consulta se usa en tres lugares:

- Cuando el usuario **dibuja** una parcela sobre el mapa, Terra llama a `recintoEnPunto()` para encontrar el recinto SIGPAC que contiene el centro del polígono y emparejarlo automáticamente.
- Cuando el usuario **hace clic** sobre un recinto existente, se identifica el recinto y se muestran sus atributos.
- Cuando el usuario hace **clic-derecho y arrastra**, los recintos seleccionados se acumulan en un panel para VRA/recorte.
