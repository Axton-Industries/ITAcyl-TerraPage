# Registrar actuaciones

Las actuaciones son las tareas agrícolas que se realizan sobre los cultivos: labores, podas, riegos, cosechas, etc.

## Crear una actuación

### Paso 1: Acceder al módulo

Haz clic en **Actuaciones** en la barra lateral.

### Paso 2: Nueva actuación

Haz clic en **Nueva actuación** y rellena el formulario:

| Campo | Obligatorio | Descripción |
| --- | :-: | --- |
| Título | si | Nombre o descripción breve de la tarea |
| Tipo | si | Tipo de actuación (labor, poda, riego, recolección, etc.) |
| Fecha | si | Fecha de realización |
| Observaciones | no | Detalles adicionales |

!!! tip "Rol de Trabajador"
    Los usuarios con rol **Trabajador** pueden crear y editar actuaciones. Solo **Administración** puede borrar.

### Paso 3: Añadir adjuntos

Puedes adjuntar fotos del estado antes/después de la actuación, documentos o cualquier fichero relevante.

1. En el formulario de la actuación, ve a **Adjuntos**.
2. Selecciona o arrastra los ficheros.
3. Los adjuntos se suben al backend bajo `backend/data/uploads/actuaciones/<key>/`.

### Paso 4: Guardar

Haz clic en **Guardar**. La actuación queda registrada y visible en la lista y en el [calendario](../modulos.md#calendario).

## Registrar tratamientos

Los tratamientos son actuaciones específicas sobre productos fitosanitarios y fertilizantes.

### Paso 1: Acceder al módulo

Haz clic en **Tratamientos** en la barra lateral.

### Paso 2: Nuevo tratamiento

1. Haz clic en **Nuevo tratamiento**.
2. Rellena los campos:
    - **Producto**: nombre del producto fitosanitario o fertilizante.
    - **Tipo**: fungicida, herbicida, insecticida, fertilizante, etc.
    - **Dosis**: cantidad aplicada.
    - **Fecha**: fecha de aplicación.
    - **Observaciones**: notas adicionales.

!!! warning "Mismos permisos"
    Los permisos de tratamientos son idénticos a los de actuaciones: **Trabajador** puede crear y editar; solo **Administración** puede borrar.

### Paso 3: Guardar

Haz clic en **Guardar**. El tratamiento queda registrado y asociado al cultivo correspondiente.

## Ver historial

Tanto actuaciones como tratamientos se pueden consultar:

- En la **lista del módulo**, filtrados por tipo o fecha.
- En el **calendario**, que muestra todas las tareas registradas en vista mensual.
- En la **ficha del cultivo**, si se han vinculado a un cultivo específico.

## Siguiente paso

Para un overview de todos los módulos, consulta la [guía de módulos](../modulos.md). Si necesitas configurar el riego, ve al [tutorial de gestión de riego](gestion-riego.md).
