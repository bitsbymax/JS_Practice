/* Зранку отримали лист від Grand Mate Hotel.
Якщо коротко, то програмісти ще не змінили тип поля кількість гостей в формі бронювання і їм все ще приходять рядки Нас буде 4ро, 
Ну думаю десь 3, Точно 2 людини, Велика компанія з 15ти чоловік. Менеджери змушені обробляти такі запити в ручному режимі, через що страждає сервіс.
Думаю, ми можемо допомогти їм. Давай покращимо функцію calculateGuests так, щоб вона почала шукати числа і в середині рядка guestsInput? 
Якщо все-таки неможливо визначити к-сть гостей, або к-сть = 0 - повертай not a number
Вимоги:
Шукай тільки цілі числа всередині рядка. Якщо число дробове - відкидай всі значення після крапки.
Якщо в рядку є два окремих числа - повертай перше з них.
Приклади:
calculateGuests('I think 5 guests') === 5
calculateGuests('Big company of 15 dudes') === 15
calculateGuests('5') === 5
calculateGuests('alone') === 'not a number'
calculateGuests('0') === 'not a number'
calculateGuests('Hello, 9.75 people') === 9
calculateGuests('There will be 7 or 9 guys') === 7
calculateGuests('hello cat walks on my keyboard ksadjfhskaj12.34kasdfhsjk') === 12 */
function calculateGuests(guestsInput) {
  let number = 0;
  let toggle = false;

  for (let i = 0; i < guestsInput.length; i++) {
    if ('123456789'.includes(guestsInput[i])) {
      number += guestsInput[i];
      toggle = true;
    }

    if (toggle && !'123456789'.includes(guestsInput[i])) {
      break;
    }
  }
  if (number === 0 || number === '') {
    return 'not a number';
  }
  return +number;
}
// --------- Розв'язок ментора!!!-----------
function calculateGuests(guestsInput) {
  let result = '';

  for (const char of guestsInput) {  // перебір інпута
    if ('1234567890'.includes(char)) { // якщо в інпуті є символи з рядка '1234567890'
      result += char;                 // записуємо їх в змінну
    } else if (result.length > 0) {  // як тільки програма знаходить символ, 
      break;                         // якого немає в вказаному рядку '1234567890' і  
    }                                  // довжина змінної result більше 0, вийти з циклу.
  }
  return +result || 'not a number';  // повернути змінну з перетворенням в тип даних "число" або рядок 'not a number'
}