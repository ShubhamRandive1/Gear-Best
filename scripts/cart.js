var cartData1 = JSON.parse(localStorage.getItem("productsdata"));


var total = cartData1.reduce(function (sum, el, index, arr) {
    console.log(el.price);
    sum = sum + Number(el.price);
    return sum;
}, 0);


var length = cartData1.length;


var btn_promo = document
    .querySelector("#checkPromocode")
    .addEventListener("click", promochceker);

function promochceker() {
    var promo_val = document.querySelector("#enterPromocode").value;
    console.log("promo", promo_val);


    if (promo_val == "super25") {
        //alert("good ");
        var t_price = 0.25 * total;
        total = total - t_price;
        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    } else {

        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    }

    if (promo_val == "super20") {
        // alert("good ")
        var tot_price = 0.2 * total;
        total = total - tot_price;
        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    } else {

        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    }


    if (promo_val == "super5") {
        // alert("good ")
        var tota_price = 0.05 * total;
        total = total - tota_price;
        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    } else {

        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    }

    if (promo_val == "super10") {
        // alert("good ")
        var tt_price = 0.10 * total;
        total = total - tt_price;
        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    } else {

        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    }

}

document.querySelector(
    "p"
).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;

//value got of check out page
document.querySelector("#checkOut").addEventListener("click", gotocartval);

function gotocartval() {
    localStorage.setItem("productsdata", JSON.stringify(total));
    console.log(total);

}


// makup page

cartData1.map(function (el, index) {
    var box = document.createElement("div");

    var img11 = document.createElement("img");
    img11.src = el.image_url;

    var productName = document.createElement("p");
    productName.textContent = el.productName;

    var name = document.createElement("p");
    name.textContent = el.brandname;

    var price = document.createElement("p");
    price.innerText = el.price;

    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
        removeItem(el, index);
    });

    box.append(img11, name, productName, price, btn);

    document.querySelector("#container").append(box);
});

function removeItem(el, index) {
    console.log(el, index);
    cartData1.splice(index, 1);


    localStorage.setItem("productsdata", JSON.stringify(cartData1));
    window.location.reload();
}



//    var arr =[1,2,3,4]
//    console.log(arr.splice(0,1)) // []