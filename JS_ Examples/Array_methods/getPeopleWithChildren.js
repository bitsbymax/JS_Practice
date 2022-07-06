/* Напиши функцію getPeopleWithChildren, яка приймає масив об'єктів people і повертає копію цього масива. Кожний об'єкт в копії повинен містити властивість children з масивом людей, які є дітьми цієї людини.

Об'єкти у вхідному масиві не повинні змінитися.

Не використовуй цикли for, while і метод forEach!

Приклад:

const carolus = { name: 'Carolus Haverbeke', father: 'Carel Haverbeke', mother: 'Maria van Brussel' };
const emma = { name: 'Emma de Milliano', father: 'Petrus de Milliano', mother: 'Sophia van Damme' };
const laurentia = { name: 'Laurentia Haverbeke', father: 'Jan Haverbeke', mother: 'Maria de Rycke' };
const maria = { name: 'Maria de Rycke', father: 'Frederik de Rycke', mother: 'Laurentia van Vlaenderen' };
const carel = { name: 'Carel Haverbeke', father: 'Pieter Antone Haverbeke', mother: 'Livina Sierens' };
const elisabeth = { name: 'Elisabeth Haverbeke', father: 'Jan Haverbeke', mother: 'Maria de Rycke' };

const people = [carolus, emma, laurentia, maria, carel, elisabeth];

getPeopleWithChildren(people);

carolus.children === [];
maria.children === [laurentina, elisabeth]; */

function getPeopleWithChildren(people) {
  return people.map(p => ({
    ...p,
    children: getChildren(people, p),
  }));
}

function getChildren(people, { name }) {
  return people.filter(
    child => child.father === name || child.mother === name,
  );
}
