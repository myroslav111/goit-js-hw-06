const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
let count = 0;

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let position = -1;
  let found = false;

  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);

    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

// console.log(binarySearch(myArray, 4));
// console.log(count);
