/* Дано рядок input, що складається з цифр. Поверніть новий рядок, в якому цифри менші за 5 з input замінені на 0, а цифри 5 і більше - на 1.

Приклад:

fakeBin("4538") === "0101";
fakeBin("12345") === "00001";
fakeBin("5678") === "1111"; */

function fakeBin(input) {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] >= 5) {
      result += 1;
    } else if (input[i] < 5) {
      result += 0;
    }
  } return result;
}