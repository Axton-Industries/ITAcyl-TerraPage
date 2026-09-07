# Muestras de suelo

El módulo **Muestras de suelo** genera una rejilla de puntos de muestreo sobre las parcelas seleccionadas y permite **exportar los puntos en varios formatos** directamente desde el navegador (sin servidor): KMZ, KML, GeoJSON y Shapefile (SHP+SHX+DBF+PRJ empaquetados en un ZIP, generados con implementación binaria propia).

## Requisitos

!!! note "Permisos"
    Cualquier rol puede crear y consultar muestras. La eliminación la realiza solo **Administración**.

## Crear una muestra

### Paso 1: Acceder al módulo

Haz clic en **Muestras de suelo** en la barra lateral.

### Paso 2: Nueva muestra

Haz clic en **Nueva muestra**. Aparece un formulario:

| Campo | Obligatorio | Descripción |
| --- | :-: | --- |
| Nombre | sí | Etiqueta de la muestra (ej. *Campo norte – pre-siembra*) |
| Objetivo | no | Finalidad del análisis (fertilidad, salinidad, nematodos…) |
| Cultivos afectados | no | Lista de cultivos vinculados (se pueden añadir más tarde) |
| Actuación asociada | no | Opcional, para enlazar la muestra con un registro de actuación |
| Observaciones | no | Notas a pie de campo |

### Paso 3: Generar los puntos

Sobre cada cultivo vinculado, Terra genera una **rejilla cuasi-reticular** con dos pasadas:

1. **Densificación**: rejilla regular con `spacing = √(area / nDeseado)`.
2. **Farthest-point sampling**: añade puntos donde la rejilla queda vacía para garantizar cobertura.

!!! tip "Resultado"
    Cada tarjeta de muestra muestra un **mini-mapa canvas** con ESRI World Imagery de fondo y los puntos generados encima (naranja = pendiente, verde = tomada). El ID de cada punto es estable entre exportaciones, así que puedes volver a muestrear el mismo punto tras un análisis.

### Paso 4: Exportar

Desde la propia tarjeta de muestra, hay un botón **Exportar** con cuatro formatos:

| Formato | Contenido | Uso típico |
| --- | --- | --- |
| **KMZ** | KML comprimido con icono y descripción por punto | Cargar en apps móviles de campo (QField, Avenza Maps) |
| **KML** | KML plano | Google Earth, Google My Maps |
| **GeoJSON** | FeatureCollection con geometría Point | QGIS, web |
| **SHP** | ZIP con `.shp .shx .dbf .prj` (ESRI Shapefile) | QGIS, ArcGIS, IDEs |

!!! info "Generación client-side"
    La exportación a Shapefile no usa librerías externas: `src/lib/vectorExport.ts` implementa los formatos binarios SHP/SHX/DBF/PRJ y un ZIP STORE a mano. Es 100% JavaScript que se ejecuta en el navegador.

## Marcar un punto como "tomado"

Una vez en campo, abre la muestra y haz clic en el **icono de check** sobre el punto. El punto pasa a verde y se registra en `localStorage`. La marca es estable: si vuelves a abrir la muestra, el punto sigue marcado.

## Vincular a una actuación

Al crear una **actuación** puedes seleccionar una muestra existente en el campo *Muestra asociada*. Así, desde la ficha de la muestra ves todas las actuaciones que la referencian, y desde la actuación ves la muestra vinculada.

## Siguiente paso

- [Crear un cultivo](crear-cultivo.md) y vincularlo a la muestra.
- [Registrar la actuación](crear-actuacion.md) con la muestra y la maquinaria usada.
