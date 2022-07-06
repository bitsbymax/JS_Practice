function getValue() {
  const value = Math.random();

  if (value < 0.2) {
    return 0;
  }
  return value;
}

let x = getValue();

while (x > 0) {
  console.log(x);
  x = getValue;
}
console.log('___DONE___');