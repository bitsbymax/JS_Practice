/* Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me" */

function capitalsFirst(str) {
  let arr = []; // ['You,', 'Sort', 'Already!']
  let arr2 = []; //['hey', 'me']
  let count = 0;

  str.split(' ').map(v => v[0] === v[0].toUpperCase() ? arr.push(v) : arr2.push(v)); // наповнення масивів arr і arr2 результатами роботи методыв

  return arr
    .filter(v => v[0]
    .match(/[A-Z]/))
    .concat(arr2.filter(v => v[0].match(/[a-z]/)))
    .join(' ');
}

/* function capitalsFirst(str) {
  let words = str.split(' ');

  let upper = words.filter(
    function (x) {
      return x.charAt(0).match(/[A-Z]/)
    });

  let lower = words.filter(
    function (x) {
      return x.charAt(0).match(/[a-z]/)
    });

  return upper.concat(lower).join(' ');
} */

/* function capitalsFirst(str) {
  return str
    .split(" ")
    .filter(([a]) => a >= "a" && a <= "z" || a >= "A" && a <= "Z")
    .sort(([a], [b]) => a < "a" && b >= "a" ? -1 : a >= "a" && b < "a" ? 1 : 0)
    .join(" ")
} */

console.log(capitalsFirst("hey You, Sort me Already!"));
