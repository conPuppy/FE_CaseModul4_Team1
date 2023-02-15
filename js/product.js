
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
                    <a  onclick="showProductDetail(${p.id})" data-bs-toggle="modal" data-bs-target="#myModal" class="img-prod">
                    <img class="img-fluid" id="${p.id}" alt="Colorlib Template" width="300px" height="200px" src="">
                        <span class="status">30%</span>
                        <div class="overlay"></div>
                    </a>
                    <div class="text py-3 pb-4 px-3 text-center">
                        <h3><a >${p.name}</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price">
                                <span class="price-sale">$${p.price}</span>
                                </p>
                            </div>
                        </div>
                        <h3>(${p.productStatus.name})</h3>
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
            document.getElementById("showProduct").innerHTML = str;
            showImage();
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
            for (const i of image) {
                let a = i.product.id;
                if(document.getElementById(a) != null)  {
                    document.getElementById(a).setAttribute('src', i.url);
                }
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
              <p>Name : ${getImage[0].namep}</p>
              <p>Description : ${getImage[0].description}</p>
              <p>Status : ${getImage[0].nameStatus}</p>
              <p>Price : $${getImage[0].price}</p>
              <p>Category : ${getImage[0].nameCategory}</p>
                          </div>`

            for (const a of getImage) {
                str += `<div >
                <img src="${a.url}" width="300px" height="200px">
                </div>`
            }
            document.getElementById("showProductDetail").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}


function searchProduct1(){
    let keys=document.getElementById("search").value;

    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
        },
        url: "http://localhost:8080/products/search/" + keys,
        success: function (searchProduct) {
            let str = '';
            for (const p of searchProduct) {
                str += `<div class="col-md-6 col-lg-3 ftco-animate">
                <div class="product">
                    <a onclick="showProductDetail(${p.idProduct})" data-bs-toggle="modal" data-bs-target="#myModal" class="img-prod"><img class="img-fluid" id="${p.idProduct}" alt="Colorlib Template" width="300px" height="200px">
                        <span class="status">30%</span>
                        <div class="overlay"></div>
                    </a>
                    <div class="text py-3 pb-4 px-3 text-center">
                        <h3><a >${p.namep}</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price">
                                <span class="price-sale">$${p.price}</span>
                                </p>
                            </div>
                        </div>
                        <h3>(${p.nameStatus})</h3>
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


function sortPriceAsc(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/products/sortASC",
        //xử lý khi thành công
        success: function (product) {
            let str = '';
            for (const p of product.content) {
                str += `<div class="col-md-6 col-lg-3 ftco-animate">
                <div class="product">
                    <a onclick="showProductDetail(${p.id})" data-bs-toggle="modal" data-bs-target="#myModal" class="img-prod"><img class="img-fluid" id="${p.id}" alt="Colorlib Template">
                        <span class="status">30%</span>
                        <div class="overlay"></div>
                    </a>
                    <div class="text py-3 pb-4 px-3 text-center">
                        <h3><a >${p.name}</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price">
                                <span class="price-sale">$${p.price}</span>
                                </p>
                            </div>
                        </div>
                        <h3>(${p.productStatus.name})</h3>
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

function sortPriceDesc(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/products/sortDESC",
        //xử lý khi thành công
        success: function (product) {
            let str = '';
            for (const p of product.content) {
                str += `<div class="col-md-6 col-lg-3 ftco-animate">
                <div class="product">
                    <a onclick="showProductDetail(${p.id})" data-bs-toggle="modal" data-bs-target="#myModal" class="img-prod"><img class="img-fluid" id="${p.id}" width="300px" height="200px" alt="Colorlib Template">
                        <span class="status">30%</span>
                        <div class="overlay"></div>
                    </a>
                    <div class="text py-3 pb-4 px-3 text-center">
                        <h3><a >${p.name}</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price">
                                <span class="price-sale">$${p.price}</span>
                                </p>
                            </div>
                        </div>
                        <h3>(${p.productStatus.name})</h3>
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

function sortLowPrice() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/products/sortLowPrice",
        //xử lý khi thành công
        success: function (product) {
            let str = '';
            for (const p of product) {
                str += `<div class="col-md-6 col-lg-3 ftco-animate">
                <div class="product">
                    <a onclick="showProductDetail(${p.idProduct})" data-bs-toggle="modal" data-bs-target="#myModal" class="img-prod"><img class="img-fluid" id="${p.idProduct}" width="300px" height="200px" alt="Colorlib Template">
                        <span class="status">30%</span>
                        <div class="overlay"></div>
                    </a>
                    <div class="text py-3 pb-4 px-3 text-center">
                        <h3><a >${p.namep}</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price">
                                <span class="price-sale">$${p.price}</span>
                                </p>
                            </div>
                        </div>
                        <h3>(${p.nameStatus})</h3>
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

function sortHighPrice() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/products/sortHighPrice",
        //xử lý khi thành công
        success: function (product) {
            let str = '';
            for (const p of product) {
                str += `<div class="col-md-6 col-lg-3 ftco-animate">
                <div class="product">
                    <a onclick="showProductDetail(${p.idProduct})" data-bs-toggle="modal" data-bs-target="#myModal" class="img-prod"><img class="img-fluid" id="${p.idProduct}" width="300px" height="200px" alt="Colorlib Template">
                        <span class="status">30%</span>
                        <div class="overlay"></div>
                    </a>
                    <div class="text py-3 pb-4 px-3 text-center">
                        <h3><a >${p.namep}</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price">
                                <span class="price-sale">$${p.price}</span>
                                </p>
                            </div>
                        </div>
                        <h3>(${p.nameStatus})</h3>
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

function sortMediumPrice() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/products/sortMediumPrice",
        //xử lý khi thành công
        success: function (product) {
            let str = '';
            for (const p of product) {
                str += `<div class="col-md-6 col-lg-3 ftco-animate">
                <div class="product">
                    <a onclick="showProductDetail(${p.idProduct})" data-bs-toggle="modal" data-bs-target="#myModal" class="img-prod"><img class="img-fluid" id="${p.idProduct}" width="300px" height="200px" alt="Colorlib Template">
                        <span class="status">30%</span>
                        <div class="overlay"></div>
                    </a>
                    <div class="text py-3 pb-4 px-3 text-center">
                        <h3><a >${p.namep}</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price">
                                <span class="price-sale">$${p.price}</span>
                                </p>
                            </div>
                        </div>
                        <h3>(${p.nameStatus})</h3>
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

function filterCategory1(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/products/filterCategory1",
        //xử lý khi thành công
        success: function (product) {
            let str = '';
            console.log(product)

            for (const p of product) {
                str += `<div class="col-md-6 col-lg-3 ftco-animate">
                <div class="product">
                    <a onclick="showProductDetail(${p.idProduct})" data-bs-toggle="modal" data-bs-target="#myModal" class="img-prod">
                    <img class="img-fluid" id="${p.idProduct}" width="300px" height="200px" alt="Colorlib Template" src="">
                        <span class="status">30%</span>
                        <div class="overlay"></div>
                    </a>
                    <div class="text py-3 pb-4 px-3 text-center">
                        <h3><a >${p.namep}</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price">
                                <span class="price-sale">$${p.price}</span>
                                </p>
                            </div>
                        </div>
                        <h3>(${p.nameStatus})</h3>
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

function filterCategory2(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/products/filterCategory2",
        //xử lý khi thành công
        success: function (product) {
            let str = '';
            for (const p of product) {
                str += `<div class="col-md-6 col-lg-3 ftco-animate">
                <div class="product">
                    <a onclick="showProductDetail(${p.idProduct})" data-bs-toggle="modal" data-bs-target="#myModal" class="img-prod"><img class="img-fluid" id="${p.idProduct}" width="300px" height="200px" alt="Colorlib Template">
                        <span class="status">30%</span>
                        <div class="overlay"></div>
                    </a>
                    <div class="text py-3 pb-4 px-3 text-center">
                        <h3><a >${p.namep}</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price">
                                <span class="price-sale">$${p.price}</span>
                                </p>
                            </div>
                        </div>
                        <h3>(${p.nameStatus})</h3>
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

