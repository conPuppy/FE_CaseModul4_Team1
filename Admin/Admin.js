let isCreate = true;
// // Lấy phần tử dấu X
// let closeBtn = document.getElementsByClassName("close")[0];

function show() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            //     'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/products",
        //xử lý khi thành công
        success: function (products) {
            console.log(products)
            let str = '';
            for (const product of products) {
                str += `<tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.description}</td>
        <td style="color: #a71d2a">${product.productStatus.name}</td>
        <td>${product.category.name}</td>
       <td> <a type="button" class="btn btn-warning" onclick="showEdit(${product.id})" data-toggle="modal" data-target="#modalLoginAvatar">Edit</a>
                        <a type="button" class="btn btn-danger" onclick="deleteProduct(${product.id})" >Delete</a></td>
      </tr>
`
            }

            document.getElementById("show").innerHTML = str;

        },
        error: function (err) {
            console.log(err)
        }
    })


}

show()

function productCategoryOption() {

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/categories",
        'Accept': 'application/json',
        success: function (categories) {
            let str = '<option value="" selected id="selectDf1">--choose--</option>';
            for (const category of categories) {
                str += `<option value="${category.id}" id="cateOt">${category.name}</option>`
            }
            document.getElementById("category").innerHTML = str;
        },
        error: function (error) {
            console.error(error);
        }
    });
}

productCategoryOption();

function productStatusOption() {

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/prStt",
        'Accept': 'application/json',
        success: function (productStatus) {
            let str = '<option value="" selected id="selectDf2">--choose--</option>';
            for (const p of productStatus) {
                str += `<option value="${p.id}" id="productSttOt">${p.name}</option>`
            }
            document.getElementById("productStatus").innerHTML = str;
        },
        error: function (error) {
            console.error(error);
        }
    });
}

productStatusOption();

function create() {
    let product = {
        "name": $("#name").val(),
        "description": $("#description").val(),
        "productStatus": {
            "id": $("#cateOt").val(),
        },
        "price": $("#price").val(),
        "category": {
            "id": $("#productSttOt").val(),
        }
    }

    if (!isCreate) {
        product.id = $("#id").val();
    }

    $.ajax({
        type: "Post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + localStorage.getItem("token")

        },
        url: "http://localhost:8080/products",
        data: JSON.stringify(product),
        //xử lý khi thành công
        success: function (product) {
            alert("Tạo thành công");
            show();
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function clearEdit() {
    isCreate = true;
    document.getElementById("id").value = 0;
    $("#name").val("");
    $("#price").val("");
    $("#description").val("");
}


// đóng modal

// closeBtn.addEventListener("click", function(e) {
//     let modal = document.getElementById("modalLoginAvatar");
//     let modal2 = document.getElementsByClassName("modal-backdrop fade show");
//     e.stopPropagation();
//     modal.style.display = "none";
//     modal2[0].style.display = "none";
//     modal2[1].style.display ="none";
// });

function deleteProduct(id) {
    $.ajax({
        url: "http://localhost:8080/products/" + id,
        type: "Delete",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + localStorage.getItem("token")

        },
        success: function (response) {

            console.log(response);
            show()
        },
        error: function (err) {
            // Xử lý lỗi nếu có
            console.error(err);
        }
    });
}

function showEdit(id) {
    isCreate = false;
    $.ajax({
        type: "Get",
        url: "http://localhost:8080/products/" + id,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        //xử lý khi thành công
        success: function (product) {
            console.log(product)
            document.getElementById("id").value = product.id;
            $("#name").val(product.name);
            $("#price").val(product.price);
            $("#description").val(product.description);
            $("#selectDf1").val(product.category.id);
            $("#selectDf1").html(product.category.name);
            // document.getElementById("selectDf1").innerHTML = product.category.name;
            $("#selectDf2").val(product.productStatus.id);
            $("#selectDf2").html(product.productStatus.name);
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function checkduplicateNameProduct() {
    let productName = $("#name").val();
    $.ajax({
        type: "Post",
        url: "http://localhost:8080/products/check/" + productName,
        headers: {
            // 'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + localStorage.getItem("token")
        },

        //xử lý khi thành công
        success: function (check) {
            if (!check) {
                console.log(check);
                $("#checkName").text("trùng tên rồi!")
            }else {$("#checkName").text("✅")}
        },
        error: function (err) {
            console.log(err)
        }
    })
}