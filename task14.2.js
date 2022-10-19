"use strict";

//спрощений
var car = {
  model: "Mercedes Benz ML-250",
  speed: 210,
  run: function () {
    console.log(car.model + " їде зі швидкістю " + car.speed);
  },
  stop: function () {
    console.log(car.model + " зупинилася");
  },
};

car.run();
car.stop();

// синтаксис масивів
/*
var car = {};
car["model"] = "Mercedes Benz ML-250";
car["speed"] = 210;
car["run"] = function () {
  console.log(car.model + " їде зі швидкістю " + car.speed);
};
car["stop"] = function () {
  console.log(car.model + " зупинилася");
};
car.run();
car.stop();
*/

//стандартний
/*
var car = {};
car.model = "Mercedes Benz ML-250";
car.speed = 210;
car.run = function () {
  console.log(car.model + " їде зі швидкістю " + car.speed);
};
car.stop = function () {
  console.log(car.model + " зупинилася");
};
car.run();
car.stop();
*/
