let plus = document.querySelector(".burger");
let showMenu = document.querySelector("aside");
let i =document.querySelector(".far");
let i2 =document.querySelector(".fas");
    
plus.addEventListener("click",function(){
    i.classList.toggle("change");
    i2.classList.toggle("change");
    showMenu.classList.toggle("show");
    
})