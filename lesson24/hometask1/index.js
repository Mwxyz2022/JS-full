//        1. Экспортируемая фу-я getDiff(startDate, endDate)
//          * переведем даты в timestamp  посчитаем разницу
//          * переведем в формат "_d _h _m _s"

const thisDayDate = new Date();
const dateLine = new Date(2022, 0, 1);

// export
export const getDiff = (startDate, endDate) => {
  const timeStampDiff = Math.abs(startDate - endDate);

  const paramForTime = {
    day: 86400000,
    hour: 3600000,
    min: 60000,
    sec: 1000,
  };

  const day = Math.trunc(timeStampDiff / paramForTime.day);
  const diffDay = day * paramForTime.day;

  const hours = Math.trunc((timeStampDiff - diffDay) / paramForTime.hour);
  const diffHour = diffDay + hours * paramForTime.hour;

  const min = Math.trunc((timeStampDiff - diffHour) / paramForTime.min);
  const diffMin = diffHour + min * paramForTime.min;

  const sec = Math.trunc((timeStampDiff - diffMin) / paramForTime.sec);

  return `${day}d ${hours}h ${min}m ${sec}s`;
};

console.log(getDiff(dateLine, thisDayDate));
