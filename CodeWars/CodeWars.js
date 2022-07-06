
//-----------------------------------------------------------------//

/* function multiTable(number) { //number - любе число

  let result = `1 * ${number} = ${1 * number}\n
2 * ${number} = ${2 * number}\n
3 * ${number} = ${3 * number}\n
4 * ${number} = ${4 * number}\n
5 * ${number} = ${5 * number}\n
6 * ${number} = ${6 * number}\n
7 * ${number} = ${7 * number}\n
8 * ${number} = ${8 * number}\n
9 * ${number} = ${9 * number}\n
10 * ${number} = ${10 * number}\n`;

  return result;
} */

/* const multiTable = (number) => {
  let table = '';
  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
  }
  return table;
}; */

//-----------------------------------------------------------------//

/* function getRealFloor(n) {   //number - любе число
  if (n >= 1 && n < 13) return n - 1;
  else if (n > 13) return n - 2;
} */

/* function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
} */

//-----------------------------------------------------------------//

/* function mouthSize(animal) {  //
  return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
} */

//-----------------------------------------------------------------//

/* const replaceDots = function(str) { // заміна крапок в рядку на -

  return str.replace(/\./g, '-');
} */

//-----------------------------------------------------------------//

/* function reverseWords(str){ // str = "The greatest victory is";
  return str.split(' ').reverse().join(' '); // "is victory greatest The"
}
 */
//-----------------------------------------------------------------//

/* function countBy(x, n) {  // (2, 5) х - число, n - число повторень додавання
  const z = [];                      // х до результату попереднього обчислення
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr = +arr + x;
    z.push(arr);
  }

  return z;   // [2, 4, 6, 8, 10]
} */

/* function countBy(x, n) {
  const z = [];
  for (i = 1; i <= n; i++) {
      z.push(x * i);
  }
  return z;
} */

//-----------------------------------------------------------------//

/* function squareSum(numbers){ // [1, 2, 2]
  let res = 0;
  for (let i of numbers) {
    res += i ** 2;
  }
  return res; // res: 9
} */

/* function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0);
} */

//-----------------------------------------------------------------//

/* function getAverage(marks){
  let sum = 0;

  for (const i of marks) {  // of повертає саме значення
    sum += i;
  }
  const average = Math.floor(sum / marks.length);
  return average;
} */

/* function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
} */


//-----------------------------------------------------------------//

/* const humanYearsCatYearsDogYears = function (humanYears) {
  let result = [];
  let catYears = 0;
  let dogYears = 0;
  if (humanYears === 1) {
    catYears += 15;
    dogYears += 15;
    result.push(humanYears, catYears, dogYears);
    return result;
  } else if (humanYears === 2) {
    catYears += 24;
    dogYears += 24;
    result.push(humanYears, catYears, dogYears);
    return result;
  } else {
    catYears = 24 + (humanYears - 2) * 4;
    dogYears = 24 + (humanYears - 2) * 5;
    result.push(humanYears, catYears, dogYears);
    return result;
  }
}; */

// Коротший запис
/* const humanYearsCatYearsDogYears = function(y) {
  if (y == 1) return [1, 15, 15];
  if (y == 2) return [2, 24, 24];
  return [y, (y-2) * 4 + 24, (y-2) * 5 + 24];
}; */

//-----------------------------------------------------------------//

/* function makeNegative(num) {
  if (num > 0) {
    return num - (num * 2);
  } else if (num == 0) {
    return 0;
  } else {
    return num;
  }
} */

/* function makeNegative(num) {
  return -Math.abs(num);
} */

//-----------------------------------------------------------------//

/* const quarterOf = (month) => {
  let quarter = 0;
  if (month <= 3) {
    return quarter = 1;
  } else if (month <= 6) {
    return quarter = 2;
  } else if (month <= 9) {
    return quarter = 3;
  } else {
    return quarter = 4;
  }
}; */

/* const quarterOf = month => Math.ceil(month / 3); */

//-----------------------------------------------------------------//

/* function sumStr(a, b) {
  let sum = +a + +b;
  return String(sum);
} */

