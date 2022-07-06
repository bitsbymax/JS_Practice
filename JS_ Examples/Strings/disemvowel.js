/* Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */

function disemvowel(str) {
  let result = '';
  for (const char of str) {
    if (!'aeiou'.includes(char.toLowerCase())) { // приводимо всі символи до
      result += char;                           // нижнього реєстру
    }
  }
  return result;
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
