// vehicle and ship
//
//  input:
//  output:
//
//    1.  Два Экспортируемых obj
//    2.  ship наследует все методы vehicle
//
//
//  === code
//

export const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

export const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    ship.move();
  },
  stopMachine() {
    ship.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

// datatest
//
vehicle.move();
vehicle.stop();
//
ship.startMachine();
ship.stopMachine();
