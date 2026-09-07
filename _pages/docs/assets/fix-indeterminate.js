// Fix Material's "indeterminate" checkboxes in the sidebar nav so they
// toggle on a single click (default Material behavior is 2 clicks:
// indeterminate -> unchecked -> checked).
(function () {
  function fixIndeterminate() {
    var toggles = document.querySelectorAll(
      '.md-nav--primary .md-nav__toggle.md-toggle--indeterminate'
    );
    toggles.forEach(function (input) {
      // If the parent <li> is currently expanded (Material sets aria-expanded
      // on the nested <nav>), the checkbox should start CHECKED, not indeterminate.
      var li = input.closest('li');
      var nested = li ? li.querySelector('.md-nav') : null;
      var isOpen = nested && nested.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        input.checked = true;
      } else {
        input.checked = false;
      }
      input.classList.remove('md-toggle--indeterminate');
      input.indeterminate = false;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixIndeterminate);
  } else {
    fixIndeterminate();
  }
  if (typeof document$ !== 'undefined') {
    document$.subscribe(fixIndeterminate);
  }
})();
