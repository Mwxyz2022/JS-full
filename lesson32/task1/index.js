const getValueWithDelay = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(undefined, 1000);
const asyncNum3 = getValueWithDelay('4', 1000);
const asyncNum4 = getValueWithDelay(34, 1000);

// input: [el,el,el]
// output: number
//
// 1. получаем массив
//    * фильтруем
//    * возвращаем суму всех эл.

const getSum = numbers =>
  numbers.filter(value => !isNaN(value)).reduce((acc, num) => acc + Number(num), 0);

// input: promises value/ (el,el,el...)
// output: resolve => num / reject => errror
//
// 0. (экспортируемая!)фу-я считаем сума всех промисов (ресолв!)
// 1. создаем промисАлл Кладем в него массив с промисами из Входа.
// 2. пописываемся .then и прокидываем массив в ф-ю getSum
// 3. проверка на ошибку!!!
// export
const asyncSum = (...asyncNumbers) => {
  console.log(asyncNumbers);
  return Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error(`Can't calculate`)));
};

asyncSum(asyncNum1, asyncNum2, asyncNum3, asyncNum4).then(result => console.log(result));

// asyncSum(asyncNum1, asyncNum2, Promise.reject(new Error('error')), asyncNum4).then(result =>
//   console.log(result),
// );
