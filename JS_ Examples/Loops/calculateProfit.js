/* Senior Frontend розробник Іван вже не перший рік думає про те, щоб покласти гроші на депозит в
банк на кілька років. Він ознайомився з умовами Mate bank і дізнався, що поклавши 10000$ на
3 роки під 4% річних, він отримає 1248,64$ прибутку.

Перший рік 10000 + 4% = 10400
Другий рік 10400 + 4% = 10816
Третій рік 10816 + 4% = 11248,64
Зараз банкіри Mate bank рахують все це вручну. Давай їм допоможемо! Напиши функцію calculateProfit,
яка прийматиме amount, percent та period і повертатиме суму чистого прибутку за весь час.

Приклади (ми перевіряємо тільки цілу частину):

calculateProfit(1000, 5, 7) === 407
calculateProfit(12500, 3, 12) === 5322 */

function calculateProfit(amount, percent, period) {  /// 1000  10  2 як приклад
  let profit = 0;
  for (let i = 0; i < period; i++) { /// лічильник спрацює 2 рази
    let yearProfit = amount * percent / 100;  /// yearProfit - сума нарахованих % за один рік, перша ітерація = 100, друга ітерація = 110
    profit += yearProfit;   //// 1 ітерація = 100, друга ітерація = 100 + 110 = 210
    amount += yearProfit;   //// 1 ітерація = 1000 + 100 = 1100, друга ітерація = 1100 + 110 = 1210
  }
  return profit;  /// остаточний профіт 210 
}

// --------- Розв'язок ментора!!!-----------

function calculateProfit(amount, percent, period) {
  let curruntAmount = amount;

  for (let year = 1; year <= period; year++) {  // виконюємо цикл period кількість разів
    curruntAmount += curruntAmount * percent / 100; // вираховуємо суму нарахувань за кожен рік
  }
  return curruntAmount - amount;     // повертаємо суму нарахованих відсотків за period років
}