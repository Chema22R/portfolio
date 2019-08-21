"use strict";

const sliderSpeedMult = 2;

const curriculum = [
    {
        title: "spanish",
        github: "https://github.com/Chema22R",
        linkedin: "https://www.linkedin.com/in/chema22r",
        driveCv: "https://drive.google.com/file/d/1teqoDzJVKS2bTjNJdnl1XK3kQHTC5iBb/view?usp=sharing",
        personal: {
            name: "José María Rivera Alonso",
            role: "Desarrollador Full-stack",
            email: "chema22r@gmail.com",
            phone: "(+34) 697946985",
            country: {
                image: "images/spain.png",
                name: "España"
            },
            birthday: "28/09/1995"
        },
        education: {
            title: "Formación",
            list: [
                {
                    title: "Máster en Ingeniería Informática",
                    period: "(09/2017 - 02/2019)",
                    level: "EQF-MEC 7",
                    location: "Universidad de León, León (España)"
                },
                {
                    title: "Grado en Ingeniería Informática",
                    period: "(09/2013 - 06/2017)",
                    level: "EQF-MEC 6",
                    location: "Universidad de León, León (España)"
                }
            ]
        },
        courses: {
            title: "Cursos",
            list: [
                {
                    title: "Emprendimiento Social",
                    period: "2017",
                    duration: "30 horas",
                    location: "Miríada X"
                },
                {
                    title: "Taller Emprendedor ágil. Lean Startup en el canal online",
                    period: "2017",
                    duration: "20 horas",
                    location: "Fundación General de la Universidad de León y de la empresa, FGULEM"
                },
                {
                    title: "Curso básico de Marketing Digital",
                    period: "2016",
                    duration: "40 horas",
                    location: "Programa Actívate, Google"
                },
                {
                    title: "Diseño web con HTML5 y CSS3",
                    period: "2015",
                    duration: "120 horas",
                    location: "Seis Cocos Technical School"
                },
                {
                    title: "Unity 3D",
                    period: "2015",
                    duration: "40 horas",
                    location: "Universidad de León"
                },
                {
                    title: "Desarrollo web con Joomla",
                    period: "2015",
                    duration: "",
                    location: "Cowabi Web Solutions"
                },
                {
                    title: "Programación en C",
                    period: "2014",
                    duration: "40 horas",
                    location: "Universidad de León"
                }
            ]
        },
        workExp: {
            title: "Experiencia Profesional",
            list: [
                {
                    title: "Ingeniero de software",
                    location: "León (España)",
                    period: "07/2018 - presente",
                    description: "Creación de un previsualizador de impresión 3D utilizando tecnologías HTML5/JS: Este" +
                                " proyecto constituye las prácticas de empresa y el proyecto final del Grado en Ingeniería" +
                                " Informática. Fue premiado como el mejor proyecto del XII Observatorio Tecnológico de HP." +
                                "<br>Gestión de prototipos de impresoras conectadas a la red: Este proyecto constituye las" +
                                " prácticas de empresa y el proyecto final del Máster en Ingeniería Informática."
                },
                {
                    title: "Profesor de clases particulares",
                    location: "",
                    period: "09/2015 - presente",
                    description: "Profesor de clases particulares para alumnos de Ingenierías y enseñanzas técnicas.<br>Materias" +
                                " impartidas: Java, C y desarrollo web."
                },
                {
                    title: "Modelador 3D",
                    location: "Universidad de León, León (España)",
                    period: "09/2015 - 06/2018",
                    description: "Proyecto de investigación para el desarrollo de prótesis de bajo coste para animales con miembros" +
                                " amputados, mediante el uso de escaneado, modelado e impresión 3D. Encargado de todas las tareas" +
                                " descritas anteriormente."
                },
                {
                    title: "Profesor invitado",
                    location: "Universidad de León, León (España)",
                    period: "09/2016 - 09/2016",
                    description: "Profesor en la Universidad de León durante el curso de extensión universitaria Unity 3D. Encargado" +
                                " de parte de las clases relacionadas con Autodesk Maya y modelado 3D."
                }
            ]
        },
        langs: {
            title: "Idiomas",
            motherTongue: {
                title: "Lengua materna",
                val: "Español"
            },
            other: {
                title: "Otros idiomas",
                val: "Inglés (nivel B2)<br>Japonés (nivel A1/A2)"
            }
        },
        awards: {
            title: "Premios y Distinciones",
            list: [
                {
                    title: "Mejor proyecto del XII Observatorio Tecnológico de HP",
                    period: "2017",
                    description: "Ganador del XII Observatorio Tecnológico de HP, por el desarrollo de un previsualizador de" +
                                " impresión 3D utilizando tecnologías HTML5/JS."
                }
            ]
        }
    },
    {
        title: "english",
        github: "https://github.com/Chema22R",
        linkedin: "https://www.linkedin.com/in/chema22r",
        driveCv: "https://drive.google.com/file/d/1bKwHEJ-dqufh7fZ1n2RjhQo9E__pSg88/view?usp=sharing",
        personal: {
            name: "José María Rivera Alonso",
            role: "Full-stack Developer",
            email: "chema22r@gmail.com",
            phone: "(+34) 697946985",
            country: {
                image: "images/spain.png",
                name: "Spain"
            },
            birthday: "28/09/1995"
        },
        education: {
            title: "Education",
            list: [
                {
                    title: "Master’s Degree in Computer Engineering",
                    period: "(09/2017 - 02/2019)",
                    level: "EQF 7",
                    location: "University of León, León (Spain)"
                },
                {
                    title: "Bachelor’s Degree in Computer Engineering",
                    period: "(09/2013 - 06/2017)",
                    level: "EQF 6",
                    location: "University of León, León (Spain)"
                }
            ]
        },
        courses: {
            title: "Courses",
            list: [
                {
                    title: "Social Entrepreneurship",
                    period: "2017",
                    duration: "30 hours",
                    location: "Miríada X"
                },
                {
                    title: "Agile Entrepreneur workshop. Lean Startup on the online channel",
                    period: "2017",
                    duration: "20 hours",
                    location: "General Foundation of the University of León and the company, FGULEM"
                },
                {
                    title: "Basic Digital Marketing course",
                    period: "2016",
                    duration: "40 hours",
                    location: "Actívate program, Google"
                },
                {
                    title: "Web design with HTML5 and CSS3",
                    period: "2015",
                    duration: "120 hours",
                    location: "Seis Cocos Technical School"
                },
                {
                    title: "Unity 3D",
                    period: "2015",
                    duration: "40 hours",
                    location: "University of León"
                },
                {
                    title: "Web development with Joomla",
                    period: "2015",
                    duration: "",
                    location: "Cowabi Web Solutions"
                },
                {
                    title: "C programming",
                    period: "2014",
                    duration: "40 hours",
                    location: "University of León"
                }
            ]
        },
        workExp: {
            title: "Work Experience",
            list: [
                {
                    title: "Software engineer",
                    location: "HP SCDS, León (Spain)",
                    period: "07/2018 - present",
                    description: "Creation of a 3D print previewer using HTML5/JS technologies: This project constitutes the" +
                                " company practices and the final project of the Bachelor's Degree in Computer Engineering." +
                                " It was awarded as the best project of the XII Technology Observatory of HP.<br>Network" +
                                " printers prototypes management: This project constitutes the company practices and the final" +
                                " project of the Master's Degree in Computer Engineering."
                },
                {
                    title: "Private tutor",
                    location: "",
                    period: "09/2015 - present",
                    description: "Private tutor for students of Engineering and technical education.<br>Subjects taught: Java," +
                                " C and web development."
                },
                {
                    title: "3D Modeler",
                    location: "University of León, León (Spain)",
                    period: "09/2015 - 06/2018",
                    description: "Research project to develop low-cost prostheses for animals with amputated limbs, through the" +
                                " use of scanning, modeling and 3D printing. In charge of all the tasks described above."
                },
                {
                    title: "Guest professor",
                    location: "University of León, León (Spain)",
                    period: "09/2016 - 09/2016",
                    description: "Professor at the University of León during the university extension course Unity 3D. In charge" +
                                " of the classes related to Autodesk Maya and 3D modeling."
                }
            ]
        },
        langs: {
            title: "Languages",
            motherTongue: {
                title: "Mother tongue",
                val: "Spanish"
            },
            other: {
                title: "Other languages",
                val: "English (B2 level)<br>Japanese (A1/A2 level)"
            }
        },
        awards: {
            title: "Honours and Awards",
            list: [
                {
                    title: "Best project of the XII Technology Observatory of HP",
                    period: "2017",
                    description: "Winner of the XII Technology Observatory of HP, for the development of a 3D print previewer" +
                                " using HTML5/JS technologies."
                }
            ]
        }
    }
];

