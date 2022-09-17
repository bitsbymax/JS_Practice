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

function fillTank(
  customer,
  fuelPrice,
  amount = Infinity, // to pour as much as possible
) {
  // We need to know how much fuel we can actually pour
  const freeSpace = customer.vehicle.maxTankCapacity
  - customer.vehicle.fuelRemains;
  const canBuy = customer.money / fuelPrice;

  // not to pour more full than the client wants,
  // can buy or the tank can accommodate
  const requiredAmount = Math.min(amount, freeSpace, canBuy);
  const roundedAmount = roundFuel(requiredAmount);

  // We can't pour less than 2 liters
  if (roundedAmount < 2) {
    return;
  }

  // We pour the tank and take money
  customer.vehicle.fuelRemains += roundedAmount;
  customer.money -= roundPrice(roundedAmount * fuelPrice);
}

// We created separate rounding function not to complicate the code
function roundFuel(fuel) {
  return Math.floor(fuel * 10) / 10;
}

function roundPrice(price) {
  return Math.round(price * 100) / 100;
}


fillTank({
  money: 140,
  vehicle: {
    maxTankCapacity: 40,
    fuelRemains: 14,
  },
}, 10, 9.47)