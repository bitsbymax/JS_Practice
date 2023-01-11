function sumOfRange(start, end) {
  let sum = [];

  for (; start < end; start++) {
    sum.push(start);
  }
  for (; start > end; start--) {
    sum.push(start);
  }

  function sumAll(sum) {
    let result = sum.reduce((a, b) => a + b);
    return result;
  }
  return sumAll(sum);
}

console.log(sumOfRange(1, 10)); //55
