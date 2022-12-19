

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

        try {

            const response = await fetch(`http://localhost:3000/users`, {

            method : 'POST',
            body : formDataObject

            });

            const newUser = await response.json();
            console.log(newUser);
        } catch(e) {
            console.log(e);
        }

    }


}

document.addEventListener('DOMContentLoaded', registerModule.addSubmitEvent);