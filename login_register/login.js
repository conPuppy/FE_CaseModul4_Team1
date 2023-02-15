function login() {
    let account = {
        "userName": $("#username").val(),
        "passWord": $("#password").val()
    }

    $.ajax({
        type: "Post",
        headers: {
            "Accept" : 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/login",
        data: JSON.stringify(account),
        success: function (data) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data));
            alert("thành công")
            location.href="../index.html";
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function register() {

}


function demo() {
    alert("alo?")
}