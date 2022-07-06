/* Створи функцію canIWear, яка приймає два рядки: mySize та itemSize і повертає true, якщо itemSize не меньше за mySize.

При цьому розмір - це завжди одне з 5 значень xs, s, m, l або xl (в порядку зростання).

Створи новый тип Size, що складатиметься з вказаних значень, та використай його для типізації.

Приклади:

canIWear('l', 'l') === true
canIWear('m', 'xl') === true
canIWear('s', 'xs') === false */

/* type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

function canIWear(mySize: Size, itemSize: Size): boolean {
  let arr: string[] = ['xs','s','m','l','xl'];

  let arr1: number = arr.indexOf(mySize);
  let arr2: number = arr.indexOf(itemSize);

  return arr2 >= arr1;
} */

type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

function canIWear(mySize: Size, itemSize: Size): boolean {
  const sizes: Size[] = ['xs', 's', 'm', 'l', 'xl'];

  return sizes.indexOf(mySize) <= sizes.indexOf(itemSize);
}
