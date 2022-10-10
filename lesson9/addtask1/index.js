/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. 
В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, 
 * поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

function addPropertyV2(obj, key, value) {
  const ObjPlus = {};
  ObjPlus[key] = value;
  return Object.assign(obj, ObjPlus);
}

function addPropertyV3(obj, key, value) {
  const resObj = Object.assign({}, obj, { [key]: value });
  return resObj;
}

function addPropertyV4(obj, key, value) {
  const resObj = Object.assign({}, { ...obj, [key]: value });
  return resObj;
}

// examples
const transaction = {
  value: 170,
};

console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
