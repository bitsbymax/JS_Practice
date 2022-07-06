/* Напиши функцію getPeopleWithLifeDurations, яка приймає масив об'єктів people і повертає копію цього масива. Кожний об'єкт в копії повинен містити властивість lifeDuration з числом, що представляє тривалість життя цієї людини.

Об'єкти у вхідному масиві не повинні змінитися.

Не використовуй цикли for та while і метод forEach!

Приклад:

const people = [
  { name: 'Carolus Haverbeke', born: 1832, died: 1905 },
  { name: 'Emma de Milliano', born: 1876, died: 1956 },
  { name: 'Maria de Rycke', born: 1683, died: 1724 },
  { name: 'Carel Haverbeke', born: 1796, died: 1837 },
];

getPeopleWithLifeDurations(people) === [
  { name: 'Carolus Haverbeke', born: 1832, died: 1905, lifeDuration: 73 },
  { name: 'Emma de Milliano', born: 1876, died: 1956, lifeDuration: 80 },
  { name: 'Maria de Rycke', born: 1683, died: 1724, lifeDuration: 41 },
  { name: 'Carel Haverbeke', born: 1796, died: 1837, lifeDuration: 41 },
]; */
function getPeopleWithLifeDurations(people) {
  return people.map(p => ({
    ...p,
    lifeDuration: p.died - p.born,
  }));
}
