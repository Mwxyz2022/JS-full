// input: number;
// output: { methods}

//    1. фу-я  (принимает число)
//    2.  описываем объект  с методами:
//        add +
//        subtract -
//        mult *
//        div /
//        result - возвращает результат
//
// (! в условии не сказано что фу-я должна Экспортироваться )
export const calc = initialValue => {
  let result = initialValue;

  const calculator = {
    add(number) {
      result += number;
      return this;
    },
    subtract(number) {
      result -= number;
      return this;
    },
    mult(number) {
      result *= number;
      return this;
    },
    div(number) {
      result /= number;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};

// datatest
console.log(calc(10).add(12).div(2).subtract(1).mult(10).result());
console.log(calc(12).result());
console.log(calc(0).div(0).result());
console.log(calc(null).div(null).result());
console.log(calc(100).div(4).result());
console.log(calc(null).add(4).result());
console.log(calc(1000).mult(4).result());
console.log(calc(-2).mult(4).result());
console.log(calc(-2).add(4).result());
