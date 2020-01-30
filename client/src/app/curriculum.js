'use strict';

generateSlides({
    "linkedin": "https://www.linkedin.com/in/chema22r",
    "github": "https://github.com/chema22r",
    "codepen": "https://codepen.io/chema22r",
    "driveCv": "https://drive.google.com/open?id=1RUk3L3vTVGkCuFAHPWSnhbKCKuqJtD2e",
    "personal": {
        "name": "José María Rivera Alonso",
        "role": "Full Stack Developer",
        "email": "chema22r@gmail.com",
        "phone": "+1 (236) 512-2202",
        "country": "Vancouver BC, Canada",
        "birthday": "28/09/1995"
    },
    "workExp": {
        "title": "Work Experience",
        "list": [
            {
                "title": "Software Engineer",
                "location": "HP SCDS, León (Spain)",
                "period": "Jul 2018 - Oct 2019",
                "description": "Full Stack role in an agile environment (DevOps), in charge of improving and continue the development of the Smart Tracker project.<br>Main technologies touched: AngularJS, Node.js, MongoDB."
            },
            {
                "title": "Private Tutor",
                "location": "",
                "period": "Sep 2015 - Oct 2019",
                "description": "Private tutor for students of engineering and technical education.<br>Subjects taught: Java, C and web development."
            },
            {
                "title": "3D Modeler",
                "location": "University of León, León (Spain)",
                "period": "Sep 2015 - Jun 2018",
                "description": "Research project to develop low-cost prostheses for animals with amputated limbs, through the use of scanning, modelling and 3D printing. In charge of all the tasks described above."
            },
            {
                "title": "Guest Professor",
                "location": "University of León, León (Spain)",
                "period": "Sep 2016",
                "description": "Professor at the University of León during the university extension course Unity 3D. In charge of the classes related to Autodesk Maya and 3D modelling."
            }
        ]
    },
    "education": {
        "title": "Education",
        "list": [
            {
                "title": "Master’s Degree in Computer Engineering",
                "period": "(2017 - 2019)",
                "level": "EQF 7",
                "location": "University of León, León (Spain)",
                "other": "Activities and groups: Delegation team, as delegate of first and second course"
            },
            {
                "title": "Bachelor’s Degree in Computer Engineering",
                "period": "(2013 - 2017)",
                "level": "EQF 6",
                "location": "University of León, León (Spain)",
                "other": "Activities and groups: Delegation team, as delegate of first course"
            }
        ]
    },
    "courses": {
        "title": "Courses",
        "list": [
            {
                "title": "Social Entrepreneurship",
                "period": "2017",
                "duration": "30 hours",
                "location": "Miríada X"
            },
            {
                "title": "Agile Entrepreneur workshop. Lean Startup on the online channel",
                "period": "2017",
                "duration": "20 hours",
                "location": "General Foundation of the University of León and the company, FGULEM"
            },
            {
                "title": "Basic Digital Marketing course",
                "period": "2016",
                "duration": "40 hours",
                "location": "Actívate program, Google"
            },
            {
                "title": "Web design with HTML5 and CSS3",
                "period": "2015",
                "duration": "120 hours",
                "location": "Seis Cocos Technical School"
            },
            {
                "title": "Unity 3D",
                "period": "2015",
                "duration": "40 hours",
                "location": "University of Leon"
            },
            {
                "title": "Web development with Joomla",
                "period": "2015",
                "duration": "",
                "location": "Cowabi Web Solutions"
            },
            {
                "title": "C programming",
                "period": "2014",
                "duration": "40 hours",
                "location": "University of Leon"
            }
        ]
    },
    "langs": {
        "title": "Languages",
        "motherTongue": {
            "title": "Mother tongue",
            "val": "Spanish"
        },
        "other": {
            "title": "Other languages",
            "val": "English (C1 level)<br>Japanese (A1/A2 level)"
        }
    },
    "awards": {
        "title": "Honours and Awards",
        "list": [
            {
                "title": "Best project of the XII Technology Observatory of HP",
                "period": "2017",
                "description": "Winner of the XII Technology Observatory of HP, for the development of a 3D print previewer using HTML5/JS technologies."
            }
        ]
    }
});

