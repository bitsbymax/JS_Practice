
//? прототип метода INCLUDES() (повертає true or false в залежності від того чи є в масиві переданий елемент)
//? приймає 2 параметра: searchElement (When comparing strings and characters, includes() is case-sensitive.)
//? fromIndex(якщо fromIndex від'ємний, значення сприймається, як зміщення від кінця масиву до початку [<-----], поч. індекс вирах. за формулою arr.length + fromIndex)

/* const includes = function(searchElement, fromIndex = 0) {
  const test = [1,2,3];

  const result = false;

  if (fromIndex >= test.length) {
    return false;
  }

  if (fromIndex < 0) {
    let negativeIndex = test.length + fromIndex;

    if (-negativeIndex > test.length) {
      negativeIndex = 0;
    }

    for (let i = negativeIndex; i < test.length; i++) {
      if (searchElement === test[i]) {
        return true;
      }
    }

    return result;
  }

  for (let i = fromIndex; i < test.length; i++) {
    if (searchElement === test[i]) {
      return true;
    }
  }

  return result;

}; */

/////////////////////////////////////////////////////////////////////

const includes = function(el, start = 0) {
  const test = [1,2,3,'a'];

  let normalizedStart = start;

  if (normalizedStart < 0) {
    normalizedStart += test.length;
  }

  if (normalizedStart < 0) {
    normalizedStart = 0;
  }

  for (let i = normalizedStart; i < test.length; i++) {
    if (Object.is(el, test[i])) {
      return true;
    }
  }

  return false;
};
console.log(includes('a', 1));

/////////////////////////////////////////////////////////////////////
const items = ['1', '2', '3'];

console.log(
  items.includes(1)
);
