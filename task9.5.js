function digitN(n, k) {
  var length = (Math.log(n) * Math.LOG10E + 1) | 0;

  if (length < k) {
    return -1;
  } else {
    var n = n.toString();
    var str = n.split("").reverse().join(""); // split- розбирає строку на символи, reverse-переворачивает массив, join-собирает строку из массива
    return str[k];
  }
}

res = digitN(486729, 4);
console.log(res);
