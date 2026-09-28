# Comparar el mapa (split / swipe)

Terra incluye tres modos de comparación sobre el visor geográfico: **split** (dos mapas lado a lado, sincronizados), **swipe** (divisor arrastrable) y **transparencia** (superposición con opacidad regulable).

## Activar el modo comparación

!!! tip "Dónde está"
    El selector de modo vive en la esquina superior del mapa, sobre el panel de control. Hay cuatro opciones: **Mapa** (clásico), **Comparar** (split), **Swipe** y **Transparencia**.

1. Abre el módulo **Mapa**.
2. En la barra superior del visor, selecciona **Comparar** o **Swipe**.

## Modo Comparar (split)

Dos mapas lado a lado que comparten extent y zoom. Cada mapa tiene su propio control de capas y de banda, así que puedes cargar, por ejemplo, una imagen del 2024 en el izquierdo y otra del 2025 en el derecho.

- **Sincronización**: al desplazar o hacer zoom en uno, el otro se mueve igual.
- **Capas independientes**: activa/desactiva capas por separado en cada lado.
- **Selección de banda**: cada lado puede estar en una banda distinta (NIR / R / G / RE / azul / LWIR).

!!! info "Cuándo usarlo"
    Comparación detallada entre dos imágenes completas: una a la izquierda, otra a la derecha, sin recortes. Ideal para validar diferencias globales de vigor, humedad o nivel de agua.

## Modo Swipe

Un único mapa con una línea vertical (clipPath) que arrastras con el ratón. Lo que queda a un lado muestra una capa (por ejemplo, ortofoto PNOA), y al otro lado muestra otra (por ejemplo, NDVI de un GeoTIFF multiespectral). Funciona muy bien para見せ diferencias localizadas sin perder el contexto geográfico.

- **Arrastrar el divisor**: pincha y arrastra la línea blanca para revelar más de un lado o del otro.
- **Orden de capas**: la capa activa (la del GeoTIFF cargado) suele ir encima; las capas base van debajo.

!!! info "Cuándo usarlo"
    Cuando quieres enseguida "qué ha cambiado" en una zona concreta: el swipe entre PNOA y un NDVI del cultivo, o entre dos fechas de Sentinel-2 cloudless, hace evidentes los cambios de un vistazo.

## Modo Transparencia

Superpone dos mapas base (por ejemplo, ortofoto PNOA y Sentinel-2 cloudless) con un control de opacidad. El deslizador va revelando la capa de arriba sobre la de abajo según el porcentaje elegido. Cada mapa base puede tener su propia fecha real (`Fecha imagen`) y fuente (`Fuente de imagen`).

- **Fecha de imagen**: indica la captura real del satélite o del vuelo; se muestra en la píldora junto al control.
- **Fuente de imagen**: cambia entre Esri, OSM, PNOA MA, Fototeca IGN, PNOA Histórico, Sentinel-2 y Wayback.
- **Sin fechas disponibles**: al abrir la transparencia sin fechas elegidas, la capa base puede salir en blanco hasta que se seleccione una fecha válida (`createSatelliteLayer`).

!!! info "Cuándo usarlo"
    Ideal para comparar una capa con transparencia regulable sobre otra: ver el vigor de un NDVI sobre la ortofoto sin perder contexto, o comparar dos fechas de Sentinel-2 con una transición suave.

## Casos de uso típicos

| Caso | Modo recomendado |
| --- | --- |
| Comparar dos vuelos del dron con banda distinta | Split |
| Antes/después de una actuación sobre ortofoto | Swipe |
| Comprobar si una zona ha cambiado entre dos fechas de PNOA | Swipe o Split |
| Validar el recorte por recintos SIGPAC sobre la imagen | Swipe |
| Comparar con transparencia regulable (opacidad) entre dos fechas | Transparencia |

## Siguiente paso

- [Cargar un GeoTIFF multiespectral](navegar-mapa.md#cargar-un-geotiff) para tener material con el que comparar.
- [Registrar una actuación](crear-actuacion.md) con fotos del antes/después.
