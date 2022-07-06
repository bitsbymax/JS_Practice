/* Великий масив oldData складається з масивів з даними про кожного учня. Кожен такий масив містить ім'я,
прізвище та посилання на групу, де цей учень навчався, наприклад:

const oldData = [
  ['Adam', 'Driver', elementaryB]`
  ['Colin', 'Firth', advancedC]`
  ['Johnny', 'Depp', elementaryB]`
];
Напиши функцію makeGroups, яка: 
1. приймає дані в старому форматі (масив oldData);
2. створює для кожного учня окремий об'єкт з ключами firstName і lastName, куди записує ім'я та прізвище учня;
3. додає створений об'єкт в групу, де вчився студент (групи - це масиви, які вже були створені, так що створювати їх у функції не потрібно);
4. повертає масив всіх створених об'єктів (учні з іменами та прізвищами).

Приклад:

Створені заздалегідь масиви, куди будуть додаватися учні:

const elementaryA = [];
const elementaryB = [];

Масив, який передається до функції:

const oldData = [
  ['Mike', 'Anderson', elementaryA],
  ['Steve', 'Mason', elementaryB],
  ['Bradley', 'Cooper', elementaryA],
];

Виконуємо функцію:
makeGroups(oldData); 

Результат, який повертає функція:

students === [
  { firstName: 'Mike', lastName: 'Anderson' },
  { firstName: 'Steve', lastName: 'Mason' },
  { firstName: 'Bradley', lastName: 'Cooper' },
];

Масиви, куди додалися учні:
elementaryA === [
  { firstName: 'Mike', lastName: 'Anderson' },
  { firstName: 'Bradley', lastName: 'Cooper' },
];
elementaryB === [
  { firstName: 'Steve', lastName: 'Mason' },
];
*/
const elementaryA = [];
const elementaryB = [];
const oldData = [
  ['Mike', 'Anderson', elementaryA],
  ['Steve', 'Mason', elementaryB],
  ['Bradley', 'Cooper', elementaryA],
];


/**
 * @typedef {Object} Student
 * @property {string} firstName
 * @property {string} lastName
 *
 * @param {[string, string, Array]} oldData
 *
 * @returns {Student[]}
 */
debugger

function makeGroups() {
  const students = [];
  
  for (const [firstName, lastName, group] of oldData) {
    const student = {};

    student.firstName = firstName;
    student.lastName = lastName;
    group.push(student);
    students.push(student);
  }
  return students;
}
console.log(makeGroups(oldData));

/* students: Array(3)
0:
firstName: "Mike"
lastName: "Anderson"
[[Prototype]]: Object
1:
firstName: "Steve"
lastName: "Mason"
[[Prototype]]: Object
2:
firstName: "Bradley"
lastName: "Cooper"
[[Prototype]]: Object
length: 3
[[Prototype]]: Array(0)
 */

/* elementaryA: Array(2)
0: {firstName: 'Mike', lastName: 'Anderson'}
1: {firstName: 'Bradley', lastName: 'Cooper'}
length: 2
[[Prototype]]: Array(0)
elementaryB: Array(1)
0: {firstName: 'Steve', lastName: 'Mason'}
length: 1
[[Prototype]]: Array(0)
 */
