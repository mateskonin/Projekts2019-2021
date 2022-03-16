$(window).on("scroll", function(){

    const windowHeight = $(window).height();
    const scrollHeight = $(window).scrollTop();

    const art2 = $(".art2").offset().top;
    const art3 = $(".art3").offset().top;
    const art4 = $(".art4").offset().top;
    const op1 = $(".op1").offset().top;
    const op2 = $(".op2").offset().top;

    const art2Height = $(".art2").outerHeight();
    const art3Height = $(".art3").outerHeight();
    const art4Height = $(".art4").outerHeight();
    const op1Height = $(".op1").outerHeight();
    const op2Height = $(".op2").outerHeight();

    if(scrollHeight > art2 + art2Height/1.5 - windowHeight){
        $(".art2").addClass("active")
    }

    if(scrollHeight > art3 + art3Height/1.5 - windowHeight){
        $(".art3").addClass("active2")
    }

    if(scrollHeight > art4 + art4Height/1.5 - windowHeight){
        $(".art4").addClass("active")
    }

    if(scrollHeight > op1 + op1Height/1.5 - windowHeight){
        $(".op1").addClass("active")
    }

    if(scrollHeight > op2 + op2Height/1.5 - windowHeight){
        $(".op2").addClass("active")
    }

    

    

    if(scrollHeight < 200){
        $("article").removeClass("active active2")
    }
})
