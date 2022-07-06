/* Справи готелю пішли на краще. У Mate Grand Hotel більше не повторюються випадки, коли банда з 20 дітей забронювала 8-місний номер.

Власники знову звернулися до нас. У них є нова послуга: Екстра-ліжко для малюка до 2-х років. Тепер номер вміщує до 8 дорослих + 1 малюк.

Потрібно оновити функцію canTheyBook так, щоб вона приймала третій аргумент babiesCount та трохи змінити умови:

номер вміщує не більше 8 персон, але 9-м можна підселити малюка;
має бути мінімум один дорослий;
на одного дорослого може бути не більше 2-ох дітей та малюків;
малюків можна розмістити на ліжках для дорослих, тому в номері може бути більше ніж один малюк (якщо виконуються інші умови).
Приклади:

canTheyBook(2, 3, 1) === true - Бронювання дозволено
canTheyBook(8, 0, 1) === true - Бронювання дозволено
canTheyBook(4, 2, 3) === true - Бронювання дозволено
canTheyBook(0, 1, 1) === false - Не можна бронювати без дорослих
canTheyBook(9) === false - Забагато людей
canTheyBook(8, 1) === false - Дитина не может бути дев'ятою
canTheyBook(2, 2, 3) === false - Недостатньо дорослих */


function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  if (adultsCount + childrenCount <= 8 && adultsCount + childrenCount +
    babiesCount <= 9 && adultsCount >= 1 && adultsCount / childrenCount >= 0.5 &&
    adultsCount / babiesCount >= 0.5 && adultsCount / (childrenCount + babiesCount) >= 0.5) {
    return true;
  } else {
    return false;
  }
}

// --------- Розв'язок ментора!!!-----------

function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  const hasAdult = adultsCount > 0;
  const hasEnoughAdults = (childrenCount + babiesCount) <= 2 * adultsCount;
  const totalCount = adultsCount + childrenCount + babiesCount;
  const hasEnoughSpace = (totalCount <= 8) || (totalCount === 9 && babiesCount > 0);

  return  hasEnoughSpace && hasAdult && hasEnoughAdults;
}