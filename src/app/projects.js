'use strict';

import projectsData from '../data/projects.json';
import socialData from '../data/social.json';


const device = (window.isMobile.any()) ? ' mobile' : '';

$('#socialContainer').append(
    '<div>' +
        `<a class='content icon-lkdn icon' href='${socialData.linkedin}' target='_blank' rel='external'></a>` +
        `<a class='content icon-repo icon' href='${socialData.github}' target='_blank' rel='external'></a>` +
        `<a class='content icon-npm icon' href='${socialData.npm}' target='_blank' rel='external'></a>` +
        `<a class='content icon-cdpn icon' href='${socialData.codepen}' target='_blank' rel='external'></a>` +
        `<a class='content icon-gml icon' href='${socialData.email}' rel='external'></a>` +
        // `<a class='content icon-cv icon' href='${socialData.driveCv}' target='_blank' rel='external'></a>` +
    '</div>'
);

$('#projectsContainer').append(
    projectsData.map(({ description, health, id, title, url}) => (
        `<div id='project-${id}' class='project${device}'>` +
            (id === 'curriculum' ? '<div id="helpBubble"><img src="images/me.png" /><p>Welcome!</p></div>' : '') +
            (id === 'curriculum' ? '<div>' : `<a href='${url}'>`) +
                '<figure>' +
                    `<img class='projectFront' src='images/${id}.png' alt='${title}' />` +
                    '<figcaption class="projectBack">' +
                        `<h2>${title}</h2>` +
                        (!health ? '<hr>' : 
                            '<hr class="left" />' +
                            `<span class='${id} icon-success icon' title='API Status: Good'></span>` +
                            `<span class='${id} icon-loading icon' title='API Status: Pending'></span>` +
                            `<span class='${id} icon-error icon' title='API Status: Failing'></span>` +
                            '<hr class="right" />'
                        ) +
                        `<div class='description scroll'><p>${description}</p></div>` +
                        '<p class="ellipsis">. . .</p>' +
                    '</figcaption>' +
                '</figure>' +
            (id === 'curriculum' ? '</div>' : '</a>') +
        '</div>'
    ))
);


/* Extras */

projectsData.forEach(({ health, id, repo}) => {
    if (repo) {
        $(`#project-${id} figcaption`).append(`<a class='icon-repo icon' href='${repo}' target='_blank' rel='external'></a>`);
    }

    if (health) {
        fetch(health).then((res) => {
            document.getElementsByClassName(`${id} icon-loading`)[0].style.display = 'none';
            document.getElementsByClassName(`${id} icon-${res.ok ? 'success' : 'error'}`)[0].style.display = 'unset';
        }).catch(() => {
            setTimeout(() => {
                document.getElementsByClassName(`${id} icon-loading`)[0].style.display = 'none';
                document.getElementsByClassName(`${id} icon-error`)[0].style.display = 'unset';
            }, 2000);
        });
    }
});


/* Handlers */

$('#project-curriculum > a').on('click', function(e) {
    e.preventDefault();
});

if (!window.isMobile.any()) {
    $('.project').on('mouseenter', function() {
        const currentDescription = $(this).find('.description:visible')[0];

        currentDescription.scrollTop = 0; // to set the scroll to the beginning

        if (currentDescription.offsetHeight + currentDescription.scrollTop >= currentDescription.scrollHeight - 7) {
            $(this).find('p.ellipsis').fadeOut(0);
        } else {
            $(this).find('p.ellipsis').fadeIn(0);
        }
    });

    $('.project figure .projectBack .description').on('scroll', function(e) {
        if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight - 7) {
            $(this).siblings('.ellipsis').fadeOut(0);
        } else {
            $(this).siblings('.ellipsis').fadeIn(0);
        }
    });
}