const persoFonction = {

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
}

export default persoFonction;