/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

const longest = (s1, s2) => Array.from(s1 + s2)
  .sort()
  .filter((x, i, a) => x !== a[i - 1])
  .join('');

function longest(s1, s2) {
  return (s1 + s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}
