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
  

  // const makeList = arr => 
  //   arr.map(el => {
  //     const itemOfList = document.createElement('li')
  //     itemOfList.classList.add('item')
  //     itemOfList.textContent = el
  //     const theMainTag = document.querySelector('#ingredients')


  //     return theMainTag.append(itemOfList)
  //   })
  
  //   console.log(makeList(ingredients));

