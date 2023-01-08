"use strict";

function mul(...parameters) {
  parameters = parameters.filter(function (item) {
    return typeof item == "number";
  });

  if (parameters.length == 0) {
    return 0;
  }
  return parameters.reduce((acc, rec) => acc * rec);
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
