'use strict';

const refsInput = document.querySelector('input');

refsInput.addEventListener('input', onInputUpdatingdInput);
refsInput.addEventListener('blur', onInputVerifyDataInputBlur);

function onInputUpdatingdInput(event) {
  event.currentTarget.textContent = event.currentTarget.value;
}

function onInputVerifyDataInputBlur(event) {
  const dataLengthValue = Number(refsInput.getAttribute('data-length'));

  if (
    event.currentTarget.classList.contains('invalid') &&
    event.currentTarget.textContent.length === dataLengthValue
  ) {
    event.currentTarget.classList.replace('invalid', 'valid');
  } else if (
    event.currentTarget.classList.contains('valid') &&
    event.currentTarget.textContent.length !== dataLengthValue
  ) {
    event.currentTarget.classList.replace('valid', 'invalid');
  } else {
    event.currentTarget.textContent.length === dataLengthValue
      ? event.currentTarget.classList.add('valid')
      : event.currentTarget.classList.add('invalid');
  }
}
