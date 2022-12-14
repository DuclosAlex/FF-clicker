import PersonnageBase from "./modules/class/PersonnageBase.js";
import Inventory from "./modules/class/Inventory.js";
import User from "./modules/class/User.js";
import initGame from "./modules/service/initGame.js";
import clickEventHandler from "./modules/event/clickEventHandler.js";


const app = {

    user : undefined,
    allPerso : [],
    // Fonc tion d'initialisation lancé au chargement de la page

    init : async function() {

        // ON appelle la toute première fonction, qui charge la base du jeu

        try {

            app.user = await initGame.getUser();
            const cloud = await initGame.getCloud();
            const inventory = await initGame.getInventory();
            const monster = await initGame.getMonster();
            const persoSectionElem = document.querySelector('.right-section');
            const leftSection = document.querySelector('.left-section');
            app.allPerso.push(cloud);
            console.log(app.allPerso);
            leftSection.appendChild(monster);
            leftSection.appendChild(inventory);
            
            persoSectionElem.appendChild(cloud);
            clickEventHandler.addClickEventOnMonster(inventory);
        } catch(e) {
            console.log(e);
        }
    },
}

document.addEventListener('DOMContentLoaded', app.init)