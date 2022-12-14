import Inventory from "../class/Inventory.js";
import Monster from "../class/Monster.js";
import PersonnageBase from "../class/PersonnageBase.js";
import User from "../class/User.js";
import clickEventHandler from "../event/clickEventHandler.js";

const initGame = {

    getCloud : async function() {

        try {

            // Récupération des personnages depuis l'API
            const response = await fetch(`http://localhost:3000/personnage_base/1`);

            const perso_base = await response.json();

            const cloud =  new PersonnageBase(perso_base);
            return cloud;
            
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
            console.log(monster);
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

export default initGame;