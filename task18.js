"use strict";

function CreateMp3(music) {
  this.music = music;
  this.status = "off";
  this.play = function () {
    this.status = "on";
    console.log("The music :" + this.music + " is:" + this.status);
  };
  this.pause = function () {
    this.status = "paused";
    console.log("The music :" + this.music + " is:" + this.status);
  };
  this.close = function () {
    this.status = "off";
    console.log("The music :" + this.music + " is:" + this.status);
  };
}

var mp3 = new CreateMp3("Up");
mp3.play();
mp3.pause();
mp3.close();
