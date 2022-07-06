/* Напиши функцію sortByLifeDuration, яка приймає масив об'єктів people і повертає копію цього масива, де люди відсортовані за тривалістю життя (від найкоротшої до найдовшої).

Функція не повинна змінювати вхідний масив.

Не використовуй цикли for, while і метод forEach!

Приклад:

const carolus = { name: 'Carolus Haverbeke', born: 1832, died: 1905 };
const emma = { name: 'Emma de Milliano', born: 1876, died: 1956 };
const laurentia = { name: 'Laurentia Haverbeke', born: 1710, died: 1786 };
const maria = { name: 'Maria de Rycke', born: 1683, died: 1725 };
const carel = { name: 'Carel Haverbeke', born: 1796, died: 1837 };
const elisabeth = { name: 'Elisabeth Haverbeke', born: 1711, died: 1754 };

const people = [carolus, emma, laurentia, maria, carel, elisabeth];

sortByBorn(people) === [
  carel,
  maria,
  elisabeth,
  carolus,
  laurentia,
  emma
]; // тривалості життя: 41, 42, 43, 73, 76, 80 */
function sortByLifeDuration(people) {
  return [...people].sort((a, b) => (a.died - a.born) - (b.died - b.born));
}
