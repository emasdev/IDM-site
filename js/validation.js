// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";

  var needValidation = false;
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener(
      "submit",
      function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (needValidation) {
          if (!form.checkValidity()) {
          } else {
            if ((form.id = "datos-doctor")) {
              tabToStep(1);
            }
          }
          form.classList.add("was-validated");
        } else {
          tabToStep(1);
        }
      },
      false
    );
  });

  $(".step-btn").click(function() {
    tabToStep($(this).data("index"));
  });

  function tabToStep(index) {
    if (index == 1) {
      function print() {
        // obtener datos
        const doctor = {
          nombre: $("#doctor-nombre").val(),
          apellidos: $("#doctor-apellidos").val(),
          telefono: $("#doctor-telefono").val(),
          email: $("#doctor-email").val()
        };

        var nombre = doctor.nombre + " " + doctor.apellidos;

        $("#confirmar-doctor").find(".nombre-label").html(nombre);
        $("#confirmar-doctor").find(".email-label").html(doctor.email);
        $("#confirmar-doctor").find(".telefono-label").html(doctor.telefono);
      }

      const paciente = {
        nombre: $("#paciente-nombre").val(),
        apellidos: $("#paciente-apellidos").val(),
        telefono: $("#paciente-telefono").val(),
        email: $("#paciente-email").val()
      };

      nombre = paciente.nombre + " " + paciente.apellidos;

      $("#confirmar-paciente").find(".nombre-label").html(nombre);
      $("#confirmar-paciente").find(".email-label").html(paciente.email);
      $("#confirmar-paciente").find(".telefono-label").html(paciente.telefono);
    }
    const stepElm = "#step-" + index;
    $(".step").hide();
    $(".step").removeClass("d-none");
    console.log(stepElm);
    $(stepElm).show();
  }
  $("#contact-modal").on("show.bs.modal", function(event) {
    $(".step").hide();
    $(".btn-to-hide").show();
    $("#agendar-btn").hide();
    $("#step-0").show();
    $("#datos-doctor").trigger("reset");
    $("#orden-estudio").trigger("reset");
    $("#calendario").find(".close").trigger("click");
  });
})();
