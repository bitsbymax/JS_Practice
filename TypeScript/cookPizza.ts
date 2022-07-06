type PizzaSize = 'little' | 'medium' | 'large';

enum PizzaSize2 {
  little = 's',
  medium = 'm',
  large = 'l',
}

function cookPizza(size: PizzaSize2): string {
  switch (size) {
    case PizzaSize2.little:
      return `One person pizza`;

    case PizzaSize2.medium:
      return `Usual pizza`;

    case PizzaSize2.large:
      return `The biggest pizza`;
  }
}

const pizza1 = cookPizza(PizzaSize2.little);
console.log(pizza1);
