"use strict";

function Conditioner(name, state) {
  Device.call(this, name, state);
  this._temperature = 20;
}
Conditioner.prototype = Object.create(Device.prototype);
Conditioner.prototype.constructor = Conditioner;

Conditioner.prototype.getTemparature = function () {
  if ((this._state = true)) {
    return "Температура нагріву:" + " " + this._temperature + "С°";
  } else {
    return false;
  }
};

Conditioner.prototype.setTemperature = function (x, callback) {
  var data;
  var error;

  if (this._state == true && x >= 10 && x < 26) {
    this._temperature = x;

    data = "Температура нагріву:" + " " + x + "С°";
  } else if (this._state == false) {
    return false;
  } else {
    error = new Error("Не задовольняє діапазону температур");
  }
  setTimeout(
    function () {
      this._state = false;
      callback(error, data);
    }.bind(this),
    10000
  );
};
/*
Conditioner.prototype.setTemperatureOnPromise = function (x) {
  return new Promise(function (resolve, reject) {
    var data;
    var error;

    if (this._state == true && x >= 10 && x < 26) {
      this._temperature = x;

      data = "Температура нагріву:" + " " + x + "С°";
    } else if (this._state == false) {
      return false;
    } else {
      error = new Error("Не задовольняє діапазону температур");
    }
    setTimeout(
      function () {
        this._state = false;
        if (error) {
          reject(error);
        }
        resolve(data);
      }.bind(this),
      10000
    );
  });
};
*/

/*
let p = conditioner.setTemperatureOnPromise(17);
p.then(function (data) {
  console.log(data);
}).catch(function (error) {
  throw error;
});

async function start() {
  let data = await conditioner.setTemperatureOnPromise(17);
  return data;
}
*/
