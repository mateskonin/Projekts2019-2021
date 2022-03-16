let plus = document.querySelector(".burger");
let showMenu = document.querySelector("aside");
    
plus.addEventListener("click",function(){
    plus.classList.toggle("rotate");
    showMenu.classList.toggle("show");
    
})