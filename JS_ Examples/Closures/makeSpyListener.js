/* Напиши функцію makeSpyListener, яка створює та повертає функцію listener - ПЗ для робота. Функція listener має працювати наступним чином:

1. Якщо її викликати передавши рядок, він має бути збережений в пам'яті робота
2. Якщо її викликають без параметрів, треба повернути массив всіх записаних даних
3. Якщо ми викличемо метод listener.clear(), необхідно стерти всі дані і повернути рядок Transferring data... Deleting data... Clear!.
*/

function makeSpyListener() {
  const memory = [];
  const listener = (str) => {
    if (typeof str === 'string') {
      memory.push(str);
    }

    return memory;
  };

  listener.clear = () => {
    memory.length = 0;

    return 'Transferring data... Deleting data... Clear!';
  };

  return listener;
}

const listener = makeSpyListener();

listener(); // []
listener(`Mate Robot Factory is weird`);
listener(`It’s a spy robot!!! Catch him!`);

listener(); // [`Mate Robot Factory is weird`, `It’s a spy robot!!! Catch him!`]
listener.clear(); // `Transferring data... Deleting data... Clear!`
listener(); // []
