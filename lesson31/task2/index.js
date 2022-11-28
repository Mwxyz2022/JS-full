// input:  num
// output: num

export const asyncCalculator = num =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 500);
  })
    .then(
      value =>
        new Promise(resolve => {
          setTimeout(() => {
            const result = value ** 2;
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 500);
        }),
    )
    .then(value => {
      const doubledRes = value * 2;
      console.log(`Doubled value: ${doubledRes}`);
      return doubledRes;
    });

asyncCalculator(5)
  .then(value => {
    console.log(value);
    return value + 55;
  })
  .then(value => console.log(value));
