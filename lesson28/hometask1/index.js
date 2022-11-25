// input: Date
// output: obj.methods()

//    1. фу-я принемает дату
//      * копирует вход дату
//    2. создаем объект:
//      * добавляем методы:
//        ** добавления к дате
//        ** отнимаем от даты
//        ** возвращаем дату
//    3. Возвращаем объект с методами

/// (!!! В условии не сказанно что функция должна экспортироваться )
//  code

export const shmoment = inpDate => {
  const copyDate = new Date(inpDate);
  const result = copyDate;

  const changeDate = {
    add(interval, value) {
      if (interval === 'years') result.setFullYear(result.getFullYear() + value);
      if (interval === 'months') result.setMonth(result.getMonth() + value);
      if (interval === 'days') result.setDate(result.getDate() + value);
      if (interval === 'hours') result.setHours(result.getHours() + value);
      if (interval === 'minutes') result.setMinutes(result.getMinutes() + value);
      if (interval === 'seconds') result.setSeconds(result.getSeconds() + value);
      if (interval === 'milliseconds') result.setMilliseconds(result.getMilliseconds() + value);

      return this;
    },
    subtract(interval, value) {
      if (interval === 'years') result.setFullYear(result.getFullYear() - value);
      if (interval === 'months') result.setMonth(result.getMonth() - value);
      if (interval === 'days') result.setDate(result.getDate() - value);
      if (interval === 'hours') result.setHours(result.getHours() - value);
      if (interval === 'minutes') result.setMinutes(result.getMinutes() - value);
      if (interval === 'seconds') result.setSeconds(result.getSeconds() - value);
      if (interval === 'milliseconds') result.setMilliseconds(result.getMilliseconds() - value);
      return this;
    },
    result() {
      return result;
    },
  };
  return changeDate;
};

// testdata

const testDate = new Date(2020, 0, 7, 17, 17, 17);
console.log(shmoment(testDate).add('minutes', 2).add('days', 8).subtract('years', 1).result());
console.log(shmoment(new Date(1992, 7, 20, 18, 32, 0)).subtract('years', 30).result());
console.log(shmoment(new Date(1992, 7, 20, 18, 32, 0)).add('minutes', 7000).result());
