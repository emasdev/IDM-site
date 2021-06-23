// Shorthand for $( document ).ready()
$(function () {
  $(".step-btn").click(function () {
    const stepElm = "#step-" + $(this).data("index");
    $(".step").hide();
    $(".step").removeClass("d-none");
    console.log(stepElm);
    $(stepElm).show();
  });
});
