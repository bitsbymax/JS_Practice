/* Singleton паттерн - це один з найвідоміших патернів в програмуванні. Хтось навіть назвав би його анти-паттерном,
але варто знати деталі його реалізації для кращого розуміння теми наслідування і класів. Створення такого класу
не дуже складне завдання, але варто пам'ятати про основне правило: "Singleton - шаблон проектування,
який гарантує, що в одно-потоковій програмі буде єдиний екземпляр класу з глобальною точкою доступу"
Якщо простіше, то клас Singleton має повертати екземпляр класу якщо він ще не існує і посилання на нього в випадку,
коли екземпляр вже було створено.

Приклад: */

class Singleton {
  constructor() {
    if (typeof Singleton.instance === 'object') {
      return Singleton.instance;
    }
    Singleton.instance = this;

    return Singleton.instance;
  }
  
  getCounter() {
    return this.count;
  };

  incCounter() {
    this.count++;
  };
}

const firstObject = new Singleton();
const secondObject = new Singleton();

console.log(firstObject === secondObject); // true
console.log(firstObject instanceof Singleton === true)
console.log(secondObject instanceof Singleton === true)

const count = 0;
