/* Ми удосконалили нашу програму для збору статистики з вебінарів Міші. Тепер після збору статистики, 
вона відправляє дані на сервер у вигляді рядка 111001010111011, 
де 1 - це студент, який зрозумів тему, а 0 - відповідно, ні.
Було б корисно розуміти скільки відсотків групи засвоїли матеріал, це покаже наскільки вебінар був ефективний.
Створи функцію getSuccessRate, яка приймає рядок statistic та повертає відсоток студентів, які зрозуміли матеріал, закруглюючи до найближчого цілого.
Приклади:
getSuccessRate('11100') === 60
getSuccessRate('1100') === 50
getSuccessRate('000000') === 0
getSuccessRate('11111') === 100
getSuccessRate('') === 0 */

function getSuccessRate(statistic) {
  if (!statistic) return 0;
  let numberOfExcellents = '';
  let numberOfPupils = '';
  
  for (const char of statistic) {
    if ('1'.includes(char)) {
      numberOfExcellents += char;
    }
  }

  for (const char of statistic) {
    if ('01'.includes(char)) {
      numberOfPupils += char;
    }
  }

  let correlation = Math.round((numberOfExcellents.length * 100) / numberOfPupils.length);
  return correlation;
}

// --------- Розв'язок ментора!!!-----------

function getSuccessRate(statistic) {
  if (!statistic) return 0;

  let count = 0;
  for (const char of statistic) {
    if (char === '1') {
      count++;
    }
  }
  return Math.round(count / statistic.length * 100);
}