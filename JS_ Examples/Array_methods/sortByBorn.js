/* Напиши функцію sortByBorn, яка приймає масив об'єктів people і повертає копію цього масива, де люди відсортовані по року народження (від найранішого до найпізнішого).

Функція не повинна змінювати вхідний масив.

Не використовуй цикли for, while і метод forEach!

Приклад:

const carolus = { name: 'Carolus Haverbeke', born: 1832 };
const emma = { name: 'Emma de Milliano', born: 1876 };
const laurentia = { name: 'Laurentia Haverbeke', born: 1710 };
const maria = { name: 'Maria de Rycke', born: 1683 };
const carel = { name: 'Carel Haverbeke', born: 1796 };
const elisabeth = { name: 'Elisabeth Haverbeke', born: 1711 };

const people = [carolus, emma, laurentia, maria, carel, elisabeth];

sortByBorn(people) === [
  maria,
  laurentia,
  elisabeth,
  carel,
  carolus,
  emma
]; */
function sortByBorn(people) {
  return [...people].sort((a, b) => a.born - b.born);
}
