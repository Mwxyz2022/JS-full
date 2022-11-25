// 1. Функции  на действие:
// input: number
// output: number
// 2. Экспортируемая ф-я compose:
//    воспользуемся приемом каррирования:
//    [ соберем вход. фу-и в масив ] =>
//    num вход =>
//    CB  иттер масив с ф-ми с помощью reduce
//    передаем значение из предыдущей фу-и в следующую ф-ю
//    acc начал  = num вход
// 3. объявим нов фун =  compose( фун-и на действия )
//    * Вызовим фун и передадим ей вход знач..

const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;

// export
export const compose =
  (...funcs) =>
  value =>
    funcs.reduce((acc, func) => func(acc), value);

// const doEverything = compose(add2, square, half)(3);
// console.log(doEverything);

// test Data
const doEverything = compose(add2, square, half);
console.log(doEverything(3));
console.log(doEverything(10));
console.log(doEverything(-5));
