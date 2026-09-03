# Terra — Documentación

Bienvenido a la documentación técnica de **Terra**, la aplicación de gestión agrícola con visor geográfico desarrollada como proyecto de prácticas en el **Instituto Tecnológico Agrario de Castilla y León (ITACyL)**.

## Qué hay aquí

| | | |
|---|---|---|
| [Inicio rápido](inicio-rapido.md) | [Pila técnica](pila-tecnica.md) | [Módulos](modulos.md) |
| [Roles y permisos](roles.md) | [Formatos vectoriales](formatos.md) | [API REST](api.md) |
| [Variables de entorno](env.md) | [Almacenamiento y SIGPAC](almacenamiento.md) | [Despliegue](despliegue.md) |

## Acerca del proyecto

Terra es **software libre** publicado bajo **GPL-3.0**. Funciona como SPA en el navegador, con un backend FastAPI en Python y, opcionalmente, como aplicación de escritorio mediante Electron con instalador NSIS.

- **Versión actual:** `2.0.0-beta.1`
- **Licencia:** [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html)
- **Persistencia:** los datos estructurados viven en `localStorage` del navegador (claves `terra:*`). El servidor solo guarda ficheros binarios (adjuntos y GeoTIFFs) en `backend/data/uploads/`.
- **Idioma de la UI:** exclusivamente español.
