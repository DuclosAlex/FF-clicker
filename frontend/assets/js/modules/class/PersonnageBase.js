

class PersonnageBase extends HTMLElement {

    constructor(persoData) {

        super();
        this.id = persoData.id;
        this.name = persoData.name;
        console.log(this.lvl);
        this.lvl = persoData.lvl;

        this.power_click = persoData.powerClick;
        this.cost = persoData.cost;
        this.auto_click_cost = persoData.autoClickCost
        this.growth_rate = persoData.growthRate;
        this.images = persoData.images;
        this.game_logo_img = persoData.game_logo_img;
        this.quotes = persoData.quotes;
        this.episode = persoData.episode;        
        
    }

    levelUp () {



        this.lvl += 1;

        this.cost = Math.round(this.cost * this.growth_rate);

        this.querySelector('#lvl-display').textContent = this.lvl;
    }    

    connectedCallback() {

        const templatePersoElem = document.querySelector('#perso-article');
    
        // On clone le template
    
        const cloneTemplatePersoElem = templatePersoElem.content.cloneNode(true);
    
        // On ajoute dans le clone de notre template toute sles infos du personnage
    
        cloneTemplatePersoElem.querySelector('.perso-name').textContent = this.name;
    
        cloneTemplatePersoElem.querySelector('#lvl-display').textContent = this.lvl;
    
        cloneTemplatePersoElem.querySelector('#cost-display').textContent = this.cost;
    
        cloneTemplatePersoElem.querySelector('#powerClickPerso-display').textContent = this.power_click;
    
        cloneTemplatePersoElem.querySelector('#autoClickParagraph').textContent = `Cout en XP : ${this.auto_click_cost}`;
    
        cloneTemplatePersoElem.querySelector('.perso-img').setAttribute('src', `.${this.images}`);
    
        cloneTemplatePersoElem.querySelector('.perso-article').setAttribute('data-id', `${this.id}` )

        // this.shadow.appendChild(cloneTemplatePersoElem);

        this.appendChild(cloneTemplatePersoElem);
    }
}
customElements.define("personnage-base", PersonnageBase);



export default PersonnageBase;