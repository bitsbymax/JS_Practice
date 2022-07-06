/* Кожні декілька місяців Mate academy проводить networking вечірку для всіх студентів, випускників і тих, хто лише планує розпочати навчання.
Та іноді все йде не так як хотілося, і заклади закриваються на карантин. Нащастя карантин може бути лише раз на рік і лише на початку року. 
І як тільки він завершується ми одразу проводимо першу зустріч.
Порахуй, скільки вечірок проведе Mate academy за рік, знаючи довжину карантина в місяцях quarantineLength та 
періодичність проведення вечірок frequency (1 вечірка кожні frequency місяців).

Приклади:

countNetworking(0, 1) === 12 - кожен місяць
countNetworking(3, 1) === 9 - кожен місяць починаючи з 4-го
countNetworking(3, 2) === 5 - місяці 4, 6, 8, 10 и 12
countNetworking(12, 1) === 0 - карантин на весь рік
countNetworking(11, 3) === 1 - в останній місяць року
countNetworking (2, 5) === 2 - місяці 3 та 8
countNetworking (3, 4) === 3 - місяці 4, 8 та 12 */

function countNetworking(quarantineLength, frequency) {
  let count = (12 - quarantineLength) / frequency;
  return Math.ceil(count);
}

//----------------------Ще один варіант------------------//

function countNetworking(quarantineLength, frequency) {
  let countParty = 0;
  for (let i = 1; i <= 12 - quarantineLength; i += frequency) {
    countParty++;
  }
  return countParty;
}