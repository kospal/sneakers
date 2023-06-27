
document.querySelector(".featured").style.color="black";


document.querySelector(".featured").addEventListener("click",()=>{

    
    document.querySelector(".featured").style.color="black";
    
    document.querySelector(".bestseller").style.color="#bbbbbb";

    document.querySelector(".new-arrivals").style.color="#bbbbbb";

})

document.querySelector(".new-arrivals").addEventListener("click",()=>{

    document.querySelector(".featured").style.color="#bbbbbb";
    
    document.querySelector(".bestseller").style.color="#bbbbbb";

    document.querySelector(".new-arrivals").style.color="black";
    
})

document.querySelector(".bestseller").addEventListener("click",()=>{

    document.querySelector(".featured").style.color="#bbbbbb";
    
    document.querySelector(".bestseller").style.color="black";

    document.querySelector(".new-arrivals").style.color="#bbbbbb";
    
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////

