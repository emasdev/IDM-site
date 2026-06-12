$(function () {
  var needValidation = true;
  var selectedDate = null;
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
      "Diciembre",
    ],
    days: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ],
    onDateSelect: function (date, events) {
      selectedDate = date;
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
      // var html = "<div>Paciente</div>";
      // html += "<div><strong>" + $("#paciente-nombre").val() + $("#paciente-apellidos").val() + "</strong></div>";
      // html += "<div class='mt-2'>Doctor</div>";
      // html += "<div><strong>" + $("#doctor-nombre").val() + $("#doctor-apellidos").val() + "</strong></div>";
      // html += "<div class='mt-2'>Fecha</div><div><strong>" + textDate + "</strong></div>";
      // html +=
      //   '<form class="horario-cita mt-3"><input type="time" id="hora-cita" name="hora-cita" min="09:00" max="19:00" step="9000" required /><p class="mt-2">Estamos abiertos de 09:00 a 19:00</p></form>';
      // $("#agendar-btn").show();
      // $(".event-wrapper").html(html);
      // var paciente = {
      //   "nombre": $("#paciente-nombre"),
      //   "apellidos": $("#paciente-apellidos"),
      // }
    },
    onInit: function (calendar) {
      console.log("on init");
      var html = "";
      $.get("select_horarios.html", function (data) {
        html = data;

        var hora = null;
        var minutos = null;
        var form = null;
        $(".event-wrapper").html(html);
        addEventListeners();

        function addEventListeners() {
          console.log("AddEventListeners");
          form = document.getElementById("form-horarios");
          $("#select-hora").change(function () {
            hora = $(this).val();
            print();
          });
          $("#select-minutos").change(function () {
            minutos = $(this).val();
            print();
          });

          $(document)
            .off("developerModeLoaded.schedule")
            .on("developerModeLoaded.schedule", validate);

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
            false,
          );

          function print() {
            $("#cita-hora").html(hora || "");
            $("#cita-minutos").html(minutos || "");
            $("#cita-hora-confirmar").html(hora || "");
            $("#cita-minutos-confirmar").html(minutos || "");
            validate();
          }

          function validate() {
            if (window.DEVELOPER_MODE === true) {
              $("#agendar-btn").show();
              return;
            }

            if (needValidation) {
              var hasSelectedTime = Boolean(hora && minutos);
              var hasSelectedDate = Boolean(selectedDate);

              if (hasSelectedDate && hasSelectedTime) {
                console.log("is Valid");
                $("#agendar-btn").show();
              } else {
                $("#agendar-btn").hide();
                console.log("is Not Valid");
              }
              form.classList.add("was-validated");
            } else {
            }
          }

          if (!selectedDate) {
            var now = new Date();
            var dd = String(now.getDate()).padStart(2, "0");
            var mm = String(now.getMonth() + 1).padStart(2, "0");
            var yyyy = now.getFullYear();
            $("#cita-fecha-label").html(dd + "/" + mm + "/" + yyyy);
          }

          validate();
        }
      }).fail(function () {
        console.log("An error has occurred.");
      });
      console.log(html);
    },
  });
});
