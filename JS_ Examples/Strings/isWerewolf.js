/* До нас дійшла інформація, що перевертні можуть бути небезпечними для людей.
Ми ще не знаємо чому, але ігнорувати цю інформацію не можемо.

Треба якомога швидше почати виявляти isWerewolf перевертнів. Пропонуємо для початку за
ціль target брати слова і речення. Вони далеко не втечуть в разі чого. Як ми зрозуміли,
серед слів і речень перевертні - це ті слова, які читаються в обох напрямках однаково і
при цьому ігнорують пробіли і розділові знаки.

Напиши, будь ласка, функцію isWerewolf, яка отримує рядок target і повертає true,
якщо це перевертень.

Приклади:

isWerewolf('rotator') === true // rotator --> rotator
isWerewolf('home') === false // home --> emoh
isWerewolf('racecar') === true
isWerewolf('red rum sir is murder') === true
isWerewolf('eva, can i see bees in a cave') === true */

/*function isWerewolf(target) {
  let result1 = '';
  let result2 = '';

  for (let i = 0; i < target.length; i++) {
    if (target[i] === ' ') {
      result1 += target[i + 1];
      ++i;
    } else {
      result1 += target[i];
    }
  }
  for (let i = target.length - 1; i >= 0; i--) {
    if (target[i] === ' ') {
      result2 += target[i - 1];
      --i;
    } else {
      result2 += target[i];
    }
  }
  if (result1.toLowerCase() === result2.toLowerCase()) {
    return true;
  }
  return false;
}*/

// --------- Розв'язок ментора!!!-----------

function isWerewolf(target) {
  const lowerTarget = target.toLowerCase();
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  let normal = '';
  let reversed = '';

  for (const char of lowerTarget) {
    if (abc.includes(char)) {
      normal += char;  // символи записуються в звичайному порядку
      reversed = char + reversed;   // символи записуються в зворотньому порядку 
    }
  }
  return normal === reversed;
}

console.log(isWerewolf('red rum sir is murder'));
