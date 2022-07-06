
//? прототип метода FILL() (замінює елементи масиву на нові і повертає модифікований початковий масив), приймає 3 параметра (value, start, end)

const numbers = '123490'.split('');

const fill = function (
  value,
  start = 0, //? дефолтне значення, якщо парам. не передано
  end = this.length, //? дефолтне значення (працює до кінця масиву)
) {
  const test = [1, 2, 3];

  let newStart = start;
  if (newStart < 0) {
    newStart += test.length;
  }

  let newEnd = end;
  if (newEnd < 0) {
    newEnd += test.length;
  }

  for (let i = start; i < end; i++) {
    test[i] = value;
  }

  return test;
}

console.log(fill(numbers));
