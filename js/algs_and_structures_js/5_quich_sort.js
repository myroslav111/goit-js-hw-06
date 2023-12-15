const arr = [2, 0, 6, 17];
let count = 0;

function quichSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let index = 0; index < array.length; index++) {
    count += 1;
    if (index === pivotIndex) continue;
    if (array[index] < pivot) {
      less.push(array[index]);
    } else {
      greater.push(array[index]);
    }
  }
  return [...quichSort(less), pivot, ...quichSort(greater)];
}

// console.log(quichSort(arr));
// console.log(count);
