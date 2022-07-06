/* Створи клас BankAccount, конструктор якого приймає наступні початкові дані: ім'я клієнта name та початковий баланс банківського рахунку money. Також в класі мають бути наступні методи:

getInfo - повертає рядок з інформацією про клієнта в форматі з прикладу.
addMoney - приймає суму amount, на яку потрібно збільшити баланс, та рядок info про операцію
withdrawMoney - приймає суму amount, на яку потрібно зменшити баланс, та рядок info про операцію
getAccountHistory - повертає історію операцій по рахунку.
Приклад: 
const dmytro = new BankAccount('Dmytro', 1000);
const pavel = new BankAccount('Pavel', 400);

dmytro.getInfo(); // 'Name: Dmytro, Amount: 1000'

dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // 'Name: Dmytro, Amount: 2500'

dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getInfo(); // 'Name: Dmytro, Amount: 2000'

dmytro.getAccountHistory();
// ['Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // 'Name: Pavel, Amount: 400'
pavel.getAccountHistory(); // ['Initial: 400']
*/
class BankAccount {
  /**
   * @param {string} name
   * @param {number} money
   */
  constructor(name, money) {
    this.name = name;
    this.money = money;
    this.accHistory = [];
    this.accHistory.push(`Initial: ${money}`);
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.money}`;
  }

  addMoney(amount, info) {
    this.money += amount;
    this.accHistory.push(`${info}: ${amount}`);
  }

  withdrawMoney(amount, info) {
    this.money -= amount;
    this.accHistory.push(`${info}: -${amount}`);
  }

  getAccountHistory() {
    return this.accHistory;
  }
}
