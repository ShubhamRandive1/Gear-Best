import navbar from '../components/navbar.js'

document.getElementById('navbar').innerHTML = navbar()


import footer from '../components/footer.js'

document.getElementById('footer--start').innerHTML = footer();



document.getElementById("form").addEventListener("submit", myfunc)

let arr = JSON.parse(localStorage.getItem("signUp")) || [];



function myfunc() {
    event.preventDefault();

    let eEmail = document.getElementById("name").value;
    let epass = document.getElementById("password").value;


    let count = 0;


    for (var i = 0; i < arr.length; i++) {
        if (eEmail == "" && epass == "") {
            alert("Enter Email and Password")
            break;
        } else if (eEmail == "") {

            alert("Enter Email")
            break;
        } else if (epass == "") {

            alert("Enter Password");
            break;
        } else if (eEmail === arr[i].Email && epass === arr[i].pass) {
            count++;
        }
    }

    if (count > 0) {
        alert("login Successful");
        window.location.href = "index.html"

    } else {
        alert("invalid Email Password")
    }

}