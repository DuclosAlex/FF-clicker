const persoFonction = {

    lvlUpPersonnage : async function () {

        const persoElem = document.querySelector('.perso-article');

        const idPerso = Number(persoElem.getAttribute('data-id'));

        const displayLevelElem = document.querySelector('#lvl-display');

        let persoLvl = Number(displayLevelElem.textContent);

        let costLevelUp = Number(document.querySelector('#cost-display').textContent);

        if(costLevelUp > app.xp) {
            alert("Vous n'avez pas suffisament d'XP");
        } else {

            persoLvl += 1;
            displayLevelElem.textContent = persoLvl;
            app.xp = app.xp - costLevelUp; 
            document.querySelector('#xp-amount').textContent = app.xp;

            try {

                
                const response = await fetch(`http://localhost:3000/personnage_base/${idPerso}`);
                
                const perso = await response.json();
                
                console.log(perso);

                // Augmentation du coût du personnage en l'arrondissant

                costLevelUp = Math.round(costLevelUp * perso.growthRate);

                document.querySelector('#cost-display').textContent = costLevelUp;

                // Augmentation du powerclick général

                app.powerclick = app.powerclick + perso.powerClick;

                document.querySelector('#powerclick_amount').textContent = app.powerclick;

                if(persoLvl > 1 ) {

                    let powerclickPerso = Number(document.querySelector('#powerClickPerso-display').textContent);

                    powerclickPerso = powerclickPerso + perso.powerClick;

                    document.querySelector('#powerClickPerso-display').textContent = powerclickPerso;
                }



            } catch(e) {
                console.log(e.error || 'Failed');
            }
            
        }

        
    },
}

module.exports = persoFonction;