/* Караул, когось вбили! Тобі вдалося трохи звузити список підозрюваних у вбивстві, адже, 
на щастя, ти знаєш с ким кожен із них бачився у той день.

Реалізуй функцію getKiller, яка приймає об'єкт підозрюваних 
suspects, де у кожного підозрюваного є список людей, з якими він 
зустрічався. Цей об'єкт виглядає ось так:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
Окрім списку підозрюваних, функція також приймає масив жертв dead:

['Lucas', 'Bill']
Тобі потрібно вирахувати вбивцю і повернути його ім'я (вбивця завжди працює наодинці). 
У нашому випадку це James, адже він єдиниий з усіх бачив одразу 2 вбитих. 
Якщо вбивцю не знайдено, то функція нічого не повертає. */
debugger;
function getKiller(suspects, dead) {
  const suspect = Object.keys(suspects); // (3) ["James", "Johnny", "Peter"] // записуємо ключі із suspects
  const meets = []; // meets = [0] // кількість зустрічей // meets = [2] для 1 ітерації, де перевірялись значення ключа "James"

  for (let x = 0; x < suspect.length; x++) { // перебір поіндексно масива suspect
    meets[x] = 0;  // meets = [0] // кількість зустрічей // meets = (2) [2, 0] після 1 ітерації, так як в 0 індекс було додано значення лічильника meets
                    // [2, 1, 0] після 2 ітерації                                               //після кожної ітерації першого for в кінецт масиву додається 0, бо meets[x] = 0
    for (const victim of suspects[suspect[x]]) { // victim: "Jacob", suspect[x] - "James" // заходимо в об"єкт suspects 
                                                 // в [suspect[0]] властивість, тобто "James" і беремо його перше значення victim
      for (const name of dead) { // dead = (2) ["Lucas", "Bill"], name: "Lucas" // перебір масива dead посимвольно
        if (name === victim) { // name: "Lucas", victim: "Jacob" // тобто в циклі порівнюються всі вбиті з першим, кого бачив "James"
          meets[x] += 1;   //  лічильник співпадінь name === victim
        }
      }
    }
  }
  let winner = meets[0]; // winner = 2, meets = (3) [2, 1, 0]
  let killer;

  if (winner) { // перевірка на те, чи було визначено вбивцю
    killer = 0; // якшо так, killer = 0
  }
  for (let y = 1; y < meets.length; y++) { //  перебір масиву meets = (3) [2, 1, 0]
    if (winner < meets[y]) { // якщо 0 індекс meets < 1 індексу meets, тобто при 1 ітерації чи 2 < 1, при 2 ітерація чи 2 < 0, тобто порівнюємо 1 значення масива зі всіма наступними
      winner = meets[y];
      killer = y;
    }
  }
  return suspect[killer];
}
console.log(getKiller({'James': ['Jacob', 'Bill', 'Lucas'],
'Johnny': ['David', 'Kyle', 'Lucas'],
'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']));