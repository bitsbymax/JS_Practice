/* Час оновлювати програмне забезпечення! Інженери випустили оновлення для застарілих 
версій роботів. Потрібно вишикувати всіх роботів і перевірити у кого з них застаріле ПЗ.

Функція getOutdated приймає масив роботів robots і повертає масив індексів тих роботів, 
у яких coreVersion менший за newVersion.

Приклад:
getOutdated(robots, 10) === [0, 3]
getOutdated(robots, 14) === [0, 1, 3]
getOutdated(robots, 8) === []
getOutdated(robots, 18) === [0, 1, 2, 3, 4] */

const robots = [
  { coreVersion: 9 },
  { coreVersion: 13 },
  { coreVersion: 16 },
  { coreVersion: 9 },
  { coreVersion: 14 },
];

//---------------Розв'язок-------------------
debugger;
function getOutdated(robots, newVersion) {
  const outdated = [];
  for (const i in robots) {    // перебір по індексам
    if (robots[i].coreVersion < newVersion) {    // robots[0].coreVersion = 9 < 10
      const x = robots.indexOf(robots[i]); // записуємо в змінну х індекс robots[i], тобто 0 при першій ітерації
      outdated.push(x);
    }
  }
  return outdated;
}
//----------------Розв'язок ментора!!!-----------------
function getOutdated(robots, newVersion) {
  const outdated = [];
  for (let i = 0; i < robots.length; i++) { // перебір по індексам
    if (robots[i].coreVersion < newVersion) {  // robots[0].coreVersion = 9 < 10
      outdated.push(i);      // кладемо індекс в кінець масиву
    }
  }
  return outdated;
}
console.log(getOutdated(robots, 10));
