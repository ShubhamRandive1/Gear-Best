import navbar from '../components/navbar.js'

document.getElementById('navbar').innerHTML = navbar();

import footer from '../components/footer.js'

document.getElementById('footer--start').innerHTML = footer();


fetch('https://fakestoreapi.com/products/category/electronics?limit=8')
    .then(function (res) {
        return res.json()
    })
    .then(function (res) {
        console.log(res)
        append(res)
    }).catch(function (err) {
        console.log(err)
    })




function append(res) {

    res.map(function (el) {

        let main_div = document.getElementById('inside-recommended')

        let image = document.createElement('img')
        image.src = el.image

        let title = document.createElement('p')
        title.innerHTML = el.title


        let price = document.createElement('p')
        price.innerHTML = "$" + el.price;


        main_div.append(image, title, price);




    })



}