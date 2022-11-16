"use strict";

var values = [];
while (true) {
  var input = prompt("Введіть щось:");

  if (input === null || input.trim() === "") {
    continue;
  }
  if (input.trim() === "end") {
    break;
  }

  values.push(input);
}

function maxLength(arr) {
  var max = arr[0].length;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i - 1].length < arr[i].length) {
      max = arr[i].length;
    }
  }
  return max;
}

var str = (function (arr) {
  var result = "";
  var max = maxLength(values);
  var tmpIndex = 0;
  for (var i = 0; i <= arr.length; i++) {
    for (var j = 0; j < max * 2 + 34; j++) {
      if (
        j == 0 ||
        j == max * 2 + 34 - 1 ||
        j == Math.floor((max * 2 + 23) / 2)
      ) {
        result += "+";
        if (j == max * 2 + 34 - 1 && i != arr.length) {
          result += "\n\n";
          tmpIndex = result.length;
        }
        continue;
      }
      result += "-";
    }

    if (i == arr.length) {
      break;
    }

    for (var k = 0; k < max * 2 + 34; k++) {
      if (
        k == 0 ||
        k == max * 2 + 34 - 1 ||
        k == Math.floor((max * 2 + 23) / 2)
      ) {
        result += "|";
        if (k == max * 2 + 34 - 1) {
          result += "\n\n";
        }
        continue;
      }
      result += " ";
    }

    result =
      result.substring(
        0,
        tmpIndex +
          Math.floor((max * 2 + 23) / 4) -
          Math.floor(arr[i].length / 2) +
          1
      ) +
      arr[i] +
      result.substring(
        tmpIndex +
          Math.floor((max * 2 + 23) / 4) -
          Math.floor(arr[i].length / 2) +
          1 +
          arr[i].length
      );
    tmpIndex += Math.floor((max * 2 + 23) / 2);

    if (!isNaN(Number(arr[i])) && isFinite(Number(arr[i]))) {
      result =
        result.substring(
          0,
          tmpIndex + 5 + max / 2 + 6 - 4 - Math.floor(arr[i].length / 2) + 1
        ) +
        "Numbers:" +
        arr[i] +
        result.substring(
          tmpIndex +
            5 +
            max / 2 +
            6 -
            4 +
            8 -
            Math.floor(arr[i].length / 2) +
            arr[i].length +
            1
        );
    } else {
      result =
        result.substring(
          0,
          tmpIndex + 5 + max / 2 - Math.floor(arr[i].length / 2) + 1
        ) +
        "No numbers:" +
        arr[i] +
        result.substring(
          tmpIndex +
            5 +
            max / 2 +
            11 -
            Math.floor(arr[i].length / 2) +
            arr[i].length +
            1
        );
    }
  }
  return result;
})(values);

console.log(str);
