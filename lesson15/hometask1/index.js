//  input: none
//  output: {obj - methods}

//  1.   Создать экспортируемую фу-ю.
//  2.   Независимая память по умол. 0
//  3.   Вернуть объект c методами.
//
export const createCalculator = () => {
  let memory = 0;

  const add = numPlus => {
    memory += numPlus;
  };

  const decrease = numTake => {
    memory -= numTake;
  };

  const reset = () => {
    memory = 0;
  };

  const getMemo = () => {
    return memory;
  };

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

// testdata
// const calc1 = createCalculator();
// const calc2 = createCalculator();

// console.log(calc1.getMemo());
// calc1.add(100);
// calc1.add(156);
// console.log(calc1.getMemo());
// calc1.decrease(36);
// console.log(calc1.getMemo());
// //

// calc2.add(15);
// console.log(calc2.getMemo());
// calc2.add(NaN);
// console.log(calc2.getMemo());
// calc2.reset();
// console.log(calc2.getMemo());
// calc2.decrease(15);
// console.log(calc2.getMemo());
// //
// console.log(calc1.getMemo());
// console.log(calc2.getMemo());
//
