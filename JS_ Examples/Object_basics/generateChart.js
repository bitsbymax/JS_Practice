/* Створи функцію generatedChart, яка буде приймати об'єкт статистики продажів роботів
(де ключ - тип робота, а значення - кількість проданих роботів) і повертає об'єкт з
однаковими ключами, але значення - це градуси для кругової діаграми.

Округлюй градуси до найближчого цілого.

Приклад:

generateChart({ cleaner: 2, driver: 8 }) === { cleaner: 72, driver: 288 }
generateChart({ cleaner: 2, driver: 8, washer: 14 }) === { cleaner: 30, driver: 120, washer: 210 }
generateChart({ cleaner: 1 }) === { cleaner: 360 }
*/

/**
 * @param {Object} statistics
 *
 * @returns {Object}
 */

function generateChart(statistics) {
  const obj = {};
  let temp = 0;

  for (const key in statistics) {
    temp += statistics[key];
  }

  for (const key in statistics) {
    obj[key] = Math.round((360 / temp) * statistics[key]);
  }

  return obj;
}
