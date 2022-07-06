/* Напиши функцію getOrder, яка приймає рядок wish та число wordsCount і повертає рядок де будуть перші wordsCount слів з wish.

Приклад: 
const wish = `I want a short stylish haircut, like my brother's`;

getOrder(wish, 4); // 'I want a short'
getOrder(wish, 6); // 'I want a short stylish haircut,'
*/

/**
 * @param {string} wish
 * @param {number} wordsCount
 *
 * @returns {string}
 */

function getOrder(wish, wordsCount) {
  const splited = wish.split(' ', wordsCount);

  return splited.join(' ');
}
