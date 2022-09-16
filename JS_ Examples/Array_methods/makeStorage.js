/* Реалізуй функцію makeStorage так, щоб працював наступний код:

!!! ВАЖЛИВО: storage має коректно працювати з будь-якими строковими ключами, навіть 'getValue' або 'setValue' */

const storage = makeStorage();
console.log(storage);

console.log(storage.setValue('name', 'Peter')); 
console.log(storage.setValue('age', 30));

console.log(storage.getValue('name')); // Peter
console.log(storage.getValue('age')); // 30
console.log(storage);
console.log(makeStorage().cache);
storage.setValue('age', 31);
storage.getValue('age'); // 31

storage.getValue('occupation'); // undefined
// Зверни увагу, що ключі getValue та setValue також мають корректно додаватися та читатися:

storage.getValue('getValue'); // undefined
storage.setValue('getValue', 42);
storage.getValue('getValue'); // 42

storage.setValue('setValue', 'hello');
storage.setValue('x', 10);
storage.getValue('x'); // 10
storage.getValue('setValue'); // 'hello'

function makeStorage() {
  const cache = {};

  return {
    getValue(key) {
      return cache[key];
    },
    setValue(key, value) {
      cache[key] = value;
    },
  };
}
