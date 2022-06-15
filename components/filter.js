function filter() {
    return ` <select id="sortbybrand" class="commonfilter" onchange="sortbyBrand()">
    <option value="BRAND">BRAND</option>
    <option value="SAMSUNG">SAMSUNG</option>
    <option value="APPLE">APPLE</option>
    <option value="DOOGEE">DOOGEE</option>
    <option value="XIAOMI">XIAOMI</option>
    <option value="ULEFONE">ULEFONE</option>
    <option value="HUAWEI">HUAWEI</option>
</select>
<select id="sortbycategory" class="commonfilter">
    <option value="CATEGORY">CATEGORY</option>
</select>
<select id="sortbyconcern" class="commonfilter">
    <option value="CONCERN">CONCERN</option>
</select>
<select id="sortbyingredient" class="commonfilter">
    <option value="INGREDIENT">INGREDIENT</option>
</select>
<select id="sortbyprice" class="commonfilter" onchange="sortbyprice()">
    <option value="PRICE">PRICE</option>
    <option value="less than 20">less than 20</option>
    <option value="20-50">20-50</option>
    <option value="50-60">50-60</option>
    <option value="61-500">61-500</option>
</select>
<span class="clearfilter"><a class="clearfilter" href="#">CLEAR FILTER</a></span>
<span id="sortrelevant">SORT BY : <select id="sortbyrelevant"
        onchange="sortbyrelevant()">
        <option value="RELEVANT">RELEVANT</option>
        <option value="PRICE:HIGH TO LOW">PRICE: HIGH TO LOW</option>
        <option value="PRICE:LOW TO HIGH">PRICE: LOW TO HIGH</option>
        <option value="TITLE:A TO Z">TITLE: A TO Z</option>
        <option value="TITLE:Z TO A">TITLE: Z TO A</option>
    </select>`
}


export default filter;