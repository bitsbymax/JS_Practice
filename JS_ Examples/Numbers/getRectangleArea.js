/* Функція getRectangleArea приймає сторону side і діагональ diagonal прямокутника. 
Перевір чи це прямокутник (діагональ має бути більша за сторону). 
Думав математика не знадобиться в житті?
Поверни площу цього прямокутника, округлюючи до 2 знаків після коми, або рядок not a rectangle, якщо це не прямокутник.

Приклади:
getRectangleArea(10, 20) === 173.2
getRectangleArea(9, 18) === 140.29
getRectangleArea(100, 98) === 'not a rectangle' */

function getRectangleArea(side, diagonal) {
  let square = side * Math.sqrt(diagonal ** 2 - side ** 2);
  if (diagonal > side && diagonal !== 0 && side !== 0) {
    return +square.toFixed(2);
  } else {
    return 'not a rectangle';
  }
}
// --------- Розв'язок ментора!!!-----------
function getRectangleArea(sideA, diagonal) {
  if (sideA >= diagonal || sideA <= 0) {               // сторона менше діагоналі і більше 0 
    return 'not a rectangle';
  }
  const sideB = Math.sqrt(diagonal ** 2 - sideA ** 2); // знаходимо другу сторону
  return Math.round(sideA * sideB * 100) / 100;       // визначаємо площу за т. Піфагора, округлюючи до 2 знаків після коми
}
