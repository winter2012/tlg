function getVal() {
    var prefixName = "YS";
    var username = $("#username").val();
    if(username.substr(0,2).toUpperCase() !== prefixName){
        username = prefixName + username.toUpperCase();
        $("#username").val(username);
    }
}

function login(){
    var username = $("#username").val();
    var password = $("#password").val();
    if(username && password){
        $.ajax({
            type: "POST",
            url: 'https://www.ya3.com/index/testLogin',
            dataType: 'json',
            data: {
                username: username,
                password: password
            },
            success: function(res) {
                if (res.status == "0") {
                    location.href = res.url;
                }else{
                    setErrorMessage(res.message);
                }

            }
        });
    }else{
        setErrorMessage("用户名和密码不可为空！")
    }
}

function setErrorMessage(message) {
    $(".info p").text(message);
    $(".info").css("display","block");
}