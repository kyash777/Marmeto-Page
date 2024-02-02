let productDiv = document.querySelector(".products");

const displayProducts = async () => {
    const url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
    productDiv.innerHTML = "";
    let data = await fetch(url);
    let finalData = await data.json();
    return finalData;
};
displayProducts();

const men = document.querySelector(".men");
const women = document.querySelector(".women");
const kids=document.querySelector(".kids");

const buttons = [men, women, kids];

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(otherButton => {
      otherButton.style.backgroundColor = "";
      otherButton.style.color="";
    });
    button.style.backgroundColor = "black";
    button.style.color="white"; 
  });
});

const calculateDiscount=(curr,prev)=>{
    let dis=((prev-curr)/prev)*100;
    return Math.round(dis);
}
men.addEventListener("click", async () => {
    const finalData = await displayProducts();
    let category = finalData.categories[0];
    const categoryProducts = category.category_products;
    console.log(categoryProducts);
    categoryProducts.map((item) => {
        const text=item.badge_text;
        let discount=calculateDiscount(item.price,item.compare_at_price);
        let title=item.title;
        if(title.length>10){
            title=title.substring(0,10)+"...";
        }
        productDiv.innerHTML += `
            <div class="product-items">
                <div class="img-container" >
                    ${text?`<div class="badge">${text}</div>`:""}
                    <img src=${item.image} alt="Image">
                </div>
                <div class="brand">
                    <p class="title">${title}</p>
                    <p class="vendor">${item.vendor}</p>
                </div>
                <div class=product-price>
                    <p class="price">Rs ${item.price}.00</p>
                    <p class="compare-price">${item.compare_at_price}.00</p>
                    <p class="discount">${discount}% Off</p>
                </div>
                <div class="cart">
                    <button class="cart-button">Add to cart</button>
                </div>
            </div>
        `
    })
})
men.click();

women.addEventListener("click", async () => {
    const finalData = await displayProducts();
    let category = finalData.categories[1];
    const categoryName = category.category_name;
    const categoryProducts = category.category_products;
    console.log(categoryProducts);
    categoryProducts.map((item) => {
        let discount=calculateDiscount(item.price,item.compare_at_price);
        let title=item.title;
        if(title.length>10){
            title=title.substring(0,10)+"...";
        }
        productDiv.innerHTML += `
            <div class="product-items">
                <div>
                    <img src=${item.image} alt="Image">
                </div>
                <div class="brand">
                    <p class="title">${title}</p>
                    <p class="vendor">${item.vendor}</p>
                </div>
                <div class=product-price>
                    <p class="price">Rs ${item.price}.00</p>
                    <p class="compare-price">${item.compare_at_price}.00</p>
                    <p class="discount">${discount}% Off</p>
                </div>
                <div class="cart">
                    <button class="cart-button">Add to cart</button>
                </div>
            </div>
        `
    })
})

kids.addEventListener("click", async () => {
    const finalData = await displayProducts();
    let category = finalData.categories[2];
    const categoryProducts = category.category_products;
    console.log(categoryProducts);
    categoryProducts.map((item) => {
        let discount=calculateDiscount(item.price,item.compare_at_price);
        let title=item.title;
        if(title.length>10){
            title=title.substring(0,10)+"...";
        }
        productDiv.innerHTML += `
            <div class="product-items">
                <div>
                    <img src=${item.image} alt="Image">
                </div>
                <div class="brand">
                    <p class="title">${title}</p>
                    <p class="vendor">${item.vendor}</p>
                </div>
                <div class=product-price>
                    <p class="price">Rs ${item.price}.00</p>
                    <p class="compare-price">${item.compare_at_price}.00</p>
                    <p class="discount">${discount}% Off</p>
                </div>
                <div class="cart">
                    <button class="cart-button">Add to cart</button>
                </div>
            </div>
        `
    })
})

