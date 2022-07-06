'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(enemy) {
    if (enemy instanceof Herbivore && !enemy.hidden) {
      enemy.health -= 50;
    }

    if (enemy.health <= 0) {
      Animal.alive = Animal.alive.filter(({ health }) => health > 0);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

/* # Herbivores and Сarnivores
Nature is well suited to reflect the principles of Object Oriented Programming.
All instances of the `Animal` class must have health and a name.
Health is 100 by default.

Create a `Herbivore` class.
Herbivore has a method of `hide`, which changes the hidden property of the beast to the opposite value and helps to hide from carnivores.

Create a `Сarnivore` class.
Carnivore has a `bite` method, which takes a herbivore object and decreases the object's health by 50. The method does not work if it is another сarnivore, or the herbivore is currently hiding.

`Herbivore` and `Сarnivore` should extend an `Animal` class.

All alive animals should be in the static `Animal.alive` array.
If the health of the animal reaches 0, the beast dies and it should be removed from the static array `Animals.alive`.

Example: */
```
const deer = new Herbivore('Bembi');
const panther = new Carnivore('Bagira');
const lion = new Carnivore('King');
const rabbit = new Herbivore('Max');

Animal.alive === [
  {name: 'Bembi', health: 100, hidden: false},
  {name: 'Bagira', health: 100},
  {name: 'King', health: 100},
  {name: 'Max', health: 100, hidden: false},
];

lion.bite(deer);
panther.bite(lion);
Animal.alive === [
  {name: 'Bembi', health: 50},
  {name: 'Bagira', health: 100},
  {name: 'King', health: 100},
  {name: 'Max', health: 100},
];

panther.bite(deer);
rabbit.hide();
panther.bite(rabbit);

Animal.alive === [
  {name: 'Bagira', health: 100},
  {name: 'King', health: 100},
  {name: 'Max', health: 100, hidden: true},
];
```
