/* Створи функцію makeRobotsPair, яка приймає 2 об'єкти (роботи) та додає до кожного
властивість partner з посиланням на партнера (інший об'єкт).

Якщо ми передамо 1 робота, запиши йому в поле partner значення null.

Приклади:

const charlie = { name: 'Charlie' };
const joy = { name: 'Joy' };
const lordy = { name: 'Lordy' };

makeRobotsPair(joy, lordy);

console.log(
  joy.partner === lordy, // true 
  lordy.partner === joy, // true
);

makeRobotsPair(charlie);

console.log(charlie.partner); // null */

/**
 * @param {Object} robot1
 * @param {Object|undefined} robot2
 *
 * @returns {undefined}
 */

function makeRobotsPair(robot1, robot2) {
  if (robot2 === undefined) {
    robot1.partner = null;
  } else {
    robot1.partner = robot2;
    robot2.partner = robot1;
  }
}
