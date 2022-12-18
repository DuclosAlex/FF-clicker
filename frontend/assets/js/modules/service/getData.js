import PersonnageBase from "../class/PersonnageBase.js";
import mysteryPersonnage from "../class/mysteryPersonnage.js";

const getData = {

    allPerso : [],


    getAllPerso : async function() {

        try {

            // Récupération des personnages depuis l'API
            const response = await fetch(`http://localhost:3000/personnageBase`);

            const allPersoBase= await response.json();

            for( let perso of allPersoBase) {

                perso = new PersonnageBase(perso);
                getData.allPerso.push(perso);
            }
            return getData.allPerso;
            
        }
        catch(e) {
            console.log(e)
            console.log('Failed');
        }
    },

    getNewPerso (currentPersoId) {

        const indexNewPerso = Number(currentPersoId);
        const newPerso = getData.allPerso[indexNewPerso];
        return newPerso;
    },

    getMysteryPerso (currentPersoId) {

        const indexMysteryPerso = Number(currentPersoId ) + 1;
        const mysteryPerso = new mysteryPersonnage(getData.allPerso[indexMysteryPerso], getData.allPerso[currentPersoId].name );
        return mysteryPerso;
    }
}

export default getData;