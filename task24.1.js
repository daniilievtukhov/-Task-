"use strict";

var str = "Login1 LOgin2 login3 loGin4";
var arr = str.toLowerCase().split(" ");
for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i].substr(0, arr[i].length - 1);
}

console.log(arr);
