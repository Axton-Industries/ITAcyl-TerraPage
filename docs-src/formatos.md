# Formatos vectoriales soportados

Formatos aceptados por `POST /api/v1/vra/parcel-geometry/upload` (y su variante local `parcel-geometry/open-local`).

Definidos en `_PARCEL_VECTOR_EXTENSIONS` en `backend/app/api/routes/vra.py` (línea 183):

```python
_PARCEL_VECTOR_EXTENSIONS = (".gpkg", ".geojson", ".zip", ".kml", ".kmz", ".csv")
```

| Extensión | Formato | Notas |
| --- | --- | --- |
| `.gpkg` | GeoPackage | Soportado vía `pyogrio`. |
| `.geojson` | GeoJSON | GeoJSON plano, RFC 7946. |
| `.zip` | Shapefile empaquetado | Debe contener obligatoriamente `.shp`, `.dbf` y `.shx` (`_SHP_REQUIRED_EXT`, línea 31). |
| `.kml` / `.kmz` | Google KML / KMZ | Geometrías y atributos básicos. |
| `.csv` | CSV de puntos GPS | Acepta columnas `WKT`, `x`/`y`, `longitude`/`latitude` (con sinónimos `lon`/`lat`). |

!!! note "Mensaje de error"
    Si subes un formato no soportado, el backend devuelve `400 Bad Request` con el mensaje literal:

    > Solo se aceptan GeoPackage (.gpkg), GeoJSON (.geojson), Shapefile empaquetado en .zip, KML/KMZ (.kml, .kmz) o CSV de puntos (.csv)

    (Texto extraído de `backend/app/api/routes/vra.py` línea 352.)

## Qué pasa tras subir

El endpoint normaliza la geometría a **EPSG:4326** y la devuelve como GeoJSON para que el frontend la pinte directamente sobre el mapa. La geometría original no se conserva en el servidor: el cliente la guarda en su `localStorage` (`terra:puntos-interes-v1` u otros) y la sube de nuevo si la necesita.
