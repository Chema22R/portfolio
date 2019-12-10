"use strict";

class Information {
    constructor() {
        if (!Information.instance) {
            Information.instance = this;
            this.languages = null;
            this.projects = null;
            this.curriculum = null;

            fetch(DATA_URL)
            .then(res => res.json())
            .then(res => {
                this.projects = JSON.parse(res.files["personal-web-server_projects.json"].content);
                this.curriculum = JSON.parse(res.files['personal-web-server_curriculum.json'].content);
            })
            .catch(reason => console.error(reason));
        }

        return Information.instance;
    }

    getProjects(callback) {
        (this.projects) ? callback(this.projects) : setTimeout(() => this.getProjects(callback), 500);
    }

    getCurriculum(callback) {
        (this.curriculum) ? callback(this.curriculum) : setTimeout(() => this.getCurriculum(callback), 500);
    }
}


window.information = new Information();
window.curriculumCodeGen = false;
window.projectsCodeGen = false;
window.preferredLanguage = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage;

window.isMobile = {
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