/* Давай, щоб не ритися в архівах, просто зробимо createRobotCopy функцію, яка
прийматиме робота robot і повертатиме його нову копію, але з серійним номером на 1 більшу.

Приклади:

const charlie = {
  serial: 100,
  chipVer: 12,
  wheels: 6,
}

const marlie = createRobotCopy(charlie);

charlie === marlie // false
charlie.serial === 100
marlie.serial === 101 */

function createRobotCopy(robot) {
  const newRobot = { ...robot };

  newRobot.serial += 1;

  return newRobot;
}

//---------------------------------
/**
 * @typedef {Object} Robot
 * @property {number} serial
 * @property {string} name
 * @property {number} wheels
 *
 * @param {Robot} robot
 *
 * @returns {Robot}
 */
 function createRobotCopy(robot) {
  return {
    ...robot, // copy all props from robot
    serial: robot.serial + 1, // set correct serial
  };
}

