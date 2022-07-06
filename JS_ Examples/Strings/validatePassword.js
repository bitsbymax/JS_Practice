/* Доповни функцію validate, котра приймає рядок password та повертає true якщо:

Є хоча б одна буква в верхньому регістрі;
Є хоча б одна буква в нижньому регістрі;
Є хоча б одна цифра;
Довжина паролю не менше 8-ми символів;
Пароль використовує тільки латинські літери та цифри.
Інакше повертає false.

Приклад:

validatePassword('password') === false
validatePassword('Admin12') === false
validatePassword('Admin123') === true
validatePassword('@dmiN122') === false */

function validatePassword(password) {
  
  const validateUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const validateLower = 'abcdefghijklmnopqrstuvwxyz';
  const validateNumbers = '0123456789';

  let validated = '';
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  for (let i = 0; i < password.length; i++) {
    if (validateUpper.includes(password[i])) {
      validated += password[i];
      counter1++;
    } 
    if (validateLower.includes(password[i])) {
      validated += password[i];
      counter2++;
    }
    if (validateNumbers.includes(password[i])) {
      validated += password[i];
      counter3++;
    }
  }
  if (validated.length >= 8 && counter1 >= 1 && counter2 >=1 && counter3 >= 1) {
    return true;
  }

  return false;
}


