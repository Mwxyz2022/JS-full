// Complete the function so that it finds the average
// of the three scores passed to it and returns
// the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100.
// Theres is no need to check for negative
// values or values greater than 100.

function getGrade(s1, s2, s3) {
  const getMean = (s1 + s2 + s3) / 3;
  if (getMean <= 100 && getMean >= 90) return 'A';
  if (getMean < 90 && getMean >= 80) return 'B';
  if (getMean < 80 && getMean >= 70) return 'C';
  if (getMean < 70 && getMean >= 60) return 'D';
  if (getMean < 60 && getMean >= 0) return 'F';
}

console.log(getGrade(80, 99, 99));
