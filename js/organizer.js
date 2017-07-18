$(function() {
    var ratio = 0.2;
    var maxSize = 200;
    var minSize = 100;

    var projectSize = 0;
    var projectMargin = 0;

    var rowProjectsCount = 0;
    var containerPadding = 0;

    organize();


    /* Functions */

    function organize() {
        projectSize = window.innerWidth * ratio;

        if (projectSize > maxSize) {
            projectSize = maxSize;
        } else if (projectSize < minSize) {
            projectSize = minSize;
        }

        projectMargin = projectSize * ratio;


        $(".projects.project").css({
            height: projectSize,
            width: projectSize,
            margin: projectMargin
        });


        rowProjectsCount = Math.floor(window.innerWidth / (projectSize + projectMargin * 2));
        
        if (rowProjectsCount > $(".projects.project").length) {
            rowProjectsCount = $(".projects.project").length;
        }

        containerPadding = (window.innerWidth - (rowProjectsCount * (projectSize + projectMargin * 2))) / 2 - 2;

        $(".projects.container").css({
            "padding-left": containerPadding,
            "padding-right": containerPadding
        });
    }


    /* Triggers */

    $(window).resize(function() {
		organize();
	});
});