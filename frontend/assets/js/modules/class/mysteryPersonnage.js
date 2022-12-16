

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

        const templateMysteryPersoElem = document.querySelector('#perso-article-mystery');

        const cloneTemplatePersoElem = templateMysteryPersoElem.content.cloneNode(true);

        cloneTemplatePersoElem.querySelector('#perso-img-mystery').setAttribute('src', `.${this.logo}`);

        cloneTemplatePersoElem.querySelector('#quotes').textContent = this.quotes;

        cloneTemplatePersoElem.querySelector('#unlockingPersoName').textContent = this.persoRequiredName;

        this.appendChild(cloneTemplatePersoElem);

    }
}
customElements.define('mystery-perso', mysteryPersonnage);

export default mysteryPersonnage;