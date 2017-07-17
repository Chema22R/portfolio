$(function() {
    var projectRatio = 0.2;
    var projectMaxSize = 200;
    var projectMinSize = 100;

    var projectSize = 0;
    var projectMargin = 0;
    var rowProjectsCount = 0;
    var wrapperPadding = 0;

    organize();


    /* Functions */

    function organize() {
        projectSize = window.innerWidth * projectRatio;

        if (projectSize > projectMaxSize) {
            projectSize = projectMaxSize;
        } else if (projectSize < projectMinSize) {
            projectSize = projectMinSize;
        }

        projectMargin = projectSize * projectRatio;


        $(".project").css({
            height: projectSize,
            width: projectSize,
            margin: projectMargin
        });


        projectRowCount = Math.floor(window.innerWidth / (projectSize + projectMargin * 2));
        
        if (projectRowCount > $(".project").length) {
            projectRowCount = $(".project").length;
        }

        wrapperPadding = (window.innerWidth - (projectRowCount * (projectSize + projectMargin * 2))) / 2;

        $(".wrapper").css({
            "padding-left": wrapperPadding,
            "padding-right": wrapperPadding
        });
    }


    /* Triggers */

    $(window).resize(function() {
		organize();
	});
});