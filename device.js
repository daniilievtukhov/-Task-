"use strict";

function Device(name, state) {
  this._name = name;
  this._state = Boolean(state);
}

Device.prototype.getName = function () {
  return this._name;
};

Device.prototype.getState = function () {
  if (this._state == true) {
    return "Пристрій увімкнено";
  } else {
    return "Пристрій вимкнено";
  }
};

Device.prototype.on = function () {
  this._state = true;
};

Device.prototype.off = function () {
  this._state = false;
};
