//!----------------------------------------------------------------//
//? прототип метода POP (видаляє останній елемент з масиву і повертає його, повертає undefined, якщо масив порожній)

const pop = function() {
  const test = [5, 6, 1, 4, 2, 5];

  const result = test[test.length - 1];

  if (test.length > 0) {
    test.length -= 1;
  }

  return result;
};
