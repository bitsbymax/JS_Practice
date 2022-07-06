/* Напиши функцію replaceSubstring, яка приймає рядок phrase, рядок words,
що складається з двох слів розділених пробілом, та рядок replacement.

Мета функції - знайти обидва слова з words у phrase і замінити текст між ними на replacement.

Примітки
1. phrase містить лише слова та пробіли;
2. кожне слово з words зустрічається у phrase рівно 1 раз, причому перше раніше ніж друге;
3. рядок words може містити лише одне слово - у цьому випадку слід вставити replacement
безпосередньо після цього слова в phrase.

Приклади: 
replaceSubstring(
  'I hate these robots',
  'I robots',
  'love these cute',
); // 'I love these cute robots'

replaceSubstring(
  'She is a robot',
  'She robot',
  'dreamed of a',
); // 'She dreamed of a robot'

replaceSubstring(
  'We need to create a solution!',
  'a',
  'perfect',
); // 'We need to create a perfect solution!'
*/

/**
 * @param {string} phrase
 * @param {string} words
 * @param {string} replacement
 *
 * @returns {string}
 */


function replaceSubstring(phrase, words, replacement) {
  const res = phrase.split(' '); //res = (7) ['I', 'hate', 'to', 'play', 'games', 'with', 'robots!']
  const splited = words.split(' '); //['I', 'robots']
  let lastIndex;
  const firstIndex = res.indexOf(splited[0]); //0

  if (splited.length <= 1) {
    lastIndex = firstIndex + 1;
  } else {
    lastIndex = res.indexOf(splited[1]); //-1
  }

  let str = '';

  str += res.slice(0, firstIndex + 1).join(' ') + ' ' + replacement + ' '; //str = "I love to play games with this awesome "

  if (lastIndex === -1) {
    str += res[res.length - 1];
  } else {
    str += res.slice(lastIndex, res.length).join(' '); //str = "I love to play games with this awesome robots!"
  }

  return str;
}

console.log(replaceSubstring('I hate to play games with robots!',
  'I robots',
  'love to play games with this awesome'));

/* if (splited.length <= 1) {
    for (const i in res) {
      if (words === res[i]) {
        res.splice(i, 1, words, replacement);

        return res.join(' ');
      }
    }
  } */
