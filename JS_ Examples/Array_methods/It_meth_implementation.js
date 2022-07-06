//!--------------------------------------------------------------

numbers.filter = function (callback) {
  const result = [];

  if (callback === undefined) {
    return;
  }

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result[result.length] = this[i];
    }
  }

  return result;
};
//!--------------------------------------------------------------

numbers.map = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i], i, this);
  }

  return result;
};
//!--------------------------------------------------------------

numbers.find = function (callback) {
  let result;

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result = this[i];
      break;
    }
  }

  return result;
};
//!--------------------------------------------------------------

numbers.findIndex = function (callback) {
  let result;

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result = i;
      break;
    }
  }

  if (result === undefined) {
    return -1;
  }

  return result;
};
//!--------------------------------------------------------------

numbers.some = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }

  return false;
};
//!--------------------------------------------------------------

numbers.every = function (callback) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      counter++;
    }
  }

  if (counter === this.length) {
    return true;
  }

  return false;
};
//!--------------------------------------------------------------

const numbers = [10, 20, 30, 40, 50];

numbers.reduce = function (callback, startValue) {
  let prev = startValue;
  let startindex = 0;

  if (arguments.length < 2) {
    prev = this[0];
    startindex = 1;
  }

  for (let i = startindex; i < this.length; i++) {
    prev = callback(prev, this[i], i, this);
  }

  return prev;
}

const callback = (prev, item, index, arr) => {
  console.log(`Prev: ${prev}, item: ${item}, index: ${index} of ${arr.length}`);

  return prev + item;
}

const result = numbers.reduce(callback);
console.log(`Result: ${result}`);
//!--------------------------------------------------------------

const numbers = [14, 3, 11, 5, 2];

numbers.sort = function (callback) {
  let counter;
  do {
    counter = 0;

    for (let i = 1; i < this.length; i++) {
      const prev = this[i - 1];
      const current = this[1];

      if (callback(prev, current) > 0) {
        this[i - 1] = current;
        this[i] = prev;
        counter++;
      }
    }
  } while (counter > 0)


  return this;
}

const compareAsStrings = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  } else {
    return -1;
  }
  
  return prev + item;
}

const result = numbers.sort((a, b) => a - b);
