/* Ну що, коли всі процеси налаштовано, потрібно ставити перед собою правильні цілі. 
Наші роботи найкращі на ринку, тому потрібно нарощувати оберти і збільшувати обсяги виробництва.

Давай напишемо функцію getPlan, яка складе план виробництва на задану кількість 
місяців months. Зараз ми виготовляємо currentProduction роботів на місяць і хочемо, щоб 
щомісяця це число зростало на заданий відсоток percent.

Якщо число роботів на ітерації виявилось не цілим, закругли його вниз. В решті отримаємо 
масив з цілями на найближчі місяці.

Приклади:

getPlan(1000, 6, 30) === [1300, 1690, 2197, 2856, 3712, 4825]
getPlan(500, 3, 50) === [750, 1125, 1687] */

function getPlan(currentProduction, months, percent) {
  let myArray = [];  // створюємо порожній масив
  const interestRateCalc = percent / 100; // змінна обрахунку відсотків 

  for (let i = 0; i < months; i++) {
    currentProduction = currentProduction * interestRateCalc + currentProduction; // вираховуємо відсоток і додаємо його до базавої суми
    currentProduction = Math.floor(currentProduction); // закругляємо вниз
    myArray.push(currentProduction);  // додаємо в кінець масиву
  }

  return myArray;
}

//----------------Розв'язок ментора!!!-----------------

function getPlan(currentProduction, months, percent) {
  const targets = [];      // створюємо порожній масив
  let target = currentProduction;    // змінна для зберігання значення з currentProduction

  for (let month = 1; month <= months; month++) {
    target += Math.floor(target * percent / 100);      // 1000 = 1000 + заокруглення вниз(1000 * 30 / 100) = 1300 (перша ітерація)
    targets.push(target);        // додаємо в кінець масиву
  }

  return targets;
}