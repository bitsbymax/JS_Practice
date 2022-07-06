//!----------------------------------------------------------------//
//? прототип метода PUSH() (додає один або більше елементів в кінець масиву і повертає його нову довжину)

/* const numbers = '123490'.split('');

const push = function(...value) {
  const test = [1,2,3];

  if (!value) {
    return test.length;
  }

  for (let i = 0; i < value.length; i++) {
    test[test.length] = value[i];
  }

  return test.length;
};

console.log(push(numbers)); */
///////////////////////////////////////////////////////////////////////////////////
const push = function(...args) {
  const test = [1,2,3];

  for (const arg of args) {
    test[test.length] = arg;
  }

  return test.length;
};


