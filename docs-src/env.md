# Variables de entorno

Todas usan el prefijo `SI_` (`Settings.model_config` con `env_prefix="SI_"` y `env_file=".env"` en `backend/app/core/config.py`, línea 73).

Copia `backend/.env.example` a `backend/.env` y ajusta lo que necesites.

| Variable | Por defecto | Descripción |
| --- | --- | --- |
| `SI_APP_NAME` | `Terra` | Identificador mostrado en logs y en la respuesta de `/api/health`. |
| `SI_VERSION` | `2.0.0-beta.1` | Versión reportada por `/api/health`. |
| `SI_DEBUG` | `false` | Activa logging DEBUG y habilita los docs interactivos de FastAPI en `/api/docs`. |
| `SI_UPLOAD_DIR` | `data/uploads` | Directorio de subidas. En desarrollo se resuelve a `<BASE_DIR>/data/uploads`; empaquetado, a `<exe_dir>/data/uploads`. |
| `SI_STATIC_DIR` | `static` | Frontend compilado. En desarrollo `<BASE_DIR>/static`; empaquetado, `<exe_dir>/_internal/static` (PyInstaller onedir). |
| `SI_NODATA_VALUE` | `-9999.0` | Valor nodata escrito en los GeoTIFFs generados. |
| `SI_CORS_ORIGINS` | `["http://localhost:3000"]` | Array JSON con los orígenes CORS permitidos. |
| `SI_SIAR_BASE_URL` | `https://servicio.mapa.gob.es/siarapi` | Base del API SIAR que el backend consulta como proxy. |
| `SI_SIAR_TOKEN` | `""` (vacío) | **Secreto.** Token de acceso al SIAR; nunca debe aparecer en el bundle frontend. |

!!! note "Puerto del servidor"
    El puerto del servidor se pasa por CLI (`launcher.py --port` o `uvicorn --port`), no por variable de entorno.

!!! warning "No existe `SI_OUTPUT_DIR`"
    La documentación antigua (incluido el README) menciona una variable `SI_OUTPUT_DIR` con valor por defecto `data/outputs`. **Esa variable no existe en `Settings`**, no hay campo `output_dir`, no se crea `data/outputs/` y no hay mount `/outputs/` en `main.py`. Ignora cualquier referencia a esa ruta.
