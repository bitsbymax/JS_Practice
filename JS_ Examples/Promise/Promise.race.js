//Метод Promise.race(iterable) возвращает выполненный или отклонённый промис, в зависимости от того, с каким результатом завершится первый из переданных промисов, со значением или причиной отклонения этого промиса.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"


var p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, "один");
});
var p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, "два");
});

Promise.race([p1, p2]).then(function(value) {
console.log(value); // "два"
// Оба вернули resolve, однако p2 вернул результат первым
});

var p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, "три");
});
var p4 = new Promise(function(resolve, reject) {
  setTimeout(reject, 500, "четыре");
});

Promise.race([p3, p4]).then(function(value) {
console.log(value); // "три"
// p3 быстрее, поэтому выведется значение его resolve
}, function(reason) {
// Не вызывается
});

var p5 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, "пять");
});
var p6 = new Promise(function(resolve, reject) {
  setTimeout(reject, 100, "шесть");
});

Promise.race([p5, p6]).then(function(value) {
// Не вызывается
}, function(reason) {
console.log(reason); // "шесть"
// p6 быстрее, выводится его rejects
});
