"use strict";

function Figure(x1, y1, x2, y2) {
  this.__x1 = x1;
  this.__y1 = y1;
  this.__x2 = x2;
  this.__y2 = y2;
}
function Rectangle(x1, y1, x2, y2) {
  this.__x1 = x1;
  this.__y1 = y1;
  this.__x2 = x2;
  this.__y2 = y2;
  this.result = this.__rectangle();
  this.info = function () {
    return (
      "Координата точки А{" +
      this.__x1 +
      "," +
      this.__y1 +
      "}" +
      ". \n" +
      "Координата точки В{" +
      this.__x1 +
      "," +
      this.__y2 +
      "}.\n" +
      "Координата точки C{" +
      this.__x2 +
      "," +
      this.__y2 +
      "}.\n" +
      "Координата точки D{" +
      this.__x2 +
      "," +
      this.__y1 +
      "}.\n" +
      this.result
    );
  };
}
Rectangle.prototype = Object.create(Figure.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getNumbers = function () {
  return this.__x1, this.__y1, this.__x2, this.__y2;
};
Rectangle.prototype.setNumbers = function (x1, y1, x2, y2) {
  this.__x1 = x1;
  this.__y1 = y1;
  this.__x2 = x2;
  this.__y2 = y2;
};

Rectangle.prototype.__rectangle = function () {
  var ad, ab;
  this.__x2 > this.__x1
    ? (ad = (this.__x2 - this.__x1) / 2)
    : (ad = (this.__x1 - this.__x2) / 2);
  this.__y2 > this.__y1
    ? (ab = (this.__y2 - this.__y1) / 2)
    : (ab = (this.__y1 - this.__y2) / 2);
  return "Центр має координати: Х=" + ad + " " + "Y=" + ab;
};

function Circle(x1, y1, radius, x_center) {
  this.__x1 = x1;
  this.__y1 = y1;
  this.__radius = radius;
  this.__x_center = x_center;
  this.result2 = this.__circle();
  this.info = function () {
    return (
      "Точка А, яка знаходиться на колі, має координати {" +
      this.__x1 +
      "," +
      this.__y1 +
      "}" +
      ". \n" +
      "Радіус кола:" +
      this.__radius +
      ".\n" +
      this.result2 +
      "}"
    );
  };
}
Circle.prototype = Object.create(Figure.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getCenter = function () {
  return this.__radius, this.__x_center;
};

Circle.prototype.setCenter = function (x1, y1, radius, x_center) {
  this.__x1 = x1;
  this.__y1 = y1;
  this.__radius = radius;
  this.__x_center = x_center;
};
Circle.prototype.__circle = function () {
  var o;
  if (
    this.__x_center >= 0 &&
    this.__x1 >= 0 &&
    this.__y1 >= 0 &&
    this.__radius >= 0
  ) {
    o = Math.sqrt(
      Math.pow(this.__radius, 2) -
        Math.pow(this.__x1 - this.__x_center, 2) +
        this.__y1
    );
    return "Центр O має координати: Х=" + this.__x_center + " " + "Y=" + o;
  } else {
    return false;
  }
};

var res = new Rectangle(1, 2, 12, 8);
console.log(res.info());

var res = new Circle(12, 34, 17, 2);
console.log(res.info());
