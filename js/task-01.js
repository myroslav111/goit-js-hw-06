'use strict'

const arrOfAllCategories = document.querySelectorAll('.item')

const discribeCategories = (arrOfCategories) =>{

    console.log(`Number of categories: ${arrOfCategories.length}`);
    arrOfAllCategories.forEach(categorie => {
        
        console.log( `    Category: ${categorie.firstElementChild.textContent}
    Elements: ${categorie.querySelectorAll('li').length}`);

    }) 
}
discribeCategories(arrOfAllCategories)

