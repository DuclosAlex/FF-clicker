

const checkEventHandler = {

    checkPersoBuyable : function() {

        const inventory = document.querySelector('inventory-section');

        const allPerso = document.querySelectorAll('personnage-base');
        for( const perso of allPerso) {     

            if(perso.lvl === 0) {


                if( inventory.xp >= perso.cost && perso.can_buy === false) {
                    perso.makeFirstBuyable();          
                }
                else if( inventory.xp < perso.cost && perso.can_buy === true) {
                    perso.makeNotFirstBuyable();
                }
            }

            if(perso.lvl > 0) {


                if(inventory.xp < perso.cost  && perso.can_buy === true) {
                    perso.makeNotBuyable();
    
                } 
                else if( inventory.xp > perso.cost  && perso.can_buy === false){
                    perso.makeBuyable();
                }
            }
        }
    } 
}

export default checkEventHandler;