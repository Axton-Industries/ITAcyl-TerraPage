# Gestionar maquinaria

El módulo **Maquinaria** es el inventario de la explotación: tractores, aperos, equipos de tratamiento, etc. Cada máquina tiene su ficha con datos técnicos, **mantenimientos programados** (con urgencia calculada) y **averías** registradas, todos con sus adjuntos.

## Requisitos

!!! warning "Permisos"
    Solo **Administración** y **Trabajador** pueden crear y editar máquinas. **Trabajador** no puede borrar máquinas; solo **Administración** puede hacerlo. La creación de marca/categoría/energía personalizadas está abierta a ambos roles.

## Crear una máquina

### Paso 1: Acceder al módulo

Haz clic en **Maquinaria** en la barra lateral.

### Paso 2: Nueva máquina

Haz clic en el botón **Nueva máquina**. Se abre un formulario con los campos:

| Campo | Obligatorio | Descripción |
| --- | :-: | --- |
| Nombre | sí | Nombre identificativo de la máquina (ej. *Tractor John Deere 6110*) |
| Categoría | sí | Tractor, Aperos, Pulverizador, etc. (lista cerrada + valores personalizados) |
| Tipo | sí | Subtipo dentro de la categoría |
| Marca | no | Marca comercial; se autocompleta con valores ya introducidos |
| Modelo | no | Modelo concreto |
| Estado | sí | Operativa, Averiada, Fuera de servicio, etc. |
| Energía | sí | Diésel, Gasolina, Eléctrica, etc. (valores personalizados admitidos) |
| Potencia | no | CV o kW (texto libre) |
| Año | no | Año de adquisición |
| Matrícula / bastidor | no | Identificadores administrativos |

!!! tip "Listas dinámicas"
    Categoría, marca y energía aceptan valores personalizados: si el desplegable no tiene lo que necesitas, escribe el nombre y se guarda para futuras máquinas. Si más adelante quieres eliminar un valor personalizado, hay un botón para hacerlo en la propia lista.

### Paso 3: Guardar

La máquina aparece como una **tarjeta expandible** con badges de estado y energía.

## Mantenimientos programados

Cada máquina puede tener N mantenimientos (revisión cada X km/horas, cambio de aceite, ITV, etc.). Cada mantenimiento tiene:

- **Concepto** (texto libre).
- **Periodicidad** (km, horas o días).
- **Última fecha** o **último valor** realizado.
- **Próximo vencimiento** (calculado automáticamente).
- **Adjuntos** (facturas, albaranes, fotos del trabajo hecho).

### Badge de urgencia

Terra calcula y muestra un badge en cada mantenimiento:

- **Rojo (vencido)**: el mantenimiento debería haberse hecho hace más de un umbral razonable.
- **Amarillo (pendiente)**: vence pronto.
- **Verde (al día)**: aún queda margen.

!!! info "Cálculo de urgencia"
    La función `mantenimientoUrgencia(mantenimiento, hoy)` decide el color comparando el próximo vencimiento con umbrales por periodicidad. Está implementada en `src/pages/MaquinariaPage.tsx`.

### Adjuntar documentos a un mantenimiento

1. Expande la tarjeta de la máquina.
2. En el mantenimiento correspondiente, haz clic en **Adjuntar**.
3. Sube la factura, foto o albarán. Los adjuntos de mantenimiento se guardan en una sub-clave `${key}-mant-${id}` para no mezclarse con los adjuntos generales de la máquina.

## Averías

Funcionan igual que los mantenimientos pero sin periodicidad. Registran una incidencia puntual con sus fotos y notas.

- **Concepto** y **descripción** de la avería.
- **Fecha** en que ocurrió.
- **Resuelta** (sí/no) y, si lo está, **fecha de resolución**.
- **Adjuntos**: fotos del desperfecto, presupuestos, facturas de la reparación.

## Eliminar una máquina

!!! danger "Acción irreversible"
    Borrar una máquina elimina su ficha, mantenimientos, averías y todos los adjuntos asociados.

1. Expande la tarjeta de la máquina.
2. Haz clic en **Eliminar**.
3. Confirma la acción.

## Siguiente paso

- [Registrar una actuación](crear-actuacion.md) asociando la maquinaria usada.
- [Crear puntos de muestreo de suelo](muestras-suelo.md) en las parcelas donde se ha trabajado.
