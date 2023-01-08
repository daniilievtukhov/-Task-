"use strict";

let mp3 = {
  _songs: [
    "",
    "Unholy",
    "I will survive",
    "Shcedryk",
    "Bloody Marry",
    "Калина",
    "Цей сон",
    "Птаха",
  ],

  get song() {
    return "Програється музика :" + " " + this._currentSong + " ";
  },

  set song(songNumber) {
    if (songNumber <= this._songs.length) {
      this._currentSong = this._songs[songNumber];
      return "Програється музика:" + " " + this._songs[songNumber];
    } else {
      return false;
    }
  },
  get volume() {
    return "Гучність :" + " " + this._currentVolume + " ";
  },
  set volume(volumeNumber) {
    if (volumeNumber <= 100 && volumeNumber >= 0) {
      this._currentVolume = volumeNumber;
      return "Гучність:" + " " + volumeNumber;
    } else {
      return false;
    }
  },
  nextSong() {
    this._idx = this._songs.indexOf(this._currentSong);
    for (let i = this._idx; i < this._songs.length; i++) {
      this._currentSong = this._songs[this._idx + 1];
      return "Ви переключилися на :" + " " + this._currentSong;
    }
  },

  prevSong() {
    this._idx = this._songs.indexOf(this._currentSong);
    for (var i = this._idx; i < this._songs.length; i++) {
      this._currentSong = this._songs[this._idx - 1];
      return "Ви переключилися на :" + " " + this._currentSong;
    }
  },
};
mp3.song = 3;
console.log(mp3.song);
mp3.nextSong();
console.log(mp3.song);
mp3.prevSong();
console.log(mp3.song);
mp3.volume = -10;
console.log(mp3.volume);
