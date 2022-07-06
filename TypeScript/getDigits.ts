/* Створи функцію getDigits, яка приймає додатне ціле число і повертає масив з його цифр, відсортованих в порядку зростання. Цифри мають бути числами, а не рядками.

Приклади:

getDigits(5) === [5]
getDigits(721) === [1, 2, 7]
getDigits(4044) === [0, 4, 4, 4] */

function getDigits(x: number): number[] {
  return Array.from(String(x), Number).sort();
}

/* function getDigits(n: number): number[] {
  return `${n}`.split('').sort().map(Number);
} */
