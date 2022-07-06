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

function restoreNames(users) {
  for (const user of users) {
    console.log(user);
    }
  }
restoreNames(users);  // при for OF users = {firstName: undefined, lastName: "Holy", fullName: "Jack Holy"} при 1 ітерації
                                        //{firstName: undefined, lastName: 'Adams', fullName: 'Mike Adams'} при 2
                     // при for IN users = 0, 1

/* Циклические конструкции for и for/in предоставляют вам доступ к индексу в массиве, а не к фактическому элементу. 
Например, предположим, что вы хотите распечатать значения следующего массива.
С помощью for и for/in вам нужно использовать конструкцию arr [index]

С двумя другими конструкциями, forEach() и for/of, вы сразу получаете доступ к самому элементу массива. 
С forEach() вы можете так же получить индекс массива index, с for/of индекс не доступен.

*/
// https://webdevblog.ru/for-protiv-foreach-protiv-for-in-i-protiv-for-of-v-javascript/

//!------------------------------------------------------------//
/* const users = [ //? масив об'єктів
  { id: 1, name: 'Sergey' },
  { id: 15, name: 'Misha' },
  { id: 42, name: 'Tanya' },
]; */

/* for (const user of users) {
  console.log(
    `${user.name} is #${user.id}` //Sergey is #1, Misha is #15, Tanya is #42
  );
} */

/* const users1 = [ //? масив масивів
  [1, 'Misha'],
  [2, 'Petya'],
  [3, 'Kolya'],
]; */

/* for (const user of users1) { // в user попадає весь масив [1, 'Misha']
  console.log( // Mish is #1, Petya is #2, Kolya is #3
    `${user[1]} is #${user[0]}` // user[1] - 1 індекс в масиві [1, 'Misha'], тобто 'Misha'
  );
} */

/* for (const key of Object.keys(users1)) {
  console.log(  // 0 ::: 1,Misha, 1 ::: 2,Petya, 2 ::: 3,Kolya 
    `${key} ::: ${users1[key]}`
  );
} */

/* for (const key in users1) {
  console.log(  // 0 ::: 1,Misha, 1 ::: 2,Petya, 2 ::: 3,Kolya 
    `${key} ::: ${users1[key]}`
  );
} */