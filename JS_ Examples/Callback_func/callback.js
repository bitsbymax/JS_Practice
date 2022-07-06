//? ---------------------------CALLBACK----------------------------

const numbers = [10, 20, 30, 40];

runForEach(numbers, (x, index) => {
  console.log(`${x} - ${index}!`);
});

function runForEach(items, callback) {
  for (let i = 0; i < items.length; i++) {
    callback(items[i], i);
  }
}

//!---------------------------------------------------------------------
/* console.log('Page is loaded');

const timerId = setInterval((x) => {
  console.log(x);

  console.log('Callback was executed');
}, 2000);

setTimeout(() => {
  clearInterval(timerId)
}, 5000); */

//!---------------------------------------------------------------------

function calculate(operands, operation) {
  const result = operation(operands[0], operands[1]);

  return result;
}

//!---------------------------------------------------------------------

// const sum = (a, b, c) =>  a + b + c;

function getResult(params, callback) {
  const res = callback(...params);

  return res;
}

// console.log(getResult([10, 20, 30], sum));

//!---------------------------------------------------------------------

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function formatMessage(message, callback) {
  const word = message.split(' ');
  let res = '';

  for (const i of word) {
    res += callback(i) + ' ';
  }

  return res.trim();
}


// formatMessage('this is sparta', capitalize);
// 'This Is Sparta'

//!---------------------------------------------------------------------

/* const queue = [
  {type: 'robot'},
  {type: 'robot'},
  {type: 'robot'},
  {type: 'dog'},
  {type: 'robot'},
];
 */
const isRobot = (robot) => {
  if (robot.type === 'robot') {
    return true;
  }

  return false;
}

function processArray(items, callback) {
  for (const i in items) {
    items[i] = (callback(items[i]));
  }
}

// proccesArray(queue, isRobot);
// queue === [true, true, true, false, true]

//!---------------------------------------------------------------------

/* const candies = ['KitKat', 'Lion', 'Bounty'];

const containsO = candy => candy.includes('o'); */

const filter = (items, callback) => {
  let res = [];

  for (let i of items) {
    if (callback(i)) {
      res.push(i);
    }
  }
  return res;
};

// console.log(filter(candies, containsO));

//!---------------------------------------------------------------------

/* const candies1 = ['KitKat', 'Nuts', 'Lion', 'Mars', 'Snickers', 'Bounty', 'Nuts'];

function createSito(size) {
  return (x) => x.length <= size;
}

const sito4 = createSito(4); // 4
const sito6 = createSito(6);

console.log(
  filter(candies1, sito4), // ['Nuts', 'Lion', 'Mars', 'Nuts'];
  filter(candies1, sito6), // ['KitKat', 'Nuts', 'Lion', 'Mars', 'Bounty', 'Nuts'];
);
 */

function filter1(candies, sito) {
  const result = [];

  for (const candy of candies) {
    if (sito(candy)) {
      result.push(candy)
    }
  }

  return result;
}

//!---------------------------------------------------------------------
/* Якщо getClientStatus повертає рядок vip - повернути виклик offerLuxuriousRoom, інакше порекомендувати простий номер (виклик offerStandardRoom).

Приклад: 

const getClientStatus = () => 'vip';
const offerLuxuriousRoom = () => 'Luxury room';
const offerStandardRoom = () => 'Standard room';

offerRoom(getClientStatus, offerStandardRoom, offerLuxuriousRoom)
=== 'Luxury room'
*/

function offerRoom(
  getClientStatus,
  offerStandardRoom,
  offerLuxuriousRoom,
) {
  if (getClientStatus() === 'vip') {
    return offerLuxuriousRoom();
  } else {
    return offerStandardRoom();
  }
}

//!---------------------------------------------------------------------
/* В нас є число currentVersion - поточна версія ПЗ, і функція checkVersion, яка приймає номер версії та повертає true, якщо помилка є (інакше false).

Напиши функцію getFirstBadVersion, яка приймає функцію checkVersion і актуальну версію currentVersion та повертає першу версію, в якій є помилка.

1. номера версій починаются з 1
2. функція checkVersion вже написана (її можна одразу використовувати)

Приклади: 
function checkVersion(version) {
  return version > 133;
}
getFirstBadVersion(checkVersion, 145); // === 134

const checkVersion = v => v >= 30;
getFirstBadVersion(checkVersion, 55); // === 30
*/

function getFirstBadVersion(checkVersion, currentVersion) {
  for (let i = 1; i < currentVersion; i++) {
    if (checkVersion(i)) {
      return i;
    }
  }
}

//!---------------------------------------------------------------------
// const callback = p => getAge(p) >= 50;

/* console.log(
  people
    .filter(callback)
    .map(p => `${getAge(p)} - ${p.name}`)
); */

function getAge(person) {
  return person.died - person.born;
}

function createCallback(age) { // #f_createCallback
  return function callback(person) {
    return getAge(person) >= age;
  };
}

//!---------------------------------------------------------------------
const nums = [...'128767653']
  .map(Number);
  console.log(nums);

function inBetween(start, end) {
  return (n) => n >= start && n <= end;
}

const callback1 = inBetween(3, 7); // 
const callback2 = inBetween(2, 5);

/* console.log(
  nums.filter(callback1), // 3 - 7
  nums.filter(callback2), // 2 - 5
); */

function inArray(values) {
  return (n) => values.includes(n);
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inArray([1, 2, 10]))); // [1, 2]

//!---------------------------------------------------------------------
