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
                this.languages = JSON.parse(res.files["personal-web-server_langs.json"].content);
                this.projects = JSON.parse(res.files["personal-web-server_projects.json"].content);
                this.curriculum = JSON.parse(res.files['personal-web-server_curriculum.json'].content);
            })
            .catch(reason => console.error(reason));
        }

        return Information.instance;
    }

    getLanguages(callback) {
        (this.languages) ? callback(this.languages) : setTimeout(() => this.getLanguages(callback), 500);
    }

    getProjects(callback) {
        (this.projects) ? callback(this.projects) : setTimeout(() => this.getProjects(callback), 500);
    }

    getCurriculum(callback) {
        (this.curriculum) ? callback(this.curriculum) : setTimeout(() => this.getCurriculum(callback), 500);
    }

    getLanguagesProjects(callback) {
        (this.languages && this.projects) ? callback(this.languages, this.projects) : setTimeout(() => this.getLanguagesProjects(callback), 500);
    }

    getLanguagesCurriculum(callback) {
        (this.languages && this.curriculum) ? callback(this.languages, this.curriculum) : setTimeout(() => this.getLanguagesCurriculum(callback), 500);
    }
}


window.information = new Information();
window.blockSlider = false;

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

window.langsNames = {
    "en": "English",
    "es": "Español"
};