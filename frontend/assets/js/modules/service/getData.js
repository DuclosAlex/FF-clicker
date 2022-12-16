import PersonnageBase from "../class/PersonnageBase.js";

const getData = {

    allPerso : [],


    getAllPerso : async function() {

        try {

            // Récupération des personnages depuis l'API
            const response = await fetch(`http://localhost:3000/personnage_base`);

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
}

export default getData;