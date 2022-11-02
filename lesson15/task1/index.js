//  input: none
//  output: number
//
//
//  1.создать фу-ю (экспортируемую)
//  2.Не зависимые счетчики с памятью, от 0 ...

export const makeCounter = () => {
  let count = 0;

  return function () {
    return count++;
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

// datatest

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
console.log(counter2());
