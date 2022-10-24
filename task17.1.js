"use strict";

function mul() {
  //var args = [].slice.call(arguments);
  var args = Array.from(arguments);
  var onlyNumbers = args.filter((element) => typeof element === "number");
  if (onlyNumbers.length == 0) {
    return 0;
  } else {
    var product = 1;
    for (i = 0; i < onlyNumbers.length; i++) {
      product *= onlyNumbers[i];
    }
    return product;
  }
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
