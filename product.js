function showProduct(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/products",
        //xử lý khi thành công
        success: function (product) {
            let str = '';
            for (const p of product.content) {
                str += `<div style="margin: 10px">
                        <img id=${p.name} width="300" height="200" style="text-align: center"/>
                        <h2 style="text-align: center"><a  onclick="showProductDetail(${p.id})"  data-bs-toggle="modal" data-bs-target="#myModal2">${p.name}</a></h2>
                        <p style="text-align: center">$${p.price}</p>
                        <p style="text-align: center">${p.productStatus.name}</p>
                        
                            <div class="bottom-area d-flex px-3" >
                            <div class="m-auto d-flex">
                            <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
                            <span><i class="ion-ios-cart" style="font-size: xx-large"></i></span>
                            </a>
                            <a href="#" class="heart d-flex justify-content-center align-items-center ">
                            <span><i class="ion-ios-heart" style="font-size: xx-large"></i></span>
                            </a>
                            </div>
                            </div>
                        </div>`

            }

            document.getElementById("showProduct").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}
showProduct();

function showImage(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/images",
        //xử lý khi thành công
        success: function (image) {
            for (const i of image) {
                document.getElementById(i.product.name).setAttribute('src', i.url)
            }
        },
        error: function (err) {
            console.log(err)
        }
    })
}
showImage();


function showProductDetail(id){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/products/image/" +id,
        //xử lý khi thành công
        success: function (getImage) {
            let str = '';
            str += `<div >
              <h3>Product Detail</h3>
              <p>Name : ${getImage[0].name}</p>
              <p>Description : ${getImage[0].description}</p>
              <p>Status : ${getImage[0].idStatus}</p>
              <p>Price : ${getImage[0].price}</p>
              <p>Category : ${getImage[0].idCategory}</p>
                  </div>`

            for (const a of getImage) {
                str += `<div >
                <img src="${a.url}" width="300" height="200">
                </div>`
            }
            document.getElementById("showProductDetail").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}