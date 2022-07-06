//!----------------------------------------------------------------//
//? прототип метода REVERSE() (розставляє еле-ти масиву в зворотньому порядку, змінює поч. масив і поверт. посилання на нього)

const reverse = function() {
  const test = [1,2,3];

  const emtyBox = [];
  let firstIndex = 0;

  for (let i = test.length - 1; i >= 0; i--) {
    emtyBox[firstIndex] = test[i];
    firstIndex++;
  }

  for (let j = 0; j < test.length; j++) {
    test[j] = emtyBox[j];
  }

  return test;
};

console.log(reverse());
