/* Реалізуй функцію makeStorage так, щоб працював наступний код:

!!! ВАЖЛИВО: storage має коректно працювати з будь-якими строковими ключами, навіть 'getValue' або 'setValue' */

const storage = makeStorage();

storage.setValue('name', 'Peter');
storage.setValue('age', 30);

storage.getValue('name'); // Peter
storage.getValue('age'); // 30

storage.setValue('age', 31);
storage.getValue('age'); // 31

storage.getValue('getValue'); // undefined
storage.setValue('getValue', 42);
storage.getValue('getValue'); // 42
storage.getValue('occupation'); // undefined

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
