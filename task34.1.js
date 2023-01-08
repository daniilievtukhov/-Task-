"use strict";

let tv = {
  _channels: [
    "",
    "1+1",
    "ТЕТ",
    "Новий Канал",
    "Інтер",
    "Україна",
    "СТБ",
    "ICTV",
    "Mega",
    "Jetix",
    "Animal Planet",
    "K1",
    "K2",
  ],
  get channel() {
    return "Ви на канаі :" + " " + this._currentChannel + " ";
  },

  set channel(channelNumber) {
    if (channelNumber <= this._channels.length) {
      this._currentChannel = this._channels[channelNumber];
      return "Ви на каналі:" + " " + this._channels[channelNumber];
    } else {
      return false;
    }
  },
  nextChannel() {
    this._idx = this._channels.indexOf(this._currentChannel);
    for (let i = this._idx; i < this._channels.length; i++) {
      this._currentChannel = this._channels[this._idx + 1];
      return "Ви переключилися на канал:" + " " + this._currentChannel;
    }
  },

  prevChannel() {
    this._idx = this._channels.indexOf(this._currentChannel);
    for (var i = this._idx; i < this._channels.length; i++) {
      this._currentChannel = this._channels[this._idx - 1];
      return "Ви переключилися на канал:" + " " + this._currentChannel;
    }
  },
};
tv.channel = 8;
console.log(tv.channel);
tv.nextChannel();
console.log(tv.channel);
tv.prevChannel();
console.log(tv.channel);
