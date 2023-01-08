"use strict";

function createPromiseRandom(min, max, delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (min >= max) {
        reject(new Error("Wrong!"));
      } else {
        resolve(Math.floor(Math.random() * (max - min) + min));
      }
    }, delay);
  });
}
let p1 = createPromiseRandom(1, 100, 2000);
p1.then(
  function (result) {
    console.log(result);
  },
  function (error) {
    console.log(error);
  }
);
let p2 = createPromiseRandom(1000, 100, 3000);
p2.then(
  function (result) {
    console.log(result);
  },
  function (error) {
    console.log(error);
  }
);
