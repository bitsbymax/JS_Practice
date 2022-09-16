/*Функція isSpecialNumber приймає число, та повинна визначити, чи особливе воно чи ні.
Число називається особливим, якщо воно включає в себе лише 0, 1, 2, 3, 4 або 5.

Примітки:

Число, яке передається у функцію є додатнім (n > 0).
Всі одноцифрові числа в інтервалі [0:5] вважаються особливими числами.
Приклади:

isSpecialNumber(2) === "Special!!"

2 - це одноцифрове число в інтервалі [0:5].
isSpecialNumber(9) === "NOT!!"

хоча 9 - це одноцифрове число, але воно не знаходиться в інтервалі [0:5].
isSpecialNumber(23) === "Special!!"

всі цифри числа 23 знаходяться у інтервалі [0:5].
isSpecialNumber(39) === "NOT!!"

хоча і є число 3, яке знаходиться у інтервалі, але друге число (9)
у ньому не знаходиться (кожна цифра має знаходитись в інтервалі [0:5]).  */


function isSpecialNumber(n) {
  const string = n.toString();
  let res = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] <= 5) {
      res += string[i];
    }
  }
  if (res.length == string.length) {
    return "Special!!";
  }
  return "NOT!!";
}

//--------------------------------------------------

function isSpecialNumber(n) {
  const check = n.toString();

  for (let i = 0; i < check.length; i++) {
    if (+check[i] > 5) {
      return 'NOT!!';
    }
  }

  return 'Special!!';
}
