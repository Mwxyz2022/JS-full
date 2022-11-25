// 1. форматер с настройками отображения часов и минут.
// 2. (Экспортируемая) фу-я  inp: Date out: UTC'hour:minute'

const formatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

// export
// export const getGreenwichTime = date => formatter.format(date);

// console.log(getGreenwichTime(new Date()));

//= =========================================

const getGreenwichTime = date => formatter.format(date);

const dat = getGreenwichTime(new Date());
console.log(dat.split(',').join(''));
