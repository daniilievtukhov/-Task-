"use strict";

function Rectangle(x1, y1, x2, y2) {
  this.__x1 = x1;
  this.__y1 = y1;
  this.__x2 = x2;
  this.__y2 = y2;
  this.valueOf = function () {
    var a, b;
    this.__x2 > this.__x1
      ? (a = (this.__x2 - this.__x1) * 2)
      : (a = (this.__x1 - this.__x2) * 2);
    this.__y2 > this.__y1
      ? (b = (this.__y2 - this.__y1) * 2)
      : (b = (this.__y1 - this.__y2) * 2);
    return a + b;
  };

  this.toString = function () {
    return (
      "X1= " +
      this.__x1 +
      ",\n" +
      "Y1= " +
      this.__y1 +
      ",\n" +
      "X2= " +
      this.__x2 +
      ",\n" +
      "Y2= " +
      this.__y2 +
      ",\n"
    );
  };
}

console.log("Периметр=", Number(new Rectangle(1, 2, 12, 8).valueOf()));
console.log(String(new Rectangle(1, 2, 12, 8)));
