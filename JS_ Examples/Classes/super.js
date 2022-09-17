class User {
  role = 'user';
  age = 0;

  constructor(name) {
    this.name = name;
  }

  printInfo() {
    console.log(`${this.name} is ${this.age}`);
  }
}

class Admin extends User {
  role = 'admin';

  constructor(name, surname) {
    super(name);

    this.surname = surname;
  }

  auth() {
    console.log('admin user');
  }

  printInfo() {
    super.printInfo();
    this.auth();
  }
}

const maks = new User('Maks');
const ira = new User('Ira', 'Smith');
ira.printInfo();