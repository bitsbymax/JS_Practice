/* Нещодавно ми з'ясували, що остання версія програмного забеспечення (ПЗ) роботів містить критичну помилку. Нам треба якнайшвидше з'ясувати, коли це почалося.

В нас є число currentVersion - поточна версія ПЗ, і функція checkVersion, яка приймає номер версії та повертає true, якщо помилка є (інакше false).

Напиши функцію getFirstBadVersion, яка приймає функцію checkVersion і актуальну версію currentVersion та повертає першу версію, в якій є помилка.

номера версій - це цілі додатні числа, що починаються з 1
функція checkVersion вже написана (її можна одразу використовувати)
Приклади:
 */

function checkVersion(version) {
  return version > 133;
}
getFirstBadVersion(checkVersion, 145); // === 134

const checkVersion = v => v >= 30;
getFirstBadVersion(checkVersion, 55); // === 30

function getFirstBadVersion(checkVersion, currentVersion) {
  for (let i = 1; i < currentVersion; i++) {
    if (checkVersion(i)) {
      return i;
    }
  }
}