/* Створіть функцію checkNumber, яка перевіряє число на три різні властивості:

Це позитивне число?
Це парне число?
Це число кратне 10?
Функція checkNumber повинна повернути масив з результатами перевірок у вигляді булевих значень.

Число завжди має бути цілим.

Приклад: const number = 3;

checkNumber(number); // return [true, false, false]
const number = 10;

checkNumber(number); // return [true, true, true]
const number = 0;

checkNumber(number); // return [false, true, true]
const number = -1;

checkNumber(number); // return [false, false, false]
*/
debugger;

function checkNumber(number) {
  let res = [];

  if (number > 0) res.push(true);
  else res.push(false);

  if (number % 2 == 0) res.push(true);
  else res.push(false);

  if (number % 10 == 0) res.push(true);
  else res.push(false);

  return res;
}
console.log(checkNumber(3));

//-------------------------------------------------------------

function checkNumber(number) {
  return [
    isPositive(number),
    isEven(number),
    isMultipleTen(number),
  ];
}

function isPositive(number) {
  return number > 0;
}

function isEven(number) {
  return number % 2 === 0;
}

function isMultipleTen(number) {
  return number % 10 === 0;
}
