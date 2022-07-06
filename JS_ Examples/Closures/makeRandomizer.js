/* Створи функцію makeRandomizer, яка приймає масив з двох цілих чисел [start, end]
(причому end >= start) та повертає функцію randomizer, яка працюватиме наступним чином:

1. при виклику randomizer повертає ціле число між start та end включно
2. числа, що повертаються, не повинні повторюватися
3. якщо унікальні цілі числа з діапазона закінчилися, поверни null
Приклад:
const getRandom = makeRandomizer([1, 4]);

getRandom() === 3
getRandom() === 4
getRandom() === 2
getRandom() === 1
getRandom() === null
getRandom() === null*/

/*
Создай массив чисел от start до end
Отсортируй их в случайном порядке
При каждом следующем вызове возвращай следующее число
Когда числа закончились, возвращай null */

function makeRandomizer(numbers) {
  const start = numbers[0];
  const end = numbers[1];
  let j = -1;

  const inbetween = [];

  for (let i = start; i <= end; i++) {
    inbetween.push(i);
  }

  inbetween.sort((a, b) => 0.5 - Math.random());

  const randomizer = function () {
    j++;

    if (j >= inbetween.length) {
      return null;
    }

    return inbetween[j];
  };

  return randomizer;
}

const getRandom = makeRandomizer([1, 4]);
getRandom();

function makeRandomizer(numbers) {
  const values = [];
  let min = numbers[0];
  const max = numbers[1];

  while (min <= max) {
    values.push(min++);
  }

  return () => values.length
    ? values.splice(Math.floor(Math.random() * values.length), 1)[0]
    : null;
}
