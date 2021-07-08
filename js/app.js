$(function() {
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
      console.log(date);
      console.log(events);
      var html = '<p>Paciente: ' + $("#paciente-nombre").val() + ' ' + $("#paciente-apellidos").val() + '</p>';
      html += '<p>Doctor: ' + $("#doctor-nombre").val() + ' ' + $("#doctor-apellidos").val() + '</p>';
      html += '<p>Fecha: ' + date + '</p>';
      html += '<label for="hora-cita">Elije el horario que más le convenga y lo confirmaremos disponibilidad:</label><input type="time" id="hora-cita" name="hora-cita" min="09:00" max="19:00" step="9000" required /><p>Estamos abiertos de 09:00 a 19:00</p>';
      $('.event-container').append(html);
      // var paciente = {
      //   "nombre": $("#paciente-nombre"),
      //   "apellidos": $("#paciente-apellidos"),
      // }
    },
  });

  //generateDientes(document.getElementById("dientes"));

  function generateDientes(container) {
    const num_dientes = 16;
    const rows = [2];
    var html = "";

    appendHeader();
    appendRow();
    $.each(rows, function(index, value) {});

    appendFooter();

    function appendHeader() {
      html += "";
    }

    function appendRow() {
      html +=
        '<div class=" d-flex flex-column text-center align-items-center">';
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
