// input: f()
// output f()
//
//  1. Экспортируемая ф-я
//  2. Возвращает ф-ю - обертку.
//      * 1м арг. - ф-я.
//      * 2м арг. - задержка выполнения.

export function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(`Hi, I'am ${this.name}!`);
//   },
//   getName() {
//     console.log(this.name);
//   },
// };

// const deferredHi = defer(user.sayHi, 5000);

// deferredHi.call({ name: 'Bob' });

// const defGetname = defer(user.getName, 7000);

// defGetname.call({ name: 'Vlad' });
