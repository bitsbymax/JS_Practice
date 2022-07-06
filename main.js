/* function adder(base) {  //?  робота armuments.length

  base = Number(base);
  for (let i = 1; i < arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}

console.log(adder(14, 8)) */

//!------------------------------------------------------------//

//? getter для считування властивостей, setter для зміни властивостей

/* const user = {
  name: 'Petro',
  lastName: 'Flymko',

  set fullName(value) {  //! setter приймає лише один параметр
    // цей метод приймає параметр. перевіряє, чи це рядок, і чи індекс
    // входження пробілу не 0. Далі підставляє в name і lastname нові значення

    if (typeof value !== 'string') {
      return;
    }

    const index = value.indexOf(' ');

    if (index < 1) {
      return;
    }

    this.name = value.slice(0, index);
    this.lastName = value.slice(index + 1);

  }
}

user.fullName = 'John Smith';
console.log(user.name);
console.log(user.lastName); */

//!----------------------------------------------------------------//
/* var names = ["Andrew", "Edward", "Paul", "Chris", "John"];

while (typeof (i = names.shift()) !== 'undefined') {
  console.log(i);
} */
//!----------------------------------------------------------------//
//? Модифікувати приклад, щоб Greetings.helloWorld повернула 'Hello, World!', де helloWorld - значення змінної greetingType

/* const greetingType = "helloWorld";
class Greetings {
  static [greetingType]() {
    return "Hello, World";
  }

  // get [greetingType]() {
  //   return 'Hello, World';
  // }   //console.log(Greetings.helloWorld)
}

console.log(Greetings.helloWorld()); // 'Hello, World!'

const expr = "foo";

const obj = {
  get [expr]() {
    return "bar";
  },
};

console.log(obj.foo); // "bar" */
//!----------------------------------------------------------------//

/* 
let button = document.querySelector('#button');
const input1 = document.querySelector('#input_1');
const input2 = document.querySelector('#input_2');

button.addEventListener('click', (event) => {
  event.preventDefault();

  console.log(input1.value, input2.value);
})


let someString = 'Hello World!';
// let newString = someString.split('').reverse().join('');
let result = '';
for (let i = someString.length - 1; i >= 0; i--) {
  result +=  someString[i]; 
}
console.log(result);

*/
//!----------------------------------------------------------------//
/* let a1 = [1,3,5,7,9];
let a2 = [2,4,6,8];
a3 = a1 + a2;
console.log(a3) */

//!----------------------------------------------------------------//
/* const main = () => {
  let x = 1, y = 2;

  console.log(`x = ${x}, y = ${y}`);
  swap(x, y);
  console.log(`x = ${x}, y = ${y}`);
};

const swap = (a, b) => {
  let tmp = a;
  a = b;
  b = tmp;
  console.log(`a = ${a}, b = ${b}`);
};
main(); */
