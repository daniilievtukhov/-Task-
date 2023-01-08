class Circle {
  constructor(name, radius, x_center, y_center) {
    this.__name = name;
    this.__radius = radius;
    this.__x_center = x_center;
    this.__y_center = y_center;
  }
  //статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу
  static st_length(radius) {
    if (radius > 0) {
      let length = 2 * Math.PI * radius;
      return length.toFixed(2);
    }
  }
  //статичний метод, який приймає координати центру коло, його радіус та повертає об'єкт кола із заданими параметрами;
  static circle_copy_param(name, radius, x_center, y_center) {
    let circle = new Circle(name, radius, x_center, y_center);

    return circle;
  }

  __length() {
    if (this.__radius > 0) {
      let length = 2 * Math.PI * this.__radius;
      return length.toFixed(2);
    }
  }
  //метод отримання об'єкта-кола, який повертає копію поточного об'єкта
  circle_copy() {
    const circle = new Circle(
      this.__name,
      this.__radius,
      this.__x_center,
      this.__y_center
    );
    const cloned = Object.assign({}, circle);
    return cloned;
  }
  //метод перетворення поточного стану об'єкта на символьний рядок
  toString() {
    const circle = new Circle(
      this.__name,
      this.__radius,
      this.__x_center,
      this.__y_center
    );
    const myJson = JSON.stringify(circle);
    return myJson;
  }
  hit(x, y) {
    if (
      Math.pow(x - this.__x_center, 2) + Math.pow(y - this.__y_center, 2) <=
      Math.pow(this.__radius, 2)
    ) {
      return "Точка попала";
    } else {
      return "Точка не попала";
    }
  }
}
let cir = new Circle("First", 2, 1, -4);
console.log(cir.__length());
console.log(cir);
console.log(cir.circle_copy());
console.log(cir.toString());
console.log(cir.hit(6, -1));
console.log(cir.hit(2, -4));

let cir2 = Circle.st_length(34);
console.log(cir2);

let cir3 = Circle.circle_copy_param("Third", 45, -3, 58);
console.log(cir3);
