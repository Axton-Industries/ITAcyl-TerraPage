// Fix the brand/logo link in the docs header to point to the parent site
// and inject a "← Inicio" pill button next to it.
// Works locally at /docs/ and in production at the GitHub Pages site root.
(function () {
  function fixBrand() {
    var brand = document.querySelector('a.md-header__button.md-logo');
    if (brand) {
      brand.setAttribute('href', '../');
      brand.setAttribute('title', 'Volver al sitio principal de Terra');
      brand.setAttribute('aria-label', 'Volver al sitio principal de Terra');
    }

    if (document.querySelector('a.terra-home-pill')) return;

    var inner = document.querySelector('nav.md-header__inner');
    if (!inner || !brand) return;

    var pill = document.createElement('a');
    pill.className = 'terra-home-pill';
    pill.href = '../';
    pill.title = 'Volver al sitio principal de Terra';
    pill.setAttribute('aria-label', 'Volver al sitio principal de Terra');
    pill.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">' +
      '<path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11z"/>' +
      '</svg><span>Inicio</span>';

    brand.parentNode.insertBefore(pill, brand.nextSibling);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixBrand);
  } else {
    fixBrand();
  }
  if (typeof document$ !== 'undefined') {
    document$.subscribe(fixBrand);
  }
})();
