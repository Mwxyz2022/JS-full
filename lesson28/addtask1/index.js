// const numFibo = [
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765,
// ];

// input: num
// output: num

// 1. (Экспортируемая) ф-я возвращает макс. число фибоначи к входящему числу
//     * создадим массив начальных чисел Фибоначи
// 2. проверка вход на уже имеющейся в массиве
// 3. если нет в массиве:
//     * иттерируем по массиву начиная с последнего
//      ** если последнее число массива = вход  => это макс число фибоначи
//      ** если < num  то добавляем в масссив суму последнего и предпоследнего
//      ** если > num то макс чило Фиб является предпоследнее массива

export const maxFibonacci = num => {
  const res = [0, 1, 1];
  let numFibo = null;
  if (res.includes(num)) {
    numFibo = num;
  }
  if (!res.includes(num)) {
    for (let i = 2; i < res.length; i += 1) {
      if (res[i] === num) return num;
      if (res[i] < num) {
        res.push(res[res.length - 2] + res[res.length - 1]);
      }
      if (res[i] > num) return res[res.length - 2];
    }
  }
  return numFibo;
};

// testdate
console.log(maxFibonacci(0));
console.log(maxFibonacci(1));
console.log(maxFibonacci(2));
console.log(maxFibonacci(3));
console.log(maxFibonacci(15));
console.log(maxFibonacci(25));
console.log(maxFibonacci(380));
console.log(maxFibonacci(610));
