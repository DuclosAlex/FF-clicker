

const clickEventHandler = {

    inventory : undefined,

    addClickEventOnMonster : function(inventory) {

        const monster_img = document.querySelector('.monster-img');
        console.log(monster_img);
        monster_img.addEventListener('click', clickEventHandler.clickEvent);
        clickEventHandler.inventory = inventory;
        console.log(inventory);
    },

    clickEvent : function() {

        clickEventHandler.inventory.addXP();
    }
}

export default clickEventHandler;