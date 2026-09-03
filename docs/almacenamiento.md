# Almacenamiento y SIGPAC

Terra no usa base de datos. El backend solo guarda ficheros binarios; los datos estructurados (cultivos, actuaciones, tratamientos, maquinaria, muestras, calendario, trabajadores, POIs, sesión de auth) viven en `localStorage` del navegador con Zustand (`persist`).

## Rutas internas

| Concepto | Ruta | Notas |
| --- | --- | --- |
| GeoTIFFs subidos | `backend/data/uploads/{image_id}.tif` | Junto al preview `{image_id}_preview.png`, sidecars `{image_id}.json` y cachés de bandas. |
| Adjuntos | `backend/data/uploads/<entity>/<key>/<adjunto_id>` | Entidades con subdirectorio: `cultivos`, `actuaciones`, `maquinaria`, `pois`. |
| Mount estático | `/uploads/...` | Servido por FastAPI vía `CachedStaticFiles`. |
| Frontend compilado (producción) | `backend/static/` (dev) · `_internal/static/` (empaquetado PyInstaller) | Servido por FastAPI con fallback SPA a `index.html` para deep-links de React Router. |
| Datos estructurados | `localStorage` del navegador (claves `terra:*`) | Sin sincronización entre dispositivos. |

!!! warning "Sin `/outputs/`"
    El README menciona un mount `/outputs/` que **no existe** en `main.py`. Los previews y sidecars viven junto a cada TIFF, dentro de `/uploads/`.

## Fuentes SIGPAC consumidas

Terra consume dos servicios del portal `sigpac-hubcloud.es`:

| Uso | URL | Origen |
| --- | --- | --- |
| WMS para el mapa | `https://sigpac-hubcloud.es/wms` · capa `AU.Sigpac:recinto` · min zoom 16 | `src/components/map/TerraMap.tsx` (líneas 87-90) |
| Lookup de recinto por lon/lat | `https://sigpac-hubcloud.es/servicioconsultassigpac/query/recinfobypoint/4326/{lon}/{lat}.geojson` | `src/lib/sigpacMatch.ts` (líneas 18-19) |

El WMS renderiza los recintos como capa base a partir de zoom 16 (por debajo de ese zoom el panel muestra *"Acércate para visualizar los recintos SIGPAC"*).

El endpoint de consulta se usa en dos lugares:

- Cuando el usuario **dibuja** una parcela sobre el mapa, Terra llama a `recintoEnPunto()` para encontrar el recinto SIGPAC que contiene el centro del polígono y emparejarlo automáticamente.
- Cuando el usuario **hace clic** sobre un recinto existente, se identifica el recinto y se muestran sus atributos.

## Claves `localStorage` principales

| Clave | Contenido |
| --- | --- |
| `terra:auth-session-v1` | Sesión del usuario actual (rol y nombre). |
| `terra:puntos-interes-v1` | Puntos de interés creados por el usuario. |
| `terra:cultivos-v1` | Fichas de cultivo y geometrías de parcelas. |
| `terra:actuaciones-v1` | Registro de actuaciones. |
| `terra:tratamientos-v1` | Registro de tratamientos fitosanitarios y fertilizantes. |
| `terra:maquinaria-v1` | Inventario de maquinaria. |
| `terra:muestras-suelo-v1` | Muestras y analíticas de suelo. |
| `terra:gestion-riego-v1` | Preferencias y cachés del módulo de riego. |
| `terra:calendario-v1` | Eventos del calendario. |
| `terra:trabajadores-v1` | Listado de trabajadores. |
