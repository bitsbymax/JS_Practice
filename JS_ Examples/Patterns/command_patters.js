/**
 *
 * ПАТТЕРН КОМАНДА
 *
 Смысл: отделить объект-источник запроса от объекта, принимающего и выполняющего эти запросы.
 Паттерн КОМАНДА — это поведенческий паттерн проектирования, который превращает запросы в объекты, позволяя передавать
 их как аргументы при вызове методов, ставить запросы в очередь, логировать их, а также поддерживать отмену операций.
 Убирает прямую зависимость между объектами, вызывающими операции, и объектами, которые их непосредственно выполняют.
 Позволяет реализовать простую отмену и повтор операций.
 Позволяет реализовать отложенный запуск операций.
 Позволяет собирать сложные команды из простых.
 Реализует принцип открытости/закрытости.
 */


 class Computer { // Это Receiver - выполняет реализацию, основную работу.
  constructor() {
      console.log('Computer created')
  }

  start() {
      console.log('Computer (receiver): start!')
  }
  stop() {
      console.log('Computer (receiver): stop!')
  }
  reset() {
      console.log('Computer (receiver): reset!')
  }
}



class Invoker { // Отправитель, инициатор
  command;
  constructor() {
      console.log('Invoker created')
  }

  SetCommand(command) { // определяем какая команда будет выполняться при запуске Execute()
      this.command = command
  }
}




class Command { // это интерфейс для всех команд, обеспечивает единый интерфейс - Execute(), Undo()
  constructor() {
      if (this.constructor.name === 'Command') {
          throw new Error(`${this.constructor.name}: can not create instance of interface`);
      }
  }

  Execute() {
      throw new Error(`Не описан метод Execute() в классе ${this.constructor.name}`);
  }
  Undo() { // отмена действия
      throw new Error(`Не описан метод Execute() в классе ${this.constructor.name}`);
  }
}

class CommandsQueue extends Command { // набор команд, создает очередь, можно указать любые команды в любом количестве.
  constructor(receiver, ...commands) { // первый аргумент - receiver, последующие аргументы - команды.
      super();
      this.commands = commands;
      this.receiver = receiver;
  }
  Execute() {
      console.log('IT IS CommandsQueue:');
      for (let command of this.commands) {
          command.Execute(this.receiver);
      }
  }
  Undo() {
      console.log('IT IS CommandsQueue UNDO:');
      for (let command of this.commands) {
          command.Undo(this.receiver);
      }
  }
}

class StartCommand extends Command { // конкретная команда
  constructor(receiver, state) {
      super()
      this.receiver = receiver
      console.log('StartCommand created')
  }

  Execute() {
      console.log('StartCommand Execute')
      this.receiver.start();
  }
  Undo() {
      console.log('StartCommand undo')
      this.receiver.stop();
  }
}
class StopCommand extends Command { // конкретная команда
  constructor(receiver, state) {
      super()
      this.receiver = receiver
      console.log('StopCommand created')
  }

  Execute() {
      console.log('StopCommand Execute')
      this.receiver.stop();
  }
  Undo() {
      console.log('StopCommand undo')
      this.receiver.start();
  }
}
class ResetCommand extends Command { // конкретная команда
  constructor(receiver, state) {
      super()
      this.receiver = receiver
      console.log('ResetCommand created')
  }

  Execute() {
      console.log('ResetCommand Execute')
      this.receiver.reset();
  }
  Undo() {
      console.log('ResetCommand undo: отмена невозможна');
  }
}



  let invoker = new Invoker() // передает команду клиента в receiver
  let receiver = new Computer() // выполняет какую-то полезную работу, например запускает компьютер
  let start = new StartCommand(receiver);
  let stop = new StopCommand(receiver);
  let reset = new ResetCommand(receiver);

  // Вот это все можно обернуть в класс Client (решает что и когда выполнять.)
  invoker.SetCommand(start); // клиент указывает invoker какую команду выполнить
  invoker.command.Execute(); // выполняем команду, глобальная точка доступа (несколько клиентов могут запускать выполнение)
  invoker.SetCommand(stop);
  invoker.command.Execute();
  invoker.command.Undo();
  invoker.SetCommand(reset);
  invoker.command.Execute();
  invoker.command.Undo();

  invoker.SetCommand(new CommandsQueue(receiver, start, reset));
  invoker.command.Execute();
  invoker.command.Undo();






/**
Паттерн КОМАНДА: УКОРОЧЕННАЯ ВЕРСИЯ.
В этой версии классы команд не создаются, а сразу в setCommand передается функция из receiver
При таком подходе метод Undo() невозможно реализовать (или возможно, но код с запахом).
*/


class Computer { // Это Receiver - выполняет реализацию, основную работу.
  constructor() {
      console.log('Computer created')
  }

  start() {
      console.log('Computer (receiver): start!')
  }
  stop() {
      console.log('Computer (receiver): stop!')
  }
  reset() {
      console.log('Computer (receiver): reset!')
  }
}



class Invoker { // Отправитель, инициатор
  constructor() {
      console.log('Invoker created')
  }

  SetCommand(...command) { // определяем какая команда будет выполняться при запуске Execute()
      this.commands = command
  }
  Execute() {
      for (let command of this.commands) {
          command();
      }
  }
}



  /* let invoker = new Invoker(); // передает команду клиента в receiver
  let receiver = new Computer(); // выполняет какую-то полезную работу, например запускает компьютер */

  // Вот это все можно обернуть в класс Client (решает что и когда выполнять.)
  invoker.SetCommand(receiver.start); // клиент указывает invoker какую команду выполнить
  invoker.Execute(); // выполняем команду, глобальная точка доступа (несколько клиентов могут запускать выполнение)
  invoker.SetCommand(receiver.stop);
  invoker.Execute();
  invoker.SetCommand(receiver.reset);
  invoker.Execute();

  invoker.SetCommand(receiver.start, receiver.reset); // можно передавать сколько угодно команд, все выполнятся.
  invoker.Execute();