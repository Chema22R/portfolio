$(function() {
    var blockSlider = false;
    var lang;

    $("#buttonsRight .langSelector").on("click touchstart", function(e) {
        e.preventDefault();

        if (!blockSlider) {
            blockSlider = true;

            if (e.target.id) {
                lang = e.target.id;
            } else {
                lang = e.target.parentElement.id;
            }
            
            
            $("#buttonsRight .langSelector.current").removeClass("current");
            $("#" + lang).addClass("current");


            for (var i=0; i<$("#buttonsRight .langSelector").length; i++) {
                if ($("#buttonsRight .langSelector")[i].id != lang) {
                    $("." + $("#buttonsRight .langSelector")[i].id).fadeOut(0);
                }
            }

            $("." + lang).fadeIn("slow");


            $(".section.slides").animate({
                height: $(".section.slides .slide.current").height() + 20
            }, "slow", function() {
                blockSlider = false;
            });
        }
    });
});