$(function() {
    var projects = [
        {
            "name": "Memoriizu",
            "url": "memoriizu",
            "description":  "Aplicación para el estudio de idiomas en la que el usuario añade los idiomas y el contenido"+
                            " que desea estudiar, además del periodo en el que desea que se reparta dicho contenido.<br>"+
                            "A diario se generará una sesión con el contenido que el usuario debe completar para ese día,"+
                            " haciendo hincapié en los fallos cometidos en sesiones anteriores.<br>Una vez completadas todas"+
                            " las sesiones del periodo actual, éste se reiniciará repartiendo el contenido nuevamente"+
                            " entre las sesiones del siguiente periodo.",
            "access": "private"
        },
        {
            "name": "3D Preview",
            "url": "3dpreview",
            "description":  "Previsualizador de objetos 3D con los que el usuario podrá interactuar y llevar a cabo ciertas"+
                            " operaciones básicas, las cuales le permitan analizar el objeto en detalle.<br>Además de la"+
                            " función de visualización y manipulación, la aplicación se encargará de almacenar la geometría"+
                            " extraída y procesada de los objetos, de modo que estos puedan ser accesibles posteriormente.",
            "access": "public"
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
                            "<p>"+projects[i].description+"</p>"+
                            "<div class='"+projects[i].access+"Project'>"+
                                "<p>"+projects[i].access+"</p>"+
                            "</div>"+
                        "</figcaption>"+
                    "</figure>"+
                "</a>"+
            "</div>"
        ).appendTo("#proyectsContainer");
    }

    /*function organizeProjects() {
        var heightRatio = 0.5;
        var widthRatio = 0.2;
        var marginRatio = 0.2;
        var radiusRatio = 0.1;
        
        var minWidth = 150;
        var maxWidth = 300;

        var projectHeight = 0;
        var projectWidth = 0;   // reference size
        var projectMargin = 0;

        var rowProjectsCount = 0;
        var containerPadding = 0;


        projectWidth = window.innerWidth * widthRatio;

        if (projectWidth > maxWidth) {
            projectWidth = maxWidth;
        } else if (projectWidth < minWidth) {
            projectWidth = minWidth;
        }

        projectHeight = projectWidth * heightRatio;
        projectMargin = projectWidth * marginRatio;


        $(".projects.project").css({
            height: projectHeight,
            width: projectWidth,
            "border-radius": projectWidth * radiusRatio,
            margin: projectMargin
        });


        rowProjectsCount = Math.floor(window.innerWidth / (projectWidth + projectMargin * 2));
        
        if (rowProjectsCount > $(".projects.project").length) {
            rowProjectsCount = $(".projects.project").length;
        }

        containerPadding = (window.innerWidth - (rowProjectsCount * (projectWidth + projectMargin * 2))) / 2 - 2;

        $(".projects.container").css({
            "padding-left": containerPadding,
            "padding-right": containerPadding
        });
    }*/
});