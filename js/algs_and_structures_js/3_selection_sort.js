const arr = [2, 0, 6, 8];
let count = 0;

function selectionSort(array) {
  for (let index = 0; index < array.length; index++) {
    let indexMin = index;
    for (let j = index + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    let tmp = array[index];
    array[index] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

// console.log(selectionSort(arr));
// console.log(count);
