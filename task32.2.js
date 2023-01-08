"use strict";

let calc = {
  x: 2,
  y: 3,
  mul: function () {
    let operation = () => console.log(this.x * this.y);
    operation();
  },
};

setTimeout(function () {
  calc.mul();
}, 2000); // 6, через 2 секунди
