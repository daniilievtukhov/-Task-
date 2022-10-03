var arr = [];
for (var i = 0; i < 5; i++) {
  arr[i] = prompt("Додайте елемент масиву");
  if (arr[i] == "") {
    alert("Дякую!");
    break;
  }
}

var s = 0;
for (i = 0; i < arr.length; i++) {
  s += Number(arr[i]);
}

alert(s);
