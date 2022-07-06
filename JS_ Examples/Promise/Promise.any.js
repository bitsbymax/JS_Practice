//Метод Promise.any() принимает итерируемый объект содержащий объекты промисов Promise. Как только один из промисов (Promise) выполнится успешно (fullfill), метод возвратит единственный объект Promise со значением выполненного промиса. Если ни один из промисов не завершится успешно (если все промисы завершатся с ошибкой, т.е. rejected), тогда возвращённый объект Promise будет отклонён (rejected) с одним из значений: массив содержащий причины ошибки (отклонения), или AggregateError — подкласс Error, который объединяет выброшенные ошибки вместе. По существу, метод Promise.any() является противоположностью для Promise.all().
debugger
function request(delay, isRejected) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRejected) {
        reject(`${delay} was rejected`)
      } else {
        resolve(`${delay} was resolved`)
      }
    }, delay * 1000)
  })
}

const data = [
  {
    value: 1,
    isRejected: false,
  },
  {
    value: 2,
    isRejected: false,
  },
  {
    value: 3,
    isRejected: false,
  },
]

const promises = data.map(({ value, isRejected }) => {
  return request(value, isRejected)
})

console.log(promises);

/* Promise.any(promises)
  .catch(console.error)
  .then(console.log) */

(async function () {
  for await (let data of promises) {
    console.log(data);
  }
})()
