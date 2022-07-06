/* Напиши функцію getPeopleWithCentury, яка приймає масив об'єктів people і повертає копію цього масива. Кожний об'єкт в копії повинен містити властивість century з числом, що представляє століття, до якого дожила ця людина.

Об'єкти у вхідному масиві не повинні змінитися.

Не використовуй цикли for, while і метод forEach!

Примітка: 1735 - це 18 століття, 1700 - це 17 століття.

Приклад:

const people = [
  { name: 'Carolus Haverbeke', born: 1832, died: 1905 },
  { name: 'Emma de Milliano', born: 1876, died: 1956 },
  { name: 'Maria de Rycke', born: 1683, died: 1724 },
  { name: 'Carel Haverbeke', born: 1796, died: 1837 },
];

getPeopleWithCentury(people) === [
  { name: 'Carolus Haverbeke', born: 1832, died: 1905, century: 20 },
  { name: 'Emma de Milliano', born: 1876, died: 1956, century: 20 },
  { name: 'Maria de Rycke', born: 1683, died: 1724, century: 18 },
  { name: 'Carel Haverbeke', born: 1796, died: 1837, century: 19 },
]; */
function getPeopleWithCentury(people) {
  return people.map(p => ({
    ...p,
    century: Math.ceil(p.died / 100),
  }));
}
