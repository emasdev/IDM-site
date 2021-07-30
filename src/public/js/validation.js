// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  var needValidation = true;
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (needValidation) {
          if (!form.checkValidity()) {
          } else {
            if (form.id == "datos-doctor") {
              tabToStep(1);
            } else if (form.id == "datos-contacto") {
              const contacto = {
                nombre: $("#contacto-nombre").val(),
                apellidos: $("#contacto-apellidos").val(),
                telefono: $("#contacto-telefono").val(),
                email: $("#contacto-email").val(),
                mensaje: $("#contacto-mensaje").val(),
              }
              
              $.ajax({
                url: '/send-email-info',
                type: 'post',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(contacto),
                success: function (data) {
                  console.log(data);
                  const stepElm = "#step-contacto-1";
                  $(".step-contacto").hide();
                  $(".step-contacto").removeClass("d-none");
                  console.log(stepElm);
                  $(stepElm).show();
                },
                error : function(xhr, status) {
                  console.log(status);
                }
              });

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

  $(".step-btn").click(function () {
    tabToStep($(this).data("index"));
  });

  var doctor = null
  var paciente = null;
  var orden_de_estudio = null;
  function tabToStep(index) {
    console.log(index);
    if (index == 1) {
      if ($(".event-container").is(":visible")) {
        $("#calendario").find(".close").trigger("click");
        return;
      }
      print();

      function print() {
        // obtener datos
        doctor = {
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

        paciente = {
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
      }
    } else if (index == 2) {
      const checkboxes = $("#orden-estudio").find(".form-check-input");
      var html = "<ul>";
      orden_de_estudio = [];
      $.each(checkboxes, function (index, value) {
        const checkbox = value;
        if (checkbox.checked) {
          var val = checkbox.nextSibling.nextSibling.innerHTML;
          console.log(checkbox.classList.contains("diente"));
          if (checkbox.classList.contains("diente")) {
            html += "<li> RX Periapical individual: " + val + "</i>";
            orden_de_estudio.push('RX Periapical individual ' + val);
          } else {
            html += "<li>" + val + "</i>";
            orden_de_estudio.push(val);
          }
        }
      });
      html += "</ul>";
      $("#confirmar-orden-estudio").html(html);
      console.log("validate orden de estudio");
    } else if(index == 4) {
      const datos = {
        paciente: paciente,
        doctor: doctor,
        orden_de_estudio: orden_de_estudio,
        fecha: {
          dia: $("#cita-fecha-label-confirmar").html(),
          hora: $("#cita-hora-confirmar").html(),
          minutos: $("#cita-minutos-confirmar").html()
        }
      }


      $.ajax({
        url: '/send-email-cita',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(datos),
        success: function (data) {
          console.log(data);
        },
        error : function(xhr, status) {
          console.log(status);
        }
      });

    }

    const stepElm = "#step-" + index;
    $(".step").hide();
    $(".step").removeClass("d-none");
    console.log(stepElm);
    $(stepElm).show();
  }
  $("#contact-modal").on("show.bs.modal", function (event) {
    $(".step").hide();
    $(".btn-to-hide").show();
    $("#agendar-btn").hide();
    $("#step-0").show();
    $("#datos-doctor").trigger("reset");
    $("#orden-estudio").trigger("reset");
    $(".was-validated").removeClass("was-validated");
    $("#calendario").find(".close").trigger("click");
  });

  $("#short-contact-modal").on("show.bs.modal", function (event) {
    $(".step").hide();
    $("#step-0").show();
    $("#datos-contacto").trigger("reset");
    $(".was-validated").removeClass("was-validated");
  });
})();
