/* The operator keyof helps us to use correct property name where it is needed.

keyof is an indexed type query which yields the type of permitted property names for an object.

The keyof type is considered a subtype of string. */

class A {
  x: number = 5;
}

let y: keyof A;
y = 'x';

// If we use property name other than 'x':
// y = 'z'; // Type '"z"' is not assignable to type '"x"'.

//? Using in a function parameter:
class Test {
  x: number = 6;
}

function GetProp(a: keyof Test, test: Test): any {
  return test[a];
}

let t: Test = new Test();
let prop = GetProp("x", t);
console.log(prop); // 6

//? Using for a class property: 
class T {
  x: number = 7;
  z: string = 'Hello';
}

class B {
  y: keyof T;

  getAProp(a: T): any {
      return a[this.y];
  }
}

let b: B = new B();
b.y = "z"; // в y ми можемо присвоїти лише іменa ключів Т
let prop1 = b.getAProp(new T());
console.log(prop1); // Hello
