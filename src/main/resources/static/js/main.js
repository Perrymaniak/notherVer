$( document ).ready(function(){
  $('.modal').modal()
  $(".button-collapse").sideNav({edge: 'right'})
  $('select').material_select();
});
//Password Validation
$("#Rejestracja-password").on("focusout", function (e) {
    if ($(this).val() != $("#Rejestracja-password-ponownie").val()) {
        $("#Rejestracja-password-ponownie").removeClass("valid").addClass("invalid");
        $("#rejestracja-button").addClass("disabled");
    } else {
        $("#Rejestracja-password-ponownie").removeClass("invalid").addClass("valid");
        $("#rejestracja-button").removeClass("disabled");
    }
});

$("#Rejestracja-password-ponownie").on("keyup", function (e) {
    if ($("#Rejestracja-password").val() != $(this).val()) {
        $(this).removeClass("valid").addClass("invalid");
        $("#rejestracja-button").addClass("disabled");
    } else {
        $(this).removeClass("invalid").addClass("valid");
        $("#rejestracja-button").removeClass("disabled");
    }
});
