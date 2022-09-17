/* "Ти завжди все перекручуєш!", - казали вони. Що ж прийшла пора дійсно взяти і все перекрутити. Але щоб перекручувати було легше, ми як завжди створимо функцію.

Створи функцію formatMessage, яка приймає рядок message зі словами розділеними одним пробілом та callback. Кожне слово рядка message потрібно пропустити через callback, як через м'ясорубку, результат записати в новий рядок і повернути його.

Приклади:
function capitalize (word) {
  return word[0].toUpperCase() + word.slice(1);
}

formatMessage('this is sparta', capitalize);
// 'This Is Sparta'

const shorten = word => word.slice(0, 2);
formatMessage('this is sparta', shorten);
// 'th is sp'
*/

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function formatMessage(message, callback) {
  const word = message.split(' ');
  let res = '';

  for (const i of word) {
    res += callback(i) + ' ';
  }

  return res.trim();
}

function formatMessage(message, callback) {
  const words = message.split(' ');
  const formattedWords = [];

  for (const word of words) {
    const formattedWord = callback(word); // call callback for each word

    formattedWords.push(formattedWord);
  }

  return formattedWords.join(' ');
}

// formatMessage('this is sparta', capitalize);
// 'This Is Sparta'
