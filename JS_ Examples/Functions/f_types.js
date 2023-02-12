//? ---- Function declaration з викликом ---
function greeter(name) {
  const result = `Hi, ${name}!`;
  return result;
}
const myFunction = greeter('Maks');
console.log(myFunction); //Hi, Maks!

/// Приклад 2
printRectangleInfo(5, 8); // виклик функції

function printRectangleInfo(a, b) {
  // декларація функції, а і b - параметри
  const perimeter = 2 * a + 2 * b; // опис функціоналу, тіло функціїї
  const square = a * b;

  console.log("Perimeter is ", perimeter);
  console.log("Square is ", square);
}

function isEven(x) {
  // оголошення функціїї, function declaration
  return x % 2 === 0;
}

//? -------- Function expression ------
const isEven2 = function (x) {
  // функціональний вираз, можна викликати лише після оголошення!!!
  return x % 2 === 0;
};

//? ------- Arrow functions, стрілкові функціїї ------
const greeter1 = (name) => `Hi, ${name}!`;
const result1 = greeter1("Maks");

const double = (num) => num * 2;
const result2 = double(2);

const multiply = (a, b = 1) => a * b;
const result3 = multiply(3, 4);

//!---------------------------------------------------------------------------------------
//В функцію можна записати властивість як у об'єкт:
function sum(x, y) {
  return x + y;
}

sum.someProp = {
  x: 1,
  y: 0,
};
console.log(sum.someProp);

// Для того, щоб подивитись на функцію як на об'єкт, викор. console.dir()
//!---------------------------------------------------------------------------------------
//? Immediately Invoked Function Expression
const result = (function (a, b) {
  return a * b;
})(10, 5); //50

//такий заис можна зробити і для функції стрілки
const result4 = ((a, b) => a / b)(10, 5); //2
