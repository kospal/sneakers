const slide1 = 

    `<div class='slide1-div'>

    <img class='slide1' src='images/slide1.jpg'>

    <p class='title'>Nike Baseball</p> 

    <p class='image-text'>We've handpicked our best gifts for all kinds of athletes.</p>

    <button class='shop-now'>Shop Now</button>

    </div>`;



document.querySelector(".bullet-btn1").addEventListener("click",()=>{
    
    const show_slide1 = document.querySelector(".carousel");
    show_slide1.innerHTML = slide1;

    $("html, body").animate({ scrollTop: 200 }, 300);
   
})


const slide2 = 

    `<div class='slide2-div'>

    <img class='slide2' src='images/slide2.jpg'>

    <p class='title'>PERFECT DESIGN</p> 

    <p class='image-text'>Ready. experience. comfortable \and\ indispensable in life</p>

    <button class='shop-now'>Shop Now</button>

    </div>`;


document.querySelector(".bullet-btn2").addEventListener("click",(e)=>{

    const show_slide2 = document.querySelector(".carousel");
    show_slide2.innerHTML = slide2;

    $("html, body").animate({ scrollTop: 200 }, 300);
    
})


const slide3 = 

    `<div class='slide3-div'>

    <img class='slide3' src='images/slide3.jpg'>

    <p class='title'>Jacket TECH PACK</p> 

    <p class='image-text'>Aurora Shell Jacket \Is\ Ready For Any Adventure.</p>

    <button class='shop-now'>Shop Now</button>

    </div>`;

 
    document.querySelector(".bullet-btn3").addEventListener("click",()=>{

        const show_slide3 = document.querySelector(".carousel");
        
        show_slide3.innerHTML = slide3;

        $("html, body").animate({ scrollTop: 200 }, 300);
      
    })

    const array = [slide1,slide2,slide3];

    const random_slide = Math.floor(Math.random()*array.length);

    const result = array[random_slide];

 
    
