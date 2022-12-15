import PersonnageBase from "./modules/class/PersonnageBase.js";
import Inventory from "./modules/class/Inventory.js";
import User from "./modules/class/User.js";
import clickEventHandler from "./modules/event/clickEventHandler.js";
import beginGame from "./modules/service/beginGame.js";


const app = {

    user : undefined,
    allPerso : undefined,
    // Fonc tion d'initialisation lancé au chargement de la page

    init : async function() {

        // ON appelle la toute première fonction, qui charge la base du jeu

        try {

            app.user = await beginGame.getUser(); 
            app.allPerso = await beginGame.getAllPerso();
            beginGame.init(app.allPerso);
            
        } catch(e) {
            console.log(e);
        }
    },
}

document.addEventListener('DOMContentLoaded', app.init)