const groceries = ['apple', null, 'milk', undefined, 'bread', ''];

const list = groceries.filter(Boolean);

console.log(list) // [ 'apple', 'milk', 'bread' ]