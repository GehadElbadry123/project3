let links=document.querySelector("#links");
let userinfo=document.querySelector("#userName");
let user=document.querySelector("#user-name");

const row =document.querySelector(".products")
if(localStorage.getItem("first"))
{
    links.remove();
    userinfo.style.display ="block";
    user.innerHTML = localStorage.getItem("first");
}


// //////////////////////////////////////


let logoutbtn=document.querySelector("#logout");
logoutbtn.addEventListener("click",()=>{
    localStorage.clear();
    setTimeout(()=>{
        window.location="login.html";


    }, 1500)
})

// ************************************************************************************************************************
let allProducts = document.querySelector(".products")
let products = [
    {
        id:1,
        imageUrl : "images/product1.jpg",
        Product : "T-shirt",
        Price: 80,
        Category: "fashion"
    },
    {
        id:2,
        imageUrl : "images/product2.jpg",
        Product : "earpodes",
        Price: 150,
        Category: "phone accessories"
    },
    {
        id:3,
        imageUrl : "images/product3.jpg",
        Product : "Jacket",
        Price: 120,
        Category: "fashion"
        
    },
    {
        id:4,
        imageUrl : "images/product4.jpg",
        Product : "Adidas bottle",
        Price: 120,
        Category: "sport"
        
    },
    {
        id:5,
        imageUrl : "images/product5.jpg",
        Product : "Glasses",
        Price: 80,
        Category: "Accesssories"
        
    },
    {
        id:6,
        imageUrl : "images/product6.jpg",
        Product : "cap",
        Price: 20,
        Category: "Accessories"
        
    },
    {
        id:7,
        imageUrl : "images/product7.jpg",
        Product : " Bag adidas",
        Price: 110,
        Category: "Bags"
        
    },
    {
        id:8,
        imageUrl : "images/product8.jpg",
        Product : "Shoes adidas",
        Price: 80,
        Category: "sport"
        
    },
    {
        id:9,
        imageUrl : "images/product9.png",
        Product : "Bag",
        Price: 180,
        Category: "fashion"
        
    }
]

function drawitem() {
    let y=products.map((item)=>{
        return ` <div class="product_item">
        <img class="product_item_img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
          <p>Product : ${item.Product}</p>
          <p>Price: ${item.Price} $</p>
          <p>Category: ${item.Category} </p>
         </div>
         <div class="product_item_action">
         <button id="${item.id}" class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
          <i id="${item.id}" class="far fa-heart fav"  onclick="addToFavorites(${item.id})"  ></i>
         </div>
      </div>`
    })
    allProducts.innerHTML=y

}
drawitem();



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let cartsproduct=document.querySelector(".carts_products div");
let counter=document.querySelector(".badge");

let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : []

if(addedItem) {
    addedItem.map(item => {
        cartsproduct.innerHTML +=`<p style="background-color: whitesmoke; color: blueviolet; font-size: 15px;  height: 40px; padding: 6px"   border-radius: 40%;" >${item.Product}  1</p>`
    })
    counter.style.display = "block";
    counter.innerHTML = addedItem.length;
}

if(localStorage.getItem=("first"))
  {
   function addToCart(id){

    const button = document.getElementById(id);
    if(button.style.backgroundColor == 'blue')
    {
        button.style.backgroundColor = 'blueviolet';
        button.style.color = 'white';
    }
    else{
        button.style.backgroundColor = 'blue';
        button.style.color = 'white';
    }
    

    let chosenitem = products.find((item)=>item.id===id);

    addedItem = [...addedItem , chosenitem]
    //console.log(addedItem)
    localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem))
    
    cartsproduct.innerHTML +=`<p  style="background-color: whitesmoke; color: blueviolet; font-size: 15px;  height: 50px; padding: 6px"   border-radius: 40%; " >${chosenitem.Product}  1</p>`
    let lengthcarts=document.querySelectorAll(".carts_products div p");

    //console.log(lengthcarts.length)

    counter.style.display="block";
    counter.innerHTML=lengthcarts.length;

    }

  }
else{
    window.location="login.html"
}
// /////////////////////////////////////////////////////////////////////////////////
let addedItemfav = [];
function addToFavorites(id)
{
    // const heartIcon = document.getElementById(id);

    // heartIcon.style.color = 'red';

    let chosenitem = products.find((item)=>item.id===id);
    addedItemfav = [...addedItemfav , chosenitem]
    console.log(addedItemfav)
    localStorage.setItem("ProductsInCartfav" , JSON.stringify(addedItemfav))

    
}













////////////////////////////////////////////////////////////////////////////////////

let shoppingcarticon=document.querySelector(".shopping_cart");
let carproduct=document.querySelector(".carts_products");

shoppingcarticon.addEventListener("click",opencart);

function opencart(){
    if(cartsproduct.innerHTML !=="")
    {
        if(carproduct.style.display=="none")
        {
            carproduct.style.display="block";
        }
        else{
            carproduct.style.display="none";
        }
    }
}

// **********************************************************************************************************************
const select=document.querySelector('.custom-select')
const search=document.querySelector('.search')

search.addEventListener('keyup',()=>{

    if(search.value){
        console.log(search.value)
        row.innerHTML=''
            if(select.value=='Search by Name'){
                console.log(select.value)
                for(let i =0;i<products.length;i++){
                    console.log(products[i])
                    if(products[i].Product.toLowerCase().includes(search.value)){
                       
                        row.innerHTML+= ` <div class="product_item">
                          <img class="product_item_img" src="${products[i].imageUrl}" alt="">
                        <div class="product_item_desc">
                        <p>Product : ${products[i].Product}</p>
                       <p>Price: ${products[i].Price} $</p>
                        <p>Category: ${products[i].Category} </p>
                        </div>
                        <div class="product_item_action">
                        <button id="${products[i].id}" class="add_to_cart" onClick="addToCart(${products[i].id})">Add To Cart</button>
                       <i id="${products[i].id}" class="far fa-heart fav"  onclick="addToFavorites(${products[i].id})"  ></i>
                       </div>
                       </div> `
                    
                    }
                }
            }else{
                for(let i =0;i<products.length;i++){
                    if(products[i].Category.toLowerCase().includes(search.value)){
                       
                        row.innerHTML+=  ` <div class="product_item">
                        <img class="product_item_img" src="${products[i].imageUrl}" alt="">
                      <div class="product_item_desc">
                      <p>Product : ${products[i].Product}</p>
                     <p>Price: ${products[i].Price} $</p>
                      <p>Category: ${products[i].Category} </p>
                      </div>
                      <div class="product_item_action">
                      <button id="${products[i].id}" class="add_to_cart" onClick="addToCart(${products[i].id})">Add To Cart</button>
                     <i id="${products[i].id}" class="far fa-heart fav"  onclick="addToFavorites(${products[i].id})"  ></i>
                     </div>
                     </div> `
                    
                    }
                }
            }
         }else{
            drawitem();
         }


})











// return ` <div class="product_item">
// <img class="product_item_img" src="${item.imageUrl}" alt="">
// <div class="product_item_desc">
//   <p>Product : ${products[i].Product}</p>
//   <p>Price: ${products[i].Price} $</p>
//   <p>Category: ${products[i].Category} </p>
//  </div>
//  <div class="product_item_action">
//  <button id="${products[i].id}" class="add_to_cart" onClick="addToCart(${products[i].id})">Add To Cart</button>
//   <i id="${products[i].id}" class="far fa-heart fav"  onclick="addToFavorites(${products[i].id})"  ></i>
//  </div>
// </div>`





