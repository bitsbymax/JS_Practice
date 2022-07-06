/* В Mate academy ми навчаємо не тільки людей, а й роботів. На жаль, з ними якось складніше, але вже як є.
Вчора коли ми сказали роботу йти прямо, щось пішло не так і він пішов наліво. Весна? Думаю ні. Швидше була помилка в коді.
Наш робот приймає команду в свій термінал у вигляді рядка back, forward, left, right, stop.
Далі своїми кібер мізками він блискавично конвертує значення в x та y і посилає імпульс з координатами в
свої робокінцівки у вигляді рядка hor=x ver=y Так для прикладу команда left це сигнал -1 для x та сигнал 0 для y, а
forward це сигнал 0 для x та сигнал 1 для y. То що? Допоможеш нам навчити нашого робота ходити правильно? Нам потрібна
функція getDirection, яка буде приймати рядок direction з напрямком руху і повертати рядок у форматі згаданому вище.
А і ще.. Наш робот ще не проходив наші уроки по conditional operators, тому доведеться використовувати switch case.
Для команд які не може обробити наш робот використай блок default в switch case в якому сигнали для x та y будуть рівні 0.*/

function getDirection(direction) {
  switch (direction) {

    case 'forward':
      return 'hor=0 ver=1';

    case 'left':
      return 'hor=-1 ver=0';

    case 'back':
      return 'hor=0 ver=-1';

    case 'right':
      return 'hor=1 ver=0';

    default:
      return 'hor=0 ver=0';
  }
}

// --------- Розв'язок ментора!!!-----------

function getDirection(direction) {
  switch (direction) {

    case 'forward':
      return format(0, 1);

    case 'left':
      return format(-1, 0);

    case 'back':
      return format(0, -1);

    case 'right':
      return format(1, 0);

    default:
      return format(0, 0);
  }
}
function format(x, y) {
  return `hor=${x} ver=${y}`;
}