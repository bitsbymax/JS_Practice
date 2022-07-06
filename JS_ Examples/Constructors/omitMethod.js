/* Буває, що об'єкт, з яким ми працюємо, несе в собі надлишкову інформацію. Нам потрібно отримати його копію, але без надлишкових ключів. Додай до прототипу об'єктів метод omit, який приймає масив ключів та повертає новий об'єкт без вказаних ключів.

Приклад:

const robot = {
  wheels: 4,
  name: 'roberto',
  serialNumber: 123,
  coords: {
    x: 0,
    y: 0,
  },
  weight: 40,
}

robot.omit(['coords', 'wheels', 'weight']) === {
  name: 'roberto',
  serialNumber: 123,
} */

function omitMethod() {
  /**
   * @param {string[]} keys
   *
   * @returns {Object}
   */
  Object.prototype.omit = function omit(keys) {
    const robotCopy = {
      ...this,
    };

    for (const key in robotCopy) {
      for (const el of keys) {
        if (key === el) {
          delete robotCopy[key];
        }
      }
    }

    return robotCopy;
  };
}
