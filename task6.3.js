var arr = [];
var rand = Math.floor(Math.random() * 100) - 51;
for (var i = 0; i < 4; i++) {
  arr[i] = rand;
}
arr[Math.floor(Math.random() * 4)] = i;
console.log(arr);
if (arr[0] == arr[1]) {
  for (var i = 2; i < arr.length; i++) {
    if (arr[i - 1] != arr[i]) {
      console.log("Номер елементу: " + i);
      break;
    }
  }
} else if (arr[0] == arr[2]) {
  console.log("Номер елементу: " + 1);
} else if (arr[1] == arr[2]) {
  console.log("Номер елементу: " + 0);
}
