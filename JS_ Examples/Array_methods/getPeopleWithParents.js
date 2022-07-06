/* Реалізуй функцію getPeopleWithParents, яка приймає масив об'єктів people та повертає новий масив людей, в яких властивості mother та father містять посилання на об'єкти матері та батька з нового массива (НЕ зі старого).

ВАЖЛИВО! Об'єкти початкового массива people НЕ повинні змінюватися
Якщо батька немає в масиві, НЕ змінюй поле father. Аналогічно mother.
Мати — це людина, чиє ім'я записано в полі mother, аналогічно батько. 

const people = [
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

const result = getPeopleWithParents(people);

result === [
  {
    "name": "Bernardus de Causmaecker",
    "sex": "m",
    "born": 1721,
    "died": 1789,
    "father": result[1],
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
*/
function getPeopleWithParents(people) {
  const copy = people.map(p => ({ ...p }));

  copy.forEach(me => {
    const mother = copy.find(mom => mom.name === me.mother);
    const father = copy.find(dad => dad.name === me.father);

    if (mother) {
      me.mother = mother;
    }

    if (father) {
      me.father = father;
    }
  });

  return copy;
}

function getPeopleWithParents(people) {
  const copy = people.map(p => ({ ...p }));

  copy.forEach(me => {
    me.mother = copy.find(mom => mom.name === me.mother) || me.mother;
    me.father = copy.find(dad => dad.name === me.father) || me.father;
  });

  return copy;
}
