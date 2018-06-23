$(function() {
    var blockSlider = false;
    var sliderSpeedMult = 2;
    var sliderSpeed, slideHeight, slideLeft;
    var curriculum = [
        {
            title: 'spanish',
            url: 'https://drive.google.com/file/d/1EIjlQ1Zv4wf7v92kyCPZz0wDqiCzqBJ8/view?usp=sharing',
            personal: {
                name: 'José María Rivera Alonso',
                role: 'Desarrollador FullStack',
                email: 'chema22r@gmail.com',
                phone: '(+34) 697946985',
                country: {
                    img: 'img/spain.png',
                    name: 'España'
                },
                birthday: '28/09/1995'
            },
            training: {
                title: 'Formación',
                list: [
                    {
                        title: 'Máster en Ingeniería Informática',
                        period: '(09/2017 - presente)',
                        level: 'EQF-MEC 7',
                        location: 'Universidad de León, León (España)'
                    },
                    {
                        title: 'Grado en Ingeniería Informática',
                        period: '(09/2013 - 06/2017)',
                        level: 'EQF-MEC 6',
                        location: 'Universidad de León, León (España)'
                    }
                ]
            },
            courses: {
                title: 'Cursos',
                list: [
                    {
                        title: 'Emprendimiento Social',
                        period: '2017',
                        duration: '30 horas',
                        location: 'Miríada X'
                    },
                    {
                        title: 'Taller Emprendedor ágil. Lean Startup en el canal online',
                        period: '2017',
                        duration: '20 horas',
                        location: 'Fundación General de la Universidad de León y de la empresa, FGULEM'
                    },
                    {
                        title: 'Curso básico de Marketing Digital',
                        period: '2016',
                        duration: '40 horas',
                        location: 'Programa Actívate, Google'
                    },
                    {
                        title: 'Diseño web con HTML5 y CSS3',
                        period: '2015',
                        duration: '120 horas',
                        location: 'Seis Cocos Technical School'
                    },
                    {
                        title: 'Unity 3D',
                        period: '2015',
                        duration: '40 horas',
                        location: 'Universidad de León'
                    },
                    {
                        title: 'Desarrollo web con Joomla',
                        period: '2015',
                        duration: '',
                        location: 'Cowabi Web Solutions'
                    },
                    {
                        title: 'Programación en C',
                        period: '2014',
                        duration: '40 horas',
                        location: 'Universidad de León'
                    }
                ]
            },
            workExp: {
                title: 'Experiencia Profesional',
                list: [
                    {
                        title: 'Profesor de clases particulares',
                        location: '',
                        period: '09/2015 - presente',
                        description: 'Profesor de clases particulares para alumnos de Ingenierías y enseñanzas técnicas.<br>Materias impartidas: Java, C y desarrollo web.'
                    },
                    {
                        title: 'Modelador 3D',
                        location: 'Universidad de León, León (España)',
                        period: '09/2015 - 06/2018',
                        description: 'Proyecto de investigación para el desarrollo de prótesis de bajo coste para animales con miembros amputados, mediante el uso de escaneado, modelado e impresión 3D. Encargado de todas las tareas descritas anteriormente.'
                    },
                    {
                        title: 'Profesor invitado',
                        location: 'Universidad de León, León (España)',
                        period: '09/2016 - 09/2016',
                        description: 'Profesor en la Universidad de León durante el curso de extensión universitaria Unity 3D. Encargado de parte de las clases relacionadas con Autodesk Maya y modelado 3D.'
                    }
                ]
            },
            langs: {
                title: 'Idiomas',
                motherTongue: {
                    title: 'Lengua materna',
                    val: 'Español'
                },
                other: {
                    title: 'Otros idiomas',
                    val: 'Inglés (nivel B2)<br>Japonés (nivel A2/A1)'
                }
            },
            awards: {
                title: 'Premios y Distinciones',
                list: [
                    {
                        title: 'Mejor proyecto del XII Observatorio Tecnológico de HP',
                        period: '2017',
                        description: 'Ganador del XII Observatorio Tecnológico de HP, por el desarrollo de un previsualizador de impresión 3D utilizando tecnologías HTML5/JS.'
                    }
                ]
            }
        },
        {
            title: 'english',
            url: 'https://drive.google.com/file/d/1UsV83YE_Dq2WZ3Sfj_qCT5_LwcMgWYEs/view?usp=sharing',
            personal: {
                name: 'José María Rivera Alonso',
                role: 'FullStack Developer',
                email: 'chema22r@gmail.com',
                phone: '(+34) 697946985',
                country: {
                    img: 'img/spain.png',
                    name: 'Spain'
                },
                birthday: '28/09/1995'
            },
            training: {
                title: 'Training',
                list: [
                    {
                        title: 'Master’s Degree in Computer Engineering',
                        period: '(09/2017 - present)',
                        level: 'EQF 7',
                        location: 'University of León, León (Spain)'
                    },
                    {
                        title: 'Bachelor’s Degree in Computer Engineering',
                        period: '(09/2013 - 06/2017)',
                        level: 'EQF 6',
                        location: 'University of León, León (Spain)'
                    }
                ]
            },
            courses: {
                title: 'Courses',
                list: [
                    {
                        title: 'Social Entrepreneurship',
                        period: '2017',
                        duration: '30 hours',
                        location: 'Miríada X'
                    },
                    {
                        title: 'Agile Entrepreneur workshop. Lean Startup on the online channel',
                        period: '2017',
                        duration: '20 hours',
                        location: 'General Foundation of the University of León and the company, FGULEM'
                    },
                    {
                        title: 'Basic Digital Marketing course',
                        period: '2016',
                        duration: '40 hours',
                        location: 'Actívate program, Google'
                    },
                    {
                        title: 'Web design with HTML5 and CSS3',
                        period: '2015',
                        duration: '120 hours',
                        location: 'Seis Cocos Technical School'
                    },
                    {
                        title: 'Unity 3D',
                        period: '2015',
                        duration: '40 hours',
                        location: 'University of León'
                    },
                    {
                        title: 'Web development with Joomla',
                        period: '2015',
                        duration: '',
                        location: 'Cowabi Web Solutions'
                    },
                    {
                        title: 'C programming',
                        period: '2014',
                        duration: '40 hours',
                        location: 'University of León'
                    }
                ]
            },
            workExp: {
                title: 'Work Experience',
                list: [
                    {
                        title: 'Private tutor',
                        location: '',
                        period: '09/2015 - present',
                        description: 'Private tutor for students of Engineering and technical education.<br>Subjects taught: Java, C and web development.'
                    },
                    {
                        title: '3D Modeler',
                        location: 'University of León, León (Spain)',
                        period: '09/2015 - 06/2018',
                        description: 'Research project to develop low-cost prostheses for animals with amputated limbs, through the use of scanning, modeling and 3D printing. In charge of all the tasks described above.'
                    },
                    {
                        title: 'Guest professor',
                        location: 'University of León, León (Spain)',
                        period: '09/2016 - 09/2016',
                        description: 'Professor at the University of León during the university extension course Unity 3D. In charge of the classes related to Autodesk Maya and 3D modeling.'
                    }
                ]
            },
            langs: {
                title: 'Languages',
                motherTongue: {
                    title: 'Mother tongue',
                    val: 'Spanish'
                },
                other: {
                    title: 'Other languages',
                    val: 'English (level B2)<br>Japanese (level A2/A1)'
                }
            },
            awards: {
                title: 'Honours and Awards',
                list: [
                    {
                        title: 'Best project of the XII Technology Observatory of HP',
                        period: '2017',
                        description: '​Winner of the XII Technology Observatory of HP, for the development of a 3D print previewer using HTML5/JS technologies.​'
                    }
                ]
            }
        }
    ];
    var social = [
        {
            title: 'linkedin',
            url: 'https://www.linkedin.com/in/chema22r'
        },
        {
            title: 'facebook',
            url: 'https://www.facebook.com/Chema22R'
        },
        {
            title: 'gmail',
            url: 'mailto:' + curriculum[0].personal.email
        }
    ];

    generateSlides();
    generateSlideCounter();

    function generateSlides() {
        var codeHTML, slides;

        codeHTML =  '<div class="slide training courses"></div>' +
                    '<div class="slide workExp"></div>' +
                    '<div class="slide langs awards"></div>';

        $('#slidesContainer').append(codeHTML);


        slides = $('#slidesContainer > .slide');
        $(slides[0]).addClass('current');
        $(slides[1]).addClass('next');
        $(slides[slides.length-1]).addClass('previous');


        for (var i=0; i<social.length; i++) {
            codeHTML =  '<a class="socialLink icon-' + social[i].title + ' icon" href="' + social[i].url + '" target="_blank" rel="external"></a>';
            $('#presentation > .section.social').append(codeHTML);
        }


        for (var i=0; i<curriculum.length; i++) {
            codeHTML =  '<a class="socialLink ' + curriculum[i].title + 'Content icon-cv icon" href="' + curriculum[i].url + '" target="_blank" rel="external"></a>';
            $('#presentation > .section.social').append(codeHTML);

            codeHTML =  '<div class="' + curriculum[i].title + 'Content">' +
                            '<h2>' + curriculum[i].personal.name + '</h2>' +
                            '<h3>' + curriculum[i].personal.role + '</h3>' +
                            '<p>' + curriculum[i].personal.email + ' | ' + curriculum[i].personal.phone + '</p>' +
                            '<p class="country">' +
                                '<img src="' + curriculum[i].personal.country.img + '" alt="' + curriculum[i].personal.country.name + '">' +
                                curriculum[i].personal.country.name + ' | ' + curriculum[i].personal.birthday +
                            '</p>' +
                        '</div>';

            $('#presentation > .section.basic').append(codeHTML);   // end basic or personal info


            codeHTML =  '<div class="' + curriculum[i].title + 'Content">' +
                            '<h2>' + curriculum[i].training.title + '</h2>';

            for (var j=0; j<curriculum[i].training.list.length; j++) {
                codeHTML += '<h3 class="bold nbsp">' + curriculum[i].training.list[j].title + '</h3>' +
                            '<h3 class="size01 nbsp lineBreak">' + curriculum[i].training.list[j].period + '</h3>' +
                            '<h3 class="size02 floatR lineBreak">' + curriculum[i].training.list[j].level + '</h3>' +
                            '<p>' + curriculum[i].training.list[j].location + '</p>';
            }

            codeHTML += '<br></div>';

            $('#slidesContainer > .slide.training').append(codeHTML);   // end training info


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