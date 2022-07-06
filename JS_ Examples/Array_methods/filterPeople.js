/* 
Створи функцію filterPeople, яка приймає масив people та повертає масив з тими користувачами які відповідають обом критеріям. Радимо скористатися методом filter.

Приклад:

const people = [
{ firstName: 'Lee', lastName: 'Haverbeke' },
{ firstName: 'Clara', lastName: 'Aernoudts' },
{ firstName: 'Jan', lastName: 'Rycke' },
{ firstName: 'Anna', lastName: 'Bernardus' },
];

const requiredPeople = filterPeople(people);

requiredPeople === [
{ firstName: 'Lee', lastName: 'Haverbeke' },
{ firstName: 'Anna', lastName: 'Bernardus' },
];
*/

function filterPeople(people) {
  const res = people.filter(item =>
    item.firstName.length <= 4 && item.lastName.length > 8);

  return res;
}
