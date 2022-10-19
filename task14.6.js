"use strict";
var someObject = {};

function isEmpty(obj) {
  for (var key in someObject) {
    return false;
  }
  return true;
}

isEmpty(someObject);
