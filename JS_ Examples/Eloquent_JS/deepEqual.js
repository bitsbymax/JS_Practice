function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (Array.isArray(a) || Array.isArray(b)) {
    return false;
  }

  if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }
    for (let key in a) {
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }

  return false;
}

console.log(
  deepEqual(
    {
      a: 1,
      b: 3,
    },
    {
      a: 1,
      b: 2,
    },
  ),
);
