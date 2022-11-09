//    1.  Классовый конструктор (экспортируемый)
//    2.  Принимает:
//        * name ;
//        * age;
//    3.  а также методы:
//        * sayHi():
//        * requestNewPhoto()
//        * setAge()
//    4.  Стат. метод:
//        * createEmpty()

//        Code
//
//
//
export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return new User('', null);
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }
    this.age = newAge;
    if (newAge >= 25) {
      this.requestNewPhoto();
    }
    return this.age;
  }
}

//    datatest
const user1 = new User('Bob', 28);
console.log(user1);

const user2 = User.createEmpty();
console.log(user2);

user2.name = 'Tom';
user2.age = 29;
console.log(user2);
user1.requestNewPhoto();
user2.requestNewPhoto();
