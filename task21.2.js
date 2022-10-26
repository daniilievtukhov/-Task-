"use strict";

function Adder(firstNumber, secondNumber) {
  this.__firstNumber = firstNumber;
  this.__secondNumber = secondNumber;
  this.result = function () {
    return this.__calc(firstNumber, secondNumber);
  };
}
Adder.prototype.__calc = function (firstNumber, secondNumber) {
  return this.__firstNumber + this.__secondNumber;
};

Adder.prototype.__numberValid = function (firstNumber, secondNumber) {
  if (arguments[0] === Number && arguments[1] === Number) {
    return true;
  } else {
    return false;
  }
};

Adder.prototype.adder = function (firstNumber, secondNumber) {
  if (firstNumber === undefined && secondNumber === undefined) {
    return this.__firstNumber, this.__secondNumber;
  } else {
    if (this.__numberValid(firstNumber, secondNumber)) {
      (this.__firstNumber = firstNumber), (this.__secondNumber = secondNumber);
    }
  }
};

var sum = new Adder(12, 13);
console.log(sum.result());
