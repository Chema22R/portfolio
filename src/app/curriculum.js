'use strict';

generateSlides({
    "codepen": "https://codepen.io/chema22r",
    "driveCv": "https://drive.google.com/drive/folders/14_t2L92eh98rlP80SueieMA6bYGxA4pA",
    "email": "contact@chema22r.com",
    "github": "https://github.com/chema22r",
    "linkedin": "https://www.linkedin.com/in/chema22r",
    "npm": "https://www.npmjs.com/~chema22r"
});

function generateSlides(curriculum) {
    $('#socialContainer').append(
        '<div>' +
            '<a class="content icon-lkdn icon" href="' + curriculum.linkedin + '" target="_blank" rel="external"></a>' +
            '<a class="content icon-gthb icon" href="' + curriculum.github + '" target="_blank" rel="external"></a>' +
            '<a class="content icon-npm icon" href="' + curriculum.npm + '" target="_blank" rel="external"></a>' +
            '<a class="content icon-cdpn icon" href="' + curriculum.codepen + '" target="_blank" rel="external"></a>' +
            '<a class="content icon-gml icon" href="mailto:' + curriculum.email + '" rel="external"></a>' +
            '<a class="content icon-cv icon" href="' + curriculum.driveCv + '" target="_blank" rel="external"></a>' +
        '</div>'
    );
}
