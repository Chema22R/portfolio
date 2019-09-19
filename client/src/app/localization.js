"use strict";

window.information.getLanguages(addLanguages);

function addLanguages(langs) {
    let codeHTML = "";

    for (let i=0; i<langs.length; i++){
        codeHTML += "<li id='" + langs[i] + "'>" +
                        window.langsNames[langs[i].substring(0, langs[i].indexOf("-"))] +
                    "</li>";
    }
    $(codeHTML).appendTo("#languagesList");

    loadHandlers(langs);
    setTimeout(() => setPreferredLanguage(langs), 10);
}

function setPreferredLanguage(langs) {
    let style = document.createElement("style");
    style.innerHTML = "";
    for (let i=0; i<langs.length; i++) {
        style.innerHTML += "." + langs[i] + " {display: none;}";
    }
    document.head.appendChild(style);


    let preferredLang = navigator.language || navigator.userLanguage ||
                        navigator.browserLanguage || navigator.systemLanguage;

    for (let i=0; i<langs.length; i++) {
        if (langs[i] === preferredLang) {
            $("#" + preferredLang).trigger("click");
            break;
        }
    }
}

function loadHandlers(langs) {
    $("#languagesList li").on("click", (e) => {
        e.preventDefault();

        if (window.blockSlider) {return;}
        window.blockSlider = true;
        let currentLang = (e.target.id) ? e.target.id : e.target.parentElement.id;

        $(e.target).parent().prepend(e.target); // move the option selected to the top of the list
        document.getElementById("languagesButton").title = window.langsNames[currentLang.substring(0, currentLang.indexOf("-"))];

        for (let i=0; i<langs.length; i++) {
            if (langs[i] !== currentLang) {
                $("." + langs[i]).fadeOut(0);
            }
        }

        $("." + currentLang).fadeIn("slow");

        $(".section.slides").animate({  // resize the current slide height
            height: $(".section.slides .slide.current").height() + 40
        }, "slow", function() {
            window.blockSlider = false;
        });
    });
}