"use strict";

var arr = ["Tom", "Sam", "Bob"];
function arrLength(array) {
  return "<li>" + array + "</li>";
}

console.log(arr.map(arrLength)); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]
