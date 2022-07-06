/* Допоможи знайти робота за допомогою функції searchRobot. Вона приймає об'єкт robot,
та масив всіх відомих нам робочих місць workPlaces, де може перебувати робот в даний
момент. Результатом пошуково-рятувальної місії, має бути назва місця, в якому зараз знаходиться робот.

Приклади:

const robot = {
  name: 'Sundar',
};
const workPlaces = [
  {
    name: 'mate academy',
    staff: ['Roma', 'Misha', 'Yura'],
  },
  {
    name: 'Google',
    staff: ['Larry', 'Sergey', 'Sundar'],
  },
];
searchRobot(robot, workPlaces) // повертає 'Google'; */

/**
 * @param {Object} robot
 * @param {Object[]} workPlaces
 *
 * @returns {string}
 */

const searchRobot = (robot, workPlaces) => {
  let result = '';

  for (const key of workPlaces) {
    for (const key2 in key.staff) {
      if (key.staff[key2] === robot.name) {
        result = key.name;

        return result;
      }
    }
  }
};
