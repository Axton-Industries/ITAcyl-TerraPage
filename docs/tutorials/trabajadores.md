# Gestión de trabajadores

El módulo **Trabajadores** es el registro de personal de la explotación: alta de empleados, categorías profesionales, tipos de contrato y estado laboral. Es un módulo **solo de Administración**.

## Requisitos

!!! warning "Permisos"
    Solo **Administración** tiene acceso al módulo. Los roles *Trabajador* y *Visitante* no lo ven en la barra lateral.

## Acceder al módulo

Haz clic en **Trabajadores** en la barra lateral (último módulo del menú).

## Crear un trabajador

### Paso 1: Nuevo trabajador

Haz clic en **Nuevo trabajador**. Aparece un formulario con los campos:

| Campo | Obligatorio | Descripción |
| --- | :-: | --- |
| Nombre | sí | Nombre del empleado |
| Apellidos | sí | Apellidos |
| DNI / NIE | no | Documento de identidad |
| Categoría profesional | sí | Una de las 12 categorías predefinidas (ingeniero, capataz, tractorista, peón…) |
| Estado laboral | sí | Uno de los 6 estados (alta, baja temporal, vacaciones, baja definitiva…) |
| Fecha de alta | sí | Fecha de incorporación |
| Tipo de contrato | sí | Indefinido, temporal, fijo-discontinuo, formación, etc. (9 valores) |
| Teléfono | no | Contacto |
| Email | no | Contacto |
| Observaciones | no | Notas libres |

### Paso 2: Guardar

El trabajador aparece en la lista, donde puedes buscarlo por nombre, apellidos, DNI o categoría.

## Buscar y filtrar

La cabecera de la lista tiene una **barra de búsqueda** (con lupa y botón limpiar) que filtra por:

- Nombre o apellidos (coincidencia parcial, insensible a mayúsculas).
- DNI.
- Categoría profesional.

## Editar un trabajador

1. Haz clic en la fila del trabajador.
2. Modifica los campos necesarios.
3. Guarda.

## Eliminar un trabajador

!!! danger "Acción irreversible"
    Borrar un trabajador elimina su ficha y sus partes de trabajo asociados. Los partes ya vinculados a actuaciones siguen siendo válidos (se conserva la relación por clave).

1. Selecciona el trabajador.
2. Haz clic en **Eliminar**.
3. Confirma la acción.

## Vincular a actuaciones

Cuando registres una [actuación](crear-actuacion.md), puedes seleccionar los **trabajadores** que han participado. La lista del modal muestra todos los trabajadores activos; al guardar, la actuación se asocia a sus claves (`trabajadorKeys[]`).

## Siguiente paso

- [Registrar una actuación](crear-actuacion.md) con los trabajadores que han participado.
