"use strict";

var str = "Login1 LOgin2 login3 loGin4";
var arr = [
  str.substr(0, 5).toLowerCase(),
  str.substr(6, 6).toLowerCase(),
  str.substr(13, 6).toLowerCase(),
  str.substr(20, 6).toLowerCase(),
];

var str1 = "Login1 LOgin2 login3 loGin4";

var arr1 = str1.toLowerCase().split(" ");
for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i].substr(0,arr[i].length-1)
}


console.log(a);
