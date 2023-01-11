function f(start, end, step = 1) {
  let result = [];
  if (start < end) {
    for (; start < end; start += step) {
      result.push(start);
    }
  } else {
    for (; start >= end; step < 0 ? (start = start + step) : (start -= step)) {
      result.push(start);
    }
  }

  return result;
}

console.log(f(1, 10, 2)); //[1, 3, 5, 7 ,9]
