'use strict'

const Refsform = document.querySelector('.login-form')
Refsform.addEventListener('submit', onFormSubmit)

function onContainerFormChangeCheckingInput (event) {
    const inputEmailTextContent = event.currentTarget.email
    const inputPassPassText = event.currentTarget.password

    if(inputEmailTextContent.value === '' || inputPassPassText.value === '') {
    
        return alert('all text fields must be filled')
    }

    const formData = new FormData(event.currentTarget)
    const formObj = {}
    formObj.email = event.currentTarget.email.value
    formObj.password = event.currentTarget.password.value
    console.log(formObj);
    event.currentTarget.reset();
}

function onFormSubmit (event) {
    event.preventDefault() 
    onContainerFormChangeCheckingInput(event)
}



