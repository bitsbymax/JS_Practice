/* Побудемо максималістами й наповнимо склянку. Напиши функцію getMaxNumber, яка приймає число number та повертає найбільше число, яке можна отримати переставляючи цифри в number.

Приклад:

getMaxNumber(123) === 321
getMaxNumber(1) === 1
getMaxNumber(1265) === 6521
getMaxNumber(-526) === -256 */

function getMaxNumber(number) {
  let res;
  if (number < 0) {
    res = number
      .toString()
      .split('')
      .sort((a, b) => a - b)
      .join('');
  } else {
    res = number
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('');
  }

  return parseInt(res);
}
