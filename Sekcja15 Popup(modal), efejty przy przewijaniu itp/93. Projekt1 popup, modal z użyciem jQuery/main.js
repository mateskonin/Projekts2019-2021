// const button = document.querySelector("button");
// const modal = document.querySelector("section.modal-wrap");
// const span = document.querySelector("span");
// const article = document.querySelector(".article");

// button.addEventListener("click", function(){
// modal.classList.add("active");
// article.classList.add("blur");
// })

// span.addEventListener("click", function(){
//     modal.classList.remove("active");
//     article.classList.remove("blur");
// })

// jQUERY
$('button').on("click", function(){
    $(".modal-wrap").addClass("active")
    $("article").addClass("blur")
})

$('span').on("click", function(){
    $(".modal-wrap").removeClass("active")
    $("article").removeClass("blur")
})