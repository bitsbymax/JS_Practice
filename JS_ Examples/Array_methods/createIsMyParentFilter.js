/* Є масив people, який містить інформацію про людей в форматі:
[
  {
    "name": "Bernardus de Causmaecker",
    "sex": "m",
    "born": 1721,
    "died": 1789,
    "father": "Lieven de Causmaecker",
    "mother": "Livina Haverbeke"
  },
  {
    "name": "Lieven de Causmaecker",
    "sex": "m",
    "born": 1696,
    "died": 1724,
    "father": "Carel de Causmaecker",
    "mother": "Joanna Claes"
  },
  ...
]

Цей масив фільтруєтся за допомогою people.filter(callback).

Напиши фабрику фільтрів createIsMyParentFilter, яка приймає рядок name (iм'я людини) і повертає callback для пошуку батьків цієї людини.

Якщо людини з таким ім'ям немає в масиві, callback має повертати false. Якщо є, то повертає true виключно для батьків цієї людини.

Приклад:

const callback = createIsMyParentFilter('Carolus Haverbeke');
const parents = people.filter(callback);
// масив об'єктів - батьків 'Carolus Haverbeke'

const callback2 = createIsMyParentFilter('Someone Unknown');
const parents2 = people.filter(callback2);
// порожній масив */

function createIsMyParentFilter(myName) {
  let me = null;

  const callback = (parent, i, people) => {
    if (i === 0) {
      me = people.find(p => p.name === myName);
    }

    if (!me) {
      return false;
    }

    return parent.name === me.mother || parent.name === me.father;
  };

  return callback;
}
