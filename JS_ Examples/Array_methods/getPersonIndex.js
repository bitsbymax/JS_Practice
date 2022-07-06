/* Що ж, давай знайдемо індекс першої людини, ім'я якої закінчується на вказану букву.

Напиши функцію getPersonIndex, яка приймає масив people та літеру nameEndsWith і повертає індекс відповідної людини в масиві або null, якщо нікого не знайдено. Радимо скористатися методом findIndex.

Приклад: */
/* const people = [
{ id: 118, firstName: 'Jan', lastName: 'Rycke' },
{ id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
{ id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
{ id: 201, firstName: 'Anna', lastName: 'Bernardus' },
]; */

// getPersonIndex(people, 'a') === 2
// getPersonIndex(people, 'k') === null

const getPersonIndex = (people, nameEndsWith) => {
  const res = people.findIndex((x) =>
    x.firstName.charAt(x.firstName.length - 1) === nameEndsWith);

  if (res === -1) {
    return null;
  }

  return res;
};
