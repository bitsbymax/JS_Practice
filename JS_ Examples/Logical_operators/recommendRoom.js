/* Нещодавно в Grand Mate Hotel добудували новий корпус з 4 місними номерами. 
Власники знову звернулися до нас по допомогу. 
Потрібно створити функцію recommendRoom для сайту, яка буде автоматично рекомендувати потрібну 
кімнату для введених параметрів adultsCount, childrenCount, babiesCount.
Є два види кімнат:

small room для 4 осіб
big room для 8 осіб

Не забувай про опцію extra bed - додаткове ліжко для немовляти. Воно доступне як для номерів на 4 людини, 
так і для номерів на 8 осіб.
Можеш не перейматися за валідність даних - canTheyBook валідатор вже перевірив їх. Просто поверни 
правильний рядок для заданих параметрів.

Приклади:

recommendRoom(2, 2, 1) === 'small room + extra bed'
recommendRoom(2, 1, 1) === 'small room'
recommendRoom(3, 2) === 'big room'
recommendRoom(3, 0, 2) === 'small room + extra bed'
recommendRoom(7, 0, 2) === 'big room + extra bed'
recommendRoom(8) === 'big room' */

function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  if (adultsCount + childrenCount + babiesCount <= 4) {
    return 'small room';
  }
  if (adultsCount + childrenCount + babiesCount === 5 && babiesCount >= 1) {
    return 'small room + extra bed';
  }
  if (adultsCount + childrenCount + babiesCount <= 8) {
    return 'big room';
  }
  if (adultsCount + childrenCount + babiesCount === 9 && babiesCount >= 1) {
    return 'big room + extra bed';
  }
}

// --------- Розв'язок ментора!!!-----------

function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) { 
  const totalCount = adultsCount + childrenCount + babiesCount;

  if (totalCount <= 4) {
    return 'small room';
  }
  if (totalCount === 5 && babiesCount > 0) {
    return 'small room + extra bed';
  }
  if (totalCount <= 8) {
    return 'big room';
  }
  if (totalCount === 9 && babiesCount > 0) {
    return 'big room + extra bed';
  }
}