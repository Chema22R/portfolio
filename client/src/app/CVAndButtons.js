'use strict';

const isMobile = {  // allows to detect mobile devices
    Android: () => {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: () => {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: () => {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: () => {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: () => {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: () => {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
const sliderSpeedMult = 2;
var blockSlider = false;
var sliderSpeed, slideHeight, slideLeft;


fetch(DATA_URL)
.then(res => res.json())
.then(res => generateSlides(JSON.parse(res.files['personal-web-server_curriculum.json'].content), JSON.parse(res.files["personal-web-server_langs.json"].content)));

function generateSlides(curriculum, langs) {
    let codeHTML, slides;

    codeHTML =  '<div class="slide workExp"></div><div class="slide education courses"></div><div class="slide langs awards"></div>';
    $('#slidesContainer').append(codeHTML);


    slides = $('#slidesContainer > .slide');
    $(slides[0]).addClass('current');
    $(slides[1]).addClass('next');
    $(slides[slides.length-1]).addClass('previous');


    codeHTML =  '<a class="content icon-lkdn icon" href="' + curriculum.linkedin + '" target="_blank" rel="external"></a>' +
                '<a class="content icon-gthb icon" href="' + curriculum.github + '" target="_blank" rel="external"></a>' +
                '<a class="content icon-cdpn icon" href="' + curriculum.codepen + '" target="_blank" rel="external"></a>' +
                '<a class="content icon-gml icon" href="mailto:' + curriculum.personal.email + '" rel="external"></a>' +
                '<a class="content icon-cv icon" href="' + curriculum.driveCv + '" target="_blank" rel="external"></a>';
    $('#curriculumData > .section.social').append(codeHTML);


    for (let i=0; i<langs.length; i++) {
        codeHTML =  '<div class="' + langs[i] + ' content">' +
                        '<h2>' + curriculum.personal.name[langs[i]] + '</h2>' +
                        '<h3>' + curriculum.personal.role[langs[i]] + '</h3>' +
                        '<p>' + curriculum.personal.email + ' | ' + curriculum.personal.phone + '</p>' +
                        '<p class="country">' +
                            '<img src="images/country.png" alt="' + curriculum.personal.country[langs[i]] + '">' +
                            curriculum.personal.country[langs[i]] + ' | ' + curriculum.personal.birthday[langs[i]] +
                        '</p>' +
                    '</div>';

        $('#curriculumData > .section.basic').append(codeHTML);   // end basic or personal info


        codeHTML =  '<div class="' + langs[i] + ' content">' +
                        '<h2>' + curriculum.workExp.title[langs[i]] + '</h2>';

        for (let j=0; j<curriculum.workExp.list.length; j++) {
            codeHTML += '<h3 class="bold nbsp">' + curriculum.workExp.list[j].title[langs[i]] + '</h3>' +
                        '<h3 class="size01 nbsp lineBreak">' + curriculum.workExp.list[j].location[langs[i]] + '</h3>' +
                        '<h3 class="size01 floatR lineBreak">' + curriculum.workExp.list[j].period[langs[i]] + '</h3>' +
                        '<p class="padding-left">' + curriculum.workExp.list[j].description[langs[i]] + '</p>';
        }

        codeHTML += '</div>';

        $('#slidesContainer > .slide.workExp').append(codeHTML);    // end work experience info


        codeHTML =  '<div class="' + langs[i] + ' content">' +
                        '<h2>' + curriculum.education.title[langs[i]] + '</h2>';

        for (let j=0; j<curriculum.education.list.length; j++) {
            codeHTML += '<h3 class="bold nbsp">' + curriculum.education.list[j].title[langs[i]] + '</h3>' +
                        '<h3 class="size01 nbsp lineBreak">' + curriculum.education.list[j].period + '</h3>' +
                        '<h3 class="size02 floatR lineBreak">' + curriculum.education.list[j].level[langs[i]] + '</h3>' +
                        '<p>' + curriculum.education.list[j].location[langs[i]] + '</p>' +
                        '<p class="padding-left">' + curriculum.education.list[j].other[langs[i]] + '</p>';
        }

        codeHTML += '<br></div>';

        $('#slidesContainer > .slide.education').append(codeHTML);   // end education info


        /*codeHTML =  '<div class="' + langs[i] + ' content">' +
                        '<h2>' + curriculum.courses.title[langs[i]] + '</h2>';

        for (let j=0; j<curriculum.courses.list.length; j++) {
            codeHTML += '<h3 class="size01 bold nbsp">' + curriculum.courses.list[j].title[langs[i]] + '</h3>' +
                        '<h3 class="size02 nbsp lineBreak">(' + curriculum.courses.list[j].period + ')</h3>' +
                        '<h3 class="size02 floatR lineBreak">' + curriculum.courses.list[j].duration[langs[i]] + '</h3>' +
                        '<p>' + curriculum.courses.list[j].location[langs[i]] + '</p>';
        }

        codeHTML += '</div>';

        $('#slidesContainer > .slide.courses').append(codeHTML);    // end courses info*/


        codeHTML =  '<div class="' + langs[i] + ' content">' +
                        '<h2>' + curriculum.langs.title[langs[i]] + '</h2>' +
                        '<h3 class="size01 bold nbsp">' + curriculum.langs.motherTongue.title[langs[i]] + '</h3>' +
                        '<h3 class="size01">' + curriculum.langs.motherTongue.val[langs[i]] + '</h3>' +
                        '<br>' +
                        '<h3 class="size01 bold nbsp alignTop">' + curriculum.langs.other.title[langs[i]] + '</h3>' +
                        '<h3 class="size01">' + curriculum.langs.other.val[langs[i]] + '</h3>' +
                        '<br><br>' +
                    '</div>';

        $('#slidesContainer > .slide.langs').append(codeHTML);    // end languages info


        codeHTML =  '<div class="' + langs[i] + ' content">' +
                        '<h2>' + curriculum.awards.title[langs[i]] + '</h2>';

        for (let j=0; j<curriculum.awards.list.length; j++) {
            codeHTML += '<h3 class="size01 bold nbsp">' + curriculum.awards.list[j].title[langs[i]] + '</h3>' +
                        '<h3 class="size01 floatR lineBreak">' + curriculum.awards.list[j].period + '</h3>' +
                        '<p>' + curriculum.awards.list[j].description[langs[i]] + '</p>';
        }

        codeHTML += '</div>';

        $('#slidesContainer > .slide.awards').append(codeHTML);    // end awards info
    }


    codeHTML = "";
    for (let i=0; i<$(".section.slides > div > .slide").length; i++) {
        codeHTML += "<button></button>";
    }

    $(codeHTML).appendTo(".section.slideCounter");
    $(".section.slideCounter button").first().addClass("current");


    loadHandlers();
}

function recursiveSlidePrevious(distance) {
    slideHeight = $(".section.slides .slide.previous").height() + 40;

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
    slideHeight = $(".section.slides .slide.next").height() + 40;

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

function organizeSlides() {
    if (!isMobile.any()) {
        slideHeight = $(".section.slides .slide.current").height() + 40;
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
    } else {
        $(".slide.workExp").css("padding", "20px 30px 8px 30px");
        $(".slide.education.courses").css("padding", "8px 30px 8px 30px");
        $(".slide.langs").css("padding", "8px 30px 20px 30px");
        $(".previowsArrow").css("display", "none");
        $(".nextArrow").css("display", "none");
        $(".section.slideCounter").css("display", "none");
    }
}


/* Triggers
========================================================================== */

$("#buttonProfile").click(function(e) {
    e.preventDefault();

    $("#leftover, #curriculumContainer").fadeIn("slow");
    $(document.body).css({overflow: "hidden"});

    organizeSlides();

    $("#curriculumData").scrollTop(0);
});

$("#buttonsRight .langSelector").click(function(e) {
    e.preventDefault();

    if (!blockSlider) {
        let lang = (e.target.id) ? e.target.id : e.target.parentElement.id; // to make crossbrowser the id capture
        blockSlider = true;

        $("#buttonsRight .langSelector.current").removeClass("current");
        $("#" + lang).addClass("current");


        for (var i=0; i<$("#buttonsRight .langSelector").length; i++) { // fade out all elements of all languages, except the elements of current language
            if ($("#buttonsRight .langSelector")[i].id != lang) {
                $("." + $("#buttonsRight .langSelector")[i].id).fadeOut(0);
            }
        }

        $("." + lang).fadeIn("slow");   // fade in all element of current language


        $(".section.slides").animate({  // special: resize the current slide height
            height: $(".section.slides .slide.current").height() + 40
        }, "slow", function() {
            blockSlider = false;
        });
    }
});

$(window).on("click touchstart", function(e) {
    if ($("#curriculumContainer").is(":visible") && ($(e.target).is("#leftover") || $(e.target).is(".exitButton"))) {
        $("#leftover, #curriculumContainer").fadeOut("slow");
        $(document.body).css({overflow: "unset"});
    }
});

$(window).on("resize", function() {organizeSlides();});   // reorganize the slides

function loadHandlers() {
    $(".section.slides .previowsArrow").click(function(e) {    // previows slide
        e.preventDefault();
    
        if (!blockSlider) {
            blockSlider = true;
            sliderSpeed = $(".section.slides").width() * sliderSpeedMult;
            slideHeight = $(".section.slides .slide.previous").height() + 40;
            slideLeft = $(".section.slides").width() + 20;
    
            if ($(".section.slideCounter button.current").prev().length > 0) {
                $(".section.slideCounter button.current").removeClass("current").prev().addClass("current");
            } else {
                $(".section.slideCounter button").removeClass("current").last().addClass("current");
            }
    
            $(".section.slides .slide.previous").fadeIn(0);
    
            $("#curriculumData").animate({
                scrollTop: 0
            }, sliderSpeed);
    
            $(".section.slides").animate({
                height: slideHeight
            }, sliderSpeed+100);
    
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
    
    $(".section.slides .nextArrow").click(function(e) {    // next slide
        e.preventDefault();
    
        if (!blockSlider) {
            blockSlider = true;
            sliderSpeed = $(".section.slides").width() * sliderSpeedMult;
            slideHeight = $(".section.slides .slide.next").height() + 40;
            slideLeft = $(".section.slides").width() + 20;
    
            if ($(".section.slideCounter button.current").next().length > 0) {
                $(".section.slideCounter button.current").removeClass("current").next().addClass("current");
            } else {
                $(".section.slideCounter button").removeClass("current").first().addClass("current");
            }
    
            $(".section.slides .slide.next").fadeIn(0);
    
            $("#curriculumData").animate({
                scrollTop: 0
            }, sliderSpeed);
    
            $(".section.slides").animate({
                height: slideHeight
            }, sliderSpeed+100);
            
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

    $(".section.slideCounter button").click(function(e) {
        e.preventDefault();
    
        if (!blockSlider && !e.target.classList.contains("current")) {
            blockSlider = true;
    
            let pointer;
            let previousDist = 0;
            let nextDist = 0;
    
            pointer = e.target
            while (!pointer.classList.contains("current")) {
                previousDist++;
                pointer = (!pointer.previousSibling) ? pointer.parentNode.lastChild : pointer.previousSibling;
            }
    
            pointer = e.target
            while (!pointer.classList.contains("current")) {
                nextDist++;
                pointer = (!pointer.nextSibling) ? pointer.parentNode.firstChild : pointer.nextSibling;
            }
    
            previousDist = e.target.parentNode.childElementCount - previousDist;
            nextDist = e.target.parentNode.childElementCount - nextDist;
    
    
            sliderSpeed = $(".section.slides").width() * sliderSpeedMult;
            slideLeft = $(".section.slides").width() + 20;
    
            $("#curriculumData").animate({
                scrollTop: 0
            }, sliderSpeed);
    
            if (nextDist > previousDist) {
                recursiveSlidePrevious(previousDist);
    
                setTimeout(function() {
                    blockSlider = false;
                }, sliderSpeed * previousDist + 20);
            } else {
                recursiveSlideNext(nextDist);
    
                setTimeout(function() {
                    blockSlider = false;
                }, sliderSpeed * nextDist + 20);
            }
        }
    });
}