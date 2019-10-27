'use strict';

window.information.getLanguagesCurriculum(generateSlides);

function generateSlides(langs, curriculum) {
    let codeHTML;

    for (let i=0; i<langs.length; i++) {
        codeHTML =  '<div class="' + langs[i] + ' content">' +
                        '<h2>' + curriculum.personal.name[langs[i]] + '</h2>' +
                        '<h3>' + curriculum.personal.role[langs[i]] + '</h3>' +
                        '<p>' + curriculum.personal.email + ' | ' + curriculum.personal.phone[langs[i]] + '</p>' +
                        '<p class="country">' + curriculum.personal.country[langs[i]] + ' | ' + curriculum.personal.birthday[langs[i]] + '</p>' +
                    '</div>';

        $('#curriculumData > .section.basic').append(codeHTML);   // end basic or personal info


        codeHTML =  '<div class="' + langs[i] + ' content">' +
                        '<h2>' + curriculum.education.title[langs[i]] + '</h2>';

        for (let j=0; j<curriculum.education.list.length; j++) {
            codeHTML += '<h3 class="bold nbsp">' + curriculum.education.list[j].title[langs[i]] + '</h3>' +
                        '<h3 class="size01 nbsp lineBreak">' + curriculum.education.list[j].period[langs[i]] + '</h3>' +
                        '<h3 class="size02 floatR lineBreak">' + curriculum.education.list[j].level[langs[i]] + '</h3>' +
                        '<p>' + curriculum.education.list[j].location[langs[i]] + '</p>' +
                        '<p class="padding-left">' + curriculum.education.list[j].other[langs[i]] + '</p>';
        }

        codeHTML += '</div>';

        $('#dataContainer > .slide.education').append(codeHTML);   // end education info


        /*codeHTML =  '<div class="' + langs[i] + ' content">' +
                        '<h2>' + curriculum.courses.title[langs[i]] + '</h2>';

        for (let j=0; j<curriculum.courses.list.length; j++) {
            codeHTML += '<h3 class="size01 bold nbsp">' + curriculum.courses.list[j].title[langs[i]] + '</h3>' +
                        '<h3 class="size02 nbsp lineBreak">(' + curriculum.courses.list[j].period + ')</h3>' +
                        '<h3 class="size02 floatR lineBreak">' + curriculum.courses.list[j].duration[langs[i]] + '</h3>' +
                        '<p>' + curriculum.courses.list[j].location[langs[i]] + '</p>';
        }

        codeHTML += '</div>';

        $('#dataContainer > .slide.courses').append(codeHTML);    // end courses info*/


        codeHTML =  '<div class="' + langs[i] + ' content">' +
                        '<h2>' + curriculum.workExp.title[langs[i]] + '</h2>';

        for (let j=0; j<curriculum.workExp.list.length; j++) {
            codeHTML += '<h3 class="bold nbsp">' + curriculum.workExp.list[j].title[langs[i]] + '</h3>' +
                        '<h3 class="size01 nbsp lineBreak">' + curriculum.workExp.list[j].location[langs[i]] + '</h3>' +
                        '<h3 class="size01 floatR lineBreak">' + curriculum.workExp.list[j].period[langs[i]] + '</h3>' +
                        '<p class="padding-left">' + curriculum.workExp.list[j].description[langs[i]] + '</p>';
        }

        codeHTML += '</div>';

        $('#dataContainer > .slide.workExp').append(codeHTML);    // end work experience info


        codeHTML =  '<div class="' + langs[i] + ' content">' +
                        '<h2>' + curriculum.langs.title[langs[i]] + '</h2>' +
                        '<h3 class="size01 bold nbsp">' + curriculum.langs.motherTongue.title[langs[i]] + '</h3>' +
                        '<h3 class="size01">' + curriculum.langs.motherTongue.val[langs[i]] + '</h3>' +
                        '<br>' +
                        '<h3 class="size01 bold nbsp alignTop">' + curriculum.langs.other.title[langs[i]] + '</h3>' +
                        '<h3 class="size01">' + curriculum.langs.other.val[langs[i]] + '</h3>' +
                        '<br><br>' +
                    '</div>';

        $('#dataContainer > .slide.langs').append(codeHTML);    // end languages info


        codeHTML =  '<div class="' + langs[i] + ' content">' +
                        '<h2>' + curriculum.awards.title[langs[i]] + '</h2>';

        for (let j=0; j<curriculum.awards.list.length; j++) {
            codeHTML += '<h3 class="size01 bold nbsp">' + curriculum.awards.list[j].title[langs[i]] + '</h3>' +
                        '<h3 class="size01 floatR lineBreak">' + curriculum.awards.list[j].period + '</h3>' +
                        '<p>' + curriculum.awards.list[j].description[langs[i]] + '</p>';
        }

        codeHTML += '</div>';

        $('#dataContainer > .slide.awards').append(codeHTML);    // end awards info
    }


    codeHTML =  '<a class="content icon-lkdn icon" href="' + curriculum.linkedin + '" target="_blank" rel="external"></a>' +
                '<a class="content icon-gthb icon" href="' + curriculum.github + '" target="_blank" rel="external"></a>' +
                '<a class="content icon-cdpn icon" href="' + curriculum.codepen + '" target="_blank" rel="external"></a>' +
                '<a class="content icon-gml icon" href="mailto:' + curriculum.personal.email + '" rel="external"></a>' +
                '<a class="content icon-cv icon" href="' + curriculum.driveCv + '" target="_blank" rel="external"></a>';

    $('#curriculumData > .section.social').append(codeHTML);

    window.curriculumCodeGen = true;
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
