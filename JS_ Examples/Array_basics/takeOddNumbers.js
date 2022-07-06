/* Напиши функцію takeOddNumbers, яка приймає масив натуральних чисел і повертає масив непарних чисел з вхідного масиву

Приклад:

takeOddNumbers([]) === [];
takeOddNumbers([0, 1, 2, 4]) === [1]; */

function takeOddNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

//-----------------------------------------------------------------//

function noOdds(values) {
  function isEven(number) {
    return number % 2 == 0;
  }

  return values.filter(isEven);
}