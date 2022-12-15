import clickEventHandler from "../event/clickEventHandler.js";

class Monster extends HTMLElement {

    constructor(monster) {

        super();
        this.img = monster.image;
        this.name = monster.name;
        this.pv = monster.pv;
    }

    addInDOM () {

        const leftSection = document.querySelector('.left-section');
        leftSection.appendChild(this);
    }

    connectedCallback() {

        const templateMonsterElem = document.querySelector('#monster-article');

        const cloneTemplateMonsterElem = templateMonsterElem.content.cloneNode(true);

        cloneTemplateMonsterElem.querySelector('.monster-img').setAttribute('src', `.${this.img}`);

        const monster_img = cloneTemplateMonsterElem.querySelector('.monster-img');
        monster_img.addEventListener('click', clickEventHandler.clickEvent);

        this.appendChild(cloneTemplateMonsterElem);
    }
}
customElements.define("monster-element", Monster);

export default Monster;