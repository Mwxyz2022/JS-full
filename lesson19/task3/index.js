// constructor
//
// input: arguments
// output:{obj}
//
//    1.  Фу-я - конструктор (экспортируемая)
//    2.  должен иметь методы:
//

// export
export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (newAge) {
  if (newAge < 0) {
    return false;
  }

  if (newAge >= 25) {
    this.age = newAge;
    console.log(`New photo request was sent for ${this.name}`);
  }

  this.age = newAge;
  return this.age;
};

//    datatest

const user1 = new User('John', 23);
console.log(user1);
user1.requestNewPhoto();
user1.sayHi();
user1.setAge(24);
console.log(user1);
user1.setAge(-1);
console.log(user1);
user1.setAge(0.12);
console.log(user1);
user1.setAge(30);
console.log(user1);
user1.setAge(32);
