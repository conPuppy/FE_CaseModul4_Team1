let checkDuplicate = false;

function register(img) {
    let account = {
        "userName": $("#reUsername").val(),
        "passWord": $("#rePassword").val(),
        "fullName": $("#reFullName").val(),
        "email": $("#reEmail").val(),
        "address": $("#reAddress").val(),
        "phoneNumber": $("#rePhone").val(),
        "avatar": img,
        "role": {
            "id": $("#reRole").val()
        }
    }

    $.ajax({
        type: "Post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/register",
        data: JSON.stringify(account),
        success: function (data) {
            alert("success");
            location.href="../index.html";
        }
    })
}

function createAccount() {
    if (checkDuplicate) {
        upImg()
    } else {
        alert("thong tin khong hop le")
    }
}

function upImg() {
    let fileImg = document.getElementById("reAvatar").files;
    var formData = new FormData();
    formData.append("fileImg", fileImg[0]);

    $.ajax({
        contentType: false,
        processData: false,
        headers: {
        },
        type: "POST",
        data: formData,
        url: "http://localhost:8080/register/upImg",
        success: function (img) {
            register(img)
        }
    });
}

let displayReAvatar = document.getElementById("displayReAvatar")

function showAvatar() {
    let file = document.getElementById("reAvatar").files;
    displayReAvatar.src = URL.createObjectURL(file[0])
}

function checkDuplicateUsername() {
    let username = $("#reUsername").val();
    $.ajax({
        type: "Post",
        headers: {
        },
        url: "http://localhost:8080/register/checkUsername/" + username,
        success: function (check) {
            if (check) {
                $("#checkUsername").text("✅")
                checkDuplicate = true
            } else {
                $("#checkUsername").text("❌")
                checkDuplicate = false
            }
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function checkDuplicateEmail() {
    let email = $("#reEmail").val();
    $.ajax({
        type: "Post",
        headers: {
        },
        url: "http://localhost:8080/register/checkEmail/" + email,
        success: function (check) {
            if (check) {
                $("#checkEmail").text("✅")
                validateEmail();
            } else {
                $("#checkEmail").text("❌")
                checkDuplicate = false
            }
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#reEmail").val())) {
        $("#checkEmail").text("✅")
        checkDuplicate = true
    } else {
        $("#checkEmail").text("❌")
        checkDuplicate = false
    }

}