/* function sumStr(a, b) {
  return String(Number(a)+Number(b));
} */

//-----------------------------------------------------------------//

/* function bmi(weight, height) {
  const i = weight / (height * height);
  if (i <= 18.5) {
      return "Underweight";
  } else if (i <= 25.0) {
    return "Normal";
  } else if (i <= 30.0) {
    return "Overweight";
  }
    return "Obese";
} */

//-----------------------------------------------------------------//

/* function getCount(str) { // повернути кількість (число) голосних в рядку str
  let result = '';
  for (const char of str) {
    if ('aeiou'.includes(char)) { // приводимо всі символи до
      result += char;                           // нижнього реєстру
    }
  }
  return result.length;
} */

/* function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
} */

//-----------------------------------------------------------------//

/* function highAndLow(numbers) { // "1 9 3 4 -5" (повернути найбільше і найменше )
  const arr = numbers.split(' ');
  let max = arr[0], min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) > max) {
      max = arr[i];
    }
    if (parseInt(arr[i]) < min) {
      min = arr[i]
    }
  }
  const result = max + ' ' + min;
  return result;  // 9 -5
} */

/* function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
} */

//-----------------------------------------------------------------//

/* function findShort(s){ // "bitcoin take over the world" (повернути довжину (number) найменшого слова
  const spl = s.split(' ');
  let min = spl[0].length;
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length < min) {
      min = spl[i].length;
    }
  }
  return min;
} */

/* function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
} */

//-----------------------------------------------------------------//

/* function squareDigits(num) { // 3212
  let result = '';
  const str = num.toString();
  for (let i of str) {
    result += i * i;
  }
  return +result; // 9414
} */

/* function squareDigits(num){
  const string = num.toString();  // "3212"
  let results = [];
  for (let i = 0; i < string.length; i++){
      results[i] = string[i]**2;  // results = (4) [9, 4, 1, 4]
  }
  return Number(results.join('')); // !!! join перетворює масив в рядок "9414", Number назад в число
} */

/* function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
} */

//-----------------------------------------------------------------//



//-----------------------------------------------------------------//



//-----------------------------------------------------------------//

// Given two integers a and b, which can be positive or negative, find the sum of all the integers
// between and including them and return it. If the two numbers are equal return a or b.

/* function getSum(a, b) { // знайти суму чисел від а до b
  let max = Math.max(a, b),  //знаходимо найбільше
      min = Math.min(a, b);  // знаходимо найменше
  let result = 0;
  for (min; min <= max; min++) {  // робимо перебір від min до max
    result += min;                // додаємо до result число з min кожної ітерації
  }
  return result;
} */

/* function getSum(a, b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
} */

/* function getSum(a, b) {
  res = 0;

  if (a < b)
    while (a <= b) res += a++;
  else
    while (a >= b) res += a--;

  return res;
} */

//-----------------------------------------------------------------//

/* function maskify(cc) { // '4556364607935616'
  if (cc.length <= 4) {
    return cc;
  }
  let sliced = cc.slice(-4);
  return sliced.padStart((cc.length), '*');  // ************5616
} */

/* maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4); */

//-----------------------------------------------------------------//

/* function filter_list(l) { // [1,2,'aasf','1','123',123] == [1,2,123]
  return l.filter(e => typeof e !== 'string')
}

function filter_list(l) {
  return l.filter(Number.isInteger);
} */

//-----------------------------------------------------------------//

/* function nbYear(p0, percent, aug, p) { // 1000, 2, 50, 1200
  let amountOfYears = 0;
  while (p0 < p) {
    amountOfYears++;
    p0 = p0 + (p0 * percent / 100) + aug;
  }
  if (p0 >= p) {
    return amountOfYears; // 3
  }
  return amountOfYears;
} */


/* function nbYear(p0, percent, aug, p) {
  let year = 0;
  for (year = 0; p0 < p; year++) p0 = p0 * (1 + percent / 100) + aug;
  return year;
} */

//-----------------------------------------------------------------//

