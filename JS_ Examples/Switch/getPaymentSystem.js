/* Якщо поглянути на банківську карту можна помітити на ній 8-10 значний код. Що означають ці числа?
Перші 4 числа означають платіжну систему у якій працює ваша карта. Наприклад, якщо номер карти починається з:

34, 37 це платіжна система American Express;
4 це VISA
51, 52, 53, 54, 55 це MasterCard
63, 67 це Maestro
Там є й інші платіжні системи, але зараз пропоную створити функцію getPaymentSystem, яка допоможе
нам визначати банківську систему за кодом карти на початку.

Приклад:

getPaymentSystem(4) повертає VISA;
getPaymentSystem(37) повертає American Express;
getPaymentSystem(1234) повертає unknown payment system; */

function getPaymentSystem(cardNumbers) {
  switch (cardNumbers) {
    case 34:
    case 37:
      return 'American Express';


    case 4:
      return 'VISA';

    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
      return 'MasterCard';

    case 63:
    case 67:
      return 'Maestro';

    default:
      return 'unknown payment system';
  }
}
