# Gestión de riego

El módulo de gestión de riego calcula la Evapotranspiración de Cultivo (ETc) usando datos agroclimáticos del SIAR (Sistema de Información Agroclimática para el Regadío) y genera un mapa de necesidades hídricas sobre tus parcelas.

## Cómo funciona

1. Terra consulta el API del SIAR para obtener datos de **ET0** (evapotranspiración de referencia) y **lluvia efectiva**.
2. Seleccionas la estación meteorológica más cercana a tu zona.
3. Terra calcula la ETc para cada parcela y genera un mapa visual con las necesidades hídricas.

!!! info "Datos del SIAR"
    El SIAR proporciona datos agroclimáticos de toda España. Terra usa la base URL: `https://servicio.mapa.gob.es/siarapi`

## Configurar la estación

### Paso 1: Acceder al módulo

Haz clic en **Gestión de riego** en la barra lateral.

### Paso 2: Seleccionar ámbito

1. Selecciona el ámbito geográfico:
    - **CCAA**: Comunidad Autónoma.
    - **Provincia**: Selección concreta.
    - **Estación**: Estación meteorológica específica.

2. Terra carga la lista de estaciones disponibles desde `/api/v1/siar/info`.

!!! tip "Estación recomendada"
    Elige la estación meteorológica más cercana a tus parcelas para obtener los datos más precisos.

### Paso 3: Seleccionar periodo

1. Indica la **fecha inicial** y **fecha final** del periodo a analizar.
2. Selecciona el tipo de datos:
    - **Horarios**: datos por hora.
    - **Diarios**: datos por día.
    - **Semanales**: datos por semana.
    - **Mensuales**: datos por mes.

### Paso 4: Visualizar resultados

Haz clic en **Calcular**. Terra consulta el SIAR y genera:

- Una **tabla** con los valores de ET0, lluvia efectiva y ETc calculada.
- Un **mapa** con las parcelas coloreadas según la necesidad hídrica.

## Interpretar el mapa

Los colores del mapa indican el nivel de necesidad hídrica:

| Color | Significado |
| --- | --- |
| Verde claro | Necesidad baja — mantenimiento mínimo |
| Verde oscuro | Necesidad moderada — riego regular |
| Amarillo | Necesidad alta — riego recomendado |
| Naranja | Necesidad muy alta — riego urgente |
| Rojo | Necesidad crítica — riego inmediato |

## Exportar datos

Los datos agroclimáticos se pueden exportar para uso externo. Consulta la [API REST](../api.md) para los endpoints de datos del SIAR.

!!! warning "Token del SIAR"
    El token de acceso al SIAR (`SI_SIAR_TOKEN`) se gestiona server-side y nunca se expone en el navegador. Asegúrate de configurarlo en `backend/.env` antes de usar este módulo.

## Requisitos

!!! note "Estaciones disponibles"
    Terra carga las estaciones del SIAR según la provincia seleccionada. El módulo funciona para cualquier estación del sistema SIAR en territorio español.

## Siguiente paso

Para más detalles sobre los módulos disponibles, consulta la [guía de módulos](../modulos.md). Si necesitas configurar variables de entorno, ve a [Variables de entorno](../env.md).
