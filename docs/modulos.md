# Módulos

Sidebar declarado en `src/components/layout/Sidebar.tsx` (`NAV` array), en el orden en que aparece al usuario.

| # | Módulo | Ruta | Solo admin |
|:-:|---|---|:-:|
| 1 | Mapa | `/` | — |
| 2 | Cultivos | `/cultivos` | — |
| 3 | Actuaciones | `/actuaciones` | — |
| 4 | Tratamientos | `/tratamientos` | — |
| 5 | Maquinaria | `/maquinaria` | — |
| 6 | Muestras de suelo | `/muestras-suelo` | — |
| 7 | Gestión de riego | `/gestion-riego` | — |
| 8 | Calendario | `/calendario` | — |
| 9 | Trabajadores | `/trabajadores` | sí |

!!! note "Visibilidad del sidebar"
    El módulo **Trabajadores** está oculto para los perfiles *Trabajador* y *Visitante*. La condición efectiva de visibilidad en el código es `can(user, 'cultivos:create')`, es decir, se muestra cuando el usuario tiene permiso para crear cultivos, que en la práctica coincide con el rol *Administración*.

## Qué hace cada módulo

### Mapa

Visor geográfico con OpenLayers y proj4. Funcionalidades:

- **Capas base** (satelitales y mapas): OSM, Esri World Imagery, PNOA MA, PNOA Histórico, Sentinel-2 cloudless, Wayback (con detección de fechas distintas vía SHA-256) y Fototeca IGN.
- **Recintos SIGPAC** por WMS (capa `AU.Sigpac:recinto`, zoom mínimo 16).
- **Selección de recinto por clic**: identifica el recinto y muestra sus atributos.
- **Carga de GeoTIFF** multiespectral (NIR, R, G, RE, azul, LWIR) con detección automática de bandas, dedup por firma y preview HQ.
- **Modos de comparación**: *split* (dos mapas sincronizados) y *swipe* (un mapa con divisor arrastrable).
- **Medición** de distancia y área sobre el mapa.
- **Importación vectorial** desde el panel de capas (GeoPackage, GeoJSON, Shapefile empaquetado, KML/KMZ, CSV).
- **Puntos de interés (POIs)** con tipos personalizables y **cadenas** entre POIs (clic-derecho para iniciar un tendido).
- **Acumulación de recintos** con clic-derecho para VRA/recorte.
- **Doble clic** sobre un cultivo del mapa abre su ficha en `/cultivos?crop=...`.

### Cultivos

Fichas de cultivo con **tipo + lista de variedades** (sincronizadas: cambiar tipo resetea variedades), campaña, fecha de siembra, estado y adjuntos. Las parcelas se dibujan sobre el mapa (con emparejado automático contra SIGPAC) o se importan de un vectorial. **Drag & drop** entre carpetas de campaña. *Administración* edita; los demás roles ven en lectura.

### Actuaciones

Registro de tareas agrícolas con adjuntos. Vinculadas a **cultivos, trabajadores (`trabajadorKeys[]`) y maquinaria (`maquinariaKeys[]`)**. Soportan **tratamiento asociado** (creable inline desde el modal de nueva actuación) y rango de fechas (`fechaInicio`/`fechaFinalizacion`). *Trabajador* puede crear y editar; *Administración* además puede borrar.

### Tratamientos

Registro de productos fitosanitarios y fertilizantes. Cálculo de **dosis** a partir de volumen y superficie, con **conversión de unidades** (L↔m³↔hl, ha↔m²). Mismas reglas de permisos que Actuaciones.

### Maquinaria

Inventario con:

- **Ficha de máquina**: categoría, tipo, marca, modelo, estado, energía (valores personalizados), potencia, año, matrícula.
- **Mantenimientos programados** con periodicidad (km, horas, días) y **badge de urgencia** automático (vencido / pendiente / al día).
- **Averías** puntuales con fecha, descripción y adjuntos.
- **Adjuntos anidados** por mantenimiento y por avería (sub-claves `${key}-mant-${id}` / `${key}-averia-${id}`).
- **Marcas extra** persistentes (el usuario puede añadir y eliminar valores personalizados).

### Muestras de suelo

Generación automática de **puntos de muestreo** sobre las parcelas (densificación + farthest-point sampling). Cada punto tiene un **ID estable** entre exportaciones. Mini-mapa canvas con ESRI World Imagery. Marcado en campo (verde = tomada). **Exportación client-side** a:

- **KMZ** (KML comprimido) — para apps móviles de campo.
- **KML** — para Google Earth / My Maps.
- **GeoJSON** — para QGIS, web.
- **SHP** (ZIP con `.shp .shx .dbf .prj`) — para QGIS/ArcGIS, generado en `src/lib/vectorExport.ts` sin librerías externas.

### Gestión de riego

Cálculo de **ETc = ET0 · Kc** con datos del **SIAR** (ET0 y lluvia efectiva) sobre las estaciones de cada provincia, con un mapa de **necesidades hídricas** pintado sobre las parcelas.

- **Mapeo SIGPAC↔SIAR** (`SIGPAC_A_SIAR` en `src/lib/siarRiego.ts`): convierte códigos de provincia SIGPAC a códigos de provincia SIAR.
- **Interpolación IDW** desde la estación más cercana al centroide del polígono de cada cultivo.
- **Kc por cultivo** configurable.
- Resultado: `ResultadoCultivo { neta, etc, et0, lluviaEfectiva, dias, kc, estacion }`.

### Calendario

Vista mensual que **agrega automáticamente**:

- Actuaciones (en su rango `fechaInicio`/`fechaFinalizacion`).
- Mantenimientos de maquinaria (próximo vencimiento).
- Averías (abiertas y resueltas).
- Compras de maquinaria.
- Eventos libres (cualquier cosa).

Eventos **multi-día** se renderizan como una banda horizontal. Click en un día con eventos → panel lateral con el listado. Modal *Nuevo registro* multi-tipo.

### Trabajadores

Listado de personal con DNI, **categoría profesional** (12 valores), **estado laboral** (6 valores), **tipo de contrato** (9 valores), fecha de alta, teléfono, email. Visible y editable solo por *Administración*. Las actuaciones se vinculan a trabajadores por `trabajadorKeys[]`.

## Rutas entre módulos (deep-linking)

Terra usa el `search` de la URL para resaltar elementos al entrar desde otra página:

| Query | Página destino | Efecto |
| --- | --- | --- |
| `?cultivo=ID` | `/cultivos` | Resalta la ficha del cultivo |
| `?actuacion=ID` | `/actuaciones` | Resalta la actuación |
| `?muestra=ID` | `/muestras-suelo` | Resalta la muestra |
| `?crop=ID` | `/cultivos` | Abre la ficha del cultivo (doble clic en mapa) |
| `?nueva=1` | `/actuaciones` | Abre directamente el modal de nueva |
| `?maquinaria=ID` | `/maquinaria` | Resalta la máquina |
| `?tratamiento=ID` | `/tratamientos` | Resalta el tratamiento |

## Sistema de deshacer global

Casi cualquier mutación de datos pasa por `withUndo(store, label)` y queda registrada en `undoStore` (pila de hasta 30 estados con etiqueta legible). **Ctrl+Z** revierte la última, **Ctrl+Shift+Z** la rehace. El botón Deshacer de la TopBar hace lo mismo. Ver [tutorial de deshacer y atajos](tutorials/atajos-deshacer.md).
