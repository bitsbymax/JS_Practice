// Reproduce bind method from JS
/* const sum = (x, y) => x + y;
const plusTen = sum.bind2(undefined, 10);
plusTen(1); // 11
plusTen(10); // 20
*/

//How original bind works
/* const person = {
  firstName: 'Max',
  logName(surname) {
    console.log("Name: ", this.firstName, surname)
  }
};
const person2 = {
  firstName: 'Ira'
}
person.logName("Vikolash") // Name Max Vikolash
person.logName.bind(person2, "Levko")(); //Name Ira Levko */

const sum = (x, y) => x + y;
Function.prototype.bind2 = function (context, ...args) {
  /* const fn = this;
  return function() {
    fn.apply(context)
  }; */
  return (...args2) => {
    return this.apply(context, args.concat(args2)); //this буде функція sum
  };
};


const plusTen = sum.bind2(undefined, 10);
console.log('plusTen:', plusTen);
console.log(plusTen(1))  // 11 -> x: 10, y: 1
console.log(plusTen(10)); // 20 -> x: 10, y: 10