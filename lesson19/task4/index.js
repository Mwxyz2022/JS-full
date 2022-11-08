//
//
// input:
// output:
//
//      1. Экспортируемый объект
//      2. getter - собирает fullName
//      3. setter - разбирает fullName
//
//
const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(allName) {
    const [firstName, lastName] = allName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
export default user;

//   testdata

user.fullName = 'Tom Hardy';
console.log(user.firstName);
user.fullName = 'Bob Marley';
console.log(user.firstName);
console.log(user.fullName);
