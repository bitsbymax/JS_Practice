/* Напиши функцію getBinaryId, яка приймає userId та повертає рядок, що є його записом у двійковій системі. userId може бути числом або рядком (шістнадцятковим записом числа), який також треба перевести у двійкову систему.

Приклади:

getBinaryId(7) === '111'
getBinaryId('FE00') === '1111111000000000' */

type UserId = number | string;

function getBinaryId(userId: UserId): string {
  let number: number;
  let res: string;
  if (typeof userId === 'number') {
    res = userId.toString(2);

    return res;
  }
  number = parseInt(userId, 16);
  res = number.toString(2);

  return res;

}

/* function getBinaryId(userId: number | string): string {
  if (typeof userId === 'number') {
    return userId.toString(2);
  }

  return Number(`0x${userId}`).toString(2);
} */
