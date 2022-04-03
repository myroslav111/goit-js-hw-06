'use strict'

const refsInputRange = document.querySelector('#font-size-control')
const refsText = document.querySelector('#text')

refsInputRange.addEventListener('click', onInputClickRangeShadowing)

function onInputClickRangeShadowing (event) {
    const unitOfSize = 'px'
    refsText.style.fontSize = event.currentTarget.value + unitOfSize
}

