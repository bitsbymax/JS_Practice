/* Функція isEven приймає число number. Перевір чи є воно парним (ділиться на 2 без остачі). 
Для парних чисел повертаємо true, для непарних false. Дробові числа не є парними.

Приклади:
isEven(100) === true
isEven(0) === true
isEven(77) === false
isEven(10.2) === false
isEven(-2) === true */


function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}