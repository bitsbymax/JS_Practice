//!----------------------------------------------------------------//
//? прототип метода UNSHIFT() (додає один або більше елементів в початок масиву і повертає його нову довжину)

/* const numbers = '123490'.split('');

const unshift = function(...value) {
  const test = [1,2,3];

  for (let j = value.length - 1; j >= 0; j--) {
    const zeroIndex = value[j];
    const len = test.length;

    for (let i = len; i > 0; i--) {
      test[i] = test[i - 1];
    }
    test[0] = zeroIndex;
  }

  return test.length;
};

console.log(unshift(numbers)); */
//////////////////////////////////////////////////////////////////
numbers.unshift = function(...args) {
  const test = [1,2,3];

  const copy = [...args, ...test];

  test.length = 0;

  for (const el of copy) {
    test[test.length] = el;
  }

  return test.length;
};
