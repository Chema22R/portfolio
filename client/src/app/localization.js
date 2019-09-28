"use strict";

const attemptsSetLang = 20;

window.information.getLanguages(addLanguages);

function addLanguages(langs) {
    let codeHTML = "";

    for (let i=0; i<langs.length; i++) {
        codeHTML += "<li id='" + langs[i] + "' onclick='window.langsListClickHandler(this, " + JSON.stringify(langs) + ")'>" +
                        window.langsNames[langs[i].substring(0, langs[i].indexOf("-"))] +
                    "</li>";
    }
    $(codeHTML).appendTo("#languagesList");

    setPreferredLanguage(langs, attemptsSetLang);
}

function setPreferredLanguage(langs, attempts) {
    if (window.curriculumCodeGen && window.projectsCodeGen) {
        let style = document.createElement("style");
        style.innerHTML = "";
        for (let i=0; i<langs.length; i++) {
            style.innerHTML += "." + langs[i] + " {display: none;}";
        }
        document.head.appendChild(style);   // this adds the css rules to set display to none for each language


        for (let i=0; i<langs.length; i++) {
            if (langs[i] === window.preferredLanguage || langs[i].substring(0, langs[i].indexOf("-")) === window.preferredLanguage) {
                $("#" + langs[i]).trigger("click");
                break;
            } else if (i === langs.length - 1) {
                $("#" + langs[0]).trigger("click");
                console.warn(`Preferred language could not be setted. Browser language (${window.preferredLanguage}) does not match with ` +
                `any of the given ones (${langs}). ${langs[0]} was setted as default value.`);
            }
        }
    } else if (attempts > 0) {
        setTimeout(() => setPreferredLanguage(langs, --attempts), 20 * (attemptsSetLang - attempts));
    } else {
        if (langs[0]) {
            $("#" + langs[0]).trigger("click")
            console.warn(`Preferred language could not be setted. Attempted ${attemptsSetLang} times. ${langs[0]} was setted as default value.`);
        } else {
            console.warn(`Preferred language could not be setted. Attempted ${attemptsSetLang} times. No language could be setted as default value.`);
        }
    }
}

window.langsListClickHandler = (currentLang, langs) => {
    $(currentLang).parent().prepend(currentLang); // move the option selected to the top of the list
    document.getElementById("languagesButton").title = window.langsNames[currentLang.id.substring(0, currentLang.id.indexOf("-"))];

    for (let i=0; i<langs.length; i++) {
        if (langs[i] !== currentLang.id) {
            $("." + langs[i]).fadeOut(0);
        }
    }

    $("." + currentLang.id).fadeIn("slow");
};