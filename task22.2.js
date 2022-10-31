"use strict";

function Square(a) {
  this.__a = a;
}
Square.prototype.getSide = function () {
  return this.__a;
};

Square.prototype.setSide = function (a) {
  this.__a = a;
};
Square.prototype.per = function () {
  return this.__a * 4;
};

function Cube(a) {
  Square.call(this, a);
}

Cube.prototype = Object.create(Square.prototype);

Cube.prototype.constructor = Cube;

Cube.prototype.getSide = function () {
  return this._a;
};

Cube.prototype.setSide = function (a) {
  this._a = a;
};

Cube.prototype.per = function () {
  // Square.prototype.per.call(this);// другий спосіб
  return Math.pow(this.__a, 2) * 6;
};
var p = new Square(12);
console.log(p.per());
var p1 = new Cube(12);
console.log(p1.per());
