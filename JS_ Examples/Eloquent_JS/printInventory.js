function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}

function printInventory(inventory) {
  let result = '';
  for (let item in inventory) {
    result += `${item}: ${zeroPad(inventory[item], 3)}\n`;
  }
  return result;
}

console.log(printInventory({
  'paper': 24,
  'tire tracks': 2
}));