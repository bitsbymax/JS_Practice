/* Перша партія роботів готова, тепер їх треба перевірити. Всі роботи унікальні, 
тому в кожного своя швидкість руху. Помилка в коді? Можливо. Але зараз не до цього. 
Треба визначити найнижчу, найвищу та середню швидкість наших роботів.

Наш сервер приймає масив швидкостей роботів testResults, пропускає його через 
функцію getSpeedStatistic і повертає статистику у вигляді масиву, де перший елемент - 
це мінімальна швидкість, другий - максимальна і третій - середня швидкість, закруглена вниз.

Приклади:

getSpeedStatistic([10, 10, 11, 9, 12, 8]) === [8, 12, 10]
getSpeedStatistic([10]) === [10, 10, 10]
getSpeedStatistic([]) === [0, 0, 0]
getSpeedStatistic([8, 9, 9, 9]) === [8, 9, 8]
getSpeedStatistic([5]) === [5, 5, 5] */

function getSpeedStatistic(testResults) {
  if (testResults.length === 0) {
    return [0, 0, 0];
  }
  const minimalExpression = Math.min(...testResults); // визначає мінімальне значення і записує його число в змінну
  const maximalExpression = Math.max(...testResults); // визначає максимальне значення і записує його число в змінну
  let averageExpression = 0;
  let testResultSum = 0;

  for (let i = 0; i < testResults.length; i++) {
    testResultSum += testResults[i];     // сумує всі значення масиву і записує в змінну testResultSum
  }
  averageExpression = Math.floor(testResultSum / testResults.length);  // знаходження середнього і заокруглення 
  return [minimalExpression, maximalExpression, averageExpression];
}

//----------------Розв'язок ментора!!!-----------------

function getSpeedStatistic(testResults) {
  if (testResults.length === 0) {
    return [0, 0, 0];
  }

  let min = testResults[0];  
  let max = testResults[0];
  let sum = 0;

  for (const speed of testResults) {  // of повертає саме значення
    sum += speed;     // сумує всі значення масиву і записує в змінну sum

    if (speed < min) {   // порівнює кожний отриманий елемент з 1 елементом в масиві
      min = speed;
    }

    if (speed > max) {
      max = speed;
    }
  }

  const average = Math.floor(sum / testResults.length);

  return [min, max, average];
}
console.log(getSpeedStatistic([10, 10, 11, 9, 12, 8]));
