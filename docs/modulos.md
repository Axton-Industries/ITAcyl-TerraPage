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

Visor geográfico con OpenLayers. Capas base (OSM, Esri World Imagery, PNOA MA, PNOA Histórico, Sentinel-2 cloudless, Wayback y Fototeca IGN), recintos SIGPAC por WMS, carga de GeoTIFF multiespectral, selección de banda (NIR, R, G, RE, azul, LWIR), recorte por parcelas y puntos de interés en el mapa (focos de plaga, postes, cierros rotos, zanjas, pedregales y tipos definidos por el usuario).

### Cultivos

Fichas de cultivo con nombre, variedad, campaña, fecha de siembra, estado, observaciones y adjuntos. Las parcelas se dibujan sobre el mapa (con emparejado automático contra SIGPAC) o se importan de un vectorial. Solo accesible para escritura por *Administración*; los demás roles ven en lectura.

### Actuaciones

Registro de tareas agrícolas con adjuntos. *Trabajador* puede crear y editar; *Administración* además puede borrar.

### Tratamientos

Registro de productos fitosanitarios y fertilizantes. Mismas reglas de permisos que Actuaciones.

### Maquinaria

Inventario de maquinaria con adjuntos (fotos y documentos).

### Muestras de suelo

Registro de muestras y analíticas de suelo.

### Gestión de riego

Cálculo de ETc con datos del **SIAR** (ET0 y lluvia efectiva) sobre las estaciones de cada provincia, con un mapa de necesidades hídricas pintado sobre las parcelas.

### Calendario

Vista de calendario con las tareas registradas.

### Trabajadores

Listado de trabajadores. Visible y editable solo por *Administración*.
