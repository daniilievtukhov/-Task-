"use strict";

function House(name) {
  this._name = name;
  this._devices = [];
}

House.prototype.getName = function () {
  return this._name;
};

House.prototype.addDevice = function (device) {
  this._devices.push(device);
};
House.prototype.getDevices = function () {
  return this._devices;
};
House.prototype.getDeviceByName = function (name) {
  for (var i = 0; i < this._devices.length; i++) {
    if (this._devices[i]._name == name) {
      return this._devices[i];
    }
  }
  return "Приладів не знайдено :(";
};

House.prototype.deleteDeviceByName = function (name) {
  for (var i = 0; i < this._devices.length; i++) {
    if (this._devices[i]._name == name) {
      delete this._devices[i];
      return "Прилад успішно видалений";
    }
  }
  return "Приладів не знайдено :(";
};
House.prototype.offAllDevices = function () {
  for (var i = 0; i < this._devices.length; i++) {
    this._devices[i]._state = false;
  }
};

House.prototype.delayedOff = function (name, delay, callback) {
  var error;
  var data;
  for (var i = 0; i < this._devices.length; i++) {
    if (this._devices[i]._name == name) {
      data = this._devices[i];
      this._devices[i]._state = false;
    } else {
      error = new Error("Ooops, went something wrong!");
    }
    setTimeout(
      function () {
        callback(error, data);
      }.bind(this),
      delay
    );
  }
};

/*
house.addDevice(new Lamp("Lam2", true, 2));

house.delayedOff("Lam2", 10000, function (error, data) {
  if (error) {
    throw error;
  }
  console.log(data);
});
*/
