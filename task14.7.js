"use strict";
var salaries = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50,
};
function isMean() {
  var values = Object.values(salaries); // отримаємо значення з об'єкту
  var sum = 0;
  for (var i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum / values.length;
}
var res = isMean();
console.log(res);
