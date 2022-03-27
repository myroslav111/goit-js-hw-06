'use strict'

// first option

// const needHtml = document.querySelector('#categories')
// const arrOfAllCategories = needHtml.querySelectorAll('.item')

// const arrOfTitleCategories = needHtml.querySelectorAll('h2')


// const discribeCategories = (arrOfCategories, arrOfTitlesName) =>{
  

//     return ` Number of categories: ${arrOfCategories.length}

//      Category: ${arrOfTitlesName[0].textContent}
//      Elements: ${arrOfCategories[0].querySelectorAll('li').length}
    
//      Category: ${arrOfTitlesName[1].textContent}
//      Elements: ${arrOfCategories[1].querySelectorAll('li').length}
    
//      Category: ${arrOfTitlesName[2].textContent}
//      Elements: ${arrOfCategories[2].querySelectorAll('li').length} `
// }
// console.log(discribeCategories(arrOfAllCategories, arrOfTitleCategories));



// second option

const listOfCategories = document.querySelector('#categories')


const discribingCategories = linkToCategories => {
    
   
   return   `Number of categories: ${linkToCategories.children.length}

    Category: ${(linkToCategories.querySelectorAll('h2'))[0].textContent}
    Elements: ${(linkToCategories.querySelectorAll('h2'))[0].nextElementSibling.children.length}
    
    Category: ${(linkToCategories.querySelectorAll('h2'))[1].textContent}
    Elements: ${(linkToCategories.querySelectorAll('h2'))[1].nextElementSibling.children.length}
    
    Category: ${(linkToCategories.querySelectorAll('h2'))[2].textContent}
    Elements: ${(linkToCategories.querySelectorAll('h2'))[2].nextElementSibling.children.length}` 
}
console.log(discribingCategories(listOfCategories));