/* let hashString = "#";
for (let index = 0; index < 7; index++) {
  console.log(hashString);
  hashString += '#';
} */

/* for (let index = 0; index < 100; index++) {
  if (index % 3 == 0) console.log('Fizz', index);
  if (index % 5 == 0) console.log('Buzz', index);
  if (index % 3 == 0 && index % 5 == 0) console.log('FizzBuzz', index)
} */

function chessDesk(size) {
  let space = " ";
  let hash = "#";
  let fullRow = '';
  for (let row = 0; row < size; row++) {
    if (row % 2 == 0) {
      for (let column = 0; column < size; column++) {
        if (column % 2 == 0) fullRow += hash;
        else { fullRow += space; }
      }
    } else {
      for (let column = 0; column < size; column++) {
        if (column % 2 == 0) fullRow += space;
        else { fullRow += hash; }
      }
    }

    console.log(fullRow);
    fullRow = '';
  }
}
chessDesk(8);