var blockSlider = false;
var sliderSpeed, slideHeight, slideLeft;


generateSlides();
generateSlideCounter();

function generateSlides() {
    var codeHTML, slides;

    codeHTML =  "<div class='slide education courses'></div>" +
                "<div class='slide workExp'></div>" +
                "<div class='slide langs awards'></div>";

    $("#slidesContainer").append(codeHTML);


    slides = $("#slidesContainer > .slide");
    $(slides[0]).addClass("current");
    $(slides[1]).addClass("next");
    $(slides[slides.length-1]).addClass("previous");


    for (var i=0; i<curriculum.length; i++) {
        codeHTML =  '<a class="' + curriculum[i].title + 'Content icon-lkdn icon" href="' + curriculum[i].linkedin + '" target="_blank" rel="external"></a>';
        $('#curriculumData > .section.social').append(codeHTML);

        codeHTML =  '<a class="' + curriculum[i].title + 'Content icon-gthb icon" href="' + curriculum[i].github + '" target="_blank" rel="external"></a>';
        $('#curriculumData > .section.social').append(codeHTML);

        codeHTML =  '<a class="' + curriculum[i].title + 'Content icon-gml icon" href="mailto:' + curriculum[i].personal.email + '" rel="external"></a>';
        $('#curriculumData > .section.social').append(codeHTML);

        codeHTML =  '<a class="' + curriculum[i].title + 'Content icon-cv icon" href="' + curriculum[i].driveCv + '" target="_blank" rel="external"></a>';
        $('#curriculumData > .section.social').append(codeHTML);

        codeHTML =  '<div class="' + curriculum[i].title + 'Content">' +
                        '<h2>' + curriculum[i].personal.name + '</h2>' +
                        '<h3>' + curriculum[i].personal.role + '</h3>' +
                        '<p>' + curriculum[i].personal.email + ' | ' + curriculum[i].personal.phone + '</p>' +
                        '<p class="country">' +
                            '<img src="' + curriculum[i].personal.country.image + '" alt="' + curriculum[i].personal.country.name + '">' +
                            curriculum[i].personal.country.name + ' | ' + curriculum[i].personal.birthday +
                        '</p>' +
                    '</div>';

        $('#curriculumData > .section.basic').append(codeHTML);   // end basic or personal info


        codeHTML =  '<div class="' + curriculum[i].title + 'Content">' +
                        '<h2>' + curriculum[i].education.title + '</h2>';

        for (var j=0; j<curriculum[i].education.list.length; j++) {
            codeHTML += '<h3 class="bold nbsp">' + curriculum[i].education.list[j].title + '</h3>' +
                        '<h3 class="size01 nbsp lineBreak">' + curriculum[i].education.list[j].period + '</h3>' +
                        '<h3 class="size02 floatR lineBreak">' + curriculum[i].education.list[j].level + '</h3>' +
                        '<p>' + curriculum[i].education.list[j].location + '</p>';
        }

        codeHTML += '<br></div>';

        $('#slidesContainer > .slide.education').append(codeHTML);   // end education info


        codeHTML =  '<div class="' + curriculum[i].title + 'Content">' +
                        '<h2>' + curriculum[i].courses.title + '</h2>';

        for (var j=0; j<curriculum[i].courses.list.length; j++) {
            codeHTML += '<h3 class="size01 bold nbsp">' + curriculum[i].courses.list[j].title + '</h3>' +
                        '<h3 class="size02 nbsp lineBreak">(' + curriculum[i].courses.list[j].period + ')</h3>' +
                        '<h3 class="size02 floatR lineBreak">' + curriculum[i].courses.list[j].duration + '</h3>' +
                        '<p>' + curriculum[i].courses.list[j].location + '</p>';
        }

        codeHTML += '</div>';

        $('#slidesContainer > .slide.courses').append(codeHTML);    // end courses info


        codeHTML =  '<div class="' + curriculum[i].title + 'Content">' +
                        '<h2>' + curriculum[i].workExp.title + '</h2>';

        for (var j=0; j<curriculum[i].workExp.list.length; j++) {
            codeHTML += '<h3 class="bold nbsp">' + curriculum[i].workExp.list[j].title + '</h3>' +
                        '<h3 class="size01 nbsp lineBreak">' + curriculum[i].workExp.list[j].location + '</h3>' +
                        '<h3 class="size01 floatR lineBreak">' + curriculum[i].workExp.list[j].period + '</h3>' +
                        '<p>' + curriculum[i].workExp.list[j].description + '</p>';
        }

        codeHTML += '</div>';

        $('#slidesContainer > .slide.workExp').append(codeHTML);    // end work experience info


        codeHTML =  '<div class="' + curriculum[i].title + 'Content">' +
                        '<h2>' + curriculum[i].langs.title + '</h2>' +
                        '<h3 class="size01 bold nbsp">' + curriculum[i].langs.motherTongue.title + '</h3>' +
                        '<h3 class="size01">' + curriculum[i].langs.motherTongue.val + '</h3>' +
                        '<br>' +
                        '<h3 class="size01 bold nbsp alignTop">' + curriculum[i].langs.other.title + '</h3>' +
                        '<h3 class="size01">' + curriculum[i].langs.other.val + '</h3>' +
                        '<br><br>' +
                    '</div>';

        $('#slidesContainer > .slide.langs').append(codeHTML);    // end languages info


        codeHTML =  '<div class="' + curriculum[i].title + 'Content">' +
                        '<h2>' + curriculum[i].awards.title + '</h2>';

        for (var j=0; j<curriculum[i].awards.list.length; j++) {
            codeHTML += '<h3 class="size01 bold nbsp">' + curriculum[i].awards.list[j].title + '</h3>' +
                        '<h3 class="size01 floatR lineBreak">' + curriculum[i].awards.list[j].period + '</h3>' +
                        '<p>' + curriculum[i].awards.list[j].description + '</p>';
        }

        codeHTML += '</div>';

        $('#slidesContainer > .slide.awards').append(codeHTML);    // end awards info
    }
}

function generateSlideCounter() {
    var code = "";

    for (var i=0; i<$(".section.slides > div > .slide").length; i++) {
        code += "<button></button>";
    }

    $(code).appendTo(".section.slideCounter");
    $(".section.slideCounter button").first().addClass("current");
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
}


/* Triggers
========================================================================== */

$("#projectCurriculum").click(function(e) {
    e.preventDefault();

    $("#leftover, #curriculumContainer").fadeIn("slow");
    $(document.body).css({overflow: "hidden"});

    organizeSlides();

    $("#curriculumData").scrollTop(0);
});

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

        var pointer;
        var previousDist = 0;
        var nextDist = 0;

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

$(window).on("click touchstart", function(e) {
    if ($("#curriculumContainer").is(":visible") && ($(e.target).is("#leftover") || $(e.target).is(".exitButton"))) {
        $("#leftover, #curriculumContainer").fadeOut("slow");
        $(document.body).css({overflow: "unset"});
    }
});

$(window).on("resize", function() {organizeSlides();});   // reorganize the slides