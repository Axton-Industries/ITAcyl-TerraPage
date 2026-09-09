(function () {
  "use strict";

  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  if (lightbox && lightboxImg) {
    document.querySelectorAll(".shot-zoom").forEach(function (btn) {
      var img = btn.querySelector("img");
      btn.addEventListener("click", function () {
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
        }
        lightbox.showModal();
      });
    });
    lightbox.addEventListener("click", function () {
      lightbox.close();
    });
  }

  if ("IntersectionObserver" in window) {
    var reveal = document.querySelectorAll(".feature, .step, .shot, .stack-col");
    reveal.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(12px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveal.forEach(function (el) {
      io.observe(el);
    });
  }
})();