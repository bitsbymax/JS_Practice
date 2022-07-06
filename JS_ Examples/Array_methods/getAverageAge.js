/* Створи функцію getAverageAge, яка приймае масив ages та повертає середній вік наших користувачів. Вік округли до найближчого цілого числа. Радимо скористатися методом reduce для масивів.

Приклад:

const ages = [18, 14, 22, 34, 43, 18, 20, 34, 24];
getAverageAge(ages) === 25 */

const getAverageAge = (ages) => {
  if (ages.length === 0) {
    return;
  }

  const res = ages.reduce((averSum, x) => averSum + x);

  return Math.round(res / ages.length);
};
