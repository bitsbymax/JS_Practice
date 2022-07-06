/*
Було б приємно мати функцію reverseMessage, яка приймала б послання message, перевертали кожне слово та повертала результат.

Приклад:
decryptMessage('tpircsavaJ si eht egaugnal fo erutuf'); // 'Javascript is the language of future'
 */

/**
 * @param {string} message
 *
 * @returns {string}
 */

function reverseMessage(message) {
  const arr1 = message.split('')
    .reverse().join('').split(' ').reverse().join(' ');

  return arr1;
}
//////////////////////////////////////////////////////
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}
//////////////////////////////////////////////////////
const reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)
