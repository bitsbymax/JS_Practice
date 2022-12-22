function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `${history} + 5`) ||
        find(current * 3, `${history} * 3`);
    }
  }

  return find(1, '1');
}

const test24 = findSolution(24);
console.log(test24);//(((1 * 3) + 5) * 3)
const test13 = findSolution(13);
console.log(test13);
