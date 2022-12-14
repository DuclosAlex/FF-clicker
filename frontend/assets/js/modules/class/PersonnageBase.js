

class PersonnageBase extends HTMLElement {

    constructor(persoData) {

        super();
        this.id = persoData.id;
        this.name = persoData.name;
        this.lvl = persoData.lvl;
        this.powerclick_base = persoData.powerClick;
        this.current_powerclick = persoData.powerClick;
        this.cost = persoData.cost;
        this.auto_click_cost = persoData.autoClickCost
        this.growth_rate = persoData.growthRate;
        this.images = persoData.images;
        this.game_logo_img = persoData.game_logo_img;
        this.quotes = persoData.quotes;
        this.episode = persoData.episode;        
        
    }

    // Gestion du lvlUp de l'instance du personnage

    levelUp () {

        this.lvl += 1;

        this.cost = Math.round(this.cost * this.growth_rate);

        if(this.lvl > 1) {

            this.current_powerclick += this.powerclick_base;
        }

        console.log(this.current_powerclick);

        this.querySelector('#lvl-display').textContent = this.lvl;

        this.querySelector('#cost-display').textContent = this.cost;

        this.querySelector('#powerClickPerso-display').textContent = this.current_powerclick;
    }    

    connectedCallback() {

        const templatePersoElem = document.querySelector('#perso-article');
    
        // On clone le template
    
        const cloneTemplatePersoElem = templatePersoElem.content.cloneNode(true);
    
        // On ajoute dans le clone de notre template toute sles infos du personnage
    
        cloneTemplatePersoElem.querySelector('.perso-name').textContent = this.name;
    
        cloneTemplatePersoElem.querySelector('#lvl-display').textContent = this.lvl;
    
        cloneTemplatePersoElem.querySelector('#cost-display').textContent = this.cost;
    
        cloneTemplatePersoElem.querySelector('#powerClickPerso-display').textContent = this.powerclick_base;
    
        cloneTemplatePersoElem.querySelector('#autoClickParagraph').textContent = `Cout en XP : ${this.auto_click_cost}`;
    
        cloneTemplatePersoElem.querySelector('.perso-img').setAttribute('src', `.${this.images}`);
    
        cloneTemplatePersoElem.querySelector('.perso-article').setAttribute('data-id', `${this.id}` )

        this.appendChild(cloneTemplatePersoElem);
    }
}
customElements.define("personnage-base", PersonnageBase);



export default PersonnageBase;