// input: count, timeInterval
// output: undefined

//    1. (экспортируемая фу-я) (количество вызовов, интервал)
//    2. создаем пер с счетчиком => количество раз
//      * вызываем первый раз
//    3. объявляем пер для метки setInterval
//        * проверка на счетчик: если > 0 консолим
//                                    = 0 чистим интервал
//        * период устанавливаем из 2го аргумента вход в фу-ю

// code

// export
export const pinger = (count, period) => {
  let i = count;
  console.log('Ping');

  const interval = setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};

// examples
pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(7, 150); // makes 7 writes with 1500 ms interval
// pinger(20, 1000);
pinger(20, 1);
pinger(20, -1000);
