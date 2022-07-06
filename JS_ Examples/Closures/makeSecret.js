/* Створи функцію makeSecret, яка приймає рядки secret та password і повертає функцію storage з секретом.

1. при звичайному виклику storage повертає рядок Absolutely not a secret thing
2. якщо викликати метод storage.getSecret і передати вірний пароль, то він поверне таємне значення secret
3. якщо пароль невірний, то результат буде Wrong password!
4. якщо пароль було введено невірно 3 рази поспіль, то метод блокується і всі наступні виклики повертатимуть null (навіть для правильного пароля)
5. якщо ДО блокування було введено вірний пароль, то лічильник скидається, і знову є 3 спроби для введення пароля
6. Метод storage.setSecret(newSecret, newPassword) дозволяє встановити новий пароль та таємну фразу і скинути лічильник

Приклад:
const storage = makeSecret('Santa exists!', 'qwerty')
storage() === 'Absolutely not a secret thing'

storage.getSecret('qwerty') === 'Santa exists!'

storage.getSecret() === 'Wrong password!'
storage.getSecret('12345') === 'Wrong password!'
storage.getSecret('qwerty') === 'Santa exists!'

storage.getSecret(1) === 'Wrong password!'
storage.getSecret(2) === 'Wrong password!'
storage.getSecret(3) === 'Wrong password!'
storage.getSecret(4) === null
storage.getSecret('qwerty') === null

storage.setSecret('Mate academy is awesome!', 'qwe123')

storage.getSecret('qwerty') === 'Wrong password!'
storage.getSecret() === 'Wrong password!'
storage.getSecret('qwe123') === 'Mate academy is awesome!' */

function makeSecret(secret, password) {
  let counter = 0;
  let currentSecret = secret;
  let currentPassword = password;

  const storage = function () {
    return 'Absolutely not a secret thing';
  };

  storage.getSecret = (pass) => {
    if (counter >= 3) {
      return null;
    }

    if (pass === currentPassword) {
      counter = 0;

      return currentSecret;
    } else if (pass !== currentPassword) {
      counter++;

      return 'Wrong password!';
    }
  };

  storage.setSecret = (newSecret, newPassword) => {
    counter = 0;
    currentSecret = newSecret;
    currentPassword = newPassword;
  };

  return storage;
}
