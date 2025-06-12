$(document).ready(() => {
  $(".toggle_password").on("click", () => {
    const $input = $(".password_input");
    const isPassword = $input.attr("type") === "password";
    $input.attr("type", isPassword ? "text" : "password");
  });
});

$(document).ready(function () {
  $(".sign_link").on("click", function () {
    const target = $(this).data("target");
    $(".form_wrapper").hide();
    $(`.form_${target}`).closest(".form_wrapper").show();
  });
});