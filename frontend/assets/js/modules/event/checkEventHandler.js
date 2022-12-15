

const checkEventHandler = {

    checkPersoBuyable : function() {

        const inventory = document.querySelector('inventory-section');

        const allPerso = document.querySelectorAll('personnage-base');
        for( const perso of allPerso) {

            console.log('hello');       

            if(perso.lvl === 0) {


                if( inventory.xp >= perso.cost && perso.can_buy === false) {
                    console.log(` ${perso.name} est first achetable`);
                    perso.makeFirstBuyable();          
                }
                else if( inventory.xp < perso.cost && perso.can_buy === true) {
                    console.log(` ${perso.name} n'est pas achetable`);
                    perso.makeNotFirstBuyable();
                }
                else console.log(`${perso.name } n'est pas concerné`)
            }

            if(perso.lvl > 0) {


                if(inventory.xp < perso.cost  && perso.can_buy === true) {
                    console.log(` ${perso.name} n'est pas achetable`);
                    perso.makeNotBuyable();
    
                } 
                else if( inventory.xp > perso.cost  && perso.can_buy === false){
                    console.log(inventory.xp)
                    console.log(perso.cost)
                    console.log(` ${perso.name} est second achetable`);
                    perso.makeBuyable();
                }
                else console.log(`${perso.name } n'est pas concerné`)
            }
        }
    } 
}

export default checkEventHandler;