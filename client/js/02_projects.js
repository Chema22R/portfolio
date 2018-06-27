$(function() {
    var projects = [
        {
            "name": "3D Preview",
            "url": "3dpreview",
            "descriptionSpa": "Previsualizador de objetos 3D con los que el usuario podrá interactuar y llevar a cabo ciertas"+
                            " operaciones básicas, las cuales le permitan analizar el objeto en detalle.<br>Además de la"+
                            " función de visualización y manipulación, la aplicación se encargará de almacenar la geometría"+
                            " extraída y procesada de los objetos, de modo que estos puedan ser accesibles posteriormente.",
            "descriptionEng": "3D objects previewer with which the user can interact and carry out certain basic operations,"+
                            " allowing him to analyze the object in detail.<br>In addition to the visualization and manipulation"+
                            " functions, the application will be in charge of storing the extracted and processed geometry of"+
                            " objects, so it can be accessed later.",
            "access": "public",
            "demo": false
        },
        {
            "name": "Memoriizu",
            "url": "memoriizu",
            "descriptionSpa": "Aplicación para el estudio de idiomas en la que el usuario añade los idiomas y el contenido"+
                            " que desea estudiar, además del periodo en el que desea que se reparta dicho contenido.<br>"+
                            "A diario se generará una sesión con el contenido que el usuario debe completar para ese día,"+
                            " haciendo hincapié en los fallos cometidos en sesiones anteriores.<br>Una vez completadas todas"+
                            " las sesiones del periodo actual, éste se reiniciará repartiendo el contenido nuevamente"+
                            " entre las sesiones del siguiente periodo.",
            "descriptionEng": "Application for the language study in which the user adds the languages and the content"+
                            " he wants to study, in addition to the period in which he wants that content to be distributed."+
                            "<br>A session will be generated daily with the content that the user must complete for that day,"+
                            " emphasizing the mistakes made in previous sessions.<br>Once all sessions of the current period"+
                            " have been completed, it will be restarted distributing the content again between the sessions of"+
                            " the next period.",
            "access": "private",
            "demo": true
        }
    ];

    var isMobile = {    // allows to detect mobile devices
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var device = "";
    if (isMobile.any()) {device = " mobile";}

    for (var i=0; i<projects.length; i++) {
        $("<div class='project"+device+"'>"+
                "<a href='http://"+serverAddress+"/"+projects[i].url+"'>"+
                    "<figure>"+
                        "<img class='projectFront' src='img/"+projects[i].url+".png' alt='memoriizu'>"+
                        "<figcaption class='projectBack'>"+
                            "<h2>"+projects[i].name+"</h2>"+
                            "<hr>"+
                            "<div class='description spanishContent scroll'>"+
                                "<p>"+projects[i].descriptionSpa+"</p>"+
                            "</div>"+
                            "<div class='description englishContent scroll'>"+
                                "<p>"+projects[i].descriptionEng+"</p>"+
                            "</div>"+
                            "<p class='ellipsis'>&darr; . . . &darr;</p>"+
                            "<div class='"+projects[i].access+"Project demo"+projects[i].demo+"'>"+
                                "<p>"+projects[i].access+"</p>"+
                                "<span class='demoLink'>Demo</span>"+
                            "</div>"+
                        "</figcaption>"+
                    "</figure>"+
                "</a>"+
            "</div>"
        ).appendTo("#proyectsContainer");
    }


    $(".project figure .projectBack .demotrue .demoLink").click(function(e) {  // demoLink trigger
        e.preventDefault();
        window.location.href = e.target.parentNode.parentNode.parentNode.parentNode.href+"Demo";
    });
    

    if (!isMobile.any()) {
        $(".project").on("mouseenter", function() {
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