/* Допиши функцію removeLetter, котра приймає рядок string та 
букву letter. Результатом функції буде рядок string, який не містить 
символу вказаного у letter.

Приклад:

removeLetter('Mate academy', 'a') === 'Mte cdemy'
removeLetter('Aaaa', 'a') === 'A'
removeLetter('rrr', 'r') === '' */

function removeLetter(string, letter) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      continue;
    } else {
      result += string[i];
    }
  }
  return result;
}

