// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";

  var needValidation = true;
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
            if (form.id == "datos-doctor") {
              tabToStep(1);
            } else if (form.id == "datos-contacto") {
              const stepElm = "#step-contacto-1";
              $(".step-contacto").hide();
              $(".step-contacto").removeClass("d-none");
              console.log(stepElm);
              $(stepElm).show();
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
      if($(".event-container").is(":visible")){
        $("#calendario").find(".close").trigger("click");
        return;
      }
      print();

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
        console.log("doctor");
        console.log(doctor);
        $("#confirmar-doctor").find(".email-label").html(doctor.email);
        $("#confirmar-doctor").find(".telefono-label").html(doctor.telefono);

        const paciente = {
          nombre: $("#paciente-nombre").val(),
          apellidos: $("#paciente-apellidos").val(),
          telefono: $("#paciente-telefono").val(),
          email: $("#paciente-email").val()
        };

        nombre = paciente.nombre + " " + paciente.apellidos;

        $("#confirmar-paciente").find(".nombre-label").html(nombre);
        $("#confirmar-paciente").find(".email-label").html(paciente.email);
        $("#confirmar-paciente")
          .find(".telefono-label")
          .html(paciente.telefono);

        const estudio = {};
      }
    } else if (index == 2) {
      const checkboxes = $("#orden-estudio").find(".form-check-input");
      var html = "<ul>";
      $.each(checkboxes, function(index, value) {
        const checkbox = value;
        if (checkbox.checked) {
          var val = checkbox.nextSibling.nextSibling.innerHTML;
          console.log(checkbox.classList.contains("diente"));
          if(checkbox.classList.contains("diente")){
            html += "<li> RX Periapical individual: " + val + "</i>";
          } else {
            html += "<li>" + val + "</i>";
          }
        }
      });
      html += "</ul>";
      $("#confirmar-orden-estudio").html(html);
      console.log("validate orden de estudio");
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
    $(".was-validated").removeClass("was-validated");
    $("#calendario").find(".close").trigger("click");
  });

  $("#short-contact-modal").on("show.bs.modal", function(event) {
    $(".step").hide();
    $("#step-0").show();
    $("#datos-contacto").trigger("reset");
    $(".was-validated").removeClass("was-validated");
  });
})();
