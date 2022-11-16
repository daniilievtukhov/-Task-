"use strict";

function deleteEvenNumbers(array) {
  var a = array.filter(function (number) {
    return number % 2 != 0;
  });
  return a;
}
var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]
