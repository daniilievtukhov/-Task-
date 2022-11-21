"use strict";

function sumSliceArray(arr, first, second) {
  if (first > arr.length || second > arr.length) {
    throw new Error(" Індекси більші за значення масиву");
  }
  if (typeof first != "number" || typeof second != "number") {
    throw new Error(" Індекси не відповідають числу");
  }
  if (Math.sign(first) == -1 || Math.sign(second) == -1) {
    throw new Error(" Індекси менші за значення масиву");
  }

  return arr[first] + arr[second];
}

sumSliceArray([12, 34, 56, 12], 1, 2);
sumSliceArray([12, 34, 56, 12], "sldkfn", 2);
sumSliceArray([12, 34, 56, 12], 11, 2);
