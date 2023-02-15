function showAccount() {
    $.ajax({
        type: "Get",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/accounts",
        success: function (accounts) {
            console.log(accounts)
            let str = '<div >\n' +
                '    <div class="container mt-3" >\n' +
                '        <table class="table" >\n' +
                '            <thead>\n' +
                '            <tr>\n' +
                '                <th>Avatar</th>\n' +
                '                <th>Id</th>\n' +
                '                <th>Username</th>\n' +
                '                <th>Password</th>\n' +
                '                <th>Full Name</th>\n' +
                '                <th>Email</th>\n' +
                '                <th>Address</th>\n' +
                '                <th>Phone number</th>\n' +
                '                <th>Role</th>\n' +
                '                <th>Nuts</th>\n' +
                '            </tr>\n' +
                '            </thead>';
            for (const account of accounts) {
                str += `<tr>
        <td><img src="${account.avatar}" width="200" height="200"></td>
        <td>${account.id}</td>
        <td>${account.userName}</td>
        <td>${account.passWord}</td>
        <td>${account.fullName}</td>
        <td>${account.email}</td>
        <td>${account.address}</td>
        <td>${account.phoneNumber}</td>
        <td>${account.role.name}</td>
       <td> <a type="button" class="btn btn-warning" onclick="showEditAccount(${account.id})" data-toggle="modal" data-target="#modalEditAccount">Edit</a>
                        <a type="button" class="btn btn-danger" onclick="deleteAccount(${account.id})" >Delete</a></td>
      </tr>`
            }
            document.getElementById("showAccount").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function showEditAccount(id) {
    $.ajax({
        type: "Get",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/accounts/" + id,
        success: function (account) {
            console.log(account)
            $("#editId").val(account.id);
            $("#editUsername").val(account.userName);
            $("#editPassword").val(account.passWord);
            $("#editFullName").val(account.fullName);
            $("#editEmail").val(account.email);
            $("#editAddress").val(account.address);
            $("#editPhoneNumber").val(account.phoneNumber);
            $("#editAvatar").val(account.avatar.filename);
            $("#editRole").val(account.role.id);
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function saveAccount(img) {
    let account = {
        "id": $("#editId").val(),
        "userName": $("#editUsername").val(),
        "passWord": $("#editPassword").val(),
        "fullName": $("#editFullName").val(),
        "email": $("#editEmail").val(),
        "address": $("#editAddress").val(),
        "phoneNumber": $("#editPhoneNumber").val(),
        "avatar": img,
        "role": {
            "id": $("#editRole").val()
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
            showAccount();
        }
    })
}

function editAccount() {
    let fileImg = document.getElementById("editAvatar").files;
    let formData = new FormData();
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
            saveAccount(img)
        }
    });
}

function deleteAccount(id) {
    $.ajax({
        type: "Get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/accounts/delete/" + id,
        success: function (data) {
            alert("success")
            showAccount()
        },
        error: function (err) {
            console.error(err);
            alert("false")
        }
    });
}