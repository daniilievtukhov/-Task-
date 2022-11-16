"use strict";

var date = new Date();
function addTwoDays(date) {
  return date.setHours(date.getHours() + 48);
}

addTwoDays(date);

//2 спосіб
var date_1 = new Date(2022, 11, 30, 14, 20, 22);

function addTwoDays1(date_1) {
  return date_1.setHours(date_1.getDays() + 2);
}

addTwoDays(date_1);
