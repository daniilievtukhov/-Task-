var arr = [];
for (var i = 0; i <= 2; i++) {
  arr[i] = (function (i) {
    return function () {
      return console.log(i);
    };
  })(i);
}

arr[0]();
arr[arr.length - 1]();
