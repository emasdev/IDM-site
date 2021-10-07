$(function () {
  var needValidation = true;
  $("#calendario").simpleCalendar({
    months: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ],
    days: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado"
    ],
    onDateSelect: function (date, events) {
      if (date.getDay() == 6) {
        $(".to-disable").hide();
      } else {
        $(".to-disable").show();
      }
      printDate();

      function printDate() {
        const dd = String(date.getDate()).padStart(2, "0");
        const mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = date.getFullYear();
        const html = dd + "/" + mm + "/" + yyyy;

        $("#cita-fecha-label").html(html);
        $("#cita-fecha-label-confirmar").html(html);
      }
    },
    onInit: function (calendar) {
      var html = "";
      $.getJSON("select_horarios.json", function (data) {
        html = data.html;

        var hora = null;
        var minutos = null;
        var form = null;
        $(".event-wrapper").html(html);
        addEventListeners();

        function addEventListeners() {
          form = document.getElementById("form-horarios");

          $("#select-hora").change(function () {
            hora = $(this).val();
            print();
          });
          $("#select-minutos").change(function () {
            minutos = $(this).val();
            print();
          });

          // form.submit(function() {
          //   console.log($(this));
          // });

          form.addEventListener(
            "submit",
            function (event) {
              event.preventDefault();
              event.stopPropagation();
              validate();
            },
            false
          );

          function print() {
            $("#cita-hora").html(hora);
            $("#cita-minutos").html(minutos);
            $("#cita-hora-confirmar").html(hora);
            $("#cita-minutos-confirmar").html(minutos);
            if (hora && minutos) {
              validate();
            }
          }

          function validate() {
            if (needValidation) {
              if (form.checkValidity()) {
                $("#agendar-btn").show();
              } else {
                $("#agendar-btn").hide();
              }
              form.classList.add("was-validated");
            } else {
            }
          }
        }
      }).fail(function () {
        console.error("An error has occurred.");
      });
    }
  });
});
