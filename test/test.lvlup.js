import PersonnageBase from '../frontend/assets/js/modules/class/PersonnageBase.js';

let xp = 10;

document.querySelector('#display-xp').textContent = xp;

async function callData() {

    try {
        // Récupération des personnages depuis l'API
        const response = await fetch(`http://localhost:3000/personnage_base/1`);

        const perso_base = await response.json();

        return perso_base;

    } catch(e) {
        console.log(e);
    }

}
function increaseXP (xp) {

    console.log(xp);
    xp = xp + 5;
    document.querySelector('#display-xp').textContent = xp;
    console.log(xp);
    return xp;

}

console.log('coucou');
const perso = await callData();

console.log(perso);

let cloud = new PersonnageBase(perso);

console.log(cloud);

console.log(cloud.lvl);

const body = document.querySelector('body');


body.appendChild(cloud);

function lvlUpAndIncreaseXP() {

    cloud.levelUp();
    xp = increaseXP(xp);

}

const button = document.querySelector('#addLevelAndXP');

console.log(button);

button.addEventListener('click', lvlUpAndIncreaseXP);
