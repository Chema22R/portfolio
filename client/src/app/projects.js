"use strict";

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


fetch(DATA_URL)
.then(res => res.json())
.then(res => addProjects(JSON.parse(res.files["personal-web-server_projects.json"].content), JSON.parse(res.files["personal-web-server_langs.json"].content)));


function addProjects(projects, langs) {
    let device = (isMobile.any()) ? " mobile" : "";

    for (let i=0, codeHTML; i<projects.length; i++) {
        codeHTML =  "<div class='project" + device + "'>" +
                    "<a" + ((projects[i].id === "curriculum") ? " id='projectCurriculum'" : "") + " href='" + projects[i].url + "'>" +
                    "<figure>" +
                    "<img class='projectFront' src='images/" + projects[i].id + ".png' alt='" + projects[i].title["en-US"] + "'>" +
                    "<figcaption class='" + projects[i].id + " projectBack'>";

        for (let j=0; j<langs.length; j++) {
            codeHTML += "<h2 class='" + langs[j] + "'>" + projects[i].title[langs[j]] + "</h2>";
        }

        if (projects[i].statusCheckUrl) {
            codeHTML += "<hr class='left'>";
            codeHTML += "<span class='" + projects[i].id + " icon-success icon' title='API Status: good'></span>" +
                        "<span class='" + projects[i].id + " icon-loading icon' title='API Status: loading'></span>" +
                        "<span class='" + projects[i].id + " icon-error icon' title='API Status: failing'></span>";
            codeHTML += "<hr class='right'>";
        } else {
            codeHTML += "<hr>";
        }

        for (let j=0; j<langs.length; j++) {
            codeHTML += "<div class='description " + langs[j] + " scroll'><p>" + projects[i].description[langs[j]] + "</p></div>";
        }

        codeHTML += "<p class='ellipsis'>. . .</p></figcaption></figure></a></div>";

        $(codeHTML).appendTo("#proyectsContainer");


        if (projects[i].statusCheckUrl) {
            fetch(projects[i].statusCheckUrl)
            .then(res => {
                document.getElementsByClassName(projects[i].id + " icon-loading")[0].style.display = "none";
                document.getElementsByClassName((res.ok) ? (projects[i].id + " icon-success") : (projects[i].id + " icon-error"))[0].style.display = "unset";
            });
        }
    }

    loadHandlers();
}

function loadHandlers() {
    $("#projectCurriculum").on("click", function(e) {
        e.preventDefault();
        $("#buttonProfile").trigger("click");
    });

    if (!isMobile.any()) {
        $(".project").on("mouseenter", function(e) {
            var currentDescr = $(this).find(".description:visible")[0];

            currentDescr.scrollTop = 0; // to set the scroll to the beginning

            if (currentDescr.offsetHeight + currentDescr.scrollTop >= currentDescr.scrollHeight - 7) {
                $(this).find("p.ellipsis").fadeOut(0);
            } else {
                $(this).find("p.ellipsis").fadeIn(0);
            }
        });

        $(".project figure .projectBack .description").on("scroll", function(e) {
            if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight - 7) {
                $(this).siblings(".ellipsis").fadeOut(0);
            } else {
                $(this).siblings(".ellipsis").fadeIn(0);
            }
        });
    }
}