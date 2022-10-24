"use strict";
function createMp3(music) {
  return {
    music: music,
    status: "off",
    play: function () {
      this.status = "on";
      console.log("The music :" + this.music + " is:" + this.status);
    },
    pause: function () {
      this.status = "paused";
      console.log("The music :" + this.music + " is:" + this.status);
    },
    close: function () {
      this.status = "off";
      console.log("The music :" + this.music + " is:" + this.status);
    },
  };
}

var mp3 = createMp3("Up");
mp3.play();
mp3.pause();
mp3.close();
