function createDicto(owner) {
  let text = '';

  const dicto = (phrase = '') => {
    text += phrase;

    return `${owner} saved: ${text}`;
  }

  dicto.reset = () => { // метод для очищення змінної text
    text = '';
  };

  return dicto;
}

const myDicto = createDicto('Maksym');

myDicto(undefined);
myDicto('It ');
myDicto('should ');
myDicto('work!');
console.log(result); // Maksym saved: It should work!

myDicto.reset();
myDicto('Hello!') // Maksym saved: Hello!

const result = myDicto();
console.log(result);
