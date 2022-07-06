/* Створи функцію getLargestExpressionResult, котра приймає два числа
a і b та повертає найбільший можливий результат серед виразів:

a + b
a - b
a * b
a / b
обмеження:

Май на увазі, що a і b можуть бути від'ємними.
Не використовуй тернарний оператор чи ключове слово else.
Не використовуй об'єкт Math. */

function getLargestExpressionResult(a, b) {
  let res = a + b;
  if (a - b > res) res = a - b;
  if (a * b > res) res = a * b;
  if (a / b > res) res = a / b;
  return res;
}