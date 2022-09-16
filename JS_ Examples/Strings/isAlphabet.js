/* Завтра у першокласників буде самостійна робота. Вчать абетку бідолахи. Та ще гірше, тому вчителю, який це все має перевіряти.
У дітей завдання згадати порядок букв у алфавіті та написати стільки букв скільки вони пам'ятають. Завдання вчителя перевірити,
чи діти пишуть букви у правильній послідовності та чи не пропущена буква в рядку. Великі букви чи маленькі значення немає.
Давай допоможемо вчителю функціюєю isAlphabet, яка буде приймати letters і повертати true якщо порядок літер співпадає з порядком в алфавіті, інакше false.
Приклади:
isAlphabet('abc') === true
isAlphabet ('aBc') === true
isAlphabet('abd') === false - після b йде c
isAlphabet('a') === true
isAlphabet('') === false - завдання не виконано
isAlphabet('abcdefghjiklmnopqrstuvwxyz') === false - j йде після i
isAlphabet('tuvwxyz') === true
isAlphabet ('XYZ') === true
isAlphabet('mnoprqst') === false - q йде перед r */


function isAlphabet(letters) { // повертаємо булеве значення в залежності від того, 
  const fullAlphabet = 'abcdefghijklmnopqrstuvwxyz';     // чи порядок вказаних символів відповідає
  if (fullAlphabet.includes(letters.toLowerCase()) && letters) {   // алфавіту, && letters - перевірка 
    return true;                                                   // на порожній рядок
  } else {
    return false;
  }
}