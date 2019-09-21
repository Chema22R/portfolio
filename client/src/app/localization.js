"use strict";

window.information.getLanguages(addLanguages);

function addLanguages(langs) {
    let codeHTML = "";

    for (let i=0; i<langs.length; i++) {
        codeHTML += "<li id='" + langs[i] + "' onclick='window.langsListClickHandler(this, " + JSON.stringify(langs) + ")'>" +
                        window.langsNames[langs[i].substring(0, langs[i].indexOf("-"))] +
                    "</li>";
    }
    $(codeHTML).appendTo("#languagesList");

    setTimeout(() => setPreferredLanguage(langs), 10);
}

function setPreferredLanguage(langs) {
    let style = document.createElement("style");
    style.innerHTML = "";
    for (let i=0; i<langs.length; i++) {
        style.innerHTML += "." + langs[i] + " {display: none;}";
    }
    document.head.appendChild(style);


    for (let i=0; i<langs.length; i++) {
        if (langs[i] === window.preferredLanguage || langs[i].substring(0, langs[i].indexOf("-")) === window.preferredLanguage) {
            $("#" + langs[i]).trigger("click");
            break;
        }
    }
}

window.langsListClickHandler = (currentLang, langs) => {
    if (window.blockSlider) {return;}
    window.blockSlider = true;

    $(currentLang).parent().prepend(currentLang); // move the option selected to the top of the list
    document.getElementById("languagesButton").title = window.langsNames[currentLang.id.substring(0, currentLang.id.indexOf("-"))];

    for (let i=0; i<langs.length; i++) {
        if (langs[i] !== currentLang.id) {
            $("." + langs[i]).fadeOut(0);
        }
    }

    $("." + currentLang.id).fadeIn("slow");

    if (!window.isMobile.any()) {
        $(".section.slides").animate({  // resize the current slide height
            height: $(".section.slides .slide.current").height() + 40
        }, "slow", () => window.blockSlider = false);
    } else {
        window.blockSlider = false;
    }
};