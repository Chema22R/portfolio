$(function() {
    var blockSlider = false;
    var sliderSpeedMult = 2;
    var sliderSpeed, slideHeight, slideLeft;

    generateSlideCounter();

    function generateSlideCounter() {
        var code = "";

        for (var i=0; i<$(".section.slides .slide").length; i++) {
            code += "<button></button>";
        }

        $(code).appendTo(".section.slideCounter");
        $(".section.slideCounter button").first().addClass("current");
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

        $(".scroll").perfectScrollbar("update");
    }


    function recursiveSlidePrevious(distance) {
        slideHeight = $(".section.slides .slide.previous").height() + 20;

        if ($(".section.slideCounter button.current").prev().length > 0) {
            $(".section.slideCounter button.current").removeClass("current").prev().addClass("current");
        } else {
            $(".section.slideCounter button").removeClass("current").last().addClass("current");
        }

        $(".section.slides .slide.previous").fadeIn(0);

        $(".section.slides").animate({
            height: slideHeight
        }, sliderSpeed);

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
            
            if (--distance > 0) {recursiveSlidePrevious(distance)}
        });
    }

    function recursiveSlideNext(distance) {
        slideHeight = $(".section.slides .slide.next").height() + 20;

        if ($(".section.slideCounter button.current").next().length > 0) {
            $(".section.slideCounter button.current").removeClass("current").next().addClass("current");
        } else {
            $(".section.slideCounter button").removeClass("current").first().addClass("current");
        }

        $(".section.slides .slide.next").fadeIn(0);

        $(".section.slides").animate({
            height: slideHeight
        }, sliderSpeed);
        
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
            
            if (--distance > 0) {recursiveSlideNext(distance)}
        });
    }


    /* Triggers
    ========================================================================== */

    $("#buttonProfile").on("click touchstart", function(e) {
        e.preventDefault();

        $("#leftover, #presentationContainer").fadeIn("slow");

        organize();
        
        $("#presentation").scrollTop(0);
    });
    
    $(".section.slides .previowsArrow").on("click touchstart", function(e) {    // previows slide
        e.preventDefault();

        if (!blockSlider) {
            blockSlider = true;
            sliderSpeed = $(".section.slides").width() * sliderSpeedMult;
            slideHeight = $(".section.slides .slide.previous").height() + 20;
            slideLeft = $(".section.slides").width() + 20;

            if ($(".section.slideCounter button.current").prev().length > 0) {
                $(".section.slideCounter button.current").removeClass("current").prev().addClass("current");
            } else {
                $(".section.slideCounter button").removeClass("current").last().addClass("current");
            }

            $(".section.slides .slide.previous").fadeIn(0);

            $("#presentation").animate({
                scrollTop: 0
            }, sliderSpeed);

            $(".section.slides").animate({
                height: slideHeight
            }, sliderSpeed+100, function() {
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

            if ($(".section.slideCounter button.current").next().length > 0) {
                $(".section.slideCounter button.current").removeClass("current").next().addClass("current");
            } else {
                $(".section.slideCounter button").removeClass("current").first().addClass("current");
            }

            $(".section.slides .slide.next").fadeIn(0);

            $("#presentation").animate({
                scrollTop: 0
            }, sliderSpeed);

            $(".section.slides").animate({
                height: slideHeight
            }, sliderSpeed+100, function() {
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

    $(".section.slideCounter button").on("click touchstart", function(e) {
        e.preventDefault();

        if (!blockSlider && !e.target.classList.contains("current")) {
            blockSlider = true;

            var pointer;
            var previousDist = 0;
            var nextDist = 0;

            pointer = e.target
            while (!pointer.classList.contains("current")) {
                previousDist++;

                if (!pointer.previousSibling) {
                    pointer = pointer.parentNode.lastChild;
                } else {
                    pointer = pointer.previousSibling
                }
            }

            pointer = e.target
            while (!pointer.classList.contains("current")) {
                nextDist++;

                if (!pointer.nextSibling) {
                    pointer = pointer.parentNode.firstChild;
                } else {
                    pointer = pointer.nextSibling
                }
            }
            
            previousDist = e.target.parentNode.childElementCount - previousDist;
            nextDist = e.target.parentNode.childElementCount - nextDist;


            sliderSpeed = $(".section.slides").width() * sliderSpeedMult;
            slideLeft = $(".section.slides").width() + 20;

            $("#presentation").animate({
                scrollTop: 0
            }, sliderSpeed);

            if (nextDist > previousDist) {
                recursiveSlidePrevious(previousDist);

                setTimeout(function() {
                    $(".scroll").perfectScrollbar("update");
                    blockSlider = false;
                }, sliderSpeed * previousDist + 20);
            } else {
                recursiveSlideNext(nextDist);

                setTimeout(function() {
                    $(".scroll").perfectScrollbar("update");
                    blockSlider = false;
                }, sliderSpeed * nextDist + 20);
            }
        }
    });

    
    $(window).on("click touchstart", function(e) {
        if ($("#presentationContainer").is(":visible") && (!$(e.target).is("#buttonsLeft *, #buttonsRight *, #presentationContainer *") || $(e.target).is(".exitButton"))) {
            $("#leftover, #presentationContainer").fadeOut("slow");
        }
    });

    $(window).on("resize", function() {organize();});   // reorganize the slides
});