// const persoFonction = require('./modules/persoFonction');

const app = {

    xp : 0,
    powerclick : 1,

    init : function() {

        app.getDataFromApi();
    },

    getDataFromApi : async function() {
        try {

            // Récupération des personnages depuis l'API
            const response = await fetch(`http://localhost:3000/personnage_base/1`);

            const perso_base = await response.json();

            app.makePersoInDom(perso_base);
            
            app.makeMysteryBoxPerso(perso_base.id, perso_base.name)

            const responseMonster = await fetch(`http://localhost:3000/monster/1`);

            const monster = await responseMonster.json();

            app.makeMonsterInDOM(monster);

            const responseInventory = await  fetch(`http://localhost:3000/inventory/1`);

            const inventory = await responseInventory.json();

            app.makeInventoryInDOM(inventory)


        }
        catch(e) {
            console.log('Failed');
        }
    },

    makePersoInDom : function(persoData) {

        const persoSectionElem = document.querySelector('.right-section');

        const templatePersoElem = document.querySelector('#perso-article');

        const cloneTemplatePersoElem = templatePersoElem.content.cloneNode(true);

        cloneTemplatePersoElem.querySelector('.perso-name').textContent = persoData.name;

        cloneTemplatePersoElem.querySelector('#lvl-display').textContent = persoData.lvl;

        cloneTemplatePersoElem.querySelector('#cost-display').textContent = persoData.cost;

        cloneTemplatePersoElem.querySelector('#powerClickPerso-display').textContent = persoData.powerClick;

        cloneTemplatePersoElem.querySelector('#autoClickParagraph').textContent = `Cout en XP : ${persoData.autoClickCost}`;

        cloneTemplatePersoElem.querySelector('.perso-img').setAttribute('src', `.${persoData.images}`);

        cloneTemplatePersoElem.querySelector('.perso-article').setAttribute('data-id', `${persoData.id}` )

        const addLevelButtonElem = cloneTemplatePersoElem.querySelector('#addLevelButton');

        addLevelButtonElem.addEventListener("click", app.lvlUpPersonnage)

        persoSectionElem.appendChild(cloneTemplatePersoElem);
    },

    makeMysteryBoxPerso: async function(idPreviousPerso, PreviousPersoName) {

        console.log(idPreviousPerso, PreviousPersoName);

        const idNextPerso = idPreviousPerso +1;

        try {
             
            const response = await fetch(`http://localhost:3000/personnage_base/${idNextPerso}`);
            
            const nextPerso = await response.json();

            console.log(nextPerso);

            const persoSectionElem = document.querySelector('.right-section');

            const templateMysteryPersoElem = document.querySelector('#perso-article-mystery');

            const cloneTemplateMysteryPersoElem = templateMysteryPersoElem.content.cloneNode(true);

            cloneTemplateMysteryPersoElem.querySelector('#UnlockingPersoName').textContent = PreviousPersoName;

            cloneTemplateMysteryPersoElem.querySelector('#perso-img-mystery').setAttribute('src', `.${nextPerso.game_logo_img}`);

            console.log(cloneTemplateMysteryPersoElem);

            persoSectionElem.appendChild(cloneTemplateMysteryPersoElem);

        } catch(e) {
            console.log(e)
            console.log('Impossible de récupérer les infos du personnage suivant')
        }
    },

    makeMonsterInDOM : function(monsterData) {

        const monsterSectionElem = document.querySelector('.left-section');

        const templateMonsterElem = document.querySelector('#monster-article');

        const cloneTemplateMonsterElem = templateMonsterElem.content.cloneNode(true);

        cloneTemplateMonsterElem.querySelector('.monster-article').addEventListener('click', app.clickToGainXP)

        cloneTemplateMonsterElem.querySelector('.monster-img').setAttribute('src', `.${monsterData.images}`);

        monsterSectionElem.appendChild(cloneTemplateMonsterElem);
    },

    makeInventoryInDOM : function(inventoryData) {

        const inventorySectionElem = document.querySelector('.left-section');

        const templateInventoryElem = document.querySelector('.menu-article');

        const cloneTemplateInventoryElem = templateInventoryElem.content.cloneNode(true);

        cloneTemplateInventoryElem.querySelector('#xp-amount').textContent = inventoryData.xp_amount;

        cloneTemplateInventoryElem.querySelector('#powerclick_amount').textContent = inventoryData.powerclick_amount;

        inventorySectionElem.appendChild(cloneTemplateInventoryElem);
    },


    /* Fonction de jeu */

    clickToGainXP : function() {

        app.xp = app.xp + app.powerclick; 

        document.querySelector('#xp-amount').innerHTML = app.xp;

        const allPersoElem = document.querySelectorAll('.perso-article');

        console.log(allPersoElem);

        allPersoElem.forEach(
            function(currentValue) {

                const disableButtonElem = currentValue.querySelector('.disableButtonLvlUp');
                const costLvlUpPerso = Number(currentValue.querySelector('#cost-display').textContent);
                if(costLvlUpPerso <= app.xp && disableButtonElem) {
                    disableButtonElem.remove();
                }
            }
        )
    },

    lvlUpPersonnage : async function () {

        // Récupération du block contenant le personnage

        const persoElem = document.querySelector('.perso-article');

        // Récupération de l'id du personnage 

        let idPerso = Number(persoElem.getAttribute('data-id'));

        const displayLevelElem = document.querySelector('#lvl-display');

        // Récupération du lvl du personnage

        let persoLvl = Number(displayLevelElem.textContent);

        // Récupération du coût d'achat du personnage

        let costLevelUp = Number(document.querySelector('#cost-display').textContent);

        // Si le cout d'achat du personnage est inférieur à l'XP on envoie une alerte et la fonction s'arrête

        if(costLevelUp > app.xp) {
            alert("Vous n'avez pas suffisament d'XP");
        }
        // Dans le cas contraire on modifie les propriétés de notre personnage 
        else {

            // Son niveau est augmentée d'une unité
            persoLvl += 1;
            // On modifie la valeur du niveau affiché
            displayLevelElem.textContent = persoLvl;
            // On réduit la valeur de notre xp totale en déduisant le coût d'achat du personnage
            app.xp = app.xp - costLevelUp; 
            // ON modifie la valeur affiché de l'xp totale
            document.querySelector('#xp-amount').textContent = app.xp;

            try {
                // On récupère en BDD les valeur de base du personnage
                
                const response = await fetch(`http://localhost:3000/personnage_base/${idPerso}`);
                
                const perso = await response.json();


                // Augmentation du coût du personnage en l'arrondissant

                costLevelUp = Math.round(costLevelUp * perso.growthRate);

                document.querySelector('#cost-display').textContent = costLevelUp;

                if(costLevelUp >= app.xp) {

                    // Si après l'achat, le nouveau total d'xp est inférieur au nouveau coût d'achat du perso
                    // ON recrée la div contenant l'effet désactivée du boutton d'achat et on le rajoute

                    const disableButtonElem = document.createElement('div');
                    disableButtonElem.classList.add('disableButtonLvlUp');
                    persoElem.querySelector('#addLevelButton').appendChild(disableButtonElem);
                }

                // Augmentation du powerclick général

                app.powerclick = app.powerclick + perso.powerClick;

                document.querySelector('#powerclick_amount').textContent = app.powerclick;

                // Au départ le niveau du personnage est à zéro et sa valeur de powerclick est à sa valeur de base
                // Lors du premier achat, la valeur du powercli général augmente, mais pas le powerclick du perso
                // Il n'augmentera qu'à partir du lvl 2 et pour tous les suivants

                if(persoLvl > 1 ) {

                    let powerclickPerso = Number(document.querySelector('#powerClickPerso-display').textContent);

                    powerclickPerso = powerclickPerso + perso.powerClick;

                    document.querySelector('#powerClickPerso-display').textContent = powerclickPerso;
                }
            } catch(e) {
                console.log(e.error || 'Impossible de récupérer les infos du personnage concernée');
            }

            if(persoLvl === 1) {

                const persoName = persoElem.querySelector('#perso-name-display').textContent;

                app.makeMysteryBoxPerso(idPerso, persoName);

            } 
            
        }

        
    },
}

document.addEventListener('DOMContentLoaded', app.init)