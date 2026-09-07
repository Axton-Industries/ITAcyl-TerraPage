# Crear un cultivo

Las fichas de cultivo son el núcleo de la gestión agrícola en Terra. Cada cultivo vincula información de campo con una parcela en el mapa.

## Requisitos

!!! warning "Rol necesario"
    Solo los usuarios con rol **Administración** pueden crear y editar cultivos. Los demás roles ven la información en modo lectura.

## Crear un nuevo cultivo

### Paso 1: Acceder al módulo

Haz clic en **Cultivos** en la barra lateral. Se abrirá la lista de cultivos existentes.

### Paso 2: Añadir nuevo

Haz clic en el botón **Nuevo cultivo**. Se abrirá el formulario con los siguientes campos:

| Campo | Obligatorio | Descripción |
| --- | :-: | --- |
| Nombre | si | Nombre identificativo del cultivo |
| Variedad | no | Variedad o tipo de planta |
| Campaña | si | Campaña agrícola (ej. 2025-2026) |
| Fecha de siembra | no | Fecha aproximada de siembra |
| Estado | si | Estado actual (en preparación, activo, finalizado) |
| Observaciones | no | Notas adicionales |

### Paso 3: Dibujar la parcela

1. En el formulario, selecciona la pestaña **Parcela**.
2. Haz clic en **Dibujar en el mapa**.
3. Dibuja el polígono sobre el mapa haciendo clic en cada vértice.
4. Cierra el polígono haciendo clic sobre el primer punto.

!!! success "Emparejamiento automático"
    Al cerrar el polígono, Terra busca automáticamente el recinto SIGPAC que contiene el centro de la parcela y lo empareja. Si hay coincidencia, verás el identificador del recinto SIGPAC junto a la parcela.

### Paso 4: Importar vectorial (alternativa)

Si ya tienes la geometría de la parcela en un fichero, puedes importarla directamente:

1. Haz clic en **Importar vectorial**.
2. Selecciona el fichero (GeoPackage, GeoJSON, Shapefile, KML/KMZ o CSV).
3. Terra normaliza la geometría a EPSG:4326 y la carga sobre el mapa.

!!! info "Formatos soportados"
    Consulta la lista completa en [Formatos vectoriales](../formatos.md).

### Paso 5: Guardar

Haz clic en **Guardar**. El cultivo aparece en la lista y su parcela se muestra en el mapa.

## Editar un cultivo

1. Haz clic en el cultivo que quieres modificar.
2. Modifica los campos necesarios.
3. Haz clic en **Guardar**.

Para modificar la parcela, haz clic en **Editar geometría** y ajusta los vértices del polígono.

## Borrar un cultivo

!!! danger "Acción irreversible"
    Borrar un cultivo elimina permanentemente la ficha y la geometría asociada. Los adjuntos permanecen en el servidor.

1. Selecciona el cultivo.
2. Haz clic en **Eliminar**.
3. Confirma la acción.

## Adjuntos

Puedes adjuntar fotos, documentos y archivos a cada cultivo:

1. Abre la ficha del cultivo.
2. Ve a la pestaña **Adjuntos**.
3. Arrastra o selecciona los ficheros.

Los adjuntos se almacenan en el backend bajo `backend/data/uploads/cultivos/<key>/`.

## Siguiente paso

Con tus cultivos registrados, aprende a [registrar actuaciones](crear-actuacion.md) sobre ellos.
