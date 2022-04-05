function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refsObj = {
  ConteinerControls: document.querySelector('#controls'),
  input: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxResult: document.querySelector('#boxes'),
}  

  refsObj.btnCreate.addEventListener('click', onBtnCreateClick)
  refsObj.btnDestroy.addEventListener('click', onBtnDestroyClick)

  function onBtnCreateClick (event) {
    createBoxes()
  }
  
function createBoxes() {
const arrColectionDiv = []
  let widthEl = 30
  let heightEl = 30

for(let i = 0; i < Number(refsObj.input.value); i += 1){

  arrColectionDiv.push(`<div class="cube" style="width: ${widthEl}px; height: ${heightEl}px; background-color: ${getRandomHexColor()};"></div>`)
  widthEl += 10
  heightEl += 10
}

refsObj.boxResult.insertAdjacentHTML("afterbegin", arrColectionDiv.join(''))
  
}

function onBtnDestroyClick () {
  destroyBoxes()
}

function destroyBoxes(){
  refsObj.boxResult.innerHTML = ''
}


