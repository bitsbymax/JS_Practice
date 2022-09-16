/* Напиши функцію splitString, яка приймає рядок і повертає масив рядків з двох символів. 
Якщо рядок містить непарну кількість символів, тоді другий символ потрібно 
замінити на підкреслення ("_").

Приклад:

splitString('abc') === ['ab', 'c_']
splitString('abcdef') === ['ab', 'cd', 'ef'] */

debugger;

function splitString(str) {    // str = "abc"
  let arr = [];    // arr = ["ab"] після 1 ітерації цикла for, після другої arr = (2) ["ab", "c_"]

  let str1 = str.split('');   // str1 = (3) ["a", "b", "c"]
  for (let i = 0; i < str1.length; i = i + 2) { // на другій ітерації і = 0+2=2, length = 4
    if (str1.length % 2 !== 0) {  //якщо залишок від ділення довжини масива на 2 не = 0, на першій ітерації length=3, на другій 4, ділиться націло
      str1.push('_');     // додати в кінець підкреслення - str1 = (4) ["a", "b", "c", "_"]
    }
    arr.push(str1[i] + str1[i + 1]);  // str1[0] тобто а + str1[0 + 1] тобто b, на другій ітерації str1[2] тобто с + str1[2 + 1] тобто _
  }
  return arr;
}
console.log(splitString('abc'));

//--------------------------------------------------------------

function splitString(str) {
  let string = str;

  if (string.length % 2 !== 0) {
    string += '_';
  }

  const result = [];

  for (let i = 1; i < string.length; i += 2) {
    result.push(string[i - 1] + string[i]);
  }

  return result;
}
