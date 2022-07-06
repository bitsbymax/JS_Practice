/* У нас більше немає потреби зберігати дані про вік наших користувачів, 
тому ми вирішили видалити вік з бази у два етапи.

Спочатку потрібно видалити поле age з бази даних people в усіх, в кого gender
дорівнює female. Повертати з функції нічого не потрібно. */

function removeFemaleAges(people) {
  for (const user of people) {
    if (user.gender === 'female') {
      delete user.age;
    }
  }
}