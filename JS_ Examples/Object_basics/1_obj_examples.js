const person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    console.log(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        ".",
    );
  },
  greeting: function () {
    console.log("Hi! I'm " + this.name[0] + ".");
  },
};

person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
person.farewell();

let myDataName = "height";
let myDataValue = "1.75m";
person[myDataName] = myDataValue;

console.log(person.height); //1.75m
console.log(person); /* {
  name: [ 'Bob', 'Smith' ],
  age: 32,
  gender: 'male',
  interests: [ 'music', 'skiing' ],
  bio: [Function: bio],
  greeting: [Function: greeting],
  eyes: 'hazel',
  farewell: [Function (anonymous)],
  height: '1.75m'
} */

//!------------------------------------------------------------//

let statusesCount = {
  Intake: 4,
  Planning: 3,
  "Technische gegevens verzamelen Productie": 0,
  "Functioneel aansluiten op Productie": 0,
  Gemigreerd: 0,
};

let sumAllCounts = 0;
for (let [statusName, count] of Object.entries(statusesCount)) {
  // перебір, в якому ми перебираємо ключ:значення і одразу відсортовуємо їх в окремі змінні
  if (statusName === "Not Migrating") continue;
  sumAllCounts += count;
}
console.log(sumAllcounts) // 7


//!------------------------------------------------------------//
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { a: 1, b: 2, c: 3 };
let obj3 = {};
obj3.a = obj1.a + obj2.c;
console.log(obj3.a); //4

obj3["obj1"] = obj1;
obj3["obj2"] = obj2;
console.log(obj3); //{ a: 4, obj1: { a: 1, b: 2, c: 3 }, obj2: { a: 1, b: 2, c: 3 } }

obj3.newObj = {};
const tmpArr = [obj1, obj2];
for (let i = 0; i < tmpArr.length; i++) {
  for (const key in tmpArr[i]) {
    if (obj3.newObj[key] !== undefined) {
      obj3.newObj[key] += tmpArr[i][key];
    } else {
      obj3.newObj[key] = tmpArr[i][key];
    }
  }
}

console.log(obj3); /* {
  a: 4,
  obj1: { a: 1, b: 2, c: 3 },
  obj2: { a: 1, b: 2, c: 3 },
  newObj: { a: 2, b: 4, c: 6 }
} */

//!------------------------------------------------------------//
//? Обчислювальні властивості
const key = "url";
const apps = {
  name: "Facebook",
  [key]: "facebook.com",
  ["get" + key.toUpperCase()]: function () {
    return this[key];
  },
};

console.log(apps.getURL()); // "facebook.com"
