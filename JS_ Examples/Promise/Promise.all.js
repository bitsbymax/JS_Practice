// Promise.all ждёт выполнения всех промисов (или первого метода reject()).

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values);
});

//Выведет:
// [3, 1337, "foo"] 

function reflect(promise) {
  return promise.then(
    (v) => {
      return { status: 'fulfilled', value: v };
    },
    (error) => {
      return { status: 'rejected', reason: error };
    }
  );
}

const promises = [ fetch('index.html'), fetch('https://does-not-exist/') ];
const results = await Promise.all(promises.map(reflect));
const successfulPromises = results.filter(p => p.status === 'fulfilled');
