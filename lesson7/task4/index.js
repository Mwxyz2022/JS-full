const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .filter(name => !studentsForRetake.includes(name))
    .map(name => 'Good job, ' + name);
// examples
const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest1 = ['John', 'Mike'];
console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1)); // ===> ['Good job, Den', 'Good job, Ann']

// const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2)); // ===> []

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
//   allStudentsList
//     .filter(name => !studentsForRetake.includes(name))
//     .filter(name => typeof name === 'string')
//     .map(name => `Good job, ${name}`);

// const allStudTest3 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest3 = ['John', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest3, retakeStudTest3)); // ===> ['Good job, Den', 'Good job, Ann']

// const allStudTest4 = ['Den', 'John', 'Ann', 'Mike', null, undefined, 4];
// const retakeStudTest4 = ['John', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest4, retakeStudTest4)); // ===> ['Good job, Den', 'Good job, Ann']
