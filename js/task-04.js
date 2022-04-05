'use strict'

const refsContainer = document.querySelector('#counter')
const refsBtnDecr = document.querySelector('[data-action="decrement"]')
const refsBtnIncr = document.querySelector('[data-action="increment"]')
const refsValue = document.querySelector('#value')
let counterValue = 0

refsBtnDecr.addEventListener('click', onBtnDecrementClick)
refsBtnIncr.addEventListener('click', onBtnIncrementClick)

function onBtnDecrementClick (event) {
    counterValue -= 1
    refsValue.textContent = counterValue
}

function onBtnIncrementClick (event) {
    counterValue += 1
    refsValue.textContent = counterValue
}
