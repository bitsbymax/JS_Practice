console.log('1 - Before');

let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(`2- setInterval #${count}`);
}, 0);

setTimeout(() => {
  console.log('3 - Timeout 1');

  const promise1 = new Promise((resolve) => {
    console.log('4 - created Promise1 in Timeout');
    resolve('Promise1 value');
  });

  promise1
    .then(() => {
      console.log('5 - then for Promise1 in Timeout');

      setTimeout(() => {
        console.log('6 - Timeout in then after Promise1 in Timeout');
        clearInterval(intervalId);
      }, 0);
    })
}, 0);

const promise2 = new Promise((resolve) => {
  console.log('7 - created Promise2');
  resolve();
});

promise2
  .then(() => {
    console.log('8 - then for Promise2');
  })
  .then(() => {
    console.log('9 - then after then for Promise2');

    return new Promise((resolve) => {
      setTimeout(resolve, 0, 'Promise3 value');
    });
  })
  .then(() => {
    console.log('10 - then after then after then for Promise2');
  });

console.log('11 - After');
