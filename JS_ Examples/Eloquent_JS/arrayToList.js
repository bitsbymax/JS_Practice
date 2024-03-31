const listExample = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

function createLinkedList(arr) {
  let current = null;
  let previous = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    current = {
      value: arr[i],
      rest: previous,
    };
    previous = current;
  }

  return current;
}

// console.log(createLinkedList([1, 2, 3]));

function linkedListToArray(list) {
  const array = [];

  let current = list;
  while (current != null) {
    array.push(current.value);
    current = current.rest;
  }

  return array;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list,
  };
}

function nth(list, number) {
  if (number == 0) return list.value;
  let counter = 0;
  let current = null;

  while (list.rest !== null) {
    if (number == counter) {
      return list.value;
    }

    current = list.rest;
    counter++;
  }
}

console.log(nth(listExample, 3));
