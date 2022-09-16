/* "Гарним" вважається такий масив, в якому для кожного числа n, є також n-1 або n+1.

Наприклад, масив [2,10,9,3] - гарний, бо:

2 = 3 - 1
10 = 9 + 1
3 = 2 + 1
9 = 10 - 1
Напиши функцію isArrayPretty, яка приймає масив чисел numbers та повертає true, якщо він гарний, інакше false. Порожній масив не є гарним. */

function isArrayPretty(numbers) {
  if (!numbers.length || numbers.length === 1) {
    return false;
  }

  let counter = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] === numbers[j] - 1 || numbers[i] === numbers[j] + 1) {
        counter++;
      }
    }
  }

  if (counter === numbers.length || counter === numbers.length + 1) {
    return true;
  }

  return false;
}
//---------------------------------------------------------

function isArrayPretty(numbers) {
  if (numbers.length === 0) {
    return false;
  }

  return numbers.every(
    a => numbers.some(b => a === b - 1 || a === b + 1),
  );
}
