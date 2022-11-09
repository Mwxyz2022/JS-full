/* eslint-disable max-classes-per-file */
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHi() {
//     console.log(`Hi, I'am ${this.name}`);
//   }

//   requestNewPhoto() {
//     console.log(`New photo request was sent for ${this.name}`);
//   }

//   setAge(value) {
//     if (value < 0) {
//       return false;
//     }
//     this.age = value;
//     if (value >= 25) {
//       this.requestNewPhoto();
//     }
//     return value;
//   }
// }

// const user1 = new User('Tom', 27);

// console.log(user1);

class Vehicle {
  constructor(name, hasWheels) {
    this.hasWheels = hasWheels;
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, speed) {
    super(name, false);
    this.speed = speed;
  }

  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  }

  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

const ship1 = new Ship('Aurora', 200);
ship1.startMachine();

// console.log(ship1);
