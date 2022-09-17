/* Робот, робот, робот, собака, робот... Стоп. Собака? Хто впустив сюди собаку? Як бачиш охорона Mate Robot Factory працює в поті чола. Але й такі процеси треба автоматизовувати.

Напиши функцію processArray, яка приймає масив items та функцію callback. Запусти callback для кожного елемента масива, і результат поклади в масив items замість цього елемента.

Повертати нічого не потрібно, просто зміни масив items.

*/
const queue = [
  {type: 'robot'},
  {type: 'robot'},
  {type: 'robot'},
  {type: 'dog'},
  {type: 'robot'},
 ];

const isRobot = (robot) => {
  if (robot.type === 'robot') {
    return true;
  }
  return false;
};

function processArray(items, callback) {
  for (const i in items) {
    items[i] = (callback(items[i]));
  }
  console.log(items);
}

processArray(queue, isRobot);
// queue === [true, true, true, false, true]