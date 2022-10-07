function calc(a, b, op) {
  if (op == 1) {
    return a - b;
  }
  if (op == 2) {
    return a * b;
  }
  if (op == 3) {
    return a / b;
  } else {
    return a + b;
  }
}
res = calc(12, 14, 1);
console.log(res);
