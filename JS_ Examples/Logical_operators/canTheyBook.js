/* Власникам Grand Mate Hotel подобаються роботи наших студентів. У них є ще кілька замовлень для нас.

Напиши функцію-валідатор бронювань canTheyBook, яка приймає кількість дорослих
adultsCount і дітей childrenCount та повертає true, якщо виконуються всі умови:

номер вміщує не більше 8 персон
має бути хоча б один дорослий
на одного дорослого може бути не більше двох дітей
Вважай неперадані аргументи рівними 0.

Приклади:

canTheyBook(0, 2) === false - 0 дорослих, 2 дитини. Порушення правил готелю.
canTheyBook(2, 4) === true - 2 дорослих, 4 дитини. Бронювання дозволено.
canTheyBook(2) === true - 2 дорослих. Бронювання дозволено.
canTheyBook(9) === false - 9 дорослих. Перевищено кількість осіб для однієї кімнати.*/

function canTheyBook(adultsCount = 0, childrenCount = 0) {
  if (adultsCount + childrenCount <= 8 && adultsCount >= 1 && adultsCount / childrenCount >= 0.5) {
    return true;
  } else {
    return false;
  }
}

// --------- Розв'язок ментора!!!-----------

function canTheyBook(adultsCount = 0, childrenCount = 0) {
  const hasEnoughSpace = adultsCount + childrenCount <= 8;
  const hasAdult = adultsCount > 0;
  const hasEnoughAdults = childrenCount <= 2 * adultsCount;

  return hasEnoughSpace && hasAdult && hasEnoughAdults;
}