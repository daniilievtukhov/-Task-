// TASK 1
var a = 4;
function square(a) {
  res = Math.pow(a, 2);
  /*
    or
  res = a * a;
  */

  return res;
}
square(a);

console.log(res);

// TASK 2
var n = 41;

console.log("Десятки:", Math.trunc(n / 10));

console.log("Одиниці:", n % 10);
