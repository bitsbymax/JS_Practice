/* Створи функцію makePackage, яка приймає число connectionsLimit та повертає функцію connect.
Кожен виклик connect має повернути рядок з інформацією про те, скільки разів він ще зможе під'єднатися.
Якщо ліміт вичерпано, connect має повернути рядок You reached the connections limit!.

Приклад:
const connect = makePackage(3);

connect() // '2 connections left'
connect() // '1 connections left'
connect() // '0 connections left'
connect() // 'You reached the connections limit!'
connect() // 'You reached the connections limit!' */

function makePackage(connectionsLimit) {
  let count = connectionsLimit;

  return connect => {
    count--;

    return (count >= 0)
      ? `${count} connections left`
      : 'You reached the connections limit!';
  };
}
