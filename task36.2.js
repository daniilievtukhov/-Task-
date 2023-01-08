"use strict";

new Promise(function (resolve, reject) {
  let str = prompt("Number", "");
  let num = parseInt(str);
  if (typeof num == null) {
    reject(new Error("Try again!)"));
  } else {
    resolve("Number:" + num);
  }
})
  .catch(function (error) {
    console.log(error);
    return new Promise(function (resolve, reject) {
      let num2;
      do {
        num2 = prompt("Number", "");
      } while (num2 == null);

      resolve("Number:" + num2);

      // Запитуємо у користувача number, до тих пір, поки він його не введе
      // Після вводу числа - викликаємо resolve(number)
    });
  })
  .then(function (result) {
    console.log(result);
  });
