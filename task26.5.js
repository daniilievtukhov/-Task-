"use strict";

function matrixToArray(matrix) {
  var matrix = arr.reduce(function (accumulator, currentValue) {
    return accumulator.concat(currentValue);
  });
  return matrix;
}
var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
