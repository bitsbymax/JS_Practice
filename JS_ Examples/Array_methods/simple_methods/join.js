
//? прототип метода JOIN (cтворює і повертає новий рядок конкатинуючи всі елементи в масиві, розділяючи вказаним розділювачем)
//? приймає один параметр separator (по дефолту ",", якщо порожній рядок, елементи зліплюються)
//?  If arr.length is 0, the empty string is returned.
//? Warning: If an element is undefined, null or an empty array [], it is converted to an empty string.

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else {
        result += this[i];
      }

      if (i !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}
