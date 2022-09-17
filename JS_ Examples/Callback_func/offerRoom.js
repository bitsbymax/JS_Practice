/* В процесах Mate Grand Hotel після побудови 5-го корпусу, стало дуже багато рутини. Було прийнято рішення побудувати простий штучний інтелект, який на основі первинних даних про клієнта вирішував би, що йому запропонувати. Створи функцію offerRoom, яка буде приймати 3 callback функції:

getClientStatus
offerStandardRoom
offerLuxuriousRoom
Якщо getClientStatus повертає рядок vip - повернути виклик offerLuxuriousRoom, інакше порекомендувати простий номер (виклик offerStandardRoom).

*/

function offerRoom(
  getClientStatus,
  offerStandardRoom,
  offerLuxuriousRoom,
) {
  if (getClientStatus() === 'vip') {
    return offerLuxuriousRoom();
  } else {
    return offerStandardRoom();
  }
}

const getClientStatus = () => 'vip';
const offerLuxuriousRoom = () => 'Luxury room';
const offerStandardRoom = () => 'Standard room';

offerRoom(getClientStatus, offerStandardRoom, offerLuxuriousRoom) // 'Luxury room'