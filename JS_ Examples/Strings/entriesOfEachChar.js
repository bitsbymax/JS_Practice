// Считаем количество вхождений каждой буквы
const res = 'abrakadabra'.split('')
  .reduce((counter, char) => ({
    ...counter,
    [char]: (counter[char] || 0) + 1,
  }), {});
console.log(res); // { a: 5, b: 2, r: 2, k: 1, d: 1}
