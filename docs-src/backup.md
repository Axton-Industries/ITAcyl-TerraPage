# Copia de seguridad

El módulo **Copia de seguridad** (`backup.ts`) respalda todo el proyecto Terra en un solo archivo ZIP: fichas estructuradas (todas las claves `localStorage` `terra:*`) y archivos binarios (GeoTIFF, adjuntos, previews).

## Exportar

- Envía las fichas al backend (`POST /backup`) y descarga un ZIP con `a.click()` (streaming, sin cargar en RAM).
- El archivo pesa según los archivos subidos; puede ser grande (gigabytes si hay muchos GeoTIFF).

## Importar

- Sube el ZIP (`POST /backup/restore` con `multipart/form-data`).
- El backend restaura los archivos y devuelve las fichas como JSON; la app las escribe en `localStorage` filtrando por `terra:`.
- Al importar un JSON la app se recarga con los datos del archivo.

## Datos cubiertos

Todas las claves `terra:*` (`auth-session`, `cultivos`, `actuaciones`, `tratamientos`, `maquinaria`, `muestras-suelo`, `gestion-riego`, `calendario`, `trabajadores`, `puntos-interes`, `map-campanas`, `user-layers`, `map-views`, `clasificacion`).

## Cuándo usarlo

Antes de actualizar la app, cambiar de equipo o limpiar datos. El informe (`informe.md`) cubre los datos textuales; este módulo cubre los archivos.
