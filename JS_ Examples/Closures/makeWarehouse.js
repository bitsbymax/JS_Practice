/* Створи функцію makeWarehouse, яка приймає необов'язковий параметр goods (масив чисел з вагою кожного товару, що вже зберігається на складі) і повертає функцію warehouse.

Якщо викликати warehouse без параметрів, вона поверне об'єкт статистики з полями totalWeight і averageWeight - загальна та середня вага всіх товарів на складі (закруглена до найближчого цілого).

Якщо передати декілька чисел, то warehouse додасть їх до загальної ваги всього, що вже зберігається на складі.

Приклад:

const  firstWarehouse = makeWarehouse([10, 20])
firstWarehouse(); // { totalWeight: 30, averageWeight: 15 }

firstWarehouse(10, 20, 30, 40, 10, 10);
firstWarehouse(56, 44);

firstWarehouse(); // { totalWeight: 250, averageWeight: 25 }

const secondWarehouse = makeWarehouse([10])
secondWarehouse() // { totalWeight: 10, averageWeight: 10 }

firstWarehouse() // { totalWeight: 250, averageWeight: 25 } */

function makeWarehouse(goods = []) {
  const Wh = {
    totalWeight: 0,                                          
    averageWeight: 0,
  };

  let goodsLength = goods.length;

  Wh.totalWeight = goods.reduce((x, y) => x + y, Wh.totalWeight);

  if (goods.length === 0) {
    Wh.averageWeight = Wh.averageWeight + 0;
  } else {
    Wh.averageWeight = Math.round(Wh.totalWeight / goodsLength);
  }

  return (...rest) => {
    const paramArr = [...rest];

    if (paramArr.length === 0) {
      return Wh;
    } else {
      goodsLength += paramArr.length;
      Wh.totalWeight = paramArr.reduce((x, y) => x + y, Wh.totalWeight);
      Wh.averageWeight = Math.round(Wh.totalWeight / goodsLength);
    };
  };
};
