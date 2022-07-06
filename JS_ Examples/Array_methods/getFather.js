/* Напиши функцію getFather, яка приймає масив об'єктів people і об'єкт person і повертає об'єкт, який представляє батька цієї людини (людина, в якої name таке саме, як і father у person).

Функція не повинна змінювати вхідний масив.

Якщо father відсутній у масиві або вхідний масив порожній, поверни null.

Не використовуй цикли for, while і метод forEach!

Приклад:

const people = [
  { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905, father: 'Carel Haverbeke', mother: 'Maria van Brussel' },
  { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956, father: 'Petrus de Milliano', mother: 'Sophia van Damme' },
  { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724, father: 'Frederik de Rycke', mother: 'Laurentia van Vlaenderen' },
  { name: 'Carel Haverbeke', sex: 'm', born: 1796, died: 1837, father: 'Pieter Antone Haverbeke', mother: 'Livina Sierens' },
];

const person = people[0];

getFather(people, person) === people[3]; */

function getFather(people, person) {
  return people.find(
    father => person.father === father.name) || null;
}
