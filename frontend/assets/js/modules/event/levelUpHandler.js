import checkEventHandler from "./checkEventHandler.js";

const levelUpHandler = {

    levelUpEvent (event) {
        
        const perso = event.target.closest('personnage-base');
        const inventory = document.querySelector('inventory-section');
        inventory.deduceCostFromXP(perso.cost);
        perso.levelUp();        
        inventory.addPowerclick(perso);
        checkEventHandler.checkPersoBuyable();
    }
}

export default levelUpHandler;