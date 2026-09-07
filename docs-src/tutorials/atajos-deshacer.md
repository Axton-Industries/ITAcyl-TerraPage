# Deshacer global y atajos de teclado

Terra incluye un **sistema de deshacer global** (Ctrl+Z) que revierte cualquier mutación de datos en los stores: borrar una actuación, mover un cultivo de campaña, editar un tratamiento, etc. Funciona también con **Ctrl+Shift+Z** (rehacer) y con la mayoría de acciones de la app.

## Cómo funciona

Hay un `undoStore` global (`src/stores/undoStore.ts`) que mantiene una **pila de hasta 30 estados anteriores** (constante `MAX_STACK`). Cada vez que un store muta datos a través de `withUndo(store, label)`, se guarda un snapshot etiquetado (por ejemplo *"Eliminar cultivo C-12"*, *"Mover actuación a otra campaña"*).

!!! info "Reescritura inmutable"
    La mutación se hace siempre con los helpers de `src/stores/crud.ts` (`prepend`, `dropKey`, `patchItem`, `pushAdj`, etc.), que devuelven un nuevo estado sin tocar el anterior. Eso permite viajar atrás en el tiempo con un simple `set(state)` al snapshot guardado.

## Deshacer y rehacer

| Atajo | Acción |
| --- | --- |
| **Ctrl + Z** | Deshacer la última mutación |
| **Ctrl + Shift + Z** | Rehacer |

El botón **Deshacer** de la **TopBar** (esquina superior derecha) hace lo mismo que Ctrl+Z. Se deshabilita cuando la pila está vacía.

!!! tip "Etiqueta visible"
    Cada snapshot lleva una etiqueta legible que verás en el tooltip del botón Deshacer (por ejemplo *"Recuperar tratamiento T-04 eliminado"*). Así sabes qué vas a deshacer antes de hacerlo.

## Atajos de teclado

Además del deshacer, Terra expone:

| Atajo | Acción |
| --- | --- |
| **Ctrl + Z** | Deshacer |
| **Ctrl + Shift + Z** | Rehacer |
| **Ctrl + ?** | Abrir la ayuda (modal con secciones por módulo) |
| **Escape** | Cerrar modales abiertos |
| **F11** | Alternar pantalla completa (en la app de escritorio) |
| **+ / -** | Zoom sobre el mapa (cuando el foco está en él) |
| **Clic derecho + arrastrar** sobre el mapa | Acumular recintos SIGPAC seleccionados para VRA/recorte |
| **Clic derecho** sobre un punto de interés | Iniciar una cadena de POIs conectados (postes, tendidos) |
| **Doble clic** sobre un cultivo del mapa | Abrir la ficha del cultivo en `/cultivos?crop=...` |

## Acciones que **no** se pueden deshacer

!!! warning "No son parte de la pila"
    - Subir o borrar adjuntos en el backend (los ficheros en disco no se restauran).
    - Cambios en la sesión de autenticación.
    - Recargar la página o cerrar la app (la pila está en memoria).
    - Acciones de mapa como dibujar geometrías o mover el extent.

## Siguiente paso

- [Navegar por el mapa](navegar-mapa.md) para practicar los atajos de teclado.
