'use strict';

generateSlides({
    "linkedin": "https://www.linkedin.com/in/chema22r",
    "github": "https://github.com/chema22r",
    "codepen": "https://codepen.io/chema22r",
    "driveCv": "https://drive.google.com/open?id=1RUk3L3vTVGkCuFAHPWSnhbKCKuqJtD2e",
    "personal": {
        "name": "Jose Maria Rivera Alonso",
        "role": "Full Stack Developer",
        "email": "chema22r@gmail.com",
        "phone": "+34 697 946 985",
        "country": "A Coruña, Spain"
    },
    "workExp": {
        "title": "Work Experience",
        "list": [
            {
                "title": "Full Stack Developer",
                "location": "WorkSafeBC, Vancouver (Canada)",
                "period": "Jan 2020 - Aug 2020",
                "description": "Design and development of a web system for workplace accident reporting and support, both for employees and employers.<br>Main technologies: React, Node.js and MongoDB."
            },
            {
                "title": "Software Engineer",
                "location": "HP SCDS, León (Spain)",
                "period": "Jul 2018 - Oct 2019",
                "description": "Full Stack role in an agile environment (DevOps), in charge of improving and continue with the development of the Smart Tracker project.<br>Main technologies: AngularJS, Node.js and MongoDB."
            },
            {
                "title": "Private Tutor",
                "location": "",
                "period": "Sep 2015 - Oct 2019",
                "description": "Private tutor for students of engineering and technical education.<br>Subjects taught: Java, C and web development."
            },
            {
                "title": "3D Modeller",
                "location": "University of León, León (Spain)",
                "period": "Sep 2015 - Jun 2018",
                "description": "Research project with the aim of developing low-cost prostheses for animals with amputated limbs, through the use of scanning, modelling and 3D printing."
            },
            {
                "title": "Guest Professor",
                "location": "University of León, León (Spain)",
                "period": "Sep 2016",
                "description": "Professor at the University of León during the extension course Unity 3D. In charge of part of the lectures related to Autodesk Maya and 3D modelling."
            }
        ]
    },
    "education": {
        "title": "Education",
        "list": [
            {
                "title": "Master’s Degree in Computer Engineering",
                "period": "2017 - 2019",
                "level": "",
                "location": "University of León, León (Spain)",
                "other": "Activities and Societies: Delegation team​, as delegate of first and second course​.​"
            },
            {
                "title": "Bachelor’s Degree in Computer Engineering",
                "period": "2013 - 2017",
                "level": "",
                "location": "University of León, León (Spain)",
                "other": "Activities and Societies: Delegation team​, as delegate of first course​.​"
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
            "val": "English (C1)<br>Japanese (A1/A2)"
        }
    },
    "awards": {
        "title": "Honours and Awards",
        "list": [
            {
                "title": "Best project of the XII Technology Observatory of HP",
                "period": "Sep 2017",
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
                    '<p>' + curriculum.personal.email + '&nbsp;&nbsp;|&nbsp;&nbsp;' + curriculum.personal.phone + '</p>' +
                    '<p class="country">' + curriculum.personal.country + '</p>' +
                '</div>' +
                '<a class="content icon-lkdn icon" href="' + curriculum.linkedin + '" target="_blank" rel="external"></a>' +
                '<a class="content icon-gthb icon" href="' + curriculum.github + '" target="_blank" rel="external"></a>' +
                '<a class="content icon-cdpn icon" href="' + curriculum.codepen + '" target="_blank" rel="external"></a>' +
                '<a class="content icon-gml icon" href="mailto:' + curriculum.personal.email + '" rel="external"></a>' +
                '<a class="content icon-cv icon" href="' + curriculum.driveCv + '" target="_blank" rel="external"></a>';

    $('#curriculumData > .section.basic').append(codeHTML);   // end basic or personal info


    codeHTML =  '<div class="content">' +
                    '<h2>' + curriculum.education.title + '</h2>';

    for (let j=0; j<curriculum.education.list.length; j++) {
        codeHTML += '<h3 class="bold nbsp">' + curriculum.education.list[j].title + '</h3>' +
                    '<h3 class="size01 nbsp lineBreak">' + curriculum.education.list[j].level + '</h3>' +
                    '<h3 class="size01 floatR lineBreak">' + curriculum.education.list[j].period + '</h3>' +
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
                    '<br>' +
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

$(window).on("click touchstart", function(e) {
    if ($("#curriculumContainer").is(":visible") && ($(e.target).is("#leftover") || $(e.target).is(".exitButton"))) {
        $("#leftover, #curriculumContainer").fadeOut("slow");
        $(document.body).css({overflow: "unset"});
    }
});
