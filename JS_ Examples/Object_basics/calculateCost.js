
/* Створи функцію calculateCost, яка приймає bucket, та products, де bucket -
це об'єкт з запчастинами, які ми збираємося придбати, а products - об'єкт з
цінами на деталі від магазинів. Товари в магазинах не повторюються.

Приклади: */
/* const bucket = {
  display: 20,
  wheel: 100,
  cpu: 40,
}
const products = {
  amazobot: {
    wheel: 12.5,
  },
  robozetka: {
    display: 56.2,
    cpu: 150,
  },
} */

/* calculateCost(bucket, products) === 8374 */
/**
 * @param {Object} bucket
 * @param {Object} products
 *
 * @returns {number}
 */

/* const price = Object.assign({}, ...Object.values(products));
price === {
  chip: 20,
  body: 40,
} */

debugger;
function calculateCost(bucket, products) {
  const prices = Object.assign({}, ...Object.values(products));
  let amount = 0;

  for (const value in bucket) {
    amount += prices[value] * bucket[value];
  }
  return amount;
}

console.log(calculateCost(bucket = {
  display: 20,
  wheel: 100,
  cpu: 40,
}, products = {
  amazobot: {
    wheel: 12.5,
  },
  robozetka: {
    display: 56.2,
    cpu: 150,
  },
}));
//---------------------------------------------------------------
/**
 * @param {Object} bucket
 * @param {Object} products
 *
 * @returns {number}
 */
function calculateCost(bucket, products) {
  // Each value of a `products` object is an object with prices for some details (like a store)
  const stores = Object.values(products);

  // Copy prices from all stores to a single object
  const pricing = Object.assign({}, ...stores);
  let totalPrice = 0;

  for (const product in bucket) {
    // Get final product price: price * quantity
    const productPrice = pricing[product];
    const productQuantity = bucket[product];

    totalPrice += productPrice * productQuantity;
  }

  return totalPrice;
}
