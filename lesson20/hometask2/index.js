/* eslint-disable max-classes-per-file */

//      1. Создать класс User модификация полей - закрыта
//      2. Создать класс UserRepository модификация полей - закрыта
//         методы:
//                * getUserNames -  получить имя пользователей
//                * getUserIds - массив Id
//                * getUserNameById(id) => name
// (!!!!) В Условии не указано, что конструкторы должны экспортироваться из файла
export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this.users.map(element => element.name);
  }

  getUserIds() {
    return this.users.map(element => element.id);
  }

  getUserNameById(value) {
    return this.users.find(user => user.id === value).name;
  }
}

// examples
const user1 = new User('1', 'Tom', 'session-id-1');
console.log(user1);
//  получить свойства можем

console.log(user1.id); // === '1'
console.log(user1.name); //  === 'Tom'
console.log(user1.sessionId); // === 'session-id'

//  но изменить эти свойства нельзя
// user1.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user1.name); // === 'Tom' - но изменение проигнорировано, так как setter отсутствует

const user2 = new User('2', 'Bob', 'session-id-2');
const user3 = new User('3', 'John', 'session-id-3');
const user4 = new User('4', 'Dinara', 'session-id-4');
const user5 = new User('5', 'Serj', 'session-id-5');
const user6 = new User('6', 'Senya', 'session-id-6');

//
//
const users = new UserRepository([user1, user2, user3, user4, user5, user6]);
console.log(users);
console.log(users.getUserNames());
console.log(users.getUserIds());
console.log(users.getUserNameById('5'));

console.log(users.getUserNameById('2'));
