$(function() {
    $.ajax({
        url: ".projects",
        method: "GET",
        dataType: "json",
        success: function(data, status) {
            generateProjects(data)
            organizeProjects()
        },
        error: function(jqXHR, status, err) {
            console.log(err);
        }
    });


    /* Functions */

    function generateProjects(data) {
        for (var i=0; i<data.length; i++) {
            $(
                "<form action='http://"+serverAddress+"/"+data[i].url+"' method='get' class='projects project'>" +
                    "<button type='submit' class='projects trigger'>"+data[i].name+"</button>" +
                "</form>"
            ).appendTo(".projects.container");
        }
    }

    function organizeProjects() {
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
    }


    /* Triggers */

    $(window).resize(function() {
		organizeProjects();
	});
});