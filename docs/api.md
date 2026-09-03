# API REST

Documentación interactiva en `http://localhost:8000/api/docs` (Swagger UI, habilitada con `SI_DEBUG=true`) cuando el backend está en marcha.

## Salud

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/health` | Liveness para chequeos rápidos (Uptime Kuma, etc.). Devuelve `{status: "ok", version: settings.version}`. |

## Imágenes (GeoTIFF)

Montadas por `backend/app/api/routes/images/__init__.py`.

| Método | Ruta | Descripción |
| --- | --- | --- |
| `POST` | `/api/v1/images/upload/check` | Dedup por firma (`filename + size + lastModified`). Si encuentra el fichero, devuelve su metadata y regenera el preview si falta. |
| `POST` | `/api/v1/images/upload` | Sube un GeoTIFF (multipart `file`), calcula metadatos y genera preview. Query: `skip_preview` (bool, default false), `last_modified` (int). |
| `POST` | `/api/v1/images/open-local` | Registra un GeoTIFF local por ruta nativa (modo Electron). Body: `{path}`. **No transfiere bytes.** |
| `GET` | `/api/v1/images/{image_id}/preview` | Renderiza una banda como PNG georreferenciable. Query: `band` (int ≥ 1, default 1). |

## Cobertura / CRS

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/v1/vegetation-cover/mask/{image_id}/crs-proj4` | Cadena proj4 del CRS del ráster, para registrarla en OpenLayers. Devuelve `{proj4: string \| null}`. |

!!! note "Solo queda un endpoint"
    El módulo de cobertura vegetal tenía varios endpoints más; el resto se eliminó y solo permanece el helper de CRS (`map_data.py`).

## VRA (recorte y geometría)

| Método | Ruta | Descripción |
| --- | --- | --- |
| `POST` | `/api/v1/vra/crop-by-polygon` | Recorta el GeoTIFF a la unión de los recintos SIGPAC seleccionados. Body: `VRACropRequest{sourceId, geometries[]}` en EPSG:4326. |
| `POST` | `/api/v1/vra/parcel-geometry/upload` | Sube un vectorial con el límite de una parcela (no SIGPAC) y devuelve su geometría normalizada a EPSG:4326. |
| `POST` | `/api/v1/vra/parcel-geometry/open-local` | Variante por ruta de disco local (Electron). Body: `{path}`. |

## Adjuntos

Mismo contrato para las cuatro entidades siguientes. Subida por `multipart/form-data` con campos `key` y `file`. Borrado por `adjunto_id` con query `?key=...`.

| Método | Ruta | Entidad |
| --- | --- | --- |
| `POST` | `/api/v1/cultivos/adjuntos` | Cultivos |
| `DELETE` | `/api/v1/cultivos/adjuntos/{adjunto_id}` | Cultivos |
| `POST` | `/api/v1/actuaciones/adjuntos` | Actuaciones |
| `DELETE` | `/api/v1/actuaciones/adjuntos/{adjunto_id}` | Actuaciones |
| `POST` | `/api/v1/maquinaria/adjuntos` | Maquinaria |
| `DELETE` | `/api/v1/maquinaria/adjuntos/{adjunto_id}` | Maquinaria |
| `POST` | `/api/v1/pois/adjuntos` | Puntos de interés |
| `DELETE` | `/api/v1/pois/adjuntos/{adjunto_id}` | Puntos de interés |

Los adjuntos se sirven bajo el mount estático `/uploads/<entity>/<key>/<adjunto_id>`.

## SIAR (proxy agroclimático)

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/v1/siar/info` | Datos de referencia del SIAR: CCAA, provincias y estaciones. |
| `GET` | `/api/v1/siar/datos` | Datos agroclimáticos (ET0 = `EtPMon`, lluvia efectiva = `PePMon`). |

### Parámetros de `/siar/datos`

| Param | Tipo | Obligatorio | Validación |
| --- | --- | :-: | --- |
| `ambito` | `str` (query) | sí | regex `^(CCAA\|PROVINCIA\|ESTACION)$` |
| `tipoDatos` | `str` (query) | sí | regex `^(Horarios\|Diarios\|Semanales\|Mensuales)$` |
| `ids` | `list[str]` (query, repetible) | sí | — |
| `fechaInicial` | `str` (query) | sí | formato fecha SIAR |
| `fechaFinal` | `str` (query) | sí | formato fecha SIAR |
| `calcular` | `bool` (query) | sí | default `true` |

!!! danger "Token del SIAR"
    El backend guarda `SI_SIAR_TOKEN` server-side. El token **nunca** debe aparecer en el bundle frontend ni en logs.

## Dos formas de cargar un GeoTIFF

=== "HTTP multipart (navegador)"

    1. `POST /api/v1/images/upload/check` con la firma del fichero (`filename + size + lastModified`). Si el backend ya tiene ese fichero, devuelve su metadata sin volver a subirlo.
    2. Si no hay dedup, `POST /api/v1/images/upload` con el fichero multipart. El backend calcula metadatos, genera preview y lo deja listo en `data/uploads/`.

=== "Ruta local (Electron)"

    1. El usuario selecciona el TIFF con el diálogo nativo del SO (manejador `dialog:openFile` en `electron/main.ts`).
    2. El renderer envía `POST /api/v1/images/open-local` con `{path}`.
    3. El backend registra el fichero sin copiarlo y devuelve un `image_id`.
    4. El renderer accede al TIFF vía el protocolo `raster://` (registrado como `privileged` en `electron/main.ts`, líneas 11-22) que implementa range requests con `206 Partial Content`, de modo que `geotiff.js` puede leer bandas arbitrarias sin cargar todo el fichero en memoria.
