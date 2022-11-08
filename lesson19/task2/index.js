// input:{}
// output:[ keys]
//
//    1.  Экспортируемая фу-я
//    2.  Возвращать только ключи, (не методы!)
//
//      Object
//
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 22,
  sayHi() {
    console.log(`Hello! I'm ${this.firstName} ${this.lastName}`);
  },
};
//      code
//
// function getOwnProps(obj) {
//   const props = [];

//   for (const prop in obj) {
//     if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
//       props.push(prop);
//     }
//   }
//   return props;
// }

// refactoring

export function getOwnProps(obj) {
  return Object.keys(obj).filter(
    prop => obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function',
  );
}

console.log(getOwnProps(user));
