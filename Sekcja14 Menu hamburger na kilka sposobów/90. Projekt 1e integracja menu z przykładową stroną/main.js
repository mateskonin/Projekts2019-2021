let plus = document.querySelector(".burger");
let showMenu = document.querySelector("aside");
let i =document.querySelector(".far");
let i2 =document.querySelector(".fas");
let wrap = document.querySelector(".wrapper")
    
plus.addEventListener("click",function(){
    i.classList.toggle("change");
    i2.classList.toggle("change");
    showMenu.classList.toggle("show");
    wrap.classList.toggle("changeSize");
    
})

// $('.burger').on("click", function(){
//     $(".fas, .far").toggleClass("change");
//     //Można oba osobno
//     // $(".far").toggleClass("change");
//     $("aside").toggleClass("show");
//     $(".wrapper").toggleClass("changeSize");
    
// })