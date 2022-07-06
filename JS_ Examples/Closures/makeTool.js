/* Напиши функцію makeTool, яка приймає рядок part та повертає функцію — інструмент для видалення деталі part з роботів. Функція інструмент приймає об'єкт robot та повертає його копію, але вже без деталі part. При цьому сам robot не повинен змінюватися.

Приклад: */
const kobi = {
  wheels: 10,
  chipVersion: 11,
  serialNumber: 100
};

const removeWheels = makeTool('wheels');
const removeChip = makeTool('chipVersion');

const robotWithoutWheels = removeWheels(kobi);
// { serialNumber: 100, chipVersion: 11 }
const robotWithoutChip = removeChip(kobi);
// { serialNumber: 100, wheels: 10 }
const robotWithoutDetails = removeWheels(robotWithoutChip);
// { serialNumber: 100 }

// kobi === {
//   wheels: 10,
//   chipVersion: 11,
//   serialNumber: 100
// }

function makeTool(part) {
  const tool = robot => {
    const copy = { ...robot };

    delete copy[part];

    return copy;
  };

  return tool;
}
