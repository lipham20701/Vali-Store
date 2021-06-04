let dataSlides = [];
$(document).ready(function(){
    $.getJSON("../../js/data.json").done((data) =>{
        dataSlides = [...data.dataSlides];
        console.log(dataSlides)
        renderProduct();
    })
    function renderProduct(){
        dataSlides.map((item) => {
            $(".list-products").append(
                `
                    <a href="./product/product-details/product-details.html?id=${item.id}" class="w-25">
                         <div class="products w-25">
                         <img src="${item.img}" alt="" width="200px">
                         <h1 class = "title-product">${item.title}</h1>
                         <p class = "price-product">${convertMoney(item.price)}</p>
                         </div>
                     </a>
                `
            )
        })
    }
    function convertMoney(money) {
        return money.toLocaleString('vi', {style : 'currency', currency : 'vnd'});
    }
})
