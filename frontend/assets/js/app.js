import PersonnageBase from "./modules/class/PersonnageBase.js";
import Inventory from "./modules/class/Inventory.js";
import User from "./modules/class/User.js";
import initGame from "./modules/service/initGame.js";
import clickEventHandler from "./modules/event/clickEventHandler.js";


const app = {

    user : undefined,
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
            console.log(inventory.xp)
            leftSection.appendChild(monster);
            leftSection.appendChild(inventory);
            
            persoSectionElem.appendChild(cloud);
            clickEventHandler.addClickEventOnMonster(inventory);
        } catch(e) {
            console.log(e);
        }


    },

    // Cette fonction récupèe les informations néccéssaires au lancement de la partie
    // Inventaire, personnage de base, monstre de base

    getDataFromApi : async function() {
        try {

            // Créer le premier personnage surprise
            
            // app.makeMysteryBoxPerso(perso_base.id, perso_base.name);

            // Créer le premier monstre

            const responseMonster = await fetch(`http://localhost:3000/monster/1`);

            const monster = await responseMonster.json();

            app.makeMonsterInDOM(monster);
        }
        catch(e) {
            console.log(e)
            console.log('Failed');
        }
    },

 

    
    makeMonsterInDOM : function(monsterData) {

        const monsterSectionElem = document.querySelector('.left-section');

        const templateMonsterElem = document.querySelector('#monster-article');

        const cloneTemplateMonsterElem = templateMonsterElem.content.cloneNode(true);

        cloneTemplateMonsterElem.querySelector('.monster-article').addEventListener('click', app.clickToGainXP)

        cloneTemplateMonsterElem.querySelector('.monster-img').setAttribute('src', `.${monsterData.image}`);

        monsterSectionElem.appendChild(cloneTemplateMonsterElem);
    },
}

document.addEventListener('DOMContentLoaded', app.init)