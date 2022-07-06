enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
  // getArea: () => number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error();
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error(`sides ${this.a}, ${this.b} and ${this.c}`
        + 'cant form a triangle');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c)).toFixed(2));
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} -`
    + ` ${figure.getArea()}`;
}

/* type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: Color;
  getArea: () => number;
  // getArea(): number;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error();
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error();
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = 0.5 * (a + b + c);

    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: Color,
    private r: number,
  ) {
    if (r <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const { r } = this;

    return Math.PI * r * r;
  }
}

export class Rectangle implements Figure {

}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
} */
/* # Figures
We have 3 types of figures: triangles, circles and rectangles. 

Write an interface `Figure` and 3 classes implementing it so that every figure 
has:
- a `shape` (`triangle`, `circle` or `rectangle`);
- a `color` (`red`, `green` or `blue`);
- a method `getArea` that returns the area of the figure rounded down to 
hundredths.

In addition to a `color` constructors should accept required data:
- sides `a`, `b` and `c` for a triangle;
- a `radius` for a circle;
- a `width` and a `height` for a rectangle.

The constructors should `throw new Error('your error message')` if:
- any length is <= 0
- the longest side of a triangle is >= than a sum of two others

Hints:
- use `Math.PI` for calculating a circle square
- use [Heron's formula](https://en.wikipedia.org/wiki/Heron%27s_formula) for triangles

Example:
```typescript
new Rectangle('blue', 2, 0) // throws an error
new Triangle('red', 1, 2, 3) // throws an error: sides 1, 2 and 3 can't form a triangle
```

Also create a function `getInfo` that takes a figure and returns a string in the
next format:
```typescript
const redRectangle = new Rectangle('red', 3, 5);
getInfo(redRectangle) === 'A red rectangle - 15';

const greenCircle = new Circle('green', 1);
getInfo(greenCircle) === 'A green circle - 3.14';
```
 */
