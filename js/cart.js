
function showCart() {
    let username =JSON.parse(localStorage.getItem("user")).userName;
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/accounts/cart/"+ username,
        //xử lý khi thành công
        success: function (carts) {
            let str = '';
            for (const c of carts) {
                str+=`<tr class="text-center">
        <td class="product-remove"><a href="#"><span class="ion-ios-close"></span></a></td>
        
        <td class="image-prod"><img  id="${c.product.name}"  width="200" height="200"></td>
        
        <td class="product-name">
        <h3>${c.product.name}</h3>
        <p>${c.product.description}</p>
        </td>
        
        <td class="price" id="'price'${c.product.id}">${c.product.price}</td>
        
        <td class="quantity">
        <div class="input-group mb-3">
             <input type="text" name="quantity" class="quantity form-control input-number" id="'amount'${c.product.id}" value="${c.amount}" min="1" max="100">
          </div>
          </td>
        
        <td class="total" id="total${c.product.id}"></td>
      </tr><!-- END TR-->`
                // function unitPrice() {
                //     let x = document.getElementById('price'${c.product.id}) * document.getElementById('amount'${c.product.id});
                //     document.getElementById("total"${c.product.id}).innerHTML = x;
                // }
                // unitPrice();
            }
            showImage();
            document.getElementById("showCart").innerHTML = str;

        },
        error: function (err) {
            console.log(err)
        }
    })
}


showCart();
function showImage() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/images",
        //xử lý khi thành công
        success: function (image) {
            console.log(image)
            for (const i of image) {
                let a = i.product.name;
                document.getElementById(a).setAttribute('src', i.url);
            }
        },
        error: function (err) {
            console.log(err)
        }
    })
}
