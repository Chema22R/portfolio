$(function() {
    var blockSlider = false;
    var sliderSpeedMult = 2;
    var sliderSpeed, slideHeight, slideLeft;

    generateSlideCounter();

    function generateSlideCounter() {
        var code = "";

        for (var i=0; i<$(".section.slides .slide").length; i++) {
            code += "<span></span>";
        }

        $(code).appendTo(".section.slideCounter");
        $(".section.slideCounter span").first().addClass("current");
    }

    function organize() {
        slideHeight = $(".section.slides .slide.current").height() + 20;
        slideLeft = $(".section.slides").width() + 20;

        $(".section.slides .slide").css({
            display: "none",
            position: "absolute",
            left: slideLeft
        });

        $(".section.slides .slide.current").css({
            display: "block",
            left: 0
        });
        
        $(".section.slides .slide.previous").css("left", -slideLeft);
    
        $(".section.slides").css("height", slideHeight);

        $("#presentation").scrollTop(0);
        $(".scroll").perfectScrollbar("update");
    }


    /* Triggers
    ========================================================================== */

    $("#buttonProfile").on("click touchstart", function(e) {
        e.preventDefault();

        $("#leftover, #presentationContainer").fadeIn("slow");

        organize();
    });
    
    $(".section.slides .previowsArrow").on("click touchstart", function(e) {    // previows slide
        e.preventDefault();

        if (!blockSlider) {
            blockSlider = true;
            sliderSpeed = $(".section.slides").width() * sliderSpeedMult;
            slideHeight = $(".section.slides .slide.previous").height() + 20;
            slideLeft = $(".section.slides").width() + 20;

            if ($(".section.slideCounter span.current").prev().length > 0) {
                $(".section.slideCounter span.current").removeClass("current").prev().addClass("current");
            } else {
                $(".section.slideCounter span").removeClass("current").last().addClass("current");
            }

            $(".section.slides .slide.previous").fadeIn(0);

            $("#presentation").animate({
                scrollTop: 0
            }, sliderSpeed);

            $(".section.slides").animate({
                height: slideHeight
            }, sliderSpeed, function() {
                $(".scroll").perfectScrollbar("update");
            });

            $(".section.slides .slide.current").animate({
                left: "+=" + slideLeft
            }, sliderSpeed);
        
            $(".section.slides .slide.previous").animate({
                left: "+=" + slideLeft
            }, sliderSpeed, function() {
                $(".section.slides .slide.current").fadeOut(0);

                $(".section.slides .slide.next").removeClass("next").addClass("static");
                $(".section.slides .slide.current").removeClass("current").addClass("next");
                $(".section.slides .slide.previous").removeClass("previous").addClass("current");

                if ($(".section.slides .slide.current").prev().length > 0) {
                    $(".section.slides .slide.current").prev().removeClass("static").addClass("previous");
                } else {
                    $(".section.slides .slide.static").last().removeClass("static").addClass("previous");
                }
        
                $(".section.slides .slide.previous").css("left", -slideLeft);
                blockSlider = false;
            });
        }
    });

    $(".section.slides .nextArrow").on("click touchstart", function(e) {    // next slide
        e.preventDefault();

        if (!blockSlider) {
            blockSlider = true;
            sliderSpeed = $(".section.slides").width() * sliderSpeedMult;
            slideHeight = $(".section.slides .slide.next").height() + 20;
            slideLeft = $(".section.slides").width() + 20;

            if ($(".section.slideCounter span.current").next().length > 0) {
                $(".section.slideCounter span.current").removeClass("current").next().addClass("current");
            } else {
                $(".section.slideCounter span").removeClass("current").first().addClass("current");
            }

            $(".section.slides .slide.next").fadeIn(0);

            $("#presentation").animate({
                scrollTop: 0
            }, sliderSpeed);

            $(".section.slides").animate({
                height: slideHeight
            }, sliderSpeed, function() {
                $(".scroll").perfectScrollbar("update");
            });
            
            $(".section.slides .slide.current").animate({
                left: "-=" + slideLeft
            }, sliderSpeed);
        
            $(".section.slides .slide.next").animate({
                left: "-=" + slideLeft
            }, sliderSpeed, function() {
                $(".section.slides .slide.current").fadeOut(0);

                $(".section.slides .slide.previous").removeClass("previous").addClass("static");
                $(".section.slides .slide.current").removeClass("current").addClass("previous");
                $(".section.slides .slide.next").removeClass("next").addClass("current");
        
                if ($(".section.slides .slide.current").next().length > 0) {
                    $(".section.slides .slide.current").next().removeClass("static").addClass("next");
                } else {
                    $(".section.slides .slide.static").first().removeClass("static").addClass("next");
                }
        
                $(".section.slides .slide.static, .section.slides .slide.next").css("left", slideLeft);
                blockSlider = false;
            });
        }
    });

    
    $(window).on("click touchstart", function(e) {
        if ($("#presentationContainer").is(":visible") && (!$(e.target).is("#buttonsLeft *, #buttonsRight *, #presentationContainer *") || $(e.target).is(".exitButton"))) {
            $("#leftover, #presentationContainer").fadeOut("slow");
        }
    });

    $(window).on("resize", function() {organize();});   // reorganize the slides
});