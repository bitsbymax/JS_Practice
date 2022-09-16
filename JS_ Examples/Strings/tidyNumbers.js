/* Давай перевіримо чи всі наші номери охайні і всі цифри стоять у правильному порядку. 
Отже, нам треба переконатися що всі цифри у наших номерах розташовані у неспадаючій послідовності.

Оголосимо функцію isTidy яка приймає number у якості параметра та має виводити результат true 
якщо цифри у неспадаючій послідовності, або false якщо ні.

Примітка Вхідні значення завжди додатні.
Приклади:
isTidy(12) ==> true Цифри { 1, 2 } розташовані у неспадаючій послідовності, тобто 1 <= 2.
isTidy(32) ==> false Цифри { 3, 2 } розташовані в спадаючій послідовності, тобто 3 > 2.
isTidy(1024) ==> false Цифри { 1, 0, 2, 4 } розташовані в спадаючій послідовності, оскільки 0 < 1.
isTidy(3445) ==> true Цифри { 3, 4, 4, 5 } розташовані в неспадаючій послідовності, оскільки 4 <= 4.
isTidy(13579) ==> true Цифри { 1, 3, 5, 7, 9 } розташовані в зростаючій послідовності. */



function isTidy(number) {
  const string = number.toString();
  let result = string[0];
  for (let i = 0; i < string.length; i++) {
    for (let n = 1; n < string.length; n++) {
      if (string[n] >= string[i]) {
        result += string[n];
        i++;
      }
    }
    if (result.length == string.length) break;
    else return false;
  }
  return string === result;
}

//----------------------------------------------------------
function isTidy(number) {
  const numToStr = number.toString();

  for (let i = 1; i < numToStr.length; i++) {
    if (numToStr[i - 1] > numToStr[i]) {
      return false;
    }
  }

  return true;
}
