// 1.экспортируемая фу-я dayOfWeek(date,days)
//   * определить дату,
//   * добавить количество дней
//   * вернуть итоговое обозначение дня недели 'Str'

const testDay = new Date(2022, 6, 21);

export const dayOfWeek = (date, days) => {
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

  const day = new Date(date).getDate();
  const futureDay = new Date(date).setDate(day + days);
  return weekDays[new Date(futureDay).getDay()];
};

console.log(dayOfWeek(testDay, 6));
console.log(dayOfWeek(new Date(2022, 10, 19), 5));
console.log(dayOfWeek(new Date(1850, 10, 19), 100000));
console.log(dayOfWeek(new Date(3850, 10, 19), -14));
