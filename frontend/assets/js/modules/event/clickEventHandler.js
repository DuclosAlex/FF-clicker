import checkEventHandler from "./checkEventHandler.js";

const clickEventHandler = {

    clickEvent : function() {

        const inventory = document.querySelector('inventory-section');
        inventory.addXP();
        checkEventHandler.checkPersoBuyable();
    },
}

export default clickEventHandler;