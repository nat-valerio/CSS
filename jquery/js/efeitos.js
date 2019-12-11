$(document).ready(function(){
    $("h1").click(function(){
        $(this).toggleClass("destaque");
    });

    $("#hide").click(function(){
        $("img[src*='moto01']").hide("fast");
    });

    $("#show").click(function(){
        $("img[src*='moto01']").show("slow");
    });

    $("#slideUP").click(function(){
        $("img[src*='moto02']").slideUp();
    });

    $("#slideDOWN").click(function(){
        $("img[src*='moto02']").slideDown();
    });

    $("#fadeOut").click(function(){
        $("img[src*='moto03']").fadeOut("slow");
    });

    $("#fadeIn").click(function(){
        $("img[src*='moto03']").fadeIn("fast");
    });

    $("#toggle").click(function(){
        $("img[src*='moto04']").toggle();
    });

    $("#toggleSlide").click(function(){
        $("img[src*='moto05']").slideToggle();
    });

    $("#toggleFade").click(function(){
        $("img[src*='moto06']").fadeToggle();
    });
});