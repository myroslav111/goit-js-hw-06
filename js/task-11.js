'use strict';

const btnEl = document.querySelector('.btn');
const inputEl = document.querySelector('input');
const copyIconEl = document.querySelector('.fa-copy');
const alertContentEl = document.querySelector('.alert-content');
const alertEl = document.querySelector('.alert');

btnEl.addEventListener('click', () => {
  createPassword();
});

copyIconEl.addEventListener('click', () => {
  if (inputEl.value) {
    copyPassword();
    alertEl.classList.remove('active');
    setTimeout(() => {
      alertEl.classList.add('active');
    }, 2000);
  }
});

function createPassword() {
  const chars =
    '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const passwordLenght = 8;
  let password = '';
  for (let index = 0; index < passwordLenght; index++) {
    const randomNum = Math.random() * chars.length;
    /**
     *The substring method in JavaScript is used to extract a portion of a string.
      It takes two arguments: the starting index (inclusive) and
       the ending index (exclusive) of the substring. 
     */
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
  alertContentEl.innerText = password + ' copied!';
}

function copyPassword(e) {
  //Select content in input
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  /**Код navigator.clipboard.writeText(inputEl.value); 
   * использует API браузера для записи текста в буфер обмена (clipboard).
navigator - это объект веб-браузера, предоставляющий информацию о браузере пользователя.
clipboard - это свойство объекта navigator, предоставляющее доступ к API буфера обмена браузера.
writeText - это метод API буфера обмена, который используется для записи текста в буфер обмена.
inputEl.value - это значение текстового поля (<input>), которое вы хотите скопировать в буфер обмена. */
  navigator.clipboard.writeText(inputEl.value);
}
