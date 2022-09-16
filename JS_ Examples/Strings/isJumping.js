/* Реалізуй функцію isJumping, яка приймає число number та повертає рядок 
JUMPING, якщо кожна цифра в числі відрізняється від сусідньої на 1. 
Якщо умова не виконується - рядок NOT JUMPING.

Примітки:

Вхідне число завжди додатнє
Різниця між 9 та 0 не розцінюється як 1
Всі числа, які складаються із однієї цифри - JUMPING
Приклади:

isJumping(9) === 'JUMPING'
It's single-digit number
isJumping(79) === 'NOT JUMPING'
djcent digits don't differ by 1
isJumping(23454) === 'JUMPING'
djcent digits differ by 1 */
debugger;

function isJumping(number) {

  const newString = number.toString();
  let count = 0;

  for (let i = 0; i < newString.length; i++) {
    if ((+newString[i + 1] - 1 === +newString[i] && +newString[i - 1] + 1 === +newString[i]) &&
      (+newString[i + 1] === +newString[i] - 1 && +newString[i - 1] === +newString[i] + 1) &&
      newString.length === 1) {
      continue;
    }
    count++;
    break;
  }
  if (!(count)) {
    return 'JUMPING';
  } else {
    return 'NOT JUMPING';
  }
}
console.log(isJumping(890));

//---------------------------------------------------------------

function isJumping(number) {
  const str = String(number);

  for (let i = 1; i < str.length; i++) {
    const difference = str[i] - str[i - 1];

    if (Math.abs(difference) !== 1) {
      return 'NOT JUMPING';
    }
  }

  return 'JUMPING';
}
