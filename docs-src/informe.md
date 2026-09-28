# Informe

Generación de informes en PDF o Excel (`informe.ts`) para la app Terra. Solo datos: los archivos (GeoTIFF, adjuntos) no entran; para copias completas existe `backup.ts` (ZIP).

## Secciones del informe

| Sección | Fuente (`store`) |
|---|---|
| Cultivos | `cultivosStore` |
| Actuaciones | `actuacionesStore` |
| Maquinaria y aperos | `maquinariaStore` |
| Mantenimientos | `maquinariaStore` (anidados) |
| Averías | `maquinariaStore` (anidados) |
| Tratamientos | `tratamientosStore` |
| Riegos | `gestionRiegoStore` |
| Muestras de suelo | `muestrasSueloStore` |
| Calendario | `calendarioStore` |
| Puntos de interés | `poiStore` |

Los estados derivados (estado de cultivo, fase, fecha de siembra) se recalculan con los mismos ayudantes que las páginas (`cultivoEstado`, `cultivoFase`, `cultivoFechaSiembra`).

## Salida

- **PDF**: impresión del navegador (`window.print` dentro de un iframe oculto) con destino "Guardar como PDF". Usa `HOJA_PDF` (CSS `@page`) con `A4 landscape`.
- **Excel** (`.xlsx`): `POST /api/v1/informe/xlsx`. El backend arma una hoja por sección (`SeccionInforme`). El cliente descarga el blob con `nombreArchivo('xlsx')` (`terra-informe-YYYY-MM-DD.xlsx`).

## Desencadenante

Normalmente un botón en la interfaz de usuario (no documentado en detalle aquí) invoca `construirInforme()` y luego `descargarExcel()` o `imprimirPdf()`.

## Copia de seguridad (backup)

`backup.ts` genera un ZIP con todos los datos estructurados y archivos binarios del usuario. Es independiente del informe; se invoca desde la UI si está disponible.
