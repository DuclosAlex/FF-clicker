

class mysteryPersonnage extends HTMLElement {

    constructor(persoData, persoRequiredName) {

        super();
        this.logo = persoData.game_logo_img;
        this.quotes = persoData.quotes;
        this.persoRequiredName = persoRequiredName;

    }

    addInDOM() {

        const rightSection = document.querySelector('.right-section');
        rightSection.appendChild(this);
    }



    connectedCallback() {

        const templateMysteryPersoElem = document.querySelector('#perso-article-mysterery');

        const cloneTemplatePersoElem = templateMysteryPersoElem.textContent.cloneNode(true);

        cloneTemplatePersoElem.querySelector('#perso-img-mystery').setAttribute('src', `.${this.game_logo_img}`);

        cloneTemplatePersoElem.querySelector('#quotes').textContent = this.quotes;

        this.appendChild(cloneTemplatePersoElem);

    }
}
customElements.define('mystery-perso', mysteryPersonnage);

export default mysteryPersonnage;