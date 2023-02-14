

// function showProduct1(){
//     $.ajax({
//         type: "GET",
//         headers: {
//             'Accept': 'application/json'
//         },
//         url: "http://localhost:8080/products",
//         //xử lý khi thành công
//         success: function (product) {
//             let str = '';
//             for (const p of product.content) {
//                 str += `
//
//     <a href="#" class="img-prod"><img class="img-fluid" id="${p.name}" alt="Colorlib Template">
//     <div class="overlay"></div>
//     </a>
//     <div class="text py-3 pb-4 px-3 text-center">
//     <h3><a href="#">${p.name}</a></h3>
//     <div class="d-flex">
//     <div class="pricing">
//     <p class="price"><span>$${p.price}</span></p>
//     </div>
//     </div>
//     <div class="bottom-area d-flex px-3">
//     <div class="m-auto d-flex">
//     <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
//     <span><i class="ion-ios-menu"></i></span>
//     </a>
//     <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
//     <span><i class="ion-ios-cart"></i></span>
//     </a>
//     <a href="#" class="heart d-flex justify-content-center align-items-center ">
//     <span><i class="ion-ios-heart"></i></span>
//     </a>
//     </div>
//     </div>
//     </div>
//     `
//             }
//
//             document.getElementById("showProduct").innerHTML = str;
//         },
//         error: function (err) {
//             console.log(err)
//         }
//     })
// }
function showProduct() {
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
                str += `<div class="col-md-6 col-lg-3 ftco-animate">
                <div class="product">
                    <a href="#" class="img-prod"><img class="img-fluid" id="${p.id}" alt="Colorlib Template">
                        <span class="status">30%</span>
                        <div class="overlay"></div>
                    </a>
                    <div class="text py-3 pb-4 px-3 text-center">
                        <h3><a href="#">${p.name}</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price">
                                <span class="price-sale">${p.price}</span>
                                </p>
                            </div>
                        </div>
                        <div class="bottom-area d-flex px-3">
                            <div class="m-auto d-flex">
                                <a href="#"
                                   class="add-to-cart d-flex justify-content-center align-items-center text-center">
                                    <span><i class="ion-ios-menu"></i></span>
                                </a>
                                <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
                                    <span><i class="ion-ios-cart" onclick=""></i></span>
                                </a>
                                <a href="#" class="heart d-flex justify-content-center align-items-center ">
                                    <span><i class="ion-ios-heart"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            }
            showImage();
            document.getElementById("showProduct").innerHTML = str;

        },
        error: function (err) {
            console.log(err)
        }
    })
}

showProduct();

function showImage() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/images",
        //xử lý khi thành công
        success: function (image) {
            console.log(image)
            for (const i of image) {
                let a = i.product.id;
                document.getElementById(a).setAttribute('src', i.url);
            }
        },
        error: function (err) {
            console.log(err)
        }
    })
}


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
              <p>Name : ${getImage[0].namep}</p>
              <p>Description : ${getImage[0].description}</p>
              <p>Status : ${getImage[0].nameStatus}</p>
              <p>Price : $${getImage[0].price}</p>
              <p>Category : ${getImage[0].nameCategory}</p>
                  </div>`

            for (const a of getImage) {
                str += `<div >
                <img src="${a.url}" width="300" height="200">
                </div>`

                if(a.nameStatus === "con hang"){
                    str += `<div class="bottom-area d-flex px-3">
                        <div class="m-auto d-flex">
                            <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
                                <span><i class="ion-ios-cart" style="font-size: xx-large"></i></span>
                            </a>
                            <a href="#" class="heart d-flex justify-content-center align-items-center ">
                                <span><i class="ion-ios-heart" style="font-size: xx-large"></i></span>
                            </a>
                        </div>
                    </div>`
                }
            }
            document.getElementById("showProductDetail").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}