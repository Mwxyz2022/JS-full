// const today = new Date();
// const date1 = new Date('December 17, 1995 03:24:00');
// const date2 = new Date(949363322003);
// const date3 = new Date(1995, 11, 17, 3, 24, 0);

// console.log('today : new Date()=>', today, typeof today);
// console.log(`date1 : new Date('December 17, 1995 03:24:00')=>`, date1, typeof date1);
// console.log(`date2 : new Date(949363322003)=>`, date2, typeof date2);
// console.log(`date3 : new Date(1995, 11, 17, 3, 24, 0)=>`, date3, typeof date3);

// // today : new Date()=> Fri Nov 18 2022 18:27:03 GMT+0200 (Восточная Европа, стандартное время) object
// //  date1 : new Date('December 17, 1995 03:24:00')=> Sun Dec 17 1995 03:24:00 GMT+0200 (Восточная Европа, стандартное время) object
// //  date2 : new Date(949363322003)=> Tue Feb 01 2000 02:02:02 GMT+0200 (Восточная Европа, стандартное время) object
// //  date3 : new Date(1995, 11, 17, 3, 24, 0)=> Sun Dec 17 1995 03:24:00 GMT+0200 (Восточная Европа, стандартное время) object

// const timestamp = new Date(0);
// console.log(timestamp);

// // {obj}
// // Thu Jan 01 1970 03:00:00 GMT+0300 (Восточная Европа, стандартное время)

// /// / -= Текущий - timestamp =-

// const timestampNow = Date.now();

// console.log(timestampNow);

// //
// /// ///// -= прошлое =-
// //
// const oldDate = new Date(1900, 2);
// console.log(oldDate);
// console.log(oldDate.getTime());
// // Thu Mar 01 1900 00:00:00 GMT+0202 (Восточная Европа, стандартное время)
// //  -2203898524000

// //
// // ///// Свойства {new Date()}
// //

// const dateProperties = new Date();

// console.log(dateProperties);
// // Fri Nov 18 2022 19:20:56 GMT+0200 (Восточная Европа, стандартное время)

// console.log(dateProperties.getTimezoneOffset());
// // -120  => сколько Минут от Гринвича

// console.log(dateProperties.getDate());
// // 18

// console.log(dateProperties.getDay());
// // 5

// console.log(dateProperties.getFullYear());
// // 2022

// console.log(dateProperties.getHours());
// // 19

// console.log(dateProperties.getMonth());
// // 10

// console.log(dateProperties.getTime());
// // 1668794957280

// console.log(dateProperties.setFullYear(2029));
// // 1889719859696

// console.log(new Date(1889719859696));
// // Sun Nov 18 2029 20:10:59 GMT+0200 (Восточная Европа, стандартное время)

// console.log(dateProperties.setHours(72));
// // 1889907208258

// console.log(new Date(1889907208258));
// // Wed Nov 21 2029 00:13:28 GMT+0200 (Восточная Европа, стандартное время)
//
//
//

/// /// GetWEEK-dAY

// const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// const getDayOfWeek = (date, days) => {
//   const day = new Date(date).getDate();
//   const dateInFuture = new Date(date).setDate(day + days);

//   return weekDays[new Date(dateInFuture).getDay()];
// };

// const result = getDayOfWeek(new Date(2022, 0, 1), 14);

// console.log(result);

/// =============================================

// const dateForTheTest = new Date();

// // Date to String
// console.log(dateForTheTest.toDateString());
// // 'Fri Nov 18 2022'

// // in Grinvich Now
// console.log(dateForTheTest.toGMTString());
// // Fri, 18 Nov 2022 19:25:38 GMT

//= ===============================================

// const formatter = new Intl.DateTimeFormat('en', {
//   timeZone: 'UTC',
//   hour: '2-digit',
//   minute: '2-digit',
//   hour12: false,
// });

// const getTime = date => formatter.format(date);

// console.log(getTime(new Date()));
// // 21:33

//= ==========================================

console.log(new Date(Date.UTC(2022, 0, 1, 13, 30)));
