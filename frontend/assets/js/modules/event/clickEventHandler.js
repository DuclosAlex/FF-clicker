

const clickEventHandler = {

    inventory : undefined,

    addClickEventOnMonster : function(inventory) {

        const monster_img = document.querySelector('.monster-img');
        monster_img.addEventListener('click', clickEventHandler.clickEvent);
        clickEventHandler.inventory = inventory;

    },

    clickEvent : function() {

        clickEventHandler.inventory.addXP();
        clickEventHandler.checkPersoBuyable();
    },

    checkPersoBuyable : function() {

        const allPerso = document.querySelectorAll('personnage-base');
        for( const perso of allPerso) {
            if( clickEventHandler.inventory.xp === perso.cost) {
                perso.makeBuyable();
                const addLevelButton = perso.querySelector('#addLevelButton')
                addLevelButton.addEventListener('click', perso.levelUp);              
            }
        }
    } 
}

export default clickEventHandler;