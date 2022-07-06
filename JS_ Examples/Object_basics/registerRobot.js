/* Напиши функцію registerRobot, яка приймає два об'єкти robot та warehouse.

Схема об'єктів:

robot {
  id
  skill
  currentWorkPlace
}
warehouse {
  aiStaff
  currentStatus
  boxes
}
Функція має додавати id нового робота в масив aiStaff, а роботу в currentWorkPlace
записувати посилання на об'єкт warehouse. */

/**
 * @typedef {Object} Robot
 * @property {number} id
 * @property {string} skill
 * @property {Warehouse} currentWorkPlace
 *
 * @typedef {Object} Warehouse
 * @property {number[]} aiStaff
 * @property {number} boxes
 * @property {string} currentStatus
 *
 * @param {Robot} robot
 * @param {Warehouse} warehouse
 */

function registerRobot(robot, warehouse) {
  warehouse.aiStaff.push(robot.id);
  robot.currentWorkPlace = warehouse;
}
