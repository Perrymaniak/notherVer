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

function getRegisterFormValues () {
    var username = document.forms[0]["username"].value;
    var password = document.forms[0]["password"].value;
    var passwordRetype = document.forms[0]["password-retype"].value;
    var dataRegister = {
        username: username,
        password: password,
        passwordRetype: passwordRetype
    };
    return JSON.stringify(dataRegister);
}

getLoginFormValues = function() {
    var username = document.forms[0].username.value;
    var password = document.forms[0].password.value;
    var dataLogin = {
        username: username,
        password: password
    };
    return JSON.stringify(dataLogin);
}