/* function sumTwoSmallestNumbers(numbers) { // Sum of two lowest positive integers
  let ordered = numbers.sort(function (a, b) {
    return a - b;
  }); // ordered = (5) [5, 8, 12, 19, 22]
  let result = 0;

  for (let i = 0; i < ordered.length; i++) {
    if (i === 0) {
      result += ordered[0];
    }
    if (i === 1) {
      result += ordered[1];
    } // This solution sorts the array numerically, sets a constiable called ‘result’ to 0,
    // loops through the array to add the 0 i value to ‘result’, then adds the 1 i value to result.
  }
  return result; // [19, 5, 42, 2, 77], the output should be 7.
} */

/* function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
} */

//-----------------------------------------------------------------//

/* function findDifference(a, b) {
  const volumeA = (a[0] * a[1]) * a[2];
  const volumeB = (b[0] * b[1]) * b[2];
  if (volumeA > volumeB) {
    return volumeA - volumeB;
  } else {
    return volumeB - volumeA;
  }
} */

//-----------------------------------------------------------------//

/* function getMiddle(s) { // You are going to be given a word. Your job is to return the middle character of the word.
                        // If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
  if (s.length % 2 == 0) {
    if (s.length == 2) {
      return s;
    } else {
      return s.slice(s.length / 2 - 1, s.length / 2 + 1);
    }
  }
  if (s.length % 2 !== 0) {
    if (s.length == 1) {
      return s;
    } else {
      return s.slice((Math.floor(s.length / 2)), (Math.floor(s.length / 2 + 1)));
    }
  }
} */

/* function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
} */

//-----------------------------------------------------------------//

/* const firstLetterCaps = (str) => {

  return str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}; */



/* function firstLetterCaps(str) {
  const splits = str.split(" ");  // splits = (4) ["How", "are", "you", "doing"]
  const result = "";

  for (let i = 0; i < splits.length; i++) {
    let word = splits[i];  // "How"
    let first = word.substring(0, 1).toUpperCase();  // "H"
    let leftovers = word.substring(1, word.length);  // "ow"
    result += first + leftovers + " ";  // "How "
  }
  return result;
} */

//-----------------------------------------------------------------//

/* function findNextSquare(sq) {  // Find the next perfect square! (121 = 11 * 11 = perfect square)
  if (Math.sqrt(sq) % 1 === 0) {
    const next = Math.sqrt(sq) + 1;
    return next ** 2;
  }
  return -1;
} */

/* function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
} */

//-----------------------------------------------------------------//

/* const isSquare = function(n){
  return Math.sqrt(n) % 1 === 0;
}; */

/* const isSquare = n => Number.isInteger(Math.sqrt(n)); */

//-----------------------------------------------------------------//

/* function openOrSenior(data) {
  let resultArr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      resultArr.push('Senior');
    } else {
      resultArr.push('Open');
    }
  }
  return resultArr;
} */

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

/* function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
} */

//-----------------------------------------------------------------//

/* const binaryArrayToNumber = arr => {  // [0, 0, 0, 1] ==> 1
  return parseInt(arr.join(''), 2); // 2 - двійкова система
}; */

//-----------------------------------------------------------------//

/* function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
} */

/* function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
} */

/* function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
} */

//-----------------------------------------------------------------//

/* function isLeapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
} */

//-----------------------------------------------------------------//

/* function calculateYears(principal, interest, tax, desired) {
  let amountOfYears = 0;
  let profit = principal;
  do {
    let percentage = profit * interest;
    let afterTax = percentage - (percentage * tax);
    profit += afterTax;
    if (profit <= desired) {
      amountOfYears++;
    }
  }
  while (profit <= desired);

  if (principal == desired) {
    return 0
  }

  return amountOfYears + 1;
} */

/* function calculateYears(principal, interest, tax, desired) {
  // your code
  const years = 0;
  while(principal < desired){
    principal += (principal * interest) * (1 - tax);
    years++;
  }
  return years;
} */

//-----------------------------------------------------------------//

/* function shortenToDate(longDate) {
    return longDate.split(",")[0];
} */

/* const shortenToDate = longDate => longDate.split(",")[0]; */

//-----------------------------------------------------------------//

