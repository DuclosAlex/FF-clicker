

class Monster extends HTMLElement {

    constructor(monster) {

        super();
        this.img = monster.image;
        this.name = monster.name;
        this.pv = monster.pv;
    }

    connectedCallback() {

        const templateMonsterElem = document.querySelector('#monster-article');

        const cloneTemplateMonsterElem = templateMonsterElem.content.cloneNode(true);

        cloneTemplateMonsterElem.querySelector('.monster-img').setAttribute('src', `.${this.img}`);

        this.appendChild(cloneTemplateMonsterElem);
    }
}
customElements.define("monster-element", Monster);

export default Monster;