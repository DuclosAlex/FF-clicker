import getData from "./getData.js"

const addInDOM = {

    addNewPersoAndMysteryPersoInDOM (currentPerso) {

        const newPerso = getData.getNewPerso(currentPerso.id);
        const newMysteryPerso = getData.getMysteryPerso(currentPerso.id);
        newPerso.addInDOM();
        newMysteryPerso.addInDOM();
    }
}

export default addInDOM;