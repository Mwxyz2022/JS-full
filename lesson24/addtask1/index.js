// input:  [{ name: 'Tom', birthDate: '01/15/2010' },
// { name: 'Ben', birthDate: '01/17/2008' },
// { name: 'Sam', birthDate: '03/15/2010' }]

// output : { Jan: ['Tom', 'Ben'], Mar: ['Sam'] }

//      1.
//
//
//
//
//

const students = [
  { name: 'Sam', birthDate: '03/15/2010' },
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Den', birthDate: '05/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
];
console.log(students);
// const studentsBirthDays = students => {
//   const sortStudents = students.slice().sort(
//     (a, b) => a.birthDate.split('/')[0] - b.birthDate.split('/')[0],
//   );
//   const sortBithDay = {};
//   const months = {
//     0: 'Jan',
//     1: 'Feb',
//     2: 'Mar',
//     3: 'Apr',
//     4: 'May',
//     5: 'Jun',
//     6: 'Jul',
//     7: 'Aug',
//     8: 'Sep',
//     9: 'Oct',
//     10: 'Nov',
//     11: 'Dec',
//   };

//   const getMonthBith = el => {
//     return el.birthDate.split('/')[0] - 1;
//   };

//   sortStudents.forEach(el => {
//     const getMonth = months[getMonthBith(el)];

//     if (sortBithDay[getMonth] === undefined) {
//       sortBithDay[getMonth] = [el.name];
//     } else {
//       sortBithDay[getMonth].push(el.name);
//     }
//   });

//   return sortBithDay;
// };

/// // Refactoring

const monthsList = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

const studentsBirthDays = students => {
  return students
    .slice()
    .sort((a, b) => new Date(a.birthDate) - new Date(b.birthDate))
    .reduce((acc, el) => {
      const month = new Date(el.birthDate).getMonth();
      const key = monthsList[month];

      if (Object.keys(acc).includes(key)) {
        const copiedObj = { ...acc };
        copiedObj[key].push(el.name);
        return copiedObj;
      }

      return { ...acc, [key]: [el.name] };
    }, {});
};

console.log(studentsBirthDays(students));
console.log(students);
