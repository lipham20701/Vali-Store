let url_string = window.location.href; // www.test.com?id=123
let url = new URL(url_string); 
let paramValue = url.searchParams.get("id");

$(document).ready(function(){

    

    $("#img-active").attr("src",localStorage.getItem("Image.img"));
    $("#name").html(localStorage.getItem("name"));
    $("#one").attr("src",localStorage.getItem("Image.img1"));
    $("#two").attr("src",localStorage.getItem("Image.img2"));
    $("#three").attr("src",localStorage.getItem("Image.img3"));
    $("#four").attr("src",localStorage.getItem("Image.img4"));
    $("#five").attr("src",localStorage.getItem("Image.img5"));
    $("#description").html(localStorage.getItem("description"));
    $("#money").html(localStorage.getItem("money"));

    $('#one').click(function(){
        let imgPath = $(this).attr('src')
        $('#img-active').attr('src', imgPath)
    })
    $('#two').click(function(){
        let imgPath = $(this).attr('src')
        $('#img-active').attr('src', imgPath)
    })
    $('#three').click(function(){
        let imgPath = $(this).attr('src')
        $('#img-active').attr('src', imgPath)
    })
    $('#four').click(function(){
        let imgPath = $(this).attr('src')
        $('#img-active').attr('src', imgPath)
    })
    $('#five').click(function(){
        let imgPath = $(this).attr('src')
        $('#img-active').attr('src', imgPath)
    })
});

function addToCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(localStorage.getItem('idSP'));
    const setjson=JSON.stringify(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    // localStorage.setItem(localStorage.getItem('idSP'), JSON.stringify(cart));
}