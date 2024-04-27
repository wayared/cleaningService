document.addEventListener("DOMContentLoaded", function () {
    var lastScrollTop = 0;
    var navbar = document.querySelector('.navbar');
  
    window.addEventListener("scroll", function () {
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
      if (currentScroll > lastScrollTop) {
        // Hace scroll hacia abajo
        navbar.classList.add('hide');
      } else {
        // Hace scroll hacia arriba
        if (window.pageYOffset === 0) {
          navbar.classList.remove('hide');
        }
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para navegadores móviles
    }, false);
  });