/* function persistence(num) {
  let i = 0;
  while (num.toString().length !== 1) {
    num = num.toString().split("").reduce((a, b) => a * b);
    i++;
  }
  return i;
} */

//-----------------------------------------------------------------//

/* const sequenceSum = (begin, end, step) =>
  begin > end ? 0 : begin + sequenceSum(begin + step, end, step) */

/* const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};
 */

//-----------------------------------------------------------------//

/* function solution(number){  // Multiples of 3 or 5
  let res = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      res += i;
    }
  }
  return res;
} */

//-----------------------------------------------------------------//

// accum("abcd") -> "A-Bb-Ccc-Dddd"
/*
function accum(s) {
  const result = [];
  const lowerStr = s.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    let str = lowerStr[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      str += lowerStr[i];
    }
    result.push(str);
  }
  return result.join("-");
} */

// Map

/* function accum(s) {
  return [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join("-")
} */

// Reduce

/* function accum(s) {
  return [...s.toUpperCase()].reduce((acc, cur, index) => acc + "-" + cur + cur.toLowerCase().repeat(index))
} */

//-----------------------------------------------------------------//

/* const duplicateEncode = word => {
  //make a frequency map
  const freqMap = [...word.toLowerCase()].reduce((acc, val) => {
    acc[val] = acc[val] + 1 || 1;
    return acc;
  }, {});
  //return the mapped word
  return [...word.toLowerCase()]
    .map(e => freqMap[e] == 1 ? '(' : ')')
    .join('');
} */


/* function duplicateEncode(word){
  let unique ='';
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += '(';
    }
    else {
      unique += ')';
    }
  }
  return unique;
} */

//-----------------------------------------------------------------//

/* function duplicateCount(text) {

  let miniArr = text.toLowerCase().split("");  //*['i','n','d','i','v','i','s','i','b','i','l','i','t','y']

  let alreadyFound = [],
      counter = 0;

  for (let i = 0; i < miniArr.length; i++) {

    let sliced = miniArr.slice(0, i);

    if (alreadyFound.includes(miniArr[i])) {
      i++;
      continue;
    } else if (sliced.includes(miniArr[i])) {
      alreadyFound.push(miniArr[i]);
      counter++;
    }

  }
  return counter;
} */

/* function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
} */

/* function duplicateCount(text){
  const lower = text.toLowerCase();
  const count = 0;
  const used = [];

  lower.split('').forEach(function(letter) {
    if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
      count++;
      used.push(letter);
    }
  });

  return count;
} */

//-----------------------------------------------------------------//

/*
const solve = string => {
  let counterLowerCase = 0;
  let counterUpperCase = 0;
  for (const subString of string) {
    subString === subString.toUpperCase() ? counterUpperCase += 1 : counterLowerCase += 1;
  }
  return counterLowerCase >= counterUpperCase ? string.toLowerCase() : string.toUpperCase();
}
 */

/* function solve(s){
  let lowerC = 0;
  let upperC = 0;
  for( let i = 0;i<s.length;i++){
    if( s[i] == s[i].toUpperCase()){
      upperC++;
    }
    else{
      lowerC++;
    }
  }
  return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
} */

/* const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase() */

//-----------------------------------------------------------------//

/* function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(names.length, 4)]
} */


//-----------------------------------------------------------------//

/*
function isPangram(string) {
  let strArr = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
} */

/* function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
} */

/* function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
} */


//-----------------------------------------------------------------//

/* function shortestStepsToNum(num) {
  let steps = 0
  while (num > 1) {
    num % 2 == 0 ? num /= 2 : num--
    steps++
  }
  return steps
} */


/* function shortestStepsToNum(num) {

  if (num < 3)
    return num - 1;

  let next = num % 2 ? num - 1 : num / 2;

  return 1 + shortestStepsToNum(next);

} */

//-----------------------------------------------------------------//

/* function rowSumOddNumbers(n) {
  return Math.pow(n,3);
} */

/* function rowSumOddNumbers(n) {
  const start = n * n - n + 1;
  const result = 0;  
  
  for(i = 0; i < n; i++)
  {
    result =  result + (start + (i*2));
  }
    
  return result;
} */

