# Terra

**Gestión agrícola con visor geográfico.** Software libre GPL-3.0, desarrollado en el Instituto Tecnológico Agrario de Castilla y León (ITACyL).

<div class="terra-callout">
  <div>
    <span class="terra-callout-title">¿Sabías que…?</span>
    Terra funciona como aplicación de escritorio con instalador de Windows, o como aplicación web en cualquier navegador. Los datos estructurados viven en tu navegador, así que no necesitas servidor para empezar a trabajar. Casi todo se puede deshacer con <strong>Ctrl+Z</strong>.
  </div>
</div>

## Características

<div class="terra-feature-grid">
  <div class="terra-feature-card">
    <h3> Mapa interactivo </h3>
    <p>Visor geográfico con capas SIGPAC, GeoTIFF multiespectral, dibujo de parcelas, medición y modos de comparación (split / swipe).</p>
  </div>
  <div class="terra-feature-card">
    <h3> Cultivos </h3>
    <p>Fichas de cultivo con tipo, variedad, campaña, estado y parcelas vinculadas al mapa. Auto-emparejado con recintos SIGPAC.</p>
  </div>
  <div class="terra-feature-card">
    <h3> Actuaciones y tratamientos </h3>
    <p>Registro de tareas agrícolas, productos fitosanitarios y fertilizantes con adjuntos, vinculados a cultivos, trabajadores y maquinaria.</p>
  </div>
  <div class="terra-feature-card">
    <h3> Maquinaria </h3>
    <p>Inventario con mantenimientos programados (badge de urgencia) y averías, todo con adjuntos por elemento.</p>
  </div>
  <div class="terra-feature-card">
    <h3> Muestras de suelo </h3>
    <p>Generación automática de puntos sobre las parcelas, marcado en campo y exportación a KMZ, KML, GeoJSON y Shapefile.</p>
  </div>
  <div class="terra-feature-card">
    <h3> Calendario </h3>
    <p>Vista mensual que agrega automáticamente actuaciones, mantenimientos, averías y eventos libres.</p>
  </div>
  <div class="terra-feature-card">
    <h3> Gestión de riego </h3>
    <p>Cálculo de ETc con datos SIAR (interpolación IDW por estación) y mapa de necesidades hídricas por parcela.</p>
  </div>
  <div class="terra-feature-card">
    <h3> Multiusuario </h3>
    <p>Tres roles (Administración, Trabajador, Visitante) con permisos granulares por módulo y acción.</p>
  </div>
</div>

---

## Empezar rápido

Instala Terra y tenlo funcionando en menos de 5 minutos.

[:material-rocket-launch: Inicio rápido](inicio-rapido.md){ .md-button .md-button--primary }

[:material-download: Generar instalador](despliegue.md){ .md-button }

[:fontawesome-brands-github: Repositorio](https://github.com/Axton-Industries/ITAcyl-TerraPage){ .md-button }

---

## Tutoriales paso a paso

Guías paso a paso para sacar el máximo partido a cada módulo.

<div class="terra-feature-grid">
  <a class="terra-feature-card" href="tutorials/navegar-mapa.md">
    <h3> Navegar por el mapa </h3>
    <p>Capas base, recintos SIGPAC, carga de GeoTIFF y puntos de interés.</p>
    <p><span>Empezar &rarr;</span></p>
  </a>
  <a class="terra-feature-card" href="tutorials/comparar-mapa.md">
    <h3> Comparar el mapa </h3>
    <p>Modos split y swipe para comparar dos imágenes o un ráster contra la ortofoto.</p>
    <p><span>Empezar &rarr;</span></p>
  </a>
  <a class="terra-feature-card" href="tutorials/crear-cultivo.md">
    <h3> Crear un cultivo </h3>
    <p>Dibuja parcelas, vincula cultivos y gestiona la información de campo.</p>
    <p><span>Empezar &rarr;</span></p>
  </a>
  <a class="terra-feature-card" href="tutorials/crear-actuacion.md">
    <h3> Registrar actuaciones </h3>
    <p>Registra tareas agrícolas, tratamientos y adjunta documentación.</p>
    <p><span>Empezar &rarr;</span></p>
  </a>
  <a class="terra-feature-card" href="tutorials/maquinaria.md">
    <h3> Gestionar maquinaria </h3>
    <p>Inventario, mantenimientos con urgencia y averías, todo con adjuntos.</p>
    <p><span>Empezar &rarr;</span></p>
  </a>
  <a class="terra-feature-card" href="tutorials/muestras-suelo.md">
    <h3> Muestras de suelo </h3>
    <p>Genera puntos, márcalos en campo y expórtalos a SHP/KML/KMZ/GeoJSON.</p>
    <p><span>Empezar &rarr;</span></p>
  </a>
  <a class="terra-feature-card" href="tutorials/calendario.md">
    <h3> Calendario </h3>
    <p>Vista mensual con eventos agregados de todos los módulos.</p>
    <p><span>Empezar &rarr;</span></p>
  </a>
  <a class="terra-feature-card" href="tutorials/gestion-riego.md">
    <h3> Gestión de riego </h3>
    <p>Calcula las necesidades hídricas con datos agroclimáticos del SIAR.</p>
    <p><span>Empezar &rarr;</span></p>
  </a>
  <a class="terra-feature-card" href="tutorials/atajos-deshacer.md">
    <h3> Deshacer y atajos </h3>
    <p>Ctrl+Z global, navegación por teclado, atajos del mapa y cadenas de POIs.</p>
    <p><span>Empezar &rarr;</span></p>
  </a>
</div>

---

## Información del proyecto

| | |
|---|---|
| **Versión actual** | `2.0.0-beta.1` |
| **Licencia** | [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html) |
| **Frontend** | React 19 + TypeScript + Vite 8 + Tailwind 4 + OpenLayers 10 + Zustand |
| **Backend** | Python 3.12 + FastAPI + rasterio + pyogrio |
| **Persistencia** | `localStorage` del navegador (datos) + backend (ficheros) |
| **Escritorio** | Electron 42 + electron-builder (NSIS) + PyInstaller |
| **Idioma** | Español |

!!! info "Software libre"
    Terra es software libre publicado bajo GPL-3.0. Las contribuciones son bienvenidas en [GitHub](https://github.com/Axton-Industries/ITAcyl-TerraPage).
