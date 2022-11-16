var arr = ["JavaScript", "Python"];
console.log(arr);

arr.push("Java");
console.log(arr);

arr.splice(arr.length - 2, 1, "Kotlin");
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(0, 0, "Basic", "Pascal");
console.log(arr);
