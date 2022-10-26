"use strict";

function AudioPlayer(volume) {
  this.__volume = 0;
  if (this.__volumeValid(volume)) {
    this.__volume = volume;
  }
}
AudioPlayer.prototype.getVolume = function () {
  return `Volume:` + this.__volume;
};
AudioPlayer.prototype.setVolume = function (volume) {
  if (this.__volumeValid(volume)) {
    this.__volume = volume;
  }
};

AudioPlayer.prototype.__volumeValid = function (volume) {
  if (volume >= 0 && volume <= 100) {
    return volume;
  } else {
    return false;
  }
};

// Єдиний геттер-сеттер
AudioPlayer.prototype.volume = function (volume) {
  if (volume === undefined) {
    return `Volume:` + this.__volume;
  } else {
    if (this.__volumeValid(volume)) {
      this.__volume = volume;
    }
  }
};

var vol = new AudioPlayer(12);
console.log(vol.getVolume());

vol.setVolume(13);
console.log(vol.getVolume());

vol.setVolume(-13);
console.log(vol.getVolume());

vol.volume(34);
console.log(vol.volume());

vol.volume(135);
console.log(vol.volume());
