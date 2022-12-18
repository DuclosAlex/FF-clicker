import levelUpHandler from "../event/levelUpHandler.js";

class PersonnageBase extends HTMLElement {

    constructor(persoData) {

        super();
        this.id = persoData.id;
        this.name = persoData.name;
        this.lvl = persoData.lvl;
        this.powerclick_base = persoData.power_click;
        this.current_powerclick = persoData.power_click;
        this.cost = persoData.cost;
        console.log(persoData.cost);
        console.log(this.cost)
        this.auto_click_cost = persoData.auto_click_cost
        this.growth_rate = persoData.growth_rate;
        this.images = persoData.images;
        this.game_logo_img = persoData.game_logo_img;
        this.quotes = persoData.quotes;
        this.episode = persoData.episode;    
        this.can_buy = false;    
        
    }

    // Gestion du lvlUp de l'instance du personnage

    levelUp () {

        const perso = this.closest('personnage-base');

        perso.lvl += 1;

        perso.cost = Math.round(perso.cost * perso.growth_rate);

        if(perso.lvl === 1) {
            
            const notBuyPersoElem = perso.querySelector('#notBuyPerso');
            notBuyPersoElem.remove();
            const addLevelButton = this.querySelector('#addLevelButton');
            addLevelButton.classList.remove('zIndex');
        }

        if(perso.lvl > 1) {

            perso.current_powerclick += perso.powerclick_base;
        }

        perso.querySelector('#lvl-display').textContent = perso.lvl;

        perso.querySelector('#cost-display').textContent = perso.cost;

        perso.querySelector('#powerClickPerso-display').textContent = perso.current_powerclick;
    }

    addInDOM () {

        const persoSection = document.querySelector('.right-section');
        persoSection.appendChild(this);
    }

    makeFirstBuyable () {

        this.can_buy = true;
        const addLevelButton = this.querySelector('#addLevelButton');
        addLevelButton.classList.add('zIndex');
        addLevelButton.addEventListener('click', levelUpHandler.levelUpEvent)
    }

    makeBuyable () {

        this.can_buy = true;
        const disableButtonElem = this.querySelector('.disableButtonLvlUp');
        disableButtonElem.remove();
        const addLevelButton = this.querySelector('#addLevelButton');
        addLevelButton.addEventListener('click', levelUpHandler.levelUpEvent)
    }

    makeNotBuyable () {

        this.can_buy = false;
        const disableButtonElem = document.createElement('div');
        disableButtonElem.classList.add('disableButtonLvlUp');
        const addLevelButton = this.querySelector('#addLevelButton');
        addLevelButton.appendChild(disableButtonElem);
        addLevelButton.removeEventListener('click', levelUpHandler.levelUpEvent)
        
    }

    makeNotFirstBuyable () {

        this.can_buy = false;
        const addLevelButton = this.querySelector('#addLevelButton');
        addLevelButton.classList.remove('zIndex');
        addLevelButton.removeEventListener('click', levelUpHandler.levelUpEvent)
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