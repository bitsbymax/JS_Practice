/* Зараз ми маємо 4 основні системи: головне ядро, навігаційні системи, пересувні системи та тіло робота, в якому все збирається.

Твоє завдання створити наступні модулі-об'єкти:

Головне ядро mainCore з методами:

getMainInfo повертає рядок Robot %name%, cpu version %cpuVersion%
getAdditionalInfo повертає рядок Update version: %softwareVersion%
updateRobot приймає параметр updateVersion, змінює softwareVersion робота та повертає рядок %name% updated to %updateVersion%
Навігаційне ядро navigationCore з методами:

getCoords повертає рядок координат робота x=%coords.x% y=%coords.y%
setTargetCoords приймає координати x та y місця призначення та встановлює їх як координати цілі робота.
Ядро пересування movementCore з методами moveForward, moveBack, moveLeft та moveRight, які можуть за потреби приймати step (по замовчуванню 1) та змінюють відповідну координату робота на step.

Тіло першого тестового робота kerbin згідно зі схемою:

robot {
  name: string,
  cpuVersion: number,
  softwareVersion: number,
  coords: {
    x: number,
    y: number,
  },
  target: {
    coords: {
      x: number,
      y: number,
    },
  },
};
Остання версія чіпів cpuVersion це 145.4, остання версія програмного забезпечення softwareVersion це 23.45, за замовчуванням, всі координати дорівнюють 0.

Об'єднай тіло робота з усіма потрібними модулями за допомогою ланцюжка прототипів. Для коректної роботи роботу мають бути доступні всі методи з модулів. */

const mainCore = {
  getMainInfo() {
    return `Robot ${this.name}, cpu version ${this.cpuVersion}`;
  },
  getAdditionalInfo() {
    return `Update version: ${this.softwareVersion}`;
  },
  updateRobot(updateVersion) {
    this.softwareVersion = updateVersion;

    return `${this.name} updated to ${updateVersion}`;
  },
};

const navigationCore = {
  getCoords() {
    return `x=${this.coords.x} y=${this.coords.y}`;
  },
  setTargetCoords(x, y) {
    this.target.coords.x = x;
    this.target.coords.y = y;
  },
};

const movementCore = {
  moveForward(step = 1) {
    this.coords.y += step;
  },
  moveBack(step = 1) {
    this.coords.y -= step;
  },
  moveLeft(step = 1) {
    this.coords.x -= step;
  },
  moveRight(step = 1) {
    this.coords.x += step;
  },
};

const kerbin = {
  name: 'Kerbin',
  cpuVersion: 145.4,
  softwareVersion: 23.45,
  coords: {
    x: 0,
    y: 0,
  },
  target: {
    coords: {
      x: 0,
      y: 0,
    },
  },
};

Object.setPrototypeOf(navigationCore, mainCore);
Object.setPrototypeOf(movementCore, navigationCore);
Object.setPrototypeOf(kerbin, movementCore);
