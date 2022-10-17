"use strict";
function digitSum(k) {
  if (k == 0) {
    return 0;
  } else {
    return k + digitSum(k - 1);
  }
}

var res = digitSum(34);
console.log(res);
