"use strict";

class Square {
  constructor(a) {
    this.__a = a;
  }
  get side() {
    return this.__a;
  }

  set side(a) {
    this.__a = a;
  }
  per() {
    return this.__a * 4;
  }
}

class Cube extends Square {
  constructor(a) {
    super(a);
  }
  get side() {
    return this._a;
  }

  set side(a) {
    this._a = a;
  }

  per() {
    let res1 = super.per();
    return res1 * 6;

    //return Math.pow(this.__a, 2) * 6; //2 спосіб
  }
}
let sq1 = new Square(4);
console.log(sq1.per());

let cube1 = new Cube(4);
console.log(cube1.per());
