
//? прототип метода INDEX_OF() (повертає індекс першого знаходження переданого елемента, або -1, якщо ел-нт не знайдено)
//? приймає 2 параметра: searchElement, fromIndex(якщо fromIndex >= array.length, повертається -1, якщо fromIndex від'ємний, значення сприймається, як зміщення від кінця масиву до початку [<-----], поч. індекс вирах. за формулою arr.length + fromIndex)


const indexOf = function(el, start = 0) {
  const test = [1, 2, 3];

  let normalizedStart = start;

  if (normalizedStart < 0) {
    normalizedStart += test.length;
  }

  for (let i = normalizedStart; i < test.length; i++) {
    if (el === test[i]) {
      return i;
    }
  }

  return -1;
};

// console.log(indexOf(5, -2));

//? Finding all the occurrences of an element

/* let indices = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
let idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}

console.log(indices); // [0, 2, 4] */
