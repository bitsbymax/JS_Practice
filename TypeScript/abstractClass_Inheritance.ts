interface Position2D {
  x: number;
  y: number;
}

abstract class Point2D implements Position2D {
  constructor(
    public x: number,
    public y: number,
  ) {}

  print2dInfo() {
    console.log(`x: ${this.x}, y: ${this.y}`);
  }
}

class Point3D extends Point2D {
  constructor(
    x: number,
    y: number,
    public z: number,
  ) {
    super(x, y);
  }
}

class Locations extends Point2D {
  constructor(
    public name: string,
    ...args: [number, number]
  ) {
    super(...args);
  }
}
const testVar = new Locations('Home', 25.656, 234.34);