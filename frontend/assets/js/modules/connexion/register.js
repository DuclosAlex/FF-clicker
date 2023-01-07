
const registerModule = {

    addSubmitEvent () {

        const registerFormElem = document.querySelector('form');
        console.log(registerFormElem)
        registerFormElem.addEventListener('submit', registerModule.handleAddUserForm);
        
    },

    async handleAddUserForm(event) {

        event.preventDefault();

        const formElem = event.target;

        const formDataObject = new FormData(formElem);

        console.log(...formDataObject);

        try {

            const response = await fetch(`http://localhost:3000/users/register`, {
                method : 'POST',
                body : formDataObject

            });

            if(!response.ok) throw new Error(response);

            console.log("l'Utilisateur à été crée")
            const createdUser = await response.json();
            console.log(createdUser);

        } catch(e) {
            console.log(e);
        }

    }


}

document.addEventListener('DOMContentLoaded', registerModule.addSubmitEvent);