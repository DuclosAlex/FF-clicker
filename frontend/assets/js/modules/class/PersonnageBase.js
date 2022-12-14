

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

        const perso = this.closest('personnage-base');

        perso.lvl += 1;

        perso.cost = Math.round(perso.cost * perso.growth_rate);

        if(perso.lvl === 1) {
            
            const notBuyPersoElem = perso.querySelector('#notBuyPerso');
            notBuyPersoElem.remove();
        }

        if(perso.lvl > 1) {

            perso.current_powerclick += perso.powerclick_base;
        }

        perso.querySelector('#lvl-display').textContent = perso.lvl;

        perso.querySelector('#cost-display').textContent = perso.cost;

        perso.querySelector('#powerClickPerso-display').textContent = perso.current_powerclick;
    }

    makeBuyable () {

        const addLvlButton = this.querySelector('#addLevelButton');
        let canBuy = addLvlButton.getAttribute('can-buy');

        if(this.lvl === 0) {
            
            addLvlButton.classList.add('zIndex');
        }
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