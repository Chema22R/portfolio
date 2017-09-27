$(function() {
    var blockSlider = false;
    var lang;

    $("#buttonsRight .langSelector").on("click touchstart", function(e) {
        e.preventDefault();

        if (!blockSlider) {
            blockSlider = true;

            if (e.target.id) {  // to make crossbrowser the id capture
                lang = e.target.id;
            } else {
                lang = e.target.parentElement.id;
            }
            
            
            $("#buttonsRight .langSelector.current").removeClass("current");
            $("#" + lang).addClass("current");


            for (var i=0; i<$("#buttonsRight .langSelector").length; i++) { // fade out all elements of all languages, except the elements of current language
                if ($("#buttonsRight .langSelector")[i].id != lang) {
                    $("." + $("#buttonsRight .langSelector")[i].id).fadeOut(0);
                }
            }

            $("." + lang).fadeIn("slow");   // fade in all element of current language


            $(".section.slides").animate({  // special: resize the current slide height
                height: $(".section.slides .slide.current").height() + 20
            }, "slow", function() {
                $(".scroll").perfectScrollbar("update");
                blockSlider = false;
            });
        }
    });
});