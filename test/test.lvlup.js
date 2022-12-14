import PersonnageBase from '../frontend/assets/js/modules/class/PersonnageBase.js';
import User from '../frontend/assets/js/modules/class/User.js';
import Inventory from '../frontend/assets/js/modules/class/Inventory.js';

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

async function callUser() {

    try {
        // Récupération des personnages depuis l'API
        const response = await fetch(`http://localhost:3000/user/1`);

        const user = await response.json();

        console.log(user)

        return user;

    } catch(e) {
        console.log(e);
    }

}

const perso = await callData();
const user = await callUser();

let cloud = new PersonnageBase(perso);

let alex = new User(user);

let inventory = new Inventory(user);

console.log(inventory);

console.log(alex);

const body = document.querySelector('body');

body.appendChild(cloud);

function lvlUpAndIncreaseXP() {

    cloud.levelUp();  
    alex.xpIncrease();
    document.querySelector('#display-xp').textContent = alex.xp;  

}

const button = document.querySelector('#addLevelAndXP');



console.log(button);

button.addEventListener('click', lvlUpAndIncreaseXP);
