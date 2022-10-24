"use strict";
var calculator = {
  num1: prompt("введіть перше число"),
  num2: prompt("введіть друге число"),
  read: function () {
    return 1 * this.num1, 1 * this.num2;
  },
  sum: function () {
    return this.num1 + this.num2;
  },
  mul: function () {
    return this.num1 * this.num2;
  },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
