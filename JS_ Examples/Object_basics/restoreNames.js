/* В базі даних користувачів стався збій. В декого зникли значення з поля firstName, 
добре що у user вже є поле fullName, з якого ми можемо взяти потрібні дані.

Реалізуй функцію restoreNames, яка приймає масив об'єктів users та відновлює firstName 
в тих, в кого воно рівне undefined, спираючись на поле fullName. Функція нічого не повертає.

Приклад:

restoreNames(users);
// users === [
  {
    firstName: 'Jack',
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    firstName: 'Mike',
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
]; */
const users = [
  {
    firstName: undefined,
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    firstName: undefined,
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
];
//---------------Розв'язок-------------------

function restoreNames(users) {
  for (let i in users) {   // перебір властивостей об'єкта, in повертає властивості/індекси об'єкта/масива
    if (users[i].firstName === undefined) {    // 1 ітерація, і = 0, тому що перевіряється 0 індекс масиву, 
      const f = users[i].fullName.length - users[i].lastName.length;   //якщо там є ключ firstName який === undefined, 
      // то від довжини ключа fullName(9) віднімаємо довжину lastName(4) і записуємо в f = 5
      users[i].firstName = users[i].fullName.substr(0, f - 1); // присвоюємо ключу firstName значення fullName(починаючи з 0 індексу, 5-1 символів)
    }                                                                                                       // -1, щоб прибрати пробіл після ім'я
  }
}
//------Ще як варіант розв'зку---------

function restoreNames(users) {
  for (let user of users) {    // перебір масива, of повертає властивості об'єкта і їх значення
    if (user.firstName) {      // продовжуємо до false, тобто undefined
      continue;
    }
    user.firstName = '';     // замінюємо undefined на порожній рядок

    for (let char of user.fullName) {     // перебір значення властивості fullName, повертає рядок із символами
      if (char === ' ') {  // записуємо в char все до пробілу, знаходимо пробіл, виходимо з циклу
        break;
      }
      user.firstName += char;  // додаємо у властивіть firstName значення char
    }
  }
}

//----------------Розв'язок ментора!!!-----------------

function restoreNames(users) {
  for (const user of users) {
    if (user.firstName) {
      continue;
    }
    const nameParts = user.fullName.split(' ');  // розділяємо значення fullName на 2 окремих пробілом і записуємо в nameParts
                                                 // nameParts: (2) ["Jack", "Holy"]
    user.firstName = nameParts[0];  // присвоюємо ключу firstName значення, що міститься в 0 індексі 
  }
}
console.log(restoreNames(users))
