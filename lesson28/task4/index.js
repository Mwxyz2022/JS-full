// compose(func1, func2, ...) =>

const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;

const compose =
  (...funcs) =>
  value =>
    funcs.reduce((acc, func) => func(acc), value);

// const doEverything = compose(add2, square, half)(3);
// console.log(doEverything);

const doEverything = compose(add2, square, half);
console.log(doEverything(3));
