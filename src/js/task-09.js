function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refsBody =  window.document.body
const refsVidgetContainer = document.querySelector('.widget')
const refsColorName = document.querySelector('.color')
const refsButton = document.querySelector('.change-color')
console.log(refsBody.style.backgroundColor);

refsButton.addEventListener('click', onClickBtnChangeColor)

function onClickBtnChangeColor(event) {

  refsColorName.textContent = getRandomHexColor()
  refsBody.style.backgroundColor = refsColorName.textContent
}