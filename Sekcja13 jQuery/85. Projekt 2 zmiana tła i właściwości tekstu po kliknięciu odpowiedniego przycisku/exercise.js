$('.interface').on("click", function () {
    if ($(this).hasClass("orange")){
        // $('body').toggleClass("orange");
        $('body').css("background-color", "orange")} 

    else if ($(this).hasClass("green")){
        $('body').css("background-color", "green")} 

    else if ($(this).hasClass("increase")){
        $('.text').animate({
            "font-size": "+=10",
            "letter-spacing": "+=5"}, 2000)} 

    else if ($(this).hasClass("move")){
        $('.text').css("padding-left", "+=5")}

})