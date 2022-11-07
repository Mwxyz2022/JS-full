// input: number
// output: number

//    1.  Экспортируемая фу-я
//    2.  Принемает Любое количество Аргументов
//    3.  Возвращает сумму свадратов всех аргументов

export function sumOfSquares() {
  return [...arguments].reduce((acc, num) => {
    return acc + num * num;
  }, 0);
}
console.log(sumOfSquares(2, 4, 3));
