"use strict";

Array.prototype.sortDesc = function () {
  arr.sort(function (a, b) {
    return b - a;
  });
};

var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr);
