//? створення копії об'єкта

/* const users2 = {
  id1: 1, name: 'Sergey',
  id2: 15, lastName: 'Misha',
  id3: 42, middleName: 'Tanya',
}; */

function copy(obj) {
  return Object.assign({}, obj);
}
// console.log(copy(users2));

function copy(obj) {
  return { ...obj };
}
// console.log(copy(users2));


//!------------------------------------------------------------//

/* function copy(obj) { //! рекурсивна функція для глибокої копії об'єкта
  const clone = {};

  for (const key in obj) {
    if (obj[key] !== null && typeof obj[key] === 'object') {
      clone[key] = copy(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }

  return clone;
} */

/* function copy(obj) {
  const clone = {};

  for (const key in obj) {
    if (typeof obj[key] !== 'object' || obj[key] === null) {
      clone[key] = obj[key];
    } else {
      clone[key] = copy(obj[key]);
    }
  }

  return clone;
} */

//!------------------------------------------------------------//
//? викор. оператора spread для копіювання декількох об'єктів в один
/* const obj = {
  ...{ x: 1, y: 2 },
  x: 2,
  ...{ x: 3, z: 3 }
};

console.log(obj); */
