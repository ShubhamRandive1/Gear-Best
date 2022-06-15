function navbar() {
    return `
    <div id="logo">
        <img
            src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"
            alt="">
    </div>
    <div id="search">
        <div id="search-up">
            <a href="./"><p>Save $3 With App</p></a>
            <a href="./"><p>Suppoer Center</p></a>
            <a href="./"><p>Ship to USA</p></a>
            <a href="./"><p>Language</p></a>
            <a href="./"><p>Country Website</p></a>
        </div>
        <div id="search-down">
            <input type="text" placeholder="Search"><i class="fa-solid
                fa-magnifying-glass"></i>
            <div id="search-down-right">
                <a href="./signup.html"><p>Sign in</p></a>
                <a href="./product.html"><p>favourites</p></a>
                <a href="../cart.html"><p>Cart</p></a>
            </div>

        </div>
    </div>`
}

export default navbar;