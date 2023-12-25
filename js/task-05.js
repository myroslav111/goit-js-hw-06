'use strict';

// console.log(document.querySelector('body'));

const refsInput = document.querySelector('#name-input');
const refsNameOutput = document.querySelector('#name-output');
const nameOutputDefault = refsNameOutput.textContent;
refsInput.addEventListener('input', onInputEventInput);

function onInputEventInput(event) {
  refsNameOutput.textContent = event.currentTarget.value;
  if (refsInput.value === '')
    return (refsNameOutput.textContent = nameOutputDefault);
}
