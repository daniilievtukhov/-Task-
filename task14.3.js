"use strict";
var tv = {
  currentChannel: 1,
  nextChannel: function () {
    return tv.currentChannel++;
  },
  previousChannel: function () {
    return tv.currentChannel--;
  },
  setChannel: function (number) {
    return "Ви переключилися на " + number + " -й канал";
  },
};
tv.setChannel(14);
