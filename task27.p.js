"use strict";

var per = (function () {
  var firstSide;
  var secondSide;
  function operation() {
    return firstSide * 2 + secondSide * 2;
  }
  return {
    setFirstSide: function (number) {
      if (number > 0) {
        firstSide = number;
      }
    },
    setSecondSide: function (number) {
      if (number > 0) {
        secondSide = number;
      }
    },
    operation: function () {
      return operation();
    },
  };
})();
