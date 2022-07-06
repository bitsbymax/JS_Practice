/* Зараз дані не відсортовані, давай відсортуємо їх в порядку спадання від найновішої версії робота, до найстарішої. Напиши функцію sortRobotsByVersion, яка приймає масив роботів robots та сортує його. Повертати з функції нічого не потрібно.

Приклад:
const robots = [
{name: 'Kobs', ver: 16},
{name: 'Lari', ver: 32},
{name: 'Lee', ver: 1},
{name: 'Robert', ver: 1},
{name: 'Viber', ver: 4},
{name: 'Colins', ver: 21},
]

sortRobotsByVersion(robots);

robots === [
{name: 'Lari', ver: 32},
{name: 'Colins', ver: 21},
{name: 'Kobs', ver: 16},
{name: 'Viber', ver: 4},
{name: 'Lee', ver: 1},
{name: 'Robert', ver: 1},
]
*/

function sortRobotsByVersion(robots) {
  robots.sort((a, b) => b.ver - a.ver);
}

