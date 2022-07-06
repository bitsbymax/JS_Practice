/* Реалізуй функцію countOccurrences, яка приймає 2 аргументи phrase та part і повертає кількість разів, що part з'являється у phrase.

Рядки phrase і part містять виключно маленькі латинські літери. Літери в part не повторюються.

Приклади:

countOccurrences('azyxxzyzy', 'zy') === 3
countOccurrences('ababagalamaga', 'bag') === 1 */

function countOccurrences(phrase, part) {
  const count = (phrase.split(part).length - 1);

  return count;
}

function countOccurrences(phrase, part) {
  let count = 0;
  let index = 0;

  while (phrase.includes(part, index)) {
    count++;
    index = phrase.indexOf(part, index) + 1;
  }

  return count;
}

function countOccurrences(phrase, part) {
  let count = 0;
  let current = phrase;

  while (current.includes(part)) {
    count++;
    current = current.replace(part, '');
  }

  return count;
}
