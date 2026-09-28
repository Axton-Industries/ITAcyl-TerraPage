# Landing page

Documentación del sitio estático (`index.html`, `styles.css`, `main.js`) del proyecto ITAcyl-TerraPage.

## Estructura de la página

| Sección | ID | Descripción |
|---|---|---|
| Hero | `top` | Título, descripción, botón descarga (`#descarga-btn`), estadísticas y captura principal (`.hero-shot`). |
| Funcionalidades | `funcionalidades` | 8 tarjetas (`.feature`) con icono SVG, título y descripción. |
| Cómo funciona | `como-funciona` | 3 pasos (`.step`) numerados (01, 02, 03). |
| Capturas | `capturas` | 3 figuras (`.shot`) con botón de zoom (`.shot-zoom`). |
| Pantallas | `pantallas` | 2 figuras pequeñas (`.shot--small`) con botón de zoom. |
| Footer | `contacto` | Marca, descripción, enlaces a proyecto/recursos/contacto y copyright con año dinámico (`#year`). |

## Funcionalidades de la landing

### Imágenes ampliables (lightbox)

Cada captura (`.shot`) es un botón `.shot-zoom`. Al hacer clic se abre `<dialog class="lightbox" id="lightbox">` con la imagen original y un fondo oscuro (`::backdrop`). Se cierra con un clic en cualquier parte (`main.js` líneas 25-38).

- `main.js`: eventos `click` en `.shot-zoom` (copia `src` y `alt` al diálogo) y `.lightbox` (cierra con `.close()`).
- `styles.css`: transición de escala `scale(1.04)` al hover (`.shot-zoom:hover img`), indicador `+` (`::after`) y estilos del diálogo (`width: min(94vw, 94vh)`, `backdrop: rgba(0,0,0,0.8)`).

### Descarga del instalador

El botón primario (`.btn-primary.btn-lg`, `id="descarga-btn"`) apunta a `__TERRA_EXE_URL__`. Este placeholder se reemplaza en el pipeline de despliegue (`.github/workflows/pages.yml`) por la URL del último release de GitHub.

### Animaciones de entrada (reveal)

Los elementos `.feature`, `.step`, `.shot`, `.stack-col` empiezan con `opacity: 0` y `transform: translateY(12px)` (`main.js` líneas 41-63). Un `IntersectionObserver` con `threshold: 0.12` los revela al entrar en pantalla. Si el navegador no soporta `IntersectionObserver`, permanecen visibles por defecto (no hay `display: none`).

- `styles.css`: `transition: opacity 0.5s ease, transform 0.5s ease` aplicada por `main.js`, no por CSS directamente sobre la clase.
- `main.js`: `io.unobserve(entry.target)` tras la primera intersección para evitar reanimaciones.

### Menú responsive

- En pantallas `> 720px`: navegación horizontal (`.nav-links`) con enlaces a `#funcionalidades`, `#como-funciona`, `#capturas`, `docs/`, `#contacto`.
- En pantallas `≤ 720px`: botón `.nav-toggle` muestra/oculta `.nav-links.open`; el menú pasa a columna con `display: flex` y `flex-direction: column`.
- `main.js`: actualiza `aria-expanded` y `aria-label` del toggle.

### Accesibilidad

- Skip-link (`.skip-link`) al inicio (`#main`) visible con `:focus`.
- Atributos `aria-label`, `aria-expanded`, `aria-controls` en navegación y diálogo.
- Botones `.shot-zoom` con `aria-label="Ampliar captura"` y `type="button"` (no submit).

### Estilos y diseño

- Variables CSS (`:root`): paleta verde (`--green-900`, `--green-700`, `--green-500`, `--green-300`), arena (`--sand-100`, `--sand-200`), líneas (`--line`), sombra (`--shadow`), radio (`--radius`), contenedor (`--container`).
- Tipografía: `Inter` como `font-family`, `JetBrains Mono` para código (`code`).
- Componentes reutilizados: `.btn` (primario, ghost, grande), `.container`, `.section` (normal, alterna `section-alt`), `.feature`, `.step`, `.shot`, `.cta-card`.
- `prefers-reduced-motion`: `transition: none !important` y `scroll-behavior: auto`.

## Archivos relacionados

| Archivo | Rol |
|---|---|
| `index.html` | Estructura y contenido de la landing. |
| `styles.css` | Variables, componentes, responsive y lightbox. |
| `main.js` | Menú responsive, lightbox, animaciones `IntersectionObserver`, año dinámico. |
| `assets/terra-logo.svg` | Logo usado en `header` y `footer`. |
| `assets/itacyl_blanco.svg` | Logo ITACyL en footer. |
| `.github/workflows/pages.yml` | Pipeline que reemplaza `__TERRA_EXE_URL__`. |
