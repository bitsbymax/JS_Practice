/* Напиши функцію countLettersInString, яка приймає рядок str і повертає об'єкт, в якому ключ - літери з str 
(всі в нижньому регістрі), а значення - кількість цих літер в str.

Наприклад: countLettersInString('arithmetics') => {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2} */

function countLettersInString(str) {
  let obj = {};
  let arr = str.split('');  // arr = ["arithmetics"]

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }


  return obj;
}
console.log(countLettersInString('arithmetics'));
