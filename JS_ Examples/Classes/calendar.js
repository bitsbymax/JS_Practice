/* Створи клас Calendar з методом book. Метод приймає два цілих числа start та end - початок і кінець події, і додає її в розклад, якщо вона не перетинається з вже збереженими. Якщо подію додано, поверни true, інакше false.

Врахуй, що подія може початися відразу ж, як тільки закінчилася попередня.
*/
class Calendar {
  constructor() {
    this.events = [];
  }
  false() {
    console.log(false);
  }

  true() {
    console.log(true);
  }

  book(start, end) {
    for (const event of this.events) {
      // new event is inside an existing one
      if (start >= event.start && end <= event.end) {
        this.false()
        return false;
      }

      // new event contains the start of an existing one
      if (start <= event.start && end > event.start) {
        this.false()
        return false;
      }

      // new event contains the end of an existing one
      if (start < event.end && end >= event.end) {
        this.false()
        return false;
      }
    }

    // save new event as an object
    this.events.push({ start, end });
    this.true();

    return true;
  }
}

const calendar = new Calendar();
calendar.book(5, 10) // true
calendar.book(4, 11) // false
calendar.book(7, 25) // false
calendar.book(1, 30) // false
calendar.book(10, 25) // true