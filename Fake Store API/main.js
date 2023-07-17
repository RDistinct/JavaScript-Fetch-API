let apiUrl = 'https://fakestoreapi.com/products/';


window.addEventListener('DOMContentLoaded',function () {
    getStoreItems();
    
})
   /**
    * map over data and filter the categories and put them in search bar */ 

const emptyArr = [];//store api data to be used later
//    call this function inside window.addEventListener
 function getStoreItems(){


    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        
        // write a function that does something with the data when button is clicked OR we can push data to an empty array
       emptyArr.push(data)
       
        let productMenu = data.map(item => {
            // console.log(item)
            return  `<article class="product-items">
            <img src="${item.image}" alt=${item.title}>
            <div class="product-info" id="product-info">
                <header>    
                    <h4>${item.title}</h4>
                    <h4>$${item.price}</h4> 
                </header> 

                <p class="product description">${item.description}</p>
            </div>
        </article>`
        }).join("")
        /*document.getElementById('product').innerHTML =
            `<div>  
                <img src="${data.image}" alt="${data.name}" >
            </div>
            <div class="item-info">
                <span> ${data.title}</span>
                <p>Description: ${data.description}</span>
                <p>Price: $${data.price}</p>
            </div>
            `*/
            // productMenu = productMenu.join("");
            //convert to plain string so that when placed in html it will be read as html.join is used since map returns an array
            console.log(productMenu);
            const store = document.getElementById('store').innerHTML = productMenu;

        })
    .catch(err => console.log(err));
   }

   console.log(emptyArr)