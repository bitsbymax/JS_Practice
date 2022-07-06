/* Роботи протестовані. Повільні роботи відправлені на апгрейд. Mate Post хоче купити у нас 
десяток роботів для доставки вантажів по місту. Для цього їм потрібні роботи, які будуть 
переносити за день найбільшу сумарну вагу.

Давай напишемо функцію compareRobots, яка приймає 2 масива. Перший масив firstRobotResults 
містить вагу кожного вантажу, який перевіз за добу перший робот, другий secondRobotResults - 
відповідно вага вантажів другого робота.

Перевір, хто з роботів перевіз більшу вагу за день, та поверни рядок з рекомендацією кого з 
роботів варто купити (див. приклади).

Приклади:

compareRobots([12, 4, 13], [1, 1, 4, 5, 12]) === 'First robot for sale!' - 29 > 23
compareRobots([9, 7, 9], [1, 3, 4, 5, 12]) === 'Both robots for sale!' - 25 = 25
compareRobots([1, 3, 4], [1, 1, 4, 5]) === 'Second robot for sale!' - 8 < 11 */


function compareRobots(firstRobotResults, secondRobotResults) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < firstRobotResults.length; i++) {
    sum1 += firstRobotResults[i];   // додавання кожного елементу масива до змінної sum1
  }

  for (let i = 0; i < secondRobotResults.length; i++) {
    sum2 += secondRobotResults[i];  // додавання кожного елементу масива до змінної sum2
  }

  if (sum1 > sum2) {
    return 'Second robot for sale!';
  } else if (sum1 < sum2) {
    return 'Second robot for sale!';
  } else {
    return 'Both robots for sale!';
  }
}

console.log(compareRobots([12, 4, 13], [1, 1, 4, 5, 12]));

//----------------Розв'язок ментора!!!-----------------
function compareRobots(firstRobotResults, secondRobotResults) {
  const firstTotal = getTotalWeight(firstRobotResults);
  const secondTotal = getTotalWeight(secondRobotResults);

  if (firstTotal > secondTotal) {
    return 'First robot for sale!';
  } 
  if (firstTotal < secondTotal) {
    return 'Second robot for sale!';
  }
  return 'Both robots for sale!';
}

function getTotalWeight(weights) {   // функція для вирахування ваги
  let total = 0;
  for (const weight of weights) {
    total += weight;
  }
  return total;
}