/* 
Створи функцію upgradeRobot, яка приймає об'єкт robot, масив об'єктів з деталями parts, та присвоює їх роботу. Перед змаганнями, було б добре протестувати Object.assign() на нашому роботі.

Приклад:
const kobi = {
  chipVer: 9,
  serialNo: 413,
  wheels: 2,
}
const parts = [
  { gravitationSensor: true },
  { wheels: 6 },
  { chipVer: 16 },
  { ram: 1024 },
  { displays: 2 },
];
upgradeRobot(kobi, parts)
kobi.serialNo === 413
kobi.wheels === 6
kobi.chipVer === 16
kobi.displays === 2
*/

/**
 * @param {Object} robot
 * @param {Object[]} parts
 */

function upgradeRobot(robot, parts) {
  Object.assign(robot, ...parts);
}
