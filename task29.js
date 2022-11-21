"use strict";
function random(min, max, delay, callback) {
  var error;
  var data;
  if (min < max) {
    data = Math.floor(Math.random() * (max - min) + min);
  } else if (min > max) {
    error = new Error("Ooops, went something wrong!");
  }
  setTimeout(function () {
    callback(error, data);
  }, delay);
}

random(13, 24, 2000, function (error, data) {
  console.log(data);
});

random(24, 13, 3000, function (error, data) {
  console.log(error);
});
