
//? прототип метода LAST_INDEX_OF (повертає індекс останнього знаходження переданого елемента, або -1, якщо ел-нт не знайдено, пошук здійснюється з кінця)
//? приймає 2 параметра: searchElement, fromIndex(дефолтне значення(arr.length - 1))

/* const lastIndexOf = function(searchElement, fromIndex) {  //fromIndex = this.length - 1 (default)
  const test = [5, 6, 1, 4, 2, 5];

  let index = 0;

  if (fromIndex < 0) {
    const negativeIndex = test.length + fromIndex;

    if (negativeIndex < 0) {
      return -1;
    }

    for (let i = test.length - 1; i >= negativeIndex; i--) {
      if (searchElement === test[i]) {
        index = i;

        return index;
      }
    }
  }

  for (let i = fromIndex; i >= 0; i--) {
    if (searchElement === test[i]) {
      index = i;

      return index;
    }
  }
  return -1;
};

console.log(lastIndexOf(2, 5)); */
//////////////////////////////////////////////////////////////////
const lastIndexOf = function(el, end = test.length - 1) {
  const test = [5, 6, 1, 4, 2, 5];

  let normalizedEnd = end;

  if (normalizedEnd < 0) {
    normalizedEnd += test.length;
  }

  if (normalizedEnd >= test.length - 1) {
    normalizedEnd = test.length - 1;
  }

  for (let i = normalizedEnd; i >= 0; i--) {
    if (el === test[i]) {
      return i;
    }
  }

  return -1;
};
