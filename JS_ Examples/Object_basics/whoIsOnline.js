/* У цьому завданні тобі потрібно показати юзерам хто з їх друзів онлайн і 
готовий чатитись! Створи функцію whoIsOnline, яка приймає масив об'єктів friends
і визначає хто з них online, offline чи away. Якщо юзер має статус online, 
але його не було в мережі більш ніж 10 хвилин (lastActivity > 10), то можна 
вважати, що фактично його статус вже away.

Приклад вхідних даних:
[{
  username: 'Alice',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]
Результат функції whoIsOnline:
{
  online: ['Alice'],
  offline: ['Lucy'],
  away: ['Bob']
}
Якщо в чаті немає активних юзерів, то результат має виглядати ось так:
{
  offline: ['Lucy'],
  away: ['Bob']
}
Якщо ваших друзів зовсім немає в чаті, то до функції прийде пустий масив [].
У цьому випадку потрібно повернути пустий об'єкт {}. */

debugger;

function whoIsOnline(friends) {
  const obj2 = {};
  const test = ['online'];
  const arrOnline = [];  // arrOnline = ["David"]
  const arrOffline = []; // arrOffline = ["Lucy"]
  const arrAway = []; // arrAway = ["Bob"]

  for (const i in friends) {
    const obj1 = friends[i];  // {username: "David", status: "online", lastActivity: 10}
    const arr1 = Object.values(obj1); // ["David", "online", 10]

    if (test.includes(arr1[1])) { // arr1[1] = "online", перевіряємо чи в 1 інексі масива arr1 є рядок "online" що в змінній test
      if (arr1[2] <= 10) {      // перевіряємо, чи в 2 індексі масива arr1 значення <= 10
        arrOnline.push(arr1[0]);   // якщо так, додаємо його в масив arrOnline
      }
      if (arr1[2] > 10) {  // якщо значення в 2 індексі масива arr1 > 10
        arrAway.push(arr1[0]);   // додаємо його в масив arrAway
      }
    } else {
      arrOffline.push(arr1[0]);  // інакше додаємо його в масив arrOffline
    }
  }
  // додаємо в об"єкт obj2 властивості online, offline, away в які буде додано значення з присвоєних змінних
  obj2.online = arrOnline;     
  obj2.offline = arrOffline;
  obj2.away = arrAway;
                                              /* away: ["Bob"]
                                                 offline: ["Lucy"]
                                                 online: ["David"] */
   return obj2;
}

console.log(whoIsOnline([{
  username: 'David',
  status: 'online',
  lastActivity: 10
  }, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
  }, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
  }]));