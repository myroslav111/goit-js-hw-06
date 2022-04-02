'use strict'

const refsContainer = document.querySelector('#counter')
const refsBtnDecr = document.querySelector('[data-action="decrement"]')
const refsBtnIncr = document.querySelector('[data-action="increment"]')
const refsValue = document.querySelector('#value')
let counterValue = 0

refsBtnDecr.addEventListener('click', onDecrementValues)
refsBtnIncr.addEventListener('click', onIncrementValue)

function onDecrementValues (event) {
    counterValue -= 1
    refsValue.textContent = counterValue
}

function onIncrementValue (event) {
    counterValue += 1
    refsValue.textContent = counterValue
}
