/* # Group by key

Implement a function `groupByKey` that takes an array of similar objects 
(`books`, `students`, etc.) and a string `key` that is one of possible item 
keys (`key: keyof T`). The function returns an object where all the items are
grouped by values stored under a given `key` (see the examples).
*/
/* const books = [
  { id: 1, color: 'red', country: 'Ukraine' },
  { id: 1, color: 'red', country: 'Italy' },
  { id: 1, color: 'green', country: 'Ukraine' },
; */

// Group books by color
/* groupByKey(books, 'color') === {
  'red': [
    { id: 1, color: 'red', country: 'Ukraine' },
    { id: 1, color: 'red', country: 'Italy' },
  ],
  'green': [
    { id: 1, color: 'green', country: 'Ukraine' },
  ],
} */

// group books by country
/* groupByKey(books, 'country') === {
  'Ukraine': [
    { id: 1, color: 'red', country: 'Ukraine' },
    { id: 1, color: 'green', country: 'Ukraine' },
  ],
  'Italy': [
    { id: 1, color: 'red', country: 'Italy' },
  ],
} */

type GroupsMap<T> = {  // у нас є тип, це об'єкти, де можуть бути будь-які стрінгові ключі, а в них зберігатимуться масиви певного типу
  [key: string]: T[];
};

export function groupByKey<Item>( // в залежності від того, що передаватиметься у функцію першим параметром, те і буде попадати в generic Item
  items: Item[], // наприклад books - це масив з об'єктами [{},{},]
  key: keyof Item, // 2 параметром може бути один з ключів об'єкта, наприклад буде передано 'color'
): GroupsMap<Item> {
  const result: GroupsMap<Item> = {}; // створюємо порожінй об'єкт з типом GroupsMap, в який передаватиметься generic Item

  items.forEach((item) => { // перебір всіх об'єктів масива
    const value = String(item[key]); // у змінну попадатиме на кожній ітерації одне зі значень ключа color, наприклад першим буде 'red', бо color: 'red'
    // String - метод викор. для того, щоб ключ був гарантовано типу string

    if (!(value in result)) {
      result[value] = []; // далі створюємо в об'єкті ключ 'red' з порожнім масивом. Якщо на якійсь з ітерацій такий ключ вже буде існувати в об'єкті, умова не виконається
      /*{
          'red': [],
        }
      */
    }

    result[value].push(item); // і якщо умова вище не виконається, ми в цей масив, що по ключу value, додамо об'єкт, який попав у метод forEach на цій ітерації
    /*{
        'red': [{ id: 1, color: 'red', country: 'Ukraine' },],
      }
      */
  });

  return result;
}
