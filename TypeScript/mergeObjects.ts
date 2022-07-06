/* Напиши функцію mergeObjects, яка приймає 2 об'єкти типів T та R (використай generic) та повертає новий об'єкт зі всіма властивостями першого об'єкта і тими властивостями другого, яких немає в першому.

Пример:

const user = {
  name: 'Harry',
  surname: 'Potter',
};

consr robot = {
  name: 'Cleaner',
  version: 12,
  wheels: 3,
};

mergeObjects(user, robot) === {
  name: 'Harry',
  surname: 'Potter',
  version: 12,
  wheels: 3,
} */

function mergeObjects<T1, T2>(obj1: T1, obj2: T2): T1 & T2 {
  return { ...obj2, ...obj1 };
}

interface User {
  name: string;
  age: number;
}

interface Figure {
  color: string;
  name: string;
}

mergeObjects<User, Figure>(
  { name: 'Misha', age: 37 },
  { color: 'red', name: 'circle' },
);

/* function mergeObjects<T, R>(obj1: T, obj2: R): T & R {
  const test: Partial<T & R> = {};

  Object.assign(test, obj2, obj1);

  return test as T & R;
} */
