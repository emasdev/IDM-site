$(function () {
  // Disable default behavior
  $(".form-check-input").click(function (e) {
    e.preventDefault();
  });

  $(".form-check-input").on("mouseup", function () {
    if ($(this).is(":checked")) {
      $(this).prop("checked", false);
    } else {
      $(this).prop("checked", true);
    }
  });
});
