let ProductsInCart=localStorage.getItem("ProductsInCart");
let allProducts = document.querySelector(".products");

let allfav=document.querySelector(".productsfav")
let ProductsInCartfav=localStorage.getItem("ProductsInCartfav");

const items=JSON.parse(localStorage.getItem("ProductsInCart"));
const itemsfav=JSON.parse(localStorage.getItem("ProductsInCartfav"));

let totalproducts=document.querySelector(".totalprice")

//totalprice(JSON.stringify(ProductsInCart));

if(ProductsInCart){
    let item = JSON.parse(ProductsInCart) ;
    drawCartProducts(item);
    totalprice(item)
    
}



if(ProductsInCartfav){
    let items = JSON.parse(ProductsInCartfav) ;
    drawCartProductsfav(items);
    
}


function  drawCartProductsfav(products)
{
    console.log(products)
    let y = products.map((item) => {
        return ` <div class="product_item">
        <img class="product_item_img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
          <p>Product : ${item.Product}</p>
          <p>Price: ${item.Price} $</p>
          <p>Category: ${item.Category} </p>
         </div>
         <div class="product_item_action">
         <i class="far fa-heart fav" onClick="removefromfav(${item.id})"></i>

         </div>
      </div>`
    })
    allfav.innerHTML = y;
}

function removefromfav(id)

{
    var index= itemsfav.findIndex((x)=>{
        return x.id==id
    })
    itemsfav.splice(index,1)
    localStorage.setItem("ProductsInCartfav",JSON.stringify(itemsfav))
    console.log(itemsfav);

    let ProductsInCart=localStorage.getItem("ProductsInCartfav");
    let item = JSON.parse(ProductsInCart) ;
    drawCartProductsfav(item);

}




// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function drawCartProducts(products){
    let y = products.map((item) => {
        return ` <div class="product_item">
        <img class="product_item_img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
          <p>Product : ${item.Product}</p>
          <p>Price: ${item.Price} $</p>
          <p>Category: ${item.Category} </p>
         </div>
         <div class="product_item_action">
          <button class="add_to_cart" onClick="removefromCart(${item.id})" >Remove From Cart</button>

         </div>
      </div>`
    })
    allProducts.innerHTML = y;
}
function totalprice(products){
    const totalPrice = products.reduce((total, item) => {
        return total + item.Price;
    }, 0);


    totalproducts.innerHTML=`<p style="   ">Total price : ${totalPrice}$</p>`;
}

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function removefromCart(id){
    
    var index= items.findIndex((x)=>{
        return x.id==id
    })
    items.splice(index,1)
    localStorage.setItem("ProductsInCart",JSON.stringify(items))
    console.log(items);

    let ProductsInCart=localStorage.getItem("ProductsInCart");
    let item = JSON.parse(ProductsInCart) ;
    drawCartProducts(item);
    totalprice(item)
}

















let logoutbtn=document.querySelector("#logout");
logoutbtn.addEventListener("click",()=>{
    localStorage.clear();
    setTimeout(()=>{
        window.location="login.html";


    }, 1500)
})