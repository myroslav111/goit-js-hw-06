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

function recursiveBinerySearch(array, item, start, end) {
  let middle = Math.floor((start + end) / 2);
  //4
  //6
  //5
  count += 1;
  if (item === array[middle]) {
    return middle;
  }
  if (item < array[middle]) {
    return recursiveBinerySearch(array, item, start, middle - 1);
  } else {
    return recursiveBinerySearch(array, item, middle + 1, end);
  }
}

console.log(recursiveBinerySearch(myArray, 6, 0, myArray.length));
console.log(count);

/**
 *Сложность такого алгоритма О от log n2
 
 Давайте рассмотрим простой пример использования логарифмов. Предположим, у нас есть уравнение \(2^x = 8\), и мы хотим найти значение \(x\). Мы можем воспользоваться логарифмами для решения этого уравнения.

1. Начнем с записи уравнения: \(2^x = 8\).
2. Применим логарифм с основанием 2 к обеим сторонам уравнения: \(\log_2(2^x) = \log_2(8)\).
3. По свойству логарифмов, \(\log_2(2^x) = x\), так что у нас получится: \(x = \log_2(8)\).

Теперь мы можем вычислить значение логарифма. Поскольку \(2^3 = 8\), то \(\log_2(8) = 3\). Таким образом, решение уравнения \(2^x = 8\) - это \(x = 3\).

Это простой пример, который демонстрирует, как логарифмы могут быть использованы для нахождения неизвестных значений в степенных уравнениях.
 */
