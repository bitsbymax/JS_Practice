/* Створи функцію mapDatabase, яка приймає масив people і повертає новий масив з об'єктами для цих людей.

Приклад:

input: [
  ['Mike', 'Anderson'],
  ['Lori IV', 'Pirs'],
]
output: [
  { firstName: 'Mike', lastName: 'Anderson' },
  { firstName: 'Lori IV', lastName: 'Pirs' }
]
*/

const mapDatabase = (people) => {
  const result = [];

  people.forEach((x) => (result.push(
    {
      firstName: x[0],
      lastName: x[1],
    })));

  return result;
};
