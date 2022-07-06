/*
Напиши функцію getPersonById, яка прийматиме число id, масив people та повертатиме знайдений по ідентифікатору об'єкт. Якщо нічого не знайдено, поверни null. Радимо скористатися методом find для масивів.

Приклад:

const people = [
{ id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
{ id: 118, firstName: 'Jan', lastName: 'Rycke' },
{ id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
{ id: 201, firstName: 'Anna', lastName: 'Bernardus' },
];

getPersonById(201, people) === { id: 201, firstName: 'Anna', lastName: 'Bernardus' }
getPersonById(404, people) === null 
*/

/* function getPersonById(id, people) {
  for (const i in people) {
    if (people[i].id === id) {
      return people[i];
    }
  }

  return null;
}; */

function getPersonById(id, people) {
  const res = people.find((x) => x.id === id);

  if (!res) {
    return null;
  }

  return res;
}
