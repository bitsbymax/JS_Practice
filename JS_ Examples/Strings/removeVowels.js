/* Наш новий бос, як виявилося, просто ненавидить голосні літери. Так це дивно. Але тобі це просто дивно, а нам з цим якось працювати. 
Змушені зі всієї документації прибирати голосні літери...
От якби нам хтось допоміг. Слухай, ти ж уже досвідчений програміст, може можна щось зробити?
Ми тобі рядки document, а ти їх через функцію removeVowels пропустиш і повернеш нам готові документи. Що скажеш?
Приклади:
removeVowels('document') === 'dcmnt'
removeVowels('I like my boss') === ' lk m bss'
removeVowels('350 euro') === '350 r' */

function removeVowels(doc) {
  return doc.replace(/[aeiouyAEIOUY]/g, "");
}

// --------- Розв'язок ментора!!!-----------
function removeVowels(doc) { // прибириємо голосні букви з рядка
  let result = '';
  for (const char of doc) {
    if (!'aeiouy'.includes(char.toLowerCase())) { // приводимо всі символи до
      result += char;                           // нижнього реєстру
    }
  }
  return result;
}