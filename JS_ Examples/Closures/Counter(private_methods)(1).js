/* Частные методы полезны не только тем, что ограничивают доступ к коду, это также мощное средство глобальной организации пространства имён, позволяющее не засорять публичный интерфейс вашего кода внутренними методами классов.

Код ниже иллюстрирует, как можно использовать замыкания для определения публичных функций, которые имеют доступ к закрытым от пользователя (private) функциям и переменным. Такая манера программирования называется модульное программирование:  https://javascript.plainenglish.io/data-hiding-with-javascript-module-pattern-62b71520bddd*/
var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

alert(Counter.value()); /* Alerts 0 */
Counter.increment();
Counter.increment();
alert(Counter.value()); /* Alerts 2 */
Counter.decrement();
alert(Counter.value()); /* Alerts 1 */
/* Тут много чего поменялось. В предыдущем примере каждое замыкание имело свой собственный контекст исполнения (окружение). Здесь мы создаём единое окружение для трёх функций: Counter.increment, Counter.decrement, и Counter.value.

Единое окружение создаётся в теле анонимной функции, которая исполняется в момент описания. Это окружение содержит два приватных элемента: переменную privateCounter и функцию changeBy(val). Ни один из этих элементов не доступен напрямую, за пределами этой самой анонимной функции. Вместо этого они могут и должны использоваться тремя публичными функциями, которые возвращаются анонимным блоком кода (anonymous wrapper), выполняемым в той же анонимной функции.

Эти три публичные функции являются замыканиями, использующими общий контекст исполнения (окружение). Благодаря механизму lexical scoping в Javascript, все они имеют доступ к переменной privateCounter и функции changeBy.

Заметьте, мы описываем анонимную функцию, создающую счётчик, и тут же запускаем её, присваивая результат исполнения переменной Counter. Но мы также можем не запускать эту функцию сразу, а сохранить её в отдельной переменной, чтобы использовать для дальнейшего создания нескольких счётчиков вот так: */

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
alert(Counter1.value()); /* Alerts 0 */
Counter1.increment();
Counter1.increment();
alert(Counter1.value()); /* Alerts 2 */
Counter1.decrement();
alert(Counter1.value()); /* Alerts 1 */
alert(Counter2.value()); /* Alerts 0 */

/* Заметьте, что счётчики работают независимо друг от друга. Это происходит потому, что у каждого из них в момент создания функцией makeCounter() также создавался свой отдельный контекст исполнения (окружение). То есть приватная переменная privateCounter в каждом из счётчиков это действительно отдельная, самостоятельная переменная.

Используя замыкания подобным образом, вы получаете ряд преимуществ, обычно ассоциируемых с объектно-ориентированным программированием, таких как изоляция и инкапсуляция. */
