"use strict";
var salaries = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50,
};
function countMax(salaries) {
  var max = 0;

  for (var key in salaries) {
    if (salaries[key] > max) {
      max = salaries[key];
    }
  }
  return max;
}
var res = countMax(salaries);
console.log(res);
