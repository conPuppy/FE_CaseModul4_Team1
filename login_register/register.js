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
        url: "http://localhost:8080/accounts",
        data: JSON.stringify(account),
        success: function (data) {
            alert("success");
            location.href="../index.html";
        }
    })
}

function upImg() {
    let fileImg = document.getElementById("reAvatar").files;
    var formData = new FormData();
    formData.append("fileImg", fileImg[0]);

    $.ajax({
        contentType: false,
        processData: false,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        type: "POST",
        data: formData,
        url: "http://localhost:8080/accounts/upImg",
        success: function (img) {
            register(img)
        }
    });
}

let imgInp = document.getElementById("reAvatar");
let displayAvatar = document.getElementById("displayAvatar")

function showImg() {
    let file = imgInp.files;
    displayAvatar.src = URL.createObjectURL(file[0])
}