'use strict'

const containerForm = document.querySelector('.login-form')
console.log(containerForm);
const submitBtn = document.querySelector('button')
console.log(submitBtn);

containerForm.addEventListener('submit', onCheckForm)

function onCheckForm (event) {
    console.log(event);
    event.currentTarget.preventDefault()
}
