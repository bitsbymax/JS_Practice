/* Напиши функцію getEmployeesList, яка приймає масив people та повертає відсортований в алфавітному порядку список повних імен працівників.

Приклад:
const people = [
{ id: 118, firstName: 'Jan', lastName: 'Rycke' },
{ id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
{ id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
{ id: 201, firstName: 'Anna', lastName: 'Bernardus' },
{ id: 204, firstName: 'Lieven', lastName: 'Causmaecker' },
{ id: 205, firstName: 'Maria', lastName: 'Sturm' },
];

getEmployeesList(people) === [
'Anna Bernardus',
'Clara Aernoudts',
'Jan Rycke',
'Lee Haverbeke',
'Lieven Causmaecker',
'Maria Sturm'
];
*/
function getEmployeesList(people) {
  const res = [];
  const sorted = people.sort((a, b) => a.firstName.localeCompare(b.firstName));

  sorted.forEach((x) => (res.push(`${x.firstName} ${x.lastName}`)));

  return res;
}
