new Promise(function (resolve, reject) {
    // Запитуємо у користувача number за допомогою prompt()
    // Якщо користувач ввів не число - викликаємо reject()
    // Якщо користувач ввів число- викликаємо resolve(number)
 }).catch(function (error) {
    return new Promise(function (resolve, reject) {
       // Запитуємо у користувача number, до тих пір, поки він його не введе
       // Після вводу числа - викликаємо resolve(number)
    });
 }).then(function (result) {
    // Вивід number у консоль
 });