function show(){
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
                str += `



<a href="#" class="img-prod"><img class="img-fluid" src="${p.image.url}" alt="Colorlib Template">

<div class="overlay"></div>
</a>
<div class="text py-3 pb-4 px-3 text-center">
<h3><a href="#">${p.name}</a></h3>
<div class="d-flex">
<div class="pricing">
<p class="price"><span class="price-sale"></span></p>
</div>
</div>
<p></p>
<div class="bottom-area d-flex px-3">
<div class="m-auto d-flex">
<a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
<span><i class="ion-ios-cart"></i></span>
</a>
<a href="#" class="heart d-flex justify-content-center align-items-center ">
<span><i class="ion-ios-heart"></i></span>
</a>


</div>
</div>

</div>`
            }

            document.getElementById("show").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}
show();