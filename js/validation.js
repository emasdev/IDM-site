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
    const stepElm = "#step-" + index;
    $(".step").hide();
    $(".step").removeClass("d-none");
    console.log(stepElm);
    $(stepElm).show();
  }
  $("#contact-modal").on("show.bs.modal", function(event) {
    $(".step").hide();
    $("#step-0").show();
    $("#datos-doctor").trigger("reset");
    $("#orden-estudio").trigger("reset");
  });
})();
