# Calendario

El módulo **Calendario** agrega en una vista mensual todos los eventos relevantes: las **actuaciones**, los **mantenimientos y averías** de maquinaria, las **compras de maquinaria** y los **eventos libres** que tú crees.

## Vista general

!!! note "Vista mensual"
    El calendario muestra un mes a la vez. Los eventos que ocupan varios días (multi-día) se renderizan como una banda horizontal que cubre todas las fechas del rango.

## Crear un evento desde el calendario

### Paso 1: Acceder al módulo

Haz clic en **Calendario** en la barra lateral.

### Paso 2: Nuevo registro

Haz clic en **Nuevo registro** y elige el tipo:

- **Actuación**: crea un registro de actuación pre-rellenado.
- **Mantenimiento**: registra un mantenimiento programado para una máquina.
- **Compra de maquinaria**: alta de una máquina con fecha de compra.
- **Evento libre**: cualquier cosa (reunión, visita, recordatorio…).

!!! tip "Multi-tipo en un solo modal"
    El modal detecta el tipo y muestra los campos específicos. Los datos comunes (título, fecha inicio, fecha fin, todo el día) están siempre presentes.

### Paso 3: Rellenar y guardar

- **Título** del evento.
- **Fecha de inicio** (obligatoria).
- **Fecha de fin** (opcional, para eventos de varios días).
- **Todo el día** (checkbox).
- **Notas** (opcional).

## Navegar los eventos del mes

- **Click en un día con eventos** → se despliega un panel lateral con la lista de eventos de ese día, ordenados por hora.
- **Click en un evento** → abre su ficha (actuación, mantenimiento, máquina o evento).
- **Flechas del mes** → navegas al mes anterior/siguiente.

!!! info "Agregación automática"
    No hace falta que crees manualmente los eventos en el calendario: cualquier **actuación** con `fechaInicio`/`fechaFinalizacion` aparece automáticamente, lo mismo con los **mantenimientos** programados y las **averías** abiertas o resueltas. El calendario es una vista derivada, no una fuente de datos propia.

## Eventos recurrentes

Los mantenimientos tienen **periodicidad** (km, horas, días). El calendario muestra el **próximo vencimiento** calculado por la lógica de urgencia (ver módulo [Maquinaria](maquinaria.md)). Si quieres reprogramar, edita el mantenimiento desde su ficha.

## Siguiente paso

- [Registrar actuaciones](crear-actuacion.md) para que aparezcan automáticamente.
- [Configurar la maquinaria](maquinaria.md) con sus mantenimientos.
