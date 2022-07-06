/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

348597 => [7,9,5,8,4,3]
*/

function digitize(n) {  // конвертує число в реверсивний масив чисел
  let arr = [];
  const str = n.toString();
  for (let i of str) {
    arr.push(+i);
  }
  return arr.reverse();
}

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
