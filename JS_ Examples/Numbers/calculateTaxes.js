/* Ніхто не любить платити податки, але ми зобов'язані!

Створи функцію calculateTaxes, яка розраховує суму податків в залежності від доходу income.
Використовуй 3-ступеневу модель оподаткування:

частина income до 1000 оподатковується за ставкою 2%
частина income від 1000 до 10000 - 3%
все що більше 10000 - 5%
Приклади:

calculateTaxes(1000) === 20;

taxes = 1000 * 0.02 = 20;
calculateTaxes(10000) === 290;

taxes = 1000 * 0.02 + 9000 * 0.03 = 20 + 270 = 290;
calculateTaxes(12000) === 390;

taxes = 1000 * 0.02 + 9000 * 0.03 + 2000 * 0.05 = 20 + 270 + 100 = 390; */

/* const calculateTaxes = function (income) {

  if (income <= 1000) {
    return income * 0.02;
  }
  if (income <= 10000) {
    return 1000 * 0.02 + (income - 1000) * 0.03;
  }
  if (income > 10000) {
    return 1000 * 0.02 + 9000 * 0.03 + (income - 10000) * 0.05;
  }
}; */

// --------- Розв'язок ментора!!!-----------

function calculateTaxes(income) {
  const rate1 = 0.02;
  const step1 = 1000;

  const rate2 = 0.03;
  const step2 = 10000;

  const rate3 = 0.05;

  if (income <= step1) {
    return income * rate1;
  }

  if (income <= step2) {
    return step1 * rate1 + (income - step1) * rate2;
  }
  return step1 * rate1 + (step2 - step1) * rate2 + (income - step2) * rate3;
}