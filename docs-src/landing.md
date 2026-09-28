# Landing page

Funcionalidad añadida al sitio estático (`index.html`, `styles.css`, `main.js`).

## Imágenes ampliables (lightbox)

Cada captura de pantalla es un botón `shot-zoom`. Al hacer clic se abre un diálogo `<dialog>` con la imagen a tamaño completo y un fondo oscuro (`backdrop`). Se cierra al hacer clic en cualquier parte.

- `main.js`: gestiona los eventos `click` en `.shot-zoom` y en `.lightbox`.
- `styles.css`: transiciones de zoom (`scale(1.04)`), indicador `+`, y estilos del diálogo.

## Descarga del instalador

El botón de descarga (`#descarga-btn`) apunta a `__TERRA_EXE_URL__`, que se reemplaza por el pipeline de despliegue (`.github/workflows/pages.yml`).

## Animaciones de entrada

Los elementos `.feature`, `.step`, `.shot` y `.stack-col` usan `IntersectionObserver` (`main.js`) para aparecer con una transición de `opacity` y `translateY(12px)`. Si el navegador no soporta `IntersectionObserver`, los elementos permanecen visibles.

## Responsivo

- Menú colapsable (`nav-toggle`) en pantallas menores de `720px`.
- Grids de `3` → `2` → `1` columna según el ancho (`960px`, `720px`).
