$(function() {
    var lang;

    $("#buttons .langSelector").on("click touchstart", function(e) {
        e.preventDefault();

        if (e.target.id) {
            lang = e.target.id;
        } else {
            lang = e.target.parentElement.id;
        }
        
        
        $("#buttons .langSelector.current").removeClass("current");
        $("#" + lang).addClass("current");


        for (var i=0; i<$("#buttons .langSelector").length; i++) {
            if ($("#buttons .langSelector")[i].id != lang) {
                $("." + $("#buttons .langSelector")[i].id).fadeOut(0);
            }
        }

        $("." + lang).fadeIn("slow");


        $(".section.slides").animate({
            height: $(".section.slides .slide.current").height() + 20
        }, "slow");
    });
});