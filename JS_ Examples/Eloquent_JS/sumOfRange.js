function sumOfRange(start, end) {
  let sum = [];
  if (start <= end) {
    for (; start <= end; start++) {
      sum.push(start);
    }
  } else {
    for (; start >= end; start--) {
      sum.push(start);
    }
  }

  function sumAll(sum) {
    console.log(sum);
    let result = sum.reduce((a, b) => a + b);
    return result;
  }

  return sumAll(sum);
}

console.log(sumOfRange(4, 1)); //55
