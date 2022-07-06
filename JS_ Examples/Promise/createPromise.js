
function createPromise() {
  const completeButton = document.getElementById('complete');
  const cancelButton = document.getElementById('cancel');

  const resolver = (resolve, reject) => {
    completeButton.addEventListener('click', () => {
      resolve('Nice');
      console.log(resolve);
    });
    cancelButton.addEventListener('click', () => {
      reject('Bad');
      console.log(reject);
    });
  }

  return new Promise(resolver);
}

const promise = createPromise();
console.log(promise);

promise
  .then(result => (
    console.log('Success is ', result)
  ))
  .catch(error => {
    console.log('Failure is', error);
  })
