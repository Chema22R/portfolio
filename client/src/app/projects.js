"use strict";

addProjects([
    {
        "id": "curriculum",
        "title": "About me",
        "description": "Welcome to my web page!<br>My name is Jose Maria, I am a web developer and this is the main page of my server.<br>From here you can access some of my personal projects, as well as view my resume, simply by clicking on the cards.<br>I hope you enjoy!",
        "url": "",
        "statusCheckUrl": null,
        "github": null
    },
    {
        "id": "printersdiscovery",
        "title": "Printers Discovery",
        "description": "Application with the aim of analyze the local network in search of prototypes of printers, capturing and storing their information.<br>Through the interface, users can modify the information of the detected printers and reserve them to work freely for a period of time.",
        "url": "https://printers-discovery.chema22r.com",
        "statusCheckUrl": "https://printers-discovery.onrender.com/health",
        "github": "https://github.com/Chema22R/printers-discovery"
    },
    {
        "id": "3dpreviewer",
        "title": "3D Previewer",
        "description": "3D objects previewer that allows users to interact and carry out certain basic operations on loaded objects, enabling their analysis in detail.<br>In addition, the application stores the extracted and processed geometry of the objects, so that they can be easily loaded again.",
        "url": "https://3d-previewer.chema22r.com",
        "statusCheckUrl": "https://threed-previewer.onrender.com/health",
        "github": "https://github.com/Chema22R/3d-previewer"
    },
    {
        "id": "memoriizu",
        "title": "Memoriizu",
        "description": "Application focused on language learning, in which users add the content they want to study, in addition to the period in which they want the content to be distributed.<br>A session is generated daily with the content that users should complete for that day, emphasizing the failures committed in previous sessions.",
        "url": "https://memoriizu.chema22r.com",
        "statusCheckUrl": "https://memoriizu.onrender.com/health",
        "github": "https://github.com/Chema22R/memoriizu"
    }
]);

function addProjects(projects) {
    let device = (window.isMobile.any()) ? " mobile" : "";

    for (let i=0, codeHTML; i<projects.length; i++) {
        codeHTML =  "<div id='project-" + projects[i].id + "' class='project" + device + "'>" +
                    (projects[i].id === "curriculum" ? "<a id='helpBubble' href='" + projects[i].url + "'><img src='images/me.png'><p>Click on this card to<br>know more about me!</p></a>" : "") +
                    "<a href='" + projects[i].url + "'>" +
                    "<figure>" +
                    "<img class='projectFront' src='images/" + projects[i].id + ".png' alt='" + projects[i].title + "'>" +
                    "<figcaption class='projectBack'>";

        codeHTML += "<h2>" + projects[i].title + "</h2>";

        if (projects[i].statusCheckUrl) {
            codeHTML += "<hr class='left'>" +
                        "<span class='" + projects[i].id + " icon-success icon' title='API Status: Good'></span>" +
                        "<span class='" + projects[i].id + " icon-loading icon' title='API Status: Pending'></span>" +
                        "<span class='" + projects[i].id + " icon-error icon' title='API Status: Failing'></span>" +
                        "<hr class='right'>";
        } else {
            codeHTML += "<hr>";
        }

        codeHTML += "<div class='description scroll'><p>" + projects[i].description + "</p></div>";
        codeHTML += "<p class='ellipsis'>. . .</p></figcaption></figure></a></div>";

        $(codeHTML).appendTo("#projectsContainer");


        if (projects[i].github) {
            $("<a class='icon-gthb icon' href='" + projects[i].github + "' target='_blank' rel='external'></a>").appendTo("#project-" + projects[i].id + " figcaption");
        }


        if (projects[i].statusCheckUrl) {
            fetch(projects[i].statusCheckUrl).then((res) => {
                document.getElementsByClassName(projects[i].id + " icon-loading")[0].style.display = "none";
                document.getElementsByClassName((res.ok) ? (projects[i].id + " icon-success") : (projects[i].id + " icon-error"))[0].style.display = "unset";
            }).catch((reason) => {
                setTimeout(() => {
                    document.getElementsByClassName(projects[i].id + " icon-loading")[0].style.display = "none";
                    document.getElementsByClassName(projects[i].id + " icon-error")[0].style.display = "unset";
                }, 2000);
            });
        }
    }

    loadHandlers();
}

function loadHandlers() {
    $("#project-curriculum > a").on("click", function(e) {
        e.preventDefault();

        $("#project-curriculum").css({transform: "perspective(600px) rotateY(0deg)"});

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
