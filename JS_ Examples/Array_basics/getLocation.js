/* Наші інженери зараз шукають баг, 
який змушує роботів винищувати людство...

А ми поки випустимо оновлення. Раніше ми 
навчили роботів розуміти команди і перетворювати 
напрямок руху в правильний сигнал:

'forward' в x + 0 та y + 1
'back' в x + 0 та y - 1
'right' в x + 1 та y + 0
'left' в x - 1 та y + 0
Було б чудово, якби робот знав, де він зараз знаходится 
навіть без GPS.

Потрібна функція getLocation, яка отримає масив початкових 
координат coordinates (у вигляді [x, y]) та массив історії 
команд commands, і поверне масив кінцевих координат робота 
в том ж форматі ([x, y])

Приклади:

getLocation([0, 0], ['forward', 'right']) === [1, 1]
getLocation([2, 3], ['back', 'back', 'back', 'right']) === [3, 0]
getLocation([0, 5], ['back', 'back', 'back', 'right', 'left', 'forward']) === [0, 3]



Розв'язок ментора
Розв'язок буде дос */


function getLocation(coordinates, commands) {
  let x = 0;
  let y = 0;   // початкові значення лічильників, які міститимуть значення кількості знаходжень commands
  let z = 0;
  let q = 0;

  if (commands.includes('back')) {   // перевірка на наявність рядка 'back'
    for (let i = 0; i < commands.length; i++) {
      if ('back' === commands[i]) {  // у разі якщо 'back' міститься в commands
        x++;   // збільшуємо лічильник на 1 стільки разів, скільки в commands є рядок 'back'
      }
    }
    coordinates[1] -= x; // віднімаємо від заданої координати у значення лічильника х
  }

  if (commands.includes('forward')) {
    for (let i = 0; i < commands.length; i++) {
      if ('forward' === commands[i]) {
        y++;
      }
    }
    coordinates[1] += y;
  }

  if (commands.includes('left')) {
    for (let i = 0; i < commands.length; i++) {
      if ('left' === commands[i]) {
        z++;
      }
    }
    coordinates[0] -= z;
  }

  if (commands.includes('right')) {
    for (let i = 0; i < commands.length; i++) {
      if ('right' === commands[i]) {
        q++;
      }
    }
    coordinates[0] += q;
  }

  return coordinates;
}

//----------------Розв'язок ментора!!!-----------------
debugger;

function getLocation(coordinates, commands) {
  let x = coordinates[0];  // присвоєння значення координати х у змінну х
  let y = coordinates[1];  // присвоєння значення координати у у змінну у

  for (const command of commands) {  // перебір commands із записом елементів в command
    switch (command) {
      case 'forward':
        y++;       // зміна координати  у
        break;

      case 'back':
        y--;
        break;

      case 'right':
        x++;
        break;

      case 'left':
        x--;
        break;
    }
  }
  
  return [x, y];
}
console.log(getLocation([2, 3], ['back', 'back', 'back', 'right']));