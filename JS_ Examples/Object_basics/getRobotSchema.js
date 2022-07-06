/* Вночі у головного інженера хтось поцупив зі столу креслення. Тепер ми не знаємо, 
які дані потрібні, щоб роботи працювали коректно. Пропоную зловити одного робота, 
який зараз прибирає у коридорі, підключитися до його терміналу і дізнатися, які 
поля нам потрібні для нових роботів.

Створи функцію getRobotSchema, яка приймає об'єкт robot і повертає його схему - 
об'єкт з тими саме ключами, а як значення використай типи даних.

Приклад:

getRobotSchema(robot) === {
  version: 'number',
  name: 'string',
  released: 'boolean',
  author: 'object',
} */
const robot = {
  version: 16,
  name: 'Cleaner 3000',
  released: true,
  creator: { name: 'Vlad' },
};

function getRobotSchema(robot) {
  const result = robot;

  for (const i in robot) {   // i: "version" при першій ітерації, "name" при другій
    result[i] = typeof(robot[i]);  // в ключ version присвоюємо значення, 
  }   // яке поверне typeof при обрабці значення ключа version (16 при першій ітерації) об"єкта robot
  return result;                   // !!! robot - об'єкт, [i] - version, але robot[i] = 16 !!!
}


//----------------Розв'язок ментора!!!-----------------
debugger
function getRobotSchema(robot) {
  const schema = {}; // {version: "number"} після пертшої ітерації

  for (const key in robot) {
    schema[key] = typeof robot[key];  // в [key] попадає "version", таким чином
  }  // для інтерпритатора запис виглядає schema["version"], що створює новий ключ version в об"єкті schema
    // і записує в нього значення, яке поверне typeof при обрабці значення ключа version (16 при першій ітерації) об"єкта robot
  return schema;
}
console.log(getRobotSchema(robot))