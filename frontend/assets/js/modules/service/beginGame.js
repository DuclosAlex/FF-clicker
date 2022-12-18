import Inventory from "../class/Inventory.js";
import Monster from "../class/Monster.js";
import User from "../class/User.js";
import getData from "./getData.js";
import mysteryPersonnage from "../class/mysteryPersonnage.js";

const beginGame = {

    init : async function () {

        const allPerso = await getData.getAllPerso();

        let cloud = allPerso[0];
        cloud.addInDOM();
        const firstMysteryPerso = new mysteryPersonnage(allPerso[1], cloud.name);
        firstMysteryPerso.addInDOM();
        let monster = await beginGame.getMonster();
        console.log(monster.name);
        let inventory = await beginGame.getInventory();
        monster.addInDOM();
        inventory.addInDOM();

    },

    getUser : async function() {

        try {
            // Récupération des personnages depuis l'API
            const response = await fetch(`http://localhost:3000/users/1`);
    
            const result = await response.json();

            console.log(result)

            const yourUser = new User(result.rows[0]);
    
            return yourUser;
    
        } catch(e) {
            console.log(e);
        }
    },

    getMonster : async function() {

        try {

            const response = await fetch(`http://localhost:3000/monster/1`);

            const result = await response.json();

            const monster = new Monster(result.rows[0]);

            return monster;
        } catch(e) {
            console.log(e);
        }
    },

    getInventory : async function() {

        try {
            // Récupération des personnages depuis l'API
            const response = await fetch(`http://localhost:3000/users/1`);
    
            const result = await response.json();

            const yourInventory = new Inventory(result.rows[0]);
    
            return yourInventory;
    
        } catch(e) {
            console.log(e);
        }
    }

}

export default beginGame;