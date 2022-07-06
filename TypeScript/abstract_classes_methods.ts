// Абстрактные классы представляют классы, определенные с ключевым словом abstract. Они во многом похожи на обычные классы за тем исключением, что мы не можем создать напрямую объект абстрактного класса, используя его конструктор.

// abstract class Figure {}

// let someFigure = new Figure()    // Помилка!

// Как правило, абстрактные классы описывают сущности, которые в реальности не имеют конкретного воплощения. Например, геометрическая фигура может представлять круг, квадрат, треугольник, но как таковой геометрической фигуры самой по себе не существует. Есть конкретные фигуры, с которыми мы и работаем. В то же время все фигуры могут иметь какой-то общий функционал. В этом случае мы можем определить абстрактный класс фигуры, поместить в него общий функционал, и от него унаследовать классы конкретных геометрических фигур:

abstract class Figure {
  getArea(): void {
    console.log("Not Implemented");
  }
}
class Rectangle extends Figure {
  constructor(public width: number, public height: number) {
    super();
  }

  getArea(): void {
    let square = this.width * this.height;
    console.log("area =", square);
  }
}

let someFigure: Figure = new Rectangle(20, 30);
someFigure.getArea(); // area = 600

// В данном случае абстрактный класс определяет метод getArea(), который вычисляет площадь фигуры. Класс прямоугольника определяет свою реализацию для этого метода.

//!Абстрактные методы
// Однако в данном случае метод getArea в базовом классе не выполняет никакой полезной работы, так как у абстрактной фигуры не может быть площади. И в этом случае подобный метод лучше определить как абстрактный:

abstract class Figure1 {
  abstract getArea(): void;
}
class Rectangle1 extends Figure1 {
  constructor(public width: number, public height: number) {
    super();
  }

  getArea(): void {
    let square = this.width * this.height;
    console.log("area =", square);
  }
}

let someFigure1: Figure1 = new Rectangle(20, 30);
someFigure1.getArea();

// Абстрактный метод не определяет никакой реализации. Если класс содержит абстрактные методы, то такой класс должен быть абстрактным.
// ?Кроме того, при наследовании производные классы обязаны реализовать все абстрактные методы.

// !Абстрактные поля
// Также абстрактный класс может иметь абстрактные поля, то есть поля определенные с модификатором abstract. При наследовании класс-наследник также обязан предоставить для них реализацию:

abstract class Figure2 {
  abstract x: number;
  abstract y: number;
  abstract getArea(): void;
}
class Rectangle2 extends Figure2 {
  //x: number;
  //y: number;

  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
  ) {
    super();
  }

  getArea(): void {
    let square = this.width * this.height;
    console.log("area =", square);
  }
}

let someFigure2: Figure2 = new Rectangle2(10, 10, 20, 25);
someFigure2.getArea();
// В данном случае класс Figure2 определяет два абстрактных поля x и y, которые условно представляют начальную точку фигуры:

/*
abstract x: number;
abstract y: number;
*/
