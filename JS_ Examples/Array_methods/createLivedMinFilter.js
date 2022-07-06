/* Напиши функцію createLivedMinFilter, яка приймає невід'ємне ціле число age і повертає функцію-колбек.

Ця функція-колбек потім використовується в методі filter. Метод filter відфільтровує масив об'єктів people і залишає тільки тих людей, хто прожив мінімум age років.

Приклад:

const carolus = { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905 };
const emma = { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956 };
const maria = { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724 };
const carel = { name: 'Carel Haverbeke', sex: 'm', born: 1796, died: 1837 };

const people = [carolus, emma, maria, carel];

people.filter(createLivedMinFilter(60)) // [carolus, emma] */
function createLivedMinFilter(age) {
  return (p) => p.died - p.born >= age;
}
