/* Кілька людей стоять поспіль, розділені на дві команди. Перша людина 
потрапляє до команди 1, друга - до команди 2, третя - до команди 1 і так далі.

Реалізуй функцію getRowWeights, яка приймає масив чисел (ваги людей) та 
повертає новий масив з двох цілих чисел, де перше - загальна вага 
команди 1, а друге - загальна вага команди 2.

Примітки:

Розмір масиву не менше 1.
Усі числа додатні.
Приклад:

getRowWeights([10]) === [10, 0]
getRowWeights([10, 85, 90]) === [100, 85]
getRowWeights([8, 5, 9, 3]) === [17, 8] */

debugger;

function getRowWeights(array) {
  const newArray = [];
  let weight1 = 0;
  let weight2 = 0;

  for (let i = 0; i < array.length; i = i + 2) {
    weight1 += array[i];
  }
  for (let i = 1; i < array.length; i = i + 2) {
    weight2 += array[i];
  }

  newArray.push(weight1, weight2);

  return newArray;
}

console.log(getRowWeights([10, 85, 90]));
