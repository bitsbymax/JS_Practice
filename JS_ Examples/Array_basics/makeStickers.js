/* Наші роботи навчилися ходити! Настав час запускати масове виробництво. Щоб роботи на лінії збиралися
правильно, потрібно маркувати деталі. Для початку вистачить звичайних наліпок. Різні частини
робота будуть складатися з різної кількості деталей.

Напиши програму для принтера makeStickers, яка повертатиме задану кількість наліпок detailsCount
для вказаної частини робота robotPart у заданому форматі {{partOfRobot}} detail #{{n}}.

Приклади:

makeStickers(3, 'Body') === ['Body detail #1', 'Body detail #2', 'Body detail #3'];
makeStickers(4, 'Head') === ['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4']; */

function makeStickers(detailsCount, robotPart) {
  let sticker = Array();
  for (let i = 1; i <= detailsCount; i++) {
    sticker.push(`${robotPart} detail #${i}`);
  }
  return sticker;
}