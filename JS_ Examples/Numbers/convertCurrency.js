/* Працівникам Mate Exchange набридло конвертувати на калькуляторі валюту з гривні в обрану валюту.
Давай створимо функцію convertCurrency, яка буде приймати параметри, amount в гривнях, exchangeRate курс обміну,
назву currencyName бажаної валюти та повертати рядок Give them {{x}} {{currencyName}}('s). Функція має перевіряти,
що працівник правильно заповнив параметри, та повертати помилку Enter valid data якщо в параметрах amount та exchangeRate
негативні значення або нуль. Якщо результат не ціле число - округли значення до двох знаків після коми.

Приклади:
convertCurrency(1000, 0.037, 'dollar') === 'Give them 37 dollar('s)'
convertCurrency(251, 0.15, 'zloty') === 'Give them 37.65 zloty('s)'
convertCurrency(-100, -0.034, 'bolivar') === 'Enter valid data' */

function convertCurrency(amount, exchangeRate, currencyName) {
  if (amount > 0 && exchangeRate > 0) {
    let exchangedAmount = amount * exchangeRate;
    return `Give them ${+exchangedAmount.toFixed(2)} ${currencyName}('s)`;
  } else {
    return 'Enter valid data';
  }
}
