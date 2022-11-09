//    1. Создать экспортируемый класс Wallet c возможностью:
//        * getBalance() -вернуть баланс
//        * deposit() - увиличения на величину прин. арг.
//        * withdraw() - у меньшение на величину прин. арг. ели больше вернуть строку.
//
//      code
//

export class Wallet {
  _balance = 0;

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    amount <= this._balance ? (this._balance -= amount) : console.log(`No enough funds`);
  }
}

// datatest

const wallet1 = new Wallet();
console.log(wallet1);

wallet1.deposit(1000);
console.log(wallet1);

console.log(wallet1.getBalance());

wallet1.withdraw(800);

console.log(wallet1.getBalance());

wallet1.withdraw(800);

console.log(wallet1.getBalance());
