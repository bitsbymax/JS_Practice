/* По-перше, звичайно, у нашій піцерії присутні не усі начинки світу. Тому, було б непогано створити тип для можливих начинок Topping.

Начинки в наявності:

cheese
peppers
salami
pepperoni
mushrooms
olives
По-друге, нам потрібен інтерфейс Event з полями name (назва піци) і toppings (масив з переліком начинок для піци).

По-третє, звісно, треба створити клас Pizza з конструктором, що містить поля name, toppings та createdOn (дата виготовлення піци).

І, нарешті, реалізуємо клас PizzaMaker зі статичним методом create, який прийматиме сигнал-подію event з сервера, з полями name про вид піци, яку треба приготувати та toppings - начинки, які в неї додати.

Результатом методу create буде новий екземпляр класу Pizza з полями name, toppings та датою createdOn, коли піцу було приготовано.

Інтерфейс піци: */

// {
//   name: string
//   toppings: Topping[]
//   createdOn: Date
// }
/* Hint: Використовуй теперішню дату в конструкторі піци (new Date()) у якості дати виготовлення. */

enum Topping {
  cheese = 'cheese',
  peppers = 'peppers',
  salami = 'salami',
  pepperoni = 'pepperoni',
  mushrooms = 'mushrooms',
  olives = 'olives',
}

interface Events {
  name: string;
  toppings: Topping[];
}

class Pizza implements Events {
  constructor(
    public name: string,
    public toppings: Topping[],
    public createdOn: object,
  ) { }
}

class PizzaMaker extends Pizza {

  static create(event: Events): object {

    return new Pizza(event.name, event.toppings, new Date())
  }
}

/* type Topping = 'cheese' | 'peppers' | 'salami' | 'pepperoni' | 'mushrooms' | 'olives';

class Pizza {
  constructor(
    public name: string,
    public toppings: Topping[],
    public createdOn: Date = new Date(),
  ) {}
}

interface Order {
  name: string;
  toppings: Topping[]
}

class PizzaMaker {
  static create(order: Order): Pizza {
    return new Pizza(order.name, order.toppings);
  }
} */
