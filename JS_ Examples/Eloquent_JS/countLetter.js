function countLetters(string, letter) {
  let count = 0;
  string.split('').forEach(element => {
    if (element == letter) count++
  });

  return count;
}

console.log(countLetters('ggg', 'g'));