/* Поки в нас достатньо роботів, давайте навчимо їх сортувати коробки на складі. 
Всі коробки мають номери, а роботи вчаться сортувати їх в порядку зростання.

Але сортування — справа нелегка, іноді трапляються помилки. Тому нам поки доведеться 
перевіряти, чи правильно робот відсортував коробки.

Напиши функцію isSorted, яка отримує масив номерів і повертає true або false. 
(Номери - це завжди числа, але вони можуть повторюватись)

Приклади:

isSorted([1, 2, 3, 4, 5]) === true
isSorted([0, 1, 1, 1, 2]) === true
isSorted([1, 5, 7]) === true
isSorted([1, 2, 11]) === true
isSorted([5]) === true
isSorted([]) === true
isSorted([0, 3, 1, 2, 2, 2]) === false
isSorted([1, 11, 2]) === false
isSorted([5, 3]) === false */

function isSorted(boxNumbers) {
  if (boxNumbers.length === 0) {
    return true;
  } 
  for (let i = 0; i < boxNumbers.length; i++) {   // перебір масиву
    if (boxNumbers[i] > boxNumbers[i + 1]) {   // якщо поточний елемент більше ніж наступний, 
      return false;                             // значить масив не відсортовано від меншого до більшого
    }
  } return true;   // інакше відсортовано
}

console.log(isSorted([0, 3, 4, 2,]));
//----------------Розв'язок ментора!!!-----------------

function isSorted(boxNumbers) {
  if (boxNumbers.length === 0) {
    return true;
  }
  for (let i = 1; i < boxNumbers.length; i++) {    // перебір масиву
    if (boxNumbers[i - 1] > boxNumbers[i]) {  //  якщо поточний елемент - 1 (тобто попередній) більше ніж поточний, 
      return false;                             // значить масив не відсортовано від меншого до більшого
    }
  } return true;
}
console.log(isSorted([0, 3, 1, 2, 2, 2]));