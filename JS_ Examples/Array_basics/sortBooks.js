/* Напиши функцію sortBooks, яка приймає масив стелажів shelves (масиви з книгами) та повертає масив книг в алфавітному порядку.

Приклад: 
sortBooks([
  ['Going Over', 'Brazen'],
  ['The Enemy'],
  ['Followers', 'Belle Epoque']
]); // ['Belle Epoque', 'Brazen', 'Followers', 'Going Over', 'The Enemy']
*/

/**
 * @param {string[][]} shelves
 *
 * @returns {string[]}
 */
function sortBooks(shelves) {
  const books = shelves.flat(1);

  return books.sort();
}
