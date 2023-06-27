function load_menu(){

    const menu = 
`<div class="menu-social2">

    <div class="menu2">

        <div class="home"><span>HOME</span></div>
        <div class="for-men"><span>FOR MEN</span></div>
        <div class="for-women"><span>FOR WOMEN</span></div>
        <div class="for-kid"><span>FOR KID</span></div>
        <div class="accessories"><span>ACCESSORIES</span></div>
        <div class="top-special-products"><span>TOP SPECIAL PRODUCTS</span></div>
        <div class="about-us"><span>ABOUT US</span></div>
        <div class="blog"><span>BLOG</span></div>

    </div>

    <div><button class="close">X</button></div>

    <div class="social2">

        <div class="follow">FOLLOW US</div>
        <div><img class="twitter-img" src="images/twitter.jpg"></div>
        <div><img class="google-plus-img" src="images/google-plus.jpg"></div>
        <div><img class="facebook-img" src="images/facebook.jpg"></div>
        <div><img class="youtube-img" src="images/youtube.jpg"></div>
        <div><img class="flickr-img" src="images/flickr.jpg"></div>
        <div><img class="instagram-img" src="images/instagram.jpg"></div>

    </div>

</div>`  



if (matchMedia('only screen and (max-width: 1350px)').matches) {
    
    const hamburger = `<div style="display:flex;justify-content:center;padding:1rem;align-items:center;">
                       <button class="hamburger" style="background-color: #2f333a;border:none;font-weight:bold;color:white;
                       font-size:16px;cursor:pointer;">-<br>-<br>-</button>
                       <span style="margin-left:15px;color:white;font-weight:bold;">MENU</span></div>`;
                       

    const element1 = document.querySelector('.menu-js');                
    
    element1.innerHTML = hamburger;
    
    const element2 = document.querySelectorAll('.hamburger');

    const arr = Array.from(element2);
    
    

    arr.forEach(result1 => {

        result1.addEventListener("click",()=>{

            element1.innerHTML = menu;

            const element3 = document.querySelectorAll('.close');

            const arr2 = Array.from(element3);
        
            arr2.forEach(result2 => {
        
                result2.addEventListener("click",()=>{
                
                element1.innerHTML = hamburger;
                location.reload(); 
                });
            });
            
        });
    });

  /*  element2.addEventListener("click",()=>{

            element1.innerHTML = menu;

            const element3 = document.querySelector('.close');

            element3.addEventListener("click",()=>{
                
            element1.innerHTML = hamburger;
            
        });
       
    });*/
   
}


}


load_menu();