function generateSlides(curriculum) {
    let codeHTML;

    codeHTML =  '<div class="content">' +
                    '<h2>' + curriculum.personal.name + '</h2>' +
                    '<h3>' + curriculum.personal.role + '</h3>' +
                    '<p>' + curriculum.personal.email + ' | ' + curriculum.personal.phone + '</p>' +
                    '<p class="country">' + curriculum.personal.country + ' | ' + curriculum.personal.birthday + '</p>' +
                '</div>';

    $('#curriculumData > .section.basic').append(codeHTML);   // end basic or personal info


    codeHTML =  '<div class="content">' +
                    '<h2>' + curriculum.education.title + '</h2>';

    for (let j=0; j<curriculum.education.list.length; j++) {
        codeHTML += '<h3 class="bold nbsp">' + curriculum.education.list[j].title + '</h3>' +
                    '<h3 class="size01 nbsp lineBreak">' + curriculum.education.list[j].period + '</h3>' +
                    '<h3 class="size02 floatR lineBreak">' + curriculum.education.list[j].level + '</h3>' +
                    '<p>' + curriculum.education.list[j].location + '</p>' +
                    '<p class="padding-left">' + curriculum.education.list[j].other + '</p>';
    }

    codeHTML += '</div>';

    $('#dataContainer > .slide.education').append(codeHTML);   // end education info


    codeHTML =  '<div class="content">' +
                    '<h2>' + curriculum.workExp.title + '</h2>';

    for (let j=0; j<curriculum.workExp.list.length; j++) {
        codeHTML += '<h3 class="bold nbsp">' + curriculum.workExp.list[j].title + '</h3>' +
                    '<h3 class="size01 nbsp lineBreak">' + curriculum.workExp.list[j].location + '</h3>' +
                    '<h3 class="size01 floatR lineBreak">' + curriculum.workExp.list[j].period + '</h3>' +
                    '<p class="padding-left">' + curriculum.workExp.list[j].description + '</p>';
    }

    codeHTML += '</div>';

    $('#dataContainer > .slide.workExp').append(codeHTML);    // end work experience info


    codeHTML =  '<div class="content">' +
                    '<h2>' + curriculum.langs.title + '</h2>' +
                    '<h3 class="size01 bold nbsp">' + curriculum.langs.motherTongue.title + '</h3>' +
                    '<h3 class="size01">' + curriculum.langs.motherTongue.val + '</h3>' +
                    '<br>' +
                    '<h3 class="size01 bold nbsp alignTop">' + curriculum.langs.other.title + '</h3>' +
                    '<h3 class="size01">' + curriculum.langs.other.val + '</h3>' +
                    '<br><br>' +
                '</div>';

    $('#dataContainer > .slide.langs').append(codeHTML);    // end languages info


    codeHTML =  '<div class="content">' +
                    '<h2>' + curriculum.awards.title + '</h2>';

    for (let j=0; j<curriculum.awards.list.length; j++) {
        codeHTML += '<h3 class="size01 bold nbsp">' + curriculum.awards.list[j].title + '</h3>' +
                    '<h3 class="size01 floatR lineBreak">' + curriculum.awards.list[j].period + '</h3>' +
                    '<p>' + curriculum.awards.list[j].description + '</p>';
    }

    codeHTML += '</div>';

    $('#dataContainer > .slide.awards').append(codeHTML);    // end awards info


    codeHTML =  '<a class="content icon-lkdn icon" href="' + curriculum.linkedin + '" target="_blank" rel="external"></a>' +
                '<a class="content icon-gthb icon" href="' + curriculum.github + '" target="_blank" rel="external"></a>' +
                '<a class="content icon-cdpn icon" href="' + curriculum.codepen + '" target="_blank" rel="external"></a>' +
                '<a class="content icon-gml icon" href="mailto:' + curriculum.personal.email + '" rel="external"></a>' +
                '<a class="content icon-cv icon" href="' + curriculum.driveCv + '" target="_blank" rel="external"></a>';

    $('#curriculumData > .section.social').append(codeHTML);
}


/* Triggers
========================================================================== */

$("#curriculumButton").click(function(e) {
    e.preventDefault();

    $("#leftover, #curriculumContainer").fadeIn("slow");
    $(document.body).css({overflow: "hidden"});
    $("#curriculumData").scrollTop(0);
});

$(window).on("click touchstart", function(e) {
    if ($("#curriculumContainer").is(":visible") && ($(e.target).is("#leftover") || $(e.target).is(".exitButton"))) {
        $("#leftover, #curriculumContainer").fadeOut("slow");
        $(document.body).css({overflow: "unset"});
    }
});
