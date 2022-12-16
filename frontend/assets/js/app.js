import beginGame from "./modules/service/beginGame.js";


const app = {

    // Fonction d'initialisation lancé au chargement de la page

    init : async function() {

        // ON appelle la toute première fonction, qui charge la base du jeu

        try {
            await beginGame.init();
            
        } catch(e) {
            console.log(e);
        }
    },
}

document.addEventListener('DOMContentLoaded', app.init)