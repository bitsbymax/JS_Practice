/* Реалізуй функцію toArrayOfDigits, яка приймає натуральне число n і повертає масив з його цифр в зворотньому порядку.

Наприклад: для n = 46156 функція має повернути [6, 5, 1, 6, 4].

Елементи масива мають бути числами, а не рядками. */

function toArrayOfDigits(n) {
  const reversed = n.toString().split('').reverse();

  return reversed.map((item) => parseInt(item));
}