//-----------------------------------------------------------------//

/* const numJewelsInStones = function(jewels, stones) {
  let count = 0;

  for (let i = 0; i < jewels.length; i++) {
    
    for (let s = 0; s < stones.length; s++) {
      
      if (jewels[i].includes(stones[s])) {
        count++;
      }
    }
  }
  return count;
}; */

//-----------------------------------------------------------------//

/* const fib = function (n) {
  if (n == 0) {
    return n;
  }
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}; */

//-----------------------------------------------------------------//

/* function palindrome(string) {
  const re = /[^A-Za-z0-9]/g;
  str = string.toLowerCase().replace(re, '');
  const len = str.length;
  for (const i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
} */

/* function palindrome(str) {
  const re = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(re, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
} */


//-----------------------------------------------------------------//

/* function rgb(r, g, b) {
  function decToHex(c) {
    if (c > 255) {
      return "FF";
    }
    else if (c < 0) {
      return "00";
    }
    else return c.toString(16).padStart(2, "0").toUpperCase();
  }

  return decToHex(r) + decToHex(g) + decToHex(b);
} */

/* function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
} */

//-----------------------------------------------------------------//

/* function isValidWalk(walk) {
  let ns = 0, ew = 0;
  if (walk.length === 10) {
    for (let i of walk) {
      if (i == 'n') ns += 1;
      if (i == 's') ns -= 1;
      if (i == 'e') ew += 1;
      if (i == 'w') ew -= 1;
    }
  }
  else
    return false
  return ns === 0 && ew === 0;
}
 */

/* function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function (a) { return a == val; }).length;
  }
  return walk.length == 10 && count('n') == count('s') && count('w') == count('e');
} */

//-----------------------------------------------------------------//

/* const maxProfit = function(prices) {

  let buyPrice = prices[0];
  let profit = 0;

  for(let i = 0; i < prices.length; i++) {
    let tempProfit = prices[i + 1] - prices[i];

    if(tempProfit > 0) {
      if(prices[i] < buyPrice) {
        buyPrice = prices[i];
      }
      if(prices[i+1] - buyPrice > profit) {
        profit = prices[i + 1] - buyPrice;
      }
    }
  }
  return profit;
}; */

//-----------------------------------------------------------------//

/* function fakeBin(x) {
  const result = [];

  for (const char of x) {
    if (char < 5) {
      result.push('0');
    } else {
      result.push('1');
    }

  }
  return result.join('');
} */


/* function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
} */

/* function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
} */

//-----------------------------------------------------------------//

/* function getIssuer(number) {

  const num = number.toString().split("");
  const AMEX = num.slice(0, 2).join("");
  const Discover = num.slice(0, 4).join("");
  const Mastercard = num.slice(0, 2).join("");
  const VISA = num[0];

  if (AMEX == "34" || AMEX == "37" && num.length == 15) {
    return "AMEX";
  } else if (Discover == "6011" && num.length == 16) {
    return "Discover";
  } else if (Mastercard == "51" || Mastercard == "52" || Mastercard == "53" || Mastercard == "54" || Mastercard == "55" && num.length == 16) {
    return "Mastercard";
  } else if (VISA == 4 && (num.length == 13 || num.length == 16)) {
    return "VISA";
  } else {
    return "Unknown";
  }

} */

/* function getIssuer(number) {
  let cardStr = number.toString();
  if (cardStr.match(/^3[4|7]\d{13}$/g)) return 'AMEX';
  if (cardStr.match(/^4(\d{12}|\d{15})$/g)) return 'VISA';
  if (cardStr.match(/^5[1-5]\d{14}$/g)) return 'Mastercard';
  if (cardStr.match(/^6011\d{12}$/g)) return 'Discover';
  return 'Unknown';
}
 */

/* function getIssuer(number) {
  var s = number.toString();
  if (/^3[4|7]\d{13}$/.test(s)) return "AMEX";
  if (/^6011\d{12}$/.test(s)) return "Discover";
  if (/^5[1-5]\d{14}$/.test(s)) return "Mastercard";
  if (/^4(\d{12}|\d{15})$/.test(s)) return "VISA";
  return "Unknown";
} */
//-----------------------------------------------------------------//

