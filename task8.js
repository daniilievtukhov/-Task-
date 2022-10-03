var arr = [];
arr.unshift(74);
arr.push("Dan");
arr.push(NaN !== NaN);
arr.push(null);

var amountOfElements = arr.length;
console.log(amountOfElements);

arr[4] = prompt("Введіть пʼятий елемент масиву");

alert(arr[4]);
