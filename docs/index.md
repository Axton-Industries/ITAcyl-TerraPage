---
hide:
  - navigation
---

# Terra

**Gestión agrícola con visor geográfico.** Software libre GPL-3.0, desarrollado en el Instituto Tecnológico Agrario de Castilla y León (ITACyL).

<div class="terra-feature-grid">
  <div class="terra-feature-card">
    <h3> Mapa interactivo </h3>
    <p>Visor geográfico con capas SIGPAC, GeoTIFF multiespectral y puntos de interés sobre la parcela.</p>
  </div>
  <div class="terra-feature-card">
    <h3> Cultivos </h3>
    <p>Fichas de cultivo con variedad, campaña, estado y parcelas vinculadas al mapa.</p>
  </div>
  <div class="terra-feature-card">
    <h3> Actuaciones y tratamientos </h3>
    <p>Registro de tareas agrícolas, productos fitosanitarios y fertilizantes con adjuntos.</p>
  </div>
  <div class="terra-feature-card">
    <h3> Maquinaria </h3>
    <p>Inventario de maquinaria con fotos y documentación técnica adjunta.</p>
  </div>
  <div class="terra-feature-card">
    <h3> Gestión de riego </h3>
    <p>Cálculo de ETc con datos del SIAR y mapa de necesidades hídricas sobre parcelas.</p>
  </div>
  <div class="terra-feature-card">
    <h3> Multiusuario </h3>
    <p>Tres roles (Administración, Trabajador, Visitante) con permisos granulares.</p>
  </div>
</div>

---

## Empezar rápido

Instala Terra y tenlo funcionando en menos de 5 minutos.

1. **Clona el repositorio** y ejecuta el instalador de dependencias
2. **Lanza en modo desarrollo** con un solo comando
3. **Abre el navegador** en `localhost:3000`

[:material-rocket-launch: Inicio rápido](inicio-rapido.md){ .md-button .md-button--primary }

[:material-download: Generar instalador](despliegue.md){ .md-button }

---

## Aprende a usar Terra

Guías paso a paso para sacar el máximo partido a cada módulo.

<div class="terra-feature-grid">
  <div class="terra-feature-card">
    <h3> Navegar por el mapa </h3>
    <p>Capas base, recintos SIGPAC, carga de GeoTIFF y puntos de interés.</p>
    <p><a href="tutorials/navegar-mapa.md">Ver tutorial &rarr;</a></p>
  </div>
  <div class="terra-feature-card">
    <h3> Crear un cultivo </h3>
    <p>Dibuja parcelas, vincula cultivos y gestiona la información de campo.</p>
    <p><a href="tutorials/crear-cultivo.md">Ver tutorial &rarr;</a></p>
  </div>
  <div class="terra-feature-card">
    <h3> Registrar actuaciones </h3>
    <p>Registra tareas agrícolas, tratamientos y adjunta documentación.</p>
    <p><a href="tutorials/crear-actuacion.md">Ver tutorial &rarr;</a></p>
  </div>
  <div class="terra-feature-card">
    <h3> Gestión de riego </h3>
    <p>Calcula las necesidades hídricas con datos agroclimáticos del SIAR.</p>
    <p><a href="tutorials/gestion-riego.md">Ver tutorial &rarr;</a></p>
  </div>
</div>

---

## Información del proyecto

| | |
|---|---|
| **Versión actual** | `2.0.0-beta.1` |
| **Licencia** | [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html) |
| **Frontend** | React 19 + TypeScript + Vite 8 + Tailwind 4 |
| **Backend** | Python 3.12 + FastAPI |
| **Persistencia** | `localStorage` del navegador (datos) + backend (ficheros) |
| **Idioma** | Español |

!!! info "Software libre"
    Terra es software libre. Puedes contribuir en [GitHub](https://github.com/Axton-Industries/ITAcyl-TerraPage).
