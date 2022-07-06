//? варіанти функцій для видалення element з arr

function filter(arr, element) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] === element) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
}
////////////////////////////////////////////////
function filter(arr, element) {
while (arr.includes(element)) {
    const position = arr.indexOf(element);

    arr.splice(position, 1);
  }
}
////////////////////////////////////////////////////
function filter(items, itemToRemove) {
  const filtered = [];

  for (const item of items) {
    if (item !== itemToRemove) {
      filtered.push(item);
    }
  }

  items.length = 0;
  items.push(...filtered);
}
///////////////////////////////////////////////////
function filter(items, itemToRemove) {
  const filtered = items.filter((item) => item !== itemToRemove);

  items.length = 0;
  items.push(...filtered);
}
