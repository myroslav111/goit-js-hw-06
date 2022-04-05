'use strict'

const refsInputRange = document.querySelector('#font-size-control')
const refsText = document.querySelector('#text')

refsInputRange.addEventListener('input', onInputClickRangeShadowing)


function onInputClickRangeShadowing (event) {

refsText.style.fontSize = event.currentTarget.value + 'px'
    
}

