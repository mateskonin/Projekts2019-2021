// JQUERY
// $(".icon").on("click", function(){
//     $(".icon, .navbar").toggleClass("show");
// })

//JAVASCRIPT

const icon = document.querySelector(".icon");
const navbar = document.querySelector(".navbar");

icon.addEventListener("click", function(){
icon.classList.toggle("show");
navbar.classList.toggle("show");
})

