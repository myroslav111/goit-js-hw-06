'use strict'

const needHtml = document.querySelector('#categories')
const arrOfAllCategories = needHtml.querySelectorAll('.item')

const arrOfTitleCategories = needHtml.querySelectorAll('h2')


const discribeCategories = (arrOfCategories, arrOfTitlesName) =>{
  

    return ` Number of categories: ${arrOfCategories.length}

     Category: ${arrOfTitlesName[0].textContent}
     Elements: ${arrOfCategories[0].querySelectorAll('li').length}
    
     Category: ${arrOfTitlesName[1].textContent}
     Elements: ${arrOfCategories[1].querySelectorAll('li').length}
    
     Category: ${arrOfTitlesName[2].textContent}
     Elements: ${arrOfCategories[2].querySelectorAll('li').length} `
}
console.log(discribeCategories(arrOfAllCategories, arrOfTitleCategories));












// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5