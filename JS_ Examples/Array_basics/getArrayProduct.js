/* Реалізуй функцію getArrayProduct, яка отримує масив чисел numbers та повертає масив такого ж розміру, 
де numbers[i] дорівнює добутку усіх елементів масиву справа і зліва від цього елемента.

Примітки:

Початковий масив містить не менше 2 елементів
Масив містить тільки додатні числа
Числа можуть повторюватися
Приклади:

productArray([1,5,2]) === [10,2,5]
The first element 10 is the product of all array's elements except the first element 1
The second element 2 is the product of all array's elements except the second element 5
The third element 5 is the product of all array's elements except the third element 2

getArrayProduct([12,20]) === [20,12]
The first element in array 20 is the product of all array's elements except the first element
The second element 12 is the product of all array's elements except the second element*/


function getArrayProduct(numbers) {

  if (Math.min(...numbers) === Math.max(...numbers)) {
    const arr1 = [];
    for (let i = 0; i < numbers.length; i++) {
      let mult1 = 1;
  
      for (let j = 0; j < numbers.length - 1; j++) {
        mult1 *= numbers[j];
      }
      arr1.push(mult1);
    }
    return arr1;
  }


  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    let mult = 1;

    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        continue;
      }
      mult *= numbers[j];
    }
    arr.push(mult);
  }
  return arr;
}

console.log(getArrayProduct([9,9,9,9,9]));
