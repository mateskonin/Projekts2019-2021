$('.jq').on("click", function(){
    $('body').append('<div class="box">')
})


const btn = document.querySelector(".js");
function addSquare(){
    const divItem = document.createElement("div");
    divItem.classList.add("box")
    document.body.appendChild(divItem);
    
}

btn.addEventListener("click", addSquare)