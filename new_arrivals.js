let new_arrivals = [{

    image: 'images/jordan.jpg',
    image2: 'images/jordan2.jpg',
    brands:'Nike',
    shoe_name:'Air Jordan',
    category:'Men\'s running shoe',
    price:95
    
},

{

    image: 'images/sock_shoe.jpg',
    image2: 'images/sock_shoe2.jpg',
    brands:'Nike',
    shoe_name:'Shocks Runner',
    category:'Men\'s running shoe',
    price:65

},

{

    image: 'images/mercurial.jpg',
    image2: 'images/mercurial2.jpg',
    brands:'Nike',
    shoe_name:'Mercurial running',
    category:'Men\'s running shoe',
    price:55


},

{

    image: 'images/crown1.jpg',
    image2: 'images/crown2.jpg',
    brands:'Nike',
    shoe_name:'MD Runner',
    category:'Men\'s running shoe',
    price:50


},

{

    image: 'images/modern.jpg',
    image2: 'images/modern2.jpg',
    brands:'Nike',
    shoe_name:'Modern Runner',
    category:'Men\'s running shoe',
    price:70


}];



let shoes_arrivals = Object.values(new_arrivals);

function shoes_arrival (){
 
    shoes_arrivals.forEach((value,index)=>{
            

            const show_arrivals = `
            <div class="shoe_products" 
            onmouseover="document.getElementById('show_cart_${index}').style.visibility = 'visible';"
            onmouseout="document.getElementById('show_cart_${index}').style.visibility = 'hidden';">

                <img class="shoe_img" onmouseover="this.setAttribute('src', '${value.image2}')" 
                onmouseout="this.setAttribute('src', '${value.image}')"
                src = '${value.image}' alt =${value.shoe_name}> 

                <p class="brands"><span style="color:black">Brands </span>${value.brands}</p>
                <hr style="max-width:100%;margin-right:10%;">
                <p class="shoe_name">${value.shoe_name}</p>
                <p class="shoe_price">${value.price.toFixed(2)} €</p>

                    <div id="show_cart_${index}" class="show_cart" style="visibility: hidden;">

                        <button class="add_to_cart"><img src="images/cart2.jpg">Add to cart</button>
            
                    </div>
                    
            </div>`;

            document.querySelector('.shoes').innerHTML+=show_arrivals;

            
        });


}



document.querySelector(".new-arrivals").addEventListener("click",()=>{
    document.querySelector('.shoes').innerHTML = "";
     shoes_arrival();
}) 


