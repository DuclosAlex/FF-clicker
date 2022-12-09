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

            // Créer le premier personnage

            app.makePersoInDom(perso_base);

            // Créer le premier personnage surprise
            
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

    // Sert à ajouter un nouveau personnage dans la liste de ceux disponibles à l'achat

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

    // Sert à dévoiler le prochain personnage qu'il est possible d'obtenir

    makeNextPersoToBuyInDOM : async function(idPreviousPerso) {

        const idNextPerso = idPreviousPerso +1;

        try {
             
            const response = await fetch(`http://localhost:3000/personnage_base/${idNextPerso}`);
            
            const nextPerso = await response.json();

            const persoSectionElem = document.querySelector('.right-section');

            const templatePersoElem = document.querySelector('#perso-article');

            const cloneTemplatePersoElem = templatePersoElem.content.cloneNode(true);

            cloneTemplatePersoElem.querySelector('.perso-name').textContent = nextPerso.name;

            cloneTemplatePersoElem.querySelector('#lvl-display').textContent = nextPerso.lvl;

            cloneTemplatePersoElem.querySelector('#cost-display').textContent = nextPerso.cost;

            cloneTemplatePersoElem.querySelector('#powerClickPerso-display').textContent = nextPerso.powerClick;

            cloneTemplatePersoElem.querySelector('#autoClickParagraph').textContent = `Cout en XP : ${nextPerso.autoClickCost}`;

            cloneTemplatePersoElem.querySelector('.perso-img').setAttribute('src', `.${nextPerso.images}`);

            cloneTemplatePersoElem.querySelector('.perso-article').setAttribute('data-id', `${nextPerso.id}` )

            const addLevelButtonElem = cloneTemplatePersoElem.querySelector('#addLevelButton');

            addLevelButtonElem.addEventListener("click", app.lvlUpPersonnage)

            if(app.xp > nextPerso.cost) {

                addLevelButtonElem.classList.add('zIndex');
                addLevelButtonElem.setAttribute('can-buy', true);
            }

            persoSectionElem.appendChild(cloneTemplatePersoElem);

            app.makeMysteryBoxPerso(idNextPerso, nextPerso.name);

        } catch(e) {
            console.log(e);
            console.log('Impossible de récupérer le prochain personnage')
        }
    },

    // Sert à ajouter une box mystère qui tease le prochain personnage

    makeMysteryBoxPerso: async function(idPreviousPerso, PreviousPersoName) {

        const idNextPerso = idPreviousPerso +1;

        try {
             
            const response = await fetch(`http://localhost:3000/personnage_base/${idNextPerso}`);
            
            const nextPerso = await response.json();

            const persoSectionElem = document.querySelector('.right-section');

            const templateMysteryPersoElem = document.querySelector('#perso-article-mystery');

            const cloneTemplateMysteryPersoElem = templateMysteryPersoElem.content.cloneNode(true);

            cloneTemplateMysteryPersoElem.querySelector('#UnlockingPersoName').textContent = PreviousPersoName;

            cloneTemplateMysteryPersoElem.querySelector('#perso-img-mystery').setAttribute('src', `.${nextPerso.game_logo_img}`);

            cloneTemplateMysteryPersoElem.querySelector('#quotes').textContent = nextPerso.quotes;

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

        allPersoElem.forEach(
            function(currentValue) {

                const lvlUpButtonElem = currentValue.querySelector('#addLevelButton');
                const costLvlUpPerso = Number(currentValue.querySelector('#cost-display').textContent);
                let canBuy = lvlUpButtonElem.getAttribute('can-buy');

                if(costLvlUpPerso <= app.xp ) {
                    const persoLvl = Number(currentValue.querySelector('#lvl-display').textContent)

                    if(persoLvl === 0) {
                        lvlUpButtonElem.classList.add('zIndex');
                        lvlUpButtonElem.setAttribute('can-buy', true);
                        const disableButtonElem = currentValue.querySelector('.disableButtonLvlUp');
                        if(disableButtonElem) {
                            console.log("je passe")
                            disableButtonElem.remove();
                        }

                        
                    }
                    else if( canBuy === "false"){
                        const disableButtonElem = lvlUpButtonElem.querySelector('.disableButtonLvlUp');
                        disableButtonElem.remove();
                        lvlUpButtonElem.setAttribute('can-buy', true);
                    }
                }

                if(costLvlUpPerso >= app.xp && canBuy === "true") {

                    const disableButtonElem = document.createElement('div');
                    disableButtonElem.classList.add('disableButtonLvlUp');
                    currentValue.querySelector('#addLevelButton').appendChild(disableButtonElem);
                    currentValue.querySelector('#addLevelButton').setAttribute('can-buy', false);
                }
            }
        )
    },

    lvlUpPersonnage : async function (event) {

        // Récupération du block contenant le personnage

        const persoElem = event.target.closest('.perso-article');

        // Récupération de l'id du personnage 
        
        let idPerso = Number(persoElem.getAttribute('data-id'));

        const displayLevelElem = persoElem.querySelector('#lvl-display');

        // Récupération du lvl du personnage

        let persoLvl = Number(displayLevelElem.textContent);

        // Récupération du coût d'achat du personnage

        let costLevelUp = Number(persoElem.querySelector('#cost-display').textContent);

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

            if(persoLvl === 1) {

                persoElem.querySelector('#addLevelButton').classList.remove('zIndex');

                const notBuyPersoElem = persoElem.querySelector('#notBuyPerso');

                notBuyPersoElem.remove();

                const mysteryPersoElem = document.querySelector('.perso-article-mystery');

                if(mysteryPersoElem) {

                    mysteryPersoElem.remove();
                }

                app.makeNextPersoToBuyInDOM(idPerso);
            }

            try {
                // On récupère en BDD les valeur de base du personnage
                
                const response = await fetch(`http://localhost:3000/personnage_base/${idPerso}`);
                
                const perso = await response.json();


                // Augmentation du coût du personnage en l'arrondissant

                costLevelUp = Math.round(costLevelUp * perso.growthRate);

                persoElem.querySelector('#cost-display').textContent = costLevelUp;
    
                // Si après l'achat, le nouveau total d'xp est inférieur au nouveau coût d'achat des perso
                // ON recrée la div contenant l'effet désactivée du boutton d'achat et on le rajoute
                
                const allPersoElem = document.querySelectorAll('.perso-article');
                
                allPersoElem.forEach(
                    function(currentValue) {

                        const costLvlUpPerso = Number(currentValue.querySelector('#cost-display').textContent);

                            if(costLvlUpPerso > app.xp) {
            
                            const lvlUpButtonElem = currentValue.querySelector('#addLevelButton');
                            let canBuy = lvlUpButtonElem.getAttribute('can-buy');
                            const lvlPerso = Number(currentValue.querySelector('#lvl-display').textContent);

                            if( canBuy === "true") {
                                
                                if(lvlPerso === 0) {

                                    currentValue.querySelector('#addLevelButton').classList.remove('zIndex');
                                    currentValue.querySelector('#addLevelButton').setAttribute('can-buy', false);
                                }

                                const disableButtonElem = document.createElement('div');
                                disableButtonElem.classList.add('disableButtonLvlUp');
                                currentValue.querySelector('#addLevelButton').appendChild(disableButtonElem);
                                currentValue.querySelector('#addLevelButton').setAttribute('can-buy', false);

                            }
                            
                        }
                    }
                    
                )
                // Augmentation du powerclick général

                app.powerclick = app.powerclick + perso.powerClick;

                document.querySelector('#powerclick_amount').textContent = app.powerclick;

                // Au départ le niveau du personnage est à zéro et sa valeur de powerclick est à sa valeur de base
                // Lors du premier achat, la valeur du powercli général augmente, mais pas le powerclick du perso
                // Il n'augmentera qu'à partir du lvl 2 et pour tous les suivants

                if(persoLvl > 1 ) {

                    let powerclickPerso = Number(persoElem.querySelector('#powerClickPerso-display').textContent);

                    powerclickPerso = powerclickPerso + perso.powerClick;

                    persoElem.querySelector('#powerClickPerso-display').textContent = powerclickPerso;
                }
            } catch(e) {
                console.log(e.error || 'Impossible de récupérer les infos du personnage concernée');
            }            
        }        
    },
}

document.addEventListener('DOMContentLoaded', app.init)