//!----------------------------------------------------------------//
//? прототип метода SHIFT() (видаляє перший елемент з масиву і повертає його)

/* const numbers = '123490'.split('');

const shift = function() {
  const test = [1, 2, 3];

  const result = test[0];

  if (test.length === 0) {
    return;
  }

  for (let i = 1; i < test.length; i++) {
    test[i - 1] = test[i];
  }
  test.length -= 1;

  return result;
};

console.log(shift(numbers)); */
////////////////////////////////////////////////////
const shift = function() {
  const test = [1, 2, 3];

  if (test.length === 0) {
    return;
  }

  const result = test[0];

  for (let i = 1; i < test.length; i++) {
    test[i - 1] = test[i];
  }

  test.length--;

  return result;
};
