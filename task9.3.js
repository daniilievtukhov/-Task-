function sign(x) {
  if (x < 0) {
    return -1;
  }
  if (x == 0) {
    return 0;
  } else {
    return 1;
  }
}

res = sign(-50);

console.log(res);
