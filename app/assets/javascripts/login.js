$("#login-button").click(function () {
    var name=$("#login-username").val();
    var password=$("#login-password").val();
    $.ajax({
        url: APP_URL+"/core_box/people/login?email="+name+"&password="+password,
        type: 'POST',
        error : function (result) {
            $("#err").html(JSON.parse(result.responseText).error.message);
        },
        success: function (result) {
            localStorage.setItem("token", result.token);
        }
    });
});
