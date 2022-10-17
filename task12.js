"use strict";
function format(data, type) {
  format = function () {
    if (type == "number") {
      return Number(data);
    }

    if (type == "boolean") {
      return Boolean(data);
    }
    if (type == "string") {
      return String(data);
    } else {
      type == undefined;
    }
  };
}

var originFormat = format;

format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"
