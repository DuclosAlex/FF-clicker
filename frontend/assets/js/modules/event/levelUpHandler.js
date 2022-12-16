import checkEventHandler from "./checkEventHandler.js";
import getData from '../service/getData.js';
import mysteryPersonnage from '../class/mysteryPersonnage.js';
import addInDOM from "../service/addInDOM.js";

const levelUpHandler = {

    async levelUpEvent (event) {

        // const allPerso = await getData.getAllPerso();
        const currentPerso = event.target.closest('personnage-base');
        const inventory = document.querySelector('inventory-section');
        inventory.deduceCostFromXP(currentPerso.cost);
        currentPerso.levelUp();
        
        // Si après le levelUp, le niveau du personnage est de 1, il faut dévoiler le personnage mystère
        // Pour ça il faut d'abord retirer l'instance mystery-perso, ajouter le nouveau personnage puis ajouter le nouveau personnage

        if ( currentPerso.lvl === 1) {

            const mysteryPerso = document.querySelector('mystery-perso');
            mysteryPerso.remove();

            addInDOM.addNewPersoAndMysteryPersoInDOM(currentPerso);
        }
        inventory.addPowerclick(currentPerso);
        checkEventHandler.checkPersoBuyable();
    }
}

export default levelUpHandler;