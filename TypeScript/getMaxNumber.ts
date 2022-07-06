/* Побудемо максималістами й наповнимо склянку. Напиши функцію getMaxNumber, яка приймає число number та повертає найбільше число, яке можна отримати переставляючи цифри в number.

Приклад:

getMaxNumber(123) === 321
getMaxNumber(1) === 1
getMaxNumber(1265) === 6521
getMaxNumber(-526) === -256 */

/* function getMaxNumber(num: number): number {
  let res: string;
  let numSplited: string[] = num.toString().split('');
  if (num < 0) {
    res = numSplited
      .sort((a: string, b: string) => +a - +b)
      .join('');
  } else {
    res = numSplited
      .sort((a: string, b: string) => +b - +a)
      .join('');
  }

  return parseInt(res);
} */

function getMaxNumber(n: number): number {
  if (n < 0) {
    return -String(-n).split('').sort().join('');
  }

  return +String(n).split('').sort().reverse().join('');
}
