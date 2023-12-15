const myArray = [1, 3, 4, 6, 8, 2, 4, 5, 8, 1, 11, 35];
let count = 0;
// console.log(myArray.length);
function linearSearch(array, item) {
  /**
   * поочередно проходим каждый елемент пока не найдем нужный
   */
  for (let index = 0; index < array.length; index++) {
    count += 1;
    if (array[index] === item) {
      return index;
    }
  }
  return null;
}

// console.log(linearSearch(myArray, 35));
// console.log(count);
/**
 * сложность такого алогоритма О от n где n это количество елементов в масиве O(n)
 */
