var a = 20;
var b = 68;
console.log(a, b);
tempArr = [];
for (var j = 0; j < b - a + 1; j++) {
  tempArr[j] = a + j;
}
var j = 0;
for (var i = 0; i < tempArr.length; i++) {
  for (var j = 0; j < i + 1; j++) {
    console.log(tempArr[i]);
  }
}
