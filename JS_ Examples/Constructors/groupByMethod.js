/* Додай всім масивам метод groupBy, який приймає callback, запускає його для кожного елемента масиву і складає всі елементи, для яких сallback повернув однаковий результат в окремий масив. Метод має повернути об'єкт, де ключі - це результати callback, а значення - це масиви елементів, для яких callback повернув цей результат.

Якщо callback не переданий, згрупуй елементи за значеннями (так ніби сallback повертає елемент масиву без змін)

Приклади:

const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

---Групуємо слова по довжині
const grouppedWords = words.groupBy(word => word.length);

grouppedWords === {
  3: ['one', 'two', 'six],
  4: ['four', 'five'],
  5: ['three', 'seven'],
}

const bob = { type: 'cleaner', name: 'bob' };
const paul = { type: 'cargo', name: 'paul' };
const robert = { type: 'cleaner', name: 'robert' };

const robots = [bob, paul, robert];

---Групуємо роботів по типу
const groupedRobots = robots.groupBy(robot => robot.type)

groupedRobots === {
  cleaner: [bob, robert],
  cargo: [paul],
}

const numbers = [1, 1, 2, 1, 3, 3, 2, 4];

---Групуємо элементи по значенню
const groupedNumbers = numbers.groupBy();

groupedNumbers === {
  1: [1, 1, 1],
  2: [2, 2],
  3: [3, 3],
  4: [4],
} */
function groupByMethod() {
  /**
   * @param {function} callback
   *
   * @returns {Object}
   */
  Array.prototype.groupBy = function groupBy(callback = defaultCallback) {
    const res = {};

    this.forEach(el => {
      const key = callback(el);

      if (Array.isArray(res[key])) {
        res[key].push(el);
      } else {
        res[key] = [el];
      }
    });

    return res;
  };
}

function defaultCallback(el) {
  return el;
}
