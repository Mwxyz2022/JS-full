// 1. форматер с настройками отображения часов и минут.
// 2. (Экспортируемая) фу-я  inp: Date out: UTC'hour:minute'

const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

// export
export const getGreenwichTime = date => formatter.format(date);

console.log(getGreenwichTime(new Date()));
