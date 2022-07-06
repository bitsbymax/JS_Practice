/* Нещодавно археологи знайшли старі записи древньої цивілізації. Виявляється у них вже була розвинена
писемність і була своя мова. Але найкрутіше з цього всього те, що говорили вони просто задом наперед.
Археологи відправили знахідку нам на розшифровку.

Давай розшифруємо decryptMessage послання message древньої цивілізації нащадкам!!!
Приклади:

decryptMessage('!!!reeb gniknird ekil eW') === 'We like drinking beer!!!'
decryptMessage('0202 ni eb lliw cimednap surivanoroc A') === 'A coronavirus pandemic will be in 2020' */

function decryptMessage(message) {
  if (!message) {
    return '';
  }
  let result = '';
  for (let i = message.length - 1; i >= 0; i--) {
      result += message[i];
  }
  return result;
}