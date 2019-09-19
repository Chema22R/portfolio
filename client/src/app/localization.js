"use strict";

window.information.getLanguages(addLanguages);

function addLanguages(langs) {
    let codeHTML = "";

    for (let i=0; i<langs.length; i++) {
        codeHTML += "<li id='" + langs[i] + "'>" +
                        window.langsNames[langs[i].substring(0, langs[i].indexOf("-"))] +
                    "</li>";
    }
    $(codeHTML).appendTo("#languagesList");

    document.getElementById("languagesButton").addEventListener("click", langsButtonClickHandler, false);
    for (let i=0; i<langs.length; i++) {
        document.getElementById(langs[i]).addEventListener("click", event => langsListClickHandler(event, langs[i], langs), false);
    }

    setTimeout(() => setPreferredLanguage(langs), 10);
}

function langsButtonClickHandler() {
    if (document.getElementById("languagesButton").style.marginRight === "55px") {
        document.getElementById("languagesButton").style.marginRight = "0";
        document.getElementById("languagesList").style.right = "-110px";
    } else {
        document.getElementById("languagesButton").style.marginRight = "55px";
        document.getElementById("languagesList").style.right = "-20px";
    }
}

function langsListClickHandler(event, currentLang, langs) {
    if (window.blockSlider) {return;}
    window.blockSlider = true;

    $(event.target).parent().prepend(event.target); // move the option selected to the top of the list
    document.getElementById("languagesButton").title = window.langsNames[currentLang.substring(0, currentLang.indexOf("-"))];

    for (let i=0; i<langs.length; i++) {
        if (langs[i] !== currentLang) {
            $("." + langs[i]).fadeOut(0);
        }
    }

    $("." + currentLang).fadeIn("slow");

    $(".section.slides").animate({  // resize the current slide height
        height: $(".section.slides .slide.current").height() + 40
    }, "slow", () => window.blockSlider = false);
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