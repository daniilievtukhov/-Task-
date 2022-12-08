"use strict";

var sh = new House("myHome");
var lamp = new Lamp("Lamp1", false, 2);
sh.addDevice(lamp);
// ВЛАСТИВОСТІ Й ФУНКЦІІ ЛАМПИ
lamp.on();
lamp.getState();
console.log(lamp.getBrightness());
lamp.setBrightness(4);
console.log(lamp.getBrightness());
console.log(lamp.increseBrightness(2));
console.log(lamp.getBrightness());
console.log(lamp.decreseBrightness(4));
console.log(lamp.getBrightness());
lamp.off();
console.log(lamp.getState());
lamp.setBrightness(4);
console.log(lamp.getState());

var tv = new TV("TV1", false, 12);
sh.addDevice(tv);

// ВЛАСТИВОСТІ Й ФУНКЦІІ ТЕЛЕВІЗОРА
tv.getState();
console.log(tv.setChannel(8));
console.log(tv.getState());

console.log(tv.nextChannel());
console.log(tv.getVolume());
tv.setVolume(-56);
console.log(tv.getVolume());

console.log(tv.getChannel());
console.log(tv.nextChannel());
console.log(tv.nextChannel());
console.log(tv.getChannel());
console.log(tv.prevChannel());
console.log(tv.info());
console.log(tv.getName());

var conditioner = new Conditioner("Conditioner1", false);
sh.addDevice(conditioner);
// ВЛАСТИВОСТІ Й ФУНКЦІІ КОНДЕЦІОНЕРУ
conditioner.on();
conditioner.setTemperature(17, function (error, data) {
  if (error) {
    throw error;
  }
  console.log(data);
});
conditioner.getTemparature();

var vacuum = new Vacuum("Vacuum1", true, 9);
sh.addDevice(vacuum);
