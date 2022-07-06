/* Напиши функцію createSorterBy, яка приймає рядок field і повертає функцію-коллбек. Ця функція-коллбек буде застосовуватися з методом sort до масиву об'єктів з однаковими ключами. Об'єкти повинні бути відсортовані за даною властивістю field.

Приклади:

const carolus =  { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905 };
const emma = { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956 };
const maria = { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724 };
const carel = { name: 'Carel Haverbeke', sex: 'm', born: 1796, died: 1837 };

const people = [carolus, emma, maria, carel];

people.sort(createSorterBy('name')); // [carel, carolus, emma, maria]
people.sort(createSorterBy('born')); // [maria, carel, carolus, emma] */
function createSorterBy(field) {
  return (a, b) => {
    switch (typeof a[field]) {
      case 'boolean':
      case 'number':
        return a[field] - b[field];

      case 'string':
        return a[field].localeCompare(b[field]);

      default:
        return 0;
    }
  };
};
