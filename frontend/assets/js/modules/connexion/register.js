

const registerModule = {

    addSubmitEvent () {

        const registerFormElem = document.querySelector('form');
        console.log(registerFormElem)
        registerFormElem.addEventListener('submit', registerModule.handleAddUserForm);
        
    },

    handleAddUserForm(event) {

        event.preventDefault();

        const formElem = event.target;

        const formDataObject = new FormData(formElem);

    }


}

document.addEventListener('DOMContentLoaded', registerModule.addSubmitEvent);