/* Напиши конструктор Robot, який прийме name та створить робота зі вказаним ім'ям і
нульовими координатами. Всім роботам мають бути доступні методи прототипа goForward,
goBack, goLeft, goRight, які переміщують робота на 1 у відповідному напрямку.

Приклад: */

/* const robert = new Robot('robert');

robert === {
  name: 'robert',
  coords: {
    x: 0,
    y: 0,
  }
} */

function Robot(name) {
  this.name = name;

  this.coords = {
    x: 0,
    y: 0,
  };
}

Robot.prototype.goRight = function() {
  this.coords.x += 1;
};

Robot.prototype.goLeft = function() {
  this.coords.x -= 1;
};

Robot.prototype.goForward = function() {
  this.coords.y += 1;
};

Robot.prototype.goBack = function() {
  this.coords.y -= 1;
};

robert.goForward(); // robert.coords.y === 1
robert.goRight(); // robert.coords.x === 1
