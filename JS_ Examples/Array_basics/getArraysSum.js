/* Реалізуй функцію getArraysSum, яка приймає два масива чисел однакової довжини, та повертає суму усіх елементів цих масивів.

Приклад:

getArraysSum([1, 2], [3, 4]) === 10  // 1 + 2 + 3 + 4 = 10
getArraysSum([], []) === 0 */

function getArraysSum(arr1, arr2) {
  let res = 0;

  for (let i = 0; i < arr1.length; i++) {
    res += arr1[i] + arr2[i];
  }

  return res;
}