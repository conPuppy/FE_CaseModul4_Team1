

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
            if (data.role.name === "ROLE_USER") {
                location.href="../index.html";
            } else {
                location.href= "../Admin/Admin.html"
            }

        },
        error: function (err) {
            console.log(err)
            alert("sai thong tin")
        }
    })
}

function logout() {
    localStorage.clear();
    location.reload();
}

function logoutAdmin() {
    localStorage.clear();
    location.href="../index.html";
}

function demo() {
    alert("alo?")
}