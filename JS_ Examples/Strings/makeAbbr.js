/*Псс... Ми тут придумали цікаву ідею для бізнесу. У світі є багато речей,
які складаються з кількох слів. Ми можемо створити суперпрограму makeAbbr,
яка буде повертати для них абревіатури!!! Такого точно ще ніхто не робив!

Допоможеш нам? Ти в долі. Як тільки це почне приносити нам прибутки,
ми перерахуємо кошти тобі. Точно-точно. Ух. Заживемо!

Ти можеш розраховувати, що назва складається виключно з букв, а слова
розділені одним пробілом.

Приклади:

makeAbbr('national aeronautics space administration') === 'NASA'
makeAbbr('central processing unit') === 'CPU'
makeAbbr('simplified molecular input line entry specification') === 'SMILES'*/

function makeAbbr(words) {
  let a = words.split(' ');
  let n = "";

  for (let i = 0; i < a.length; ++i) {
    n += a[i].charAt(0);
  }
  return n.toUpperCase();
}
// --------- Розв'язок ментора!!!-----------
function makeAbbr(words) {  // формування аббревіатури з рядка зі словами
  const name = `${words.trim()}`; // додавання пробілу перед першим словом
  let abbr = '';

  for (let i = 0; i < name.length; i++) {
    if (name[i] === '') {  // якщо знаходимо пробіл
      abbr += name[i + 1]; // то додаємо в змінну перший символ після пробілу
    }
  }
  return abbr.toUpperCase();
}
