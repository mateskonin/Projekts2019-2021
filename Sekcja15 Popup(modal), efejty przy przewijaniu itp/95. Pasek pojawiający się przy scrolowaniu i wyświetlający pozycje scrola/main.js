// JQUERY
$(document).on("scroll", function(){

    if($(document).scrollTop()>200){
    $(".info").addClass("active")
    $(".info").text("Obecna pozycja: "+Math.round($(document).scrollTop()))
    }
    else{$(".info").removeClass("active")}

        
})