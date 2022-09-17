/* Давай, щоб усе було чесно, створимо дошку слави для цих змагань (клас BoardOfFame).

За замовчуванням, місць на дошці слави буде всього 3. Але в випадку міжнародних турнірів, де чемпіонських місць знадобиться більше, конструктор класу BoardOfFame зможе прийняти будь-яке інше число місць.

Створи метод addRecord для усіх екземплярів класу BoardOfFame, який прийматиме об'єкт robot, та додаватиме новий запис на дошку слави. Якщо новий робот матиме більше балів, ніж інші роботи, він займе своє місце в топі, посунувши інших роботів до низу.

Також створи getter list для екземплярів, який буде виводити список чемпіонів у форматі з прикладу. Список має бути рядком. Getter повинен повертати ... для не існуючих елементів (якщо потрібно повернути перші 5, але в масиві всього 3 робота).

За правилами турнірів усі роботи мають мати унікальні імена. Якщо новий робот має таке ж ім'я, як один з роботів в списку - просто онови у існуючого робота значення score.

Приклад:
const board = new BoardOfFame();
board.list // `1. ... | 2. ... | 3. ...`
board.addRecord({name: 'Cleaner-900', score: 6})
board.addRecord({name: 'Cleaner-775', score: 16})
board.list // `1. Cleaner-775: 16 | 2. Cleaner-900: 6 | 3. ...`
board.addRecord({name: 'MX-56', score: 23})
board.addRecord({name: 'Cleaner-775', score: 30})
board.list // `1. Cleaner-775: 30 | 2. MX-56: 23 | 3. Cleaner-900: 6`

const internationalBoard = new BoardOfFame(5);
internationalBoard.list = `1. ... | 2. ... | 3. ... | 4. ... | 5. ...`
*/

class BoardOfFame {
  constructor(numberOfPlaces = 3) { //розмір дошки по дефолту
    this.robots = [];
    this.numberOfPlaces = numberOfPlaces;
  }

  addRecord(newRobot) { // шукаємо робота серед тих, що додаватимуться в масив
    const member = this.robots.find(robot => robot.name === newRobot.name);

    if (!member) { // якщо не знайли, то нового робота додаємо в масив
      this.robots.push(newRobot);
    } else { // якщо знайшли, то перезаписуємо йому score
      member.score = newRobot.score;
    }

    this.robots.sort((a, b) => b.score - a.score);
  } // сортує по score

  get list() {
    const getInfo = r => r ? `${r.name}: ${r.score}` : '...';

    return [...Array(this.numberOfPlaces)] // створення масиву з довжиною this.numberOfPlaces
      .map((_, i) => this.robots[i]) // _,  - для параметру, який не використовується, опціонально
      .map((robot, i) => `${i + 1}. ${getInfo(robot)}`)
      .join(' | ');
  }
}

//-----------------------------------------------
class BoardOfFame {
  constructor(numberOfPlaces = 3) {
    this.numberOfPlaces = numberOfPlaces;
    this.robots = []; // will add robots here
  }

  addRecord(robotToAdd) {
    const existingRobot = this.robots.find(
      robot => robot.name === robotToAdd.name,
    );

    // if the robotToAdd is already on the board
    if (existingRobot) {
      // just update its score
      existingRobot.score = robotToAdd.score;

      return;
    }

    // otherwise find a position to put the robotToAdd
    let position = this.robots.findIndex(
      robot => robotToAdd.score > robot.score,
    );

    // if we can't find a robot with a less score
    if (position === -1) {
      // we put robotToAdd to the end
      position = this.robots.length;
    }

    this.robots.splice(position, 0, robotToAdd);
  }

  get list() {
    // Create an array [0, 1, 2 ... numberOfPlaces - 1];
    return [...Array(this.numberOfPlaces).keys()]
      // Add info for existing robots and ... for empty spaces
      .map(i => `${i + 1}. ${getInfo(this.robots[i])}`)
      .join(' | ');
  };
}

function getInfo(robot) {
  return robot
    ? `${robot.name}: ${robot.score}`
    : '...';
}

