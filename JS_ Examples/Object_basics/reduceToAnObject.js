const users = [
  //? масив об'єктів
  { name: "Sergey", age: 23 },
  { name: "Misha", age: 12 },
  { name: "Tanya", age: 24 },
];

const result = {};
for (let user of users) {
  result[user.name] = user.age;
}
console.log(result); //{ Sergey: 23, Misha: 12, Tanya: 24 }

const callback1 = (prev, user) => {
  return {
    ...prev,
    [user.name]: user.age,
  };
}

const callback2 = (prev, user) => ({
  ...prev,
  [user.name]: user.age,
});

const callback3 = (prev, { name, age }) => ({
  ...prev,
  [name]: age,
});

const callback4 = (prev, { name, age }) => ({ ...prev, [name]: age });

const result1 = users.reduce(callback1, {});
console.log(result1); //{ Sergey: 23, Misha: 12, Tanya: 24 }

const result2 = users.reduce(callback2, {});
console.log(result1); //{ Sergey: 23, Misha: 12, Tanya: 24 }

const result3 = users.reduce(callback3, {});
console.log(result1); //{ Sergey: 23, Misha: 12, Tanya: 24 }

const result4 = users.reduce(callback4, {});
console.log(result1); //{ Sergey: 23, Misha: 12, Tanya: 24 }

//!----------------------------------------------------------------------
const input = [
  { name: "Andriy", age: 20, visible: false },
  { name: "Oleg", age: 25, visible: true },
  { name: "Vasyl", age: 30, visible: true },
];

const ERROR_CODE = "Not Array"; // текст помилки

function arrayParser(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(ERROR_CODE);
  }

  return arr
    .filter((item) => item.visible)
    .map((item) => ({
      [item.name]: { age: item.age },
    }));
}

/*
OUTPUT
[
	{ Oleg: { age: 25 } },
	{ Vasyl: { age: 30 } }
]
*/
