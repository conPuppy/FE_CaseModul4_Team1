function addBill() {
    alert("vao")
    let Bill = {
        "billStatus": {
            "id": 1
        }
    }
    let username = JSON.parse(localStorage.getItem("user")).userName;
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/accounts/bill/" + username,
        data: JSON.stringify(Bill),
        //xử lý khi thành công
        success: function () {
            alert("them bill thanh cong")
            // showCart();
            // showImage();
            // location.href="cart.html";

        },
        error: function (err) {
            alert("that bai")
            console.log(err);
        }
    })
}
function showBill() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/accounts/bill/" + username,
        //xử lý khi thành công
        success: function (bills) {
            let str = '';
            for (const b of bills.content) {
                str+= `<tr class="text-center">
        <td class="product-remove"><a href="javascript:void(0)"><span class="ion-ios-close"></span></a></td>
        
        <td class="image-prod"><div class="img" style="background-image:url(images/product-1.jpg);"></div></td>
        
        <td class="product-name">
        <h3>${b.cart.product.name}</h3>
        <p>${b.cart.product.description}</p>
        </td>
        
        <td class="price">${b.cart.product.price}</td>
        
        <td class="quantity">
        <div class="input-group mb-3">
             <input type="text" name="quantity" class="quantity form-control input-number" value="x" min="1" max="100">
          </div>
          </td>
        
        <td class="total">$4.90</td>
      </tr><!-- END TR-->`

            }
            // showImage();
            document.getElementById("showBill").innerHTML = str;

        },
        error: function (err) {
            console.log(err)
        }
    })
}
showBill();