import Inventory from "../class/Inventory.js";
import Monster from "../class/Monster.js";
import PersonnageBase from "../class/PersonnageBase.js";
import User from "../class/User.js";
import clickEventHandler from "../event/clickEventHandler.js";

const beginGame = {

    init : async function (allPerso) {

        let cloud = allPerso[0];
        let yshtola = allPerso[1];
        cloud.addInDOM();
        yshtola.addInDOM();
        let monster = await beginGame.getMonster();
        let inventory = await beginGame.getInventory();
        monster.addInDOM();
        inventory.addInDOM();

    },

    getAllPerso : async function() {

        try {

            // Récupération des personnages depuis l'API
            const response = await fetch(`http://localhost:3000/personnage_base`);

            const allPersoBase= await response.json();

            const allPerso = [];

            for( let perso of allPersoBase) {

                perso = new PersonnageBase(perso);
                allPerso.push(perso);
            }
            return allPerso;
            
        }
        catch(e) {
            console.log(e)
            console.log('Failed');
        }
    },

    getUser : async function() {

        try {
            // Récupération des personnages depuis l'API
            const response = await fetch(`http://localhost:3000/user/1`);
    
            const user = await response.json();

            const yourUser = new User(user);
    
            return yourUser;
    
        } catch(e) {
            console.log(e);
        }
    },

    getMonster : async function() {

        try {

            const response = await fetch(`http://localhost:3000/monster/1`);

            const result = await response.json();

            const monster = new Monster(result);
            return monster;
        } catch(e) {
            console.log(e);
        }
    },

    getInventory : async function() {

        try {
            // Récupération des personnages depuis l'API
            const response = await fetch(`http://localhost:3000/inventory/1`);
    
            const inventory = await response.json();

            const yourInventory = new Inventory(inventory);
    
            return yourInventory;
    
        } catch(e) {
            console.log(e);
        }
    }

}

export default beginGame;