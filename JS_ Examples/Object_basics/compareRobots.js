/* Mate Robot Factory вже випустила не одну сотню роботів різних конфигурацій, розмірів та видів. 
Інформация про кожного робота зберігається у вигляді об'єкта з його характеристиками.

Давай напишемо функцію compareRobots, яка приймає двох роботів та повертає true, тільки якщо всі 
характеристики обох роботів співпадають (порядок властивостей не важливий, лише ключі та значення).

Примітки:

у кожного робота є унікальний серійний номер (не враховуєм підчас порівняння)
властивості роботів не можуть мати значення undefined і NaN
Примеры: */

/* const charlie = { serialNo: 1, chipVer: 12 };

compareRobots(charlie, lordy); // true
const paul = { serialNo: 3, chipVer: 15 };
compareRobots(paul, charlie); // false
const mike = { serialNo: 4, chipVer: 12, wheels: 1 };
compareRobots(mike, charlie); // false
const max = { serialNo: 5, engineVer: 12 };
compareRobots(max, charlie); // false
const steve = { serialNo: 6 };
compareRobots(steve, charlie); // false */
const lordy = { serialNo: 2, chipVer: 12 };
const paul = { serialNo: 3, chipVer: 15 };
const mike = { serialNo: 4, chipVer: 12, wheels: 1 };

debugger;
const compareRobots = (robot1, robot2) => {
  delete robot1.serialNo; 
  delete robot2.serialNo;    // видалити ключ serialNo

  const keys1 = Object.keys(robot1);  // keys1 = ["chipVer"], robot1 = {chipVer: 15}
  const keys2 = Object.keys(robot2); // keys2 = ["chipVer"], robot2 = {chipVer: 12}
  if (keys1.length !== keys2.length) {  // якщо довжина не однакова, повернути false 
    return false;                  // (1 і 1 відповідно, length рахує індекси)
  }
  for (let i of keys1) {  // ! i = "chipVer", інтерпритатор спочатку зчитує keys1, потім і
    if (robot1[i] !== robot2[i]) { // robot1 = {chipVer: 15}, i = "chipVer", !!! але robot1[i] = 15 і robot2[i] 12 !!!
      return false;                // тобто порівнюються  ЗНАЧЕННЯ
    }
  }                        // при викор for IN, i = "0", тобто порівнюються ІНДЕКСИ
  return true;
};
console.log(compareRobots(paul, lordy));
