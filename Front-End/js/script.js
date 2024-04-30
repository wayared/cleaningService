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

  $(document).ready(function() {
    $('#appoinment-form').on('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting normally

        var formData = {
            name: $('input[name="name"]').val(),
            email: $('input[name="email"]').val(),
            phone: $('input[name="phone"]').val(),
            message: $('textarea[name="message"]').val(),
            serviceType: $('select[name="serviceType"]').val(),
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/send-email',
            data: formData,
            success: function(response) {
                // Show success notification
                showNotificationSuccess();
            },
            error: function(response) {
                // Show error notification
                showNotificationError();
            }
        });
    });
});

function showNotificationSuccess() {
  $('#notification').css('display', 'block');
  console.log("Showing success notification");
    $("#success").slideDown(500).delay(5000).slideUp(500);
}

function showNotificationError() {
  $('#notification').css('display', 'block');
  console.log("Showing Error");
    $("#error").css('display', 'block').slideDown(500).delay(5000).slideUp(500);
}

// main.js o el nombre de tu archivo JavaScript
document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
    mirror: true, // los elementos animados también desaparecen al salir de la pantalla
    once: false, // si quieres que la animación se ejecute solo una vez
  });
});

