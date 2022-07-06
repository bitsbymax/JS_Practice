/* Функція getLeaders приймає масив чисел, та повертає масив Лідерів

Пояснення: Число вважається Лідером, якщо воно більше за суму всіх елементів справа від нього.

Примітки:

Вхідний масив містить не менше 3 елементів
Масив вхідних чисел може містити як позитивні, так і негативні числа
Числа можуть повторюватися
Масив який повертається, має містити числа в тому ж порядку, в якому вони зустрічаються у початковому масиві
Відсутність елементів справа від числа розцінюється як 0
Приклади:

arrayLeaders([1, 2, 3, 4, 0]) === [4]

4 is greater than the sum all the elements to its right side
The last element 0 is equal to right sum of its elements (abstract zero).
arrayLeaders([16, 17, 4, 3, 5, 2]) === [17, 5, 2]

17 is greater than the sum all the elements to its right side
5 is greater than the sum all the elements to its right side
The last element 2 is greater than the sum of its right elements (abstract zero) */


function getLeaders(numbers) {  // потрібно порівняти 1 число масиву с сумої всіх наступних у масиві
  const resultArr = [];          // і якщо воно більше суми, записати його в новий масив
  let checkLeader = 0;
  for (let i = 0; i < numbers.length; i++) {  // береться 1 число масиву
    for (let n = i; n < numbers.length - 1; n++) {  // далі виконуємо перебір кількість разів length - 1, так як перше число масиву ігнорується
      checkLeader += numbers[n + 1];    // сумуємо всі числа справа від 1 і записуємо суму в checkLeader
    }
    if (numbers[i] > checkLeader) {  // порівнюємо 1 число з сумою всіх чисел справа від нього
      resultArr.push(numbers[i]);  // якщо воно більше суми, додаємо його в масив
    }
    checkLeader = 0;  // скидаємо число для порівняння
  }
  return resultArr;
}
console.log(getLeaders([17,4,3,0]));