/* const checkPerfectNumber = function (num) {
  debugger
  let divisors = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      divisors += i;
    }
  }
  if (divisors == num) {
    return true;
  }
  return false;
};
 */

//-----------------------------------------------------------------//

/* function digital_root(n) {
  if (n < 10) return n;
  return digital_root(
    n.toString().split('').reduce((acc, d) => {
      return acc + +d;
    }, 0));
} */

/* function digital_root(n) {
  return (n - 1) % 9 + 1;    //return--n%9+1;
} */

//--------------------------------------------------------------------------------------------------------------------------//
/* const singleNumber = function (arr) {
  const temp = {};

  for (const num of arr) {
    temp[num] = temp[num] + 1 || 1;
  }

  for (const key in temp) {
    if (temp[key] === 1) {
      return key;
    }
  }
} */


/* const singleNumber = function (arr) {
  return arr.reduce( (a, b) => a ^ b);
}

console.log(singleNumber([2, 1, 2, 1, 4])); */

//-----------------------------------------------------------------//

/* const missingValues = (arr) => {
  const set = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const sortedValue = Object.entries(set)
    .map((v) => [v[1], Number(v[0])])
    .sort((a, b) => a[0] - b[0]);

  return sortedValue[sortedValue.findIndex((v) => v[0] === 2)][1] *(sortedValue[sortedValue.findIndex((v) => v[0] === 1)][1] ** 2);
};

 */
/* function missingValues(a) {
  const x = a.find( v => a.filter( w => v===w ).length===1 );
  const y = a.find( v => a.filter( w => v===w ).length===2 );
  return x*x*y;
} */

/* function missingValues(arr) {
  // Question overview:
  // I am given an array of numbers.
  // In the array, every elment appears three times, we don't want those.
  // For element that appears only once, set it to x
  // For element that appears only twice, set it to y
  // return x * x * y

  // High level strategy: 
  let x, y;
  // Step 1: Put the elements into an object as a key with a counter as the value
  let object = arr.reduce((obj, currEl) => Object.assign(obj, { [currEl]: obj[currEl] + 1 || 1 }), {})
  // Step 2: Loop through the object and set whatever keys that appeared once and twice as x and y respectively
  for (const key in object) {
    if (object[key] === 1) x = +key
    if (object[key] === 2) y = +key
  }
  // Step 3: return x * x * y
  return x * x * y;
} */

/* 
function missingValues(arr) {

  let obj = {};

  for (let i = 0; i < arr.length; i++) {

    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }


  }
  let x, y;
  for (key in obj) {
    if (obj[key] === 1) {
      x = key;
    } else if (obj[key] === 2) {
      y = key;
    }
  }

  //console.log(obj);
  return x * x * y;

} */

/* function missingValues(arr) {  //? https://medium.com/@kwang06/hashmaps-are-very-useful-152093285635
  let x;
  let y;
  let countNum = {};
  for (let i = 0; i < arr.length; i++) {
    if (!countNum[arr[i]]) {
      countNum[arr[i]] = 1;
    } else {
      countNum[arr[i]]++;
    }
  }
  //is an array of the keys in the countNum hash
  let keys = Object.keys(countNum);
  keys.forEach(num => {
    if (countNum[num] === 1) x = num;
    if (countNum[num] === 2) y = num;
  });
  return x * x * y;
} */

//-----------------------------------------------------------------//

/* function duplicates(array) {
  if (array.length <= 1) {
    return 0;
  }
  var t = {};
  array.forEach(i => t[i] = (t[i] || 0) + 1);
  return Object.values(t).reduce((acc, p) => acc + Math.floor(p / 2), 0);

} */

/* function duplicates(array) {

  const newArray = array.sort((a, b) => a - b);
  
  if (newArray.length <= 1) return 0;

  let count = 0;

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] == newArray[i + 1]) {
      count++;
      i++;
    }
  }
  return count;
} */

// console.log(duplicates([1, 2, 5, 6, 5, 2]));
