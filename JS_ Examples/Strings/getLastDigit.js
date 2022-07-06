/* Допиши функцію getLastDigit так, щоб вона повертала останню цифру 
з числа number. Число number може бути дробовим, цілим, додатнім та від'ємним.
Приклад:

getLastDigit(1) === 1
getLastDigit(145) === 5
getLastDigit(5267723) === 3
getLastDigit(-1) === 1
getLastDigit(-1.2454) === 4 */

function getLastDigit(number) {
  let convertion = number.toString();
  for (let i = convertion.length - 1; i >= 0; i--) {
    return +convertion[i];
  }
}