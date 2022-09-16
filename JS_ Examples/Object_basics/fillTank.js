/* Mate Royal Oil вирішили повністю автоматизувати процес заправки.

Напиши функцію fillTank, яка приймає об'єкт customer, ціну 1 літра палива fuelPrice та amount - скільки літрів хоче купити клієнт.

Об'єкт customer містить наступні властивості: */

customer = {
  money: 3000, // залишок грошей на рахунку клієнта 
  vehicle: {
    maxTankCapacity: 40, // Об'єм бака
    fuelRemains: 8, // Залишок палива у баку
  }
};
/* Функція нічого не повертає, а лише доливає паливо та знімає кошти за наступними правилами:

Якщо amount не передано, значить замовлено повний бак.
Якщо amount більше ніж вміщає бак, залий тільки те, що поміститься.
Завжди заливаємо тільки те, за що клієнт може заплатити.
Округлюй обсяг палива що буде залито вниз до десятих.
Якщо вийшло < 2 літрів, взагалі не заправляй клієнта
Вартість заправленого пального округли до сотих (до найближчого значення).
Підказка: приклади тестів можна знайти під редактором коду. */

function fillTank(customer, fuelPrice, amount) {
  if (amount < 2 || (fuelPrice * 2 > customer.money) ||
    (customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains < 2)) {
    return;
  }
  
}