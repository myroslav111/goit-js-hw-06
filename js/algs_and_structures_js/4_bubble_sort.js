const arr = [2, 0, 6, 8];
let count = 0;

function bubbleSort(array) {
  for (let index = 0; index < array.length; index++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count += 1;
    }
  }
  return array;
}

// console.log(bubbleSort(arr));
// console.log(count); //O(n*n)
// console.log(arr.length);

/**
 *Сложность такого алгоритма О от n^2
 */
