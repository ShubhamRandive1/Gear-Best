import navbar from '../components/navbar.js'

document.getElementById('navbar').innerHTML = navbar();


import footer from '../components/footer.js'

document.getElementById('footer--start').innerHTML = footer()


let proddataele = [{
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6913147309857632256/16500/goods_thumb_220-v1/d1572a1866e7.jpg",
        brandname: "SAMSUNG",
        productName: "Galaxy Watch",
        price: 78,
        available: "3 more colors"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16535/goods_thumb_220-v1/d175e8cd833d.jpg",
        brandname: "APPLE",
        productName: "Watch 3",
        price: 39,
        available: "2 more sizes"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16417/goods_thumb_220-v3/21ff9307e5ee.jpg",
        brandname: "GSHOCK",
        productName: "Ultra",
        price: 39,
        available: "2 more sizes"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16121/goods_thumb_220-v9/ca5568a2f175.jpg",
        brandname: "XIAOMI",
        productName: "Mi Piston 3",
        price: 63.99,
        available: "4 more colors"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16427/goods_thumb_220-v1/9ee0aa659dae.jpg",
        brandname: "MI",
        productName: "T1S Watch",
        price: 90,
        available: "4 more colors"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16500/goods_thumb_220-v1/bdea2e38298c.jpg",
        brandname: "NVIDIA",
        productName: "GTX750",
        price: 178,
        available: "3 more colors"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16456/goods_thumb_220-v3/3103fd6186f7.jpg",
        brandname: "LENOVO",
        productName: "Tablet pc",
        price: 339,
        available: "2 more sizes"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16486/goods_thumb_220-v2/6a0fbd723c9d.jpg",
        brandname: "XIAOMI",
        productName: "Redmi AX5400 Router",
        price: 139,
        available: "2 more sizes"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_thumb_220-v5/6233d35f6f8a.jpg",
        brandname: "MI",
        productName: "Mi 11",
        price: 290,
        available: "4 more colors"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6908377430696849408/16521/goods_thumb_220-v1/c3d3631eb6a6.jpg",
        brandname: "POCO",
        productName: "POCO X11",
        price: 220,
        available: "8 more colors"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6908377430696849408/16520/goods_thumb_220-v1/f459b444ef91.jpg",
        brandname: "TIENKIM",
        productName: "i13 PromMax",
        price: 380,
        available: "6 more colors"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16466/goods_thumb_220-v1/11c5e744da40.jpg",
        brandname: "OUKITEL",
        productName: "K 15 Pro",
        price: 250,
        available: "2 more colors"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16478/goods_thumb_220-v3/48f569514131.jpg",
        brandname: "SAMSUNG",
        productName: "S21 Ultra",
        price: 280,
        available: "2 more sizes"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16545/goods_thumb_220-v1/85d71ef9cc80.jpg",
        brandname: "VI1",
        productName: "HD Projector",
        price: 80,
        available: "6 more colors"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16425/goods_thumb_220-v1/b2dcd4537dba.jpg",
        brandname: "ASUS",
        productName: "RGB Gaming Mouse",
        price: 150,
        available: "2 more colors"
    },
    {
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16515/goods_thumb_220-v3/84470476ab98.jpg",
        brandname: "LENOVO",
        productName: "Smart IP",
        price: 180,
        available: "2 more sizes"
    },

];


let cartArr = JSON.parse(localStorage.getItem("productsdata")) || [];


ProductDatas(proddataele);




function ProductDatas(proddataele) {
    document.querySelector("#randomproducts").innerHTML = "";

    proddataele.map(function (data) {
        let div = document.createElement("div");
        div.setAttribute("class", "box");

        let imgdiv = document.createElement("div");
        imgdiv.setAttribute("class", "imgbox");

        let image = document.createElement("img");
        image.setAttribute("src", data.image_url);
        image.setAttribute("id", "produceimg");


        image.addEventListener("mouseout", function () {
            image.src = data.image_url;
        });

        image.setAttribute("id", "prodimg");

        let textdiv = document.createElement("div");
        textdiv.setAttribute("class", "textbox");

        let type = document.createElement("p");
        type.textContent = "Bestseller";
        type.setAttribute("id", "type");

        let brandname = document.createElement("p");
        brandname.textContent = data.brandname;
        brandname.setAttribute("id", "brandname");

        let productName = document.createElement("h2");
        productName.textContent = data.productName;
        productName.setAttribute("id", "productname");

        let price = document.createElement("h5");
        price.textContent = "$" + data.price;
        price.setAttribute("id", "price");

        let Available = document.createElement("p");
        Available.textContent = data.Available;
        Available.setAttribute("id", "Available");

        let bdiv = document.createElement("div");
        bdiv.setAttribute("id", "bdiv");

        let cart = document.createElement("button");
        cart.setAttribute("id", "cartbut");
        cart.setAttribute("class", `fas fa-cart-plus`);
        cart.addEventListener("click", function () {
            Adddata(data);
            cart.setAttribute("class", "fas fa-check-circle");
            cart.style.background = "#ff2e53";
            cart.style.color = "white";
        });



        imgdiv.append(image);
        bdiv.append(cart);
        textdiv.append(type, brandname, productName, price, Available, bdiv);
        div.append(imgdiv, textdiv);
        document.querySelector("#randomproducts").append(div);
    });
}






function Adddata(data) {
    cartArr.push(data);
    localStorage.setItem("productsdata", JSON.stringify(cartArr));
    alert("Successfully Added");
    //console.log(productsdata);
}