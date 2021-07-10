$(function () {
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
    days: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
    onDateSelect: function (date, events) {
      console.log(date);
      console.log(events);
      var dd = String(date.getDate()).padStart(2, "0");
      var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = date.getFullYear();
      var textDate = mm + "/" + dd + "/" + yyyy;
      var html = "<div>Paciente</div>";
      html += "<div><strong>" + $("#paciente-nombre").val() + $("#paciente-apellidos").val() + "</strong></div>";
      html += "<div class='mt-2'>Doctor</div>";
      html += "<div><strong>" + $("#doctor-nombre").val() + $("#doctor-apellidos").val() + "</strong></div>";
      html += "<div class='mt-2'>Fecha</div><div><strong>" + textDate + "</strong></div>";
      html +=
        '<form class="horario-cita mt-3"><input type="time" id="hora-cita" name="hora-cita" min="09:00" max="19:00" step="9000" required /><p class="mt-2">Estamos abiertos de 09:00 a 19:00</p></form>';
      $("#agendar-btn").show();
      $(".event-wrapper").html(html);
      // var paciente = {
      //   "nombre": $("#paciente-nombre"),
      //   "apellidos": $("#paciente-apellidos"),
      // }
    },
  });

  $("#agendar-btn").click(function () {
    const html = "<div class='centrar'>En breve nos comunicaremos con usted.</div>";
    $(".event-wrapper").html(html);
    $(".btn-to-hide").hide();
  });

  //generateDientes(document.getElementById("dientes"));

  function generateDientes(container) {
    const num_dientes = 16;
    const rows = [2];
    var html = "";

    appendHeader();
    appendRow();
    $.each(rows, function (index, value) {});

    appendFooter();

    function appendHeader() {
      html += "";
    }

    function appendRow() {
      html += '<div class=" d-flex flex-column text-center align-items-center">';
      $;
    }
    function appendFooter() {
      html += "</div>";
    }
    function appendDiente() {
      html +=
        '        <input class="form-check-input" type="checkbox" value="" id="diente1"><label class="form-check-label" for="diente1">diente1</label>';
    }

    container.innerHTML = html;
  }
});
