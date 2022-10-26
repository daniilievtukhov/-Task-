"use strict";

var user = {
  name: "Tom",
  age: 20,
};

function func() {
  console.log(this.name + " - " + this.age);
}

function bind(func, context) {
  return function () {
    return func.call(context);
  };
}
var f = bind(func, user);
f(); // "Tom – 20"
