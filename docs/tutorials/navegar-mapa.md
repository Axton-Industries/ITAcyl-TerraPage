# Navegar por el mapa

El mapa es el corazón de Terra. Desde aquí puedes visualizar parcelas SIGPAC, cargar imágenes satelitales y gestionar puntos de interés.

## Abrir el mapa

Al iniciar sesión, Terra muestra el mapa como pantalla principal. El módulo **Mapa** es el primero en la barra lateral y siempre está accesible.

!!! tip "Atajos de teclado"
    Usa `+` / `-` para hacer zoom y arrastra con el ratón para desplazarte. Haz clic derecho sobre el mapa para ver las coordenadas.

## Capas base

Terra incluye varias capas base que puedes combinar:

| Capa | Descripción |
| --- | --- |
| **OpenStreetMap** | Mapa base por defecto, ideal para ubicación general. |
| **Esri World Imagery** | Fotografía aérea de alta resolución. |
| **PNOA MA** | Ortofotografía actual de Castilla y León. |
| **PNOA Histórico** | Imágenes históricas para comparar evolución. |
| **Sentinel-2 cloudless** | Mosaico satelital sin nubes. |
| **Wayback** | Versiones anteriores de imágenes satelitales. |
| **Fototeca IGN** | Arch histórico del Instituto Geográfico Nacional. |

!!! note "Seleccionar una capa"
    Usa el control de capas en la esquina superior derecha del mapa para activar o desactivar cada capa.

## Recintos SIGPAC

A partir del **zoom 16**, Terra muestra automáticamente los recintos SIGPAC como capa superpuesta. Estos recintos se cargan desde el servicio WMS de SIGPAC.

```
WMS: https://sigpac-hubcloud.es/wms
Capa: AU.Sigpac:recinto
```

!!! warning "Zoom mínimo"
    Si el zoom es inferior a 16, el panel mostrará el mensaje: *"Acércate para visualizar los recintos SIGPAC"*.

Cuando haces clic sobre un recinto, Terra identifica el recinto y muestra sus atributos (parcela, polígono, recinto, superficie).

## Cargar un GeoTIFF

Puedes cargar imágenes raster (GeoTIFF) de dos formas:

### Subida por HTTP (navegador)

1. Haz clic en el botón de carga de imágenes en el mapa.
2. Selecciona el fichero `.tif` desde tu disco.
3. Terra sube el fichero al backend, calcula metadatos y genera un preview automáticamente.

### Ruta local (modo Electron)

1. Selecciona el TIFF con el diálogo nativo del sistema operativo.
2. Terra registra el fichero sin copiarlo al servidor.
3. El TIFF se sirve vía el protocolo `raster://` con range requests para lectura eficiente por bandas.

!!! note "Deduplicación"
    Antes de subir, Terra verifica si el fichero ya existe en el backend por firma (`filename + size + lastModified`). Si lo encuentra, reutiliza el fichero existente.

## Seleccionar banda

Una vez cargado un GeoTIFF multiespectral, puedes seleccionar qué banda visualizar:

- **NIR** (Infrarrojo cercano) — útil para evaluar vigor vegetal
- **R** (Rojo) — clasificación de cultivos
- **G** (Verde) — índice de salud vegetal
- **RE** (Rojo borde) — detección de estrés
- **Azul** — análisis de agua y sombra
- **LWIR** (Infrarrojo térmico) — mapas de temperatura

Usa el selector de bandas en el panel de control del mapa.

## Puntos de interés (POIs)

Los POIs son marcadores personalizables que puedes colocar sobre el mapa. Tipos predefinidos:

- :red_circle: Focos de plaga
- :pushpin: Postes
- :construction: Cierros rotos
- :wavy_dash: Zanjas
- :rock: Pedregales
- :gear: Tipos definidos por el usuario

### Crear un POI

1. Selecciona el tipo de punto en el panel de control.
2. Haz clic sobre la ubicación en el mapa.
3. Añade observaciones y adjuntos si lo deseas.
4. El POI se guarda automáticamente en `localStorage`.

!!! tip "Adjuntos"
    Puedes adjuntar fotos y documentos a cada POI para documentar el estado actual de la parcela.

## Siguiente paso

Una vez que domines el mapa, aprende a [crear cultivos](crear-cultivo.md) vinculados a las parcelas que has identificado.
