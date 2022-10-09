/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */
const user = {
  name: 'Sam',
};

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}
// function addPropertyV2(userData, userId) {
//   const resObj = Object.assign(userData, { id: userId });
//   return resObj;
// }

// function addPropertyV3(userData, userId) {
//   const resObj = Object.assign({}, { ...userData, id: userId });
//   return resObj;
// }

// function addPropertyV4(userData, userId) {
//   const userObj = { id: userId };
//   const resultObj = { ...userData, ...userObj };
//   return resultObj;
// }

// examples
console.log(user);

console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV2(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV3(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV4(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }

console.log(user);
