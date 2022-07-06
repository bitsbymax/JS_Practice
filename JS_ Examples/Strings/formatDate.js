/*
Дата виготовлення наших роботів зберігається у форматі YYYY-MM-DD, твоя задача перевести
цю дату у новий формат DD.MM.YYYY, щоб привести всі дати до нового стандарту компанії.
Створи функцію formatDate, яка прийматиме рядок date, та повертатиме новий рядок у правильному форматі.

Приклад:

formatDate('2020-02-18') // '18.02.2020' 
 */

/**
 * @param {string} date
 *
 * @returns {string}
 */

function formatDate(date) {
  let newDate = date;

  newDate = newDate.replace(/-/g, '.');
  newDate = newDate.split(/[.,.,.]/);

  const emtyBox = [];
  let firstIndex = 0;

  for (let i = newDate.length - 1; i >= 0; i--) {
    emtyBox[firstIndex] = newDate[i];
    firstIndex++;
  }

  return emtyBox.join('.');
}
