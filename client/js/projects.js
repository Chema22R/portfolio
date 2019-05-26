"use strict";

const projects = [
    {
        "name": "José María Rivera Alonso",
        "url": "curriculum",
        "descriptionSpa": "¡Bienvenid@ a mi página web!<br>Mi nombre es José María Rivera Alonso y esta es la página" +
                        " principal de mi servidor.<br>Desde aquí puede acceder a mis proyectos personales, además" +
                        " de visualizar mi curriculum.<br>¡Espero que disfrute!",
        "descriptionEng": "Welcome to my web page!<br>My name is José María Rivera Alonso and this is the main page of" +
                        " my server.<br>From here you can access my personal projects, as well as view my curriculum." +
                        "<br>I hope you enjoy!"
    },
    {
        "name": "Printers Discovery",
        "url": "printersDiscovery",
        "descriptionSpa": "Aplicación con el objetivo de analizar la red local en búsqueda de prototipos de impresoras," +
                        " capturando y almacenando su información.<br>A través de la interfaz, los usuarios" +
                        " pueden modificar la información de las impresoras detectadas y reservarlas para poder" +
                        " utilizarlas y trabajar libremente con ellas durante un periodo de tiempo.",
        "descriptionEng": "Application with the aim of analyzing the local network in search of prototypes of printers," +
                        " capturing and storing their information.<br>Through the interface, users can modify the" +
                        " information of the detected printers and reserve them to be able to use and work freely" +
                        " with them for a period of time."
    },
    {
        "name": "Memoriizu",
        "url": "memoriizu",
        "descriptionSpa": "Aplicación enfocada en el aprendizaje de idiomas, en la que los usuarios añaden el contenido" +
                        " que desean estudiar, además del periodo en el que desean que se reparta dicho contenido.<br>A" +
                        " diario se genera una sesión con el contenido que los usuarios deben completar para ese día," +
                        " haciendo hincapié en los fallos cometidos en sesiones anteriores.",
        "descriptionEng": "Application focused on language learning, in which users add the content they want to study," +
                        " in addition to the period in which they want the content to be distributed.<br>A session is" +
                        " generated daily with the content that users should complete for that day, emphasizing the failures" +
                        " comitted in previous sessions."
    },
    {
        "name": "3D Previewer",
        "url": "3dpreviewer",
        "descriptionSpa": "Previsualizador de objetos 3D que permite a los usuarios interactuar y llevar a cabo ciertas" +
                        " operaciones básicas sobre los objetos cargados, posibilitando su análisis en detalle.<br>Además," +
                        " la aplicación almacena la geometría extraída y procesada de los objetos, de modo que éstos" +
                        " puedan ser facilmente cargados de nuevo.",
        "descriptionEng": "3D objects previewer that allows users to interact and carry out certain basic operations on loaded" +
                        " objects, enabling their analysis in detail.<br>In addition, the application stores the extracted and" +
                        " processed geometry of the objects, so that they can be easily loaded again."
    }
];

const isMobile = {    // allows to detect mobile devices
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

$(function() {
    for (let i=0, specialCVId="", device=""; i<projects.length; i++) {
        device = (isMobile.any()) ? " mobile" : "";
        specialCVId = (projects[i].url === "curriculum") ? " id='projectCurriculum'" : "";

        $("<div class='project"+device+"'>"+
                "<a" + specialCVId + " href='http://"+serverAddress+"/"+projects[i].url+"'>"+
                    "<figure>"+
                        "<img class='projectFront' src='img/"+projects[i].url+".png' alt='" + projects[i].name + "'>"+
                        "<figcaption class='projectBack'>"+
                            "<h2>"+projects[i].name+"</h2>"+
                            "<hr>"+
                            "<div class='description spanishContent scroll'>"+
                                "<p>"+projects[i].descriptionSpa+"</p>"+
                            "</div>"+
                            "<div class='description englishContent scroll'>"+
                                "<p>"+projects[i].descriptionEng+"</p>"+
                            "</div>"+
                            "<p class='ellipsis'>. . .</p>"+
                        "</figcaption>"+
                    "</figure>"+
                "</a>"+
            "</div>"
        ).appendTo("#proyectsContainer");
    }


    /* Triggers
    ========================================================================== */

    $("#projectCurriculum").click(function(e) {
        e.preventDefault();

        $("#leftover, #curriculumContainer").fadeIn("slow");
        $(document.body).css({overflow: "hidden"});

        organizeSlides();

        $("#curriculumData").scrollTop(0);
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
});