/*Створи функцію scrollingText, яка приймає рядок як параметр, послідовно переставляє
всі символи у рядку з нульового індексу до останнього і повертає масив з усіма
отриманими комбінаціями в верхньому регістрі.

Приклад

scrollingText("robot")

Повертає:
[ "ROBOT",
  "OBOTR",
  "BOTRO",
  "OTROB",
  "TROBO" ]
*/

/* function scrollingText(word) {

  let resultStr = word.toUpperCase();
  let firstChar = '';
  let elseChars = '';
  let newWord = '';
  const resultArr = [];

  for (let i = 0; i < resultStr.length - 1; i++) {
    firstChar = resultStr.substring(0, 1);
    elseChars = resultStr.substring(1, resultStr.length);
    newWord = elseChars + firstChar;
    resultArr.push(newWord);
    resultStr = newWord;
  }
  const newResultStr = word.toUpperCase();
  resultArr.unshift(newResultStr);
  return resultArr;
} */

//-------------------Кращий варіант-------------------//

function scrollingText(word) {
  const newWord = word.toUpperCase();
  const result = [];
  for (let letter = 0; letter < newWord.length - 1; letter++) {
    result.push(newWord.slice(letter) + newWord.slice(0, letter));
  }
  return result;
}

//--------------------------------------------------------

function scrollingText(word) {
  const result = [];

  for (let i = 0; i < word.length; i++) {
    const part = word.slice(i) + word.slice(0, i);

    result.push(part.toUpperCase());
  }

  return result;
}
