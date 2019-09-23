"use strict";

window.information.getLanguagesProjects(addProjects);

function addProjects(langs, projects) {
    let device = (window.isMobile.any()) ? " mobile" : "";

    for (let i=0, codeHTML; i<projects.length; i++) {
        codeHTML =  "<div id='project-" + projects[i].id + "' class='project" + device + "'>" +
                    "<a href='" + projects[i].url + "'>" +
                    "<figure>" +
                    "<img class='projectFront' src='images/" + projects[i].id + ".png' alt='" + projects[i].title["en-US"] + "'>" +
                    "<figcaption class='projectBack'>";

        for (let j=0; j<langs.length; j++) {
            codeHTML += "<h2 class='" + langs[j] + "'>" + projects[i].title[langs[j]] + "</h2>";
        }

        if (projects[i].statusCheckUrl) {
            codeHTML += "<hr class='left'>" +
                        "<span class='" + projects[i].id + " icon-success icon' title='API Status: Good'></span>" +
                        "<span class='" + projects[i].id + " icon-loading icon' title='API Status: Pending'></span>" +
                        "<span class='" + projects[i].id + " icon-error icon' title='API Status: Failing'></span>" +
                        "<hr class='right'>";
        } else {
            codeHTML += "<hr>";
        }

        for (let j=0; j<langs.length; j++) {
            codeHTML += "<div class='description " + langs[j] + " scroll'><p>" + projects[i].description[langs[j]] + "</p></div>";
        }

        codeHTML += "<p class='ellipsis'>. . .</p></figcaption></figure></a></div>";

        $(codeHTML).appendTo("#projectsContainer");


        if (projects[i].github) {
            $("<a class='icon-gthb icon' href='" + projects[i].github + "' target='_blank' rel='external'></a>").appendTo("#project-" + projects[i].id + " figcaption");
        }


        if (projects[i].statusCheckUrl) {
            fetch(projects[i].statusCheckUrl)
            .then(res => {
                document.getElementsByClassName(projects[i].id + " icon-loading")[0].style.display = "none";
                document.getElementsByClassName((res.ok) ? (projects[i].id + " icon-success") : (projects[i].id + " icon-error"))[0].style.display = "unset";
            })
            .catch(reason => {
                document.getElementsByClassName(projects[i].id + " icon-loading")[0].style.display = "none";
                document.getElementsByClassName(projects[i].id + " icon-error")[0].style.display = "unset";
            });
        }
    }

    loadHandlers();
}

function loadHandlers() {
    $("#project-curriculum > a").on("click", function(e) {
        e.preventDefault();

        $("#leftover, #curriculumContainer").fadeIn("slow");
        $(document.body).css({overflow: "hidden"});
        $("#curriculumData").scrollTop(0);
    });

    if (!window.isMobile.any()) {
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