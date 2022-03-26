'use strict'
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  const makeListIngridients = ingredients.map(element => {
    const listEl = document.createElement('li')
    listEl.classList.add('item') 
    listEl.textContent = element 
    
    return listEl
    })


  const ingridientsCommonList = document.querySelector('#ingredients')
  ingridientsCommonList.append(...makeListIngridients)
  console.log(ingridientsCommonList);
  

