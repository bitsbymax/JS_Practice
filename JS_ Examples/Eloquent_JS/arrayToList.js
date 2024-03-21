const listExample = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

function createLinkedList(arr) {
  let current = null;
  let previous = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    current = {
      value: arr[i],
      rest: previous
    };
    previous = current;
  }

  return current;
}

console.log(createLinkedList([1, 2, 3]));

function linkedListToArray(list) {
  const array = [];

  let current = list;
  while (current != null) {
    array.push(current.value);
    current = current.rest;
  }

  return array;
}