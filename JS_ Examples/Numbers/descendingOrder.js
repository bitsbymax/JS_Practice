/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

function descendingOrder(n){ // n = 42145
  const str = n.toString(); // str = "42145"
  let results = [];
  for (let i = 0; i < str.length; i++) {
    results.push(str[i]); // results = (5) ["4", "2", "1", "4", "5"]
  }
  results.sort().reverse();  // results = (5) ["5", "4", "4", "2", "1"]
  return Number(results.join(''));  // 54421
}

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
