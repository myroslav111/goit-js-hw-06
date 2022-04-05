function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
const refsObj = {
  ConteinerControls: document.querySelector('#controls'),
  input: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxResult: document.querySelector('#boxes'),
}  

  

  refsObj.input.addEventListener('input', onInputIn)
    
function onInputIn (event) {
  
  createBoxes()
}

function createBoxes() {

  let widthEl = 20
  let heightEl = 20
const arrColectionDiv = []
for(let i = 0; i < Number(refsObj.input.value); i += 1){
  widthEl += 10
  heightEl += 10
  arrColectionDiv.push(`<div class="cube" style="width: ${widthEl}px; height: ${heightEl}px; background-color: ${getRandomHexColor()};"></div>`)
}

refsObj.boxResult.insertAdjacentHTML("afterbegin", arrColectionDiv.join(''))
  
}



