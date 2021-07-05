$(function() {
  $("#calendario").simpleCalendar();

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
