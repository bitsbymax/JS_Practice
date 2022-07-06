/* Description:
Task
Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.
Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
*/

const ultimateReverse = s => {
  let str = s.join('').split('').reverse(); //['!', 'e', 'i', 'l', 't', 'o', 'n', 'n', 'a',.....}
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(str.splice(0, s[i].length).join(''))
  }
  return arr
}
console.log(ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]));

/* function ultimateReverse(words) {
    let reversed = [...words.join('')].reverse();
    return words.map(word => reversed.splice(0, word.length).join(''));
} */

/* const ultimateReverse = (arr, str = [...arr.join``].reverse().join``, start = 0) => 
  arr.reduce((a,c) => (a.push(str.slice(start,start+c.length)), start+=c.length, a), []); */
