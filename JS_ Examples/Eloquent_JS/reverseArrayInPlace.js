const f = (arr) => {
  let result = [];

  for (let el of arr) {
    result.unshift(el);
  }

  return result;
};

console.log(f([1,2,4,8]));