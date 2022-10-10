function count(a, b, operation) {
  if (a > 0 && b > 0 && a == Number(a) && b == Number(b)) {
    return operation(a, b);
  }
}
function perimeter(a, b) {
  return 2 * a + 2 * b;
}

function square(a, b) {
  return a * b;
}
var resPerimeter = count(12, 13, perimeter);
console.log(resPerimeter);

var resSquare = count(12, 13, square);
console.log(resSquare);
