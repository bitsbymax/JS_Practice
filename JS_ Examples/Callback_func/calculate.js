/* Кожен програміст просто мусить написати свій "велосипед". Ну хоча б калькулятор!

Напиши функцію calculate, яка приймає масив з 2 чисел operands, та callback-функцію operation, що приймає 2 числа. Поверни з calculate результат operation запущеної з числами з масиву operands.

Приклад:
const sum = (a, b) => a + b;
calculate([2, 6], sum); // 8

const multiply = (a, b) => a * b;
calculate([2, 6], multiply); // 12
*/

function calculate(operands, operation) {
  const result = operation(operands[0], operands[1]);

  return result;
}

function calculate(operands, operation) {
  // call operation with all the given operands
  return operation(...operands);
}